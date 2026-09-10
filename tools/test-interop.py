"""Bounded loopback interoperability: Apache transport/protocol vs MoonBit.
The Python host performs socket I/O; all wire handling on the client is MoonBit.
"""
from pathlib import Path
import socket,threading,subprocess,json,queue,sys,datetime
from importlib.metadata import version
from thrift.transport.TSocket import TSocket
from thrift.transport.TTransport import TFramedTransport
from thrift.protocol.TBinaryProtocol import TBinaryProtocol
from thrift.protocol.TCompactProtocol import TCompactProtocol
from thrift.Thrift import TType,TApplicationException

assert version('thrift')=='0.22.0'
root=Path(__file__).resolve().parents[1];failures=queue.Queue()
def serve(listener,mode):
 try:
  conn,_=listener.accept();conn.settimeout(8)
  socket_transport=TSocket();socket_transport.setHandle(conn);transport=TFramedTransport(socket_transport)
  protocol=TCompactProtocol(transport) if mode=='compact' else TBinaryProtocol(transport,strictRead=mode!='legacy',strictWrite=mode!='legacy')
  requests=[]
  for _ in range(3):
   name,kind,seq=protocol.readMessageBegin();assert name=='double' and kind in [1,4]
   protocol.readStructBegin();value=None
   while True:
    _,tag,field=protocol.readFieldBegin()
    if tag==TType.STOP:break
    if field==1 and tag==TType.I32:value=protocol.readI32()
    else:protocol.skip(tag)
    protocol.readFieldEnd()
   protocol.readStructEnd();protocol.readMessageEnd();assert value is not None
   if kind!=4:requests.append((name,seq,value))
  # Reordering proves sequence-id correlation, not merely one request at a time.
  for name,seq,value in reversed(requests):
   protocol.writeMessageBegin(name,3 if value<0 else 2,seq)
   if value<0:TApplicationException(TApplicationException.INTERNAL_ERROR,'negative input').write(protocol)
   else:
    protocol.writeStructBegin('result');protocol.writeFieldBegin('success',TType.I32,0);protocol.writeI32(value*2);protocol.writeFieldEnd();protocol.writeFieldStop();protocol.writeStructEnd()
   protocol.writeMessageEnd();transport.flush()
  transport.close()
 except BaseException as e:failures.put(repr(e))
 finally:listener.close()

records=[]
for mode in ['binary','compact','legacy']:
 listener=socket.socket();listener.bind(('127.0.0.1',0));listener.listen(1);listener.settimeout(10)
 port=listener.getsockname()[1];worker=threading.Thread(target=serve,args=(listener,mode),daemon=True);worker.start()
 result=subprocess.run(['node','tools/test-interop.mjs',str(port),mode],cwd=root,text=True,capture_output=True,encoding='utf-8',timeout=12)
 worker.join(timeout=10)
 assert not worker.is_alive(),'server did not terminate'
 assert failures.empty(),list(failures.queue)
 assert result.returncode==0,result.stdout+result.stderr
 records.append(json.loads(result.stdout));print(mode+': Apache loopback RPC passed',flush=True)
(root/'evidence/interop.json').write_text(json.dumps({'utc':datetime.datetime.now(datetime.timezone.utc).isoformat(),'oracle':'Apache Thrift Python 0.22.0','host':'loopback TCP only','cases':records,'scope':'framed Binary strict/legacy and Compact, fragmented writes, out-of-order replies, application exception, oneway'},indent=2),encoding='utf-8')
