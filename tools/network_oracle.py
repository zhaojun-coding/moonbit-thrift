"""Independent network peer: unmodified Apache compiler + Python generated service.

No MoonBit codecs are used here. Loopback sockets are adapted to Apache's framed
transport and generated Processor/Client. Certificates belong to the test directory.
"""
from pathlib import Path
import argparse,sys,os,json,subprocess,tempfile,hashlib,socket,ssl,threading,time,uuid
from importlib.metadata import version

sys.stdin.reconfigure(encoding='utf-8');sys.stdout.reconfigure(encoding='utf-8')
parser=argparse.ArgumentParser()
parser.add_argument('mode',choices=['server','client','certificates'])
parser.add_argument('--protocol',default='binary',choices=['binary','compact','legacy'])
parser.add_argument('--port',type=int);parser.add_argument('--tls',action='store_true')
parser.add_argument('--multiplex',action='store_true');parser.add_argument('--mtls',action='store_true')
parser.add_argument('--certdir');parser.add_argument('--server-name',default='localhost')
parser.add_argument('--bad-trust',action='store_true')
args=parser.parse_args()

if args.mode=='certificates':
    from cryptography import x509
    from cryptography.x509.oid import NameOID,ExtendedKeyUsageOID
    from cryptography.hazmat.primitives import hashes,serialization
    from cryptography.hazmat.primitives.asymmetric import rsa
    from datetime import datetime,timedelta,timezone
    directory=Path(args.certdir);directory.mkdir(parents=True,exist_ok=True)
    now=datetime.now(timezone.utc)
    def make(name,issuer=None,server=False,client=False):
        key=rsa.generate_private_key(public_exponent=65537,key_size=2048)
        subject=x509.Name([x509.NameAttribute(NameOID.COMMON_NAME,name)])
        builder=x509.CertificateBuilder().subject_name(subject).issuer_name(issuer[1].subject if issuer else subject).public_key(key.public_key()).serial_number(x509.random_serial_number()).not_valid_before(now-timedelta(minutes=5)).not_valid_after(now+timedelta(days=2)).add_extension(x509.BasicConstraints(ca=issuer is None,path_length=None),critical=True)
        builder=builder.add_extension(x509.SubjectKeyIdentifier.from_public_key(key.public_key()),critical=False).add_extension(x509.AuthorityKeyIdentifier.from_issuer_public_key((issuer[0] if issuer else key).public_key()),critical=False).add_extension(x509.KeyUsage(digital_signature=True,content_commitment=False,key_encipherment=True,data_encipherment=False,key_agreement=False,key_cert_sign=issuer is None,crl_sign=issuer is None,encipher_only=None,decipher_only=None),critical=True)
        if server:builder=builder.add_extension(x509.SubjectAlternativeName([x509.DNSName('localhost')]),critical=False).add_extension(x509.ExtendedKeyUsage([ExtendedKeyUsageOID.SERVER_AUTH]),critical=False)
        if client:builder=builder.add_extension(x509.ExtendedKeyUsage([ExtendedKeyUsageOID.CLIENT_AUTH]),critical=False)
        cert=builder.sign(issuer[0] if issuer else key,hashes.SHA256())
        (directory/(name+'.pem')).write_bytes(cert.public_bytes(serialization.Encoding.PEM))
        (directory/(name+'.key')).write_bytes(key.private_bytes(serialization.Encoding.PEM,serialization.PrivateFormat.PKCS8,serialization.NoEncryption()))
        return key,cert
    ca=make('ca');make('server',ca,server=True);make('client',ca,client=True);make('untrusted')
    print(json.dumps({'certificates':'temporary test CA, localhost server and client'}));sys.exit(0)

assert version('thrift')=='0.24.0','This oracle requires Apache Thrift Python 0.24.0'
from thrift.Thrift import TApplicationException
from thrift.transport import TSocket,TTransport
from thrift.protocol import TBinaryProtocol,TCompactProtocol,TMultiplexedProtocol
from thrift import TMultiplexedProcessor
compiler=Path(os.environ['THRIFT_COMPILER']).resolve()
metadata={'runtime':'Apache Thrift Python '+version('thrift'),'compiler':subprocess.check_output([str(compiler),'--version'],text=True).strip(),'compilerSha256':hashlib.sha256(compiler.read_bytes()).hexdigest()}
fixtures=Path(__file__).resolve().parent.parent/'examples'

def protocol(transport):
    return TCompactProtocol.TCompactProtocol(transport) if args.protocol=='compact' else TBinaryProtocol.TBinaryProtocol(transport,strictRead=args.protocol!='legacy',strictWrite=args.protocol!='legacy')

def context(server):
    directory=Path(args.certdir)
    if server:
        ctx=ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER);ctx.load_cert_chain(directory/'server.pem',directory/'server.key')
        if args.mtls:ctx.load_verify_locations(directory/'ca.pem');ctx.verify_mode=ssl.CERT_REQUIRED
    else:
        ctx=ssl.create_default_context(cafile=str(directory/('untrusted.pem' if args.bad_trust else 'ca.pem')))
        if args.mtls:ctx.load_cert_chain(directory/'client.pem',directory/'client.key')
    return ctx

with tempfile.TemporaryDirectory(prefix='moonbit-thrift-network-oracle-') as temporary:
    generated=Path(temporary)
    run=subprocess.run([str(compiler),'-r','--gen','py','-out',str(generated),str(fixtures/'demo.thrift')],capture_output=True,text=True,encoding='utf-8',timeout=15)
    if run.returncode:raise RuntimeError(run.stdout+run.stderr)
    sys.path.insert(0,str(generated))
    from demo import Records
    from common.ttypes import Record,Problem
    if args.mode=='server':
        stop=threading.Event();notifications=[];clients=set();workers=[]
        class Handler:
            def ping(self,message):
                if message=='__notifications__':return '|'.join(notifications)
                if message=='application':raise TApplicationException(9,'application failure')
                return message
            def echo(self,value):return value
            def add(self,a,b):return a+b
            def fail(self,code):raise Problem(code,'declared problem')
            def notify(self,message):notifications.append(message)
            def slow(self,delayMs):time.sleep(max(0,min(delayMs,10000))/1000);return 'finished'
        processor=Records.Processor(Handler())
        if args.multiplex:
            multiplex=TMultiplexedProcessor.TMultiplexedProcessor();multiplex.registerProcessor('records',processor);processor=multiplex
        listener=socket.socket();listener.bind(('127.0.0.1',0));listener.listen();listener.settimeout(.2)
        ctx=context(True) if args.tls else None
        def client(raw):
            sock=raw;clients.add(raw)
            try:
                raw.settimeout(3)
                if ctx:sock=ctx.wrap_socket(raw,server_side=True);clients.add(sock)
                transport_socket=TSocket.TSocket();transport_socket.setHandle(sock)
                transport=TTransport.TFramedTransport(transport_socket);codec=protocol(transport)
                while not stop.is_set():processor.process(codec,codec)
            except (OSError,EOFError,TTransport.TTransportException,ssl.SSLError):pass
            finally:
                clients.discard(raw);clients.discard(sock);sock.close();raw.close()
        def accept():
            while not stop.is_set():
                try:raw,_=listener.accept()
                except socket.timeout:continue
                except OSError:break
                worker=threading.Thread(target=client,args=(raw,),daemon=True);workers.append(worker);worker.start()
        accepter=threading.Thread(target=accept,daemon=True);accepter.start()
        print(json.dumps({'ready':listener.getsockname()[1],**metadata}),flush=True)
        sys.stdin.readline();stop.set();listener.close()
        for connection in list(clients):
            try:connection.shutdown(socket.SHUT_RDWR);connection.close()
            except OSError:pass
        accepter.join(1)
        for worker in workers:worker.join(1)
        print(json.dumps({'stopped':True,'notifications':notifications}),flush=True)
    else:
        raw=socket.create_connection(('127.0.0.1',args.port),timeout=3)
        try:
            sock=context(False).wrap_socket(raw,server_hostname=args.server_name) if args.tls else raw
            ts=TSocket.TSocket();ts.setHandle(sock);transport=TTransport.TFramedTransport(ts);codec=protocol(transport)
            if args.multiplex:codec=TMultiplexedProtocol.TMultiplexedProtocol(codec,'records')
            client=Records.Client(codec);checks=[]
            assert client.ping('中文🙂')=='中文🙂';checks.append('inherited method / Unicode')
            value=Record(id=-9223372036854775808,name='record',data=bytes(range(256)),groups={'x':[1,-2,2147483647]},tag=uuid.UUID('00112233-4455-6677-8899-aabbccddeeff'),labels={'a','b'},state=9876,child=Record(id=9223372036854775807))
            result=client.echo(value);assert result==value;checks.append('recursive struct / UUID / binary / containers / unknown enum / i64 limits')
            assert client.add(9223372036854775807,-1)==9223372036854775806;checks.append('exact i64 return')
            try:client.fail(42);raise AssertionError('missing declared exception')
            except Problem as error:assert error.code==42 and error.message=='declared problem'
            checks.append('declared exception')
            try:client.ping('application');raise AssertionError('missing application exception')
            except TApplicationException as error:assert error.type==9 and error.message=='application failure'
            checks.append('application exception')
            client.notify('first');client.notify('second');assert client.ping('__notifications__')=='first|second';checks.append('oneway ordered dispatch, no response frames')
            assert client.slow(1)=='finished';checks.append('delayed response')
            assert client.ping('after errors')=='after errors';checks.append('connection reusable after declared/application exceptions')
            transport.close();print(json.dumps({'ok':True,'checks':checks,**metadata}),flush=True)
        finally:raw.close()
