import fs from 'node:fs/promises';
// Run after moon build --target js. These are built MoonBit outputs, not mocks.
for(const [source,target] of [['web','engine'],['moonthrift_codegen','moonthrift-codegen'],['moonthrift_model','moonthrift-model']]){
  await fs.copyFile(new URL(`../_build/js/debug/build/cmd/${source}/${source}.js`,import.meta.url),new URL(`../web/${target}.mjs`,import.meta.url));
}
