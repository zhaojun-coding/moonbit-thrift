"""Generate Python bindings with Apache Thrift and exercise their actual codecs."""
from pathlib import Path
import sys,os,json,subprocess,tempfile,importlib,hashlib,uuid,math
from importlib.metadata import version
from thrift.Thrift import TType
from thrift.transport.TTransport import TMemoryBuffer
from thrift.protocol.TBinaryProtocol import TBinaryProtocol
from thrift.protocol.TCompactProtocol import TCompactProtocol
sys.stdin.reconfigure(encoding='utf-8');sys.stdout.reconfigure(encoding='utf-8')
assert version('thrift')=='0.24.0'

def from_json(tag,spec,value):
    if value is None:return None
    if tag==TType.STRUCT:
        cls=spec[0];fields={f[2]:f for f in cls.thrift_spec if f}
        return cls(**{name:from_json(fields[name][1],fields[name][3],v) for name,v in value.items()})
    if tag in (TType.BYTE,TType.I16,TType.I32,TType.I64):return int(value)
    if tag==TType.DOUBLE:return float(value)
    if tag==TType.BOOL:return bool(value)
    if tag==TType.STRING:return bytes.fromhex(value['$binary']) if spec=='BINARY' else value
    if tag==TType.UUID:return uuid.UUID(value)
    if tag in (TType.LIST,TType.SET):
        values=[from_json(spec[0],spec[1],v) for v in value]
        return set(values) if tag==TType.SET else values
    if tag==TType.MAP:return {from_json(spec[0],spec[1],k):from_json(spec[2],spec[3],v) for k,v in value}
    raise ValueError('unsupported oracle type '+str(tag))

def to_json(tag,spec,value):
    if value is None:return None
    if tag==TType.STRUCT:
        return {f[2]:to_json(f[1],f[3],getattr(value,f[2])) for f in value.thrift_spec if f and getattr(value,f[2]) is not None}
    if tag==TType.I64:return str(value)
    if tag==TType.DOUBLE and not math.isfinite(value):return 'NaN' if math.isnan(value) else 'Infinity' if value>0 else '-Infinity'
    if tag==TType.STRING:return {'$binary':value.hex()} if isinstance(value,bytes) else value
    if tag==TType.UUID:return str(value)
    if tag in (TType.LIST,TType.SET):
        values=[to_json(spec[0],spec[1],v) for v in value]
        return sorted(values,key=lambda x:json.dumps(x,sort_keys=True)) if tag==TType.SET else values
    if tag==TType.MAP:return sorted([[to_json(spec[0],spec[1],k),to_json(spec[2],spec[3],v)] for k,v in value.items()],key=lambda x:json.dumps(x[0],sort_keys=True))
    return value

def codec(buffer,mode):return TCompactProtocol(buffer) if mode=='compact' else TBinaryProtocol(buffer,strictRead=mode!='legacy',strictWrite=mode!='legacy')

request=json.load(sys.stdin);compiler=Path(os.environ['THRIFT_COMPILER']).resolve();results=[]
with tempfile.TemporaryDirectory(prefix='moonbit-thrift-schema-oracle-') as tmp:
    parent=Path(tmp).resolve();generated=parent/'generated';generated.mkdir()
    for name,text in request['sources'].items():
        target=(parent/name).resolve()
        if not target.is_relative_to(parent):raise ValueError('unsafe fixture source')
        target.parent.mkdir(parents=True,exist_ok=True);target.write_text(text,encoding='utf-8',newline='\n')
    result=subprocess.run([str(compiler),'-r','--gen','py','-out',str(generated),str(parent/request['root'])],capture_output=True,text=True,encoding='utf-8',timeout=15)
    if result.returncode:raise RuntimeError(result.stdout+result.stderr)
    sys.path.insert(0,str(generated))
    for test in request['cases']:
        namespace,name=test['type'].rsplit('.',1);cls=getattr(importlib.import_module(namespace+'.ttypes'),name)
        try:
            obj=from_json(TType.STRUCT,(cls,cls.thrift_spec),test['value'])
            output=TMemoryBuffer();obj.write(codec(output,test['protocol']));encoded=output.getvalue()
            decoded=cls();decoded.read(codec(TMemoryBuffer(encoded),test['protocol']));decoded.validate()
            result={'ok':True,'hex':encoded.hex(),'value':to_json(TType.STRUCT,None,decoded)}
            if test.get('moonHex') is not None:
                moon=cls();moon.read(codec(TMemoryBuffer(bytes.fromhex(test['moonHex'])),test['protocol']));moon.validate()
                result['moonValue']=to_json(TType.STRUCT,None,moon)
            results.append(result)
        except Exception as error:results.append({'ok':False,'error':type(error).__name__+': '+str(error)})
json.dump({'runtime':'Apache Thrift Python '+version('thrift'),'compiler':subprocess.check_output([str(compiler),'--version'],text=True).strip(),'compilerSha256':hashlib.sha256(compiler.read_bytes()).hexdigest(),'results':results},sys.stdout,ensure_ascii=True,allow_nan=False)
