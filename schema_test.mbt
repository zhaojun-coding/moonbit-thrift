///|
test "IDL public AST annotations automatic ids and source diagnostics" {
  let module_ = @thrift.parse_idl(
    "namespace py sample\n/* comment */ struct Row { i32 first; 7: optional string label = 'hello' (a=\"b\") } (owner=\"local\")",
    source="row.thrift",
  )
  assert_eq(module_.namespaces["py"], "sample")
  match module_.definitions[0] {
    @thrift.Record("Row", "struct", fields, annotations) => {
      assert_eq(fields[0].id, -1)
      assert_eq(fields[1].id, 7)
      assert_eq(fields[1].default_value, Some(@thrift.StringConstant("hello")))
      assert_eq(fields[1].annotations["a"], "b")
      assert_eq(annotations["owner"], "local")
    }
    _ => fail("expected record")
  }
  let rejected = try {
    ignore(
      @thrift.parse_idl("struct X {\n 1:string x = \"oops", source="bad.thrift"),
    )
    false
  } catch {
    @thrift.Syntax(_, location) => {
      assert_eq(location.source, "bad.thrift")
      assert_eq(location.line, 2)
      true
    }
    _ => false
  }
  assert_true(rejected)
}

///|
test "schema includes search paths inherited methods constants and missing include warnings" {
  let schema = @thrift.compile_schema(
    "app/main.thrift",
    {
      "app/main.thrift": "include \"common.thrift\"\n include \"missing.thrift\"\n service Child extends common.Parent { common.Row echo(1:common.Row value) }",
      "lib/common.thrift": "typedef i64 Id\n const i32 DEFAULT=7\n struct Row {1:required Id id,2:optional i32 count=DEFAULT}\n service Parent {string ping(1:string text)}",
    },
    include_paths=["lib"],
  )
  assert_eq(schema.services(), ["Child"])
  assert_eq(schema.service_functions("Child").map(x => x.name), ["ping", "echo"])
  assert_eq(schema.get_method("Child", "echo").arguments[0].name, "value")
  assert_eq(schema.warnings().length(), 1)
  let value = schema.from_json("common.Row", { "id": "9223372036854775807" })
  assert_eq(
    value,
    @thrift.Struct([(1, @thrift.I64(9223372036854775807L)), (2, @thrift.I32(7))]),
  )
  assert_eq(schema.to_json("common.Row", value), {
    "id": "9223372036854775807",
    "count": 7,
  })
}

///|
test "schema required defaults explicit null unknown fields and wire type skipping" {
  let schema = @thrift.compile_schema("main.thrift", {
    "main.thrift": "struct X{1:required i64 id=5,2:optional string name=\"default\"}",
  })
  assert_eq(
    schema.from_json("X", {}),
    @thrift.Struct([(1, @thrift.I64(5L)), (2, @thrift.Binary(b"default"))]),
  )
  assert_eq(
    schema.from_json("X", { "id": "1", "name": null }),
    @thrift.Struct([(1, @thrift.I64(1L))]),
  )
  let raw = @thrift.Struct([
    (1, @thrift.I64(2L)),
    (2, @thrift.I32(9)),
    (33, @thrift.Binary(b"unknown")),
    (1, @thrift.I64(3L)),
  ])
  assert_eq(schema.to_json("X", raw), { "id": "3", "name": "default" })
  let invalid : Array[Json] = [{ "id": null }, { "extra": true }]
  for input in invalid {
    assert_true(
      try {
        ignore(schema.from_json("X", input))
        false
      } catch {
        _ => true
      },
    )
  }
  // Required wire presence is checked before defaults can conceal an absent field.
  assert_true(
    try {
      ignore(schema.to_json("X", @thrift.Struct([])))
      false
    } catch {
      _ => true
    },
  )
}

///|
test "schema union recursive binary UUID and integer validation" {
  let schema = @thrift.compile_schema("main.thrift", {
    "main.thrift": "union Choice{1:string text,2:i64 number}\n enum E{A=1}\n struct X{1:required i64 id,2:optional X child,3:binary data,4:uuid tag,5:E state,6:Choice choice}",
  })
  let input : Json = {
    "id": "-9223372036854775808",
    "child": { "id": "9223372036854775807" },
    "data": { "$binary": "00ff80" },
    "tag": "00112233-4455-6677-8899-aabbccddeeff",
    "state": 9876,
    "choice": { "number": "-1" },
  }
  for protocol in [@thrift.BinaryProtocol, @thrift.CompactProtocol] {
    assert_eq(
      schema.decode_json(
        "X",
        schema.encode_json("X", input, protocol),
        protocol,
      ),
      input,
    )
  }
  let invalid : Array[Json] = [
    { "text": "x", "number": "1" },
    { "number": "9223372036854775808" },
  ]
  for input in invalid {
    assert_true(
      try {
        ignore(schema.from_json("Choice", input))
        false
      } catch {
        _ => true
      },
    )
  }
}

///|
test "schema RPC typed requests declared application missing and void results" {
  let schema = @thrift.compile_schema("main.thrift", {
    "main.thrift": "exception Problem{1:i32 code}\n service S{ i64 add(1:i64 x),void fail() throws(1:Problem problem),oneway void notify(1:string text) }",
  })
  let request = schema.make_call("S", "add", { "x": "9223372036854775807" }, 41)
  assert_eq(schema.read_call("S", request), { "x": "9223372036854775807" })
  for protocol in [@thrift.BinaryProtocol, @thrift.CompactProtocol] {
    let response = schema.make_reply(
      "S",
      "add",
      41,
      @thrift.Success("9223372036854775807"),
    )
    let decoded = @thrift.decode_message(
      @thrift.encode_message(response, protocol),
      protocol,
    )
    assert_eq(
      schema.read_reply("S", "add", decoded),
      @thrift.Success("9223372036854775807"),
    )
  }
  let declared = @thrift.DeclaredException("problem", { "code": 7 })
  assert_eq(
    schema.read_reply("S", "fail", schema.make_reply("S", "fail", 2, declared)),
    declared,
  )
  assert_eq(
    schema.read_reply(
      "S",
      "add",
      @thrift.application_exception("add", 3, 6, "error"),
    ),
    @thrift.ApplicationFailure(6, "error"),
  )
  assert_eq(
    schema.read_reply("S", "add", {
      name: "add",
      sequence_id: 4,
      message_type: 2,
      body: @thrift.Struct([]),
    }),
    @thrift.ApplicationFailure(5, "missing result for add"),
  )
  assert_eq(
    schema.read_reply(
      "S",
      "fail",
      schema.make_reply("S", "fail", 2, @thrift.Success(null)),
    ),
    @thrift.Success(null),
  )
  assert_eq(
    schema.make_call("S", "notify", { "text": "hi" }, 5).message_type,
    4,
  )
  assert_true(
    try {
      ignore(schema.make_reply("S", "notify", 5, @thrift.Success(null)))
      false
    } catch {
      _ => true
    },
  )
}

///|
test "client sequence handles multiplex request names and unprefixed replies" {
  let client = @thrift.Client::new(@thrift.CompactProtocol)
  let (sequence, request) = client.call_with_id(
    "service:ping",
    @thrift.Struct([]),
    response_name=Some("ping"),
  )
  let framing = @thrift.FrameDecoder::new()
  assert_eq(
    @thrift.decode_message(framing.feed(request)[0], @thrift.CompactProtocol).name,
    "service:ping",
  )
  let response : @thrift.Message = {
    name: "ping",
    sequence_id: sequence,
    message_type: 2,
    body: @thrift.Struct([]),
  }
  assert_eq(
    client.feed(
      @thrift.encode_framed_message(response, @thrift.CompactProtocol),
    ),
    [response],
  )
  assert_eq(client.pending_count(), 0)
  client.finish()
}

///|
test "schema rejects alias inheritance and include cycles and bounds XSD metadata recursion" {
  for
    source in [
      "typedef B A typedef A B", "service A extends B{} service B extends A{}", "struct X{1:list<void> bad}",
    ] {
    assert_true(
      try {
        ignore(@thrift.compile_schema("main.thrift", { "main.thrift": source }))
        false
      } catch {
        _ => true
      },
    )
  }
  assert_true(
    try {
      ignore(
        @thrift.compile_schema("a.thrift", {
          "a.thrift": "include \"b.thrift\"",
          "b.thrift": "include \"a.thrift\"",
        }),
      )
      false
    } catch {
      _ => true
    },
  )
  let deep = "struct X{" +
    Array::make(70, "1:i32 x xsd_attrs{").join("") +
    Array::make(71, "}").join("")
  assert_true(
    try {
      ignore(@thrift.parse_idl(deep))
      false
    } catch {
      _ => true
    },
  )
}
