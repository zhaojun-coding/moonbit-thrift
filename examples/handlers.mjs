import {DeclaredException} from '../tools/thrift.mjs';
export default {
  ping:({message})=>message,
  echo:({value})=>value,
  add:({a,b})=>BigInt(a)+BigInt(b),
  fail:({code})=>{throw new DeclaredException('problem',{code,message:'declared problem'});},
  notify:({message})=>{process.stderr.write(`notification: ${message}\n`);},
  slow:async({delayMs})=>{await new Promise(resolve=>setTimeout(resolve,Math.max(0,Math.min(delayMs,10000))));return 'finished';},
};
