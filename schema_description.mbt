///|
fn Schema::type_description(
  self : Schema,
  t : IdlType,
) -> Json raise SchemaError {
  match t {
    Base(name) =>
      Json::object({
        "typeId": (if name == "byte" { "i8" } else { name }).to_json(),
      })
    Named(name) => {
      let (_, definition) = self.find(self.root, name)
      let id = match definition {
        Enumeration(_, _, _) => "enum"
        Record(_, flavor, _, _) =>
          if flavor == "exception" {
            "exception"
          } else {
            "struct"
          }
        _ => raise InvalidSchema("not a described type")
      }
      let owner = definition_owner(name)
      let class_name = (if owner == self.root {
          ""
        } else {
          idl_stem(owner) + "."
        }) +
        definition_name(definition)
      Json::object({ "typeId": id.to_json(), "class": class_name.to_json() })
    }
    ListOf(elem) | SetOf(elem) => {
      let data : Map[String, Json] = {
        "typeId": (if t is ListOf(_) { "list" } else { "set" }).to_json(),
      }
      self.describe_type_at(data, "elemTypeId", "elemType", elem)
      Json::object(data)
    }
    MapOf(key, value) => {
      let data : Map[String, Json] = { "typeId": "map" }
      self.describe_type_at(data, "keyTypeId", "keyType", key)
      self.describe_type_at(data, "valueTypeId", "valueType", value)
      Json::object(data)
    }
  }
}

///|
fn Schema::describe_type_at(
  self : Schema,
  data : Map[String, Json],
  id_key : String,
  type_key : String,
  t : IdlType,
) -> Unit raise SchemaError {
  let description = self.type_description(t)
  if description is Object(fields) {
    data[id_key] = fields["typeId"]
    if fields.length() > 1 {
      data[type_key] = description
    }
  }
}

///|
fn add_annotations(
  data : Map[String, Json],
  annotations : Map[String, String],
) -> Unit {
  if !annotations.is_empty() {
    data["annotations"] = annotations.to_json()
  }
}

///|
fn Schema::describe_fields(
  self : Schema,
  owner : String,
  fields : Array[IdlField],
) -> Json raise SchemaError {
  Json::array(
    fields.map(field => {
      let data : Map[String, Json] = {
        "key": field.id.to_json(),
        "name": field.name.to_json(),
        "required": field.requiredness.to_json(),
      }
      let t = self.resolve(owner, field.field_type, 0)
      self.describe_type_at(data, "typeId", "type", t)
      add_annotations(data, field.annotations)
      if field.default_value is Some(value) {
        data["default"] = self.const_json(owner, t, value, [], 0)
      }
      Json::object(data)
    }),
  )
}

///|
/// Canonical resolved schema description, retaining declarations and annotations.
pub fn Schema::describe(self : Schema) -> Json raise SchemaError {
  let module_ = self.modules[self.root]
  let enums = []
  let structs = []
  let aliases = []
  let constants = []
  let services = []
  for definition in module_.definitions {
    let data : Map[String, Json] = {
      "name": definition_name(definition).to_json(),
    }
    match definition {
      Alias(_, t, annotations) => {
        self.describe_type_at(
          data,
          "typeId",
          "type",
          self.resolve(self.root, t, 0),
        )
        add_annotations(data, annotations)
        aliases.push(Json::object(data))
      }
      Enumeration(_, values, annotations) => {
        data["members"] = Json::array(
          values.map(pair => {
            Json::object({ "name": pair.0.to_json(), "value": pair.1.to_json() })
          }),
        )
        add_annotations(data, annotations)
        enums.push(Json::object(data))
      }
      Record(_, flavor, fields, annotations) => {
        data["isException"] = (flavor == "exception").to_json()
        data["isUnion"] = (flavor == "union").to_json()
        data["fields"] = self.describe_fields(self.root, fields)
        add_annotations(data, annotations)
        structs.push(Json::object(data))
      }
      Constant(_, t, value) => {
        let t = self.resolve(self.root, t, 0)
        self.describe_type_at(data, "typeId", "type", t)
        data["value"] = self.const_json(self.root, t, value, [], 0)
        constants.push(Json::object(data))
      }
      Service(_, parent, functions, annotations) => {
        if parent is Some(name) {
          data["extends"] = name.to_json()
        }
        add_annotations(data, annotations)
        data["functions"] = Json::array(
          functions.map(function_ => {
            let item : Map[String, Json] = {
              "name": function_.name.to_json(),
              "oneway": function_.oneway.to_json(),
              "arguments": self.describe_fields(self.root, function_.arguments),
              "exceptions": self.describe_fields(
                self.root,
                function_.exceptions,
              ),
            }
            self.describe_type_at(
              item,
              "returnTypeId",
              "returnType",
              self.resolve(self.root, function_.return_type, 0),
            )
            add_annotations(item, function_.annotations)
            Json::object(item)
          }),
        )
        services.push(Json::object(data))
      }
    }
  }
  Json::object({
    "name": idl_stem(self.root).to_json(),
    "namespaces": module_.namespaces.to_json(),
    "includes": module_.includes
    .map(idl_stem)
    .filter(s => self.imports[self.root].contains(s))
    .to_json(),
    "enums": Json::array(enums),
    "typedefs": Json::array(aliases),
    "structs": Json::array(structs),
    "constants": Json::array(constants),
    "services": Json::array(services),
  })
}
