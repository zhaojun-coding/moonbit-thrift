///|
/// No local IDL parser or generator participates in this path.
pub fn generate(source : String) -> String {
  try {
    let (schema, diagnostics) = @upstream.compile_idl(source)
    if @upstream.has_errors(diagnostics) {
      raise Failure(
        "upstream IDL diagnostics: " + Repr(diagnostics).to_string(),
      )
    }
    ({ "ok": true, "content": @codegen.generate_moonbit(schema).content } : Json).stringify()
  } catch {
    error =>
      ({ "ok": false, "error": Repr(error).to_string() } : Json).stringify()
  }
}

///|
fn main {
  ()
}
