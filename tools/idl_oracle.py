"""Original adapter around an unmodified Apache compiler; never imports MoonBit."""
from pathlib import Path
import sys, os, json, subprocess, tempfile, hashlib, re, math
sys.stdin.reconfigure(encoding='utf-8')
sys.stdout.reconfigure(encoding='utf-8')

compiler = Path(os.environ['THRIFT_COMPILER']).resolve()
version = subprocess.check_output([str(compiler), '--version'], text=True).strip()

def descriptor(item, key='typeId', details='type'):
    return item.get(details, {'typeId': item[key]})

def normalize_value(value, desc, definitions):
    kind = desc['typeId']
    if kind == 'bool': return bool(value)
    if kind == 'double' and isinstance(value,float) and not math.isfinite(value):
        return 'NaN' if math.isnan(value) else 'Infinity' if value>0 else '-Infinity'
    if kind == 'i64': return str(value)
    if kind == 'binary': return {'$binary': value.encode('utf-8').hex()}
    if kind in ('list', 'set'):
        return [normalize_value(x, descriptor(desc,'elemTypeId','elemType'), definitions) for x in value]
    if kind == 'map':
        kt, vt = descriptor(desc,'keyTypeId','keyType'), descriptor(desc,'valueTypeId','valueType')
        entries = []
        for k,v in value.items():
            if kt['typeId'] in ('byte','i16','i32','i64','enum'): k=int(k)
            elif kt['typeId']=='double': k=float(k)
            elif kt['typeId']=='bool': k=k in ('true','1')
            entries.append([normalize_value(k,kt,definitions),normalize_value(v,vt,definitions)])
        return entries
    if kind in ('struct','exception'):
        fields={f['name']:f for f in definitions[desc['class']]['fields']}
        return {k:normalize_value(v,descriptor(fields[k]),definitions) for k,v in value.items()}
    return value

def normalize(root, modules):
    definitions={}
    for module in modules:
        for record in module['structs']:
            definitions[module['name']+'.'+record['name']]=record
            if module['name']==root['name']: definitions[record['name']]=record
    def fields(items):
        for field in items:
            field.pop('doc',None)
            if 'default' in field: field['default']=normalize_value(field['default'],descriptor(field),definitions)
    for enum in root['enums']:
        enum.pop('doc',None)
        for item in enum['members']: item.pop('doc',None);item.pop('annotations',None)
    for record in root['structs']: record.pop('doc',None);fields(record['fields'])
    for item in root['typedefs']: item.pop('doc',None)
    for const in root['constants']:
        const.pop('doc',None);const['value']=normalize_value(const['value'],descriptor(const),definitions)
    for service in root['services']:
        service.pop('doc',None)
        for function in service['functions']:
            function.pop('doc',None);fields(function['arguments']);fields(function['exceptions'])
    root.pop('doc',None)
    return root

requests=json.load(sys.stdin);results=[]
with tempfile.TemporaryDirectory(prefix='moonbit-thrift-idl-oracle-') as tmp:
    parent=Path(tmp).resolve()
    for i,request in enumerate(requests):
        folder=parent/str(i);folder.mkdir();out=folder/'generated';out.mkdir()
        for name,text in request['sources'].items():
            dest=(folder/name).resolve()
            if not dest.is_relative_to(folder): raise RuntimeError('unsafe fixture name')
            dest.parent.mkdir(parents=True,exist_ok=True);dest.write_text(text,encoding='utf-8',newline='\n')
        target=(folder/request.get('root','main.thrift')).resolve()
        if not target.is_relative_to(folder): raise RuntimeError('unsafe root fixture')
        try: run=subprocess.run([str(compiler),'-r','--gen','json','-out',str(out),str(target)],capture_output=True,text=True,encoding='utf-8',errors='replace',timeout=8)
        except subprocess.TimeoutExpired:
            results.append({'unavailable':'official compiler exceeded 8 seconds; process terminated by subprocess.run'})
            continue
        if run.returncode not in (0,1): raise RuntimeError('compiler process failure: '+str(run.returncode)+' '+run.stderr)
        if run.returncode:
            diagnostic=(run.stdout+run.stderr).replace(str(folder),'$FIXTURE').replace(folder.as_posix(),'$FIXTURE')
            if '[FAILURE:generation:' in diagnostic:
                check=subprocess.run([str(compiler),'-r','--gen','py','-out',str(out),str(target)],capture_output=True,text=True,encoding='utf-8',errors='replace',timeout=8)
                if check.returncode==0:
                    results.append({'ok':True,'descriptionAvailable':False,'jsonGeneratorFailure':diagnostic,'acceptanceOracle':'Apache py generator'})
                    continue
            results.append({'ok':False,'diagnostic':diagnostic})
        else:
            modules=[]
            for p in out.glob('*.json'):
                # Apache's JSON generator emits bare inf for overflowing doubles.
                # Preserve the value while making only non-string numeric tokens readable.
                raw=p.read_text(encoding='utf-8')
                raw=re.sub(r'("(?:\\.|[^"\\])*")|(?<![\w])(-?inf|nan)\b',lambda m:m.group(1) if m.group(1) is not None else {'inf':'Infinity','-inf':'-Infinity','nan':'NaN'}[m.group(2)],raw)
                try: modules.append(json.loads(raw))
                except Exception as error: raise RuntimeError(f'case {i}: {request}; emitted JSON: {p.read_text(encoding="utf-8")}') from error
            root=next(m for m in modules if m['name']==target.stem)
            results.append({'ok':True,'description':normalize(root,modules)})
json.dump({'version':version,'binarySha256':hashlib.sha256(compiler.read_bytes()).hexdigest(),'results':results},sys.stdout,ensure_ascii=True)
