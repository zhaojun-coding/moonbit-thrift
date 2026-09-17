///|
pub(all) struct IdlLocation {
  source : String
  offset : Int
  line : Int
  column : Int
} derive(Debug, Eq, ToJson)

///|
pub suberror SchemaError {
  Syntax(String, IdlLocation)
  InvalidSchema(String)
} derive(Debug)

///|
pub(all) enum IdlType {
  Base(String)
  Named(String)
  ListOf(IdlType)
  SetOf(IdlType)
  MapOf(IdlType, IdlType)
} derive(Debug, Eq)

///|
pub(all) enum IdlConst {
  IntegerConstant(Int64)
  FloatConstant(Double)
  StringConstant(String)
  NameConstant(String)
  ListConstant(Array[IdlConst])
  MapConstant(Array[(IdlConst, IdlConst)])
} derive(Debug, Eq)

///|
pub(all) struct IdlField {
  id : Int
  name : String
  field_type : IdlType
  requiredness : String
  default_value : IdlConst?
  annotations : Map[String, String]
  location : IdlLocation
} derive(Debug, Eq)

///|
pub(all) struct IdlMethod {
  name : String
  return_type : IdlType
  oneway : Bool
  arguments : Array[IdlField]
  exceptions : Array[IdlField]
  annotations : Map[String, String]
  location : IdlLocation
} derive(Debug, Eq)

///|
pub(all) enum IdlDefinition {
  Alias(String, IdlType, Map[String, String])
  Enumeration(String, Array[(String, Int)], Map[String, String])
  Record(String, String, Array[IdlField], Map[String, String])
  Constant(String, IdlType, IdlConst)
  Service(String, String?, Array[IdlMethod], Map[String, String])
} derive(Debug, Eq)

///|
pub(all) struct IdlModule {
  source : String
  includes : Array[String]
  namespaces : Map[String, String]
  cpp_includes : Array[String]
  definitions : Array[IdlDefinition]
} derive(Debug, Eq)

///|
priv struct IdlToken {
  text : String
  quoted : Bool
  location : IdlLocation
}

///|
priv struct IdlScanner {
  chars : Array[Char]
  mut pos : Int
  mut line : Int
  mut column : Int
  source : String
}

///|
fn IdlScanner::location(self : IdlScanner) -> IdlLocation {
  {
    source: self.source,
    offset: self.pos,
    line: self.line,
    column: self.column,
  }
}

///|
fn IdlScanner::peek(self : IdlScanner, n? : Int = 0) -> Char? {
  self.chars.get(self.pos + n)
}

///|
fn IdlScanner::take(self : IdlScanner) -> Char {
  let c = self.chars[self.pos]
  self.pos += 1
  if c == '\n' {
    self.line += 1
    self.column = 1
  } else {
    self.column += 1
  }
  c
}

///|
fn idl_alpha(c : Char) -> Bool {
  (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || c == '_'
}

///|
fn idl_digit(c : Char) -> Bool {
  c >= '0' && c <= '9'
}

///|
fn idl_reserved(name : String) -> Bool {
  [
    "include", "cpp_include", "namespace", "typedef", "const", "enum", "struct",
    "union", "exception", "service", "extends", "oneway", "required", "optional",
    "throws", "cpp_type", "xsd_all", "xsd_optional", "xsd_nillable", "xsd_attrs",
  ].contains(name)
}

///|
fn idl_lex(text : String, source : String) -> Array[IdlToken] raise SchemaError {
  if text.length() > 1000000 {
    raise InvalidSchema("IDL source exceeds 1000000 UTF-16 units")
  }
  let scan : IdlScanner = {
    chars: text.to_array(),
    pos: 0,
    line: 1,
    column: 1,
    source,
  }
  let tokens = []
  while scan.pos < scan.chars.length() {
    let c = scan.chars[scan.pos]
    if [' ', '\t', '\r', '\n', '\u000c'].contains(c) ||
      (scan.pos == 0 && c == '\uFEFF') {
      ignore(scan.take())
      continue
    }
    if c == '#' || (c == '/' && scan.peek(n=1) == Some('/')) {
      while scan.peek() != None && scan.peek() != Some('\n') {
        ignore(scan.take())
      }
      continue
    }
    if c == '/' && scan.peek(n=1) == Some('*') {
      let start = scan.location()
      ignore(scan.take())
      ignore(scan.take())
      let mut closed = false
      while scan.peek() != None {
        if scan.peek() == Some('*') && scan.peek(n=1) == Some('/') {
          ignore(scan.take())
          ignore(scan.take())
          closed = true
          break
        }
        ignore(scan.take())
      }
      if !closed {
        raise Syntax("unterminated comment", start)
      }
      continue
    }
    let location = scan.location()
    let start = scan.pos
    if c == '\'' || c == '"' {
      ignore(scan.take())
      let out = StringBuilder()
      let mut closed = false
      while scan.peek() != None {
        let ch = scan.take()
        if ch == c {
          closed = true
          break
        }
        if ch == '\n' || ch == '\r' {
          raise Syntax("newline in string literal", location)
        }
        if ch == '\\' {
          if scan.peek() == None {
            raise Syntax("incomplete string escape", location)
          }
          let escape = scan.take()
          match escape {
            'n' => out.write_char('\n')
            'r' => out.write_char('\r')
            't' => out.write_char('\t')
            'b' => out.write_char('\u0008')
            'f' => out.write_char('\u000c')
            '\\' => out.write_char('\\')
            '\'' => out.write_char('\'')
            '"' => out.write_char('"')
            _ => raise Syntax("unsupported string escape", location)
          }
        } else {
          out.write_char(ch)
        }
      }
      if !closed {
        raise Syntax("unterminated string literal", location)
      }
      tokens.push({ text: out.to_string(), quoted: true, location, })
    } else if idl_alpha(c) {
      ignore(scan.take())
      while scan.peek() is Some(ch) &&
            (idl_alpha(ch) || idl_digit(ch) || ch == '.') {
        ignore(scan.take())
      }
      tokens.push({
        text: String::from_array(scan.chars[start:scan.pos]),
        quoted: false,
        location,
      })
    } else if idl_digit(c) ||
      c == '+' ||
      c == '-' ||
      (c == '.' && scan.peek(n=1) is Some(n) && idl_digit(n)) {
      ignore(scan.take())
      while scan.peek() is Some(ch) &&
            (
              idl_alpha(ch) ||
              idl_digit(ch) ||
              ch == '.' ||
              (
                (ch == '+' || ch == '-') &&
                (
                  scan.chars[scan.pos - 1] == 'e' ||
                  scan.chars[scan.pos - 1] == 'E'
                )
              )
            ) {
        ignore(scan.take())
      }
      tokens.push({
        text: String::from_array(scan.chars[start:scan.pos]),
        quoted: false,
        location,
      })
    } else if ['{', '}', '[', ']', '(', ')', '<', '>', ':', ',', ';', '=', '*'].contains(
        c,
      ) {
      ignore(scan.take())
      tokens.push({ text: c.to_string(), quoted: false, location, })
    } else {
      raise Syntax("unexpected character " + c.to_string(), location)
    }
    if tokens.length() > 200000 {
      raise InvalidSchema("IDL token limit")
    }
  }
  tokens.push({ text: "<eof>", quoted: false, location: scan.location(), })
  tokens
}

///|
priv struct IdlParser {
  tokens : Array[IdlToken]
  mut pos : Int
  mut work : Int
}

///|
fn IdlParser::peek(self : IdlParser) -> String {
  if self.tokens[self.pos].quoted {
    "<string>"
  } else {
    self.tokens[self.pos].text
  }
}

///|
fn IdlParser::take(self : IdlParser) -> IdlToken raise SchemaError {
  let token = self.tokens[self.pos]
  if self.peek() == "<eof>" {
    raise Syntax("unexpected end", token.location)
  }
  self.pos += 1
  self.work += 1
  if self.work > 200000 {
    raise InvalidSchema("IDL parse work limit")
  }
  token
}

///|
fn IdlParser::eat(self : IdlParser, text : String) -> Bool {
  if self.peek() == text {
    self.pos += 1
    true
  } else {
    false
  }
}

///|
fn IdlParser::need(self : IdlParser, text : String) -> Unit raise SchemaError {
  if !self.eat(text) {
    raise Syntax(
      "expected " + text + ", got " + self.peek(),
      self.tokens[self.pos].location,
    )
  }
}

///|
fn IdlParser::name(self : IdlParser) -> String raise SchemaError {
  let token = self.take()
  let cs = token.text.to_array()
  if token.quoted ||
    cs.is_empty() ||
    !idl_alpha(cs[0]) ||
    idl_reserved(token.text) {
    raise Syntax("expected non-reserved identifier", token.location)
  }
  token.text
}

///|
fn IdlParser::literal(self : IdlParser) -> String raise SchemaError {
  let token = self.take()
  if !token.quoted {
    raise Syntax("expected string literal", token.location)
  }
  token.text
}

///|
fn IdlParser::separator(self : IdlParser) -> Unit {
  if self.peek() == "," || self.peek() == ";" {
    self.pos += 1
  }
}

///|
fn IdlParser::annotations(
  self : IdlParser,
) -> Map[String, String] raise SchemaError {
  let annotations = Map([])
  if self.eat("(") {
    while !self.eat(")") {
      let name = self.name()
      let value = if self.eat("=") { self.literal() } else { "1" }
      annotations[name] = value
      self.separator()
    }
  }
  annotations
}

///|
fn IdlParser::field_type(
  self : IdlParser,
  depth : Int,
) -> IdlType raise SchemaError {
  if depth > 64 {
    raise InvalidSchema("IDL type nesting limit")
  }
  let token = self.take()
  let name = token.text
  if token.quoted {
    raise Syntax("expected type", token.location)
  }
  if [
      "bool", "byte", "i8", "i16", "i32", "i64", "double", "string", "binary", "uuid",
      "void",
    ].contains(name) {
    return Base(if name == "i8" { "byte" } else { name })
  }
  if ["list", "set", "map"].contains(name) {
    if self.eat("cpp_type") {
      ignore(self.literal())
    }
    self.need("<")
    let first = self.field_type(depth + 1)
    let result = if name == "map" {
      self.need(",")
      MapOf(first, self.field_type(depth + 1))
    } else if name == "set" {
      SetOf(first)
    } else {
      ListOf(first)
    }
    self.need(">")
    if self.eat("cpp_type") {
      ignore(self.literal())
    }
    ignore(self.annotations())
    return result
  }
  if name.to_array().get(0) is Some(c) && idl_alpha(c) && !idl_reserved(name) {
    Named(name)
  } else {
    raise Syntax("invalid type", token.location)
  }
}

///|
fn idl_integer(token : IdlToken) -> Int64 raise SchemaError {
  let text = token.text
  let cs = text.to_array()
  let mut start = 0
  let mut sign = ""
  if cs.get(0) == Some('+') || cs.get(0) == Some('-') {
    if cs[0] == '-' {
      sign = "-"
    }
    start = 1
  }
  let hex = cs.get(start) == Some('0') &&
    (cs.get(start + 1) == Some('x') || cs.get(start + 1) == Some('X'))
  if hex {
    start += 2
  }
  if start >= cs.length() {
    raise Syntax("expected integer", token.location)
  }
  for i in start..<cs.length() {
    if (if hex { !cs[i].is_ascii_hexdigit() } else { !idl_digit(cs[i]) }) {
      raise Syntax("invalid integer", token.location)
    }
  }
  @strconv.parse_int64(
    sign + String::from_array(cs[start:]),
    base=if hex { 16 } else { 10 },
  ) catch {
    _ => raise Syntax("integer out of signed 64-bit range", token.location)
  }
}

///|
fn idl_double(token : IdlToken) -> Double raise SchemaError {
  let cs = token.text.to_array()
  let mut i = 0
  let mut digits = 0
  if cs.get(i) == Some('+') || cs.get(i) == Some('-') {
    i += 1
  }
  while i < cs.length() && idl_digit(cs[i]) {
    i += 1
    digits += 1
  }
  if cs.get(i) == Some('.') {
    i += 1
    while i < cs.length() && idl_digit(cs[i]) {
      i += 1
      digits += 1
    }
  }
  if digits == 0 {
    raise Syntax("invalid floating constant", token.location)
  }
  if cs.get(i) == Some('e') || cs.get(i) == Some('E') {
    i += 1
    if cs.get(i) == Some('+') || cs.get(i) == Some('-') {
      i += 1
    }
    let start = i
    while i < cs.length() && idl_digit(cs[i]) {
      i += 1
    }
    if i == start {
      raise Syntax("invalid floating exponent", token.location)
    }
  }
  if i != cs.length() {
    raise Syntax("invalid floating constant", token.location)
  }
  @strconv.parse_double(token.text) catch {
    _ => if token.text.has_prefix("-") { -1.0 / 0.0 } else { 1.0 / 0.0 }
  }
}

///|
fn IdlParser::constant(
  self : IdlParser,
  depth : Int,
) -> IdlConst raise SchemaError {
  if depth > 64 {
    raise InvalidSchema("IDL constant nesting limit")
  }
  if self.eat("[") {
    let values = []
    while !self.eat("]") {
      values.push(self.constant(depth + 1))
      self.separator()
    }
    return ListConstant(values)
  }
  if self.eat("{") {
    let values = []
    while !self.eat("}") {
      let key = self.constant(depth + 1)
      self.need(":")
      values.push((key, self.constant(depth + 1)))
      self.separator()
    }
    return MapConstant(values)
  }
  let token = self.take()
  if token.quoted {
    return StringConstant(token.text)
  }
  let cs = token.text.to_array()
  if !cs.is_empty() &&
    (idl_digit(cs[0]) || cs[0] == '+' || cs[0] == '-' || cs[0] == '.') {
    let hex = token.text.to_lower().contains("0x")
    if !hex && (token.text.contains(".") || token.text.to_lower().contains("e")) {
      return FloatConstant(idl_double(token))
    }
    return IntegerConstant(idl_integer(token))
  }
  if !cs.is_empty() && idl_alpha(cs[0]) {
    NameConstant(token.text)
  } else {
    raise Syntax("expected constant", token.location)
  }
}

///|
fn IdlParser::fields(
  self : IdlParser,
  end : String,
  union : Bool,
  depth? : Int = 0,
) -> Array[IdlField] raise SchemaError {
  if depth > 64 {
    raise InvalidSchema("IDL field metadata nesting limit")
  }
  let fields = []
  let ids : Map[Int, Bool] = Map([])
  let names : Map[String, Bool] = Map([])
  let mut automatic = -1
  while !self.eat(end) {
    let location = self.tokens[self.pos].location
    let explicit = self.tokens.get(self.pos + 1) is Some(token) &&
      token.text == ":"
    let id = if explicit {
      let n = idl_integer(self.take())
      self.need(":")
      if n > 2147483647L {
        raise Syntax("field id exceeds metadata integer range", location)
      }
      if n > 0L {
        n.to_int()
      } else {
        let n = automatic
        automatic -= 1
        n
      }
    } else {
      let n = automatic
      automatic -= 1
      n
    }
    if automatic < -32769 {
      raise Syntax("automatic field id limit", location)
    }
    let req = if self.eat("required") {
      "required"
    } else if self.eat("optional") {
      "optional"
    } else {
      "req_out"
    }
    let field_type = self.field_type(0)
    let name = self.name()
    if field_type == Base("void") {
      raise Syntax("field cannot have void type", location)
    }
    let default_value = if self.eat("=") {
      Some(self.constant(0))
    } else {
      None
    }
    while self.eat("xsd_optional") || self.eat("xsd_nillable") {

    }
    if self.eat("xsd_attrs") {
      self.need("{")
      ignore(self.fields("}", false, depth=depth + 1))
    }
    let annotations = self.annotations()
    self.separator()
    if ids.contains(id) || names.contains(name) {
      raise Syntax("duplicate field id or name", location)
    }
    ids[id] = true
    names[name] = true
    fields.push({
      id,
      name,
      field_type,
      requiredness: if union {
        "optional"
      } else {
        req
      },
      default_value,
      annotations,
      location,
    })
    if fields.length() > 10000 {
      raise InvalidSchema("IDL field count limit")
    }
  }
  fields
}

///|
/// Parse one Thrift IDL document. Includes and named references are resolved by compile_schema.
pub fn parse_idl(
  text : String,
  source? : String = "main.thrift",
) -> IdlModule raise SchemaError {
  let parser : IdlParser = { tokens: idl_lex(text, source), pos: 0, work: 0, }
  let includes = []
  let namespaces = Map([])
  let cpp_includes = []
  let definitions = []
  let names : Map[String, Bool] = Map([])
  while parser.peek() != "<eof>" {
    let token = parser.take()
    let keyword = token.text
    if !definitions.is_empty() &&
      ["include", "cpp_include", "namespace"].contains(keyword) {
      raise Syntax("IDL headers must precede definitions", token.location)
    }
    if keyword == "include" {
      includes.push(parser.literal())
      parser.separator()
      continue
    }
    if keyword == "cpp_include" {
      cpp_includes.push(parser.literal())
      parser.separator()
      continue
    }
    if keyword == "namespace" {
      let scope = if parser.eat("*") { "*" } else { parser.name() }
      namespaces[scope] = if parser.peek() == "<string>" {
        parser.literal()
      } else {
        parser.name()
      }
      ignore(parser.annotations())
      parser.separator()
      continue
    }
    let definition : IdlDefinition = match keyword {
      "typedef" => {
        let t = parser.field_type(0)
        let name = parser.name()
        Alias(name, t, parser.annotations())
      }
      "const" => {
        let t = parser.field_type(0)
        let name = parser.name()
        parser.need("=")
        Constant(name, t, parser.constant(0))
      }
      "enum" => {
        let name = parser.name()
        parser.need("{")
        let members = []
        let used : Map[String, Bool] = Map([])
        let mut next = 0L
        while !parser.eat("}") {
          let location = parser.tokens[parser.pos].location
          let item_name = parser.name()
          let value = if parser.eat("=") {
            idl_integer(parser.take())
          } else {
            next
          }
          if value < -2147483648L || value > 2147483647L {
            raise Syntax("enum value out of signed 32-bit range", location)
          }
          if used.contains(item_name) {
            raise Syntax("duplicate enum member", location)
          }
          used[item_name] = true
          members.push((item_name, value.to_int()))
          next = value + 1L
          ignore(parser.annotations())
          parser.separator()
        }
        Enumeration(name, members, parser.annotations())
      }
      "struct" | "union" | "exception" => {
        let name = parser.name()
        ignore(parser.eat("xsd_all"))
        parser.need("{")
        Record(
          name,
          keyword,
          parser.fields("}", keyword == "union"),
          parser.annotations(),
        )
      }
      "service" => {
        let name = parser.name()
        let parent = if parser.eat("extends") {
          Some(parser.name())
        } else {
          None
        }
        parser.need("{")
        let methods = []
        let used : Map[String, Bool] = Map([])
        while !parser.eat("}") {
          let location = parser.tokens[parser.pos].location
          let oneway = parser.eat("oneway")
          let return_type = parser.field_type(0)
          let function_name = parser.name()
          parser.need("(")
          let arguments = parser.fields(")", false)
          let exceptions = if parser.eat("throws") {
            parser.need("(")
            parser.fields(")", false)
          } else {
            []
          }
          if used.contains(function_name) {
            raise Syntax("duplicate service method", location)
          }
          used[function_name] = true
          if oneway && !exceptions.is_empty() {
            raise Syntax("oneway method cannot throw", location)
          }
          let annotations = parser.annotations()
          parser.separator()
          methods.push({
            name: function_name,
            return_type,
            oneway,
            arguments,
            exceptions,
            annotations,
            location,
          })
        }
        Service(name, parent, methods, parser.annotations())
      }
      _ =>
        raise Syntax("expected IDL definition, got " + keyword, token.location)
    }
    let name = match definition {
      Alias(n, _, _)
      | Constant(n, _, _)
      | Enumeration(n, _, _)
      | Record(n, _, _, _)
      | Service(n, _, _, _) => n
    }
    if names.contains(name) {
      raise Syntax("duplicate definition " + name, token.location)
    }
    names[name] = true
    definitions.push(definition)
    parser.separator()
    if definitions.length() > 10000 {
      raise InvalidSchema("IDL definition count limit")
    }
  }
  { source, includes, namespaces, cpp_includes, definitions, }
}
