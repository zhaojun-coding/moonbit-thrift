param([string]$MoonPath, [switch]$WithInterop, [switch]$WithReference)
$ErrorActionPreference='Stop'
if (-not $MoonPath) {
  $available=Get-Command moon -ErrorAction SilentlyContinue
  if ($available) { $MoonPath=$available.Source }
  else { throw 'Install MoonBit or pass -MoonPath with the absolute moon.exe path.' }
}
$env:MOON_HOME=Split-Path (Split-Path $MoonPath -Parent) -Parent
$env:PATH="$(Split-Path $MoonPath -Parent);$env:PATH"
Push-Location $PSScriptRoot
try {
  & $MoonPath fmt
  if ($LASTEXITCODE -ne 0) {throw 'format failed'}
  & $MoonPath info
  if ($LASTEXITCODE -ne 0) {throw 'API generation failed'}
  & $MoonPath check --deny-warn
  if ($LASTEXITCODE -ne 0) {throw 'check failed'}
  & $MoonPath test --target wasm-gc --deny-warn
  if ($LASTEXITCODE -ne 0) {throw 'tests failed'}
  & $MoonPath test --target js --deny-warn
  if ($LASTEXITCODE -ne 0) {throw 'JS tests failed'}
  & $MoonPath build --target js --deny-warn
  if ($LASTEXITCODE -ne 0) {throw 'build failed'}
  & $MoonPath run cmd/main
  if ($LASTEXITCODE -ne 0) {throw 'example failed'}
  $engine=Get-ChildItem '_build/js' -Recurse -File | Where-Object { $_.Name -in @('main.js','web.js') -and $_.FullName -match '[\\/]cmd[\\/]web[\\/]' } | Sort-Object LastWriteTime -Descending | Select-Object -First 1
  if (-not $engine) {throw 'Missing browser engine'}
  Copy-Item -LiteralPath $engine.FullName -Destination 'web/engine.mjs' -Force
  node tools/test-demo.mjs
  if ($LASTEXITCODE -ne 0) {throw 'browser engine test failed'}
  node tools/test-cli.mjs
  if ($LASTEXITCODE -ne 0) {throw 'CLI test failed'}
  node tools/test-schema-cli.mjs
  if ($LASTEXITCODE -ne 0) {throw 'Schema CLI test failed'}
  node tools/test-generated.mjs
  if ($LASTEXITCODE -ne 0) {throw 'Generated MoonBit binding tests failed'}
  if ($WithReference) {
    node tools/test-idl-reference.mjs
    if ($LASTEXITCODE -ne 0) {throw 'Apache IDL reference failed'}
    node tools/test-schema-reference.mjs
    if ($LASTEXITCODE -ne 0) {throw 'Apache generated schema reference failed'}
    node tools/test-network-reference.mjs
    if ($LASTEXITCODE -ne 0) {throw 'Apache generated network reference failed'}
  } else {
    node tools/test-idl-reference.mjs --golden
    if ($LASTEXITCODE -ne 0) {throw 'IDL reference replay failed'}
    node tools/test-schema-reference.mjs --golden
    if ($LASTEXITCODE -ne 0) {throw 'Schema reference replay failed'}
  }
  node tools/robustness.mjs
  if ($LASTEXITCODE -ne 0) {throw 'robustness failed'}
  node tools/benchmark.mjs
  if ($LASTEXITCODE -ne 0) {throw 'benchmark failed'}
  if ($WithInterop) {
    python tools/test-interop.py
    if ($LASTEXITCODE -ne 0) {throw 'Apache interoperability failed'}
  }
} finally {Pop-Location}
