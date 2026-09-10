"""Reproducible original fixtures evaluated by Apache Thrift, not by MoonBit.
Install tools/oracle-requirements.txt, then run this file from any directory.
"""
from pathlib import Path
import random
from importlib.metadata import version
from thrift.transport.TTransport import TMemoryBuffer, TFramedTransport
from thrift.protocol.TBinaryProtocol import TBinaryProtocol
from thrift.protocol.TCompactProtocol import TCompactProtocol
from thrift.Thrift import TType

assert version('thrift') == '0.22.0', 'Use the pinned oracle version'
ROOT=Path(__file__).resolve().parents[1]
R=random.Random(20260910)
T={'Bool':TType.BOOL,'Byte':TType.BYTE,'I16':TType.I16,'I32':TType.I32,'I64':TType.I64,'Double':TType.DOUBLE,'Binary':TType.STRING,'Struct':TType.STRUCT,'List':TType.LIST,'Set':TType.SET,'Map':TType.MAP}
def literal(b):return 'b"'+''.join('\\x%02x'%x for x in b)+'"'
def make(kind,depth=0):
 if kind=='Bool':return (kind,bool(R.randrange(2)))
 if kind in ['Byte','I16','I32','I64']:
  bits={'Byte':8,'I16':16,'I32':32,'I64':64}[kind];n=R.choice([-(1<<(bits-1)),(1<<(bits-1))-1,0,-1,1,R.randint(-100,100)])
  return kind,n
 if kind=='Double':return kind,R.choice([-0.0,1.5,-12.125,0.0,1e30,1e-30])
 if kind=='Binary':return kind,R.choice([b'',b'\x00\xff\xfe',bytes(R.randrange(256) for _ in range(17)),'中文🚀'.encode()])
 choices=list(T) if depth<3 else list(T)[:7]
 if kind=='Struct':
  ids=R.sample([-32768,-1,0,1,2,14,15,16,31,127,32767],R.randrange(5))
  return kind,[(i,make(R.choice(choices),depth+1)) for i in ids]
 if kind in ['List','Set']:
  k=R.choice(choices);return kind,(k,[make(k,depth+1) for _ in range(R.choice([0,1,2] if depth>1 else [0,1,2,14,15]))])
 k=R.choice(list(T)[:5]+['Binary']);v=R.choice(choices)
 return kind,(k,v,[(make(k,depth+1),make(v,depth+1)) for _ in range(R.randrange(4))])
def write(p,v):
 k,x=v
 if k in list(T)[:7]:getattr(p,'write'+k)(x)
 elif k=='Struct':
  p.writeStructBegin('fixture')
  for i,value in x:p.writeFieldBegin('field',T[value[0]],i);write(p,value);p.writeFieldEnd()
  p.writeFieldStop();p.writeStructEnd()
 elif k in ['List','Set']:
  element,values=x;getattr(p,'write'+k+'Begin')(T[element],len(values))
  for value in values:write(p,value)
  getattr(p,'write'+k+'End')()
 else:
  key,val,entries=x;p.writeMapBegin(T[key],T[val],len(entries))
  for a,b in entries:write(p,a);write(p,b)
  p.writeMapEnd()
def expr(v,compact=False):
 k,x=v;prefix='@thrift.'
 if k=='Binary':arg=literal(x)
 elif k=='Bool':arg=str(x).lower()
 elif k=='I64':arg=str(x)+'L'
 elif k in ['Byte','I16','I32','Double']:
  arg=repr(x)
  if k=='Double' and 'e' in arg and '.' not in arg.split('e')[0]:arg=arg.replace('e','.0e')
 elif k=='Struct':arg='['+','.join(f'({i},{expr(value,compact)})' for i,value in x)+']'
 elif k in ['List','Set']:
  element,values=x;arg=prefix+element+'Kind,['+','.join(expr(v,compact) for v in values)+']'
 else:
  key,val,entries=x
  arg=('None,None,' if compact and not entries else f'Some(@thrift.{key}Kind),Some(@thrift.{val}Kind),')+'['+','.join(f'({expr(a,compact)},{expr(b,compact)})' for a,b in entries)+']'
 return prefix+{'Set':'SetValue','Map':'MapValue'}.get(k,k)+'('+arg+')'
lines=['// Original seeded fixtures; independent oracle: Apache Thrift Python 0.22.0.']
for i in range(160):
 value=make('Struct')
 for label,cls in [('BinaryProtocol',TBinaryProtocol),('CompactProtocol',TCompactProtocol)]:
  buf=TMemoryBuffer();p=cls(buf);write(p,value);wire=buf.getvalue()
  transport_buffer=TMemoryBuffer();framed=TFramedTransport(transport_buffer);framed.write(wire);framed.flush()
  lines+=['///|',f'test "Apache seeded {label} fixture {i}" {{',f' let original={expr(value)}',f' let wire={literal(wire)}',f' let protocol=@thrift.{label}',
   ' assert_eq(@thrift.encode(original,protocol),wire)',f' assert_eq(@thrift.decode(wire,@thrift.StructKind,protocol),{expr(value,label=="CompactProtocol")})',
   ' assert_eq(@thrift.skip_prefix(wire,@thrift.StructKind,protocol),wire.length())',' assert_eq(@thrift.decode_selected(wire,[],protocol),@thrift.Struct([]))',
   f' assert_eq(@thrift.frame(wire),{literal(transport_buffer.getvalue())})','}']
for label,cls in [('BinaryProtocol',TBinaryProtocol),('CompactProtocol',TCompactProtocol)]:
 for strict in ([False,True] if label=='BinaryProtocol' else [True]):
  for seq in [-2147483648,-1,0,2147483647]:
   for message_type in [1,2,3,4]:
    value=('Struct',[(1,('I32',42))]);buf=TMemoryBuffer();p=cls(buf,strictWrite=strict) if cls==TBinaryProtocol else cls(buf)
    p.writeMessageBegin('查询',message_type,seq);write(p,value);p.writeMessageEnd();wire=buf.getvalue()
    lines+=['///|',f'test "Apache envelope {label} strict {strict} seq {seq} type {message_type}" {{',f' let m : @thrift.Message={{name:"查询",message_type:{message_type},sequence_id:{seq},body:{expr(value)}}}',f' let wire={literal(wire)}',f' assert_eq(@thrift.encode_message(m,@thrift.{label},strict_write={str(strict).lower()}),wire)',f' assert_eq(@thrift.decode_message(wire,@thrift.{label},strict_read={str(strict).lower()}),m)','}']
(ROOT/'apache_oracle_test.mbt').write_text('\n'.join(lines)+'\n',encoding='utf-8',newline='\n')
print('Generated 320 structural/frame cases and 48 RPC envelopes from Apache Thrift')
