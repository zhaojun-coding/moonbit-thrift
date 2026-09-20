function _M0DTPB4Json4Null() {}
_M0DTPB4Json4Null.prototype.$tag = 0;
const _M0DTPB4Json4Null__ = new _M0DTPB4Json4Null();
function _M0DTPB4Json4True() {}
_M0DTPB4Json4True.prototype.$tag = 1;
const _M0DTPB4Json4True__ = new _M0DTPB4Json4True();
function _M0DTPB4Json5False() {}
_M0DTPB4Json5False.prototype.$tag = 2;
const _M0DTPB4Json5False__ = new _M0DTPB4Json5False();
function _M0DTPB4Json6Number(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPB4Json6Number.prototype.$tag = 3;
function _M0DTPB4Json6String(param0) {
  this._0 = param0;
}
_M0DTPB4Json6String.prototype.$tag = 4;
function _M0DTPB4Json5Array(param0) {
  this._0 = param0;
}
_M0DTPB4Json5Array.prototype.$tag = 5;
function _M0DTPB4Json6Object(param0) {
  this._0 = param0;
}
_M0DTPB4Json6Object.prototype.$tag = 6;
const $reinterpret_view = new DataView(new ArrayBuffer(8));
function $i64_reinterpret_f64(a) {
  $reinterpret_view.setBigUint64(0, BigInt.asUintN(64, a), false);
  return $reinterpret_view.getFloat64(0, false);
}
function _M0TPC28internal7strconv9FloatInfo(param0, param1, param2) {
  this.mantissa_bits = param0;
  this.exponent_bits = param1;
  this.bias = param2;
}
function _M0TPB9ArrayViewGUiRP216zhaojun_2dcoding6thrift6SchemaEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGUiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeServerEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGUiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeClientEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
class $PanicError extends Error {}
function $panic() {
  throw new $PanicError();
}
function $oob() {
  throw new Error("Index out of bounds");
}
function _M0TPB13StringBuilder(param0) {
  this.val = param0;
}
function _M0TPC16string10StringView(param0, param1, param2) {
  this.str = param0;
  this.start = param1;
  this.end = param2;
}
const _M0FPB12random__seed = () => {
  if (globalThis.crypto?.getRandomValues) {
    const array = new Uint32Array(1);
    globalThis.crypto.getRandomValues(array);
    return array[0] | 0; // Convert to signed 32
  } else {
    return Math.floor(Math.random() * 0x100000000) | 0; // Fallback to Math.random
  }
};
const _M0FPB19int__to__string__js = (x, radix) => {
  return x.toString(radix);
};
const _M0FPB21int64__to__string__js = (num, radix) => BigInt.asIntN(64, num).toString(radix);
function _M0TPB4IterGUsRPB4JsonEE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB4IterGcE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function $make_array_len_and_init(a, b) {
  const arr = new Array(a);
  arr.fill(b);
  return arr;
}
function _M0TPB9ArrayViewGkE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function $makebytes(a, b) {
  const arr = new Uint8Array(a);
  if (b !== 0) {
    arr.fill(b);
  }
  return arr;
}
function _M0TPB8MutLocalGiE(param0) {
  this.val = param0;
}
const _M0MPB7JSArray4push = (arr, val) => { arr.push(val); };
function _M0TPB4IterGsE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB4IterGRPC16string10StringViewE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB8MutLocalGORPC16string10StringViewE(param0) {
  this.val = param0;
}
function _M0TPB9ArrayViewGRP216zhaojun_2dcoding6thrift8IdlFieldE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB3MapGsRPB4JsonE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeClientE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeServerE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGiRP216zhaojun_2dcoding6thrift6SchemaE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGisE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGsbE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGiRP216zhaojun_2dcoding6thrift5ValueE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGibE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB5EntryGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeClientE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeServerE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsRPB4JsonE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGiRP216zhaojun_2dcoding6thrift6SchemaE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGssE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGisE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsURP216zhaojun_2dcoding6thrift7IdlTypeRP216zhaojun_2dcoding6thrift5ValueEE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsbE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsRP216zhaojun_2dcoding6thrift13IdlDefinitionE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGiRP216zhaojun_2dcoding6thrift5ValueE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGibE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsRP216zhaojun_2dcoding6thrift9IdlModuleE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsRPB3MapGssEE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsRPC15debug4ReprE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB8MutLocalGORPB5EntryGsRPB4JsonEE(param0) {
  this.val = param0;
}
function _M0DTPC16result6ResultGRPB5ArrayGRPB4JsonERP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRPB4JsonERP216zhaojun_2dcoding6thrift11SchemaErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGRPB4JsonERP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRPB4JsonERP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPB5ArrayGRP216zhaojun_2dcoding6thrift5ValueERP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP216zhaojun_2dcoding6thrift5ValueERP216zhaojun_2dcoding6thrift11SchemaErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGRP216zhaojun_2dcoding6thrift5ValueERP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP216zhaojun_2dcoding6thrift5ValueERP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok.prototype.$tag = 1;
function _M0TPB9ArrayViewGUsRPB4JsonEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPC15bytes9BytesView(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
const _M0MPB7JSArray4copy = (arr) => arr.slice(0);
const $bytes_literal$0 = new Uint8Array();
function _M0TPB9ArrayViewGsE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGcE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
const _M0MPB7JSArray12append__view = (dst, src, src_offset, len) => {
   for (let i = 0; i < len; i++) {
     dst.push(src[src_offset + i]);
   }
 };
const _M0MPB7JSArray3pop = (arr) => arr.pop();
function _M0TPB9ArrayViewGRPC16string10StringViewE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC15debug4Repr7UnitLit() {}
_M0DTPC15debug4Repr7UnitLit.prototype.$tag = 0;
function _M0DTPC15debug4Repr7Integer(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr7Integer.prototype.$tag = 1;
function _M0DTPC15debug4Repr9DoubleLit(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr9DoubleLit.prototype.$tag = 2;
function _M0DTPC15debug4Repr8FloatLit(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr8FloatLit.prototype.$tag = 3;
function _M0DTPC15debug4Repr7BoolLit(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr7BoolLit.prototype.$tag = 4;
function _M0DTPC15debug4Repr7CharLit(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr7CharLit.prototype.$tag = 5;
function _M0DTPC15debug4Repr9StringLit(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr9StringLit.prototype.$tag = 6;
function _M0DTPC15debug4Repr5Tuple(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr5Tuple.prototype.$tag = 7;
function _M0DTPC15debug4Repr5Array(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr5Array.prototype.$tag = 8;
function _M0DTPC15debug4Repr6Record(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr6Record.prototype.$tag = 9;
function _M0DTPC15debug4Repr4Enum(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15debug4Repr4Enum.prototype.$tag = 10;
function _M0DTPC15debug4Repr3Map(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr3Map.prototype.$tag = 11;
function _M0DTPC15debug4Repr11RecordField(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15debug4Repr11RecordField.prototype.$tag = 12;
function _M0DTPC15debug4Repr14EnumLabeledArg(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15debug4Repr14EnumLabeledArg.prototype.$tag = 13;
function _M0DTPC15debug4Repr6Opaque(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15debug4Repr6Opaque.prototype.$tag = 14;
function _M0DTPC15debug4Repr7Literal(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr7Literal.prototype.$tag = 15;
function _M0DTPC15debug4Repr8MapEntry(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15debug4Repr8MapEntry.prototype.$tag = 16;
function _M0DTPC15debug4Repr7Omitted() {}
_M0DTPC15debug4Repr7Omitted.prototype.$tag = 17;
const _M0DTPC15debug4Repr7Omitted__ = new _M0DTPC15debug4Repr7Omitted();
function _M0TPC15debug13ContentParens(param0, param1) {
  this.size = param0;
  this.lines = param1;
}
function _M0TPC15debug7Content(param0, param1, param2) {
  this.size = param0;
  this.lines = param1;
  this.needs_parens = param2;
}
const _M0FPC28encoding4utf816encode__utf8__js = (() => {
   const encoder = new TextEncoder();
   return function(src, start, len, bom) {
     const end = start + len;
     const encoded = encoder.encode(src.slice(start, end));
     if (!bom) {
       return encoded;
     }
     const result = new Uint8Array(encoded.length + 3);
     result[0] = 0xEF;
     result[1] = 0xBB;
     result[2] = 0xBF;
     result.set(encoded, 3);
     return result;
   };
 })();
const _M0FPC28encoding4utf816decode__utf8__js = ((preserveBOMDecoder, dropBOMDecoder) => function(bytes, start, len, preserveBOM) {
   try {
     const end = start + len;
     const slice = bytes.subarray(start, end);
     const decoder = preserveBOM ? preserveBOMDecoder : dropBOMDecoder;
     return [decoder.decode(slice)];
   } catch (_) {
     return [];
   }
 })(
   new TextDecoder("utf-8", { fatal: true, ignoreBOM: true }),
   new TextDecoder("utf-8", { fatal: true, ignoreBOM: false }),
 );
function _M0DTPC16result6ResultGsRPC28encoding4utf89MalformedE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRPC28encoding4utf89MalformedE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGsRPC28encoding4utf89MalformedE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRPC28encoding4utf89MalformedE2Ok.prototype.$tag = 1;
function _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid.prototype.$tag = 9;
function _M0DTPC15error5Error52moonbitlang_2fcore_2fjson_2eParseError_2eInvalidChar(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15error5Error52moonbitlang_2fcore_2fjson_2eParseError_2eInvalidChar.prototype.$tag = 8;
function _M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof() {}
_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof.prototype.$tag = 7;
const _M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__ = new _M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof();
function _M0DTPC15error5Error54moonbitlang_2fcore_2fjson_2eParseError_2eInvalidNumber(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15error5Error54moonbitlang_2fcore_2fjson_2eParseError_2eInvalidNumber.prototype.$tag = 6;
function _M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eInvalidIdentEscape(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eInvalidIdentEscape.prototype.$tag = 5;
function _M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded() {}
_M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded.prototype.$tag = 4;
const _M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded__ = new _M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded();
function _M0DTPC15error5Error60moonbitlang_2fcore_2fencoding_2futf8_2eMalformed_2eMalformed(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error60moonbitlang_2fcore_2fencoding_2futf8_2eMalformed_2eMalformed.prototype.$tag = 3;
function _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure.prototype.$tag = 2;
function _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eSchemaError_2eSyntax(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eSchemaError_2eSyntax.prototype.$tag = 1;
function _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema.prototype.$tag = 0;
function _M0TPC13ref3RefGiE(param0) {
  this.val = param0;
}
function _M0DTPC16result6ResultGUiRPC16string10StringViewbERPB7FailureE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUiRPC16string10StringViewbERPB7FailureE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGUiRPC16string10StringViewbERPB7FailureE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUiRPC16string10StringViewbERPB7FailureE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGuRPB7FailureE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPB7FailureE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGuRPB7FailureE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPB7FailureE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGdRPB7FailureE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGdRPB7FailureE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGdRPB7FailureE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGdRPB7FailureE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGiRPB7FailureE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRPB7FailureE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGiRPB7FailureE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRPB7FailureE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGlRPB7FailureE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGlRPB7FailureE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGlRPB7FailureE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGlRPB7FailureE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPB7FailureE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORPC28internal7strconv6NumberRPB7FailureE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPB7FailureE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORPC28internal7strconv6NumberRPB7FailureE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok.prototype.$tag = 1;
function _M0TPC28internal7strconv6Number(param0, param1, param2, param3) {
  this.exponent = param0;
  this.mantissa = param1;
  this.negative = param2;
  this.many_digits = param3;
}
function _M0DTPC16result6ResultGdRPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGdRPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGdRPC15error5ErrorE2Ok.prototype.$tag = 1;
function $i64_clz(a) {
  a = BigInt.asUintN(64, a);
  if (a === 0n) return 64;
  const hi = Number(a >> 32n);
  if (hi !== 0) {
    return Math.clz32(hi);
  }
  return 32 + Math.clz32(Number(a & 0xffffffffn));
}
function _M0DTPC16result6ResultGlRPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGlRPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGlRPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGlRPC15error5ErrorE2Ok.prototype.$tag = 1;
function _M0TPC28internal7strconv12EiselProduct(param0, param1) {
  this.lo = param0;
  this.hi = param1;
}
function _M0TPC28internal7strconv7Decimal(param0, param1, param2, param3, param4, param5) {
  this.digits = param0;
  this.digits_num = param1;
  this.decimal_point = param2;
  this.negative = param3;
  this.truncated = param4;
  this.overflowed = param5;
}
function _M0DTPC16result6ResultGRPC28internal7strconv7DecimalRPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC28internal7strconv7DecimalRPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPC28internal7strconv7DecimalRPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC28internal7strconv7DecimalRPC15error5ErrorE2Ok.prototype.$tag = 1;
function $f64_convert_i64_u(a) {
  return Number(a);
}
function _M0DTPC16option6OptionGdE4None() {}
_M0DTPC16option6OptionGdE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGdE4None__ = new _M0DTPC16option6OptionGdE4None();
function _M0DTPC16option6OptionGdE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGdE4Some.prototype.$tag = 1;
function _M0TPB9ArrayViewGUsRPC15debug4ReprEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPC14json8Position(param0, param1) {
  this.line = param0;
  this.column = param1;
}
function _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGuRPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGuRPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGiRPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGiRPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TPC14json12ParseContext(param0, param1, param2) {
  this.offset = param0;
  this.input = param1;
  this.end_offset = param2;
}
function $f64_convert_i64(a) {
  return Number(BigInt.asIntN(64, a));
}
function _M0TPC14json11LexedNumber(param0, param1) {
  this.repr = param0;
  this.value = param1;
}
function _M0TPC14json14JsonNumberScan(param0, param1, param2, param3, param4) {
  this.negative = param0;
  this.is_integer = param1;
  this.mantissa = param2;
  this.exponent = param3;
  this.many_digits = param4;
}
function _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGsRPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC14json5Token4Null() {}
_M0DTPC14json5Token4Null.prototype.$tag = 0;
const _M0DTPC14json5Token4Null__ = new _M0DTPC14json5Token4Null();
function _M0DTPC14json5Token4True() {}
_M0DTPC14json5Token4True.prototype.$tag = 1;
const _M0DTPC14json5Token4True__ = new _M0DTPC14json5Token4True();
function _M0DTPC14json5Token5False() {}
_M0DTPC14json5Token5False.prototype.$tag = 2;
const _M0DTPC14json5Token5False__ = new _M0DTPC14json5Token5False();
function _M0DTPC14json5Token6Number(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC14json5Token6Number.prototype.$tag = 3;
function _M0DTPC14json5Token6String(param0) {
  this._0 = param0;
}
_M0DTPC14json5Token6String.prototype.$tag = 4;
function _M0DTPC14json5Token6LBrace() {}
_M0DTPC14json5Token6LBrace.prototype.$tag = 5;
const _M0DTPC14json5Token6LBrace__ = new _M0DTPC14json5Token6LBrace();
function _M0DTPC14json5Token6RBrace() {}
_M0DTPC14json5Token6RBrace.prototype.$tag = 6;
const _M0DTPC14json5Token6RBrace__ = new _M0DTPC14json5Token6RBrace();
function _M0DTPC14json5Token8LBracket() {}
_M0DTPC14json5Token8LBracket.prototype.$tag = 7;
const _M0DTPC14json5Token8LBracket__ = new _M0DTPC14json5Token8LBracket();
function _M0DTPC14json5Token8RBracket() {}
_M0DTPC14json5Token8RBracket.prototype.$tag = 8;
const _M0DTPC14json5Token8RBracket__ = new _M0DTPC14json5Token8RBracket();
function _M0DTPC14json5Token5Comma() {}
_M0DTPC14json5Token5Comma.prototype.$tag = 9;
const _M0DTPC14json5Token5Comma__ = new _M0DTPC14json5Token5Comma();
function _M0DTPC14json10WriteFrame5Array(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC14json10WriteFrame5Array.prototype.$tag = 0;
function _M0DTPC14json10WriteFrame6Object(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC14json10WriteFrame6Object.prototype.$tag = 1;
function $bytes_equal(a, b) {
    if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
function _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift4KindRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift4KindRP216zhaojun_2dcoding6thrift10CodecErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift4KindRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift4KindRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGzRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGzRP216zhaojun_2dcoding6thrift10CodecErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGzRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGzRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok.prototype.$tag = 1;
function _M0TPB9ArrayViewGyE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift12FrameDecoderRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift12FrameDecoderRP216zhaojun_2dcoding6thrift10CodecErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift12FrameDecoderRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift12FrameDecoderRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok.prototype.$tag = 1;
function _M0TP216zhaojun_2dcoding6thrift12FrameDecoder(param0, param1, param2, param3, param4, param5) {
  this.max_frame = param0;
  this.header = param1;
  this.header_bytes = param2;
  this.expected = param3;
  this.buffer = param4;
  this.failed = param5;
}
function _M0DTPC16result6ResultGRPB5ArrayGzERP216zhaojun_2dcoding6thrift10CodecErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGzERP216zhaojun_2dcoding6thrift10CodecErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGzERP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGzERP216zhaojun_2dcoding6thrift10CodecErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift10CodecErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok.prototype.$tag = 1;
function _M0TPB8MutLocalGmE(param0) {
  this.val = param0;
}
function $f64_reinterpret_i64(a) {
  $reinterpret_view.setFloat64(0, a, false);
  return BigInt.asUintN(64, $reinterpret_view.getBigUint64(0, false));
}
function _M0DTP216zhaojun_2dcoding6thrift5Value4Bool(param0) {
  this._0 = param0;
}
_M0DTP216zhaojun_2dcoding6thrift5Value4Bool.prototype.$tag = 0;
function _M0DTP216zhaojun_2dcoding6thrift5Value4Byte(param0) {
  this._0 = param0;
}
_M0DTP216zhaojun_2dcoding6thrift5Value4Byte.prototype.$tag = 1;
function _M0DTP216zhaojun_2dcoding6thrift5Value3I16(param0) {
  this._0 = param0;
}
_M0DTP216zhaojun_2dcoding6thrift5Value3I16.prototype.$tag = 2;
function _M0DTP216zhaojun_2dcoding6thrift5Value3I32(param0) {
  this._0 = param0;
}
_M0DTP216zhaojun_2dcoding6thrift5Value3I32.prototype.$tag = 3;
function _M0DTP216zhaojun_2dcoding6thrift5Value3I64(param0) {
  this._0 = param0;
}
_M0DTP216zhaojun_2dcoding6thrift5Value3I64.prototype.$tag = 4;
function _M0DTP216zhaojun_2dcoding6thrift5Value6Double(param0) {
  this._0 = param0;
}
_M0DTP216zhaojun_2dcoding6thrift5Value6Double.prototype.$tag = 5;
function _M0DTP216zhaojun_2dcoding6thrift5Value6Binary(param0) {
  this._0 = param0;
}
_M0DTP216zhaojun_2dcoding6thrift5Value6Binary.prototype.$tag = 6;
function _M0DTP216zhaojun_2dcoding6thrift5Value6Struct(param0) {
  this._0 = param0;
}
_M0DTP216zhaojun_2dcoding6thrift5Value6Struct.prototype.$tag = 7;
function _M0DTP216zhaojun_2dcoding6thrift5Value4List(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP216zhaojun_2dcoding6thrift5Value4List.prototype.$tag = 8;
function _M0DTP216zhaojun_2dcoding6thrift5Value8SetValue(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP216zhaojun_2dcoding6thrift5Value8SetValue.prototype.$tag = 9;
function _M0DTP216zhaojun_2dcoding6thrift5Value8MapValue(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP216zhaojun_2dcoding6thrift5Value8MapValue.prototype.$tag = 10;
function _M0DTP216zhaojun_2dcoding6thrift5Value4Uuid(param0) {
  this._0 = param0;
}
_M0DTP216zhaojun_2dcoding6thrift5Value4Uuid.prototype.$tag = 11;
function _M0DTPC16result6ResultGiRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRP216zhaojun_2dcoding6thrift10CodecErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGiRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGmRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGmRP216zhaojun_2dcoding6thrift10CodecErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGmRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGmRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGlRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGlRP216zhaojun_2dcoding6thrift10CodecErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGlRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGlRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGzRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGzRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGzRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGzRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGUsRP216zhaojun_2dcoding6thrift13IdlDefinitionERP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUsRP216zhaojun_2dcoding6thrift13IdlDefinitionERP216zhaojun_2dcoding6thrift11SchemaErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGUsRP216zhaojun_2dcoding6thrift13IdlDefinitionERP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUsRP216zhaojun_2dcoding6thrift13IdlDefinitionERP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok.prototype.$tag = 1;
function _M0TPB8MutLocalGORP216zhaojun_2dcoding6thrift13IdlDefinitionE(param0) {
  this.val = param0;
}
function _M0TPB8MutLocalGsE(param0) {
  this.val = param0;
}
function _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift7IdlTypeRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift7IdlTypeRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift7IdlTypeRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift7IdlTypeRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok.prototype.$tag = 1;
function _M0DTP216zhaojun_2dcoding6thrift7IdlType4Base(param0) {
  this._0 = param0;
}
_M0DTP216zhaojun_2dcoding6thrift7IdlType4Base.prototype.$tag = 0;
function _M0DTP216zhaojun_2dcoding6thrift7IdlType5Named(param0) {
  this._0 = param0;
}
_M0DTP216zhaojun_2dcoding6thrift7IdlType5Named.prototype.$tag = 1;
function _M0DTP216zhaojun_2dcoding6thrift7IdlType6ListOf(param0) {
  this._0 = param0;
}
_M0DTP216zhaojun_2dcoding6thrift7IdlType6ListOf.prototype.$tag = 2;
function _M0DTP216zhaojun_2dcoding6thrift7IdlType5SetOf(param0) {
  this._0 = param0;
}
_M0DTP216zhaojun_2dcoding6thrift7IdlType5SetOf.prototype.$tag = 3;
function _M0DTP216zhaojun_2dcoding6thrift7IdlType5MapOf(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP216zhaojun_2dcoding6thrift7IdlType5MapOf.prototype.$tag = 4;
function _M0DTP216zhaojun_2dcoding6thrift8IdlConst15IntegerConstant(param0) {
  this._0 = param0;
}
_M0DTP216zhaojun_2dcoding6thrift8IdlConst15IntegerConstant.prototype.$tag = 0;
function _M0DTP216zhaojun_2dcoding6thrift8IdlConst13FloatConstant(param0) {
  this._0 = param0;
}
_M0DTP216zhaojun_2dcoding6thrift8IdlConst13FloatConstant.prototype.$tag = 1;
function _M0DTP216zhaojun_2dcoding6thrift8IdlConst14StringConstant(param0) {
  this._0 = param0;
}
_M0DTP216zhaojun_2dcoding6thrift8IdlConst14StringConstant.prototype.$tag = 2;
function _M0DTP216zhaojun_2dcoding6thrift8IdlConst12NameConstant(param0) {
  this._0 = param0;
}
_M0DTP216zhaojun_2dcoding6thrift8IdlConst12NameConstant.prototype.$tag = 3;
function _M0DTP216zhaojun_2dcoding6thrift8IdlConst12ListConstant(param0) {
  this._0 = param0;
}
_M0DTP216zhaojun_2dcoding6thrift8IdlConst12ListConstant.prototype.$tag = 4;
function _M0DTP216zhaojun_2dcoding6thrift8IdlConst11MapConstant(param0) {
  this._0 = param0;
}
_M0DTP216zhaojun_2dcoding6thrift8IdlConst11MapConstant.prototype.$tag = 5;
function _M0DTPC16result6ResultGRPB4JsonRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB4JsonRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB4JsonRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB4JsonRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGlRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGlRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGlRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGlRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok.prototype.$tag = 1;
function $i64_trunc_f64(a) {
  if (Number.isNaN(a)) return 0n;
  if (a >= 9223372036854775807) return 9223372036854775807n;
  if (a <= -9223372036854775808) return 9223372036854775808n;
  return BigInt.asUintN(64, BigInt(Math.trunc(a)));
}
function _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift4KindRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift4KindRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift4KindRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift4KindRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok.prototype.$tag = 1;
function _M0TPB9ArrayViewGUiRP216zhaojun_2dcoding6thrift5ValueEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC16result6ResultGORP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGORP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok.prototype.$tag = 1;
function _M0TP216zhaojun_2dcoding6thrift6Reader(param0, param1, param2, param3) {
  this.data = param0;
  this.pos = param1;
  this.nodes = param2;
  this.compact = param3;
}
function _M0DTPC16result6ResultGRPB5ArrayGUsRP216zhaojun_2dcoding6thrift9IdlMethodEERP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGUsRP216zhaojun_2dcoding6thrift9IdlMethodEERP216zhaojun_2dcoding6thrift11SchemaErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGUsRP216zhaojun_2dcoding6thrift9IdlMethodEERP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGUsRP216zhaojun_2dcoding6thrift9IdlMethodEERP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGUsRP216zhaojun_2dcoding6thrift9IdlMethodERP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUsRP216zhaojun_2dcoding6thrift9IdlMethodERP216zhaojun_2dcoding6thrift11SchemaErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGUsRP216zhaojun_2dcoding6thrift9IdlMethodERP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUsRP216zhaojun_2dcoding6thrift9IdlMethodERP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift7MessageRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift7MessageRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift7MessageRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift7MessageRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok.prototype.$tag = 1;
function _M0TP216zhaojun_2dcoding6thrift7Message(param0, param1, param2, param3) {
  this.name = param0;
  this.message_type = param1;
  this.sequence_id = param2;
  this.body = param3;
}
function _M0TPB8MutLocalGORP216zhaojun_2dcoding6thrift8IdlFieldE(param0) {
  this.val = param0;
}
function _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift10RpcOutcomeRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift10RpcOutcomeRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift10RpcOutcomeRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift10RpcOutcomeRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok.prototype.$tag = 1;
function _M0DTP216zhaojun_2dcoding6thrift10RpcOutcome7Success(param0) {
  this._0 = param0;
}
_M0DTP216zhaojun_2dcoding6thrift10RpcOutcome7Success.prototype.$tag = 0;
function _M0DTP216zhaojun_2dcoding6thrift10RpcOutcome17DeclaredException(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP216zhaojun_2dcoding6thrift10RpcOutcome17DeclaredException.prototype.$tag = 1;
function _M0DTP216zhaojun_2dcoding6thrift10RpcOutcome18ApplicationFailure(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP216zhaojun_2dcoding6thrift10RpcOutcome18ApplicationFailure.prototype.$tag = 2;
function _M0TPB8MutLocalGORP216zhaojun_2dcoding6thrift5ValueE(param0) {
  this.val = param0;
}
function _M0TPB9ArrayViewGUsURP216zhaojun_2dcoding6thrift7IdlTypeRP216zhaojun_2dcoding6thrift5ValueEEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TP216zhaojun_2dcoding6thrift11IdlLocation(param0, param1, param2, param3) {
  this.source = param0;
  this.offset = param1;
  this.line = param2;
  this.column = param3;
}
function _M0DTPC16result6ResultGRPB5ArrayGRP216zhaojun_2dcoding6thrift8IdlTokenERP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP216zhaojun_2dcoding6thrift8IdlTokenERP216zhaojun_2dcoding6thrift11SchemaErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGRP216zhaojun_2dcoding6thrift8IdlTokenERP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP216zhaojun_2dcoding6thrift8IdlTokenERP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok.prototype.$tag = 1;
function _M0TP216zhaojun_2dcoding6thrift10IdlScanner(param0, param1, param2, param3, param4) {
  this.chars = param0;
  this.pos = param1;
  this.line = param2;
  this.column = param3;
  this.source = param4;
}
function _M0TPB8MutLocalGbE(param0) {
  this.val = param0;
}
function _M0TP216zhaojun_2dcoding6thrift8IdlToken(param0, param1, param2) {
  this.text = param0;
  this.quoted = param1;
  this.location = param2;
}
function _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift8IdlTokenRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift8IdlTokenRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift8IdlTokenRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift8IdlTokenRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGsRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGsRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok.prototype.$tag = 1;
function _M0TPB9ArrayViewGUssEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC16result6ResultGRPB3MapGssERP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB3MapGssERP216zhaojun_2dcoding6thrift11SchemaErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB3MapGssERP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB3MapGssERP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGdRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGdRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGdRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGdRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift8IdlConstRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift8IdlConstRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift8IdlConstRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift8IdlConstRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPB5ArrayGRP216zhaojun_2dcoding6thrift8IdlFieldERP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP216zhaojun_2dcoding6thrift8IdlFieldERP216zhaojun_2dcoding6thrift11SchemaErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGRP216zhaojun_2dcoding6thrift8IdlFieldERP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP216zhaojun_2dcoding6thrift8IdlFieldERP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok.prototype.$tag = 1;
function _M0TPB9ArrayViewGUibEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGUsbEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TP216zhaojun_2dcoding6thrift8IdlField(param0, param1, param2, param3, param4, param5, param6) {
  this.id = param0;
  this.name = param1;
  this.field_type = param2;
  this.requiredness = param3;
  this.default_value = param4;
  this.annotations = param5;
  this.location = param6;
}
function _M0TP216zhaojun_2dcoding6thrift9IdlParser(param0, param1, param2) {
  this.tokens = param0;
  this.pos = param1;
  this.work = param2;
}
function _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift9IdlModuleRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift9IdlModuleRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift9IdlModuleRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift9IdlModuleRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok.prototype.$tag = 1;
function _M0DTP216zhaojun_2dcoding6thrift13IdlDefinition5Alias(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP216zhaojun_2dcoding6thrift13IdlDefinition5Alias.prototype.$tag = 0;
function _M0DTP216zhaojun_2dcoding6thrift13IdlDefinition11Enumeration(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP216zhaojun_2dcoding6thrift13IdlDefinition11Enumeration.prototype.$tag = 1;
function _M0DTP216zhaojun_2dcoding6thrift13IdlDefinition6Record(param0, param1, param2, param3) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
}
_M0DTP216zhaojun_2dcoding6thrift13IdlDefinition6Record.prototype.$tag = 2;
function _M0DTP216zhaojun_2dcoding6thrift13IdlDefinition8Constant(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP216zhaojun_2dcoding6thrift13IdlDefinition8Constant.prototype.$tag = 3;
function _M0DTP216zhaojun_2dcoding6thrift13IdlDefinition7Service(param0, param1, param2, param3) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
}
_M0DTP216zhaojun_2dcoding6thrift13IdlDefinition7Service.prototype.$tag = 4;
function _M0TPB8MutLocalGlE(param0) {
  this.val = param0;
}
function _M0TP216zhaojun_2dcoding6thrift9IdlMethod(param0, param1, param2, param3, param4, param5, param6) {
  this.name = param0;
  this.return_type = param1;
  this.oneway = param2;
  this.arguments = param3;
  this.exceptions = param4;
  this.annotations = param5;
  this.location = param6;
}
function _M0TP216zhaojun_2dcoding6thrift9IdlModule(param0, param1, param2, param3, param4) {
  this.source = param0;
  this.includes = param1;
  this.namespaces = param2;
  this.cpp_includes = param3;
  this.definitions = param4;
}
function _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift6SchemaRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift6SchemaRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift6SchemaRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift6SchemaRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok.prototype.$tag = 1;
function _M0TPB9ArrayViewGUsRP216zhaojun_2dcoding6thrift9IdlModuleEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGUsRPB3MapGssEEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGUsRP216zhaojun_2dcoding6thrift13IdlDefinitionEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TP216zhaojun_2dcoding6thrift6Schema(param0, param1, param2, param3, param4) {
  this.root = param0;
  this.modules = param1;
  this.imports = param2;
  this.definitions = param3;
  this.diagnostics = param4;
}
function _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift9IdlMethodRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift9IdlMethodRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift9IdlMethodRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift9IdlMethodRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPB5ArrayGRP216zhaojun_2dcoding6thrift9IdlMethodERP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP216zhaojun_2dcoding6thrift9IdlMethodERP216zhaojun_2dcoding6thrift11SchemaErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGRP216zhaojun_2dcoding6thrift9IdlMethodERP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP216zhaojun_2dcoding6thrift9IdlMethodERP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift7MessageRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift7MessageRP216zhaojun_2dcoding6thrift10CodecErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift7MessageRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift7MessageRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift6ClientRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift6ClientRP216zhaojun_2dcoding6thrift10CodecErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift6ClientRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift6ClientRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok.prototype.$tag = 1;
function _M0TP216zhaojun_2dcoding6thrift6Client(param0, param1, param2, param3, param4, param5, param6) {
  this.protocol = param0;
  this.strict_read = param1;
  this.strict_write = param2;
  this.decoder = param3;
  this.pending = param4;
  this.next_sequence = param5;
  this.failed = param6;
}
function _M0TPB9ArrayViewGUisEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC16result6ResultGUizERP216zhaojun_2dcoding6thrift10CodecErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUizERP216zhaojun_2dcoding6thrift10CodecErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGUizERP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUizERP216zhaojun_2dcoding6thrift10CodecErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPB5ArrayGRP216zhaojun_2dcoding6thrift7MessageERP216zhaojun_2dcoding6thrift10CodecErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP216zhaojun_2dcoding6thrift7MessageERP216zhaojun_2dcoding6thrift10CodecErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGRP216zhaojun_2dcoding6thrift7MessageERP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP216zhaojun_2dcoding6thrift7MessageERP216zhaojun_2dcoding6thrift10CodecErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGzRPB7FailureE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGzRPB7FailureE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGzRPB7FailureE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGzRPB7FailureE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGzRPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGzRPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGzRPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGzRPC15error5ErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGsRPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGsRPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRPC15error5ErrorE2Ok.prototype.$tag = 1;
function _M0TP416zhaojun_2dcoding6thrift3cmd3web12BridgeClient(param0, param1, param2, param3) {
  this.schema = param0;
  this.service = param1;
  this.multiplex = param2;
  this.client = param3;
}
function _M0TP416zhaojun_2dcoding6thrift3cmd3web12BridgeServer(param0, param1, param2, param3, param4, param5) {
  this.schema = param0;
  this.services = param1;
  this.default_service = param2;
  this.protocol = param3;
  this.legacy = param4;
  this.decoder = param5;
}
function _M0TPB8MutLocalGOUisEE(param0) {
  this.val = param0;
}
const _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger = { method_0: _M0IPB13StringBuilderPB6Logger13write__string, method_1: _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE, method_2: _M0IPB13StringBuilderPB6Logger11write__view, method_3: _M0IPB13StringBuilderPB6Logger11write__char, method_4: _M0IP016_24default__implPB6Logger28write__string__interpolationGRPB13StringBuilderE, method_5: _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE };
function _M0FP15Error8to__repr(_e) {
  switch (_e.$tag) {
    case 0: {
      return _M0IP216zhaojun_2dcoding6thrift11SchemaErrorPC15debug5Debug8to__reprGRP216zhaojun_2dcoding6thrift11SchemaErrorE(_e);
    }
    case 3: {
      return _M0IPC28encoding4utf89MalformedPC15debug5Debug8to__reprGRPC28encoding4utf89MalformedE(_e);
    }
    case 6: {
      return _M0IPC14json10ParseErrorPC15debug5Debug8to__reprGRPC14json10ParseErrorE(_e);
    }
    case 2: {
      return _M0IPB7FailurePC15debug5Debug8to__reprGRPB7FailureE(_e);
    }
    case 7: {
      return _M0IPC14json10ParseErrorPC15debug5Debug8to__reprGRPC14json10ParseErrorE(_e);
    }
    case 1: {
      return _M0IP216zhaojun_2dcoding6thrift11SchemaErrorPC15debug5Debug8to__reprGRP216zhaojun_2dcoding6thrift11SchemaErrorE(_e);
    }
    case 8: {
      return _M0IPC14json10ParseErrorPC15debug5Debug8to__reprGRPC14json10ParseErrorE(_e);
    }
    case 9: {
      return _M0IP216zhaojun_2dcoding6thrift10CodecErrorPC15debug5Debug8to__reprGRP216zhaojun_2dcoding6thrift10CodecErrorE(_e);
    }
    case 5: {
      return _M0IPC14json10ParseErrorPC15debug5Debug8to__reprGRPC14json10ParseErrorE(_e);
    }
    default: {
      return _M0IPC14json10ParseErrorPC15debug5Debug8to__reprGRPC14json10ParseErrorE(_e);
    }
  }
}
const _M0MPC16string6String4trimN7_2abindS6861 = "\t\n\r ";
const _M0FPB4null = _M0DTPB4Json4Null__;
const _M0FPB18double__max__value = $i64_reinterpret_f64(9218868437227405311n);
const _M0FPB18double__min__value = $i64_reinterpret_f64(18442240474082181119n);
const _M0MPB4Iter4nextN6constrS9855GUsRPB4JsonEE = 0;
const _M0MPB4Iter4nextN6constrS9856GUsRPB4JsonEE = 0;
const _M0MPB4Iter4nextN6constrS9855GcE = 0;
const _M0MPB4Iter4nextN6constrS9856GcE = 0;
const _M0MPB4Iter3newN6constrS9863GUsRPB4JsonEE = 0;
const _M0MPB4Iter3newN6constrS9863GcE = 0;
const _M0FPC16double14not__a__number = $i64_reinterpret_f64(9221120237041090561n);
const _M0FPC16double8infinity = $i64_reinterpret_f64(9218868437227405312n);
const _M0FPC16double13neg__infinity = $i64_reinterpret_f64(18442240474082181120n);
const _M0FPC15debug14compact__linesN7_2abindS1134 = "";
const _M0FPC15debug14compact__linesN7_2abindS1147 = " ";
const _M0FPC15debug14compact__linesN7_2abindS1141 = ",";
const _M0FPC15debug14compact__linesN7_2abindS1139 = " ";
const _M0FPC15debug14compact__linesN7_2abindS1138 = " ";
const _M0FPC15debug14compact__linesN7_2abindS1136 = "";
const _M0FPC15debug14compact__linesN7_2abindS1148 = "(";
const _M0FPC15debug14compact__linesN7_2abindS1152 = "";
const _M0FPC15debug14compact__linesN7_2abindS1161 = " ";
const _M0FPC15debug14compact__linesN7_2abindS1155 = ",";
const _M0FPC15debug14compact__linesN7_2abindS1166 = " ";
const _M0FPC15debug19bracket__seq__linesN7_2abindS1175 = "";
const _M0FPC15debug14print__contentN7_2abindS1244 = "\n";
const _M0FPC28internal7strconv14base__err__str = "invalid base";
const _M0FPC28internal7strconv15range__err__str = "value out of range";
const _M0FPC28internal7strconv16syntax__err__str = "invalid syntax";
const _M0FPC28internal7strconv17min__19digit__int = 1000000000000000000n;
const _M0FPC28internal7strconv17parse__scientificN8exp__numS354 = 0n;
const _M0FPC28internal7strconv20parse__int64_2einnerN7_2abindS682 = "";
const _M0FPC28internal7strconv27eisel__lemire__pow10__table = [18054884314459144840n, 1671618768450675795n, 11284302696536965525n, 1044761730281672372n, 14105378370671206906n, 5917638181279478369n, 17631722963339008632n, 16620419763454123769n, 11019826852086880395n, 10387762352158827356n, 13774783565108600494n, 8373016921771146291n, 17218479456385750618n, 1242899115359157055n, 10761549660241094136n, 5388497965526861063n, 13451937075301367670n, 6735622456908576329n, 16814921344126709587n, 17642900107990496220n, 10509325840079193492n, 8720969558280366185n, 13136657300098991865n, 10901211947850457732n, 16420821625123739831n, 18238200953240460069n, 10263013515702337394n, 18316404623416369399n, 12828766894627921743n, 13672133742415685941n, 16035958618284902179n, 12478481159592219522n, 10022474136428063862n, 5493207715531443249n, 12528092670535079827n, 16089881681269079869n, 15660115838168849784n, 15500666083158961933n, 9787572398855531115n, 9687916301974351208n, 12234465498569413894n, 7498209359040551106n, 15293081873211767368n, 149389661945913074n, 9558176170757354605n, 93368538716195671n, 11947720213446693256n, 4728396691822632493n, 14934650266808366570n, 5910495864778290617n, 9334156416755229106n, 8305745933913819539n, 11667695520944036383n, 1158810380537498616n, 14584619401180045478n, 15283571030954036982n, 18230774251475056848n, 9881091751837770420n, 11394233907171910530n, 6175682344898606512n, 14242792383964888162n, 16942974967978033949n, 17803490479956110203n, 11955346673117766628n, 11127181549972568877n, 5166248661484910190n, 13908976937465711096n, 11069496845283525642n, 17386221171832138870n, 13836871056604407053n, 10866388232395086794n, 4036358391950366504n, 13582985290493858492n, 14268820026792733938n, 16978731613117323115n, 17836025033490917422n, 10611707258198326947n, 8841672636718129437n, 13264634072747908684n, 6440404777470273892n, 16580792590934885855n, 8050505971837842365n, 10362995369334303659n, 11949095260039733334n, 12953744211667879574n, 10324683056622278764n, 16192180264584849468n, 3682481783923072647n, 10120112665365530917n, 11524923151806696212n, 12650140831706913647n, 571095884476206553n, 15812676039633642058n, 14548927910877421904n, 9882922524771026286n, 13704765962725776594n, 12353653155963782858n, 7907585416552444934n, 15442066444954728573n, 661109733835780360n, 9651291528096705358n, 2719036592861056677n, 12064114410120881697n, 12622167777931096654n, 15080143012651102122n, 1942651667131707105n, 9425089382906938826n, 5825843310384704845n, 11781361728633673532n, 16505676174835656864n, 14726702160792091916n, 2185351144835019464n, 18408377700990114895n, 2731688931043774330n, 11505236063118821809n, 8624834609543440812n, 14381545078898527261n, 15392729280356688919n, 17976931348623159077n, 5405853545163697437n, 11235582092889474423n, 5684501474941004850n, 14044477616111843029n, 2493940825248868159n, 17555597020139803786n, 7729112049988473103n, 10972248137587377366n, 9442381049670183593n, 13715310171984221708n, 2579604275232953683n, 17144137714980277135n, 3224505344041192104n, 10715086071862673209n, 8932844867666826921n, 13393857589828341511n, 15777742103010921555n, 16742321987285426889n, 15110491610336264040n, 10463951242053391806n, 2526528228819083169n, 13079939052566739757n, 12381532322878629770n, 16349923815708424697n, 1641857348316123500n, 10218702384817765435n, 12555375888766046947n, 12773377981022206794n, 11082533842530170780n, 15966722476277758493n, 4629795266307937667n, 9979201547673599058n, 5199465050656154994n, 12474001934591998822n, 15722703350174969551n, 15592502418239998528n, 10430007150863936130n, 9745314011399999080n, 6518754469289960081n, 12181642514249998850n, 8148443086612450102n, 15227053142812498563n, 962181821410786819n, 9516908214257811601n, 16742264702877599426n, 11896135267822264502n, 7092772823314835570n, 14870169084777830627n, 18089338065998320271n, 9293855677986144142n, 8999993282035256217n, 11617319597482680178n, 2026619565689294464n, 14521649496853350222n, 11756646493966393888n, 18152061871066687778n, 5472436080603216552n, 11345038669416679861n, 8031958568804398249n, 14181298336770849826n, 14651634229432885715n, 17726622920963562283n, 9091170749936331336n, 11079139325602226427n, 3376138709496513133n, 13848924157002783033n, 18055231442152805128n, 17311155196253478792n, 8733981247408842698n, 10819471997658424245n, 5458738279630526686n, 13524339997073030306n, 11435108867965546262n, 16905424996341287883n, 5070514048102157020n, 10565890622713304927n, 863228270850154185n, 13207363278391631158n, 14914093393844856443n, 16509204097989538948n, 9419244705451294746n, 10318252561243461842n, 15110399977761835024n, 12897815701554327303n, 9664627935347517973n, 16122269626942909129n, 7469098900757009562n, 10076418516839318205n, 16197401859041600736n, 12595523146049147757n, 6411694268519837208n, 15744403932561434696n, 12626303854077184414n, 9840252457850896685n, 7891439908798240259n, 12300315572313620856n, 14475985904425188227n, 15375394465392026070n, 18094982380531485284n, 9609621540870016294n, 6697677969404790399n, 12012026926087520367n, 17595469498610763806n, 15015033657609400459n, 17382650854836066854n, 9384396036005875287n, 8558313775058847832n, 11730495045007344109n, 6086206200396171886n, 14663118806259180136n, 12219443768922602761n, 18328898507823975170n, 15274304711153253452n, 11455561567389984481n, 14158126462898171311n, 14319451959237480602n, 3862600023340550427n, 17899314949046850752n, 14051622066030463842n, 11187071843154281720n, 8782263791269039901n, 13983839803942852150n, 10977829739086299876n, 17479799754928565188n, 4498915137003099037n, 10924874846830353242n, 12035193997481712706n, 13656093558537941553n, 5820620459997365075n, 17070116948172426941n, 11887461593424094248n, 10668823092607766838n, 9735506505103752857n, 13336028865759708548n, 2946011094524915263n, 16670036082199635685n, 3682513868156144079n, 10418772551374772303n, 4607414176811284001n, 13023465689218465379n, 1147581702586717097n, 16279332111523081723n, 15269535183515560084n, 10174582569701926077n, 7237616480483531100n, 12718228212127407596n, 13658706619031801779n, 15897785265159259495n, 17073383273789752224n, 9936115790724537184n, 17588393573759676996n, 12420144738405671481n, 3538747893490044629n, 15525180923007089351n, 9035120885289943691n, 9703238076879430844n, 12564479580947296663n, 12129047596099288555n, 15705599476184120828n, 15161309495124110694n, 15020313326802763131n, 9475818434452569184n, 4776009810824339053n, 11844773043065711480n, 5970012263530423816n, 14805966303832139350n, 7462515329413029771n, 9253728939895087094n, 52386062455755702n, 11567161174868858867n, 9288854614924470436n, 14458951468586073584n, 6999382250228200141n, 18073689335732591980n, 8749227812785250177n, 11296055834832869987n, 14691639419845557168n, 14120069793541087484n, 13752863256379558556n, 17650087241926359355n, 17191079070474448196n, 11031304526203974597n, 8438581409832836170n, 13789130657754968246n, 15159912780718433117n, 17236413322193710308n, 9726518939043265588n, 10772758326371068942n, 15302446373756816800n, 13465947907963836178n, 9904685930341245193n, 16832434884954795223n, 3157485376071780683n, 10520271803096747014n, 8890957387685944783n, 13150339753870933768n, 1890324697752655170n, 16437924692338667210n, 2362905872190818963n, 10273702932711667006n, 6088502188546649756n, 12842128665889583757n, 16833999772538088003n, 16052660832361979697n, 7207441660390446292n, 10032913020226237310n, 16033866083812498692n, 12541141275282796638n, 10818960567910847557n, 15676426594103495798n, 4300328673033783639n, 9797766621314684873n, 16522763475928278486n, 12247208276643356092n, 6818396289628184396n, 15309010345804195115n, 8522995362035230495n, 9568131466127621947n, 3021029092058325107n, 11960164332659527433n, 17611344420355070096n, 14950205415824409292n, 8179122470161673908n, 9343878384890255807n, 14335323580705822000n, 11679847981112819759n, 13307468457454889596n, 14599809976391024699n, 12022649553391224092n, 18249762470488780874n, 10416625923311642211n, 11406101544055488046n, 11122077220497164286n, 14257626930069360058n, 4679224488766679549n, 17822033662586700072n, 15072402647813125244n, 11138771039116687545n, 9420251654883203278n, 13923463798895859431n, 16387000587031392001n, 17404329748619824289n, 15872064715361852097n, 10877706092887390181n, 3002511419460075705n, 13597132616109237726n, 8364825292752482535n, 16996415770136547158n, 1232659579085827361n, 10622759856335341973n, 14605470292210805812n, 13278449820419177467n, 4421779809981343554n, 16598062275523971834n, 915538744049291538n, 10373788922202482396n, 5183897733458195115n, 12967236152753102995n, 6479872166822743894n, 16209045190941378744n, 3488154190101041964n, 10130653244338361715n, 2180096368813151227n, 12663316555422952143n, 16560178516298602746n, 15829145694278690179n, 16088537126945865529n, 9893216058924181362n, 7749492695127472003n, 12366520073655226703n, 463493832054564196n, 15458150092069033378n, 14414425345350368957n, 9661343807543145861n, 13620701859271368502n, 12076679759428932327n, 3190819268807046916n, 15095849699286165408n, 17823582141290972357n, 9434906062053853380n, 11139738838306857723n, 11793632577567316725n, 13924673547883572154n, 14742040721959145907n, 3570783879572301480n, 18427550902448932383n, 18298537904747540562n, 11517219314030582739n, 18354115218108294707n, 14396524142538228424n, 18330958004207980480n, 17995655178172785531n, 4466953431550423984n, 11247284486357990957n, 486002885505321038n, 14059105607947488696n, 5219189625309039202n, 17573882009934360870n, 6523987031636299002n, 10983676256208975543n, 17912549950054850588n, 13729595320261219429n, 17779001419141175331n, 17161994150326524287n, 8388693718644305452n, 10726246343954077679n, 12160462601793772764n, 13407807929942597099n, 10588892233814828051n, 16759759912428246374n, 8624429273841147159n, 10474849945267653984n, 778582277723329070n, 13093562431584567480n, 973227847154161338n, 16366953039480709350n, 1216534808942701673n, 10229345649675443343n, 14595392310871352257n, 12786682062094304179n, 13632554370161802418n, 15983352577617880224n, 12429006944274865118n, 9989595361011175140n, 7768129340171790699n, 12486994201263968925n, 9710161675214738374n, 15608742751579961156n, 16749388112445810871n, 9755464219737475723n, 1244995533423855986n, 12194330274671844653n, 15391302472061983695n, 15242912843339805817n, 5404070034795315907n, 9526820527087378635n, 14906758817815542202n, 11908525658859223294n, 14021762503842039848n, 14885657073574029118n, 8303831092947774002n, 9303535670983768199n, 578208414664970847n, 11629419588729710248n, 14557818573613377271n, 14536774485912137810n, 18197273217016721589n, 18170968107390172263n, 13523219484416126178n, 11356855067118857664n, 15369541205401160717n, 14196068833898572081n, 765182433041899281n, 17745086042373215101n, 5568164059729762005n, 11090678776483259438n, 5785945546544795205n, 13863348470604074297n, 16455803970035769814n, 17329185588255092872n, 6734696907262548556n, 10830740992659433045n, 4209185567039092847n, 13538426240824291306n, 9873167977226253963n, 16923032801030364133n, 3118087934678041646n, 10576895500643977583n, 4254647968387469981n, 13221119375804971979n, 706623942056949572n, 16526399219756214973n, 14718337982853350677n, 10328999512347634358n, 11504804248497038125n, 12911249390434542948n, 5157633273766521849n, 16139061738043178685n, 6447041592208152311n, 10086913586276986678n, 6335244004343789146n, 12608641982846233347n, 17142427042284512241n, 15760802478557791684n, 16816347784428252397n, 9850501549098619803n, 1286845328412881940n, 12313126936373274753n, 15443614715798266137n, 15391408670466593442n, 5469460339465668959n, 9619630419041620901n, 8030098730593431003n, 12024538023802026126n, 14649309431669176658n, 15030672529752532658n, 9088264752731695015n, 9394170331095332911n, 10291851488884697288n, 11742712913869166139n, 8253128342678483706n, 14678391142336457674n, 5704724409920716729n, 18347988927920572092n, 16354277549255671720n, 11467493079950357558n, 998051431430019017n, 14334366349937946947n, 10470936326142299579n, 17917957937422433684n, 8476984389250486570n, 11198723710889021052n, 14521487280136329914n, 13998404638611276315n, 18151859100170412392n, 17498005798264095394n, 18078137856785627587n, 10936253623915059621n, 15910522178918405146n, 13670317029893824527n, 6053094668365842720n, 17087896287367280659n, 2954682317029915496n, 10679935179604550411n, 17987577512639554849n, 13349918974505688014n, 17872785872372055657n, 16687398718132110018n, 13117610303610293764n, 10429624198832568761n, 12810192458183821506n, 13037030248540710952n, 2177682517447613171n, 16296287810675888690n, 2722103146809516464n, 10185179881672430431n, 6313000485183335694n, 12731474852090538039n, 3279564588051781713n, 15914343565113172548n, 17934513790346890853n, 9946464728195732843n, 1985699082112030975n, 12433080910244666053n, 16317181907922202431n, 15541351137805832567n, 6561419329620589327n, 9713344461128645354n, 11018416108653950185n, 12141680576410806693n, 4549648098962661924n, 15177100720513508366n, 10298746142130715309n, 9485687950320942729n, 1825030320404309164n, 11857109937901178411n, 6892973918932774359n, 14821387422376473014n, 4004531380238580045n, 9263367138985295633n, 16337890167931276240n, 11579208923731619542n, 6587304654631931588n, 14474011154664524427n, 17457502855144690293n, 18092513943330655534n, 17210192550503474962n, 11307821214581659709n, 6144684325637283947n, 14134776518227074636n, 12292541425473992838n, 17668470647783843295n, 15365676781842491048n, 11042794154864902059n, 16521077016292638761n, 13803492693581127574n, 16039660251938410547n, 17254365866976409468n, 10826203278068237376n, 10783978666860255917n, 15989749085647424168n, 13479973333575319897n, 6152128301777116498n, 16849966666969149871n, 12301846395648783526n, 10531229166855718669n, 14606183024921571560n, 13164036458569648337n, 4422670725869800738n, 16455045573212060421n, 10140024425764638826n, 10284403483257537763n, 8643358275316593218n, 12855504354071922204n, 6192511825718353619n, 16069380442589902755n, 7740639782147942024n, 10043362776618689222n, 2532056854628769813n, 12554203470773361527n, 12388443105140738074n, 15692754338466701909n, 10873867862998534689n, 9807971461541688693n, 9102010423587778132n, 12259964326927110866n, 15989199047912110569n, 15324955408658888583n, 10763126773035362404n, 9578097130411805364n, 13644483260788183358n, 11972621413014756705n, 17055604075985229198n, 14965776766268445882n, 7484447039699372786n, 9353610478917778676n, 9289465418239495895n, 11692013098647223345n, 11611831772799369869n, 14615016373309029182n, 679731660717048624n, 18268770466636286477n, 10073036612751086588n, 11417981541647679048n, 8601490892183123069n, 14272476927059598810n, 10751863615228903837n, 17840596158824498513n, 4216457482181353988n, 11150372599265311570n, 14164500972431816002n, 13937965749081639463n, 8482254178684994195n, 17422457186352049329n, 5991131704928854840n, 10889035741470030830n, 15273672361649004035n, 13611294676837538538n, 9868718415206479236n, 17014118346046923173n, 3112525982153323237n, 10633823966279326983n, 4251171748059520975n, 13292279957849158729n, 702278666647013314n, 16615349947311448411n, 5489534351736154547n, 10384593717069655257n, 1125115960621402640n, 12980742146337069071n, 6018080969204141204n, 16225927682921336339n, 2910915193077788601n, 10141204801825835211n, 17960223060169475539n, 12676506002282294014n, 17838592806784456520n, 15845632502852867518n, 13074868971625794843n, 9903520314283042199n, 3560107088838733872n, 12379400392853802748n, 18285191916330581053n, 15474250491067253436n, 4409745821703674700n, 9671406556917033397n, 11979463175419572495n, 12089258196146291747n, 1139270913992301907n, 15111572745182864683n, 15259146697772541096n, 9444732965739290427n, 7231123676894144233n, 11805916207174113034n, 4427218577690292387n, 14757395258967641292n, 14757395258967641292n, 9223372036854775808n, 0n, 11529215046068469760n, 0n, 14411518807585587200n, 0n, 18014398509481984000n, 0n, 11258999068426240000n, 0n, 14073748835532800000n, 0n, 17592186044416000000n, 0n, 10995116277760000000n, 0n, 13743895347200000000n, 0n, 17179869184000000000n, 0n, 10737418240000000000n, 0n, 13421772800000000000n, 0n, 16777216000000000000n, 0n, 10485760000000000000n, 0n, 13107200000000000000n, 0n, 16384000000000000000n, 0n, 10240000000000000000n, 0n, 12800000000000000000n, 0n, 16000000000000000000n, 0n, 10000000000000000000n, 0n, 12500000000000000000n, 0n, 15625000000000000000n, 0n, 9765625000000000000n, 0n, 12207031250000000000n, 0n, 15258789062500000000n, 0n, 9536743164062500000n, 0n, 11920928955078125000n, 0n, 14901161193847656250n, 0n, 9313225746154785156n, 4611686018427387904n, 11641532182693481445n, 5764607523034234880n, 14551915228366851806n, 11817445422220181504n, 18189894035458564758n, 5548434740920451072n, 11368683772161602973n, 17302829768357445632n, 14210854715202003717n, 7793479155164643328n, 17763568394002504646n, 14353534962383192064n, 11102230246251565404n, 4359273333062107136n, 13877787807814456755n, 5449091666327633920n, 17347234759768070944n, 2199678564482154496n, 10842021724855044340n, 1374799102801346560n, 13552527156068805425n, 1718498878501683200n, 16940658945086006781n, 6759809616554491904n, 10587911840678754238n, 6530724019560251392n, 13234889800848442797n, 17386777061305090048n, 16543612251060553497n, 7898413271349198848n, 10339757656912845935n, 16465723340661719040n, 12924697071141057419n, 15970468157399760896n, 16155871338926321774n, 15351399178322313216n, 10097419586828951109n, 4982938468024057856n, 12621774483536188886n, 10840359103457460224n, 15777218104420236108n, 4327076842467049472n, 9860761315262647567n, 11927795063396681728n, 12325951644078309459n, 10298057810818464256n, 15407439555097886824n, 8260886245095692416n, 9629649721936179265n, 5163053903184807760n, 12037062152420224081n, 11065503397408397604n, 15046327690525280101n, 18443565265187884909n, 9403954806578300063n, 13833071299956122020n, 11754943508222875079n, 12679653106517764621n, 14693679385278593849n, 11237880364719817872n, 18367099231598242312n, 212292400617608628n, 11479437019748901445n, 132682750386005392n, 14349296274686126806n, 4777539456409894645n, 17936620343357658507n, 15195296357367144114n, 11210387714598536567n, 7191217214140771119n, 14012984643248170709n, 4377335499248575995n, 17516230804060213386n, 10083355392488107898n, 10947644252537633366n, 10913783138732455340n, 13684555315672041708n, 4418856886560793367n, 17105694144590052135n, 5523571108200991709n, 10691058840368782584n, 10369760970266701674n, 13363823550460978230n, 12962201212833377092n, 16704779438076222788n, 6979379479186945558n, 10440487148797639242n, 13585484211346616781n, 13050608935997049053n, 7758483227328495169n, 16313261169996311316n, 14309790052588006865n, 10195788231247694572n, 18166990819722280098n, 12744735289059618216n, 4261994450943298507n, 15930919111324522770n, 5327493063679123134n, 9956824444577826731n, 7941369183226839863n, 12446030555722283414n, 5315025460606161924n, 15557538194652854267n, 15867153862612478214n, 9723461371658033917n, 7611128154919104931n, 12154326714572542396n, 14125596212076269068n, 15192908393215677995n, 17656995265095336336n, 9495567745759798747n, 8729779031470891258n, 11869459682199748434n, 6300537770911226168n, 14836824602749685542n, 17099044250493808518n, 9273015376718553464n, 6075216638131242420n, 11591269220898191830n, 7594020797664053025n, 14489086526122739788n, 269153960225290473n, 18111358157653424735n, 336442450281613091n, 11319598848533390459n, 7127805559067090038n, 14149498560666738074n, 4298070930406474644n, 17686873200833422592n, 14595960699862869113n, 11054295750520889120n, 9122475437414293195n, 13817869688151111400n, 11403094296767866494n, 17272337110188889250n, 14253867870959833118n, 10795210693868055781n, 13520353437777283602n, 13494013367335069727n, 3065383741939440791n, 16867516709168837158n, 17666787732706464701n, 10542197943230523224n, 6430056314514152534n, 13177747429038154030n, 8037570393142690668n, 16472184286297692538n, 823590954573587527n, 10295115178936057836n, 5126430365035880108n, 12868893973670072295n, 6408037956294850135n, 16086117467087590369n, 3398361426941174765n, 10053823416929743980n, 13653190937906703988n, 12567279271162179975n, 17066488672383379985n, 15709099088952724969n, 16721424822051837077n, 9818186930595453106n, 3533361486141316317n, 12272733663244316382n, 13640073894531421205n, 15340917079055395478n, 7826720331309500698n, 9588073174409622174n, 280014188641050032n, 11985091468012027717n, 9573389772656088348n, 14981364335015034646n, 16578423234247498339n, 9363352709384396654n, 5749828502977298558n, 11704190886730495817n, 16410657665576399005n, 14630238608413119772n, 6678264026688335045n, 18287798260516399715n, 8347830033360418806n, 11429873912822749822n, 2911550761636567802n, 14287342391028437277n, 12862810488900485560n, 17859177988785546597n, 2243455055843443238n, 11161986242990966623n, 3708002419115845976n, 13952482803738708279n, 23317005467419566n, 17440603504673385348n, 13864204312116438170n, 10900377190420865842n, 17888499731927549664n, 13625471488026082303n, 13137252628054661272n, 17031839360032602879n, 11809879766640938686n, 10644899600020376799n, 14298703881791668535n, 13306124500025470999n, 13261693833812197764n, 16632655625031838749n, 11965431273837859301n, 10395409765644899218n, 9784237555362356015n, 12994262207056124023n, 3006924907348169211n, 16242827758820155028n, 17593714189467375226n, 10151767349262596893n, 1772699331562333708n, 12689709186578246116n, 6827560182880305039n, 15862136483222807645n, 8534450228600381299n, 9913835302014254778n, 7639874402088932264n, 12392294127517818473n, 326470965756389522n, 15490367659397273091n, 5019774725622874806n, 9681479787123295682n, 831516194300602802n, 12101849733904119602n, 10262767279730529310n, 15127312167380149503n, 3605087062808385830n, 9454570104612593439n, 9170708441896323000n, 11818212630765741799n, 6851699533943015846n, 14772765788457177249n, 3952938399001381903n, 9232978617785735780n, 13999801545444333449n, 11541223272232169725n, 17499751931805416812n, 14426529090290212157n, 8039631859474607303n, 18033161362862765196n, 14661225842770647033n, 11270725851789228247n, 18386638188586430203n, 14088407314736535309n, 18371611717305649850n, 17610509143420669137n, 9129456591349898601n, 11006568214637918210n, 17235125415662156385n, 13758210268297397763n, 12320534732722919674n, 17197762835371747204n, 10788982397476261688n, 10748601772107342002n, 15966486035277439363n, 13435752215134177503n, 10734735507242023396n, 16794690268917721879n, 8806733365625141341n, 10496681418073576174n, 12421737381156795194n, 13120851772591970218n, 6303799689591218185n, 16401064715739962772n, 17103121648843798539n, 10250665447337476733n, 1466078993672598279n, 12813331809171845916n, 6444284760518135752n, 16016664761464807395n, 8055355950647669691n, 10010415475915504622n, 2728754459941099604n, 12513019344894380777n, 12634315111781150314n, 15641274181117975972n, 1957835834444274180n, 9775796363198734982n, 10447019433382447170n, 12219745453998418728n, 3835402254873283155n, 15274681817498023410n, 4794252818591603944n, 9546676135936264631n, 7608094030047140369n, 11933345169920330789n, 4898431519131537557n, 14916681462400413486n, 10734725417341809851n, 9322925914000258429n, 2097517367411243253n, 11653657392500323036n, 7233582727691441970n, 14567071740625403795n, 9041978409614302462n, 18208839675781754744n, 6690786993590490174n, 11380524797363596715n, 4181741870994056359n, 14225655996704495894n, 615491320315182544n, 17782069995880619867n, 9992736187248753989n, 11113793747425387417n, 3939617107816777291n, 13892242184281734271n, 9536207403198359517n, 17365302730352167839n, 7308573235570561493n, 10853314206470104899n, 11485387299872682789n, 13566642758087631124n, 9745048106413465582n, 16958303447609538905n, 12181310133016831978n, 10598939654755961816n, 695789805494438130n, 13248674568444952270n, 869737256868047663n, 16560843210556190337n, 10310543607939835386n, 10350527006597618960n, 17973304801030866876n, 12938158758247023701n, 4019886927579031980n, 16172698447808779626n, 9636544677901177879n, 10107936529880487266n, 10634526442115624078n, 12634920662350609083n, 4069786015789754290n, 15793650827938261354n, 475546501309804958n, 9871031767461413346n, 4908902581746016003n, 12338789709326766682n, 15359500264037295811n, 15423487136658458353n, 9976003293191843956n, 9639679460411536470n, 17764217104313372233n, 12049599325514420588n, 12981899343536939483n, 15061999156893025735n, 16227374179421174354n, 9413749473058141084n, 17059637889779315827n, 11767186841322676356n, 2877803288514593168n, 14708983551653345445n, 3597254110643241460n, 18386229439566681806n, 9108253656731439729n, 11491393399729176129n, 1080972517029761926n, 14364241749661470161n, 5962901664714590312n, 17955302187076837701n, 12065313099320625794n, 11222063866923023563n, 9846663696289085073n, 14027579833653779454n, 7696643601933968437n, 17534474792067224318n, 397432465562684739n, 10959046745042015198n, 14083453346258841674n, 13698808431302518998n, 8380944645968776284n, 17123510539128148748n, 1252808770606194547n, 10702194086955092967n, 10006377518483647400n, 13377742608693866209n, 7896285879677171346n, 16722178260867332761n, 14482043368023852087n, 10451361413042082976n, 2133748077373825698n, 13064201766302603720n, 2667185096717282123n, 16330252207878254650n, 3333981370896602653n, 10206407629923909156n, 6695424375237764562n, 12758009537404886445n, 8369280469047205703n, 15947511921756108056n, 15073286604736395033n, 9967194951097567535n, 9420804127960246895n, 12458993688871959419n, 7164319141522920715n, 15573742111089949274n, 4343712908476262990n, 9733588819431218296n, 7326506586225052273n, 12166986024289022870n, 9158133232781315341n, 15208732530361278588n, 2224294504121868368n, 9505457831475799117n, 10613556101930943538n, 11881822289344748896n, 17878631145841067327n, 14852277861680936121n, 3901544858591782542n, 9282673663550585075n, 13967680582688333849n, 11603342079438231344n, 12847914709933029407n, 14504177599297789180n, 16059893387416286759n, 18130221999122236476n, 1628122660560806833n, 11331388749451397797n, 10240948699705280078n, 14164235936814247246n, 17412871893058988002n, 17705294921017809058n, 12542717829468959195n, 11065809325636130661n, 12450884661845487401n, 13832261657045163327n, 1728547772024695539n, 17290327071306454158n, 15995742770313033136n, 10806454419566533849n, 5385653213018257806n, 13508068024458167311n, 11343752534700210161n, 16885085030572709139n, 9568004649947874797n, 10553178144107943212n, 3674159897003727796n, 13191472680134929015n, 4592699871254659745n, 16489340850168661269n, 1129188820640936778n, 10305838031355413293n, 3011586022114279438n, 12882297539194266616n, 8376168546070237202n, 16102871923992833270n, 10470210682587796502n, 10064294952495520794n, 1932195658189984910n, 12580368690619400992n, 11638616609592256945n, 15725460863274251240n, 14548270761990321182n, 9828413039546407025n, 9092669226243950738n, 12285516299433008781n, 15977522551232326327n, 15356895374291260977n, 6136845133758244197n, 9598059608932038110n, 15364743254667372383n, 11997574511165047638n, 9982557031479439671n, 14996968138956309548n, 3254824252494523781n, 9373105086847693467n, 11257637194663853171n, 11716381358559616834n, 9460360474902428559n, 14645476698199521043n, 2602078556773259891n, 18306845872749401303n, 17087656251248738576n, 11441778670468375814n, 17597314184671543466n, 14302223338085469768n, 12773270693984653525n, 17877779172606837210n, 15966588367480816906n, 11173611982879273256n, 14590803748102898470n, 13967014978599091570n, 18238504685128623088n, 17458768723248864463n, 13574758819556003052n, 10911730452030540289n, 15401753289863583763n, 13639663065038175362n, 5417133557047315992n, 17049578831297719202n, 15994788983163920798n, 10655986769561074501n, 14608429132904838403n, 13319983461951343127n, 4425478360848884291n, 16649979327439178909n, 920161932633717460n, 10406237079649486818n, 2880944217109767365n, 13007796349561858522n, 12824552308241985014n, 16259745436952323153n, 6807318348447705459n, 10162340898095201970n, 15783789013848285672n, 12702926122619002463n, 10506364230455581282n, 15878657653273753079n, 8521269269642088699n, 9924161033296095674n, 12243322321167387293n, 12405201291620119593n, 6080780864604458308n, 15506501614525149491n, 12212662099182960789n, 9691563509078218432n, 5327070802775656541n, 12114454386347773040n, 6658838503469570676n, 15143067982934716300n, 8323548129336963345n, 9464417489334197687n, 14425589617690377899n, 11830521861667747109n, 13420301003685584469n, 14788152327084683887n, 2940318199324816875n, 9242595204427927429n, 8755227902219092403n, 11553244005534909286n, 15555720896201253407n, 14441555006918636608n, 10221279083396790951n, 18051943758648295760n, 12776598854245988689n, 11282464849155184850n, 7985374283903742931n, 14103081061443981063n, 758345818024902856n, 17628851326804976328n, 14782990327813292282n, 11018032079253110205n, 9239368954883307676n, 13772540099066387756n, 16160897212031522499n, 17215675123832984696n, 1754377441329851508n, 10759796952395615435n, 1096485900831157192n, 13449746190494519293n, 15205665431321110202n, 16812182738118149117n, 5172023733869224041n, 10507614211323843198n, 5538357842881958977n, 13134517764154803997n, 16146319340457224530n, 16418147205193504997n, 6347841120289366950n, 10261342003245940623n, 6273243709394548296n, 12826677504057425779n, 3229868618315797466n, 16033346880071782223n, 17872393828176910545n, 10020841800044863889n, 18087775170251650946n, 12526052250056079862n, 8774660907532399971n, 15657565312570099828n, 1744954097560724156n, 9785978320356312392n, 10313968347830228405n, 12232472900445390490n, 12892460434787785506n, 15290591125556738113n, 6892203506629956075n, 9556619453472961320n, 15836842237712192307n, 11945774316841201651n, 1349308723430688768n, 14932217896051502063n, 15521693959570524672n, 9332636185032188789n, 16618587752372659776n, 11665795231290235987n, 6938176635183661008n, 14582244039112794984n, 4061034775552188356n, 18227805048890993730n, 5076293469440235445n, 11392378155556871081n, 7784369436827535057n, 14240472694446088851n, 14342147814461806725n, 17800590868057611064n, 13315998749649870503n, 11125369292536006915n, 8322499218531169064n, 13906711615670008644n, 5791438004736573426n, 17383389519587510805n, 7239297505920716783n, 10864618449742194253n, 6830403950414141941n, 13580773062177742816n, 13149690956445065330n, 16975966327722178520n, 16437113695556331663n, 10609978954826361575n, 10273196059722707289n, 13262473693532951969n, 8229809056225996208n, 16578092116916189961n, 14898947338709883164n, 10361307573072618726n, 2394313059052595121n, 12951634466340773407n, 12216263360670519709n, 16189543082925966759n, 10658643182410761733n, 10118464426828729224n, 13579181016647807939n, 12648080533535911530n, 16973976270809759924n, 15810100666919889413n, 11994098301657424097n, 9881312916824930883n, 9802154447749584012n, 12351641146031163604n, 7641007041259592112n, 15439551432538954505n, 9551258801574490140n, 9649719645336846565n, 17498751797052526097n, 12062149556671058207n, 8038381691033493909n, 15077686945838822759n, 5436291095364479483n];
const _M0FPC28internal7strconv12double__info = new _M0TPC28internal7strconv9FloatInfo(52, 11, -1023);
const _M0FPC28internal7strconv25min__exponent__fast__path = 18446744073709551594n;
const _M0FPC28internal7strconv25max__exponent__fast__path = 22n;
const _M0FPC28internal7strconv36max__exponent__disguised__fast__path = 37n;
const _M0FPC28internal7strconv25max__mantissa__fast__path = 9007199254740992n;
const _M0FPC28internal7strconv6powtab = [1, 3, 6, 9, 13, 16, 19, 23, 26, 29, 33, 36, 39, 43, 46, 49, 53, 56, 59];
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1023 = { _0: 0, _1: "" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1024 = { _0: 1, _1: "5" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1025 = { _0: 1, _1: "25" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1026 = { _0: 1, _1: "125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1027 = { _0: 2, _1: "625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1028 = { _0: 2, _1: "3125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1029 = { _0: 2, _1: "15625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1030 = { _0: 3, _1: "78125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1031 = { _0: 3, _1: "390625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1032 = { _0: 3, _1: "1953125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1033 = { _0: 4, _1: "9765625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1034 = { _0: 4, _1: "48828125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1035 = { _0: 4, _1: "244140625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1036 = { _0: 4, _1: "1220703125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1037 = { _0: 5, _1: "6103515625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1038 = { _0: 5, _1: "30517578125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1039 = { _0: 5, _1: "152587890625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1040 = { _0: 6, _1: "762939453125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1041 = { _0: 6, _1: "3814697265625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1042 = { _0: 6, _1: "19073486328125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1043 = { _0: 7, _1: "95367431640625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1044 = { _0: 7, _1: "476837158203125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1045 = { _0: 7, _1: "2384185791015625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1046 = { _0: 7, _1: "11920928955078125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1047 = { _0: 8, _1: "59604644775390625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1048 = { _0: 8, _1: "298023223876953125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1049 = { _0: 8, _1: "1490116119384765625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1050 = { _0: 9, _1: "7450580596923828125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1051 = { _0: 9, _1: "37252902984619140625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1052 = { _0: 9, _1: "186264514923095703125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1053 = { _0: 10, _1: "931322574615478515625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1054 = { _0: 10, _1: "4656612873077392578125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1055 = { _0: 10, _1: "23283064365386962890625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1056 = { _0: 10, _1: "116415321826934814453125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1057 = { _0: 11, _1: "582076609134674072265625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1058 = { _0: 11, _1: "2910383045673370361328125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1059 = { _0: 11, _1: "14551915228366851806640625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1060 = { _0: 12, _1: "72759576141834259033203125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1061 = { _0: 12, _1: "363797880709171295166015625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1062 = { _0: 12, _1: "1818989403545856475830078125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1063 = { _0: 13, _1: "9094947017729282379150390625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1064 = { _0: 13, _1: "45474735088646411895751953125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1065 = { _0: 13, _1: "227373675443232059478759765625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1066 = { _0: 13, _1: "1136868377216160297393798828125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1067 = { _0: 14, _1: "5684341886080801486968994140625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1068 = { _0: 14, _1: "28421709430404007434844970703125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1069 = { _0: 14, _1: "142108547152020037174224853515625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1070 = { _0: 15, _1: "710542735760100185871124267578125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1071 = { _0: 15, _1: "3552713678800500929355621337890625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1072 = { _0: 15, _1: "17763568394002504646778106689453125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1073 = { _0: 16, _1: "88817841970012523233890533447265625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1074 = { _0: 16, _1: "444089209850062616169452667236328125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1075 = { _0: 16, _1: "2220446049250313080847263336181640625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1076 = { _0: 16, _1: "11102230246251565404236316680908203125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1077 = { _0: 17, _1: "55511151231257827021181583404541015625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1078 = { _0: 17, _1: "277555756156289135105907917022705078125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1079 = { _0: 17, _1: "1387778780781445675529539585113525390625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1080 = { _0: 18, _1: "6938893903907228377647697925567626953125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1081 = { _0: 18, _1: "34694469519536141888238489627838134765625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1082 = { _0: 18, _1: "173472347597680709441192448139190673828125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1083 = { _0: 19, _1: "867361737988403547205962240695953369140625" };
const _M0FPC28internal7strconv19left__shift__cheats = [_M0FPC28internal7strconv19left__shift__cheatsN5tupleS1023, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1024, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1025, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1026, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1027, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1028, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1029, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1030, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1031, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1032, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1033, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1034, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1035, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1036, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1037, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1038, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1039, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1040, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1041, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1042, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1043, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1044, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1045, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1046, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1047, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1048, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1049, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1050, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1051, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1052, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1053, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1054, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1055, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1056, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1057, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1058, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1059, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1060, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1061, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1062, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1063, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1064, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1065, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1066, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1067, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1068, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1069, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1070, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1071, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1072, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1073, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1074, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1075, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1076, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1077, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1078, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1079, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1080, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1081, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1082, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1083];
const _M0FPC28internal7strconv10int__pow10 = [1n, 10n, 100n, 1000n, 10000n, 100000n, 1000000n, 10000000n, 100000000n, 1000000000n, 10000000000n, 100000000000n, 1000000000000n, 10000000000000n, 100000000000000n, 1000000000000000n];
const _M0FPC28internal7strconv5table = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 10000000000, 100000000000, 1e+012, 1e+013, 1e+014, 1e+015, 1e+016, 1e+017, 1e+018, 1e+019, 1e+020, 1e+021, 1e+022, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const _M0FPC28internal7strconv12checked__mulN6constrS1164 = 0n;
const _M0FPC14json17int__pow10__table = [1n, 10n, 100n, 1000n, 10000n, 100000n, 1000000n, 10000000n, 100000000n, 1000000000n, 10000000000n, 100000000000n, 1000000000000n, 10000000000000n, 100000000000000n, 1000000000000000n];
const _M0FPC14json12pow10__table = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 10000000000, 100000000000, 1e+012, 1e+013, 1e+014, 1e+015, 1e+016, 1e+017, 1e+018, 1e+019, 1e+020, 1e+021, 1e+022, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const _M0FPC14json12checked__mulN6constrS1891 = 0n;
const _M0FPB4seed = _M0FPB12random__seed();
const _M0MPC16string10StringView4findN6constrS9865 = 0;
const _M0FPC28internal7strconv17check__underscoreN25_2atransition__table__222S230 = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 5, 5, 5, 5, 5, 0, 1, 2, 5];
const _M0FPC28internal7strconv15parse__inf__nanN25_2atransition__table__304S312 = [14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 3, 4, 14, 14, 14, 14, 14, 14, 14, 7, 14, 14, 14, 14, 5, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 6, 14, 14, 14, 0, 14, 14, 14, 14, 14, 14, 14, 14, 14, 8, 14, 14, 14, 14, 14, 1, 14, 14, 9, 14, 14, 14, 14, 14, 14, 14, 14, 10, 14, 14, 14, 14, 14, 14, 11, 14, 14, 14, 14, 14, 14, 14, 14, 14, 12, 14, 14, 14, 14, 14, 14, 14, 14, 13, 14, 1, 14, 14, 14, 14, 14, 14, 14];
const _M0FPC15debug6renderN6constrS1705 = 16;
const _M0FP416zhaojun_2dcoding6thrift3cmd3web15transport__next = _M0MPC13ref3Ref3RefGiE(0);
const _bind = [];
const _M0FP416zhaojun_2dcoding6thrift3cmd3web7schemas = _M0MPB3Map3MapGiRP216zhaojun_2dcoding6thrift6SchemaE(new _M0TPB9ArrayViewGUiRP216zhaojun_2dcoding6thrift6SchemaEE(_bind, 0, 0), undefined);
const _bind$2 = [];
const _M0FP416zhaojun_2dcoding6thrift3cmd3web12rpc__servers = _M0MPB3Map3MapGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeServerE(new _M0TPB9ArrayViewGUiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeServerEE(_bind$2, 0, 0), undefined);
const _bind$3 = [];
const _M0FP416zhaojun_2dcoding6thrift3cmd3web12rpc__clients = _M0MPB3Map3MapGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeClientE(new _M0TPB9ArrayViewGUiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeClientEE(_bind$3, 0, 0), undefined);
const _M0FP416zhaojun_2dcoding6thrift3cmd3web12schema__next = _M0MPC13ref3Ref3RefGiE(0);
function _M0FPC15abort5abortGRPB9ArrayViewGsEE(msg) {
  return $panic();
}
function _M0FPC15abort5abortGuE(msg) {
  $panic();
}
function _M0FPC15abort5abortGOiE(msg) {
  return $panic();
}
function _M0MPC14json4Json5array(array) {
  return new _M0DTPB4Json5Array(array);
}
function _M0IPC16string6StringPB6ToJson8to__json(self) {
  return new _M0DTPB4Json6String(self);
}
function _M0FPB4rotl(x, r) {
  return x << r | (x >>> (32 - r | 0) | 0);
}
function _M0FPB13consume4__acc(acc, input) {
  return Math.imul(_M0FPB4rotl((acc >>> 0) + ((Math.imul(input, -1028477379) | 0) >>> 0) | 0, 17), 668265263) | 0;
}
function _M0MPC15array10FixedArray12unsafe__blitGyE(dst, dst_offset, src, src_offset, len) {
  if (dst === src && dst_offset < src_offset) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < len) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        if (_tmp$2 >>> 0 < dst.length) {
          dst[_tmp$2] = _tmp$3 >>> 0 < src.length ? src[_tmp$3] : $oob();
        } else {
          $oob();
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  } else {
    let _tmp = len - 1 | 0;
    while (true) {
      const i = _tmp;
      if (i >= 0) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        if (_tmp$2 >>> 0 < dst.length) {
          dst[_tmp$2] = _tmp$3 >>> 0 < src.length ? src[_tmp$3] : $oob();
        } else {
          $oob();
        }
        _tmp = i - 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
}
function _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGsEE(dst, dst_offset, src, src_offset, len) {
  if (dst === src && dst_offset < src_offset) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < len) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        if (_tmp$2 >>> 0 < dst.length) {
          dst[_tmp$2] = _tmp$3 >>> 0 < src.length ? src[_tmp$3] : $oob();
        } else {
          $oob();
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  } else {
    let _tmp = len - 1 | 0;
    while (true) {
      const i = _tmp;
      if (i >= 0) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        if (_tmp$2 >>> 0 < dst.length) {
          dst[_tmp$2] = _tmp$3 >>> 0 < src.length ? src[_tmp$3] : $oob();
        } else {
          $oob();
        }
        _tmp = i - 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
}
function _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGyEE(dst, dst_offset, src, src_offset, len) {
  if (dst === src && dst_offset < src_offset) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < len) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        if (_tmp$2 >>> 0 < dst.length) {
          dst[_tmp$2] = _tmp$3 >>> 0 < src.length ? src[_tmp$3] : $oob();
        } else {
          $oob();
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  } else {
    let _tmp = len - 1 | 0;
    while (true) {
      const i = _tmp;
      if (i >= 0) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        if (_tmp$2 >>> 0 < dst.length) {
          dst[_tmp$2] = _tmp$3 >>> 0 < src.length ? src[_tmp$3] : $oob();
        } else {
          $oob();
        }
        _tmp = i - 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
}
function _M0MPB18UninitializedArray12unsafe__blitGsE(dst, dst_offset, src, src_offset, len) {
  _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGsEE(dst, dst_offset, src, src_offset, len);
}
function _M0MPB18UninitializedArray12unsafe__blitGyE(dst, dst_offset, src, src_offset, len) {
  _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGyEE(dst, dst_offset, src, src_offset, len);
}
function _M0MPB18UninitializedArray23unsafe__make__and__blitGyE(src, allocate_len, src_offset, dst_offset, blit_len) {
  const dst = new Uint8Array(allocate_len);
  _M0MPB18UninitializedArray12unsafe__blitGyE(dst, dst_offset, src, src_offset, blit_len);
  return dst;
}
function _M0MPB13StringBuilder13write__objectGdE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGdE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(self, obj) {
  _M0IPC16string10StringViewPB4Show6output(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder13write__objectGsE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGsE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPC13int3Int16unsafe__to__char(self) {
  return self;
}
function _M0MPC14byte4Byte8to__char(self) {
  return self;
}
function _M0MPB13StringBuilder21StringBuilder_2einner(size_hint) {
  return new _M0TPB13StringBuilder("");
}
function _M0MPB13StringBuilder10to__string(self) {
  return self.val;
}
function _M0IPB13StringBuilderPB6Logger11write__char(self, ch) {
  self.val = `${self.val}${String.fromCodePoint(ch)}`;
}
function _M0IPB13StringBuilderPB6Logger13write__string(self, str) {
  self.val = `${self.val}${str}`;
}
function _M0MPC16uint166UInt1622is__leading__surrogate(self) {
  return self >= 55296 && self <= 56319;
}
function _M0MPC16uint166UInt1623is__trailing__surrogate(self) {
  return self >= 56320 && self <= 57343;
}
function _M0FPB32code__point__of__surrogate__pair(leading, trailing) {
  return (((Math.imul(leading - 55296 | 0, 1024) | 0) + trailing | 0) - 56320 | 0) + 65536 | 0;
}
function _M0MPC16uint166UInt1616unsafe__to__char(self) {
  return self;
}
function _M0MPC16string6String16unsafe__char__at(self, index) {
  const c1 = self.charCodeAt(index);
  if (_M0MPC16uint166UInt1622is__leading__surrogate(c1)) {
    const c2 = self.charCodeAt(index + 1 | 0);
    return _M0FPB32code__point__of__surrogate__pair(c1, c2);
  } else {
    return _M0MPC16uint166UInt1616unsafe__to__char(c1);
  }
}
function _M0IPC14byte4BytePB3Add3add(self, that) {
  return (self + that | 0) & 255;
}
function _M0IPC14byte4BytePB3Div3div(self, that) {
  if (that === 0) {
    $panic();
  }
  return (self / that | 0) & 255;
}
function _M0IPC14byte4BytePB3Mod3mod(self, that) {
  if (that === 0) {
    $panic();
  }
  return (self % that | 0) & 255;
}
function _M0IPC14byte4BytePB3Sub3sub(self, that) {
  return (self - that | 0) & 255;
}
function _M0MPC14byte4Byte7to__hexN14to__hex__digitS3978(i) {
  return i < 10 ? _M0MPC14byte4Byte8to__char(_M0IPC14byte4BytePB3Add3add(i, 48)) : _M0MPC14byte4Byte8to__char(_M0IPC14byte4BytePB3Sub3sub(_M0IPC14byte4BytePB3Add3add(i, 97), 10));
}
function _M0MPC14byte4Byte7to__hex(b) {
  const _self = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0IPB13StringBuilderPB6Logger11write__char(_self, _M0MPC14byte4Byte7to__hexN14to__hex__digitS3978(_M0IPC14byte4BytePB3Div3div(b, 16)));
  _M0IPB13StringBuilderPB6Logger11write__char(_self, _M0MPC14byte4Byte7to__hexN14to__hex__digitS3978(_M0IPC14byte4BytePB3Mod3mod(b, 16)));
  return _M0MPB13StringBuilder10to__string(_self);
}
function _M0MPC16string10StringView11sub_2einner(self, start, end) {
  const str_len = self.str.length;
  let abs_end;
  if (end === undefined) {
    abs_end = self.end;
  } else {
    const _Some = end;
    const _end = _Some;
    abs_end = self.start + _end | 0;
  }
  const abs_start = self.start + start | 0;
  if (abs_start >= self.start && (abs_start <= abs_end && abs_end <= self.end)) {
    if (abs_start < str_len) {
      if (!_M0MPC16uint166UInt1623is__trailing__surrogate(self.str.charCodeAt(abs_start))) {
      } else {
        $panic();
      }
    }
    if (abs_end < str_len) {
      if (!_M0MPC16uint166UInt1623is__trailing__surrogate(self.str.charCodeAt(abs_end))) {
      } else {
        $panic();
      }
    }
    return new _M0TPC16string10StringView(self.str, abs_start, abs_end);
  } else {
    return $panic();
  }
}
function _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3963(_env, seg, i) {
  const logger = _env._1;
  const self = _env._0;
  if (i > seg) {
    logger.method_table.method_2(logger.self, _M0MPC16string10StringView11sub_2einner(self, seg, i));
    return;
  } else {
    return;
  }
}
function _M0MPC16string10StringView18escape__to_2einner(self, logger, quote) {
  if (quote) {
    logger.method_table.method_3(logger.self, 34);
  }
  const len = self.end - self.start | 0;
  const _env = { _0: self, _1: logger };
  let _tmp = 0;
  let _tmp$2 = 0;
  _L: while (true) {
    const i = _tmp;
    const seg = _tmp$2;
    if (i >= len) {
      _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3963(_env, seg, i);
      break;
    }
    const code = self.str.charCodeAt(self.start + i | 0);
    let c;
    _L$2: {
      switch (code) {
        case 34: {
          c = code;
          break _L$2;
        }
        case 92: {
          c = code;
          break _L$2;
        }
        case 10: {
          _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3963(_env, seg, i);
          logger.method_table.method_0(logger.self, "\\n");
          _tmp = i + 1 | 0;
          _tmp$2 = i + 1 | 0;
          continue _L;
        }
        case 13: {
          _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3963(_env, seg, i);
          logger.method_table.method_0(logger.self, "\\r");
          _tmp = i + 1 | 0;
          _tmp$2 = i + 1 | 0;
          continue _L;
        }
        case 8: {
          _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3963(_env, seg, i);
          logger.method_table.method_0(logger.self, "\\b");
          _tmp = i + 1 | 0;
          _tmp$2 = i + 1 | 0;
          continue _L;
        }
        case 9: {
          _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3963(_env, seg, i);
          logger.method_table.method_0(logger.self, "\\t");
          _tmp = i + 1 | 0;
          _tmp$2 = i + 1 | 0;
          continue _L;
        }
        default: {
          if (code < 32) {
            _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3963(_env, seg, i);
            logger.method_table.method_0(logger.self, "\\u{");
            logger.method_table.method_0(logger.self, _M0MPC14byte4Byte7to__hex(code & 255));
            logger.method_table.method_3(logger.self, 125);
            _tmp = i + 1 | 0;
            _tmp$2 = i + 1 | 0;
            continue _L;
          } else {
            _tmp = i + 1 | 0;
            continue _L;
          }
        }
      }
    }
    _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3963(_env, seg, i);
    logger.method_table.method_3(logger.self, 92);
    logger.method_table.method_3(logger.self, _M0MPC16uint166UInt1616unsafe__to__char(c));
    _tmp = i + 1 | 0;
    _tmp$2 = i + 1 | 0;
    continue;
  }
  if (quote) {
    logger.method_table.method_3(logger.self, 34);
    return;
  } else {
    return;
  }
}
function _M0MPC16string6String14escape_2einner(self, quote) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0MPC16string10StringView18escape__to_2einner(new _M0TPC16string10StringView(self, 0, self.length), { self: buf, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger }, quote);
  return _M0MPB13StringBuilder10to__string(buf);
}
function _M0MPC15array13ReadOnlyArray11unsafe__getGiE(self, index) {
  return self[index];
}
function _M0MPC16string10StringView12view_2einner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.end - self.start | 0;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= (self.end - self.start | 0)) ? new _M0TPC16string10StringView(self.str, self.start + start_offset | 0, self.start + end_offset$2 | 0) : _M0FPC15abort5abortGRPB9ArrayViewGsEE("Invalid index for View");
}
function _M0MPC16uint646UInt648to__byte(self) {
  return (Number(BigInt.asIntN(32, self)) | 0) & 255;
}
function _M0IPC16uint166UInt16PB2Eq5equal(self, that) {
  return self === that;
}
function _M0IPC16uint166UInt16PB2Eq10not__equal(self, that) {
  return self !== that;
}
function _M0MPC14json4Json6number(number, repr) {
  return new _M0DTPB4Json6Number(number, repr);
}
function _M0MPC16uint166UInt168to__uint(self) {
  return self;
}
function _M0MPC13int3Int10to__uint64(self) {
  return BigInt.asUintN(64, BigInt(self));
}
function _M0IPC15tuple6Tuple2PB2Eq5equalGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift5ValueE(self, other) {
  return _M0IP216zhaojun_2dcoding6thrift5ValuePB2Eq5equal(self._0, other._0) && _M0IP216zhaojun_2dcoding6thrift5ValuePB2Eq5equal(self._1, other._1);
}
function _M0IPC15tuple6Tuple2PB2Eq5equalGiRP216zhaojun_2dcoding6thrift5ValueE(self, other) {
  return self._0 === other._0 && _M0IP216zhaojun_2dcoding6thrift5ValuePB2Eq5equal(self._1, other._1);
}
function _M0IPC15tuple6Tuple2PB2Eq5equalGRP216zhaojun_2dcoding6thrift8IdlConstRP216zhaojun_2dcoding6thrift8IdlConstE(self, other) {
  return _M0IP216zhaojun_2dcoding6thrift8IdlConstPB2Eq5equal(self._0, other._0) && _M0IP216zhaojun_2dcoding6thrift8IdlConstPB2Eq5equal(self._1, other._1);
}
function _M0IP016_24default__implPB2Eq10not__equalGsE(x, y) {
  return !(x === y);
}
function _M0IP016_24default__implPB2Eq10not__equalGRP216zhaojun_2dcoding6thrift7IdlTypeE(x, y) {
  return !_M0IP216zhaojun_2dcoding6thrift7IdlTypePB2Eq5equal(x, y);
}
function _M0IP016_24default__implPB2Eq10not__equalGORP216zhaojun_2dcoding6thrift8IdlConstE(x, y) {
  return !_M0IPC16option6OptionPB2Eq5equalGRP216zhaojun_2dcoding6thrift8IdlConstE(x, y);
}
function _M0IP016_24default__implPB2Eq10not__equalGRP216zhaojun_2dcoding6thrift4KindE(x, y) {
  return !_M0IP216zhaojun_2dcoding6thrift4KindPB2Eq5equal(x, y);
}
function _M0IP016_24default__implPB2Eq10not__equalGORP216zhaojun_2dcoding6thrift4KindE(x, y) {
  return !_M0IPC16option6OptionPB2Eq5equalGRP216zhaojun_2dcoding6thrift4KindE(x, y);
}
function _M0IP016_24default__implPB2Eq10not__equalGOcE(x, y) {
  return !_M0IPC16option6OptionPB2Eq5equalGcE(x, y);
}
function _M0IP016_24default__implPB2Eq10not__equalGRPC16string10StringViewE(x, y) {
  return !_M0IPC16string10StringViewPB2Eq5equal(x, y);
}
function _M0FPB14avalanche__acc(acc) {
  let acc$2 = acc;
  acc$2 = acc$2 ^ (acc$2 >>> 15 | 0);
  acc$2 = Math.imul(acc$2, -2048144777) | 0;
  acc$2 = acc$2 ^ (acc$2 >>> 13 | 0);
  acc$2 = Math.imul(acc$2, -1028477379) | 0;
  acc$2 = acc$2 ^ (acc$2 >>> 16 | 0);
  return acc$2;
}
function _M0FPB13finalize__acc(acc) {
  return _M0FPB14avalanche__acc(acc);
}
function _M0IP016_24default__implPB6Logger28write__string__interpolationGRPB13StringBuilderE(self, show) {
  show.method_table.method_0(show.self, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE(self, show) {
  show.method_table.method_0(show.self, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPC16string6String11sub_2einner(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end;
  }
  if (start >= 0 && (start <= end$2 && end$2 <= len)) {
    if (start < len) {
      if (!_M0MPC16uint166UInt1623is__trailing__surrogate(self.charCodeAt(start))) {
      } else {
        $panic();
      }
    }
    if (end$2 < len) {
      if (!_M0MPC16uint166UInt1623is__trailing__surrogate(self.charCodeAt(end$2))) {
      } else {
        $panic();
      }
    }
    return new _M0TPC16string10StringView(self, start, end$2);
  } else {
    return $panic();
  }
}
function _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(self, value, start, len) {
  _M0IPB13StringBuilderPB6Logger11write__view(self, _M0MPC16string6String11sub_2einner(value, start, start + len | 0));
}
function _M0MPC16string10StringView4data(self) {
  return self.str;
}
function _M0MPC16string10StringView13start__offset(self) {
  return self.start;
}
function _M0IP016_24default__implPB4Show6outputGdE(self, logger) {
  logger.method_table.method_0(logger.self, _M0IPC16double6DoublePB4Show10to__string(self));
}
function _M0IP016_24default__implPB4Show6outputGsE(self, logger) {
  logger.method_table.method_0(logger.self, _M0IPC16string6StringPB4Show10to__string(self));
}
function _M0IP016_24default__implPB4Show10to__stringGRPC15debug4ReprE(self) {
  const logger = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0IPC15debug4ReprPB4Show6output(self, { self: logger, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
  return _M0MPB13StringBuilder10to__string(logger);
}
function _M0MPB4Iter4nextGUsRPB4JsonEE(self) {
  const _func = self.f;
  const result = _func();
  const _bind$4 = self.size_hint;
  if (result === undefined) {
    self.size_hint = _M0MPB4Iter4nextN6constrS9856GUsRPB4JsonEE;
  } else {
    if (_bind$4 === undefined) {
    } else {
      const _Some = _bind$4;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS9855GUsRPB4JsonEE;
    }
  }
  return result;
}
function _M0MPB4Iter4nextGcE(self) {
  const _func = self.f;
  const result = _func();
  const _bind$4 = self.size_hint;
  if (result === -1) {
    self.size_hint = _M0MPB4Iter4nextN6constrS9856GcE;
  } else {
    if (_bind$4 === undefined) {
    } else {
      const _Some = _bind$4;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS9855GcE;
    }
  }
  return result;
}
function _M0MPC13int3Int18to__string_2einner(self, radix) {
  return _M0FPB19int__to__string__js(self, radix);
}
function _M0MPC15int645Int6418to__string_2einner(self, radix) {
  return _M0FPB21int64__to__string__js(self, radix);
}
function _M0MPB4Iter3newGUsRPB4JsonEE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS9863GUsRPB4JsonEE;
  }
  return new _M0TPB4IterGUsRPB4JsonEE(f, size_hint$2);
}
function _M0MPB4Iter3newGcE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS9863GcE;
  }
  return new _M0TPB4IterGcE(f, size_hint$2);
}
function _M0MPC15array10FixedArray5makeiGkE(length, value) {
  if (length <= 0) {
    return [];
  } else {
    const array = $make_array_len_and_init(length, value(0));
    let _tmp = 1;
    while (true) {
      const i = _tmp;
      if (i < length) {
        if (i >>> 0 < array.length) {
          array[i] = value(i);
        } else {
          $oob();
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return array;
  }
}
function _M0MPC16string10StringView11code__units(self) {
  const _bind$4 = _M0MPC15array10FixedArray5makeiGkE(self.str.length, (i) => self.str.charCodeAt(i));
  const _bind$5 = self.start;
  const _bind$6 = self.end;
  const _bind$7 = _bind$4.length;
  if (_bind$5 < 0 || (_bind$5 > _bind$6 || _bind$6 > _bind$7)) {
    $panic();
  }
  return new _M0TPB9ArrayViewGkE(_bind$4, _bind$5, _bind$6);
}
function _M0MPC16string10StringView9to__owned(self) {
  return self.str.substring(self.start, self.end);
}
function _M0IPC16string10StringViewPB4Show6output(self, logger) {
  logger.method_table.method_2(logger.self, self);
}
function _M0MPC16string10StringView4iter(self) {
  const start = self.start;
  const end = self.end;
  const index = new _M0TPB8MutLocalGiE(start);
  return _M0MPB4Iter3newGcE(() => {
    if (index.val < end) {
      const c1 = self.str.charCodeAt(index.val);
      if (_M0MPC16uint166UInt1622is__leading__surrogate(c1) && (index.val + 1 | 0) < self.end) {
        const c2 = self.str.charCodeAt(index.val + 1 | 0);
        if (_M0MPC16uint166UInt1623is__trailing__surrogate(c2)) {
          index.val = index.val + 2 | 0;
          return _M0FPB32code__point__of__surrogate__pair(c1, c2);
        }
      }
      index.val = index.val + 1 | 0;
      return _M0MPC16uint166UInt1616unsafe__to__char(c1);
    } else {
      return -1;
    }
  }, undefined);
}
function _M0MPC16string10StringView3all(self, f) {
  const _bind$4 = self.str;
  const _bind$5 = self.start;
  const _bind$6 = self.end;
  let _tmp = _bind$5;
  while (true) {
    const _string_index = _tmp;
    if (_string_index < _bind$6) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$7 = _bind$4.charCodeAt(_string_index);
        if (_bind$7 >= 55296 && _bind$7 <= 56319 && (_string_index + 1 | 0) < _bind$6) {
          const _bind$8 = _bind$4.charCodeAt(_string_index + 1 | 0);
          if (_bind$8 >= 56320 && _bind$8 <= 57343) {
            _decoded_next_string_index = _string_index + 2 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char((((Math.imul(_bind$7 - 55296 | 0, 1024) | 0) + _bind$8 | 0) - 56320 | 0) + 65536 | 0);
            break _L;
          } else {
            _decoded_next_string_index = _string_index + 1 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$7);
            break _L;
          }
        } else {
          _decoded_next_string_index = _string_index + 1 | 0;
          _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$7);
          break _L;
        }
      }
      if (!f(_decoded_char)) {
        return false;
      }
      _tmp = _decoded_next_string_index;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0MPC16string6String20unsafe__range__equal(self, self_off, other, other_off, len) {
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < len) {
      if (_M0IPC16uint166UInt16PB2Eq5equal(self.charCodeAt(self_off + i | 0), other.charCodeAt(other_off + i | 0))) {
      } else {
        return false;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0IPC16string10StringViewPB2Eq5equal(self, other) {
  const len = self.end - self.start | 0;
  if (len === (other.end - other.start | 0)) {
    if (self.str === other.str && self.start === other.start) {
      return true;
    }
    return _M0MPC16string6String20unsafe__range__equal(self.str, self.start, other.str, other.start, len);
  } else {
    return false;
  }
}
function _M0MPC16string6String12view_2einner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= self.length) ? new _M0TPC16string10StringView(self, start_offset, end_offset$2) : _M0FPC15abort5abortGRPB9ArrayViewGsEE("Invalid index for View");
}
function _M0MPC16string6String11from__array(chars) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(Math.imul(chars.end - chars.start | 0, 4) | 0);
  const _bind$4 = chars.end - chars.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$4) {
      const c = chars.buf[chars.start + _ | 0];
      _M0IPB13StringBuilderPB6Logger11write__char(buf, c);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0MPB13StringBuilder10to__string(buf);
}
function _M0MPC16string6String24char__length__ge_2einner(self, len, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  let _tmp = start_offset;
  let _tmp$2 = 0;
  while (true) {
    const index = _tmp;
    const count = _tmp$2;
    if (index < end_offset$2 && count < len) {
      const c1 = self.charCodeAt(index);
      if (_M0MPC16uint166UInt1622is__leading__surrogate(c1) && (index + 1 | 0) < end_offset$2) {
        const c2 = self.charCodeAt(index + 1 | 0);
        if (_M0MPC16uint166UInt1623is__trailing__surrogate(c2)) {
          _tmp = index + 2 | 0;
          _tmp$2 = count + 1 | 0;
          continue;
        } else {
          _M0FPC15abort5abortGuE("invalid surrogate pair");
        }
      }
      _tmp = index + 1 | 0;
      _tmp$2 = count + 1 | 0;
      continue;
    } else {
      return count >= len;
    }
  }
}
function _M0MPC16string6String31offset__of__nth__char__backward(self, n, start_offset, end_offset) {
  let _tmp = end_offset;
  let _tmp$2 = 0;
  while (true) {
    const utf16_offset = _tmp;
    const char_count = _tmp$2;
    if ((utf16_offset - 1 | 0) >= start_offset && char_count < n) {
      const c = self.charCodeAt(utf16_offset - 1 | 0);
      if (_M0MPC16uint166UInt1623is__trailing__surrogate(c)) {
        _tmp = utf16_offset - 2 | 0;
        _tmp$2 = char_count + 1 | 0;
        continue;
      } else {
        _tmp = utf16_offset - 1 | 0;
        _tmp$2 = char_count + 1 | 0;
        continue;
      }
    } else {
      return char_count < n || utf16_offset < start_offset ? undefined : utf16_offset;
    }
  }
}
function _M0MPC16string6String30offset__of__nth__char__forward(self, n, start_offset, end_offset) {
  if (start_offset >= 0 && start_offset <= end_offset) {
    let _tmp = start_offset;
    let _tmp$2 = 0;
    while (true) {
      const utf16_offset = _tmp;
      const char_count = _tmp$2;
      if (utf16_offset < end_offset && char_count < n) {
        const c = self.charCodeAt(utf16_offset);
        if (_M0MPC16uint166UInt1622is__leading__surrogate(c)) {
          _tmp = utf16_offset + 2 | 0;
          _tmp$2 = char_count + 1 | 0;
          continue;
        } else {
          _tmp = utf16_offset + 1 | 0;
          _tmp$2 = char_count + 1 | 0;
          continue;
        }
      } else {
        return char_count < n || utf16_offset >= end_offset ? undefined : utf16_offset;
      }
    }
  } else {
    return _M0FPC15abort5abortGOiE("Invalid start index");
  }
}
function _M0MPC16string6String29offset__of__nth__char_2einner(self, i, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return i >= 0 ? _M0MPC16string6String30offset__of__nth__char__forward(self, i, start_offset, end_offset$2) : _M0MPC16string6String31offset__of__nth__char__backward(self, -i | 0, start_offset, end_offset$2);
}
function _M0IPB13StringBuilderPB6Logger11write__view(self, str) {
  self.val = `${self.val}${_M0MPC16string10StringView9to__owned(str)}`;
}
function _M0FPB19kmp__failure__table(pattern) {
  const m = pattern.end - pattern.start | 0;
  const table = $make_array_len_and_init(m, 0);
  let k = 0;
  let _tmp = 1;
  while (true) {
    const i = _tmp;
    if (i < m) {
      const c = pattern.str.charCodeAt(pattern.start + i | 0);
      while (true) {
        if (k > 0 && _M0IPC16uint166UInt16PB2Eq10not__equal(c, pattern.str.charCodeAt(pattern.start + k | 0))) {
          const _tmp$2 = k - 1 | 0;
          k = _tmp$2 >>> 0 < table.length ? table[_tmp$2] : $oob();
          continue;
        } else {
          break;
        }
      }
      if (_M0IPC16uint166UInt16PB2Eq5equal(c, pattern.str.charCodeAt(pattern.start + k | 0))) {
        k = k + 1 | 0;
      }
      if (i >>> 0 < table.length) {
        table[i] = k;
      } else {
        $oob();
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return table;
}
function _M0FPB24find__pattern__kmp__from(target, pattern, start) {
  const n = target.end - target.start | 0;
  const m = pattern.end - pattern.start | 0;
  const table = _M0FPB19kmp__failure__table(pattern);
  let k = 0;
  let _tmp = start;
  while (true) {
    const i = _tmp;
    if (i < n) {
      const c = target.str.charCodeAt(target.start + i | 0);
      while (true) {
        if (k > 0 && _M0IPC16uint166UInt16PB2Eq10not__equal(c, pattern.str.charCodeAt(pattern.start + k | 0))) {
          const _tmp$2 = k - 1 | 0;
          k = _tmp$2 >>> 0 < table.length ? table[_tmp$2] : $oob();
          continue;
        } else {
          break;
        }
      }
      if (_M0IPC16uint166UInt16PB2Eq5equal(c, pattern.str.charCodeAt(pattern.start + k | 0))) {
        k = k + 1 | 0;
      }
      if (k === m) {
        return (i - m | 0) + 1 | 0;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return undefined;
}
function _M0FPB36find__two__anchor__candidate__scalar(data, start, candidate_end, first, last_offset, last) {
  let _tmp = start;
  while (true) {
    const pos = _tmp;
    if (pos < candidate_end) {
      if (_M0IPC16uint166UInt16PB2Eq5equal(data.charCodeAt(pos), first) && _M0IPC16uint166UInt16PB2Eq5equal(data.charCodeAt(pos + last_offset | 0), last)) {
        return pos;
      }
      _tmp = pos + 1 | 0;
      continue;
    } else {
      return -1;
    }
  }
}
function _M0FPB42find__two__anchor__candidate__from__string(data, start, candidate_end, first, last_offset, last) {
  return _M0FPB36find__two__anchor__candidate__scalar(data, start, candidate_end, first, last_offset, last);
}
function _M0FPB21string__ranges__equal(left, left_start, right, right_start, length) {
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < length) {
      if (_M0IPC16uint166UInt16PB2Eq10not__equal(left.charCodeAt(left_start + i | 0), right.charCodeAt(right_start + i | 0))) {
        return false;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0FPB29two__anchor__should__fallback(failures, scanned) {
  if (failures > 64) {
    return true;
  } else {
    if (8 === 0) {
      $panic();
    }
    return failures > (4 + (scanned / 8 | 0) | 0);
  }
}
function _M0FPB22find__by__two__anchors(target, pattern) {
  const target_len = target.end - target.start | 0;
  const pattern_len = pattern.end - pattern.start | 0;
  const target_start = _M0MPC16string10StringView13start__offset(target);
  const pattern_start = _M0MPC16string10StringView13start__offset(pattern);
  const last_offset = pattern_len - 1 | 0;
  const candidate_end = ((target_start + target_len | 0) - pattern_len | 0) + 1 | 0;
  const first = pattern.str.charCodeAt(pattern.start);
  const last = pattern.str.charCodeAt(pattern.start + last_offset | 0);
  const middle_len = last_offset - 1 | 0;
  let _tmp = target_start;
  let _tmp$2 = 0;
  while (true) {
    const pos = _tmp;
    const failures = _tmp$2;
    if (pos < candidate_end) {
      const found = _M0FPB42find__two__anchor__candidate__from__string(_M0MPC16string10StringView4data(target), pos, candidate_end, first, last_offset, last);
      if (found < 0) {
        return undefined;
      }
      if (_M0FPB21string__ranges__equal(_M0MPC16string10StringView4data(target), found + 1 | 0, _M0MPC16string10StringView4data(pattern), pattern_start + 1 | 0, middle_len)) {
        return found - target_start | 0;
      }
      const failures$2 = failures + 1 | 0;
      const scanned = found - target_start | 0;
      if (_M0FPB29two__anchor__should__fallback(failures$2, scanned)) {
        return _M0FPB24find__pattern__kmp__from(target, pattern, scanned + 1 | 0);
      }
      _tmp = found + 1 | 0;
      _tmp$2 = failures$2;
      continue;
    } else {
      return undefined;
    }
  }
}
function _M0FPB24find__code__unit__scalar(data, start, end, code) {
  let _tmp = start;
  while (true) {
    const pos = _tmp;
    if (pos < end) {
      if (_M0IPC16uint166UInt16PB2Eq5equal(data.charCodeAt(pos), code)) {
        return pos;
      }
      _tmp = pos + 1 | 0;
      continue;
    } else {
      return -1;
    }
  }
}
function _M0FPB30find__code__unit__from__string(data, start, end, code) {
  return _M0FPB24find__code__unit__scalar(data, start, end, code);
}
function _M0FPB28find__code__unit__from__view(target, start, end, code) {
  const target_start = _M0MPC16string10StringView13start__offset(target);
  const found = _M0FPB30find__code__unit__from__string(_M0MPC16string10StringView4data(target), target_start + start | 0, target_start + end | 0, code);
  return found < 0 ? -1 : found - target_start | 0;
}
function _M0MPC16string10StringView4find(self, str) {
  const pattern_len = str.end - str.start | 0;
  switch (pattern_len) {
    case 0: {
      return _M0MPC16string10StringView4findN6constrS9865;
    }
    case 1: {
      const found = _M0FPB28find__code__unit__from__view(self, 0, self.end - self.start | 0, str.str.charCodeAt(str.start));
      return found < 0 ? undefined : found;
    }
    default: {
      return pattern_len > (self.end - self.start | 0) ? undefined : _M0FPB22find__by__two__anchors(self, str);
    }
  }
}
function _M0MPC16string6String4find(self, str) {
  return _M0MPC16string10StringView4find(new _M0TPC16string10StringView(self, 0, self.length), str);
}
function _M0IPC16string6StringPB4Show10to__string(self) {
  return self;
}
function _M0MPC16string6String6repeat(self, n) {
  if (n < 0) {
    return _M0FPC15abort5abortGRPB9ArrayViewGsEE("negative repeat count");
  } else {
    if (n === 0) {
      return "";
    } else {
      if (n === 1) {
        return self;
      } else {
        const len = self.length;
        const total = Math.imul(len, n) | 0;
        let _tmp;
        if (len === 0) {
          _tmp = true;
        } else {
          if (n === 0) {
            $panic();
          }
          _tmp = (total / n | 0) === len;
        }
        if (_tmp) {
          const buf = _M0MPB13StringBuilder21StringBuilder_2einner(total);
          const str = _M0IPC16string6StringPB4Show10to__string(self);
          let _tmp$2 = 0;
          while (true) {
            const _ = _tmp$2;
            if (_ < n) {
              _M0IPB13StringBuilderPB6Logger13write__string(buf, str);
              _tmp$2 = _ + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          return _M0MPB13StringBuilder10to__string(buf);
        } else {
          return _M0FPC15abort5abortGRPB9ArrayViewGsEE("repeat result too large");
        }
      }
    }
  }
}
function _M0MPC14char4Char10utf16__len(self) {
  const code = self;
  return code <= 65535 ? 1 : 2;
}
function _M0MPC16string10StringView8find__by(self, pred) {
  const _bind$4 = self.str;
  const _bind$5 = self.start;
  const _bind$6 = self.end;
  let _tmp = _bind$5;
  let _tmp$2 = 0;
  while (true) {
    const _string_index = _tmp;
    const offset = _tmp$2;
    if (_string_index < _bind$6) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$7 = _bind$4.charCodeAt(_string_index);
        if (_bind$7 >= 55296 && _bind$7 <= 56319 && (_string_index + 1 | 0) < _bind$6) {
          const _bind$8 = _bind$4.charCodeAt(_string_index + 1 | 0);
          if (_bind$8 >= 56320 && _bind$8 <= 57343) {
            _decoded_next_string_index = _string_index + 2 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char((((Math.imul(_bind$7 - 55296 | 0, 1024) | 0) + _bind$8 | 0) - 56320 | 0) + 65536 | 0);
            break _L;
          } else {
            _decoded_next_string_index = _string_index + 1 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$7);
            break _L;
          }
        } else {
          _decoded_next_string_index = _string_index + 1 | 0;
          _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$7);
          break _L;
        }
      }
      if (pred(_decoded_char)) {
        return offset;
      }
      _tmp = _decoded_next_string_index;
      _tmp$2 = offset + _M0MPC14char4Char10utf16__len(_decoded_char) | 0;
      continue;
    } else {
      return undefined;
    }
  }
}
function _M0MPC16string6String8find__by(self, pred) {
  return _M0MPC16string10StringView8find__by(new _M0TPC16string10StringView(self, 0, self.length), pred);
}
function _M0MPC16string10StringView11has__suffix(self, str) {
  const self_len = self.end - self.start | 0;
  const str_len = str.end - str.start | 0;
  if (str_len <= self_len) {
    const start = self_len - str_len | 0;
    return str_len === 0 || _M0IPC16uint166UInt16PB2Eq5equal(self.str.charCodeAt(self.start + start | 0), str.str.charCodeAt(str.start)) ? _M0MPC16string6String20unsafe__range__equal(self.str, self.start + start | 0, str.str, str.start, str_len) : false;
  } else {
    return false;
  }
}
function _M0MPC16string6String11has__suffix(self, str) {
  return _M0MPC16string10StringView11has__suffix(new _M0TPC16string10StringView(self, 0, self.length), str);
}
function _M0MPC16string10StringView11has__prefix(self, str) {
  const str_len = str.end - str.start | 0;
  return str_len <= (self.end - self.start | 0) ? (str_len === 0 || _M0IPC16uint166UInt16PB2Eq5equal(self.str.charCodeAt(self.start), str.str.charCodeAt(str.start)) ? _M0MPC16string6String20unsafe__range__equal(self.str, self.start, str.str, str.start, str_len) : false) : false;
}
function _M0MPC16string6String11has__prefix(self, str) {
  return _M0MPC16string10StringView11has__prefix(new _M0TPC16string10StringView(self, 0, self.length), str);
}
function _M0MPC16string10StringView13strip__suffix(self, suffix) {
  const self_len = self.end - self.start | 0;
  const suffix_len = suffix.end - suffix.start | 0;
  return self_len >= suffix_len && _M0IPC16string10StringViewPB2Eq5equal(_M0MPC16string10StringView12view_2einner(self, self_len - suffix_len | 0, undefined), suffix) ? _M0MPC16string10StringView12view_2einner(self, 0, self_len - suffix_len | 0) : undefined;
}
function _M0MPC16string6String13strip__suffix(self, suffix) {
  return _M0MPC16string10StringView13strip__suffix(new _M0TPC16string10StringView(self, 0, self.length), suffix);
}
function _M0MPC16string10StringView13strip__prefix(self, prefix) {
  const prefix_len = prefix.end - prefix.start | 0;
  return (self.end - self.start | 0) >= prefix_len && _M0IPC16string10StringViewPB2Eq5equal(_M0MPC16string10StringView12view_2einner(self, 0, prefix_len), prefix) ? _M0MPC16string10StringView12view_2einner(self, prefix_len, undefined) : undefined;
}
function _M0MPC15array5Array13Array_2einnerGsE(capacity) {
  return [];
}
function _M0MPC15array5Array13Array_2einnerGcE(capacity) {
  return [];
}
function _M0MPC15array5Array4pushGRPB4JsonE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGyE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGcE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPB4Iter4foldGcRPB5ArrayGcEE(self, init, f) {
  let acc = init;
  while (true) {
    const _bind$4 = _M0MPB4Iter4nextGcE(self);
    if (_bind$4 === -1) {
      break;
    } else {
      const _Some = _bind$4;
      const _x = _Some;
      acc = f(acc, _x);
      continue;
    }
  }
  return acc;
}
function _M0FPB36string__contains__code__unit__scalar(str, start, end, code) {
  let _tmp = start;
  while (true) {
    const i = _tmp;
    if (i < end) {
      if (_M0IPC16uint166UInt16PB2Eq5equal(str.charCodeAt(i), code)) {
        return true;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function _M0FPB28string__contains__code__unit(str, start, end, code) {
  return _M0FPB36string__contains__code__unit__scalar(str, start, end, code);
}
function _M0MPC16string10StringView20contains__code__unit(self, code) {
  return _M0FPB28string__contains__code__unit(self.str, self.start, self.end, code);
}
function _M0MPC16string10StringView8contains(self, str) {
  const _bind$4 = str.end - str.start | 0;
  switch (_bind$4) {
    case 0: {
      return true;
    }
    case 1: {
      return _M0MPC16string10StringView20contains__code__unit(self, str.str.charCodeAt(str.start));
    }
    default: {
      const _bind$5 = _M0MPC16string10StringView4find(self, str);
      return !(_bind$5 === undefined);
    }
  }
}
function _M0MPC16string6String8contains(self, str) {
  return _M0MPC16string10StringView8contains(new _M0TPC16string10StringView(self, 0, self.length), str);
}
function _M0MPC14char4Char8to__uint(self) {
  return self;
}
function _M0FPB23build__ascii__char__set(chars) {
  let bits0 = 0;
  let bits1 = 0;
  let bits2 = 0;
  let bits3 = 0;
  const _bind$4 = chars.str;
  const _bind$5 = chars.start;
  const _bind$6 = chars.end;
  let _tmp = _bind$5;
  while (true) {
    const _string_index = _tmp;
    if (_string_index < _bind$6) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$7 = _bind$4.charCodeAt(_string_index);
        if (_bind$7 >= 55296 && _bind$7 <= 56319 && (_string_index + 1 | 0) < _bind$6) {
          const _bind$8 = _bind$4.charCodeAt(_string_index + 1 | 0);
          if (_bind$8 >= 56320 && _bind$8 <= 57343) {
            _decoded_next_string_index = _string_index + 2 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char((((Math.imul(_bind$7 - 55296 | 0, 1024) | 0) + _bind$8 | 0) - 56320 | 0) + 65536 | 0);
            break _L;
          } else {
            _decoded_next_string_index = _string_index + 1 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$7);
            break _L;
          }
        } else {
          _decoded_next_string_index = _string_index + 1 | 0;
          _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$7);
          break _L;
        }
      }
      const code = _M0MPC14char4Char8to__uint(_decoded_char);
      if (code >>> 0 < 128 >>> 0) {
        const bit = 1 << (code & 31);
        const _bind$7 = code >>> 5 | 0;
        switch (_bind$7) {
          case 0: {
            bits0 = bits0 | bit;
            break;
          }
          case 1: {
            bits1 = bits1 | bit;
            break;
          }
          case 2: {
            bits2 = bits2 | bit;
            break;
          }
          default: {
            bits3 = bits3 | bit;
          }
        }
      } else {
        return undefined;
      }
      _tmp = _decoded_next_string_index;
      continue;
    } else {
      break;
    }
  }
  return { _0: bits0, _1: bits1, _2: bits2, _3: bits3 };
}
function _M0FPB26ascii__char__set__contains(bits0, bits1, bits2, bits3, code) {
  if (code >>> 0 < 128 >>> 0) {
    const bit = 1 << (code & 31);
    const _bind$4 = code >>> 5 | 0;
    switch (_bind$4) {
      case 0: {
        return (bits0 & bit) !== 0;
      }
      case 1: {
        return (bits1 & bit) !== 0;
      }
      case 2: {
        return (bits2 & bit) !== 0;
      }
      default: {
        return (bits3 & bit) !== 0;
      }
    }
  } else {
    return false;
  }
}
function _M0FPB34string__trim__start__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3) {
  let _tmp = start;
  while (true) {
    const pos = _tmp;
    if (pos < end && _M0FPB26ascii__char__set__contains(bits0, bits1, bits2, bits3, _M0MPC16uint166UInt168to__uint(str.charCodeAt(pos)))) {
      _tmp = pos + 1 | 0;
      continue;
    } else {
      return pos;
    }
  }
}
function _M0FPB32string__trim__end__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3) {
  let _tmp = end;
  while (true) {
    const pos = _tmp;
    if (pos > start && _M0FPB26ascii__char__set__contains(bits0, bits1, bits2, bits3, _M0MPC16uint166UInt168to__uint(str.charCodeAt(pos - 1 | 0)))) {
      _tmp = pos - 1 | 0;
      continue;
    } else {
      return pos;
    }
  }
}
function _M0FPB26string__trim__start__ascii(str, start, end, _chars, bits0, bits1, bits2, bits3) {
  return _M0FPB34string__trim__start__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3);
}
function _M0FPB24string__trim__end__ascii(str, start, end, _chars, bits0, bits1, bits2, bits3) {
  return _M0FPB32string__trim__end__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3);
}
function _M0MPC16string10StringView14contains__char(self, c) {
  const len = self.end - self.start | 0;
  if (len > 0) {
    const c$2 = c;
    if (c$2 >= 0 && c$2 <= 65535) {
      return _M0MPC16string10StringView20contains__code__unit(self, c$2 & 65535);
    } else {
      if (c$2 < 0) {
        return false;
      } else {
        if (len >= 2) {
          const adj = c$2 - 65536 | 0;
          const high = 55296 + (adj >> 10) | 0;
          if (high <= 65535) {
            const high$2 = high & 65535;
            const low = (56320 + (adj & 1023) | 0) & 65535;
            let _tmp = 0;
            while (true) {
              const i = _tmp;
              if (i < (len - 1 | 0)) {
                if (_M0IPC16uint166UInt16PB2Eq5equal(self.str.charCodeAt(self.start + i | 0), high$2)) {
                  if (_M0IPC16uint166UInt16PB2Eq5equal(self.str.charCodeAt(self.start + (i + 1 | 0) | 0), low)) {
                    return true;
                  }
                  _tmp = i + 2 | 0;
                  continue;
                }
                _tmp = i + 1 | 0;
                continue;
              } else {
                break;
              }
            }
          } else {
            return false;
          }
        } else {
          return false;
        }
      }
    }
    return false;
  } else {
    return false;
  }
}
function _M0MPC16string10StringView24trim__start__with__chars(self, chars) {
  let _tmp = self;
  while (true) {
    const x = _tmp;
    if ((x.end - x.start | 0) === 0) {
      return x;
    } else {
      const _c = _M0MPC16string6String16unsafe__char__at(x.str, _M0MPC16string6String29offset__of__nth__char_2einner(x.str, 0, x.start, x.end));
      const _tmp$2 = x.str;
      const _bind$4 = _M0MPC16string6String29offset__of__nth__char_2einner(x.str, 1, x.start, x.end);
      let _tmp$3;
      if (_bind$4 === undefined) {
        _tmp$3 = x.end;
      } else {
        const _Some = _bind$4;
        _tmp$3 = _Some;
      }
      const _x = new _M0TPC16string10StringView(_tmp$2, _tmp$3, x.end);
      if (_M0MPC16string10StringView14contains__char(chars, _c)) {
        _tmp = _x;
        continue;
      } else {
        return x;
      }
    }
  }
}
function _M0MPC16string10StringView22trim__end__with__chars(self, chars) {
  let _tmp = self;
  while (true) {
    const x = _tmp;
    if ((x.end - x.start | 0) === 0) {
      return x;
    } else {
      const _c = _M0MPC16string6String16unsafe__char__at(x.str, _M0MPC16string6String29offset__of__nth__char_2einner(x.str, -1, x.start, x.end));
      const _x = new _M0TPC16string10StringView(x.str, x.start, _M0MPC16string6String29offset__of__nth__char_2einner(x.str, -1, x.start, x.end));
      if (_M0MPC16string10StringView14contains__char(chars, _c)) {
        _tmp = _x;
        continue;
      } else {
        return x;
      }
    }
  }
}
function _M0MPC16string10StringView12trim_2einner(self, chars) {
  const _bind$4 = _M0FPB23build__ascii__char__set(chars);
  if (_bind$4 === undefined) {
    return _M0MPC16string10StringView22trim__end__with__chars(_M0MPC16string10StringView24trim__start__with__chars(self, chars), chars);
  } else {
    const _Some = _bind$4;
    const _x = _Some;
    const _bits0 = _x._0;
    const _bits1 = _x._1;
    const _bits2 = _x._2;
    const _bits3 = _x._3;
    const start = _M0FPB26string__trim__start__ascii(self.str, self.start, self.end, chars, _bits0, _bits1, _bits2, _bits3);
    const end = _M0FPB24string__trim__end__ascii(self.str, start, self.end, chars, _bits0, _bits1, _bits2, _bits3);
    return new _M0TPC16string10StringView(self.str, start, end);
  }
}
function _M0MPC16string6String12trim_2einner(self, chars) {
  return _M0MPC16string10StringView12trim_2einner(new _M0TPC16string10StringView(self, 0, self.length), chars);
}
function _M0MPC16string6String4trim(self, chars$46$opt) {
  let chars;
  if (chars$46$opt === undefined) {
    chars = new _M0TPC16string10StringView(_M0MPC16string6String4trimN7_2abindS6861, 0, _M0MPC16string6String4trimN7_2abindS6861.length);
  } else {
    const _Some = chars$46$opt;
    chars = _Some;
  }
  return _M0MPC16string6String12trim_2einner(self, chars);
}
function _M0MPC16string10StringView9is__empty(self) {
  return (self.end - self.start | 0) === 0;
}
function _M0MPC16string6String9is__empty(self) {
  return self === "";
}
function _M0MPC16string6String4iter(self) {
  const len = self.length;
  const index = new _M0TPB8MutLocalGiE(0);
  return _M0MPB4Iter3newGcE(() => {
    if (index.val < len) {
      const c1 = self.charCodeAt(index.val);
      if (_M0MPC16uint166UInt1622is__leading__surrogate(c1) && (index.val + 1 | 0) < len) {
        const c2 = self.charCodeAt(index.val + 1 | 0);
        if (_M0MPC16uint166UInt1623is__trailing__surrogate(c2)) {
          const c = _M0FPB32code__point__of__surrogate__pair(c1, c2);
          index.val = index.val + 2 | 0;
          return c;
        }
      }
      index.val = index.val + 1 | 0;
      return _M0MPC16uint166UInt1616unsafe__to__char(c1);
    } else {
      return -1;
    }
  }, undefined);
}
function _M0MPB4Iter3mapGRPC16string10StringViewsE(self, f) {
  return new _M0TPB4IterGsE(() => {
    const _bind$4 = _M0MPB4Iter4nextGUsRPB4JsonEE(self);
    if (_bind$4 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$4;
      const _x = _Some;
      return f(_x);
    }
  }, self.size_hint);
}
function _M0MPB4Iter3mapGcRPC16string10StringViewE(self, f) {
  return new _M0TPB4IterGRPC16string10StringViewE(() => {
    const _bind$4 = _M0MPB4Iter4nextGcE(self);
    if (_bind$4 === -1) {
      return undefined;
    } else {
      const _Some = _bind$4;
      const _x = _Some;
      return f(_x);
    }
  }, self.size_hint);
}
function _M0IPC14char4CharPB4Show10to__string(self) {
  return String.fromCodePoint(self);
}
function _M0MPC16string10StringView5split(self, sep) {
  const sep_len = sep.end - sep.start | 0;
  if (sep_len === 0) {
    return _M0MPB4Iter3mapGcRPC16string10StringViewE(_M0MPC16string10StringView4iter(self), (c) => _M0MPC16string6String12view_2einner(_M0IPC14char4CharPB4Show10to__string(c), 0, undefined));
  }
  const remaining = new _M0TPB8MutLocalGORPC16string10StringViewE(self);
  return _M0MPB4Iter3newGUsRPB4JsonEE(() => {
    const _bind$4 = remaining.val;
    if (_bind$4 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$4;
      const _view = _Some;
      const _bind$5 = _M0MPC16string10StringView4find(_view, sep);
      if (_bind$5 === undefined) {
        remaining.val = undefined;
        return _view;
      } else {
        const _Some$2 = _bind$5;
        const _end = _Some$2;
        remaining.val = _M0MPC16string10StringView12view_2einner(_view, _end + sep_len | 0, undefined);
        return _M0MPC16string10StringView12view_2einner(_view, 0, _end);
      }
    }
  }, undefined);
}
function _M0MPC16string6String5split(self, sep) {
  return _M0MPC16string10StringView5split(new _M0TPC16string10StringView(self, 0, self.length), sep);
}
function _M0MPB4Iter9to__arrayGsE(self) {
  const _bind$4 = self.size_hint;
  let result;
  if (_bind$4 === undefined) {
    result = [];
  } else {
    const _Some = _bind$4;
    const _n = _Some;
    result = _M0MPC15array5Array13Array_2einnerGsE(_n);
  }
  while (true) {
    const _bind$5 = _M0MPB4Iter4nextGUsRPB4JsonEE(self);
    if (_bind$5 === undefined) {
      break;
    } else {
      const _Some = _bind$5;
      const _x = _Some;
      _M0MPC15array5Array4pushGRPB4JsonE(result, _x);
      continue;
    }
  }
  return result;
}
function _M0MPC16string6String12replace__all(self, old, new_) {
  const len = self.length;
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(len);
  const old_len = old.end - old.start | 0;
  const new$2 = _M0MPC16string10StringView9to__owned(new_);
  if (old_len === 0) {
    _M0IPB13StringBuilderPB6Logger13write__string(buf, new$2);
    const _bind$4 = self.length;
    let _tmp = 0;
    while (true) {
      const _string_index = _tmp;
      if (_string_index < _bind$4) {
        let _decoded_next_string_index;
        let _decoded_char;
        _L: {
          const _bind$5 = self.charCodeAt(_string_index);
          if (_bind$5 >= 55296 && _bind$5 <= 56319 && (_string_index + 1 | 0) < _bind$4) {
            const _bind$6 = self.charCodeAt(_string_index + 1 | 0);
            if (_bind$6 >= 56320 && _bind$6 <= 57343) {
              _decoded_next_string_index = _string_index + 2 | 0;
              _decoded_char = _M0MPC13int3Int16unsafe__to__char((((Math.imul(_bind$5 - 55296 | 0, 1024) | 0) + _bind$6 | 0) - 56320 | 0) + 65536 | 0);
              break _L;
            } else {
              _decoded_next_string_index = _string_index + 1 | 0;
              _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$5);
              break _L;
            }
          } else {
            _decoded_next_string_index = _string_index + 1 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$5);
            break _L;
          }
        }
        _M0IPB13StringBuilderPB6Logger11write__char(buf, _decoded_char);
        _M0IPB13StringBuilderPB6Logger13write__string(buf, new$2);
        _tmp = _decoded_next_string_index;
        continue;
      } else {
        break;
      }
    }
    return _M0MPB13StringBuilder10to__string(buf);
  } else {
    const first_end = _M0MPC16string6String4find(self, old);
    if (first_end === undefined) {
      return self;
    } else {
      const _Some = first_end;
      const _end = _Some;
      let _tmp = new _M0TPC16string10StringView(self, 0, self.length);
      let _tmp$2 = _end;
      while (true) {
        const view = _tmp;
        const end = _tmp$2;
        const seg = _M0MPC16string10StringView12view_2einner(view, 0, end);
        _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(buf, _M0MPC16string10StringView4data(seg), _M0MPC16string10StringView13start__offset(seg), seg.end - seg.start | 0);
        _M0IPB13StringBuilderPB6Logger13write__string(buf, new$2);
        if ((end + old_len | 0) <= len) {
          const next_view = _M0MPC16string10StringView12view_2einner(view, end + old_len | 0, undefined);
          const _bind$4 = _M0MPC16string10StringView4find(next_view, old);
          if (_bind$4 === undefined) {
            _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(buf, _M0MPC16string10StringView4data(next_view), _M0MPC16string10StringView13start__offset(next_view), next_view.end - next_view.start | 0);
            break;
          } else {
            const _Some$2 = _bind$4;
            const _next_end = _Some$2;
            _tmp = next_view;
            _tmp$2 = _next_end;
            continue;
          }
        } else {
          break;
        }
      }
      return _M0MPB13StringBuilder10to__string(buf);
    }
  }
}
function _M0MPC14char4Char20is__ascii__uppercase(self) {
  return self >= 65 && self <= 90;
}
function _M0MPC16string6String9to__lower(self) {
  const _bind$4 = _M0MPC16string6String8find__by(self, (c) => _M0MPC14char4Char20is__ascii__uppercase(c));
  if (_bind$4 === undefined) {
    return self;
  } else {
    const _Some = _bind$4;
    const _idx = _Some;
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(self.length);
    const head = _M0MPC16string6String12view_2einner(self, 0, _idx);
    _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(buf, _M0MPC16string10StringView4data(head), _M0MPC16string10StringView13start__offset(head), head.end - head.start | 0);
    const _bind$5 = _M0MPC16string6String12view_2einner(self, _idx, undefined);
    const _bind$6 = _bind$5.str;
    const _bind$7 = _bind$5.start;
    const _bind$8 = _bind$5.end;
    let _tmp = _bind$7;
    while (true) {
      const _string_index = _tmp;
      if (_string_index < _bind$8) {
        let _decoded_next_string_index;
        let _decoded_char;
        _L: {
          const _bind$9 = _bind$6.charCodeAt(_string_index);
          if (_bind$9 >= 55296 && _bind$9 <= 56319 && (_string_index + 1 | 0) < _bind$8) {
            const _bind$10 = _bind$6.charCodeAt(_string_index + 1 | 0);
            if (_bind$10 >= 56320 && _bind$10 <= 57343) {
              _decoded_next_string_index = _string_index + 2 | 0;
              _decoded_char = _M0MPC13int3Int16unsafe__to__char((((Math.imul(_bind$9 - 55296 | 0, 1024) | 0) + _bind$10 | 0) - 56320 | 0) + 65536 | 0);
              break _L;
            } else {
              _decoded_next_string_index = _string_index + 1 | 0;
              _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$9);
              break _L;
            }
          } else {
            _decoded_next_string_index = _string_index + 1 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$9);
            break _L;
          }
        }
        if (_M0MPC14char4Char20is__ascii__uppercase(_decoded_char)) {
          _M0IPB13StringBuilderPB6Logger11write__char(buf, _decoded_char + 32 | 0);
        } else {
          _M0IPB13StringBuilderPB6Logger11write__char(buf, _decoded_char);
        }
        _tmp = _decoded_next_string_index;
        continue;
      } else {
        break;
      }
    }
    return _M0MPB13StringBuilder10to__string(buf);
  }
}
function _M0MPC16string10StringView9get__char(self, idx) {
  if (idx >= 0 && idx < (self.end - self.start | 0)) {
    const c = self.str.charCodeAt(self.start + idx | 0);
    if (_M0MPC16uint166UInt1622is__leading__surrogate(c)) {
      if ((idx + 1 | 0) < (self.end - self.start | 0)) {
        const next = self.str.charCodeAt(self.start + (idx + 1 | 0) | 0);
        return _M0MPC16uint166UInt1623is__trailing__surrogate(next) ? _M0FPB32code__point__of__surrogate__pair(c, next) : -1;
      } else {
        return -1;
      }
    } else {
      return _M0MPC16uint166UInt1623is__trailing__surrogate(c) ? -1 : _M0MPC16uint166UInt1616unsafe__to__char(c);
    }
  } else {
    return -1;
  }
}
function _M0IPC16string6StringPB12ToStringView16to__string__view(self) {
  return new _M0TPC16string10StringView(self, 0, self.length);
}
function _M0IPC16string10StringViewPB12ToStringView16to__string__view(self) {
  return self;
}
function _M0MPC16string6String9to__array(self) {
  return _M0MPB4Iter4foldGcRPB5ArrayGcEE(_M0MPC16string6String4iter(self), _M0MPC15array5Array13Array_2einnerGcE(self.length), (rv, c) => {
    _M0MPC15array5Array4pushGcE(rv, c);
    return rv;
  });
}
function _M0MPC14byte4Byte8to__uint(self) {
  return self;
}
function _M0MPC14uint4UInt10to__uint64(self) {
  return BigInt.asUintN(64, BigInt(self >>> 0));
}
function _M0MPC14byte4Byte10to__uint64(self) {
  return _M0MPC14uint4UInt10to__uint64(_M0MPC14byte4Byte8to__uint(self));
}
function _M0IPC14bool4BoolPB4Show10to__string(self) {
  return self ? "true" : "false";
}
function _M0MPC15array9ArrayView4iterGRP216zhaojun_2dcoding6thrift8IdlFieldE(self) {
  const i = new _M0TPB8MutLocalGiE(0);
  const len = self.end - self.start | 0;
  return _M0MPB4Iter3newGUsRPB4JsonEE(() => {
    if (i.val < len) {
      const elem = self.buf[self.start + i.val | 0];
      i.val = i.val + 1 | 0;
      return elem;
    } else {
      return undefined;
    }
  }, len);
}
function _M0MPC15array5Array4iterGRP216zhaojun_2dcoding6thrift8IdlFieldE(self) {
  return _M0MPC15array9ArrayView4iterGRP216zhaojun_2dcoding6thrift8IdlFieldE(new _M0TPB9ArrayViewGRP216zhaojun_2dcoding6thrift8IdlFieldE(self, 0, self.length));
}
function _M0MPC15array13ReadOnlyArray2atGmE(self, index) {
  return index >>> 0 < self.length ? self[index] : $oob();
}
function _M0MPC15array13ReadOnlyArray2atGiE(self, index) {
  return index >>> 0 < self.length ? self[index] : $oob();
}
function _M0MPC15array13ReadOnlyArray2atGdE(self, index) {
  return index >>> 0 < self.length ? self[index] : $oob();
}
function _M0MPC15array13ReadOnlyArray6lengthGiE(self) {
  return self.length;
}
function _M0MPC15array9ArrayView4joinGsE(self, separator) {
  if ((self.end - self.start | 0) === 0) {
    return "";
  } else {
    const _hd = self.buf[self.start];
    const _x_buf = self.buf;
    const _x_start = 1 + self.start | 0;
    const _x_end = self.end;
    const hd = _M0IPC16string6StringPB12ToStringView16to__string__view(_hd);
    const _bind$4 = _x_end - _x_start | 0;
    let size_hint;
    let _tmp = 0;
    let _tmp$2 = hd.end - hd.start | 0;
    while (true) {
      const _ = _tmp;
      const size_hint$2 = _tmp$2;
      if (_ < _bind$4) {
        const s = _x_buf[_x_start + _ | 0];
        _tmp = _ + 1 | 0;
        const _bind$5 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
        _tmp$2 = (size_hint$2 + (_bind$5.end - _bind$5.start | 0) | 0) + (separator.end - separator.start | 0) | 0;
        continue;
      } else {
        size_hint = size_hint$2;
        break;
      }
    }
    const size_hint$2 = size_hint << 1;
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(size_hint$2);
    _M0IPB13StringBuilderPB6Logger11write__view(buf, hd);
    if ((separator.end - separator.start | 0) === 0) {
      const _bind$5 = _x_end - _x_start | 0;
      let _tmp$3 = 0;
      while (true) {
        const _ = _tmp$3;
        if (_ < _bind$5) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$3 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    } else {
      const _bind$5 = _x_end - _x_start | 0;
      let _tmp$3 = 0;
      while (true) {
        const _ = _tmp$3;
        if (_ < _bind$5) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, separator);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$3 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
    return _M0MPB13StringBuilder10to__string(buf);
  }
}
function _M0MPC15array9ArrayView4joinGRPC16string10StringViewE(self, separator) {
  if ((self.end - self.start | 0) === 0) {
    return "";
  } else {
    const _hd = self.buf[self.start];
    const _x_buf = self.buf;
    const _x_start = 1 + self.start | 0;
    const _x_end = self.end;
    const hd = _M0IPC16string10StringViewPB12ToStringView16to__string__view(_hd);
    const _bind$4 = _x_end - _x_start | 0;
    let size_hint;
    let _tmp = 0;
    let _tmp$2 = hd.end - hd.start | 0;
    while (true) {
      const _ = _tmp;
      const size_hint$2 = _tmp$2;
      if (_ < _bind$4) {
        const s = _x_buf[_x_start + _ | 0];
        _tmp = _ + 1 | 0;
        const _bind$5 = _M0IPC16string10StringViewPB12ToStringView16to__string__view(s);
        _tmp$2 = (size_hint$2 + (_bind$5.end - _bind$5.start | 0) | 0) + (separator.end - separator.start | 0) | 0;
        continue;
      } else {
        size_hint = size_hint$2;
        break;
      }
    }
    const size_hint$2 = size_hint << 1;
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(size_hint$2);
    _M0IPB13StringBuilderPB6Logger11write__view(buf, hd);
    if ((separator.end - separator.start | 0) === 0) {
      const _bind$5 = _x_end - _x_start | 0;
      let _tmp$3 = 0;
      while (true) {
        const _ = _tmp$3;
        if (_ < _bind$5) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string10StringViewPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$3 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    } else {
      const _bind$5 = _x_end - _x_start | 0;
      let _tmp$3 = 0;
      while (true) {
        const _ = _tmp$3;
        if (_ < _bind$5) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string10StringViewPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, separator);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$3 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
    return _M0MPB13StringBuilder10to__string(buf);
  }
}
function _M0IPC16option6OptionPB2Eq5equalGcE(self, other) {
  if (self === -1) {
    return other === -1;
  } else {
    const _Some = self;
    const _x = _Some;
    if (other === -1) {
      return false;
    } else {
      const _Some$2 = other;
      const _y = _Some$2;
      return _x === _y;
    }
  }
}
function _M0IPC16option6OptionPB2Eq5equalGRP216zhaojun_2dcoding6thrift8IdlConstE(self, other) {
  if (self === undefined) {
    return other === undefined;
  } else {
    const _Some = self;
    const _x = _Some;
    if (other === undefined) {
      return false;
    } else {
      const _Some$2 = other;
      const _y = _Some$2;
      return _M0IP216zhaojun_2dcoding6thrift8IdlConstPB2Eq5equal(_x, _y);
    }
  }
}
function _M0IPC16option6OptionPB2Eq5equalGRP216zhaojun_2dcoding6thrift4KindE(self, other) {
  if (self === undefined) {
    return other === undefined;
  } else {
    const _Some = self;
    const _x = _Some;
    if (other === undefined) {
      return false;
    } else {
      const _Some$2 = other;
      const _y = _Some$2;
      return _M0IP216zhaojun_2dcoding6thrift4KindPB2Eq5equal(_x, _y);
    }
  }
}
function _M0MPC16option6Option6unwrapGRPB5EntryGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeClientEE(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    return _Some;
  }
}
function _M0MPC16option6Option10unwrap__orGsE(self, default_) {
  if (self === undefined) {
    return default_;
  } else {
    const _Some = self;
    const _t = _Some;
    return _t;
  }
}
function _M0MPC16option6Option10unwrap__orGcE(self, default_) {
  if (self === -1) {
    return default_;
  } else {
    const _Some = self;
    const _t = _Some;
    return _t;
  }
}
function _M0MPC16option6Option3mapGRPC16string10StringViewsE(self, f) {
  if (self === undefined) {
    return undefined;
  } else {
    const _Some = self;
    const _t = _Some;
    return f(_t);
  }
}
function _M0MPC15array5Array31unsafe__make__and__blit_2einnerGsE(src, allocate_len, len, src_offset, dst_offset) {
  const dst = new Array(allocate_len);
  _M0MPB18UninitializedArray12unsafe__blitGsE(dst, dst_offset, src, src_offset, len);
  return dst;
}
function _M0MPC15array9ArrayView9to__ownedGsE(self) {
  const len = self.end - self.start | 0;
  return len === 0 ? [] : _M0MPC15array5Array31unsafe__make__and__blit_2einnerGsE(self.buf, len, len, self.start, 0);
}
function _M0FPB21calc__grow__threshold(capacity) {
  if (16 === 0) {
    $panic();
  }
  return (Math.imul(capacity, 13) | 0) / 16 | 0;
}
function _M0MPC13int3Int20next__power__of__two(self) {
  if (self >= 0) {
    if (self <= 1) {
      return 1;
    }
    if (self > 1073741824) {
      return 1073741824;
    }
    return (2147483647 >> (Math.clz32(self - 1 | 0) - 1 | 0)) + 1 | 0;
  } else {
    return $panic();
  }
}
function _M0FPB8new__mapGsRPB4JsonE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind$4 = capacity$2 - 1 | 0;
  const _bind$5 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$6 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$7 = undefined;
  return new _M0TPB3MapGsRPB4JsonE(_bind$6, 0, capacity$2, _bind$4, _bind$5, _bind$7, -1);
}
function _M0FPB8new__mapGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeClientE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind$4 = capacity$2 - 1 | 0;
  const _bind$5 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$6 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$7 = undefined;
  return new _M0TPB3MapGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeClientE(_bind$6, 0, capacity$2, _bind$4, _bind$5, _bind$7, -1);
}
function _M0FPB8new__mapGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeServerE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind$4 = capacity$2 - 1 | 0;
  const _bind$5 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$6 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$7 = undefined;
  return new _M0TPB3MapGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeServerE(_bind$6, 0, capacity$2, _bind$4, _bind$5, _bind$7, -1);
}
function _M0FPB8new__mapGiRP216zhaojun_2dcoding6thrift6SchemaE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind$4 = capacity$2 - 1 | 0;
  const _bind$5 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$6 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$7 = undefined;
  return new _M0TPB3MapGiRP216zhaojun_2dcoding6thrift6SchemaE(_bind$6, 0, capacity$2, _bind$4, _bind$5, _bind$7, -1);
}
function _M0FPB8new__mapGisE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind$4 = capacity$2 - 1 | 0;
  const _bind$5 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$6 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$7 = undefined;
  return new _M0TPB3MapGisE(_bind$6, 0, capacity$2, _bind$4, _bind$5, _bind$7, -1);
}
function _M0FPB8new__mapGsbE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind$4 = capacity$2 - 1 | 0;
  const _bind$5 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$6 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$7 = undefined;
  return new _M0TPB3MapGsbE(_bind$6, 0, capacity$2, _bind$4, _bind$5, _bind$7, -1);
}
function _M0FPB8new__mapGiRP216zhaojun_2dcoding6thrift5ValueE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind$4 = capacity$2 - 1 | 0;
  const _bind$5 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$6 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$7 = undefined;
  return new _M0TPB3MapGiRP216zhaojun_2dcoding6thrift5ValueE(_bind$6, 0, capacity$2, _bind$4, _bind$5, _bind$7, -1);
}
function _M0FPB8new__mapGibE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind$4 = capacity$2 - 1 | 0;
  const _bind$5 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$6 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$7 = undefined;
  return new _M0TPB3MapGibE(_bind$6, 0, capacity$2, _bind$4, _bind$5, _bind$7, -1);
}
function _M0FPB21capacity__for__length(length) {
  let capacity = _M0MPC13int3Int20next__power__of__two(length);
  if (length > _M0FPB21calc__grow__threshold(capacity)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  return capacity;
}
function _M0MPC13int3Int3max(self, other) {
  return self > other ? self : other;
}
function _M0MPB3Map20add__entry__to__tailGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeClientE(self, idx, entry) {
  const _bind$4 = self.tail;
  if (_bind$4 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    _M0MPC16option6Option6unwrapGRPB5EntryGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeClientEE(_bind$4 >>> 0 < _tmp.length ? _tmp[_bind$4] : $oob()).next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeServerE(self, idx, entry) {
  const _bind$4 = self.tail;
  if (_bind$4 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    _M0MPC16option6Option6unwrapGRPB5EntryGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeClientEE(_bind$4 >>> 0 < _tmp.length ? _tmp[_bind$4] : $oob()).next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry) {
  const _bind$4 = self.tail;
  if (_bind$4 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    _M0MPC16option6Option6unwrapGRPB5EntryGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeClientEE(_bind$4 >>> 0 < _tmp.length ? _tmp[_bind$4] : $oob()).next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGiRP216zhaojun_2dcoding6thrift6SchemaE(self, idx, entry) {
  const _bind$4 = self.tail;
  if (_bind$4 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    _M0MPC16option6Option6unwrapGRPB5EntryGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeClientEE(_bind$4 >>> 0 < _tmp.length ? _tmp[_bind$4] : $oob()).next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGisE(self, idx, entry) {
  const _bind$4 = self.tail;
  if (_bind$4 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    _M0MPC16option6Option6unwrapGRPB5EntryGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeClientEE(_bind$4 >>> 0 < _tmp.length ? _tmp[_bind$4] : $oob()).next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGsbE(self, idx, entry) {
  const _bind$4 = self.tail;
  if (_bind$4 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    _M0MPC16option6Option6unwrapGRPB5EntryGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeClientEE(_bind$4 >>> 0 < _tmp.length ? _tmp[_bind$4] : $oob()).next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGiRP216zhaojun_2dcoding6thrift5ValueE(self, idx, entry) {
  const _bind$4 = self.tail;
  if (_bind$4 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    _M0MPC16option6Option6unwrapGRPB5EntryGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeClientEE(_bind$4 >>> 0 < _tmp.length ? _tmp[_bind$4] : $oob()).next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGibE(self, idx, entry) {
  const _bind$4 = self.tail;
  if (_bind$4 === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    _M0MPC16option6Option6unwrapGRPB5EntryGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeClientEE(_bind$4 >>> 0 < _tmp.length ? _tmp[_bind$4] : $oob()).next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map10set__entryGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeClientE(self, entry, new_idx) {
  const _bind$4 = entry.next;
  if (_bind$4 === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind$4;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10set__entryGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeServerE(self, entry, new_idx) {
  const _bind$4 = entry.next;
  if (_bind$4 === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind$4;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10set__entryGsRPB4JsonE(self, entry, new_idx) {
  const _bind$4 = entry.next;
  if (_bind$4 === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind$4;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10set__entryGiRP216zhaojun_2dcoding6thrift6SchemaE(self, entry, new_idx) {
  const _bind$4 = entry.next;
  if (_bind$4 === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind$4;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10set__entryGisE(self, entry, new_idx) {
  const _bind$4 = entry.next;
  if (_bind$4 === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind$4;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10set__entryGsbE(self, entry, new_idx) {
  const _bind$4 = entry.next;
  if (_bind$4 === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind$4;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10set__entryGiRP216zhaojun_2dcoding6thrift5ValueE(self, entry, new_idx) {
  const _bind$4 = entry.next;
  if (_bind$4 === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind$4;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10set__entryGibE(self, entry, new_idx) {
  const _bind$4 = entry.next;
  if (_bind$4 === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind$4;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10push__awayGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeClientE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _bind$4 = self.entries[idx$2];
    if (_bind$4 === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeClientE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind$4;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeClientE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeServerE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _bind$4 = self.entries[idx$2];
    if (_bind$4 === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeServerE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind$4;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeServerE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGsRPB4JsonE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _bind$4 = self.entries[idx$2];
    if (_bind$4 === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGsRPB4JsonE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind$4;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGsRPB4JsonE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGiRP216zhaojun_2dcoding6thrift6SchemaE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _bind$4 = self.entries[idx$2];
    if (_bind$4 === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGiRP216zhaojun_2dcoding6thrift6SchemaE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind$4;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGiRP216zhaojun_2dcoding6thrift6SchemaE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGisE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _bind$4 = self.entries[idx$2];
    if (_bind$4 === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGisE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind$4;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGisE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGsbE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _bind$4 = self.entries[idx$2];
    if (_bind$4 === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGsbE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind$4;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGsbE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGiRP216zhaojun_2dcoding6thrift5ValueE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _bind$4 = self.entries[idx$2];
    if (_bind$4 === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGiRP216zhaojun_2dcoding6thrift5ValueE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind$4;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGiRP216zhaojun_2dcoding6thrift5ValueE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGibE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _bind$4 = self.entries[idx$2];
    if (_bind$4 === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGibE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind$4;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGibE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeClientE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$4 = self.entries[idx];
    if (_bind$4 === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeClientE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind$4;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeClientE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeClientE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeServerE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$4 = self.entries[idx];
    if (_bind$4 === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeServerE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind$4;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeServerE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeServerE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGsRPB4JsonE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$4 = self.entries[idx];
    if (_bind$4 === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind$4;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGsRPB4JsonE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGiRP216zhaojun_2dcoding6thrift6SchemaE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$4 = self.entries[idx];
    if (_bind$4 === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGiRP216zhaojun_2dcoding6thrift6SchemaE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind$4;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGiRP216zhaojun_2dcoding6thrift6SchemaE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGiRP216zhaojun_2dcoding6thrift6SchemaE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGisE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$4 = self.entries[idx];
    if (_bind$4 === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGisE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind$4;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGisE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGisE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGsbE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$4 = self.entries[idx];
    if (_bind$4 === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGsbE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind$4;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGsbE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGsbE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGiRP216zhaojun_2dcoding6thrift5ValueE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$4 = self.entries[idx];
    if (_bind$4 === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGiRP216zhaojun_2dcoding6thrift5ValueE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind$4;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGiRP216zhaojun_2dcoding6thrift5ValueE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGiRP216zhaojun_2dcoding6thrift5ValueE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGibE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$4 = self.entries[idx];
    if (_bind$4 === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGibE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind$4;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGibE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGibE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map4growGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeClientE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeClientE(self, _e);
      _tmp = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map4growGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeServerE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeServerE(self, _e);
      _tmp = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map4growGsRPB4JsonE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGsRPB4JsonE(self, _e);
      _tmp = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map4growGiRP216zhaojun_2dcoding6thrift6SchemaE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGiRP216zhaojun_2dcoding6thrift6SchemaE(self, _e);
      _tmp = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map4growGisE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGisE(self, _e);
      _tmp = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map4growGsbE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGsbE(self, _e);
      _tmp = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map4growGiRP216zhaojun_2dcoding6thrift5ValueE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGiRP216zhaojun_2dcoding6thrift5ValueE(self, _e);
      _tmp = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map4growGibE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGibE(self, _e);
      _tmp = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeClientE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$4 = self.entries[idx];
    if (_bind$4 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeClientE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$5 = self.tail;
      const _bind$6 = undefined;
      const entry = new _M0TPB5EntryGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeClientE(_bind$5, _bind$6, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeClientE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$4;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeClientE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeClientE(self, idx, _curr_entry);
        const _bind$5 = self.tail;
        const _bind$6 = undefined;
        const entry = new _M0TPB5EntryGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeClientE(_bind$5, _bind$6, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeClientE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeServerE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$4 = self.entries[idx];
    if (_bind$4 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeServerE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$5 = self.tail;
      const _bind$6 = undefined;
      const entry = new _M0TPB5EntryGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeServerE(_bind$5, _bind$6, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeServerE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$4;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeServerE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeServerE(self, idx, _curr_entry);
        const _bind$5 = self.tail;
        const _bind$6 = undefined;
        const entry = new _M0TPB5EntryGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeServerE(_bind$5, _bind$6, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeServerE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRPB4JsonE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$4 = self.entries[idx];
    if (_bind$4 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPB4JsonE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$5 = self.tail;
      const _bind$6 = undefined;
      const entry = new _M0TPB5EntryGsRPB4JsonE(_bind$5, _bind$6, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$4;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPB4JsonE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPB4JsonE(self, idx, _curr_entry);
        const _bind$5 = self.tail;
        const _bind$6 = undefined;
        const entry = new _M0TPB5EntryGsRPB4JsonE(_bind$5, _bind$6, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGiRP216zhaojun_2dcoding6thrift6SchemaE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$4 = self.entries[idx];
    if (_bind$4 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGiRP216zhaojun_2dcoding6thrift6SchemaE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$5 = self.tail;
      const _bind$6 = undefined;
      const entry = new _M0TPB5EntryGiRP216zhaojun_2dcoding6thrift6SchemaE(_bind$5, _bind$6, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGiRP216zhaojun_2dcoding6thrift6SchemaE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$4;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGiRP216zhaojun_2dcoding6thrift6SchemaE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGiRP216zhaojun_2dcoding6thrift6SchemaE(self, idx, _curr_entry);
        const _bind$5 = self.tail;
        const _bind$6 = undefined;
        const entry = new _M0TPB5EntryGiRP216zhaojun_2dcoding6thrift6SchemaE(_bind$5, _bind$6, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGiRP216zhaojun_2dcoding6thrift6SchemaE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGssE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$4 = self.entries[idx];
    if (_bind$4 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPB4JsonE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$5 = self.tail;
      const _bind$6 = undefined;
      const entry = new _M0TPB5EntryGssE(_bind$5, _bind$6, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$4;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPB4JsonE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPB4JsonE(self, idx, _curr_entry);
        const _bind$5 = self.tail;
        const _bind$6 = undefined;
        const entry = new _M0TPB5EntryGssE(_bind$5, _bind$6, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGisE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$4 = self.entries[idx];
    if (_bind$4 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGisE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$5 = self.tail;
      const _bind$6 = undefined;
      const entry = new _M0TPB5EntryGisE(_bind$5, _bind$6, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGisE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$4;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGisE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGisE(self, idx, _curr_entry);
        const _bind$5 = self.tail;
        const _bind$6 = undefined;
        const entry = new _M0TPB5EntryGisE(_bind$5, _bind$6, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGisE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsURP216zhaojun_2dcoding6thrift7IdlTypeRP216zhaojun_2dcoding6thrift5ValueEE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$4 = self.entries[idx];
    if (_bind$4 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPB4JsonE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$5 = self.tail;
      const _bind$6 = undefined;
      const entry = new _M0TPB5EntryGsURP216zhaojun_2dcoding6thrift7IdlTypeRP216zhaojun_2dcoding6thrift5ValueEE(_bind$5, _bind$6, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$4;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPB4JsonE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPB4JsonE(self, idx, _curr_entry);
        const _bind$5 = self.tail;
        const _bind$6 = undefined;
        const entry = new _M0TPB5EntryGsURP216zhaojun_2dcoding6thrift7IdlTypeRP216zhaojun_2dcoding6thrift5ValueEE(_bind$5, _bind$6, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsbE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$4 = self.entries[idx];
    if (_bind$4 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsbE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$5 = self.tail;
      const _bind$6 = undefined;
      const entry = new _M0TPB5EntryGsbE(_bind$5, _bind$6, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsbE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$4;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsbE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsbE(self, idx, _curr_entry);
        const _bind$5 = self.tail;
        const _bind$6 = undefined;
        const entry = new _M0TPB5EntryGsbE(_bind$5, _bind$6, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsbE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRP216zhaojun_2dcoding6thrift13IdlDefinitionE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$4 = self.entries[idx];
    if (_bind$4 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPB4JsonE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$5 = self.tail;
      const _bind$6 = undefined;
      const entry = new _M0TPB5EntryGsRP216zhaojun_2dcoding6thrift13IdlDefinitionE(_bind$5, _bind$6, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$4;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPB4JsonE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPB4JsonE(self, idx, _curr_entry);
        const _bind$5 = self.tail;
        const _bind$6 = undefined;
        const entry = new _M0TPB5EntryGsRP216zhaojun_2dcoding6thrift13IdlDefinitionE(_bind$5, _bind$6, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGiRP216zhaojun_2dcoding6thrift5ValueE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$4 = self.entries[idx];
    if (_bind$4 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGiRP216zhaojun_2dcoding6thrift5ValueE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$5 = self.tail;
      const _bind$6 = undefined;
      const entry = new _M0TPB5EntryGiRP216zhaojun_2dcoding6thrift5ValueE(_bind$5, _bind$6, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGiRP216zhaojun_2dcoding6thrift5ValueE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$4;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGiRP216zhaojun_2dcoding6thrift5ValueE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGiRP216zhaojun_2dcoding6thrift5ValueE(self, idx, _curr_entry);
        const _bind$5 = self.tail;
        const _bind$6 = undefined;
        const entry = new _M0TPB5EntryGiRP216zhaojun_2dcoding6thrift5ValueE(_bind$5, _bind$6, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGiRP216zhaojun_2dcoding6thrift5ValueE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGibE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$4 = self.entries[idx];
    if (_bind$4 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGibE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$5 = self.tail;
      const _bind$6 = undefined;
      const entry = new _M0TPB5EntryGibE(_bind$5, _bind$6, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGibE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$4;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGibE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGibE(self, idx, _curr_entry);
        const _bind$5 = self.tail;
        const _bind$6 = undefined;
        const entry = new _M0TPB5EntryGibE(_bind$5, _bind$6, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGibE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRP216zhaojun_2dcoding6thrift9IdlModuleE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$4 = self.entries[idx];
    if (_bind$4 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPB4JsonE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$5 = self.tail;
      const _bind$6 = undefined;
      const entry = new _M0TPB5EntryGsRP216zhaojun_2dcoding6thrift9IdlModuleE(_bind$5, _bind$6, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$4;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPB4JsonE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPB4JsonE(self, idx, _curr_entry);
        const _bind$5 = self.tail;
        const _bind$6 = undefined;
        const entry = new _M0TPB5EntryGsRP216zhaojun_2dcoding6thrift9IdlModuleE(_bind$5, _bind$6, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRPB3MapGssEE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$4 = self.entries[idx];
    if (_bind$4 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPB4JsonE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$5 = self.tail;
      const _bind$6 = undefined;
      const entry = new _M0TPB5EntryGsRPB3MapGssEE(_bind$5, _bind$6, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$4;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPB4JsonE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPB4JsonE(self, idx, _curr_entry);
        const _bind$5 = self.tail;
        const _bind$6 = undefined;
        const entry = new _M0TPB5EntryGsRPB3MapGssEE(_bind$5, _bind$6, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRPC15debug4ReprE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind$4 = self.entries[idx];
    if (_bind$4 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPB4JsonE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$5 = self.tail;
      const _bind$6 = undefined;
      const entry = new _M0TPB5EntryGsRPC15debug4ReprE(_bind$5, _bind$6, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$4;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPB4JsonE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPB4JsonE(self, idx, _curr_entry);
        const _bind$5 = self.tail;
        const _bind$6 = undefined;
        const entry = new _M0TPB5EntryGsRPC15debug4ReprE(_bind$5, _bind$6, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3setGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeClientE(self, key, value) {
  _M0MPB3Map15set__with__hashGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeClientE(self, key, value, _M0IPC13int3IntPB4Hash4hash(key));
}
function _M0MPB3Map3setGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeServerE(self, key, value) {
  _M0MPB3Map15set__with__hashGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeServerE(self, key, value, _M0IPC13int3IntPB4Hash4hash(key));
}
function _M0MPB3Map3setGsRPB4JsonE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRPB4JsonE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGiRP216zhaojun_2dcoding6thrift6SchemaE(self, key, value) {
  _M0MPB3Map15set__with__hashGiRP216zhaojun_2dcoding6thrift6SchemaE(self, key, value, _M0IPC13int3IntPB4Hash4hash(key));
}
function _M0MPB3Map3setGssE(self, key, value) {
  _M0MPB3Map15set__with__hashGssE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGisE(self, key, value) {
  _M0MPB3Map15set__with__hashGisE(self, key, value, _M0IPC13int3IntPB4Hash4hash(key));
}
function _M0MPB3Map3setGsURP216zhaojun_2dcoding6thrift7IdlTypeRP216zhaojun_2dcoding6thrift5ValueEE(self, key, value) {
  _M0MPB3Map15set__with__hashGsURP216zhaojun_2dcoding6thrift7IdlTypeRP216zhaojun_2dcoding6thrift5ValueEE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsbE(self, key, value) {
  _M0MPB3Map15set__with__hashGsbE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsRP216zhaojun_2dcoding6thrift13IdlDefinitionE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRP216zhaojun_2dcoding6thrift13IdlDefinitionE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGiRP216zhaojun_2dcoding6thrift5ValueE(self, key, value) {
  _M0MPB3Map15set__with__hashGiRP216zhaojun_2dcoding6thrift5ValueE(self, key, value, _M0IPC13int3IntPB4Hash4hash(key));
}
function _M0MPB3Map3setGibE(self, key, value) {
  _M0MPB3Map15set__with__hashGibE(self, key, value, _M0IPC13int3IntPB4Hash4hash(key));
}
function _M0MPB3Map3setGsRP216zhaojun_2dcoding6thrift9IdlModuleE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRP216zhaojun_2dcoding6thrift9IdlModuleE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsRPB3MapGssEE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRPB3MapGssEE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsRPC15debug4ReprE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRPC15debug4ReprE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3MapGsRPB4JsonE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0MPC13int3Int3max(_capacity, _M0FPB21capacity__for__length(length));
  }
  const m = _M0FPB8new__mapGsRPB4JsonE(capacity$2);
  const _bind$4 = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$4) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRPB4JsonE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeClientE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0MPC13int3Int3max(_capacity, _M0FPB21capacity__for__length(length));
  }
  const m = _M0FPB8new__mapGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeClientE(capacity$2);
  const _bind$4 = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$4) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeClientE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeServerE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0MPC13int3Int3max(_capacity, _M0FPB21capacity__for__length(length));
  }
  const m = _M0FPB8new__mapGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeServerE(capacity$2);
  const _bind$4 = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$4) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeServerE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGiRP216zhaojun_2dcoding6thrift6SchemaE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0MPC13int3Int3max(_capacity, _M0FPB21capacity__for__length(length));
  }
  const m = _M0FPB8new__mapGiRP216zhaojun_2dcoding6thrift6SchemaE(capacity$2);
  const _bind$4 = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$4) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGiRP216zhaojun_2dcoding6thrift6SchemaE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGisE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0MPC13int3Int3max(_capacity, _M0FPB21capacity__for__length(length));
  }
  const m = _M0FPB8new__mapGisE(capacity$2);
  const _bind$4 = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$4) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGisE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGssE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0MPC13int3Int3max(_capacity, _M0FPB21capacity__for__length(length));
  }
  const m = _M0FPB8new__mapGsRPB4JsonE(capacity$2);
  const _bind$4 = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$4) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGssE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsURP216zhaojun_2dcoding6thrift7IdlTypeRP216zhaojun_2dcoding6thrift5ValueEE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0MPC13int3Int3max(_capacity, _M0FPB21capacity__for__length(length));
  }
  const m = _M0FPB8new__mapGsRPB4JsonE(capacity$2);
  const _bind$4 = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$4) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsURP216zhaojun_2dcoding6thrift7IdlTypeRP216zhaojun_2dcoding6thrift5ValueEE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsbE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0MPC13int3Int3max(_capacity, _M0FPB21capacity__for__length(length));
  }
  const m = _M0FPB8new__mapGsbE(capacity$2);
  const _bind$4 = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$4) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsbE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsRP216zhaojun_2dcoding6thrift9IdlModuleE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0MPC13int3Int3max(_capacity, _M0FPB21capacity__for__length(length));
  }
  const m = _M0FPB8new__mapGsRPB4JsonE(capacity$2);
  const _bind$4 = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$4) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRP216zhaojun_2dcoding6thrift9IdlModuleE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsRPB3MapGssEE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0MPC13int3Int3max(_capacity, _M0FPB21capacity__for__length(length));
  }
  const m = _M0FPB8new__mapGsRPB4JsonE(capacity$2);
  const _bind$4 = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$4) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRPB3MapGssEE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsRP216zhaojun_2dcoding6thrift13IdlDefinitionE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0MPC13int3Int3max(_capacity, _M0FPB21capacity__for__length(length));
  }
  const m = _M0FPB8new__mapGsRPB4JsonE(capacity$2);
  const _bind$4 = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$4) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRP216zhaojun_2dcoding6thrift13IdlDefinitionE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGiRP216zhaojun_2dcoding6thrift5ValueE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0MPC13int3Int3max(_capacity, _M0FPB21capacity__for__length(length));
  }
  const m = _M0FPB8new__mapGiRP216zhaojun_2dcoding6thrift5ValueE(capacity$2);
  const _bind$4 = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$4) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGiRP216zhaojun_2dcoding6thrift5ValueE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGibE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0MPC13int3Int3max(_capacity, _M0FPB21capacity__for__length(length));
  }
  const m = _M0FPB8new__mapGibE(capacity$2);
  const _bind$4 = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$4) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGibE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsRPC15debug4ReprE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0MPC13int3Int3max(_capacity, _M0FPB21capacity__for__length(length));
  }
  const m = _M0FPB8new__mapGsRPB4JsonE(capacity$2);
  const _bind$4 = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$4) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRPC15debug4ReprE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3getGiRP216zhaojun_2dcoding6thrift6SchemaE(self, key) {
  const hash = _M0IPC13int3IntPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$4 = self.entries[idx];
    if (_bind$4 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$4;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeClientE(self, key) {
  const hash = _M0IPC13int3IntPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$4 = self.entries[idx];
    if (_bind$4 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$4;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeServerE(self, key) {
  const hash = _M0IPC13int3IntPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$4 = self.entries[idx];
    if (_bind$4 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$4;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGssE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$4 = self.entries[idx];
    if (_bind$4 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$4;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsRPB4JsonE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$4 = self.entries[idx];
    if (_bind$4 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$4;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGisE(self, key) {
  const hash = _M0IPC13int3IntPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$4 = self.entries[idx];
    if (_bind$4 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$4;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsURP216zhaojun_2dcoding6thrift7IdlTypeRP216zhaojun_2dcoding6thrift5ValueEE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$4 = self.entries[idx];
    if (_bind$4 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$4;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsRP216zhaojun_2dcoding6thrift13IdlDefinitionE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$4 = self.entries[idx];
    if (_bind$4 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$4;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGiRP216zhaojun_2dcoding6thrift5ValueE(self, key) {
  const hash = _M0IPC13int3IntPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$4 = self.entries[idx];
    if (_bind$4 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$4;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsRPB3MapGssEE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$4 = self.entries[idx];
    if (_bind$4 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$4;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map2atGsRP216zhaojun_2dcoding6thrift9IdlModuleE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$4 = self.entries[idx];
    if (_bind$4 === undefined) {
      $panic();
    } else {
      const _Some = _bind$4;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i <= _entry.psl) {
        _tmp = i + 1 | 0;
        _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
        continue;
      } else {
        $panic();
      }
    }
    continue;
  }
}
function _M0MPB3Map2atGsRPB3MapGssEE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$4 = self.entries[idx];
    if (_bind$4 === undefined) {
      $panic();
    } else {
      const _Some = _bind$4;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i <= _entry.psl) {
        _tmp = i + 1 | 0;
        _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
        continue;
      } else {
        $panic();
      }
    }
    continue;
  }
}
function _M0MPB3Map2atGsRPB4JsonE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$4 = self.entries[idx];
    if (_bind$4 === undefined) {
      $panic();
    } else {
      const _Some = _bind$4;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i <= _entry.psl) {
        _tmp = i + 1 | 0;
        _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
        continue;
      } else {
        $panic();
      }
    }
    continue;
  }
}
function _M0MPB3Map8containsGisE(self, key) {
  const hash = _M0IPC13int3IntPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$4 = self.entries[idx];
    if (_bind$4 === undefined) {
      return false;
    } else {
      const _Some = _bind$4;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map8containsGsbE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$4 = self.entries[idx];
    if (_bind$4 === undefined) {
      return false;
    } else {
      const _Some = _bind$4;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map8containsGssE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$4 = self.entries[idx];
    if (_bind$4 === undefined) {
      return false;
    } else {
      const _Some = _bind$4;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map8containsGibE(self, key) {
  const hash = _M0IPC13int3IntPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$4 = self.entries[idx];
    if (_bind$4 === undefined) {
      return false;
    } else {
      const _Some = _bind$4;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map8containsGsRP216zhaojun_2dcoding6thrift9IdlModuleE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$4 = self.entries[idx];
    if (_bind$4 === undefined) {
      return false;
    } else {
      const _Some = _bind$4;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map13remove__entryGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeClientE(self, entry) {
  const _bind$4 = entry.prev;
  if (_bind$4 === -1) {
    self.head = entry.next;
  } else {
    const _tmp = self.entries;
    _M0MPC16option6Option6unwrapGRPB5EntryGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeClientEE(_bind$4 >>> 0 < _tmp.length ? _tmp[_bind$4] : $oob()).next = entry.next;
  }
  const _bind$5 = entry.next;
  if (_bind$5 === undefined) {
    self.tail = entry.prev;
    return;
  } else {
    const _Some = _bind$5;
    const _next = _Some;
    _next.prev = entry.prev;
    return;
  }
}
function _M0MPB3Map13remove__entryGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeServerE(self, entry) {
  const _bind$4 = entry.prev;
  if (_bind$4 === -1) {
    self.head = entry.next;
  } else {
    const _tmp = self.entries;
    _M0MPC16option6Option6unwrapGRPB5EntryGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeClientEE(_bind$4 >>> 0 < _tmp.length ? _tmp[_bind$4] : $oob()).next = entry.next;
  }
  const _bind$5 = entry.next;
  if (_bind$5 === undefined) {
    self.tail = entry.prev;
    return;
  } else {
    const _Some = _bind$5;
    const _next = _Some;
    _next.prev = entry.prev;
    return;
  }
}
function _M0MPB3Map13remove__entryGiRP216zhaojun_2dcoding6thrift6SchemaE(self, entry) {
  const _bind$4 = entry.prev;
  if (_bind$4 === -1) {
    self.head = entry.next;
  } else {
    const _tmp = self.entries;
    _M0MPC16option6Option6unwrapGRPB5EntryGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeClientEE(_bind$4 >>> 0 < _tmp.length ? _tmp[_bind$4] : $oob()).next = entry.next;
  }
  const _bind$5 = entry.next;
  if (_bind$5 === undefined) {
    self.tail = entry.prev;
    return;
  } else {
    const _Some = _bind$5;
    const _next = _Some;
    _next.prev = entry.prev;
    return;
  }
}
function _M0MPB3Map13remove__entryGisE(self, entry) {
  const _bind$4 = entry.prev;
  if (_bind$4 === -1) {
    self.head = entry.next;
  } else {
    const _tmp = self.entries;
    _M0MPC16option6Option6unwrapGRPB5EntryGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeClientEE(_bind$4 >>> 0 < _tmp.length ? _tmp[_bind$4] : $oob()).next = entry.next;
  }
  const _bind$5 = entry.next;
  if (_bind$5 === undefined) {
    self.tail = entry.prev;
    return;
  } else {
    const _Some = _bind$5;
    const _next = _Some;
    _next.prev = entry.prev;
    return;
  }
}
function _M0MPB3Map11shift__backGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeClientE(self, idx) {
  let _tmp = idx;
  while (true) {
    const cur = _tmp;
    const next = (cur + 1 | 0) & self.capacity_mask;
    _L: {
      const _bind$4 = self.entries[next];
      if (_bind$4 === undefined) {
        break _L;
      } else {
        const _Some = _bind$4;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          _M0MPB3Map10set__entryGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeClientE(self, _x, cur);
          _tmp = next;
          continue;
        }
      }
    }
    self.entries[cur] = undefined;
    return;
  }
}
function _M0MPB3Map11shift__backGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeServerE(self, idx) {
  let _tmp = idx;
  while (true) {
    const cur = _tmp;
    const next = (cur + 1 | 0) & self.capacity_mask;
    _L: {
      const _bind$4 = self.entries[next];
      if (_bind$4 === undefined) {
        break _L;
      } else {
        const _Some = _bind$4;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          _M0MPB3Map10set__entryGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeServerE(self, _x, cur);
          _tmp = next;
          continue;
        }
      }
    }
    self.entries[cur] = undefined;
    return;
  }
}
function _M0MPB3Map11shift__backGiRP216zhaojun_2dcoding6thrift6SchemaE(self, idx) {
  let _tmp = idx;
  while (true) {
    const cur = _tmp;
    const next = (cur + 1 | 0) & self.capacity_mask;
    _L: {
      const _bind$4 = self.entries[next];
      if (_bind$4 === undefined) {
        break _L;
      } else {
        const _Some = _bind$4;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          _M0MPB3Map10set__entryGiRP216zhaojun_2dcoding6thrift6SchemaE(self, _x, cur);
          _tmp = next;
          continue;
        }
      }
    }
    self.entries[cur] = undefined;
    return;
  }
}
function _M0MPB3Map11shift__backGisE(self, idx) {
  let _tmp = idx;
  while (true) {
    const cur = _tmp;
    const next = (cur + 1 | 0) & self.capacity_mask;
    _L: {
      const _bind$4 = self.entries[next];
      if (_bind$4 === undefined) {
        break _L;
      } else {
        const _Some = _bind$4;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          _M0MPB3Map10set__entryGisE(self, _x, cur);
          _tmp = next;
          continue;
        }
      }
    }
    self.entries[cur] = undefined;
    return;
  }
}
function _M0MPB3Map18remove__with__hashGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeClientE(self, key, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$4 = self.entries[idx];
    if (_bind$4 === undefined) {
      return;
    } else {
      const _Some = _bind$4;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        _M0MPB3Map13remove__entryGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeClientE(self, _entry);
        _M0MPB3Map11shift__backGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeClientE(self, idx);
        self.size = self.size - 1 | 0;
        return;
      }
      if (i > _entry.psl) {
        return;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map18remove__with__hashGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeServerE(self, key, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$4 = self.entries[idx];
    if (_bind$4 === undefined) {
      return;
    } else {
      const _Some = _bind$4;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        _M0MPB3Map13remove__entryGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeServerE(self, _entry);
        _M0MPB3Map11shift__backGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeServerE(self, idx);
        self.size = self.size - 1 | 0;
        return;
      }
      if (i > _entry.psl) {
        return;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map18remove__with__hashGiRP216zhaojun_2dcoding6thrift6SchemaE(self, key, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$4 = self.entries[idx];
    if (_bind$4 === undefined) {
      return;
    } else {
      const _Some = _bind$4;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        _M0MPB3Map13remove__entryGiRP216zhaojun_2dcoding6thrift6SchemaE(self, _entry);
        _M0MPB3Map11shift__backGiRP216zhaojun_2dcoding6thrift6SchemaE(self, idx);
        self.size = self.size - 1 | 0;
        return;
      }
      if (i > _entry.psl) {
        return;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map18remove__with__hashGisE(self, key, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind$4 = self.entries[idx];
    if (_bind$4 === undefined) {
      return;
    } else {
      const _Some = _bind$4;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        _M0MPB3Map13remove__entryGisE(self, _entry);
        _M0MPB3Map11shift__backGisE(self, idx);
        self.size = self.size - 1 | 0;
        return;
      }
      if (i > _entry.psl) {
        return;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map6removeGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeClientE(self, key) {
  _M0MPB3Map18remove__with__hashGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeClientE(self, key, _M0IPC13int3IntPB4Hash4hash(key));
}
function _M0MPB3Map6removeGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeServerE(self, key) {
  _M0MPB3Map18remove__with__hashGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeServerE(self, key, _M0IPC13int3IntPB4Hash4hash(key));
}
function _M0MPB3Map6removeGiRP216zhaojun_2dcoding6thrift6SchemaE(self, key) {
  _M0MPB3Map18remove__with__hashGiRP216zhaojun_2dcoding6thrift6SchemaE(self, key, _M0IPC13int3IntPB4Hash4hash(key));
}
function _M0MPB3Map6removeGisE(self, key) {
  _M0MPB3Map18remove__with__hashGisE(self, key, _M0IPC13int3IntPB4Hash4hash(key));
}
function _M0MPB3Map6lengthGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeClientE(self) {
  return self.size;
}
function _M0MPB3Map6lengthGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeServerE(self) {
  return self.size;
}
function _M0MPB3Map6lengthGiRP216zhaojun_2dcoding6thrift6SchemaE(self) {
  return self.size;
}
function _M0MPB3Map6lengthGisE(self) {
  return self.size;
}
function _M0MPB3Map6lengthGssE(self) {
  return self.size;
}
function _M0MPB3Map6lengthGiRP216zhaojun_2dcoding6thrift5ValueE(self) {
  return self.size;
}
function _M0MPB3Map9is__emptyGssE(self) {
  return self.size === 0;
}
function _M0MPB3Map9is__emptyGisE(self) {
  return self.size === 0;
}
function _M0MPB3Map4iterGsRPB4JsonE(self) {
  const curr_entry = new _M0TPB8MutLocalGORPB5EntryGsRPB4JsonEE(self.head);
  const len = self.size;
  const remaining = new _M0TPB8MutLocalGiE(len);
  return _M0MPB4Iter3newGUsRPB4JsonEE(() => {
    _L: {
      if (remaining.val > 0) {
        const _bind$4 = curr_entry.val;
        if (_bind$4 === undefined) {
          break _L;
        } else {
          const _Some = _bind$4;
          const _x = _Some;
          const _key = _x.key;
          const _value = _x.value;
          const _next = _x.next;
          curr_entry.val = _next;
          remaining.val = remaining.val - 1 | 0;
          return { _0: _key, _1: _value };
        }
      } else {
        break _L;
      }
    }
    return undefined;
  }, len);
}
function _M0MPB3Map5iter2GssE(self) {
  return _M0MPB3Map4iterGsRPB4JsonE(self);
}
function _M0IPC14byte4BytePB2Eq5equal(self, that) {
  return self === that;
}
function _M0MPC14json4Json4null() {
  return _M0DTPB4Json4Null__;
}
function _M0MPC14json4Json6string(string) {
  return new _M0DTPB4Json6String(string);
}
function _M0MPC14json4Json7boolean(boolean) {
  return boolean ? _M0DTPB4Json4True__ : _M0DTPB4Json5False__;
}
function _M0MPC14json4Json6object(object) {
  return new _M0DTPB4Json6Object(object);
}
function _M0IPC14bool4BoolPB6ToJson8to__json(self) {
  return self ? _M0MPC14json4Json7boolean(true) : _M0MPC14json4Json7boolean(false);
}
function _M0IPC13int3IntPB6ToJson8to__json(self) {
  return _M0MPC14json4Json6number(self + 0, undefined);
}
function _M0IPC16double6DoublePB6ToJson8to__json(self) {
  return self !== self ? _M0MPC14json4Json6string("NaN") : self > $i64_reinterpret_f64(9218868437227405311n) ? _M0MPC14json4Json6string("Infinity") : self < $i64_reinterpret_f64(18442240474082181119n) ? _M0MPC14json4Json6string("-Infinity") : _M0MPC14json4Json6number(self, undefined);
}
function _M0MPC15array5Array3mapGRP216zhaojun_2dcoding6thrift7MessageRPB4JsonEHRP216zhaojun_2dcoding6thrift11SchemaError(self, f) {
  const arr = new Array(self.length);
  const _bind$4 = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$4) {
      const v = self[i];
      const _bind$5 = f(v);
      let _tmp$2;
      if (_bind$5.$tag === 1) {
        const _ok = _bind$5;
        _tmp$2 = _ok._0;
      } else {
        return _bind$5;
      }
      arr[i] = _tmp$2;
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGRPB4JsonERP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(arr);
}
function _M0MPC15array5Array3mapGRPB4JsonsE(self, f) {
  const arr = new Array(self.length);
  const _bind$4 = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$4) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGUsRP216zhaojun_2dcoding6thrift9IdlMethodERP216zhaojun_2dcoding6thrift9IdlMethodE(self, f) {
  const arr = new Array(self.length);
  const _bind$4 = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$4) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGsRPB4JsonE(self, f) {
  const arr = new Array(self.length);
  const _bind$4 = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$4) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRP216zhaojun_2dcoding6thrift9IdlMethodRPB4JsonEHRP216zhaojun_2dcoding6thrift11SchemaError(self, f) {
  const arr = new Array(self.length);
  const _bind$4 = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$4) {
      const v = self[i];
      const _bind$5 = f(v);
      let _tmp$2;
      if (_bind$5.$tag === 1) {
        const _ok = _bind$5;
        _tmp$2 = _ok._0;
      } else {
        return _bind$5;
      }
      arr[i] = _tmp$2;
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGRPB4JsonERP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(arr);
}
function _M0MPC15array5Array3mapGUsiERPB4JsonE(self, f) {
  const arr = new Array(self.length);
  const _bind$4 = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$4) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGssE(self, f) {
  const arr = new Array(self.length);
  const _bind$4 = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$4) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGURP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift5ValueERPB4JsonEHRP216zhaojun_2dcoding6thrift11SchemaError(self, f) {
  const arr = new Array(self.length);
  const _bind$4 = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$4) {
      const v = self[i];
      const _bind$5 = f(v);
      let _tmp$2;
      if (_bind$5.$tag === 1) {
        const _ok = _bind$5;
        _tmp$2 = _ok._0;
      } else {
        return _bind$5;
      }
      arr[i] = _tmp$2;
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGRPB4JsonERP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(arr);
}
function _M0MPC15array5Array3mapGRP216zhaojun_2dcoding6thrift5ValueRPB4JsonEHRP216zhaojun_2dcoding6thrift11SchemaError(self, f) {
  const arr = new Array(self.length);
  const _bind$4 = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$4) {
      const v = self[i];
      const _bind$5 = f(v);
      let _tmp$2;
      if (_bind$5.$tag === 1) {
        const _ok = _bind$5;
        _tmp$2 = _ok._0;
      } else {
        return _bind$5;
      }
      arr[i] = _tmp$2;
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGRPB4JsonERP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(arr);
}
function _M0MPC15array5Array3mapGRPB4JsonRP216zhaojun_2dcoding6thrift5ValueEHRP216zhaojun_2dcoding6thrift11SchemaError(self, f) {
  const arr = new Array(self.length);
  const _bind$4 = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$4) {
      const v = self[i];
      const _bind$5 = f(v);
      let _tmp$2;
      if (_bind$5.$tag === 1) {
        const _ok = _bind$5;
        _tmp$2 = _ok._0;
      } else {
        return _bind$5;
      }
      arr[i] = _tmp$2;
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGRP216zhaojun_2dcoding6thrift5ValueERP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(arr);
}
function _M0MPC15array5Array3mapGRP216zhaojun_2dcoding6thrift8IdlFieldRPB4JsonEHRP216zhaojun_2dcoding6thrift11SchemaError(self, f) {
  const arr = new Array(self.length);
  const _bind$4 = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$4) {
      const v = self[i];
      const _bind$5 = f(v);
      let _tmp$2;
      if (_bind$5.$tag === 1) {
        const _ok = _bind$5;
        _tmp$2 = _ok._0;
      } else {
        return _bind$5;
      }
      arr[i] = _tmp$2;
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGRPB4JsonERP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(arr);
}
function _M0MPC15array5Array3mapGUOsRPC15debug4ReprERPC15debug4ReprE(self, f) {
  const arr = new Array(self.length);
  const _bind$4 = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$4) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGURP216zhaojun_2dcoding6thrift8IdlConstRP216zhaojun_2dcoding6thrift8IdlConstERPB4JsonEHRP216zhaojun_2dcoding6thrift11SchemaError(self, f) {
  const arr = new Array(self.length);
  const _bind$4 = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$4) {
      const v = self[i];
      const _bind$5 = f(v);
      let _tmp$2;
      if (_bind$5.$tag === 1) {
        const _ok = _bind$5;
        _tmp$2 = _ok._0;
      } else {
        return _bind$5;
      }
      arr[i] = _tmp$2;
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGRPB4JsonERP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(arr);
}
function _M0MPC15array5Array3mapGRP216zhaojun_2dcoding6thrift8IdlConstRPB4JsonEHRP216zhaojun_2dcoding6thrift11SchemaError(self, f) {
  const arr = new Array(self.length);
  const _bind$4 = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$4) {
      const v = self[i];
      const _bind$5 = f(v);
      let _tmp$2;
      if (_bind$5.$tag === 1) {
        const _ok = _bind$5;
        _tmp$2 = _ok._0;
      } else {
        return _bind$5;
      }
      arr[i] = _tmp$2;
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGRPB4JsonERP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(arr);
}
function _M0MPC15array5Array3mapGyRPC15debug4ReprE(self, f) {
  const arr = new Array(self.length);
  const _bind$4 = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$4) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGURP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift5ValueERPC15debug4ReprE(self, f) {
  const arr = new Array(self.length);
  const _bind$4 = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$4) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRP216zhaojun_2dcoding6thrift5ValueRPC15debug4ReprE(self, f) {
  const arr = new Array(self.length);
  const _bind$4 = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$4) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGUiRP216zhaojun_2dcoding6thrift5ValueERPC15debug4ReprE(self, f) {
  const arr = new Array(self.length);
  const _bind$4 = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$4) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRPC15debug4ReprRPC15debug7ContentE(self, f) {
  const arr = new Array(self.length);
  const _bind$4 = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$4) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(self, f) {
  const arr = new Array(self.length);
  const _bind$4 = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$4) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRPC15debug4ReprRPC15debug4ReprE(self, f) {
  const arr = new Array(self.length);
  const _bind$4 = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$4) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRPC15debug13ContentParensRPB5ArrayGsEE(self, f) {
  const arr = new Array(self.length);
  const _bind$4 = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$4) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0IPC15array5ArrayPB6ToJson8to__jsonGsE(self) {
  return new _M0DTPB4Json5Array(_M0MPC15array5Array3mapGsRPB4JsonE(self, (x) => _M0IPC16string6StringPB6ToJson8to__json(x)));
}
function _M0IPB3MapPB6ToJson8to__jsonGssE(self) {
  const _bind$4 = [];
  const object = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$4, 0, 0), self.capacity);
  const _it = _M0MPB3Map5iter2GssE(self);
  while (true) {
    const _bind$5 = _M0MPB5Iter24nextGssE(_it);
    if (_bind$5 === undefined) {
      break;
    } else {
      const _Some = _bind$5;
      const _x = _Some;
      const _k = _x._0;
      const _v = _x._1;
      _M0MPB3Map3setGsRPB4JsonE(object, _M0IPC16string6StringPB4Show10to__string(_k), _M0IPC16string6StringPB6ToJson8to__json(_v));
      continue;
    }
  }
  return new _M0DTPB4Json6Object(object);
}
function _M0MPB4Iter10size__hintGsE(self) {
  return self.size_hint;
}
function _M0MPB4Iter11find__firstGRP216zhaojun_2dcoding6thrift8IdlFieldE(self, f) {
  while (true) {
    const _bind$4 = _M0MPB4Iter4nextGUsRPB4JsonEE(self);
    if (_bind$4 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$4;
      const _x = _Some;
      if (f(_x)) {
        return _x;
      }
      continue;
    }
  }
}
function _M0MPB4Iter4iterGsE(self) {
  return self;
}
function _M0MPB5Iter24nextGssE(self) {
  return _M0MPB4Iter4nextGUsRPB4JsonEE(self);
}
function _M0MPC14byte4Byte9to__int64(self) {
  return BigInt.asUintN(64, BigInt(self));
}
function _M0MPC13int3Int13is__surrogate(self) {
  return 55296 <= self && self <= 57343;
}
function _M0MPC15bytes5Bytes12view_2einner(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end;
  }
  if (start >= 0 && (start <= end$2 && end$2 <= len)) {
    const _bind$4 = end$2 - start | 0;
    return new _M0TPC15bytes9BytesView(self, start, start + _bind$4 | 0);
  } else {
    return _M0FPC15abort5abortGRPB9ArrayViewGsEE("Invalid index for View");
  }
}
function _M0IPC16string6StringPB4Hash4hash(self) {
  let acc = (_M0FPB4seed >>> 0) + (374761393 >>> 0) | 0;
  const _bind$4 = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$4) {
      acc = (acc >>> 0) + (4 >>> 0) | 0;
      const v = self.charCodeAt(i);
      acc = _M0FPB13consume4__acc(acc, v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FPB13finalize__acc(acc);
}
function _M0IPC13int3IntPB4Hash4hash(self) {
  const acc = (((_M0FPB4seed >>> 0) + (374761393 >>> 0) | 0) >>> 0) + (4 >>> 0) | 0;
  return _M0FPB13finalize__acc(_M0FPB13consume4__acc(acc, self));
}
function _M0MPB18UninitializedArray19unsafe__blit__fixedGyE(dst, dst_offset, src, src_offset, len) {
  let _tmp = len - 1 | 0;
  while (true) {
    const i = _tmp;
    if (i >= 0) {
      const _tmp$2 = dst_offset + i | 0;
      const _tmp$3 = src_offset + i | 0;
      if (_tmp$2 >>> 0 < dst.length) {
        dst[_tmp$2] = _tmp$3 >>> 0 < src.length ? src[_tmp$3] : $oob();
      } else {
        $oob();
      }
      _tmp = i - 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0MPC16double6Double7to__int(self) {
  return self !== self ? 0 : self >= 2147483647 ? 2147483647 : self <= -2147483648 ? -2147483648 : self | 0;
}
function _M0MPC16double6Double5trunc(_tmp) {
  return Math.trunc(_tmp);
}
function _M0MPC16double6Double7is__nan(self) {
  return self !== self;
}
function _M0MPC16double6Double7is__inf(self) {
  return self > _M0FPB18double__max__value || self < _M0FPB18double__min__value;
}
function _M0IPC16double6DoublePB4Show10to__string(self) {
  return String(self);
}
function _M0MPC14char4Char7to__hex(char) {
  const code = char;
  return code >= 0 && code <= 255 ? _M0MPC14byte4Byte7to__hex(code & 255) : code <= 65535 ? `${_M0MPC14byte4Byte7to__hex(code >> 8 & 255)}${_M0MPC14byte4Byte7to__hex(code & 255)}` : `${_M0MPC14byte4Byte7to__hex(code >> 16 & 255)}${_M0MPC14byte4Byte7to__hex(code >> 8 & 255)}${_M0MPC14byte4Byte7to__hex(code & 255)}`;
}
function _M0MPC14char4Char19is__ascii__hexdigit(self) {
  return self >= 48 && self <= 57 ? true : self >= 65 && self <= 70 ? true : self >= 97 && self <= 102;
}
function _M0MPC14char4Char11is__control(self) {
  return self >= 0 && self <= 31 ? true : self >= 127 && self <= 159;
}
function _M0MPC14char4Char13is__printable(self) {
  if (_M0MPC14char4Char11is__control(self)) {
    return false;
  }
  const self$2 = self;
  _L: {
    _L$2: {
      if (self$2 >= 57344 && self$2 <= 63743) {
        break _L$2;
      } else {
        if (self$2 >= 983040 && self$2 <= 1048573) {
          break _L$2;
        } else {
          if (self$2 >= 1048576 && self$2 <= 1114109) {
            break _L$2;
          }
        }
      }
      break _L;
    }
    return false;
  }
  _L$2: {
    _L$3: {
      if (self$2 === 173) {
        break _L$3;
      } else {
        if (self$2 >= 1536 && self$2 <= 1541) {
          break _L$3;
        } else {
          if (self$2 === 1564) {
            break _L$3;
          } else {
            if (self$2 === 1757) {
              break _L$3;
            } else {
              if (self$2 === 1807) {
                break _L$3;
              } else {
                if (self$2 >= 2192 && self$2 <= 2193) {
                  break _L$3;
                } else {
                  if (self$2 === 2274) {
                    break _L$3;
                  } else {
                    if (self$2 === 6158) {
                      break _L$3;
                    } else {
                      if (self$2 >= 8203 && self$2 <= 8207) {
                        break _L$3;
                      } else {
                        if (self$2 >= 8234 && self$2 <= 8238) {
                          break _L$3;
                        } else {
                          if (self$2 >= 8288 && self$2 <= 8292) {
                            break _L$3;
                          } else {
                            if (self$2 >= 8294 && self$2 <= 8303) {
                              break _L$3;
                            } else {
                              if (self$2 === 65279) {
                                break _L$3;
                              } else {
                                if (self$2 >= 65529 && self$2 <= 65531) {
                                  break _L$3;
                                } else {
                                  if (self$2 === 69821) {
                                    break _L$3;
                                  } else {
                                    if (self$2 === 69837) {
                                      break _L$3;
                                    } else {
                                      if (self$2 >= 78896 && self$2 <= 78911) {
                                        break _L$3;
                                      } else {
                                        if (self$2 >= 113824 && self$2 <= 113827) {
                                          break _L$3;
                                        } else {
                                          if (self$2 >= 119155 && self$2 <= 119162) {
                                            break _L$3;
                                          } else {
                                            if (self$2 === 917505) {
                                              break _L$3;
                                            } else {
                                              if (self$2 >= 917536 && self$2 <= 917631) {
                                                break _L$3;
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      break _L$2;
    }
    return false;
  }
  if (_M0MPC13int3Int13is__surrogate(self$2)) {
    return false;
  }
  if (self$2 === 8232 || self$2 === 8233) {
    return false;
  }
  _L$3: {
    _L$4: {
      if (self$2 >= 64976 && self$2 <= 65007) {
        break _L$4;
      } else {
        if (self$2 >= 65534 && self$2 <= 65535) {
          break _L$4;
        } else {
          if (self$2 >= 131070 && self$2 <= 131071) {
            break _L$4;
          } else {
            if (self$2 >= 196606 && self$2 <= 196607) {
              break _L$4;
            } else {
              if (self$2 >= 262142 && self$2 <= 262143) {
                break _L$4;
              } else {
                if (self$2 >= 327678 && self$2 <= 327679) {
                  break _L$4;
                } else {
                  if (self$2 >= 393214 && self$2 <= 393215) {
                    break _L$4;
                  } else {
                    if (self$2 >= 458750 && self$2 <= 458751) {
                      break _L$4;
                    } else {
                      if (self$2 >= 524286 && self$2 <= 524287) {
                        break _L$4;
                      } else {
                        if (self$2 >= 589822 && self$2 <= 589823) {
                          break _L$4;
                        } else {
                          if (self$2 >= 655358 && self$2 <= 655359) {
                            break _L$4;
                          } else {
                            if (self$2 >= 720894 && self$2 <= 720895) {
                              break _L$4;
                            } else {
                              if (self$2 >= 786430 && self$2 <= 786431) {
                                break _L$4;
                              } else {
                                if (self$2 >= 851966 && self$2 <= 851967) {
                                  break _L$4;
                                } else {
                                  if (self$2 >= 917502 && self$2 <= 917503) {
                                    break _L$4;
                                  } else {
                                    if (self$2 >= 983038 && self$2 <= 983039) {
                                      break _L$4;
                                    } else {
                                      if (self$2 >= 1048574 && self$2 <= 1048575) {
                                        break _L$4;
                                      } else {
                                        if (self$2 >= 1114110 && self$2 <= 1114111) {
                                          break _L$4;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      break _L$3;
    }
    return false;
  }
  return true;
}
function _M0MPC14char4Char20to__ascii__lowercase(self) {
  if (_M0MPC14char4Char20is__ascii__uppercase(self)) {
    return self + 32 | 0;
  }
  return self;
}
function _M0MPC14char4Char18escape__to_2einner(self, logger, quote) {
  if (quote) {
    logger.method_table.method_3(logger.self, 39);
  }
  _L: {
    _L$2: {
      if (self === 39) {
        break _L$2;
      } else {
        if (self === 92) {
          break _L$2;
        } else {
          if (self === 10) {
            logger.method_table.method_0(logger.self, "\\n");
          } else {
            if (self === 13) {
              logger.method_table.method_0(logger.self, "\\r");
            } else {
              if (self === 8) {
                logger.method_table.method_0(logger.self, "\\b");
              } else {
                if (self === 9) {
                  logger.method_table.method_0(logger.self, "\\t");
                } else {
                  if (self >= 32 && self <= 126) {
                    logger.method_table.method_3(logger.self, self);
                  } else {
                    if (!_M0MPC14char4Char13is__printable(self)) {
                      logger.method_table.method_0(logger.self, "\\u{");
                      logger.method_table.method_0(logger.self, _M0MPC14char4Char7to__hex(self));
                      logger.method_table.method_3(logger.self, 125);
                    } else {
                      logger.method_table.method_3(logger.self, self);
                    }
                  }
                }
              }
            }
          }
        }
      }
      break _L;
    }
    logger.method_table.method_3(logger.self, 92);
    logger.method_table.method_3(logger.self, self);
  }
  if (quote) {
    logger.method_table.method_3(logger.self, 39);
    return;
  } else {
    return;
  }
}
function _M0MPC14char4Char14escape_2einner(self, quote) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0MPC14char4Char18escape__to_2einner(self, { self: buf, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger }, quote);
  return _M0MPB13StringBuilder10to__string(buf);
}
function _M0MPC15bytes9BytesView4data(self) {
  return self.buf;
}
function _M0MPC15bytes9BytesView13start__offset(self) {
  return self.start;
}
function _M0MPC15array10FixedArray17blit__from__bytes(self, bytes_offset, src, src_offset, length) {
  const e1 = (bytes_offset + length | 0) - 1 | 0;
  const e2 = (src_offset + length | 0) - 1 | 0;
  const len1 = self.length;
  const len2 = src.length;
  if (length >= 0 && (bytes_offset >= 0 && (e1 < len1 && (src_offset >= 0 && e2 < len2)))) {
    _M0MPC15array10FixedArray12unsafe__blitGyE(self, bytes_offset, src, src_offset, length);
    return;
  } else {
    $panic();
    return;
  }
}
function _M0MPC15bytes9BytesView9to__owned(self) {
  if ((self.end - self.start | 0) === self.buf.length) {
    return self.buf;
  }
  const bytes = $makebytes(self.end - self.start | 0, 0);
  _M0MPC15array10FixedArray17blit__from__bytes(bytes, 0, self.buf, _M0MPC15bytes9BytesView13start__offset(self), self.end - self.start | 0);
  return bytes;
}
function _M0MPC15bytes5Bytes11from__array(arr) {
  const len = arr.end - arr.start | 0;
  if (len === 0) {
    return $bytes_literal$0;
  }
  const result = _M0MPB18UninitializedArray23unsafe__make__and__blitGyE(arr.buf, len, arr.start, 0, len);
  return result;
}
function _M0MPC15array5Array44unsafe__make__and__blit__from__fixed_2einnerGyE(src, allocate_len, len, src_offset, dst_offset) {
  const dst = new Array(allocate_len);
  _M0MPB18UninitializedArray19unsafe__blit__fixedGyE(dst, dst_offset, src, src_offset, len);
  return dst;
}
function _M0MPC15bytes5Bytes9to__array(self) {
  const len = self.length;
  return _M0MPC15array5Array44unsafe__make__and__blit__from__fixed_2einnerGyE(self, len, len, 0, 0);
}
function _M0MPC15bytes9BytesView9to__array(self) {
  const len = self.end - self.start | 0;
  return _M0MPC15array5Array44unsafe__make__and__blit__from__fixed_2einnerGyE(_M0MPC15bytes9BytesView4data(self), len, len, _M0MPC15bytes9BytesView13start__offset(self), 0);
}
function _M0MPC15array5Array12view_2einnerGsE(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end;
  }
  if (start >= 0 && (start <= end$2 && end$2 <= len)) {
    const _bind$4 = self;
    const _bind$5 = end$2 - start | 0;
    return new _M0TPB9ArrayViewGsE(_bind$4, start, start + _bind$5 | 0);
  } else {
    return _M0FPC15abort5abortGRPB9ArrayViewGsEE("View index out of bounds");
  }
}
function _M0MPC15array5Array12view_2einnerGcE(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end;
  }
  if (start >= 0 && (start <= end$2 && end$2 <= len)) {
    const _bind$4 = self;
    const _bind$5 = end$2 - start | 0;
    return new _M0TPB9ArrayViewGcE(_bind$4, start, start + _bind$5 | 0);
  } else {
    return _M0FPC15abort5abortGRPB9ArrayViewGsEE("View index out of bounds");
  }
}
function _M0MPC15array5Array17reserve__capacityGsE(self, capacity) {}
function _M0MPC15array5Array6appendGsE(self, other) {
  const old_len = self.length;
  const append_len = other.end - other.start | 0;
  if ((old_len + append_len | 0) >= old_len) {
    _M0MPB7JSArray12append__view(self, other.buf, other.start, append_len);
    return;
  } else {
    $panic();
    return;
  }
}
function _M0MPC15array5Array9is__emptyGRPB4JsonE(self) {
  return self.length === 0;
}
function _M0MPC15array5Array9is__emptyGcE(self) {
  return self.length === 0;
}
function _M0MPC15array5Array11unsafe__popGRPC14json10WriteFrameE(self) {
  return _M0MPB7JSArray3pop(self);
}
function _M0MPC15array5Array3popGRPC14json10WriteFrameE(self) {
  if (_M0MPC15array5Array9is__emptyGRPB4JsonE(self)) {
    return undefined;
  } else {
    const v = _M0MPC15array5Array11unsafe__popGRPC14json10WriteFrameE(self);
    return v;
  }
}
function _M0MPC15array5Array4copyGsE(self) {
  return _M0MPB7JSArray4copy(self);
}
function _M0MPC15array5Array2atGsE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGcE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array3setGsE(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    self[index] = value;
    return;
  } else {
    $panic();
    return;
  }
}
function _M0MPC15array5Array3getGRP216zhaojun_2dcoding6thrift8IdlTokenE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : undefined;
}
function _M0MPC15array5Array3getGcE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : -1;
}
function _M0IPC15array5ArrayPB2Eq5equalGURP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift5ValueEE(self, other) {
  const self_len = self.length;
  const other_len = other.length;
  if (self_len === other_len) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < self_len) {
        if (_M0IPC15tuple6Tuple2PB2Eq5equalGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift5ValueE(self[i], other[i])) {
        } else {
          return false;
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        return true;
      }
    }
  } else {
    return false;
  }
}
function _M0IPC15array5ArrayPB2Eq5equalGRP216zhaojun_2dcoding6thrift5ValueE(self, other) {
  const self_len = self.length;
  const other_len = other.length;
  if (self_len === other_len) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < self_len) {
        if (_M0IP216zhaojun_2dcoding6thrift5ValuePB2Eq5equal(self[i], other[i])) {
        } else {
          return false;
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        return true;
      }
    }
  } else {
    return false;
  }
}
function _M0IPC15array5ArrayPB2Eq5equalGUiRP216zhaojun_2dcoding6thrift5ValueEE(self, other) {
  const self_len = self.length;
  const other_len = other.length;
  if (self_len === other_len) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < self_len) {
        if (_M0IPC15tuple6Tuple2PB2Eq5equalGiRP216zhaojun_2dcoding6thrift5ValueE(self[i], other[i])) {
        } else {
          return false;
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        return true;
      }
    }
  } else {
    return false;
  }
}
function _M0IPC15array5ArrayPB2Eq5equalGURP216zhaojun_2dcoding6thrift8IdlConstRP216zhaojun_2dcoding6thrift8IdlConstEE(self, other) {
  const self_len = self.length;
  const other_len = other.length;
  if (self_len === other_len) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < self_len) {
        if (_M0IPC15tuple6Tuple2PB2Eq5equalGRP216zhaojun_2dcoding6thrift8IdlConstRP216zhaojun_2dcoding6thrift8IdlConstE(self[i], other[i])) {
        } else {
          return false;
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        return true;
      }
    }
  } else {
    return false;
  }
}
function _M0IPC15array5ArrayPB2Eq5equalGRP216zhaojun_2dcoding6thrift8IdlConstE(self, other) {
  const self_len = self.length;
  const other_len = other.length;
  if (self_len === other_len) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < self_len) {
        if (_M0IP216zhaojun_2dcoding6thrift8IdlConstPB2Eq5equal(self[i], other[i])) {
        } else {
          return false;
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        return true;
      }
    }
  } else {
    return false;
  }
}
function _M0IPC15array5ArrayPB3Add3addGsE(self, other) {
  const len_self = self.length;
  const len_other = other.length;
  if (len_self === 0) {
    return _M0MPC15array5Array31unsafe__make__and__blit_2einnerGsE(other, len_other, len_other, 0, 0);
  } else {
    const result = _M0MPC15array5Array31unsafe__make__and__blit_2einnerGsE(self, len_self + len_other | 0, len_self, 0, 0);
    _M0MPB18UninitializedArray12unsafe__blitGsE(result, len_self, other, 0, len_other);
    return result;
  }
}
function _M0MPC15array5Array3allGsE(self, f) {
  const _bind$4 = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$4) {
      const v = self[_];
      if (!f(v)) {
        return false;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0MPC15array5Array3anyGUsRP216zhaojun_2dcoding6thrift9IdlMethodEE(self, f) {
  const _bind$4 = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$4) {
      const v = self[_];
      if (f(v)) {
        return true;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function _M0MPC15array5Array3anyGRP216zhaojun_2dcoding6thrift8IdlFieldE(self, f) {
  const _bind$4 = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$4) {
      const v = self[_];
      if (f(v)) {
        return true;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function _M0MPC15array5Array6filterGRP216zhaojun_2dcoding6thrift8IdlFieldE(self, f) {
  const arr = [];
  const _bind$4 = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$4) {
      const v = self[_];
      if (f(v)) {
        _M0MPC15array5Array4pushGRPB4JsonE(arr, v);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array6filterGsE(self, f) {
  const arr = [];
  const _bind$4 = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$4) {
      const v = self[_];
      if (f(v)) {
        _M0MPC15array5Array4pushGRPB4JsonE(arr, v);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array8containsGsE(self, value) {
  const _bind$4 = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$4) {
      const v = self[_];
      if (v === value) {
        return true;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      return false;
    }
  }
}
function _M0MPC15array5Array8containsGcE(self, value) {
  const _bind$4 = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$4) {
      const v = self[_];
      if (v === value) {
        return true;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      return false;
    }
  }
}
function _M0MPC15array5Array10push__iterGsE(self, iter) {
  const _bind$4 = _M0MPB4Iter10size__hintGsE(iter);
  if (_bind$4 === undefined) {
  } else {
    const _Some = _bind$4;
    const _n = _Some;
    _M0MPC15array5Array17reserve__capacityGsE(self, self.length + _n | 0);
  }
  while (true) {
    const _bind$5 = _M0MPB4Iter4nextGUsRPB4JsonEE(iter);
    if (_bind$5 === undefined) {
      return;
    } else {
      const _Some = _bind$5;
      const _x = _Some;
      _M0MPC15array5Array4pushGRPB4JsonE(self, _x);
      continue;
    }
  }
}
function _M0MPC15array5Array4joinGsE(self, separator) {
  return _M0MPC15array9ArrayView4joinGsE(new _M0TPB9ArrayViewGsE(self, 0, self.length), separator);
}
function _M0MPC15array5Array4joinGRPC16string10StringViewE(self, separator) {
  return _M0MPC15array9ArrayView4joinGRPC16string10StringViewE(new _M0TPB9ArrayViewGRPC16string10StringViewE(self, 0, self.length), separator);
}
function _M0IPC15float5FloatPB4Show10to__string(self) {
  return String(self);
}
function _M0MPC15debug4Repr4ReprGRPC15error5ErrorE(value) {
  return _M0IPC15error5ErrorPC15debug5Debug8to__repr(value);
}
function _M0MPC15debug4Repr4ReprGRP216zhaojun_2dcoding6thrift11SchemaErrorE(value) {
  return _M0IP216zhaojun_2dcoding6thrift11SchemaErrorPC15debug5Debug8to__repr(value);
}
function _M0MPC15debug4Repr4ReprGRP216zhaojun_2dcoding6thrift7MessageE(value) {
  return _M0IP216zhaojun_2dcoding6thrift7MessagePC15debug5Debug8to__repr(value);
}
function _M0MPC15debug4Repr4ReprGRP216zhaojun_2dcoding6thrift5ValueE(value) {
  return _M0IP216zhaojun_2dcoding6thrift5ValuePC15debug5Debug8to__repr(value);
}
function _M0MPC15debug4Repr4ReprGyE(value) {
  return _M0IPC14byte4BytePC15debug5Debug8to__repr(value);
}
function _M0MPC15debug4Repr4ReprGRP216zhaojun_2dcoding6thrift4KindE(value) {
  return _M0IP216zhaojun_2dcoding6thrift4KindPC15debug5Debug8to__repr(value);
}
function _M0MPC15debug4Repr4ReprGURP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift5ValueEE(value) {
  return _M0IPC15tuple6Tuple2PC15debug5Debug8to__reprGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift5ValueE(value);
}
function _M0MPC15debug4Repr4ReprGUiRP216zhaojun_2dcoding6thrift5ValueEE(value) {
  return _M0IPC15tuple6Tuple2PC15debug5Debug8to__reprGiRP216zhaojun_2dcoding6thrift5ValueE(value);
}
function _M0MPC15debug4Repr4ReprGiE(value) {
  return _M0IPC13int3IntPC15debug5Debug8to__repr(value);
}
function _M0MPC15debug4Repr5tuple(children) {
  return new _M0DTPC15debug4Repr5Tuple(children);
}
function _M0IPC15tuple6Tuple2PC15debug5Debug8to__reprGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift5ValueE(self) {
  const _a = self._0;
  const _b = self._1;
  return _M0MPC15debug4Repr5tuple([_M0MPC15debug4Repr4ReprGRP216zhaojun_2dcoding6thrift5ValueE(_a), _M0MPC15debug4Repr4ReprGRP216zhaojun_2dcoding6thrift5ValueE(_b)]);
}
function _M0IPC15tuple6Tuple2PC15debug5Debug8to__reprGiRP216zhaojun_2dcoding6thrift5ValueE(self) {
  const _a = self._0;
  const _b = self._1;
  return _M0MPC15debug4Repr5tuple([_M0MPC15debug4Repr4ReprGiE(_a), _M0MPC15debug4Repr4ReprGRP216zhaojun_2dcoding6thrift5ValueE(_b)]);
}
function _M0MPC15debug4Repr8children(self) {
  let value;
  _L: {
    _L$2: {
      switch (self.$tag) {
        case 0: {
          break _L$2;
        }
        case 1: {
          break _L$2;
        }
        case 2: {
          break _L$2;
        }
        case 3: {
          break _L$2;
        }
        case 4: {
          break _L$2;
        }
        case 5: {
          break _L$2;
        }
        case 6: {
          break _L$2;
        }
        case 15: {
          break _L$2;
        }
        case 17: {
          break _L$2;
        }
        case 7: {
          const _Tuple = self;
          const _xs = _Tuple._0;
          return _xs;
        }
        case 8: {
          const _Array = self;
          const _xs$2 = _Array._0;
          return _xs$2;
        }
        case 9: {
          const _Record = self;
          const _xs$3 = _Record._0;
          return _xs$3;
        }
        case 10: {
          const _Enum = self;
          const _xs$4 = _Enum._1;
          return _xs$4;
        }
        case 11: {
          const _Map = self;
          const _xs$5 = _Map._0;
          return _xs$5;
        }
        case 14: {
          const _Opaque = self;
          const _value = _Opaque._1;
          value = _value;
          break _L;
        }
        case 12: {
          const _RecordField = self;
          const _value$2 = _RecordField._1;
          value = _value$2;
          break _L;
        }
        case 13: {
          const _EnumLabeledArg = self;
          const _value$3 = _EnumLabeledArg._1;
          value = _value$3;
          break _L;
        }
        default: {
          const _MapEntry = self;
          const _key = _MapEntry._0;
          const _value$4 = _MapEntry._1;
          return [_key, _value$4];
        }
      }
    }
    return [];
  }
  return [value];
}
function _M0MPC15debug4Repr14with__children(self, children) {
  _L: {
    switch (self.$tag) {
      case 0: {
        break _L;
      }
      case 1: {
        break _L;
      }
      case 2: {
        break _L;
      }
      case 3: {
        break _L;
      }
      case 4: {
        break _L;
      }
      case 5: {
        break _L;
      }
      case 6: {
        break _L;
      }
      case 15: {
        break _L;
      }
      case 17: {
        break _L;
      }
      case 7: {
        return new _M0DTPC15debug4Repr5Tuple(children);
      }
      case 8: {
        return new _M0DTPC15debug4Repr5Array(children);
      }
      case 9: {
        return new _M0DTPC15debug4Repr6Record(children);
      }
      case 10: {
        const _Enum = self;
        const _name = _Enum._0;
        return new _M0DTPC15debug4Repr4Enum(_name, children);
      }
      case 11: {
        return new _M0DTPC15debug4Repr3Map(children);
      }
      case 12: {
        const _RecordField = self;
        const _name$2 = _RecordField._0;
        if (children.length === 1) {
          const _value = children[0];
          return new _M0DTPC15debug4Repr11RecordField(_name$2, _value);
        } else {
          return new _M0DTPC15debug4Repr11RecordField(_name$2, _M0DTPC15debug4Repr7Omitted__);
        }
      }
      case 13: {
        const _EnumLabeledArg = self;
        const _label = _EnumLabeledArg._0;
        if (children.length === 1) {
          const _value = children[0];
          return new _M0DTPC15debug4Repr14EnumLabeledArg(_label, _value);
        } else {
          return new _M0DTPC15debug4Repr14EnumLabeledArg(_label, _M0DTPC15debug4Repr7Omitted__);
        }
      }
      case 16: {
        if (children.length === 2) {
          const _key = children[0];
          const _value = children[1];
          return new _M0DTPC15debug4Repr8MapEntry(_key, _value);
        } else {
          return new _M0DTPC15debug4Repr8MapEntry(_M0DTPC15debug4Repr7Omitted__, _M0DTPC15debug4Repr7Omitted__);
        }
      }
      default: {
        const _Opaque = self;
        const _name$3 = _Opaque._0;
        if (children.length === 1) {
          const _value = children[0];
          return new _M0DTPC15debug4Repr6Opaque(_name$3, _value);
        } else {
          return new _M0DTPC15debug4Repr6Opaque(_name$3, _M0DTPC15debug4Repr7Omitted__);
        }
      }
    }
  }
  return self;
}
function _M0MPC15debug4Repr7integer(x) {
  return new _M0DTPC15debug4Repr7Integer(x);
}
function _M0MPC15debug4Repr6double(x) {
  return new _M0DTPC15debug4Repr9DoubleLit(x);
}
function _M0MPC15debug4Repr4bool(x) {
  return new _M0DTPC15debug4Repr7BoolLit(x);
}
function _M0MPC15debug4Repr4char(x) {
  return new _M0DTPC15debug4Repr7CharLit(x);
}
function _M0MPC15debug4Repr6string(x) {
  return new _M0DTPC15debug4Repr9StringLit(x);
}
function _M0MPC15debug4Repr5array(children) {
  return new _M0DTPC15debug4Repr5Array(children);
}
function _M0MPC15debug4Repr6record(fields) {
  const _acc = [];
  const _it = _M0MPB3Map5iter2GssE(fields);
  let _tmp;
  while (true) {
    const _bind$4 = _M0MPB5Iter24nextGssE(_it);
    if (_bind$4 === undefined) {
      _tmp = _acc;
      break;
    } else {
      const _Some = _bind$4;
      const _x = _Some;
      const _name = _x._0;
      const _value = _x._1;
      _M0MPC15array5Array4pushGRPB4JsonE(_acc, new _M0DTPC15debug4Repr11RecordField(_name, _value));
      continue;
    }
  }
  return new _M0DTPC15debug4Repr6Record(_tmp);
}
function _M0MPC15debug4Repr8opaque__(name, children) {
  return new _M0DTPC15debug4Repr6Opaque(name, children);
}
function _M0MPC15debug4Repr7literal(value) {
  return new _M0DTPC15debug4Repr7Literal(value);
}
function _M0MPC15debug4Repr7omitted() {
  return _M0DTPC15debug4Repr7Omitted__;
}
function _M0MPC15debug4Repr4ctor(name, args) {
  return new _M0DTPC15debug4Repr4Enum(name, _M0MPC15array5Array3mapGUOsRPC15debug4ReprERPC15debug4ReprE(args, (arg) => {
    const _label = arg._0;
    const _value = arg._1;
    if (_label === undefined) {
      return _value;
    } else {
      const _Some = _label;
      const _label$2 = _Some;
      return new _M0DTPC15debug4Repr14EnumLabeledArg(_label$2, _value);
    }
  }));
}
function _M0MPC15debug4Repr7shallow(self) {
  return _M0MPC15debug4Repr14with__children(self, []);
}
function _M0IPC15debug13ContentParensPB3Add3add(self, other) {
  return new _M0TPC15debug13ContentParens(self.size + other.size | 0, _M0IPC15array5ArrayPB3Add3addGsE(self.lines, other.lines));
}
function _M0FPC15debug14empty__content() {
  return new _M0TPC15debug7Content(0, [], false);
}
function _M0FPC15debug8verbatim(x) {
  return new _M0TPC15debug13ContentParens(1, [x]);
}
function _M0FPC15debug15content__parens(size, lines) {
  return new _M0TPC15debug13ContentParens(size, lines);
}
function _M0FPC15debug12leaf_2einner(x, needs_parens) {
  return new _M0TPC15debug7Content(1, [x], needs_parens);
}
function _M0FPC15debug11with__lines(r, f) {
  return new _M0TPC15debug13ContentParens(r.size, f(r.lines));
}
function _M0MPC15debug7Content20with__lines__content(r, f) {
  return new _M0TPC15debug7Content(r.size, f(r.lines), r.needs_parens);
}
function _M0FPC15debug15surround__lines(start, finish, lines) {
  if (lines.length === 0) {
    return [`${start}${finish}`];
  } else {
    if (lines.length === 1) {
      const _item = lines[0];
      return [`${start}${_item}${finish}`];
    } else {
      const _first = lines[0];
      const _last = lines[lines.length - 1 | 0];
      const _x = new _M0TPB9ArrayViewGsE(lines, 1, lines.length - 1 | 0);
      const _self = [];
      _M0MPC15array5Array4pushGRPB4JsonE(_self, `${start}${_first}`);
      _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array9ArrayView4iterGRP216zhaojun_2dcoding6thrift8IdlFieldE(_x));
      _M0MPC15array5Array4pushGRPB4JsonE(_self, `${_last}${finish}`);
      return _self;
    }
  }
}
function _M0FPC15debug8surround(start, finish, r) {
  return _M0FPC15debug11with__lines(r, (lines) => _M0FPC15debug15surround__lines(start, finish, lines));
}
function _M0MPC15debug7Content8no__wrap(c) {
  return new _M0TPC15debug13ContentParens(c.size, c.lines);
}
function _M0FPC15debug6parens(r) {
  return new _M0TPC15debug7Content(r.size, r.lines, true);
}
function _M0FPC15debug10no__parens(r) {
  return new _M0TPC15debug7Content(r.size, r.lines, false);
}
function _M0FPC15debug14compact__lines(lines) {
  if (lines.length === 0) {
    return [];
  } else {
    if (lines.length === 1) {
      const _x = lines[0];
      return [_x];
    } else {
      const _first = lines[0];
      const _last = lines[lines.length - 1 | 0];
      const _x_end = lines.length - 1 | 0;
      if (_first === "[" && _last === "]" || _first === "{" && _last === "}") {
        const parts = [];
        const _bind$4 = _x_end - 1 | 0;
        let _tmp = 0;
        while (true) {
          const _ = _tmp;
          if (_ < _bind$4) {
            const m = lines[1 + _ | 0];
            const t = _M0MPC16string6String4trim(m, undefined);
            if (_M0IP016_24default__implPB2Eq10not__equalGRPC16string10StringViewE(t, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1134, 0, _M0FPC15debug14compact__linesN7_2abindS1134.length))) {
              _M0MPC15array5Array4pushGRPB4JsonE(parts, t);
            }
            _tmp = _ + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        const joined0 = _M0MPC15array5Array4joinGRPC16string10StringViewE(parts, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1147, 0, _M0FPC15debug14compact__linesN7_2abindS1147.length));
        const _bind$5 = _M0MPC16string6String13strip__suffix(joined0, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1141, 0, _M0FPC15debug14compact__linesN7_2abindS1141.length));
        let joined;
        if (_bind$5 === undefined) {
          joined = new _M0TPC16string10StringView(joined0, 0, joined0.length);
        } else {
          const _Some = _bind$5;
          joined = _Some;
        }
        if (_first === "{") {
          const s1 = _M0MPC16option6Option10unwrap__orGsE(_M0MPC16string10StringView13strip__prefix(joined, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1139, 0, _M0FPC15debug14compact__linesN7_2abindS1139.length)), joined);
          const inner = _M0MPC16option6Option10unwrap__orGsE(_M0MPC16string10StringView13strip__suffix(s1, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1138, 0, _M0FPC15debug14compact__linesN7_2abindS1138.length)), s1);
          if (_M0IPC16string10StringViewPB2Eq5equal(inner, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1136, 0, _M0FPC15debug14compact__linesN7_2abindS1136.length))) {
            return ["{}"];
          } else {
            const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(4);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "{ ");
            _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(_string_builder, inner);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " }");
            return [_M0MPB13StringBuilder10to__string(_string_builder)];
          }
        } else {
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(2);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "[");
          _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(_string_builder, joined);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "]");
          return [_M0MPB13StringBuilder10to__string(_string_builder)];
        }
      } else {
        if (_M0MPC16string6String11has__suffix(_first, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1148, 0, _M0FPC15debug14compact__linesN7_2abindS1148.length)) && _last === ")") {
          const parts = [];
          const _bind$4 = _x_end - 1 | 0;
          let _tmp = 0;
          while (true) {
            const _ = _tmp;
            if (_ < _bind$4) {
              const m = lines[1 + _ | 0];
              const t = _M0MPC16string6String4trim(m, undefined);
              if (_M0IP016_24default__implPB2Eq10not__equalGRPC16string10StringViewE(t, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1152, 0, _M0FPC15debug14compact__linesN7_2abindS1152.length))) {
                _M0MPC15array5Array4pushGRPB4JsonE(parts, t);
              }
              _tmp = _ + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          const joined0 = _M0MPC15array5Array4joinGRPC16string10StringViewE(parts, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1161, 0, _M0FPC15debug14compact__linesN7_2abindS1161.length));
          const _bind$5 = _M0MPC16string6String13strip__suffix(joined0, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1155, 0, _M0FPC15debug14compact__linesN7_2abindS1155.length));
          let joined;
          if (_bind$5 === undefined) {
            joined = new _M0TPC16string10StringView(joined0, 0, joined0.length);
          } else {
            const _Some = _bind$5;
            joined = _Some;
          }
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(0);
          _M0MPB13StringBuilder13write__objectGsE(_string_builder, _first);
          _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(_string_builder, joined);
          _M0MPB13StringBuilder13write__objectGsE(_string_builder, _last);
          return [_M0MPB13StringBuilder10to__string(_string_builder)];
        } else {
          const parts = [new _M0TPC16string10StringView(_first, 0, _first.length)];
          const _bind$4 = _x_end - 1 | 0;
          let _tmp = 0;
          while (true) {
            const _ = _tmp;
            if (_ < _bind$4) {
              const m = lines[1 + _ | 0];
              _M0MPC15array5Array4pushGRPB4JsonE(parts, _M0MPC16string6String4trim(m, undefined));
              _tmp = _ + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          _M0MPC15array5Array4pushGRPB4JsonE(parts, _M0MPC16string6String4trim(_last, undefined));
          return [_M0MPC15array5Array4joinGRPC16string10StringViewE(parts, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1166, 0, _M0FPC15debug14compact__linesN7_2abindS1166.length))];
        }
      }
    }
  }
}
function _M0MPC15debug7Content7compact(r) {
  return _M0MPC15debug7Content20with__lines__content(r, _M0FPC15debug14compact__lines);
}
function _M0FPC15debug6indent(prefix, r) {
  return _M0FPC15debug11with__lines(r, (lines) => _M0MPC15array5Array3mapGssE(lines, (line) => `${prefix}${line}`));
}
function _M0FPC15debug14indent__spaces(n, r) {
  return _M0FPC15debug6indent(_M0MPC16string6String6repeat(" ", n), r);
}
function _M0FPC15debug19bracket__seq__lines(open, close, indent_by, contents) {
  if (contents.length === 0) {
    return [`${open}${close}`];
  } else {
    if (contents.length === 1) {
      const _item = contents[0];
      if (_item.length > 1) {
        const lines = _M0FPC15debug14indent__spaces(indent_by, new _M0TPC15debug13ContentParens(0, _item)).lines;
        if (!_M0MPC15array5Array9is__emptyGRPB4JsonE(lines)) {
          const last_i = lines.length - 1 | 0;
          _M0MPC15array5Array3setGsE(lines, last_i, `${_M0MPC15array5Array2atGsE(lines, last_i)},`);
        }
        const _self = [];
        _M0MPC15array5Array4pushGRPB4JsonE(_self, open);
        _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGRP216zhaojun_2dcoding6thrift8IdlFieldE(lines));
        _M0MPC15array5Array4pushGRPB4JsonE(_self, close);
        return _self;
      } else {
        const inner = _M0FPC15debug14compact__lines(_item);
        if (inner.length === 0) {
          return [`${open}${close}`];
        } else {
          if (inner.length === 1) {
            const _x = inner[0];
            if (open === "{" && close === "}") {
              const inner$2 = _M0MPC16string6String4trim(_x, undefined);
              if (_M0IPC16string10StringViewPB2Eq5equal(inner$2, new _M0TPC16string10StringView(_M0FPC15debug19bracket__seq__linesN7_2abindS1175, 0, _M0FPC15debug19bracket__seq__linesN7_2abindS1175.length))) {
                return ["{}"];
              } else {
                const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(4);
                _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "{ ");
                _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(_string_builder, inner$2);
                _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " }");
                return [_M0MPB13StringBuilder10to__string(_string_builder)];
              }
            } else {
              return [`${open}${_x}${close}`];
            }
          } else {
            const _self = [];
            _M0MPC15array5Array4pushGRPB4JsonE(_self, open);
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGRP216zhaojun_2dcoding6thrift8IdlFieldE(_M0FPC15debug14indent__spaces(indent_by, new _M0TPC15debug13ContentParens(0, _item)).lines));
            _M0MPC15array5Array4pushGRPB4JsonE(_self, close);
            return _self;
          }
        }
      }
    } else {
      const out = [open];
      const _bind$4 = contents.length;
      let _tmp = 0;
      while (true) {
        const _ = _tmp;
        if (_ < _bind$4) {
          const item = contents[_];
          const item_lines = _M0MPC15array5Array6filterGsE(item, (line) => _M0IP016_24default__implPB2Eq10not__equalGsE(line, ""));
          if (item_lines.length === 0) {
          } else {
            if (item_lines.length === 1) {
              const _x = item_lines[0];
              _M0MPC15array5Array4pushGRPB4JsonE(out, `${_M0MPC16string6String6repeat(" ", indent_by)}${_x},`);
            } else {
              const _first = item_lines[0];
              const _last = item_lines[item_lines.length - 1 | 0];
              const _x_end = item_lines.length - 1 | 0;
              _M0MPC15array5Array4pushGRPB4JsonE(out, `${_M0MPC16string6String6repeat(" ", indent_by)}${_first}`);
              const _bind$5 = _x_end - 1 | 0;
              let _tmp$2 = 0;
              while (true) {
                const _$2 = _tmp$2;
                if (_$2 < _bind$5) {
                  const mid = item_lines[1 + _$2 | 0];
                  _M0MPC15array5Array4pushGRPB4JsonE(out, `${_M0MPC16string6String6repeat(" ", indent_by)}${mid}`);
                  _tmp$2 = _$2 + 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              _M0MPC15array5Array4pushGRPB4JsonE(out, `${_M0MPC16string6String6repeat(" ", indent_by)}${_last},`);
            }
          }
          _tmp = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _M0MPC15array5Array4pushGRPB4JsonE(out, close);
      return out;
    }
  }
}
function _M0FPC15debug17comma__seq__lines(begin, end, contents) {
  if (begin === "[" && end === "]") {
    return _M0FPC15debug19bracket__seq__lines("[", "]", 2, contents);
  } else {
    if (begin === "{" && end === "}") {
      return _M0FPC15debug19bracket__seq__lines("{", "}", 2, contents);
    } else {
      if (begin === "" && end === "") {
        let lines;
        if (contents.length === 0) {
          lines = [`${begin}${end}`];
        } else {
          if (contents.length === 1) {
            const _item = contents[0];
            lines = _M0FPC15debug15surround__lines(begin, end, _item);
          } else {
            const _first = contents[0];
            const _last = contents[contents.length - 1 | 0];
            const _x_end = contents.length - 1 | 0;
            const space = _M0MPC16string6String6repeat(" ", begin.length);
            const middle_lines = [];
            const _bind$4 = _x_end - 1 | 0;
            let _tmp = 0;
            while (true) {
              const _ = _tmp;
              if (_ < _bind$4) {
                const item = contents[1 + _ | 0];
                const _bind$5 = _M0FPC15debug15surround__lines(space, ",", item);
                _M0MPC15array5Array6appendGsE(middle_lines, new _M0TPB9ArrayViewGsE(_bind$5, 0, _bind$5.length));
                _tmp = _ + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            const _self = [];
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGRP216zhaojun_2dcoding6thrift8IdlFieldE(_M0FPC15debug15surround__lines(begin, ",", _first)));
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGRP216zhaojun_2dcoding6thrift8IdlFieldE(middle_lines));
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGRP216zhaojun_2dcoding6thrift8IdlFieldE(_M0FPC15debug15surround__lines(space, end, _last)));
            lines = _self;
          }
        }
        return _M0MPC15array5Array6filterGsE(lines, (line) => _M0IP016_24default__implPB2Eq10not__equalGsE(line, ""));
      } else {
        if (contents.length === 0) {
          return [`${begin}${end}`];
        } else {
          if (contents.length === 1) {
            const _item = contents[0];
            const item_lines = _M0MPC15array5Array6filterGsE(_item, (line) => _M0IP016_24default__implPB2Eq10not__equalGsE(line, ""));
            if (item_lines.length === 0) {
              return [`${begin}${end}`];
            } else {
              if (item_lines.length === 1) {
                const _x = item_lines[0];
                return [`${begin}${_x}${end}`];
              } else {
                const _last_line = item_lines[item_lines.length - 1 | 0];
                const _x = new _M0TPB9ArrayViewGsE(item_lines, 0, item_lines.length - 1 | 0);
                const _self = [];
                _M0MPC15array5Array4pushGRPB4JsonE(_self, begin);
                _M0MPC15array5Array10push__iterGsE(_self, _M0MPB4Iter4iterGsE(_M0MPB4Iter3mapGRPC16string10StringViewsE(_M0MPC15array9ArrayView4iterGRP216zhaojun_2dcoding6thrift8IdlFieldE(_x), (line) => `${_M0MPC16string6String6repeat(" ", 2)}${line}`)));
                _M0MPC15array5Array4pushGRPB4JsonE(_self, `${_M0MPC16string6String6repeat(" ", 2)}${_last_line},`);
                _M0MPC15array5Array4pushGRPB4JsonE(_self, end);
                return _self;
              }
            }
          } else {
            const out = [begin];
            const _bind$4 = contents.length;
            let _tmp = 0;
            while (true) {
              const _ = _tmp;
              if (_ < _bind$4) {
                const item = contents[_];
                const item_lines = _M0MPC15array5Array6filterGsE(item, (line) => _M0IP016_24default__implPB2Eq10not__equalGsE(line, ""));
                if (item_lines.length === 0) {
                } else {
                  if (item_lines.length === 1) {
                    const _x = item_lines[0];
                    _M0MPC15array5Array4pushGRPB4JsonE(out, `${_M0MPC16string6String6repeat(" ", 2)}${_x},`);
                  } else {
                    const _first = item_lines[0];
                    const _last = item_lines[item_lines.length - 1 | 0];
                    const _x_end = item_lines.length - 1 | 0;
                    _M0MPC15array5Array4pushGRPB4JsonE(out, `${_M0MPC16string6String6repeat(" ", 2)}${_first}`);
                    const _bind$5 = _x_end - 1 | 0;
                    let _tmp$2 = 0;
                    while (true) {
                      const _$2 = _tmp$2;
                      if (_$2 < _bind$5) {
                        const mid = item_lines[1 + _$2 | 0];
                        _M0MPC15array5Array4pushGRPB4JsonE(out, `${_M0MPC16string6String6repeat(" ", 2)}${mid}`);
                        _tmp$2 = _$2 + 1 | 0;
                        continue;
                      } else {
                        break;
                      }
                    }
                    _M0MPC15array5Array4pushGRPB4JsonE(out, `${_M0MPC16string6String6repeat(" ", 2)}${_last},`);
                  }
                }
                _tmp = _ + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            _M0MPC15array5Array4pushGRPB4JsonE(out, end);
            return out;
          }
        }
      }
    }
  }
}
function _M0FPC15debug10comma__seq(begin, end, contents) {
  const _bind$4 = contents.length;
  let _tmp = 0;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp;
    const size = _tmp$2;
    if (_ < _bind$4) {
      const c = contents[_];
      _tmp = _ + 1 | 0;
      _tmp$2 = size + c.size | 0;
      continue;
    } else {
      return new _M0TPC15debug7Content(size, _M0FPC15debug17comma__seq__lines(begin, end, _M0MPC15array5Array3mapGRPC15debug13ContentParensRPB5ArrayGsEE(contents, (c) => c.lines)), false);
    }
  }
}
function _M0FPC15debug14print__content(r) {
  return _M0MPC15array5Array4joinGsE(r.lines, new _M0TPC16string10StringView(_M0FPC15debug14print__contentN7_2abindS1244, 0, _M0FPC15debug14print__contentN7_2abindS1244.length));
}
function _M0FPC15debug14with__resizing(_root_size, threshold, rendered_children) {
  if (threshold <= 0) {
    return rendered_children;
  } else {
    const compacted = _M0MPC15debug7Content7compact(rendered_children);
    return _M0MPC15array5Array3allGsE(compacted.lines, (line) => line.length <= threshold) ? compacted : rendered_children;
  }
}
function _M0MPC15debug4Repr17info__adds__depth(info) {
  let _tmp;
  switch (info.$tag) {
    case 12: {
      _tmp = true;
      break;
    }
    case 13: {
      _tmp = true;
      break;
    }
    case 16: {
      _tmp = true;
      break;
    }
    default: {
      _tmp = false;
    }
  }
  return !_tmp;
}
function _M0MPC15debug4Repr19prune__info_2einnerN2goS259(replacement, d, node) {
  const children = _M0MPC15debug4Repr8children(node);
  if (d <= 0) {
    return _M0MPC15array5Array9is__emptyGRPB4JsonE(children) ? node : !_M0MPC15debug4Repr17info__adds__depth(node) ? _M0MPC15debug4Repr14with__children(node, _M0MPC15array5Array3mapGRPC15debug4ReprRPC15debug4ReprE(children, (child) => _M0MPC15debug4Repr19prune__info_2einnerN2goS259(replacement, d, child))) : replacement;
  } else {
    if (_M0MPC15array5Array9is__emptyGRPB4JsonE(children)) {
      return node;
    } else {
      const next_depth = _M0MPC15debug4Repr17info__adds__depth(node) ? d - 1 | 0 : d;
      return _M0MPC15debug4Repr14with__children(node, _M0MPC15array5Array3mapGRPC15debug4ReprRPC15debug4ReprE(children, (child) => _M0MPC15debug4Repr19prune__info_2einnerN2goS259(replacement, next_depth, child)));
    }
  }
}
function _M0MPC15debug4Repr19prune__info_2einner(self, replacement, max_depth) {
  if (max_depth === undefined) {
    return self;
  } else {
    const _Some = max_depth;
    const _depth = _Some;
    return _M0MPC15debug4Repr19prune__info_2einnerN2goS259(replacement, _M0MPC13int3Int3max(1, _depth), self);
  }
}
function _M0MPC15debug4Repr11prune__info(self, replacement$46$opt, max_depth) {
  let replacement;
  if (replacement$46$opt === undefined) {
    replacement = _M0MPC15debug4Repr7omitted();
  } else {
    const _Some = replacement$46$opt;
    replacement = _Some;
  }
  return _M0MPC15debug4Repr19prune__info_2einner(self, replacement, max_depth);
}
function _M0FPC15debug10info__size(info) {
  switch (info.$tag) {
    case 0: {
      return 1;
    }
    case 1: {
      return 1;
    }
    case 2: {
      return 1;
    }
    case 3: {
      return 1;
    }
    case 4: {
      return 1;
    }
    case 5: {
      return 1;
    }
    case 6: {
      const _StringLit = info;
      const _s = _StringLit._0;
      return _s.length <= 15 ? 1 : 2;
    }
    case 7: {
      return 1;
    }
    case 8: {
      return 1;
    }
    case 9: {
      return 2;
    }
    case 12: {
      const _RecordField = info;
      const _name = _RecordField._0;
      return _name.length <= 15 ? 0 : 1;
    }
    case 13: {
      const _EnumLabeledArg = info;
      const _name$2 = _EnumLabeledArg._0;
      return _name$2.length <= 15 ? 0 : 1;
    }
    case 10: {
      const _Enum = info;
      const _name$3 = _Enum._0;
      return _name$3.length <= 15 ? 1 : 2;
    }
    case 14: {
      const _Opaque = info;
      const _name$4 = _Opaque._0;
      return _name$4.length <= 15 ? 1 : 2;
    }
    case 15: {
      const _Literal = info;
      const _s$2 = _Literal._0;
      return _s$2.length <= 15 ? 1 : 2;
    }
    case 11: {
      return 2;
    }
    case 16: {
      return 0;
    }
    default: {
      return 0;
    }
  }
}
function _M0FPC15debug17is__unquoted__key(key) {
  let rest;
  _L: {
    if (key.length >= 1) {
      const _x = key.charCodeAt(0);
      if (_x >= 97 && _x <= 122) {
        const _x$2 = new _M0TPC16string10StringView(key, 1, key.length);
        rest = _x$2;
        break _L;
      } else {
        if (_x === 95) {
          const _x$2 = new _M0TPC16string10StringView(key, 1, key.length);
          rest = _x$2;
          break _L;
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  }
  return _M0MPC16string10StringView3all(rest, (c) => c >= 97 && c <= 122 ? true : c >= 65 && c <= 90 ? true : c >= 48 && c <= 57 ? true : c === 95);
}
function _M0FPC15debug20pretty__print__label(name) {
  return _M0FPC15debug17is__unquoted__key(name) ? name : _M0MPC16string6String14escape_2einner(name, true);
}
function _M0MPC15debug4Repr13pretty__print(self, children) {
  switch (self.$tag) {
    case 0: {
      return _M0FPC15debug10comma__seq("(", ")", []);
    }
    case 1: {
      const _Integer = self;
      const _s = _Integer._0;
      let _tmp;
      if (_s.length >= 1) {
        const _x = _s.charCodeAt(0);
        if (_x === 45) {
          _tmp = 1;
        } else {
          _tmp = 0;
        }
      } else {
        _tmp = 0;
      }
      return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(_tmp, [_s]));
    }
    case 2: {
      const _DoubleLit = self;
      const _x = _DoubleLit._0;
      const needs_parens = 1 / _x < 0;
      return _M0FPC15debug12leaf_2einner(String(_x), needs_parens);
    }
    case 3: {
      const _FloatLit = self;
      const _x$2 = _FloatLit._0;
      const needs_parens$2 = Math.fround(Math.fround(1) / _x$2) < Math.fround(0);
      return _M0FPC15debug12leaf_2einner(_M0IPC15float5FloatPB4Show10to__string(_x$2), needs_parens$2);
    }
    case 4: {
      const _BoolLit = self;
      const _x$3 = _BoolLit._0;
      return _M0FPC15debug12leaf_2einner(_M0IPC14bool4BoolPB4Show10to__string(_x$3), false);
    }
    case 5: {
      const _CharLit = self;
      const _x$4 = _CharLit._0;
      return _M0FPC15debug12leaf_2einner(_M0MPC14char4Char14escape_2einner(_x$4, true), false);
    }
    case 6: {
      const _StringLit = self;
      const _x$5 = _StringLit._0;
      return _M0FPC15debug10no__parens(_M0FPC15debug8verbatim(_M0MPC16string6String14escape_2einner(_x$5, true)));
    }
    case 7: {
      return _M0FPC15debug10comma__seq("(", ")", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x)));
    }
    case 10: {
      const _Enum = self;
      const _name = _Enum._0;
      return children.length === 0 ? _M0FPC15debug10no__parens(_M0FPC15debug8verbatim(_name)) : _name === "Tuple" ? _M0FPC15debug10comma__seq("(", ")", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x))) : _M0FPC15debug10comma__seq(`${_name}(`, ")", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x)));
    }
    case 8: {
      return _M0FPC15debug10comma__seq("[", "]", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x)));
    }
    case 9: {
      return _M0FPC15debug10comma__seq("{", "}", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x)));
    }
    case 14: {
      const _Opaque = self;
      const _name$2 = _Opaque._0;
      if (_M0MPC15array5Array9is__emptyGRPB4JsonE(children)) {
        return _M0FPC15debug10no__parens(_M0FPC15debug8surround("<", ">", _M0FPC15debug8verbatim(_name$2)));
      } else {
        const body = _M0IPC15debug13ContentParensPB3Add3add(_M0FPC15debug8verbatim(`${_name$2}:`), _M0FPC15debug6indent("  ", _M0MPC15debug7Content8no__wrap(_M0FPC15debug10comma__seq("", "", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x))))));
        return _M0FPC15debug10no__parens(_M0FPC15debug8surround("<", ">", body));
      }
    }
    case 15: {
      const _Literal = self;
      const _str = _Literal._0;
      return _M0FPC15debug10no__parens(_M0FPC15debug8verbatim(_str));
    }
    case 11: {
      return _M0FPC15debug10comma__seq("{", "}", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x)));
    }
    case 16: {
      if (children.length === 2) {
        const _key = children[0];
        const _val = children[1];
        const k = _M0MPC15debug7Content8no__wrap(_key);
        const v = _M0MPC15debug7Content8no__wrap(_val);
        const _bind$4 = v.lines;
        if (_bind$4.length === 0) {
          return _M0FPC15debug14empty__content();
        } else {
          if (_bind$4.length === 1) {
            const _one = _bind$4[0];
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens((1 + k.size | 0) + v.size | 0, [`${_M0FPC15debug14print__content(_M0FPC15debug8surround("", ": ", k))}${_one}`]));
          } else {
            const _first = _bind$4[0];
            const _x$6 = new _M0TPB9ArrayViewGsE(_bind$4, 1, _bind$4.length);
            const head = `${_M0FPC15debug14print__content(_M0FPC15debug8surround("", ": ", k))}${_first}`;
            const _tmp$2 = (1 + k.size | 0) + v.size | 0;
            const _self = [];
            _M0MPC15array5Array4pushGRPB4JsonE(_self, head);
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array9ArrayView4iterGRP216zhaojun_2dcoding6thrift8IdlFieldE(_x$6));
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(_tmp$2, _self));
          }
        }
      } else {
        return _M0FPC15debug14empty__content();
      }
    }
    case 13: {
      const _EnumLabeledArg = self;
      const _name$3 = _EnumLabeledArg._0;
      if (children.length === 1) {
        const _val = children[0];
        const _bind$4 = _val.lines;
        if (_bind$4.length === 0) {
          return _M0FPC15debug14empty__content();
        } else {
          if (_bind$4.length === 1) {
            const _first = _bind$4[0];
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(1 + _val.size | 0, [`${_name$3}=${_first}`]));
          } else {
            const _first = _bind$4[0];
            const _x$6 = new _M0TPB9ArrayViewGsE(_bind$4, 1, _bind$4.length);
            const _tmp$2 = 1 + _val.size | 0;
            const _self = [];
            _M0MPC15array5Array4pushGRPB4JsonE(_self, `${_name$3}=${_first}`);
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array9ArrayView4iterGRP216zhaojun_2dcoding6thrift8IdlFieldE(_x$6));
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(_tmp$2, _self));
          }
        }
      } else {
        return _M0FPC15debug14empty__content();
      }
    }
    case 12: {
      const _RecordField = self;
      const _name$4 = _RecordField._0;
      if (children.length === 1) {
        const _val = children[0];
        const label = _M0FPC15debug20pretty__print__label(_name$4);
        const v = _M0MPC15debug7Content8no__wrap(_val);
        const _bind$4 = v.lines;
        if (_bind$4.length === 0) {
          return _M0FPC15debug14empty__content();
        } else {
          if (_bind$4.length === 1) {
            const _one = _bind$4[0];
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(1 + v.size | 0, [`${label}: ${_one}`]));
          } else {
            const _first = _bind$4[0];
            const _x$6 = new _M0TPB9ArrayViewGsE(_bind$4, 1, _bind$4.length);
            const _tmp$2 = 1 + v.size | 0;
            const _self = [];
            _M0MPC15array5Array4pushGRPB4JsonE(_self, `${label}: ${_first}`);
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array9ArrayView4iterGRP216zhaojun_2dcoding6thrift8IdlFieldE(_x$6));
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(_tmp$2, _self));
          }
        }
      } else {
        return _M0FPC15debug14empty__content();
      }
    }
    default: {
      return _M0FPC15debug6parens(_M0FPC15debug8verbatim("..."));
    }
  }
}
function _M0MPC15debug4Repr12render__repr(self, threshold) {
  const label = _M0MPC15debug4Repr7shallow(self);
  const children = _M0MPC15array5Array3mapGRPC15debug4ReprRPC15debug7ContentE(_M0MPC15debug4Repr8children(self), (child) => _M0MPC15debug4Repr12render__repr(child, threshold));
  return _M0FPC15debug14with__resizing(_M0FPC15debug10info__size(label), threshold, _M0MPC15debug4Repr13pretty__print(label, children));
}
function _M0FPC15debug6render(r, max_depth) {
  const max_depth$2 = max_depth === undefined ? _M0FPC15debug6renderN6constrS1705 : max_depth;
  const info = _M0MPC15debug4Repr11prune__info(r, undefined, max_depth$2);
  return _M0FPC15debug14print__content(_M0MPC15debug7Content8no__wrap(_M0MPC15debug4Repr12render__repr(info, 70)));
}
function _M0IPC15debug4ReprPB4Show6output(self, logger) {
  logger.method_table.method_0(logger.self, _M0FPC15debug6render(self, undefined));
}
function _M0IPC13int3IntPC15debug5Debug8to__repr(self) {
  return _M0MPC15debug4Repr7integer(_M0MPC13int3Int18to__string_2einner(self, 10));
}
function _M0IPC15int645Int64PC15debug5Debug8to__repr(self) {
  return _M0MPC15debug4Repr7integer(_M0MPC15int645Int6418to__string_2einner(self, 10));
}
function _M0IPC16double6DoublePC15debug5Debug8to__repr(self) {
  return _M0MPC15debug4Repr6double(self);
}
function _M0IPC14bool4BoolPC15debug5Debug8to__repr(self) {
  return _M0MPC15debug4Repr4bool(self);
}
function _M0IPC14byte4BytePC15debug5Debug8to__repr(self) {
  return _M0MPC15debug4Repr7literal(`0x${_M0MPC14byte4Byte7to__hex(self)}`);
}
function _M0IPC14char4CharPC15debug5Debug8to__repr(self) {
  return _M0MPC15debug4Repr4char(self);
}
function _M0IPC16string6StringPC15debug5Debug8to__repr(self) {
  return _M0MPC15debug4Repr6string(self);
}
function _M0IPC15bytes5BytesPC15debug5Debug8to__repr(self) {
  return _M0MPC15debug4Repr8opaque__("Bytes", _M0MPC15debug4Repr5array(_M0MPC15array5Array3mapGyRPC15debug4ReprE(_M0MPC15bytes5Bytes9to__array(self), (x) => _M0MPC15debug4Repr4ReprGyE(x))));
}
function _M0IPC15bytes9BytesViewPC15debug5Debug8to__repr(self) {
  return _M0MPC15debug4Repr8opaque__("BytesView", _M0MPC15debug4Repr5array(_M0MPC15array5Array3mapGyRPC15debug4ReprE(_M0MPC15bytes9BytesView9to__array(self), (x) => _M0MPC15debug4Repr4ReprGyE(x))));
}
function _M0IPC15array5ArrayPC15debug5Debug8to__reprGURP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift5ValueEE(self) {
  return _M0MPC15debug4Repr5array(_M0MPC15array5Array3mapGURP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift5ValueERPC15debug4ReprE(self, (x) => _M0MPC15debug4Repr4ReprGURP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift5ValueEE(x)));
}
function _M0IPC15array5ArrayPC15debug5Debug8to__reprGRP216zhaojun_2dcoding6thrift5ValueE(self) {
  return _M0MPC15debug4Repr5array(_M0MPC15array5Array3mapGRP216zhaojun_2dcoding6thrift5ValueRPC15debug4ReprE(self, (x) => _M0MPC15debug4Repr4ReprGRP216zhaojun_2dcoding6thrift5ValueE(x)));
}
function _M0IPC15array5ArrayPC15debug5Debug8to__reprGUiRP216zhaojun_2dcoding6thrift5ValueEE(self) {
  return _M0MPC15debug4Repr5array(_M0MPC15array5Array3mapGUiRP216zhaojun_2dcoding6thrift5ValueERPC15debug4ReprE(self, (x) => _M0MPC15debug4Repr4ReprGUiRP216zhaojun_2dcoding6thrift5ValueEE(x)));
}
function _M0IPC16option6OptionPC15debug5Debug8to__reprGRP216zhaojun_2dcoding6thrift4KindE(self) {
  if (self === undefined) {
    return _M0MPC15debug4Repr4ctor("None", []);
  } else {
    const _Some = self;
    const _x = _Some;
    return _M0MPC15debug4Repr4ctor("Some", [{ _0: undefined, _1: _M0MPC15debug4Repr4ReprGRP216zhaojun_2dcoding6thrift4KindE(_x) }]);
  }
}
function _M0IPB7FailurePC15debug5Debug8to__reprGRPB7FailureE(self) {
  const _Failure = self;
  const _msg = _Failure._0;
  return _M0MPC15debug4Repr4ctor("Failure", [{ _0: undefined, _1: _M0MPC15debug4Repr6string(_msg) }]);
}
function _M0IPC28encoding4utf89MalformedPC15debug5Debug8to__reprGRPC28encoding4utf89MalformedE(_x_46) {
  const _Malformed = _x_46;
  const _$42$arg_47 = _Malformed._0;
  return _M0MPC15debug4Repr4ctor("Malformed", [{ _0: undefined, _1: _M0IPC15bytes9BytesViewPC15debug5Debug8to__repr(_$42$arg_47) }]);
}
function _M0FPC28encoding4utf814encode_2einner(str, bom) {
  return _M0FPC28encoding4utf816encode__utf8__js(_M0MPC16string10StringView4data(str), _M0MPC16string10StringView13start__offset(str), str.end - str.start | 0, bom);
}
function _M0FPC28encoding4utf821utf8__find__malformed(src, src_offset, src_length) {
  const _bind$4 = src_offset + src_length | 0;
  const _bind$5 = src.length;
  if (src_offset < 0 || (src_offset > _bind$4 || _bind$4 > _bind$5)) {
    $panic();
  }
  const view = new _M0TPC15bytes9BytesView(src, src_offset, _bind$4);
  let _tmp = view;
  while (true) {
    const bytes = _tmp;
    let malformed;
    _L: {
      let rest;
      _L$2: {
        let rest$2;
        _L$3: {
          let rest$3;
          _L$4: {
            let rest$4;
            _L$5: {
              if ((bytes.end - bytes.start | 0) === 0) {
                return -1;
              } else {
                if ((bytes.end - bytes.start | 0) >= 8) {
                  const _x = bytes.buf[bytes.start];
                  if (_x <= 127) {
                    const _x$2 = bytes.buf[bytes.start + 1 | 0];
                    if (_x$2 <= 127) {
                      const _x$3 = bytes.buf[bytes.start + 2 | 0];
                      if (_x$3 <= 127) {
                        const _x$4 = bytes.buf[bytes.start + 3 | 0];
                        if (_x$4 <= 127) {
                          const _x$5 = bytes.buf[bytes.start + 4 | 0];
                          if (_x$5 <= 127) {
                            const _x$6 = bytes.buf[bytes.start + 5 | 0];
                            if (_x$6 <= 127) {
                              const _x$7 = bytes.buf[bytes.start + 6 | 0];
                              if (_x$7 <= 127) {
                                const _x$8 = bytes.buf[bytes.start + 7 | 0];
                                if (_x$8 <= 127) {
                                  const _x$9 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 8 | 0, bytes.end);
                                  _tmp = _x$9;
                                  continue;
                                } else {
                                  const _x$9 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 1 | 0, bytes.end);
                                  rest$4 = _x$9;
                                  break _L$5;
                                }
                              } else {
                                const _x$8 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 1 | 0, bytes.end);
                                rest$4 = _x$8;
                                break _L$5;
                              }
                            } else {
                              const _x$7 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 1 | 0, bytes.end);
                              rest$4 = _x$7;
                              break _L$5;
                            }
                          } else {
                            const _x$6 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 1 | 0, bytes.end);
                            rest$4 = _x$6;
                            break _L$5;
                          }
                        } else {
                          const _x$5 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 1 | 0, bytes.end);
                          rest$4 = _x$5;
                          break _L$5;
                        }
                      } else {
                        const _x$4 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 1 | 0, bytes.end);
                        rest$4 = _x$4;
                        break _L$5;
                      }
                    } else {
                      const _x$3 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 1 | 0, bytes.end);
                      rest$4 = _x$3;
                      break _L$5;
                    }
                  } else {
                    if (_x >= 194 && _x <= 223) {
                      const _x$2 = bytes.buf[bytes.start + 1 | 0];
                      if (_x$2 >= 128 && _x$2 <= 191) {
                        const _x$3 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 2 | 0, bytes.end);
                        rest$3 = _x$3;
                        break _L$4;
                      } else {
                        malformed = bytes;
                        break _L;
                      }
                    } else {
                      if (_x === 224) {
                        const _x$2 = bytes.buf[bytes.start + 1 | 0];
                        if (_x$2 >= 160 && _x$2 <= 191) {
                          const _x$3 = bytes.buf[bytes.start + 2 | 0];
                          if (_x$3 >= 128 && _x$3 <= 191) {
                            const _x$4 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 3 | 0, bytes.end);
                            rest$2 = _x$4;
                            break _L$3;
                          } else {
                            malformed = bytes;
                            break _L;
                          }
                        } else {
                          malformed = bytes;
                          break _L;
                        }
                      } else {
                        if (_x >= 225 && _x <= 236) {
                          const _x$2 = bytes.buf[bytes.start + 1 | 0];
                          if (_x$2 >= 128 && _x$2 <= 191) {
                            const _x$3 = bytes.buf[bytes.start + 2 | 0];
                            if (_x$3 >= 128 && _x$3 <= 191) {
                              const _x$4 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 3 | 0, bytes.end);
                              rest$2 = _x$4;
                              break _L$3;
                            } else {
                              malformed = bytes;
                              break _L;
                            }
                          } else {
                            malformed = bytes;
                            break _L;
                          }
                        } else {
                          if (_x === 237) {
                            const _x$2 = bytes.buf[bytes.start + 1 | 0];
                            if (_x$2 >= 128 && _x$2 <= 159) {
                              const _x$3 = bytes.buf[bytes.start + 2 | 0];
                              if (_x$3 >= 128 && _x$3 <= 191) {
                                const _x$4 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 3 | 0, bytes.end);
                                rest$2 = _x$4;
                                break _L$3;
                              } else {
                                malformed = bytes;
                                break _L;
                              }
                            } else {
                              malformed = bytes;
                              break _L;
                            }
                          } else {
                            if (_x >= 238 && _x <= 239) {
                              const _x$2 = bytes.buf[bytes.start + 1 | 0];
                              if (_x$2 >= 128 && _x$2 <= 191) {
                                const _x$3 = bytes.buf[bytes.start + 2 | 0];
                                if (_x$3 >= 128 && _x$3 <= 191) {
                                  const _x$4 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 3 | 0, bytes.end);
                                  rest$2 = _x$4;
                                  break _L$3;
                                } else {
                                  malformed = bytes;
                                  break _L;
                                }
                              } else {
                                malformed = bytes;
                                break _L;
                              }
                            } else {
                              if (_x === 240) {
                                const _x$2 = bytes.buf[bytes.start + 1 | 0];
                                if (_x$2 >= 144 && _x$2 <= 191) {
                                  const _x$3 = bytes.buf[bytes.start + 2 | 0];
                                  if (_x$3 >= 128 && _x$3 <= 191) {
                                    const _x$4 = bytes.buf[bytes.start + 3 | 0];
                                    if (_x$4 >= 128 && _x$4 <= 191) {
                                      const _x$5 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 4 | 0, bytes.end);
                                      rest = _x$5;
                                      break _L$2;
                                    } else {
                                      malformed = bytes;
                                      break _L;
                                    }
                                  } else {
                                    malformed = bytes;
                                    break _L;
                                  }
                                } else {
                                  malformed = bytes;
                                  break _L;
                                }
                              } else {
                                if (_x >= 241 && _x <= 243) {
                                  const _x$2 = bytes.buf[bytes.start + 1 | 0];
                                  if (_x$2 >= 128 && _x$2 <= 191) {
                                    const _x$3 = bytes.buf[bytes.start + 2 | 0];
                                    if (_x$3 >= 128 && _x$3 <= 191) {
                                      const _x$4 = bytes.buf[bytes.start + 3 | 0];
                                      if (_x$4 >= 128 && _x$4 <= 191) {
                                        const _x$5 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 4 | 0, bytes.end);
                                        rest = _x$5;
                                        break _L$2;
                                      } else {
                                        malformed = bytes;
                                        break _L;
                                      }
                                    } else {
                                      malformed = bytes;
                                      break _L;
                                    }
                                  } else {
                                    malformed = bytes;
                                    break _L;
                                  }
                                } else {
                                  if (_x === 244) {
                                    const _x$2 = bytes.buf[bytes.start + 1 | 0];
                                    if (_x$2 >= 128 && _x$2 <= 143) {
                                      const _x$3 = bytes.buf[bytes.start + 2 | 0];
                                      if (_x$3 >= 128 && _x$3 <= 191) {
                                        const _x$4 = bytes.buf[bytes.start + 3 | 0];
                                        if (_x$4 >= 128 && _x$4 <= 191) {
                                          const _x$5 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 4 | 0, bytes.end);
                                          rest = _x$5;
                                          break _L$2;
                                        } else {
                                          malformed = bytes;
                                          break _L;
                                        }
                                      } else {
                                        malformed = bytes;
                                        break _L;
                                      }
                                    } else {
                                      malformed = bytes;
                                      break _L;
                                    }
                                  } else {
                                    malformed = bytes;
                                    break _L;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                } else {
                  const _x = bytes.buf[bytes.start];
                  if (_x >= 0 && _x <= 127) {
                    const _x$2 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 1 | 0, bytes.end);
                    rest$4 = _x$2;
                    break _L$5;
                  } else {
                    if ((bytes.end - bytes.start | 0) >= 2) {
                      if (_x >= 194 && _x <= 223) {
                        const _x$2 = bytes.buf[bytes.start + 1 | 0];
                        if (_x$2 >= 128 && _x$2 <= 191) {
                          const _x$3 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 2 | 0, bytes.end);
                          rest$3 = _x$3;
                          break _L$4;
                        } else {
                          (bytes.end - bytes.start | 0) >= 3;
                          malformed = bytes;
                          break _L;
                        }
                      } else {
                        if ((bytes.end - bytes.start | 0) >= 3) {
                          if (_x === 224) {
                            const _x$2 = bytes.buf[bytes.start + 1 | 0];
                            if (_x$2 >= 160 && _x$2 <= 191) {
                              const _x$3 = bytes.buf[bytes.start + 2 | 0];
                              if (_x$3 >= 128 && _x$3 <= 191) {
                                const _x$4 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 3 | 0, bytes.end);
                                rest$2 = _x$4;
                                break _L$3;
                              } else {
                                malformed = bytes;
                                break _L;
                              }
                            } else {
                              malformed = bytes;
                              break _L;
                            }
                          } else {
                            if (_x >= 225 && _x <= 236) {
                              const _x$2 = bytes.buf[bytes.start + 1 | 0];
                              if (_x$2 >= 128 && _x$2 <= 191) {
                                const _x$3 = bytes.buf[bytes.start + 2 | 0];
                                if (_x$3 >= 128 && _x$3 <= 191) {
                                  const _x$4 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 3 | 0, bytes.end);
                                  rest$2 = _x$4;
                                  break _L$3;
                                } else {
                                  malformed = bytes;
                                  break _L;
                                }
                              } else {
                                malformed = bytes;
                                break _L;
                              }
                            } else {
                              if (_x === 237) {
                                const _x$2 = bytes.buf[bytes.start + 1 | 0];
                                if (_x$2 >= 128 && _x$2 <= 159) {
                                  const _x$3 = bytes.buf[bytes.start + 2 | 0];
                                  if (_x$3 >= 128 && _x$3 <= 191) {
                                    const _x$4 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 3 | 0, bytes.end);
                                    rest$2 = _x$4;
                                    break _L$3;
                                  } else {
                                    malformed = bytes;
                                    break _L;
                                  }
                                } else {
                                  malformed = bytes;
                                  break _L;
                                }
                              } else {
                                if (_x >= 238 && _x <= 239) {
                                  const _x$2 = bytes.buf[bytes.start + 1 | 0];
                                  if (_x$2 >= 128 && _x$2 <= 191) {
                                    const _x$3 = bytes.buf[bytes.start + 2 | 0];
                                    if (_x$3 >= 128 && _x$3 <= 191) {
                                      const _x$4 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 3 | 0, bytes.end);
                                      rest$2 = _x$4;
                                      break _L$3;
                                    } else {
                                      malformed = bytes;
                                      break _L;
                                    }
                                  } else {
                                    malformed = bytes;
                                    break _L;
                                  }
                                } else {
                                  if ((bytes.end - bytes.start | 0) >= 4) {
                                    if (_x === 240) {
                                      const _x$2 = bytes.buf[bytes.start + 1 | 0];
                                      if (_x$2 >= 144 && _x$2 <= 191) {
                                        const _x$3 = bytes.buf[bytes.start + 2 | 0];
                                        if (_x$3 >= 128 && _x$3 <= 191) {
                                          const _x$4 = bytes.buf[bytes.start + 3 | 0];
                                          if (_x$4 >= 128 && _x$4 <= 191) {
                                            const _x$5 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 4 | 0, bytes.end);
                                            rest = _x$5;
                                            break _L$2;
                                          } else {
                                            malformed = bytes;
                                            break _L;
                                          }
                                        } else {
                                          malformed = bytes;
                                          break _L;
                                        }
                                      } else {
                                        malformed = bytes;
                                        break _L;
                                      }
                                    } else {
                                      if (_x >= 241 && _x <= 243) {
                                        const _x$2 = bytes.buf[bytes.start + 1 | 0];
                                        if (_x$2 >= 128 && _x$2 <= 191) {
                                          const _x$3 = bytes.buf[bytes.start + 2 | 0];
                                          if (_x$3 >= 128 && _x$3 <= 191) {
                                            const _x$4 = bytes.buf[bytes.start + 3 | 0];
                                            if (_x$4 >= 128 && _x$4 <= 191) {
                                              const _x$5 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 4 | 0, bytes.end);
                                              rest = _x$5;
                                              break _L$2;
                                            } else {
                                              malformed = bytes;
                                              break _L;
                                            }
                                          } else {
                                            malformed = bytes;
                                            break _L;
                                          }
                                        } else {
                                          malformed = bytes;
                                          break _L;
                                        }
                                      } else {
                                        if (_x === 244) {
                                          const _x$2 = bytes.buf[bytes.start + 1 | 0];
                                          if (_x$2 >= 128 && _x$2 <= 143) {
                                            const _x$3 = bytes.buf[bytes.start + 2 | 0];
                                            if (_x$3 >= 128 && _x$3 <= 191) {
                                              const _x$4 = bytes.buf[bytes.start + 3 | 0];
                                              if (_x$4 >= 128 && _x$4 <= 191) {
                                                const _x$5 = new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 4 | 0, bytes.end);
                                                rest = _x$5;
                                                break _L$2;
                                              } else {
                                                malformed = bytes;
                                                break _L;
                                              }
                                            } else {
                                              malformed = bytes;
                                              break _L;
                                            }
                                          } else {
                                            malformed = bytes;
                                            break _L;
                                          }
                                        } else {
                                          malformed = bytes;
                                          break _L;
                                        }
                                      }
                                    }
                                  } else {
                                    malformed = bytes;
                                    break _L;
                                  }
                                }
                              }
                            }
                          }
                        } else {
                          malformed = bytes;
                          break _L;
                        }
                      }
                    } else {
                      malformed = bytes;
                      break _L;
                    }
                  }
                }
              }
            }
            _tmp = rest$4;
            continue;
          }
          _tmp = rest$3;
          continue;
        }
        _tmp = rest$2;
        continue;
      }
      _tmp = rest;
      continue;
    }
    return _M0MPC15bytes9BytesView13start__offset(malformed) - src_offset | 0;
  }
}
function _M0FPC28encoding4utf825strict__malformed__suffix(bytes) {
  const input = _M0MPC15bytes9BytesView4data(bytes);
  const src_offset = _M0MPC15bytes9BytesView13start__offset(bytes);
  const src_length = bytes.end - bytes.start | 0;
  const malformed_offset = _M0FPC28encoding4utf821utf8__find__malformed(input, src_offset, src_length);
  const _bind$4 = bytes.end - bytes.start | 0;
  if (malformed_offset < 0 || malformed_offset > _bind$4) {
    $panic();
  }
  return new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + malformed_offset | 0, bytes.start + _bind$4 | 0);
}
function _M0FPC28encoding4utf815drop__utf8__bom(bytes, ignore_bom) {
  _L: {
    if (ignore_bom) {
      _L$2: {
        if ((bytes.end - bytes.start | 0) >= 3) {
          const _x = bytes.buf[bytes.start];
          if (_x === 239) {
            const _x$2 = bytes.buf[bytes.start + 1 | 0];
            if (_x$2 === 187) {
              const _x$3 = bytes.buf[bytes.start + 2 | 0];
              if (_x$3 === 191) {
                return new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + 3 | 0, bytes.end);
              } else {
                break _L$2;
              }
            } else {
              break _L$2;
            }
          } else {
            break _L$2;
          }
        } else {
          break _L$2;
        }
      }
      break _L;
    } else {
      break _L;
    }
  }
  return bytes;
}
function _M0FPC28encoding4utf814decode_2einner(bytes, ignore_bom) {
  const result = _M0FPC28encoding4utf816decode__utf8__js(_M0MPC15bytes9BytesView4data(bytes), _M0MPC15bytes9BytesView13start__offset(bytes), bytes.end - bytes.start | 0, !ignore_bom);
  if (result.length === 1) {
    return new _M0DTPC16result6ResultGsRPC28encoding4utf89MalformedE2Ok(0 >>> 0 < result.length ? result[0] : $oob());
  } else {
    const bytes$2 = _M0FPC28encoding4utf815drop__utf8__bom(bytes, ignore_bom);
    return new _M0DTPC16result6ResultGsRPC28encoding4utf89MalformedE3Err(new _M0DTPC15error5Error60moonbitlang_2fcore_2fencoding_2futf8_2eMalformed_2eMalformed(_M0FPC28encoding4utf825strict__malformed__suffix(bytes$2)));
  }
}
function _M0MPC13ref3Ref3RefGiE(x) {
  return new _M0TPC13ref3RefGiE(x);
}
function _M0IPC15error5ErrorPC15debug5Debug8to__repr(self) {
  return _M0FP15Error8to__repr(self);
}
function _M0FPC28internal7strconv9base__errGUiRPC16string10StringViewbEE() {
  return new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv14base__err__str));
}
function _M0FPC28internal7strconv25check__and__consume__base(view, base) {
  if (base === 0) {
    _L: {
      let rest;
      _L$2: {
        let rest$2;
        _L$3: {
          let rest$3;
          _L$4: {
            if ((view.end - view.start | 0) >= 2) {
              const _x = view.str.charCodeAt(view.start);
              if (_x === 48) {
                const _x$2 = view.str.charCodeAt(view.start + 1 | 0);
                switch (_x$2) {
                  case 120: {
                    const _x$3 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                    rest$3 = _x$3;
                    break _L$4;
                  }
                  case 88: {
                    const _x$4 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                    rest$3 = _x$4;
                    break _L$4;
                  }
                  case 111: {
                    const _x$5 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                    rest$2 = _x$5;
                    break _L$3;
                  }
                  case 79: {
                    const _x$6 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                    rest$2 = _x$6;
                    break _L$3;
                  }
                  case 98: {
                    const _x$7 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                    rest = _x$7;
                    break _L$2;
                  }
                  case 66: {
                    const _x$8 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                    rest = _x$8;
                    break _L$2;
                  }
                  default: {
                    break _L;
                  }
                }
              } else {
                break _L;
              }
            } else {
              break _L;
            }
          }
          return new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE2Ok({ _0: 16, _1: rest$3, _2: true });
        }
        return new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE2Ok({ _0: 8, _1: rest$2, _2: true });
      }
      return new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE2Ok({ _0: 2, _1: rest, _2: true });
    }
    return new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE2Ok({ _0: 10, _1: view, _2: false });
  } else {
    _L: {
      let rest;
      _L$2: {
        let rest$2;
        _L$3: {
          let rest$3;
          _L$4: {
            if ((view.end - view.start | 0) >= 2) {
              const _x = view.str.charCodeAt(view.start);
              if (_x === 48) {
                const _x$2 = view.str.charCodeAt(view.start + 1 | 0);
                switch (_x$2) {
                  case 120: {
                    const _x$3 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                    if (base === 16) {
                      rest$3 = _x$3;
                      break _L$4;
                    } else {
                      break _L;
                    }
                  }
                  case 88: {
                    const _x$4 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                    if (base === 16) {
                      rest$3 = _x$4;
                      break _L$4;
                    } else {
                      break _L;
                    }
                  }
                  case 111: {
                    const _x$5 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                    if (base === 8) {
                      rest$2 = _x$5;
                      break _L$3;
                    } else {
                      break _L;
                    }
                  }
                  case 79: {
                    const _x$6 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                    if (base === 8) {
                      rest$2 = _x$6;
                      break _L$3;
                    } else {
                      break _L;
                    }
                  }
                  case 98: {
                    const _x$7 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                    if (base === 2) {
                      rest = _x$7;
                      break _L$2;
                    } else {
                      break _L;
                    }
                  }
                  case 66: {
                    const _x$8 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                    if (base === 2) {
                      rest = _x$8;
                      break _L$2;
                    } else {
                      break _L;
                    }
                  }
                  default: {
                    break _L;
                  }
                }
              } else {
                break _L;
              }
            } else {
              break _L;
            }
          }
          return new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE2Ok({ _0: 16, _1: rest$3, _2: true });
        }
        return new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE2Ok({ _0: 8, _1: rest$2, _2: true });
      }
      return new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE2Ok({ _0: 2, _1: rest, _2: true });
    }
    return base >= 2 && base <= 36 ? new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE2Ok({ _0: base, _1: view, _2: false }) : _M0FPC28internal7strconv9base__errGUiRPC16string10StringViewbEE();
  }
}
function _M0FPC28internal7strconv10range__errGuE() {
  return new _M0DTPC16result6ResultGuRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv15range__err__str));
}
function _M0FPC28internal7strconv11syntax__errGdE() {
  return new _M0DTPC16result6ResultGdRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv16syntax__err__str));
}
function _M0FPC28internal7strconv11syntax__errGiE() {
  return new _M0DTPC16result6ResultGiRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv16syntax__err__str));
}
function _M0FPC28internal7strconv11syntax__errGuE() {
  return new _M0DTPC16result6ResultGuRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv16syntax__err__str));
}
function _M0FPC28internal7strconv11syntax__errGlE() {
  return new _M0DTPC16result6ResultGlRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv16syntax__err__str));
}
function _M0FPC28internal7strconv11syntax__errGORPC28internal7strconv6NumberE() {
  return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv16syntax__err__str));
}
function _M0EPC16string10StringViewPC28internal7strconv12fold__digitsGmE(self, init, f) {
  let _tmp = self;
  let _tmp$2 = init;
  let _tmp$3 = 0;
  while (true) {
    const str = _tmp;
    const ret = _tmp$2;
    const len = _tmp$3;
    _L: {
      if ((str.end - str.start | 0) >= 1) {
        const _x = str.str.charCodeAt(str.start);
        if (_x >= 48 && _x <= 57) {
          const _x$2 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
          _tmp = _x$2;
          _tmp$2 = f(_x - 48 | 0, ret);
          _tmp$3 = len + 1 | 0;
          continue;
        } else {
          if (_x === 95) {
            const _x$2 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
            _tmp = _x$2;
            continue;
          } else {
            break _L;
          }
        }
      } else {
        break _L;
      }
    }
    return { _0: str, _1: ret, _2: len };
  }
}
function _M0FPC28internal7strconv13parse__digits(s, x) {
  return _M0EPC16string10StringViewPC28internal7strconv12fold__digitsGmE(s, x, (digit, acc) => BigInt.asUintN(64, BigInt.asUintN(64, acc * 10n) + BigInt.asUintN(64, BigInt(digit >>> 0))));
}
function _M0FPC28internal7strconv20try__parse__19digits(s, x) {
  let x$2 = x;
  let len = 0;
  let _tmp = s;
  while (true) {
    const s$2 = _tmp;
    let s$3;
    _L: {
      if ((s$2.end - s$2.start | 0) >= 1) {
        const _x = s$2.str.charCodeAt(s$2.start);
        if (_x >= 48 && _x <= 57) {
          const _x$2 = new _M0TPC16string10StringView(s$2.str, s$2.start + 1 | 0, s$2.end);
          if (BigInt.asUintN(64, x$2) < BigInt.asUintN(64, _M0FPC28internal7strconv17min__19digit__int)) {
            len = len + 1 | 0;
            x$2 = BigInt.asUintN(64, BigInt.asUintN(64, x$2 * 10n) + BigInt.asUintN(64, BigInt((_x - 48 | 0) >>> 0)));
            _tmp = _x$2;
            continue;
          } else {
            s$3 = s$2;
            break _L;
          }
        } else {
          if (_x === 95) {
            const _x$2 = new _M0TPC16string10StringView(s$2.str, s$2.start + 1 | 0, s$2.end);
            _tmp = _x$2;
            continue;
          } else {
            s$3 = s$2;
            break _L;
          }
        }
      } else {
        s$3 = s$2;
        break _L;
      }
    }
    return { _0: s$3, _1: x$2, _2: len };
  }
}
function _M0FPC28internal7strconv17parse__scientific(s) {
  let s$2 = s;
  let neg_exp = false;
  let rest;
  let ch;
  _L: {
    _L$2: {
      const _bind$4 = s$2;
      if ((_bind$4.end - _bind$4.start | 0) >= 1) {
        const _x = _bind$4.str.charCodeAt(_bind$4.start);
        switch (_x) {
          case 43: {
            const _x$2 = new _M0TPC16string10StringView(_bind$4.str, _bind$4.start + 1 | 0, _bind$4.end);
            rest = _x$2;
            ch = _x;
            break _L$2;
          }
          case 45: {
            const _x$3 = new _M0TPC16string10StringView(_bind$4.str, _bind$4.start + 1 | 0, _bind$4.end);
            rest = _x$3;
            ch = _x;
            break _L$2;
          }
        }
      }
      break _L;
    }
    neg_exp = ch === 45;
    s$2 = rest;
  }
  _L$2: {
    const _bind$4 = s$2;
    if ((_bind$4.end - _bind$4.start | 0) >= 1) {
      const _x = _bind$4.str.charCodeAt(_bind$4.start);
      if (_x >= 48 && _x <= 57) {
        const _bind$5 = _M0EPC16string10StringViewPC28internal7strconv12fold__digitsGmE(s$2, _M0FPC28internal7strconv17parse__scientificN8exp__numS354, (digit, exp_num) => BigInt.asIntN(64, exp_num) < BigInt.asIntN(64, 65536n) ? BigInt.asUintN(64, BigInt.asUintN(64, 10n * exp_num) + BigInt.asUintN(64, BigInt(digit))) : exp_num);
        const _s = _bind$5._0;
        const _exp_num = _bind$5._1;
        return neg_exp ? { _0: _s, _1: BigInt.asUintN(64, -_exp_num) } : { _0: _s, _1: _exp_num };
      } else {
        break _L$2;
      }
    } else {
      break _L$2;
    }
  }
  return undefined;
}
function _M0FPC28internal7strconv13parse__number(s) {
  let s$2;
  let negative;
  _L: {
    let rest;
    _L$2: {
      if ((s.end - s.start | 0) >= 1) {
        const _x = s.str.charCodeAt(s.start);
        switch (_x) {
          case 45: {
            const _x$2 = new _M0TPC16string10StringView(s.str, s.start + 1 | 0, s.end);
            s$2 = _x$2;
            negative = true;
            break _L;
          }
          case 43: {
            const _x$3 = new _M0TPC16string10StringView(s.str, s.start + 1 | 0, s.end);
            rest = _x$3;
            break _L$2;
          }
          default: {
            rest = s;
            break _L$2;
          }
        }
      } else {
        rest = s;
        break _L$2;
      }
    }
    s$2 = rest;
    negative = false;
    break _L;
  }
  if (_M0MPC16string10StringView9is__empty(s$2)) {
    return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(undefined);
  }
  const _bind$4 = _M0FPC28internal7strconv13parse__digits(s$2, 0n);
  const _s = _bind$4._0;
  const _mantissa = _bind$4._1;
  const _consumed = _bind$4._2;
  let mantissa = _mantissa;
  let s$3 = _s;
  let n_digits = _consumed;
  let n_after_dot = 0;
  let exponent = 0n;
  const _bind$5 = s$3;
  if ((_bind$5.end - _bind$5.start | 0) >= 1) {
    const _x = _bind$5.str.charCodeAt(_bind$5.start);
    if (_x === 46) {
      const _x$2 = new _M0TPC16string10StringView(_bind$5.str, _bind$5.start + 1 | 0, _bind$5.end);
      s$3 = _x$2;
      const _bind$6 = _M0FPC28internal7strconv13parse__digits(s$3, mantissa);
      const _new_s = _bind$6._0;
      const _new_mantissa = _bind$6._1;
      const _consumed_digit = _bind$6._2;
      s$3 = _new_s;
      mantissa = _new_mantissa;
      n_after_dot = _consumed_digit;
      exponent = BigInt.asUintN(64, -BigInt.asUintN(64, BigInt(n_after_dot)));
    }
  }
  n_digits = n_digits + n_after_dot | 0;
  if (n_digits === 0) {
    return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(undefined);
  }
  let exp_number = 0n;
  let rest;
  _L$2: {
    _L$3: {
      const _bind$6 = s$3;
      if ((_bind$6.end - _bind$6.start | 0) >= 1) {
        const _x = _bind$6.str.charCodeAt(_bind$6.start);
        switch (_x) {
          case 101: {
            const _x$2 = new _M0TPC16string10StringView(_bind$6.str, _bind$6.start + 1 | 0, _bind$6.end);
            rest = _x$2;
            break _L$3;
          }
          case 69: {
            const _x$3 = new _M0TPC16string10StringView(_bind$6.str, _bind$6.start + 1 | 0, _bind$6.end);
            rest = _x$3;
            break _L$3;
          }
        }
      }
      break _L$2;
    }
    const _bind$6 = _M0FPC28internal7strconv17parse__scientific(rest);
    let _bind$7;
    if (_bind$6 === undefined) {
      return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(undefined);
    } else {
      const _Some = _bind$6;
      _bind$7 = _Some;
    }
    const _new_s = _bind$7._0;
    const _exp_number_val = _bind$7._1;
    s$3 = _new_s;
    exp_number = _exp_number_val;
    exponent = BigInt.asUintN(64, exponent + exp_number);
  }
  const _bind$6 = s$3;
  if ((_bind$6.end - _bind$6.start | 0) === 0) {
    if (n_digits <= 19) {
      return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(new _M0TPC28internal7strconv6Number(exponent, mantissa, negative, false));
    }
    n_digits = n_digits - 19 | 0;
    let many_digits = false;
    let _tmp = s.str;
    let _tmp$2 = s.start;
    let _tmp$3 = s.end;
    _L$3: while (true) {
      const s_str = _tmp;
      const s_start = _tmp$2;
      const s_end = _tmp$3;
      _L$4: {
        let rest$2;
        let ch;
        _L$5: {
          if ((s_end - s_start | 0) >= 1) {
            const _x = s_str.charCodeAt(s_start);
            switch (_x) {
              case 48: {
                const _x$2 = new _M0TPC16string10StringView(s_str, s_start + 1 | 0, s_end);
                rest$2 = _x$2;
                ch = _x;
                break _L$5;
              }
              case 46: {
                const _x$3 = new _M0TPC16string10StringView(s_str, s_start + 1 | 0, s_end);
                rest$2 = _x$3;
                ch = _x;
                break _L$5;
              }
              default: {
                break _L$4;
              }
            }
          } else {
            break _L$4;
          }
        }
        const _tmp$4 = n_digits;
        if (2 === 0) {
          $panic();
        }
        n_digits = _tmp$4 - ((ch - 46 | 0) / 2 | 0) | 0;
        _tmp = rest$2.str;
        _tmp$2 = rest$2.start;
        _tmp$3 = rest$2.end;
        continue;
      }
      break;
    }
    let mantissa$2 = mantissa;
    if (n_digits > 0) {
      many_digits = true;
      mantissa$2 = 0n;
      const _bind$7 = _M0FPC28internal7strconv20try__parse__19digits(s, mantissa$2);
      const _s$2 = _bind$7._0;
      const _new_mantissa = _bind$7._1;
      const _consumed_digit = _bind$7._2;
      mantissa$2 = _new_mantissa;
      let _tmp$4;
      if (BigInt.asUintN(64, mantissa$2) >= BigInt.asUintN(64, _M0FPC28internal7strconv17min__19digit__int)) {
        _tmp$4 = _consumed_digit;
      } else {
        if (_M0MPC16string6String24char__length__ge_2einner(_s$2.str, 1, _s$2.start, _s$2.end)) {
          const _tmp$5 = _s$2.str;
          const _bind$8 = _M0MPC16string6String29offset__of__nth__char_2einner(_s$2.str, 1, _s$2.start, _s$2.end);
          let _tmp$6;
          if (_bind$8 === undefined) {
            _tmp$6 = _s$2.end;
          } else {
            const _Some = _bind$8;
            _tmp$6 = _Some;
          }
          const _x = new _M0TPC16string10StringView(_tmp$5, _tmp$6, _s$2.end);
          const _bind$9 = _M0FPC28internal7strconv20try__parse__19digits(_x, mantissa$2);
          const _new_mantissa$2 = _bind$9._1;
          const _consumed_digit$2 = _bind$9._2;
          mantissa$2 = _new_mantissa$2;
          _tmp$4 = _consumed_digit$2;
        } else {
          return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(undefined);
        }
      }
      exponent = BigInt.asUintN(64, BigInt(_tmp$4));
      exponent = BigInt.asUintN(64, exponent + exp_number);
    }
    return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(new _M0TPC28internal7strconv6Number(exponent, mantissa$2, negative, many_digits));
  } else {
    return _M0FPC28internal7strconv11syntax__errGORPC28internal7strconv6NumberE();
  }
}
function _M0FPC28internal7strconv15parse__inf__nan(rest) {
  let pos;
  let rest$2;
  _L: {
    let rest$3;
    _L$2: {
      if ((rest.end - rest.start | 0) >= 1) {
        const _x = rest.str.charCodeAt(rest.start);
        switch (_x) {
          case 45: {
            const _x$2 = new _M0TPC16string10StringView(rest.str, rest.start + 1 | 0, rest.end);
            pos = false;
            rest$2 = _x$2;
            break _L;
          }
          case 43: {
            const _x$3 = new _M0TPC16string10StringView(rest.str, rest.start + 1 | 0, rest.end);
            rest$3 = _x$3;
            break _L$2;
          }
          default: {
            rest$3 = rest;
            break _L$2;
          }
        }
      } else {
        rest$3 = rest;
        break _L$2;
      }
    }
    pos = true;
    rest$2 = rest$3;
    break _L;
  }
  let _cursor_295 = 0;
  const _input_end_297 = rest$2.end - rest$2.start | 0;
  const _start_296 = _cursor_295;
  let _accept_state_298 = -1;
  let _match_end_299 = -1;
  let _state_300 = 2;
  while (true) {
    if (_state_300 !== 14) {
      if (_state_300 < 2) {
        _accept_state_298 = _state_300;
        _match_end_299 = _cursor_295;
      }
      const _tmp = Math.imul(_state_300, 8) | 0;
      let _next_char_303;
      if (_cursor_295 < _input_end_297) {
        const _char_302 = rest$2.str.charCodeAt(rest$2.start + _cursor_295 | 0);
        _cursor_295 = _cursor_295 + 1 | 0;
        _next_char_303 = _char_302;
      } else {
        _next_char_303 = -1;
      }
      _state_300 = _M0MPC15array13ReadOnlyArray11unsafe__getGiE(_M0FPC28internal7strconv15parse__inf__nanN25_2atransition__table__304S312, _tmp + (_next_char_303 < 90 ? (_next_char_303 < 73 ? (_next_char_303 < 66 ? (_next_char_303 < 0 ? 0 : _next_char_303 > 64 ? 1 : 7) : _next_char_303 > 69 ? (_next_char_303 < 71 ? 2 : 7) : 7) : _next_char_303 > 73 ? (_next_char_303 < 84 ? (_next_char_303 < 78 ? 7 : _next_char_303 > 78 ? 7 : 4) : _next_char_303 > 84 ? (_next_char_303 < 89 ? 7 : 6) : 5) : 3) : _next_char_303 > 96 ? (_next_char_303 < 110 ? (_next_char_303 < 103 ? (_next_char_303 < 98 ? 1 : _next_char_303 > 101 ? 2 : 7) : _next_char_303 > 104 ? (_next_char_303 < 106 ? 3 : 7) : 7) : _next_char_303 > 110 ? (_next_char_303 < 117 ? (_next_char_303 < 116 ? 7 : 5) : _next_char_303 > 120 ? (_next_char_303 < 122 ? 6 : 7) : 7) : 4) : 7) | 0);
      continue;
    } else {
      break;
    }
  }
  const _bind$4 = _accept_state_298;
  switch (_bind$4) {
    case 0: {
      _cursor_295 = _match_end_299;
      return new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(_M0FPC16double14not__a__number);
    }
    case 1: {
      _cursor_295 = _match_end_299;
      return pos ? new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(_M0FPC16double8infinity) : new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(_M0FPC16double13neg__infinity);
    }
    default: {
      _cursor_295 = _start_296;
      return _M0FPC28internal7strconv11syntax__errGdE();
    }
  }
}
function _M0FPC28internal7strconv12checked__mul(a, b) {
  if (BigInt.asUintN(64, a) === BigInt.asUintN(64, 0n) || BigInt.asUintN(64, b) === BigInt.asUintN(64, 0n)) {
    return _M0FPC28internal7strconv12checked__mulN6constrS1164;
  }
  if (BigInt.asUintN(64, a) === BigInt.asUintN(64, 1n)) {
    return b;
  }
  if (BigInt.asUintN(64, b) === BigInt.asUintN(64, 1n)) {
    return a;
  }
  if ($i64_clz(b) === 0 || $i64_clz(a) === 0) {
    return undefined;
  }
  if (b === 0n) {
    $panic();
  }
  const quotient = BigInt.asUintN(64, BigInt.asUintN(64, 18446744073709551615n) / BigInt.asUintN(64, b));
  if (BigInt.asUintN(64, a) > BigInt.asUintN(64, quotient)) {
    return undefined;
  }
  return BigInt.asUintN(64, a * b);
}
function _M0FPC28internal7strconv19overflow__threshold(base, neg) {
  if (!neg) {
    if (base === 10) {
      return 922337203685477581n;
    } else {
      if (base === 16) {
        return 576460752303423488n;
      } else {
        const _tmp = BigInt.asUintN(64, BigInt(base));
        if (_tmp === 0n) {
          $panic();
        }
        return BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asIntN(64, 9223372036854775807n) / BigInt.asIntN(64, _tmp)) + 1n);
      }
    }
  } else {
    if (base === 10) {
      return 17524406870024074036n;
    } else {
      if (base === 16) {
        return 17870283321406128128n;
      } else {
        const _tmp = BigInt.asUintN(64, BigInt(base));
        if (_tmp === 0n) {
          $panic();
        }
        return BigInt.asUintN(64, BigInt.asIntN(64, 9223372036854775808n) / BigInt.asIntN(64, _tmp));
      }
    }
  }
}
function _M0FPC28internal7strconv20parse__int64_2einner(str, base) {
  if (_M0IP016_24default__implPB2Eq10not__equalGRPC16string10StringViewE(str, new _M0TPC16string10StringView(_M0FPC28internal7strconv20parse__int64_2einnerN7_2abindS682, 0, _M0FPC28internal7strconv20parse__int64_2einnerN7_2abindS682.length))) {
    let neg;
    let rest;
    _L: {
      let rest$2;
      _L$2: {
        const _bind$4 = _M0MPC16string10StringView12view_2einner(str, 0, undefined);
        if ((_bind$4.end - _bind$4.start | 0) >= 1) {
          const _x = _bind$4.str.charCodeAt(_bind$4.start);
          switch (_x) {
            case 43: {
              const _x$2 = new _M0TPC16string10StringView(_bind$4.str, _bind$4.start + 1 | 0, _bind$4.end);
              neg = false;
              rest = _x$2;
              break _L;
            }
            case 45: {
              const _x$3 = new _M0TPC16string10StringView(_bind$4.str, _bind$4.start + 1 | 0, _bind$4.end);
              neg = true;
              rest = _x$3;
              break _L;
            }
            default: {
              rest$2 = _bind$4;
              break _L$2;
            }
          }
        } else {
          rest$2 = _bind$4;
          break _L$2;
        }
      }
      neg = false;
      rest = rest$2;
      break _L;
    }
    const _bind$4 = _M0FPC28internal7strconv25check__and__consume__base(rest, base);
    let _bind$5;
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      _bind$5 = _ok._0;
    } else {
      return _bind$4;
    }
    const _num_base = _bind$5._0;
    const _rest = _bind$5._1;
    const _allow_underscore = _bind$5._2;
    const overflow_threshold = _M0FPC28internal7strconv19overflow__threshold(_num_base, neg);
    let has_digit;
    if ((_rest.end - _rest.start | 0) >= 1) {
      const _x = _rest.str.charCodeAt(_rest.start);
      if (_x >= 48 && _x <= 57) {
        has_digit = true;
      } else {
        if (_x >= 97 && _x <= 122) {
          has_digit = true;
        } else {
          if (_x >= 65 && _x <= 90) {
            has_digit = true;
          } else {
            if ((_rest.end - _rest.start | 0) >= 2) {
              if (_x === 95) {
                const _x$2 = _rest.str.charCodeAt(_rest.start + 1 | 0);
                has_digit = _x$2 >= 48 && _x$2 <= 57 ? true : _x$2 >= 97 && _x$2 <= 122 ? true : _x$2 >= 65 && _x$2 <= 90;
              } else {
                has_digit = false;
              }
            } else {
              has_digit = false;
            }
          }
        }
      }
    } else {
      has_digit = false;
    }
    if (has_digit) {
      let _tmp;
      let _tmp$2 = _rest;
      let _tmp$3 = 0n;
      let _tmp$4 = _allow_underscore;
      while (true) {
        const rest$2 = _tmp$2;
        const acc = _tmp$3;
        const allow_underscore = _tmp$4;
        let acc$2;
        let rest$3;
        let c;
        _L$2: {
          _L$3: {
            if ((rest$2.end - rest$2.start | 0) === 1) {
              const _x = rest$2.str.charCodeAt(rest$2.start);
              if (_x === 95) {
                const _bind$6 = _M0FPC28internal7strconv11syntax__errGuE();
                if (_bind$6.$tag === 1) {
                  const _ok = _bind$6;
                  _ok._0;
                } else {
                  return _bind$6;
                }
              } else {
                const _c = _M0MPC16string6String16unsafe__char__at(rest$2.str, _M0MPC16string6String29offset__of__nth__char_2einner(rest$2.str, 0, rest$2.start, rest$2.end));
                const _tmp$5 = rest$2.str;
                const _bind$6 = _M0MPC16string6String29offset__of__nth__char_2einner(rest$2.str, 1, rest$2.start, rest$2.end);
                let _tmp$6;
                if (_bind$6 === undefined) {
                  _tmp$6 = rest$2.end;
                } else {
                  const _Some = _bind$6;
                  _tmp$6 = _Some;
                }
                const _x$2 = new _M0TPC16string10StringView(_tmp$5, _tmp$6, rest$2.end);
                acc$2 = acc;
                rest$3 = _x$2;
                c = _c;
                break _L$3;
              }
            } else {
              if ((rest$2.end - rest$2.start | 0) >= 1) {
                const _x = rest$2.str.charCodeAt(rest$2.start);
                if (_x === 95) {
                  if (allow_underscore === false) {
                    const _bind$6 = _M0FPC28internal7strconv11syntax__errGuE();
                    if (_bind$6.$tag === 1) {
                      const _ok = _bind$6;
                      _ok._0;
                    } else {
                      return _bind$6;
                    }
                  } else {
                    const _x$2 = new _M0TPC16string10StringView(rest$2.str, rest$2.start + 1 | 0, rest$2.end);
                    _tmp$2 = _x$2;
                    _tmp$4 = false;
                    continue;
                  }
                } else {
                  const _c = _M0MPC16string6String16unsafe__char__at(rest$2.str, _M0MPC16string6String29offset__of__nth__char_2einner(rest$2.str, 0, rest$2.start, rest$2.end));
                  const _tmp$5 = rest$2.str;
                  const _bind$6 = _M0MPC16string6String29offset__of__nth__char_2einner(rest$2.str, 1, rest$2.start, rest$2.end);
                  let _tmp$6;
                  if (_bind$6 === undefined) {
                    _tmp$6 = rest$2.end;
                  } else {
                    const _Some = _bind$6;
                    _tmp$6 = _Some;
                  }
                  const _x$2 = new _M0TPC16string10StringView(_tmp$5, _tmp$6, rest$2.end);
                  acc$2 = acc;
                  rest$3 = _x$2;
                  c = _c;
                  break _L$3;
                }
              } else {
                _tmp = acc;
                break;
              }
            }
            break _L$2;
          }
          const c$2 = c;
          let d;
          if (c$2 >= 48 && c$2 <= 57) {
            d = c$2 - 48 | 0;
          } else {
            if (c$2 >= 97 && c$2 <= 122) {
              d = c$2 + -87 | 0;
            } else {
              if (c$2 >= 65 && c$2 <= 90) {
                d = c$2 + -55 | 0;
              } else {
                const _bind$6 = _M0FPC28internal7strconv11syntax__errGiE();
                if (_bind$6.$tag === 1) {
                  const _ok = _bind$6;
                  d = _ok._0;
                } else {
                  return _bind$6;
                }
              }
            }
          }
          if (d < _num_base) {
            if (neg) {
              if (BigInt.asIntN(64, acc$2) >= BigInt.asIntN(64, overflow_threshold)) {
                const next_acc = BigInt.asUintN(64, BigInt.asUintN(64, acc$2 * BigInt.asUintN(64, BigInt(_num_base))) - BigInt.asUintN(64, BigInt(d)));
                if (BigInt.asIntN(64, next_acc) <= BigInt.asIntN(64, acc$2)) {
                  _tmp$2 = rest$3;
                  _tmp$3 = next_acc;
                  _tmp$4 = true;
                  continue;
                } else {
                  const _bind$6 = _M0FPC28internal7strconv10range__errGuE();
                  if (_bind$6.$tag === 1) {
                    const _ok = _bind$6;
                    _ok._0;
                  } else {
                    return _bind$6;
                  }
                }
              } else {
                const _bind$6 = _M0FPC28internal7strconv10range__errGuE();
                if (_bind$6.$tag === 1) {
                  const _ok = _bind$6;
                  _ok._0;
                } else {
                  return _bind$6;
                }
              }
            } else {
              if (BigInt.asIntN(64, acc$2) < BigInt.asIntN(64, overflow_threshold)) {
                const next_acc = BigInt.asUintN(64, BigInt.asUintN(64, acc$2 * BigInt.asUintN(64, BigInt(_num_base))) + BigInt.asUintN(64, BigInt(d)));
                if (BigInt.asIntN(64, next_acc) >= BigInt.asIntN(64, acc$2)) {
                  _tmp$2 = rest$3;
                  _tmp$3 = next_acc;
                  _tmp$4 = true;
                  continue;
                } else {
                  const _bind$6 = _M0FPC28internal7strconv10range__errGuE();
                  if (_bind$6.$tag === 1) {
                    const _ok = _bind$6;
                    _ok._0;
                  } else {
                    return _bind$6;
                  }
                }
              } else {
                const _bind$6 = _M0FPC28internal7strconv10range__errGuE();
                if (_bind$6.$tag === 1) {
                  const _ok = _bind$6;
                  _ok._0;
                } else {
                  return _bind$6;
                }
              }
            }
          } else {
            const _bind$6 = _M0FPC28internal7strconv11syntax__errGuE();
            if (_bind$6.$tag === 1) {
              const _ok = _bind$6;
              _ok._0;
            } else {
              return _bind$6;
            }
          }
        }
        continue;
      }
      return new _M0DTPC16result6ResultGlRPC15error5ErrorE2Ok(_tmp);
    } else {
      return _M0FPC28internal7strconv11syntax__errGlE();
    }
  } else {
    return _M0FPC28internal7strconv11syntax__errGlE();
  }
}
function _M0FPC28internal7strconv17check__underscore(str) {
  if (_M0MPC16string10StringView20contains__code__unit(str, 95)) {
    let rest;
    if ((str.end - str.start | 0) >= 1) {
      const _x = str.str.charCodeAt(str.start);
      switch (_x) {
        case 43: {
          const _x$2 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
          rest = _x$2;
          break;
        }
        case 45: {
          const _x$3 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
          rest = _x$3;
          break;
        }
        default: {
          rest = str;
        }
      }
    } else {
      rest = str;
    }
    let rest$2;
    let allow_underscore;
    let hex;
    _L: {
      let _cursor_213 = 0;
      const _input_end_215 = rest.end - rest.start | 0;
      const _start_214 = _cursor_213;
      let _accept_state_216 = -1;
      let _match_end_217 = -1;
      let _state_218 = 3;
      while (true) {
        if (_state_218 !== 5) {
          if (_state_218 < 3) {
            _accept_state_216 = _state_218;
            _match_end_217 = _cursor_213;
          }
          const _tmp = Math.imul(_state_218, 5) | 0;
          let _next_char_221;
          if (_cursor_213 < _input_end_215) {
            const _char_220 = rest.str.charCodeAt(rest.start + _cursor_213 | 0);
            _cursor_213 = _cursor_213 + 1 | 0;
            _next_char_221 = _char_220;
          } else {
            _next_char_221 = -1;
          }
          _state_218 = _M0MPC15array13ReadOnlyArray11unsafe__getGiE(_M0FPC28internal7strconv17check__underscoreN25_2atransition__table__222S230, _tmp + (_next_char_221 < 88 ? (_next_char_221 < 66 ? (_next_char_221 < 48 ? 4 : _next_char_221 > 48 ? 4 : 0) : _next_char_221 > 66 ? (_next_char_221 < 79 ? 4 : _next_char_221 > 79 ? 4 : 2) : 1) : _next_char_221 > 88 ? (_next_char_221 < 111 ? (_next_char_221 < 98 ? 4 : _next_char_221 > 98 ? 4 : 1) : _next_char_221 > 111 ? (_next_char_221 < 120 ? 4 : _next_char_221 > 120 ? 4 : 3) : 2) : 3) | 0);
          continue;
        } else {
          break;
        }
      }
      const _bind$4 = _accept_state_216;
      switch (_bind$4) {
        case 0: {
          _cursor_213 = _match_end_217;
          const rest$3 = _M0MPC16string10StringView12view_2einner(rest, _match_end_217, _input_end_215);
          rest$2 = rest$3;
          allow_underscore = true;
          hex = false;
          break _L;
        }
        case 1: {
          _cursor_213 = _match_end_217;
          const rest$4 = _M0MPC16string10StringView12view_2einner(rest, _match_end_217, _input_end_215);
          rest$2 = rest$4;
          allow_underscore = true;
          hex = false;
          break _L;
        }
        case 2: {
          _cursor_213 = _match_end_217;
          const rest$5 = _M0MPC16string10StringView12view_2einner(rest, _match_end_217, _input_end_215);
          rest$2 = rest$5;
          allow_underscore = true;
          hex = true;
          break _L;
        }
        default: {
          _cursor_213 = _start_214;
          rest$2 = rest;
          allow_underscore = false;
          hex = false;
          break _L;
        }
      }
    }
    let _tmp = rest$2.str;
    let _tmp$2 = rest$2.start;
    let _tmp$3 = rest$2.end;
    let _tmp$4 = allow_underscore;
    let _tmp$5 = false;
    while (true) {
      const rest_str = _tmp;
      const rest_start = _tmp$2;
      const rest_end = _tmp$3;
      const allow_underscore$2 = _tmp$4;
      const follow_underscore = _tmp$5;
      let rest$3;
      _L$2: {
        _L$3: {
          let rest$4;
          _L$4: {
            _L$5: {
              let rest$5;
              _L$6: {
                let rest$6;
                _L$7: {
                  if ((rest_end - rest_start | 0) === 0) {
                    return true;
                  } else {
                    if ((rest_end - rest_start | 0) === 1) {
                      const _x = rest_str.charCodeAt(rest_start);
                      if (_x === 95) {
                        return false;
                      } else {
                        if (_x >= 48 && _x <= 57) {
                          const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                          rest$6 = _x$2;
                          break _L$7;
                        } else {
                          if (_x >= 97 && _x <= 102) {
                            const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                            if (hex) {
                              rest$5 = _x$2;
                              break _L$6;
                            } else {
                              if (_x === 101) {
                                if (follow_underscore === true) {
                                  break _L$5;
                                } else {
                                  rest$4 = _x$2;
                                  break _L$4;
                                }
                              } else {
                                if (follow_underscore === true) {
                                  break _L$3;
                                } else {
                                  rest$3 = _x$2;
                                  break _L$2;
                                }
                              }
                            }
                          } else {
                            if (_x >= 65 && _x <= 70) {
                              const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                              if (hex) {
                                rest$5 = _x$2;
                                break _L$6;
                              } else {
                                if (_x === 69) {
                                  if (follow_underscore === true) {
                                    break _L$5;
                                  } else {
                                    rest$4 = _x$2;
                                    break _L$4;
                                  }
                                } else {
                                  if (follow_underscore === true) {
                                    break _L$3;
                                  } else {
                                    rest$3 = _x$2;
                                    break _L$2;
                                  }
                                }
                              }
                            } else {
                              if (_x === 46) {
                                if (follow_underscore === true) {
                                  break _L$5;
                                } else {
                                  const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                  rest$4 = _x$2;
                                  break _L$4;
                                }
                              } else {
                                if (_x === 43) {
                                  if (follow_underscore === true) {
                                    break _L$5;
                                  } else {
                                    const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                    rest$4 = _x$2;
                                    break _L$4;
                                  }
                                } else {
                                  if (_x === 45) {
                                    if (follow_underscore === true) {
                                      break _L$5;
                                    } else {
                                      const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                      rest$4 = _x$2;
                                      break _L$4;
                                    }
                                  } else {
                                    if (follow_underscore === true) {
                                      break _L$3;
                                    } else {
                                      const _bind$4 = _M0MPC16string6String29offset__of__nth__char_2einner(rest_str, 1, rest_start, rest_end);
                                      let _tmp$6;
                                      if (_bind$4 === undefined) {
                                        _tmp$6 = rest_end;
                                      } else {
                                        const _Some = _bind$4;
                                        _tmp$6 = _Some;
                                      }
                                      const _x$2 = new _M0TPC16string10StringView(rest_str, _tmp$6, rest_end);
                                      rest$3 = _x$2;
                                      break _L$2;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    } else {
                      const _x = rest_str.charCodeAt(rest_start);
                      if (_x === 95) {
                        if (allow_underscore$2 === false) {
                          return false;
                        } else {
                          const _bind$4 = rest_start + 1 | 0;
                          _tmp$2 = _bind$4;
                          _tmp$4 = false;
                          _tmp$5 = true;
                          continue;
                        }
                      } else {
                        if (_x >= 48 && _x <= 57) {
                          const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                          rest$6 = _x$2;
                          break _L$7;
                        } else {
                          if (_x >= 97 && _x <= 102) {
                            const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                            if (hex) {
                              rest$5 = _x$2;
                              break _L$6;
                            } else {
                              if (_x === 101) {
                                if (follow_underscore === true) {
                                  break _L$5;
                                } else {
                                  rest$4 = _x$2;
                                  break _L$4;
                                }
                              } else {
                                if (follow_underscore === true) {
                                  break _L$3;
                                } else {
                                  rest$3 = _x$2;
                                  break _L$2;
                                }
                              }
                            }
                          } else {
                            if (_x >= 65 && _x <= 70) {
                              const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                              if (hex) {
                                rest$5 = _x$2;
                                break _L$6;
                              } else {
                                if (_x === 69) {
                                  if (follow_underscore === true) {
                                    break _L$5;
                                  } else {
                                    rest$4 = _x$2;
                                    break _L$4;
                                  }
                                } else {
                                  if (follow_underscore === true) {
                                    break _L$3;
                                  } else {
                                    rest$3 = _x$2;
                                    break _L$2;
                                  }
                                }
                              }
                            } else {
                              if (_x === 46) {
                                if (follow_underscore === true) {
                                  break _L$5;
                                } else {
                                  const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                  rest$4 = _x$2;
                                  break _L$4;
                                }
                              } else {
                                if (_x === 43) {
                                  if (follow_underscore === true) {
                                    break _L$5;
                                  } else {
                                    const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                    rest$4 = _x$2;
                                    break _L$4;
                                  }
                                } else {
                                  if (_x === 45) {
                                    if (follow_underscore === true) {
                                      break _L$5;
                                    } else {
                                      const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                      rest$4 = _x$2;
                                      break _L$4;
                                    }
                                  } else {
                                    if (follow_underscore === true) {
                                      break _L$3;
                                    } else {
                                      const _bind$4 = _M0MPC16string6String29offset__of__nth__char_2einner(rest_str, 1, rest_start, rest_end);
                                      let _tmp$6;
                                      if (_bind$4 === undefined) {
                                        _tmp$6 = rest_end;
                                      } else {
                                        const _Some = _bind$4;
                                        _tmp$6 = _Some;
                                      }
                                      const _x$2 = new _M0TPC16string10StringView(rest_str, _tmp$6, rest_end);
                                      rest$3 = _x$2;
                                      break _L$2;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                _tmp = rest$6.str;
                _tmp$2 = rest$6.start;
                _tmp$3 = rest$6.end;
                _tmp$4 = true;
                _tmp$5 = false;
                continue;
              }
              _tmp = rest$5.str;
              _tmp$2 = rest$5.start;
              _tmp$3 = rest$5.end;
              _tmp$4 = true;
              _tmp$5 = false;
              continue;
            }
            return false;
          }
          _tmp = rest$4.str;
          _tmp$2 = rest$4.start;
          _tmp$3 = rest$4.end;
          _tmp$4 = false;
          _tmp$5 = false;
          continue;
        }
        return false;
      }
      _tmp = rest$3.str;
      _tmp$2 = rest$3.start;
      _tmp$3 = rest$3.end;
      _tmp$4 = false;
      _tmp$5 = false;
      continue;
    }
  } else {
    return true;
  }
}
function _M0FPC28internal7strconv14eisel__umul128(a, b) {
  const a_lo = BigInt.asUintN(64, a & 4294967295n);
  const a_hi = BigInt.asUintN(64, BigInt.asUintN(64, a) >> BigInt(32 & 63));
  const b_lo = BigInt.asUintN(64, b & 4294967295n);
  const b_hi = BigInt.asUintN(64, BigInt.asUintN(64, b) >> BigInt(32 & 63));
  const x = BigInt.asUintN(64, a_lo * b_lo);
  const y = BigInt.asUintN(64, BigInt.asUintN(64, a_hi * b_lo) + BigInt.asUintN(64, BigInt.asUintN(64, x) >> BigInt(32 & 63)));
  const z = BigInt.asUintN(64, BigInt.asUintN(64, a_lo * b_hi) + BigInt.asUintN(64, y & 4294967295n));
  const hi = BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, a_hi * b_hi) + BigInt.asUintN(64, BigInt.asUintN(64, y) >> BigInt(32 & 63))) + BigInt.asUintN(64, BigInt.asUintN(64, z) >> BigInt(32 & 63)));
  return new _M0TPC28internal7strconv12EiselProduct(BigInt.asUintN(64, a * b), hi);
}
function _M0FPC28internal7strconv20eisel__mul__log2__10(exponent) {
  return (Math.imul(exponent, 108853) | 0) >> 15;
}
function _M0FPC28internal7strconv20try__eisel__lemire64(mantissa, exponent, negative) {
  if (BigInt.asUintN(64, mantissa) === BigInt.asUintN(64, 0n)) {
    return negative ? $i64_reinterpret_f64(9223372036854775808n) : 0;
  }
  if (BigInt.asIntN(64, exponent) < BigInt.asIntN(64, 18446744073709551268n) || BigInt.asIntN(64, exponent) > BigInt.asIntN(64, 347n)) {
    return _M0FPC16double14not__a__number;
  }
  const exponent$2 = Number(BigInt.asIntN(32, exponent)) | 0;
  const table_index = Math.imul(exponent$2 - -348 | 0, 2) | 0;
  const pow_hi = _M0MPC15array13ReadOnlyArray2atGmE(_M0FPC28internal7strconv27eisel__lemire__pow10__table, table_index);
  const pow_lo = _M0MPC15array13ReadOnlyArray2atGmE(_M0FPC28internal7strconv27eisel__lemire__pow10__table, table_index + 1 | 0);
  const pow_exp2 = 1 + _M0FPC28internal7strconv20eisel__mul__log2__10(exponent$2) | 0;
  const leading_zeros = $i64_clz(mantissa);
  const normalized = BigInt.asUintN(64, mantissa << BigInt(leading_zeros & 63));
  let result_exp2 = ((pow_exp2 + 63 | 0) + 1023 | 0) - leading_zeros | 0;
  const product = _M0FPC28internal7strconv14eisel__umul128(normalized, pow_hi);
  let product_hi = product.hi;
  let product_lo = product.lo;
  if (BigInt.asUintN(64, BigInt.asUintN(64, product_hi & 511n)) === BigInt.asUintN(64, 511n) && BigInt.asUintN(64, BigInt.asUintN(64, product_lo + normalized)) < BigInt.asUintN(64, normalized)) {
    const wider = _M0FPC28internal7strconv14eisel__umul128(normalized, pow_lo);
    let merged_hi = product_hi;
    const merged_lo = BigInt.asUintN(64, product_lo + wider.hi);
    if (BigInt.asUintN(64, merged_lo) < BigInt.asUintN(64, product_lo)) {
      merged_hi = BigInt.asUintN(64, merged_hi + 1n);
    }
    if (BigInt.asUintN(64, BigInt.asUintN(64, merged_hi & 511n)) === BigInt.asUintN(64, 511n) && (BigInt.asUintN(64, BigInt.asUintN(64, merged_lo + 1n)) === BigInt.asUintN(64, 0n) && BigInt.asUintN(64, BigInt.asUintN(64, wider.lo + normalized)) < BigInt.asUintN(64, normalized))) {
      return _M0FPC16double14not__a__number;
    }
    product_hi = merged_hi;
    product_lo = merged_lo;
  }
  const top_bit = Number(BigInt.asIntN(32, BigInt.asUintN(64, BigInt.asUintN(64, product_hi) >> BigInt(63 & 63)))) | 0;
  let result_mantissa = BigInt.asUintN(64, BigInt.asUintN(64, product_hi) >> BigInt((top_bit + 9 | 0) & 63));
  result_exp2 = result_exp2 - (1 - top_bit | 0) | 0;
  if (BigInt.asUintN(64, product_lo) === BigInt.asUintN(64, 0n) && (BigInt.asUintN(64, BigInt.asUintN(64, product_hi & 511n)) === BigInt.asUintN(64, 0n) && BigInt.asUintN(64, BigInt.asUintN(64, result_mantissa & 3n)) === BigInt.asUintN(64, 1n))) {
    return _M0FPC16double14not__a__number;
  }
  result_mantissa = BigInt.asUintN(64, result_mantissa + BigInt.asUintN(64, result_mantissa & 1n));
  result_mantissa = BigInt.asUintN(64, BigInt.asUintN(64, result_mantissa) >> BigInt(1 & 63));
  if (BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, result_mantissa) >> BigInt(53 & 63))) > BigInt.asUintN(64, 0n)) {
    result_mantissa = BigInt.asUintN(64, BigInt.asUintN(64, result_mantissa) >> BigInt(1 & 63));
    result_exp2 = result_exp2 + 1 | 0;
  }
  if (result_exp2 <= 0 || result_exp2 >= 2047) {
    return _M0FPC16double14not__a__number;
  }
  const exponent_bits = BigInt.asUintN(64, BigInt.asUintN(64, BigInt(result_exp2 >>> 0)) << BigInt(52 & 63));
  let result_bits = BigInt.asUintN(64, exponent_bits | BigInt.asUintN(64, result_mantissa & 4503599627370495n));
  if (negative) {
    result_bits = BigInt.asUintN(64, result_bits | 9223372036854775808n);
  }
  return $i64_reinterpret_f64(result_bits);
}
function _M0MPC28internal7strconv7Decimal9new__priv() {
  return new _M0TPC28internal7strconv7Decimal($makebytes(800, 0), 0, 0, false, false, 0);
}
function _M0MPC28internal7strconv7Decimal4trim(self) {
  while (true) {
    let _tmp;
    if (self.digits_num > 0) {
      const _tmp$2 = self.digits;
      const _tmp$3 = self.digits_num - 1 | 0;
      _tmp = _M0IPC14byte4BytePB2Eq5equal(_tmp$3 >>> 0 < _tmp$2.length ? _tmp$2[_tmp$3] : $oob(), 0);
    } else {
      _tmp = false;
    }
    if (_tmp) {
      self.digits_num = self.digits_num - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (self.digits_num === 0) {
    self.decimal_point = 0;
    return;
  } else {
    return;
  }
}
function _M0FPC28internal7strconv26parse__decimal__from__view(str) {
  const d = _M0MPC28internal7strconv7Decimal9new__priv();
  let has_dp = false;
  let has_digits = false;
  let rest;
  _L: {
    _L$2: {
      if ((str.end - str.start | 0) >= 1) {
        const _x = str.str.charCodeAt(str.start);
        switch (_x) {
          case 45: {
            const _x$2 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
            d.negative = true;
            rest = _x$2;
            break;
          }
          case 43: {
            rest = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
            break;
          }
          default: {
            break _L$2;
          }
        }
      } else {
        break _L$2;
      }
      break _L;
    }
    rest = str;
  }
  let rest$2;
  let _tmp = rest;
  while (true) {
    const rest$3 = _tmp;
    let rest$4;
    _L$2: {
      _L$3: {
        if ((rest$3.end - rest$3.start | 0) >= 1) {
          const _x = rest$3.str.charCodeAt(rest$3.start);
          if (_x === 95) {
            const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
            _tmp = _x$2;
            continue;
          } else {
            if (_x === 46) {
              const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
              if (!has_dp) {
                has_dp = true;
                d.decimal_point = d.digits_num;
                _tmp = _x$2;
                continue;
              } else {
                const _bind$4 = _M0FPC28internal7strconv11syntax__errGuE();
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  _ok._0;
                } else {
                  return _bind$4;
                }
              }
            } else {
              if (_x >= 48 && _x <= 57) {
                const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
                has_digits = true;
                if (_x === 48 && d.digits_num === 0) {
                  d.decimal_point = d.decimal_point - 1 | 0;
                  _tmp = _x$2;
                  continue;
                }
                if (d.digits_num < d.digits.length) {
                  const _tmp$2 = d.digits;
                  const _tmp$3 = d.digits_num;
                  if (_tmp$3 >>> 0 < _tmp$2.length) {
                    _tmp$2[_tmp$3] = (_x - 48 | 0) & 255;
                  } else {
                    $oob();
                  }
                  d.digits_num = d.digits_num + 1 | 0;
                } else {
                  if (!has_dp) {
                    d.overflowed = d.overflowed + 1 | 0;
                  }
                  if (_x !== 48) {
                    d.truncated = true;
                  }
                }
                _tmp = _x$2;
                continue;
              } else {
                rest$4 = rest$3;
                break _L$3;
              }
            }
          }
        } else {
          rest$4 = rest$3;
          break _L$3;
        }
        break _L$2;
      }
      rest$2 = rest$4;
      break;
    }
    continue;
  }
  if (has_digits) {
    if (!has_dp) {
      d.decimal_point = d.digits_num;
    }
    let rest$3;
    let rest$4;
    _L$2: {
      _L$3: {
        if ((rest$2.end - rest$2.start | 0) >= 1) {
          const _x = rest$2.str.charCodeAt(rest$2.start);
          switch (_x) {
            case 101: {
              const _x$2 = new _M0TPC16string10StringView(rest$2.str, rest$2.start + 1 | 0, rest$2.end);
              rest$4 = _x$2;
              break _L$3;
            }
            case 69: {
              const _x$3 = new _M0TPC16string10StringView(rest$2.str, rest$2.start + 1 | 0, rest$2.end);
              rest$4 = _x$3;
              break _L$3;
            }
            default: {
              rest$3 = rest$2;
            }
          }
        } else {
          rest$3 = rest$2;
        }
        break _L$2;
      }
      let exp_sign = 1;
      let rest$5;
      if ((rest$4.end - rest$4.start | 0) >= 1) {
        const _x = rest$4.str.charCodeAt(rest$4.start);
        switch (_x) {
          case 43: {
            rest$5 = new _M0TPC16string10StringView(rest$4.str, rest$4.start + 1 | 0, rest$4.end);
            break;
          }
          case 45: {
            const _x$2 = new _M0TPC16string10StringView(rest$4.str, rest$4.start + 1 | 0, rest$4.end);
            exp_sign = -1;
            rest$5 = _x$2;
            break;
          }
          default: {
            rest$5 = rest$4;
          }
        }
      } else {
        rest$5 = rest$4;
      }
      _L$4: {
        _L$5: {
          if ((rest$5.end - rest$5.start | 0) >= 1) {
            const _x = rest$5.str.charCodeAt(rest$5.start);
            if (_x >= 48 && _x <= 57) {
              const effective_dp = d.decimal_point + d.overflowed | 0;
              const exp_limit = exp_sign > 0 ? (effective_dp < 311 ? 311 - effective_dp | 0 : 0) : effective_dp > -331 ? effective_dp + 331 | 0 : 0;
              let exp = 0;
              let rest$6;
              let _tmp$2 = rest$5;
              while (true) {
                const rest$7 = _tmp$2;
                let rest$8;
                _L$6: {
                  if ((rest$7.end - rest$7.start | 0) >= 1) {
                    const _x$2 = rest$7.str.charCodeAt(rest$7.start);
                    if (_x$2 === 95) {
                      const _x$3 = new _M0TPC16string10StringView(rest$7.str, rest$7.start + 1 | 0, rest$7.end);
                      _tmp$2 = _x$3;
                      continue;
                    } else {
                      if (_x$2 >= 48 && _x$2 <= 57) {
                        const _x$3 = new _M0TPC16string10StringView(rest$7.str, rest$7.start + 1 | 0, rest$7.end);
                        if (exp < exp_limit) {
                          exp = (Math.imul(exp, 10) | 0) + (_x$2 - 48 | 0) | 0;
                          if (exp > exp_limit) {
                            exp = exp_limit;
                          }
                        }
                        _tmp$2 = _x$3;
                        continue;
                      } else {
                        rest$8 = rest$7;
                        break _L$6;
                      }
                    }
                  } else {
                    rest$8 = rest$7;
                    break _L$6;
                  }
                }
                rest$6 = rest$8;
                break;
              }
              d.decimal_point = d.decimal_point + (Math.imul(exp_sign, exp) | 0) | 0;
              rest$3 = rest$6;
            } else {
              break _L$5;
            }
          } else {
            break _L$5;
          }
          break _L$4;
        }
        const _bind$4 = _M0FPC28internal7strconv11syntax__errGlE();
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          rest$3 = _ok._0;
        } else {
          return _bind$4;
        }
      }
    }
    if ((rest$3.end - rest$3.start | 0) === 0) {
      _M0MPC28internal7strconv7Decimal4trim(d);
      return new _M0DTPC16result6ResultGRPC28internal7strconv7DecimalRPC15error5ErrorE2Ok(d);
    } else {
      return _M0FPC28internal7strconv11syntax__errGlE();
    }
  } else {
    return _M0FPC28internal7strconv11syntax__errGlE();
  }
}
function _M0FPC28internal7strconv20parse__decimal__priv(str) {
  return _M0FPC28internal7strconv26parse__decimal__from__view(str);
}
function _M0FPC28internal7strconv14assemble__bits(mantissa, exponent, negative) {
  const biased_exp = exponent - _M0FPC28internal7strconv12double__info.bias | 0;
  let bits = BigInt.asUintN(64, mantissa & BigInt.asUintN(64, BigInt.asUintN(64, 1n << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)) - 1n));
  const exp_bits = BigInt.asUintN(64, BigInt(biased_exp & ((1 << _M0FPC28internal7strconv12double__info.exponent_bits) - 1 | 0)));
  bits = BigInt.asUintN(64, bits | BigInt.asUintN(64, exp_bits << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)));
  if (negative) {
    bits = BigInt.asUintN(64, bits | BigInt.asUintN(64, BigInt.asUintN(64, 1n << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)) << BigInt(_M0FPC28internal7strconv12double__info.exponent_bits & 63)));
  }
  return bits;
}
function _M0MPC28internal7strconv7Decimal17should__round__up(self, d) {
  if (d < 0 || d >= self.digits_num) {
    return false;
  }
  let _tmp;
  const _tmp$2 = self.digits;
  if ((d >>> 0 < _tmp$2.length ? _tmp$2[d] : $oob()) === 5) {
    _tmp = (d + 1 | 0) === self.digits_num;
  } else {
    _tmp = false;
  }
  if (_tmp) {
    if (self.truncated) {
      return true;
    }
    let _tmp$3;
    if (d > 0) {
      const _tmp$4 = self.digits;
      const _tmp$5 = d - 1 | 0;
      if (2 === 0) {
        $panic();
      }
      _tmp$3 = ((_tmp$5 >>> 0 < _tmp$4.length ? _tmp$4[_tmp$5] : $oob()) % 2 | 0) !== 0;
    } else {
      _tmp$3 = false;
    }
    return _tmp$3;
  }
  const _tmp$3 = self.digits;
  return (d >>> 0 < _tmp$3.length ? _tmp$3[d] : $oob()) >= 5;
}
function _M0MPC28internal7strconv7Decimal16rounded__integer(self) {
  if (self.decimal_point > 20) {
    return 18446744073709551615n;
  }
  let _tmp = 0n;
  let _tmp$2 = 0;
  while (true) {
    const n = _tmp;
    const i = _tmp$2;
    if (i < self.decimal_point && i < self.digits_num) {
      const _tmp$3 = BigInt.asUintN(64, n * 10n);
      const _tmp$4 = self.digits;
      _tmp = BigInt.asUintN(64, _tmp$3 + _M0MPC14byte4Byte9to__int64(i >>> 0 < _tmp$4.length ? _tmp$4[i] : $oob()));
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      let n$2;
      let _tmp$3 = n;
      let _tmp$4 = i;
      while (true) {
        const n$3 = _tmp$3;
        const i$2 = _tmp$4;
        if (i$2 < self.decimal_point) {
          _tmp$3 = BigInt.asUintN(64, n$3 * 10n);
          _tmp$4 = i$2 + 1 | 0;
          continue;
        } else {
          n$2 = n$3;
          break;
        }
      }
      return _M0MPC28internal7strconv7Decimal17should__round__up(self, self.decimal_point) ? BigInt.asUintN(64, n$2 + 1n) : n$2;
    }
  }
}
function _M0MPC28internal7strconv7Decimal11new__digits(self, s) {
  const new_digits = _M0MPC15array13ReadOnlyArray2atGmE(_M0FPC28internal7strconv19left__shift__cheats, s)._0;
  const cheat_num = _M0MPC15array13ReadOnlyArray2atGmE(_M0FPC28internal7strconv19left__shift__cheats, s)._1;
  const _bind$4 = cheat_num.length;
  let less;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$4) {
      const code_unit = cheat_num.charCodeAt(i);
      if (i >= self.digits_num) {
        less = true;
        break;
      }
      const d = code_unit - 48 | 0;
      const _tmp$2 = self.digits;
      if ((i >>> 0 < _tmp$2.length ? _tmp$2[i] : $oob()) !== d) {
        const _tmp$3 = self.digits;
        less = (i >>> 0 < _tmp$3.length ? _tmp$3[i] : $oob()) < d;
        break;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      less = false;
      break;
    }
  }
  return less ? new_digits - 1 | 0 : new_digits;
}
function _M0MPC28internal7strconv7Decimal11left__shift(self, s) {
  const new_digits = _M0MPC28internal7strconv7Decimal11new__digits(self, s);
  let read_index = self.digits_num;
  let write_index = self.digits_num + new_digits | 0;
  let acc = 0n;
  read_index = read_index - 1 | 0;
  while (true) {
    if (read_index >= 0) {
      const _tmp = self.digits;
      const _tmp$2 = read_index;
      const d = _M0MPC14byte4Byte9to__int64(_tmp$2 >>> 0 < _tmp.length ? _tmp[_tmp$2] : $oob());
      acc = BigInt.asUintN(64, acc + BigInt.asUintN(64, d << BigInt(s & 63)));
      if (10n === 0n) {
        $panic();
      }
      const quo = BigInt.asUintN(64, BigInt.asIntN(64, acc) / BigInt.asIntN(64, 10n));
      const rem = Number(BigInt.asIntN(32, BigInt.asUintN(64, acc - BigInt.asUintN(64, quo * 10n)))) | 0;
      write_index = write_index - 1 | 0;
      if (write_index < self.digits.length) {
        const _tmp$3 = self.digits;
        const _tmp$4 = write_index;
        if (_tmp$4 >>> 0 < _tmp$3.length) {
          _tmp$3[_tmp$4] = rem & 255;
        } else {
          $oob();
        }
      } else {
        if (rem !== 0) {
          self.truncated = true;
        }
      }
      acc = quo;
      read_index = read_index - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    if (BigInt.asIntN(64, acc) > BigInt.asIntN(64, 0n)) {
      if (10n === 0n) {
        $panic();
      }
      const quo = BigInt.asUintN(64, BigInt.asIntN(64, acc) / BigInt.asIntN(64, 10n));
      const rem = Number(BigInt.asIntN(32, BigInt.asUintN(64, acc - BigInt.asUintN(64, 10n * quo)))) | 0;
      write_index = write_index - 1 | 0;
      if (write_index < self.digits.length) {
        const _tmp = self.digits;
        const _tmp$2 = write_index;
        if (_tmp$2 >>> 0 < _tmp.length) {
          _tmp[_tmp$2] = rem & 255;
        } else {
          $oob();
        }
      } else {
        if (rem !== 0) {
          self.truncated = true;
        }
      }
      acc = quo;
      continue;
    } else {
      break;
    }
  }
  self.digits_num = self.digits_num + new_digits | 0;
  if (self.digits_num > self.digits.length) {
    self.digits_num = self.digits.length;
  }
  self.decimal_point = self.decimal_point + new_digits | 0;
  _M0MPC28internal7strconv7Decimal4trim(self);
}
function _M0MPC28internal7strconv7Decimal12right__shift(self, s) {
  let read_index = 0;
  let write_index = 0;
  let acc = 0n;
  while (true) {
    if (BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, acc) >> BigInt(s & 63))) === BigInt.asUintN(64, 0n)) {
      if (read_index >= self.digits_num) {
        while (true) {
          if (BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, acc) >> BigInt(s & 63))) === BigInt.asUintN(64, 0n)) {
            acc = BigInt.asUintN(64, acc * 10n);
            read_index = read_index + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        break;
      }
      const _tmp = self.digits;
      const _tmp$2 = read_index;
      const d = _tmp$2 >>> 0 < _tmp.length ? _tmp[_tmp$2] : $oob();
      acc = BigInt.asUintN(64, BigInt.asUintN(64, acc * 10n) + _M0MPC14byte4Byte9to__int64(d));
      read_index = read_index + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  self.decimal_point = self.decimal_point - (read_index - 1 | 0) | 0;
  const mask = BigInt.asUintN(64, BigInt.asUintN(64, 1n << BigInt(s & 63)) - 1n);
  while (true) {
    if (read_index < self.digits_num) {
      const out = BigInt.asUintN(64, BigInt.asUintN(64, acc) >> BigInt(s & 63));
      const _tmp = self.digits;
      const _tmp$2 = write_index;
      if (_tmp$2 >>> 0 < _tmp.length) {
        _tmp[_tmp$2] = _M0MPC16uint646UInt648to__byte(out);
      } else {
        $oob();
      }
      write_index = write_index + 1 | 0;
      acc = BigInt.asUintN(64, acc & mask);
      const _tmp$3 = self.digits;
      const _tmp$4 = read_index;
      const d = _tmp$4 >>> 0 < _tmp$3.length ? _tmp$3[_tmp$4] : $oob();
      acc = BigInt.asUintN(64, BigInt.asUintN(64, acc * 10n) + _M0MPC14byte4Byte9to__int64(d));
      read_index = read_index + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    if (BigInt.asUintN(64, acc) > BigInt.asUintN(64, 0n)) {
      const out = BigInt.asUintN(64, BigInt.asUintN(64, acc) >> BigInt(s & 63));
      if (write_index < self.digits.length) {
        const _tmp = self.digits;
        const _tmp$2 = write_index;
        if (_tmp$2 >>> 0 < _tmp.length) {
          _tmp[_tmp$2] = _M0MPC16uint646UInt648to__byte(out);
        } else {
          $oob();
        }
        write_index = write_index + 1 | 0;
      } else {
        if (BigInt.asUintN(64, out) > BigInt.asUintN(64, 0n)) {
          self.truncated = true;
        }
      }
      acc = BigInt.asUintN(64, acc & mask);
      acc = BigInt.asUintN(64, acc * 10n);
      continue;
    } else {
      break;
    }
  }
  self.digits_num = write_index;
  _M0MPC28internal7strconv7Decimal4trim(self);
}
function _M0MPC28internal7strconv7Decimal11shift__priv(self, s) {
  if (self.digits_num === 0) {
    return undefined;
  }
  let s$2 = s;
  if (s$2 > 0) {
    while (true) {
      if (s$2 > 59) {
        _M0MPC28internal7strconv7Decimal11left__shift(self, 59);
        s$2 = s$2 - 59 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0MPC28internal7strconv7Decimal11left__shift(self, s$2);
  }
  if (s$2 < 0) {
    while (true) {
      if (s$2 < -59) {
        _M0MPC28internal7strconv7Decimal12right__shift(self, 59);
        s$2 = s$2 + 59 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0MPC28internal7strconv7Decimal12right__shift(self, -s$2 | 0);
    return;
  } else {
    return;
  }
}
function _M0MPC28internal7strconv7Decimal16to__double__priv(self) {
  let exponent = 0;
  let mantissa = 0n;
  const effective_dp = self.decimal_point + self.overflowed | 0;
  if (self.digits_num === 0 || effective_dp < -330) {
    mantissa = 0n;
    exponent = _M0FPC28internal7strconv12double__info.bias;
    const bits = _M0FPC28internal7strconv14assemble__bits(mantissa, exponent, self.negative);
    return new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok($i64_reinterpret_f64(bits));
  }
  if (self.decimal_point > 310) {
    const _bind$4 = _M0FPC28internal7strconv10range__errGuE();
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      _ok._0;
    } else {
      return _bind$4;
    }
  }
  self.decimal_point = self.decimal_point + self.overflowed | 0;
  while (true) {
    if (self.decimal_point > 0) {
      let n = 0;
      if (self.decimal_point >= _M0MPC15array13ReadOnlyArray6lengthGiE(_M0FPC28internal7strconv6powtab)) {
        n = 60;
      } else {
        n = _M0MPC15array13ReadOnlyArray2atGiE(_M0FPC28internal7strconv6powtab, self.decimal_point);
      }
      _M0MPC28internal7strconv7Decimal11shift__priv(self, -n | 0);
      exponent = exponent + n | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    let _tmp;
    if (self.decimal_point < 0) {
      _tmp = true;
    } else {
      let _tmp$2;
      if (self.decimal_point === 0) {
        const _tmp$3 = self.digits;
        _tmp$2 = (0 >>> 0 < _tmp$3.length ? _tmp$3[0] : $oob()) < 5;
      } else {
        _tmp$2 = false;
      }
      _tmp = _tmp$2;
    }
    if (_tmp) {
      let n = 0;
      if ((-self.decimal_point | 0) >= _M0MPC15array13ReadOnlyArray6lengthGiE(_M0FPC28internal7strconv6powtab)) {
        n = 60;
      } else {
        n = _M0MPC15array13ReadOnlyArray2atGiE(_M0FPC28internal7strconv6powtab, -self.decimal_point | 0);
      }
      _M0MPC28internal7strconv7Decimal11shift__priv(self, n);
      exponent = exponent - n | 0;
      continue;
    } else {
      break;
    }
  }
  exponent = exponent - 1 | 0;
  if (exponent < (_M0FPC28internal7strconv12double__info.bias + 1 | 0)) {
    const n = (_M0FPC28internal7strconv12double__info.bias + 1 | 0) - exponent | 0;
    _M0MPC28internal7strconv7Decimal11shift__priv(self, -n | 0);
    exponent = exponent + n | 0;
  }
  if ((exponent - _M0FPC28internal7strconv12double__info.bias | 0) >= ((1 << _M0FPC28internal7strconv12double__info.exponent_bits) - 1 | 0)) {
    const _bind$4 = _M0FPC28internal7strconv10range__errGuE();
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      _ok._0;
    } else {
      return _bind$4;
    }
  }
  _M0MPC28internal7strconv7Decimal11shift__priv(self, _M0FPC28internal7strconv12double__info.mantissa_bits + 1 | 0);
  mantissa = _M0MPC28internal7strconv7Decimal16rounded__integer(self);
  if (BigInt.asUintN(64, mantissa) === BigInt.asUintN(64, BigInt.asUintN(64, 2n << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)))) {
    mantissa = BigInt.asUintN(64, BigInt.asIntN(64, mantissa) >> BigInt(1 & 63));
    exponent = exponent + 1 | 0;
    if ((exponent - _M0FPC28internal7strconv12double__info.bias | 0) >= ((1 << _M0FPC28internal7strconv12double__info.exponent_bits) - 1 | 0)) {
      const _bind$4 = _M0FPC28internal7strconv10range__errGuE();
      if (_bind$4.$tag === 1) {
        const _ok = _bind$4;
        _ok._0;
      } else {
        return _bind$4;
      }
    }
  }
  if (BigInt.asUintN(64, BigInt.asUintN(64, mantissa & BigInt.asUintN(64, 1n << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)))) === BigInt.asUintN(64, 0n)) {
    exponent = _M0FPC28internal7strconv12double__info.bias;
  }
  const bits = _M0FPC28internal7strconv14assemble__bits(mantissa, exponent, self.negative);
  return new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok($i64_reinterpret_f64(bits));
}
function _M0FPC28internal7strconv17pow10__fast__path(exponent) {
  return _M0MPC15array13ReadOnlyArray2atGdE(_M0FPC28internal7strconv5table, exponent & 31);
}
function _M0MPC28internal7strconv6Number14is__fast__path(self) {
  return BigInt.asIntN(64, _M0FPC28internal7strconv25min__exponent__fast__path) <= BigInt.asIntN(64, self.exponent) && (BigInt.asIntN(64, self.exponent) <= BigInt.asIntN(64, _M0FPC28internal7strconv36max__exponent__disguised__fast__path) && (BigInt.asUintN(64, self.mantissa) <= BigInt.asUintN(64, _M0FPC28internal7strconv25max__mantissa__fast__path) && !self.many_digits));
}
function _M0MPC28internal7strconv6Number15try__fast__path(self) {
  if (_M0MPC28internal7strconv6Number14is__fast__path(self)) {
    let value;
    if (BigInt.asIntN(64, self.exponent) <= BigInt.asIntN(64, _M0FPC28internal7strconv25max__exponent__fast__path)) {
      const value$2 = $f64_convert_i64_u(BigInt.asUintN(64, self.mantissa));
      value = BigInt.asIntN(64, self.exponent) < BigInt.asIntN(64, 0n) ? value$2 / _M0FPC28internal7strconv17pow10__fast__path(-(Number(BigInt.asIntN(32, self.exponent)) | 0) | 0) : value$2 * _M0FPC28internal7strconv17pow10__fast__path(Number(BigInt.asIntN(32, self.exponent)) | 0);
    } else {
      const shift = BigInt.asUintN(64, self.exponent - _M0FPC28internal7strconv25max__exponent__fast__path);
      const _bind$4 = _M0FPC28internal7strconv12checked__mul(self.mantissa, _M0MPC15array13ReadOnlyArray2atGmE(_M0FPC28internal7strconv10int__pow10, Number(BigInt.asIntN(32, shift)) | 0));
      if (_bind$4 === undefined) {
        return _M0DTPC16option6OptionGdE4None__;
      } else {
        const _Some = _bind$4;
        const _mantissa = _Some;
        if (BigInt.asUintN(64, _mantissa) > BigInt.asUintN(64, _M0FPC28internal7strconv25max__mantissa__fast__path)) {
          return _M0DTPC16option6OptionGdE4None__;
        }
        value = $f64_convert_i64_u(BigInt.asUintN(64, _mantissa)) * _M0FPC28internal7strconv17pow10__fast__path(Number(BigInt.asIntN(32, _M0FPC28internal7strconv25max__exponent__fast__path)) | 0);
      }
    }
    if (self.negative) {
      value = -value;
    }
    return new _M0DTPC16option6OptionGdE4Some(value);
  } else {
    return _M0DTPC16option6OptionGdE4None__;
  }
}
function _M0FPC28internal7strconv13parse__double(str) {
  if (!_M0MPC16string10StringView9is__empty(str)) {
    if (_M0FPC28internal7strconv17check__underscore(str)) {
      const _bind$4 = _M0FPC28internal7strconv13parse__number(str);
      let _bind$5;
      if (_bind$4.$tag === 1) {
        const _ok = _bind$4;
        _bind$5 = _ok._0;
      } else {
        return _bind$4;
      }
      if (_bind$5 === undefined) {
        return _M0FPC28internal7strconv15parse__inf__nan(str);
      } else {
        const _Some = _bind$5;
        const _num = _Some;
        const _bind$6 = _M0MPC28internal7strconv6Number15try__fast__path(_num);
        if (_bind$6.$tag === 1) {
          const _Some$2 = _bind$6;
          const _value = _Some$2._0;
          return new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(_value);
        } else {
          const fast = _num.many_digits ? _M0FPC16double14not__a__number : _M0FPC28internal7strconv20try__eisel__lemire64(_num.mantissa, _num.exponent, _num.negative);
          if (_M0MPC16double6Double7is__nan(fast)) {
            const _bind$7 = _M0FPC28internal7strconv20parse__decimal__priv(str);
            let _tmp;
            if (_bind$7.$tag === 1) {
              const _ok = _bind$7;
              _tmp = _ok._0;
            } else {
              return _bind$7;
            }
            return _M0MPC28internal7strconv7Decimal16to__double__priv(_tmp);
          } else {
            return new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(fast);
          }
        }
      }
    } else {
      return _M0FPC28internal7strconv11syntax__errGdE();
    }
  } else {
    return _M0FPC28internal7strconv11syntax__errGdE();
  }
}
function _M0IPC14json10ParseErrorPC15debug5Debug8to__reprGRPC14json10ParseErrorE(_x_813) {
  switch (_x_813.$tag) {
    case 8: {
      const _InvalidChar = _x_813;
      const _$42$arg_814 = _InvalidChar._0;
      const _$42$arg_815 = _InvalidChar._1;
      return _M0MPC15debug4Repr4ctor("InvalidChar", [{ _0: undefined, _1: _M0IPC14json8PositionPC15debug5Debug8to__repr(_$42$arg_814) }, { _0: undefined, _1: _M0IPC14char4CharPC15debug5Debug8to__repr(_$42$arg_815) }]);
    }
    case 7: {
      return _M0MPC15debug4Repr4ctor("InvalidEof", []);
    }
    case 6: {
      const _InvalidNumber = _x_813;
      const _$42$arg_816 = _InvalidNumber._0;
      const _$42$arg_817 = _InvalidNumber._1;
      return _M0MPC15debug4Repr4ctor("InvalidNumber", [{ _0: undefined, _1: _M0IPC14json8PositionPC15debug5Debug8to__repr(_$42$arg_816) }, { _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_$42$arg_817) }]);
    }
    case 5: {
      const _InvalidIdentEscape = _x_813;
      const _$42$arg_818 = _InvalidIdentEscape._0;
      return _M0MPC15debug4Repr4ctor("InvalidIdentEscape", [{ _0: undefined, _1: _M0IPC14json8PositionPC15debug5Debug8to__repr(_$42$arg_818) }]);
    }
    default: {
      return _M0MPC15debug4Repr4ctor("DepthLimitExceeded", []);
    }
  }
}
function _M0IPC14json8PositionPC15debug5Debug8to__repr(_x_774) {
  const _bind$4 = [{ _0: "line", _1: _M0IPC13int3IntPC15debug5Debug8to__repr(_x_774.line) }, { _0: "column", _1: _M0IPC13int3IntPC15debug5Debug8to__repr(_x_774.column) }];
  return _M0MPC15debug4Repr6record(_M0MPB3Map3MapGsRPC15debug4ReprE(new _M0TPB9ArrayViewGUsRPC15debug4ReprEE(_bind$4, 0, 2), undefined));
}
function _M0FPC14json20offset__to__position(input, offset) {
  const _bind$4 = _M0MPC16string10StringView11code__units(input);
  const _bind$5 = _bind$4.end - _bind$4.start | 0;
  if (offset < 0 || offset > _bind$5) {
    $panic();
  }
  const _bind$6 = new _M0TPB9ArrayViewGkE(_bind$4.buf, _bind$4.start, offset + _bind$4.start | 0);
  const _bind$7 = _bind$6.end - _bind$6.start | 0;
  let _tmp = 0;
  let _tmp$2 = 1;
  let _tmp$3 = 0;
  while (true) {
    const _ = _tmp;
    const line = _tmp$2;
    const column = _tmp$3;
    if (_ < _bind$7) {
      const code_unit = _bind$6.buf[_bind$6.start + _ | 0];
      if (_M0IPC16uint166UInt16PB2Eq5equal(code_unit, 10)) {
        _tmp = _ + 1 | 0;
        _tmp$2 = line + 1 | 0;
        _tmp$3 = 0;
        continue;
      } else {
        _tmp = _ + 1 | 0;
        _tmp$3 = column + 1 | 0;
        continue;
      }
    } else {
      return new _M0TPC14json8Position(line, column);
    }
  }
}
function _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, shift) {
  const offset = ctx.offset + shift | 0;
  return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE3Err(new _M0DTPC15error5Error52moonbitlang_2fcore_2fjson_2eParseError_2eInvalidChar(_M0FPC14json20offset__to__position(ctx.input, offset), _M0MPC16option6Option10unwrap__orGcE(_M0MPC16string10StringView9get__char(ctx.input, offset), 65533)));
}
function _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, shift) {
  const offset = ctx.offset + shift | 0;
  return new _M0DTPC16result6ResultGuRPC14json10ParseErrorE3Err(new _M0DTPC15error5Error52moonbitlang_2fcore_2fjson_2eParseError_2eInvalidChar(_M0FPC14json20offset__to__position(ctx.input, offset), _M0MPC16option6Option10unwrap__orGcE(_M0MPC16string10StringView9get__char(ctx.input, offset), 65533)));
}
function _M0MPC14json12ParseContext21invalid__char_2einnerGiE(ctx, shift) {
  const offset = ctx.offset + shift | 0;
  return new _M0DTPC16result6ResultGiRPC14json10ParseErrorE3Err(new _M0DTPC15error5Error52moonbitlang_2fcore_2fjson_2eParseError_2eInvalidChar(_M0FPC14json20offset__to__position(ctx.input, offset), _M0MPC16option6Option10unwrap__orGcE(_M0MPC16string10StringView9get__char(ctx.input, offset), 65533)));
}
function _M0MPC14json12ParseContext21lex__skip__whitespace(ctx) {
  const end = ctx.end_offset;
  let _tmp;
  let _tmp$2 = ctx.offset;
  _L: while (true) {
    const offset = _tmp$2;
    if (offset >= end) {
      _tmp = offset;
      break;
    }
    _L$2: {
      const _bind$4 = ctx.input;
      const _bind$5 = _bind$4.str.charCodeAt(_bind$4.start + offset | 0);
      switch (_bind$5) {
        case 32: {
          break _L$2;
        }
        case 9: {
          break _L$2;
        }
        case 13: {
          break _L$2;
        }
        case 10: {
          break _L$2;
        }
        default: {
          _tmp = offset;
          break _L;
        }
      }
    }
    _tmp$2 = offset + 1 | 0;
    continue;
  }
  ctx.offset = _tmp;
}
function _M0MPC14json12ParseContext4make(input) {
  return new _M0TPC14json12ParseContext(0, input, input.end - input.start | 0);
}
function _M0MPC14json12ParseContext19expect__ascii__char(ctx, c) {
  if (ctx.offset < ctx.end_offset) {
    const _bind$4 = ctx.input;
    const c1 = _bind$4.str.charCodeAt(_bind$4.start + ctx.offset | 0);
    ctx.offset = ctx.offset + 1 | 0;
    return c !== c1 ? _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, -1) : new _M0DTPC16result6ResultGuRPC14json10ParseErrorE2Ok(undefined);
  } else {
    return new _M0DTPC16result6ResultGuRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  }
}
function _M0FPC14json12checked__mul(a, b) {
  if (BigInt.asUintN(64, a) === BigInt.asUintN(64, 0n) || BigInt.asUintN(64, b) === BigInt.asUintN(64, 0n)) {
    return _M0FPC14json12checked__mulN6constrS1891;
  }
  if (BigInt.asUintN(64, a) === BigInt.asUintN(64, 1n)) {
    return b;
  }
  if (BigInt.asUintN(64, b) === BigInt.asUintN(64, 1n)) {
    return a;
  }
  if ($i64_clz(b) === 0 || $i64_clz(a) === 0) {
    return undefined;
  }
  if (b === 0n) {
    $panic();
  }
  const quotient = BigInt.asUintN(64, BigInt.asUintN(64, 18446744073709551615n) / BigInt.asUintN(64, b));
  return BigInt.asUintN(64, a) > BigInt.asUintN(64, quotient) ? undefined : BigInt.asUintN(64, a * b);
}
function _M0FPC14json23json__pow10__fast__path(exponent) {
  return _M0MPC15array13ReadOnlyArray2atGdE(_M0FPC14json12pow10__table, exponent & 31);
}
function _M0MPC14json14JsonNumberScan17try__fast__double(self) {
  if (BigInt.asUintN(64, self.mantissa) === BigInt.asUintN(64, 0n)) {
    return self.negative ? -0 : 0;
  }
  if (self.many_digits || (BigInt.asIntN(64, self.exponent) < BigInt.asIntN(64, 18446744073709551594n) || (BigInt.asIntN(64, self.exponent) > BigInt.asIntN(64, 37n) || BigInt.asUintN(64, self.mantissa) > BigInt.asUintN(64, 9007199254740992n)))) {
    return _M0FPC16double14not__a__number;
  }
  let value;
  if (BigInt.asIntN(64, self.exponent) <= BigInt.asIntN(64, 22n)) {
    const value$2 = $f64_convert_i64_u(BigInt.asUintN(64, self.mantissa));
    value = BigInt.asIntN(64, self.exponent) < BigInt.asIntN(64, 0n) ? value$2 / _M0FPC14json23json__pow10__fast__path(-(Number(BigInt.asIntN(32, self.exponent)) | 0) | 0) : value$2 * _M0FPC14json23json__pow10__fast__path(Number(BigInt.asIntN(32, self.exponent)) | 0);
  } else {
    const shift = BigInt.asUintN(64, self.exponent - 22n);
    const _bind$4 = _M0FPC14json12checked__mul(self.mantissa, _M0MPC15array13ReadOnlyArray2atGmE(_M0FPC14json17int__pow10__table, Number(BigInt.asIntN(32, shift)) | 0));
    if (_bind$4 === undefined) {
      return _M0FPC16double14not__a__number;
    } else {
      const _Some = _bind$4;
      const _mantissa = _Some;
      if (BigInt.asUintN(64, _mantissa) > BigInt.asUintN(64, 9007199254740992n)) {
        return _M0FPC16double14not__a__number;
      }
      value = $f64_convert_i64_u(BigInt.asUintN(64, _mantissa)) * _M0FPC14json23json__pow10__fast__path(22);
    }
  }
  return self.negative ? -value : value;
}
function _M0MPC14json12ParseContext17lex__integer__end(ctx, start, end) {
  const _bind$4 = ctx.input;
  const negative = _M0IPC16uint166UInt16PB2Eq5equal(_bind$4.str.charCodeAt(_bind$4.start + start | 0), 45);
  const number_start = negative ? start + 1 | 0 : start;
  let _tmp = number_start;
  let _tmp$2 = 0n;
  while (true) {
    const i = _tmp;
    const acc = _tmp$2;
    if (i >= end) {
      const value = negative ? BigInt.asUintN(64, -acc) : acc;
      const _bind$5 = $f64_convert_i64(BigInt.asIntN(64, value));
      const _bind$6 = undefined;
      return new _M0TPC14json11LexedNumber(_bind$6, _bind$5);
    }
    const _bind$5 = ctx.input;
    const digit = BigInt.asUintN(64, BigInt(_bind$5.str.charCodeAt(_bind$5.start + i | 0) - 48 | 0));
    if (10n === 0n) {
      $panic();
    }
    if (BigInt.asIntN(64, acc) > BigInt.asIntN(64, BigInt.asUintN(64, BigInt.asIntN(64, BigInt.asUintN(64, 9007199254740991n - digit)) / BigInt.asIntN(64, 10n)))) {
      const s = _M0MPC16string10StringView12view_2einner(ctx.input, start, end);
      let _try_err;
      _L: {
        const _bind$6 = _M0FPC28internal7strconv13parse__double(s);
        let value;
        if (_bind$6.$tag === 1) {
          const _ok = _bind$6;
          value = _ok._0;
        } else {
          const _err = _bind$6;
          _try_err = _err._0;
          break _L;
        }
        const _bind$7 = s;
        return new _M0TPC14json11LexedNumber(_bind$7, value);
      }
      let _tmp$3;
      if (negative) {
        const _bind$6 = s;
        _tmp$3 = new _M0TPC14json11LexedNumber(_bind$6, _M0FPC16double13neg__infinity);
      } else {
        const _bind$6 = s;
        _tmp$3 = new _M0TPC14json11LexedNumber(_bind$6, _M0FPC16double8infinity);
      }
      return _tmp$3;
    }
    _tmp = i + 1 | 0;
    _tmp$2 = BigInt.asUintN(64, BigInt.asUintN(64, acc * 10n) + digit);
    continue;
  }
}
function _M0MPC14json12ParseContext18scan__json__number(ctx, start, end) {
  const _bind$4 = ctx.input;
  const negative = _M0IPC16uint166UInt16PB2Eq5equal(_bind$4.str.charCodeAt(_bind$4.start + start | 0), 45);
  let has_decimal = false;
  let has_exponent = false;
  let exponent_negative = false;
  let exponent_part = 0n;
  let fractional_digits = 0;
  let mantissa = 0n;
  let significant_digits = 0;
  let seen_nonzero = false;
  const _bind$5 = negative ? start + 1 | 0 : start;
  let _tmp = _bind$5;
  while (true) {
    const i = _tmp;
    if (i < end) {
      _L: {
        _L$2: {
          const _bind$6 = ctx.input;
          const _bind$7 = _bind$6.str.charCodeAt(_bind$6.start + i | 0);
          if (_bind$7 >= 48 && _bind$7 <= 57) {
            const digit = _bind$7 - 48 | 0;
            if (has_exponent) {
              if (BigInt.asIntN(64, exponent_part) < BigInt.asIntN(64, 100000n)) {
                const next_exponent = BigInt.asUintN(64, BigInt.asUintN(64, exponent_part * 10n) + BigInt.asUintN(64, BigInt(digit)));
                exponent_part = BigInt.asIntN(64, next_exponent) > BigInt.asIntN(64, 100000n) ? 100000n : next_exponent;
              }
            } else {
              if (has_decimal) {
                fractional_digits = fractional_digits + 1 | 0;
              }
              if (digit !== 0 || seen_nonzero) {
                seen_nonzero = true;
                significant_digits = significant_digits + 1 | 0;
                if (significant_digits <= 19) {
                  mantissa = BigInt.asUintN(64, BigInt.asUintN(64, mantissa * 10n) + BigInt.asUintN(64, BigInt(digit >>> 0)));
                }
              }
            }
          } else {
            if (_bind$7 === 46) {
              has_decimal = true;
            } else {
              if (_bind$7 === 101) {
                break _L$2;
              } else {
                if (_bind$7 === 69) {
                  break _L$2;
                }
              }
            }
          }
          break _L;
        }
        has_exponent = true;
        if ((i + 1 | 0) < end) {
          const _bind$6 = ctx.input;
          const next = _bind$6.str.charCodeAt(_bind$6.start + (i + 1 | 0) | 0);
          if (_M0IPC16uint166UInt16PB2Eq5equal(next, 45)) {
            exponent_negative = true;
          }
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const exponent_part$2 = exponent_negative ? BigInt.asUintN(64, -exponent_part) : exponent_part;
  return new _M0TPC14json14JsonNumberScan(negative, !has_decimal && !has_exponent, mantissa, BigInt.asUintN(64, exponent_part$2 - BigInt.asUintN(64, BigInt(fractional_digits))), significant_digits > 19);
}
function _M0MPC14json12ParseContext16lex__number__end(ctx, start, end) {
  const scan = _M0MPC14json12ParseContext18scan__json__number(ctx, start, end);
  if (scan.is_integer) {
    if (!scan.many_digits && (BigInt.asUintN(64, scan.exponent) === BigInt.asUintN(64, 0n) && BigInt.asUintN(64, scan.mantissa) <= BigInt.asUintN(64, 9007199254740991n))) {
      const v = $f64_convert_i64(BigInt.asIntN(64, scan.mantissa));
      const value = scan.negative ? -v : v;
      const _bind$4 = undefined;
      return new _M0TPC14json11LexedNumber(_bind$4, value);
    }
    return _M0MPC14json12ParseContext17lex__integer__end(ctx, start, end);
  }
  const fast = _M0MPC14json14JsonNumberScan17try__fast__double(scan);
  if (!_M0MPC16double6Double7is__nan(fast)) {
    const _bind$4 = undefined;
    return new _M0TPC14json11LexedNumber(_bind$4, fast);
  }
  if (!scan.many_digits) {
    const fast$2 = _M0FPC28internal7strconv20try__eisel__lemire64(scan.mantissa, scan.exponent, scan.negative);
    if (!_M0MPC16double6Double7is__nan(fast$2)) {
      const _bind$4 = undefined;
      return new _M0TPC14json11LexedNumber(_bind$4, fast$2);
    }
  }
  const s = _M0MPC16string10StringView12view_2einner(ctx.input, start, end);
  let _try_err;
  _L: {
    const _bind$4 = _M0FPC28internal7strconv13parse__double(s);
    let d;
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      d = _ok._0;
    } else {
      const _err = _bind$4;
      _try_err = _err._0;
      break _L;
    }
    const _bind$5 = undefined;
    return new _M0TPC14json11LexedNumber(_bind$5, d);
  }
  if (scan.negative) {
    const _bind$4 = s;
    return new _M0TPC14json11LexedNumber(_bind$4, _M0FPC16double13neg__infinity);
  } else {
    const _bind$4 = s;
    return new _M0TPC14json11LexedNumber(_bind$4, _M0FPC16double8infinity);
  }
}
function _M0MPC14json12ParseContext10read__char(ctx) {
  if (ctx.offset < ctx.end_offset) {
    const _bind$4 = ctx.input;
    const c1 = _bind$4.str.charCodeAt(_bind$4.start + ctx.offset | 0);
    ctx.offset = ctx.offset + 1 | 0;
    if (c1 >= 55296 && c1 <= 56319) {
      if (ctx.offset < ctx.end_offset) {
        const _bind$5 = ctx.input;
        const c2 = _bind$5.str.charCodeAt(_bind$5.start + ctx.offset | 0);
        if (c2 >= 56320 && c2 <= 57343) {
          ctx.offset = ctx.offset + 1 | 0;
          const c3 = ((c1 << 10) + c2 | 0) - 56613888 | 0;
          return c3;
        }
      }
    }
    return c1;
  } else {
    return -1;
  }
}
function _M0MPC14json12ParseContext31lex__decimal__exponent__integer(ctx, start) {
  while (true) {
    const _bind$4 = _M0MPC14json12ParseContext10read__char(ctx);
    if (_bind$4 === -1) {
      return _M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset);
    } else {
      const _Some = _bind$4;
      const _x = _Some;
      if (_x >= 48 && _x <= 57) {
        continue;
      } else {
        ctx.offset = ctx.offset - 1 | 0;
        return _M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset);
      }
    }
  }
}
function _M0MPC14json12ParseContext28lex__decimal__exponent__sign(ctx, start) {
  const _bind$4 = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind$4 === -1) {
    return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind$4;
    const _x = _Some;
    if (_x >= 48 && _x <= 57) {
      return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext31lex__decimal__exponent__integer(ctx, start));
    } else {
      ctx.offset = ctx.offset - 1 | 0;
      return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, 0);
    }
  }
}
function _M0MPC14json12ParseContext22lex__decimal__exponent(ctx, start) {
  _L: {
    const _bind$4 = _M0MPC14json12ParseContext10read__char(ctx);
    if (_bind$4 === -1) {
      return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
    } else {
      const _Some = _bind$4;
      const _x = _Some;
      if (_x === 43) {
        break _L;
      } else {
        if (_x === 45) {
          break _L;
        } else {
          if (_x >= 48 && _x <= 57) {
            return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext31lex__decimal__exponent__integer(ctx, start));
          } else {
            ctx.offset = ctx.offset - 1 | 0;
            return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, 0);
          }
        }
      }
    }
  }
  const _bind$4 = _M0MPC14json12ParseContext28lex__decimal__exponent__sign(ctx, start);
  let _tmp;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _tmp = _ok._0;
  } else {
    return _bind$4;
  }
  return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_tmp);
}
function _M0MPC14json12ParseContext22lex__decimal__fraction(ctx, start) {
  while (true) {
    _L: {
      const _bind$4 = _M0MPC14json12ParseContext10read__char(ctx);
      if (_bind$4 === -1) {
        return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
      } else {
        const _Some = _bind$4;
        const _x = _Some;
        if (_x === 101) {
          break _L;
        } else {
          if (_x === 69) {
            break _L;
          } else {
            if (_x >= 48 && _x <= 57) {
              continue;
            } else {
              ctx.offset = ctx.offset - 1 | 0;
              return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
            }
          }
        }
      }
    }
    const _bind$4 = _M0MPC14json12ParseContext22lex__decimal__exponent(ctx, start);
    let _tmp;
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      _tmp = _ok._0;
    } else {
      return _bind$4;
    }
    return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_tmp);
  }
}
function _M0MPC14json12ParseContext19lex__decimal__point(ctx, start) {
  const _bind$4 = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind$4 === -1) {
    return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind$4;
    const _x = _Some;
    return _x >= 48 && _x <= 57 ? _M0MPC14json12ParseContext22lex__decimal__fraction(ctx, start) : _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
  }
}
function _M0MPC14json12ParseContext21lex__decimal__integer(ctx, start) {
  while (true) {
    _L: {
      const _bind$4 = _M0MPC14json12ParseContext10read__char(ctx);
      if (_bind$4 === -1) {
        return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
      } else {
        const _Some = _bind$4;
        const _x = _Some;
        if (_x === 46) {
          const _bind$5 = _M0MPC14json12ParseContext19lex__decimal__point(ctx, start);
          let _tmp;
          if (_bind$5.$tag === 1) {
            const _ok = _bind$5;
            _tmp = _ok._0;
          } else {
            return _bind$5;
          }
          return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_tmp);
        } else {
          if (_x === 101) {
            break _L;
          } else {
            if (_x === 69) {
              break _L;
            } else {
              if (_x >= 48 && _x <= 57) {
                continue;
              } else {
                ctx.offset = ctx.offset - 1 | 0;
                return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
              }
            }
          }
        }
      }
    }
    const _bind$4 = _M0MPC14json12ParseContext22lex__decimal__exponent(ctx, start);
    let _tmp;
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      _tmp = _ok._0;
    } else {
      return _bind$4;
    }
    return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_tmp);
  }
}
function _M0MPC14json12ParseContext16lex__hex__digits(ctx, n) {
  let _tmp;
  let _tmp$2 = 0;
  let _tmp$3 = 0;
  while (true) {
    const _ = _tmp$2;
    const r = _tmp$3;
    if (_ < n) {
      const _bind$4 = _M0MPC14json12ParseContext10read__char(ctx);
      let d;
      if (_bind$4 === -1) {
        return new _M0DTPC16result6ResultGiRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
      } else {
        const _Some = _bind$4;
        const _x = _Some;
        if (_x >= 48 && _x <= 57) {
          d = _x - 48 | 0;
        } else {
          if (_x >= 65 && _x <= 70) {
            d = (_x - 65 | 0) + 10 | 0;
          } else {
            if (_x >= 97 && _x <= 102) {
              d = (_x - 97 | 0) + 10 | 0;
            } else {
              const _bind$5 = _M0MPC14json12ParseContext21invalid__char_2einnerGiE(ctx, -_M0MPC14char4Char10utf16__len(_x) | 0);
              if (_bind$5.$tag === 1) {
                const _ok = _bind$5;
                d = _ok._0;
              } else {
                return _bind$5;
              }
            }
          }
        }
      }
      _tmp$2 = _ + 1 | 0;
      _tmp$3 = r << 4 | d;
      continue;
    } else {
      _tmp = r;
      break;
    }
  }
  return new _M0DTPC16result6ResultGiRPC14json10ParseErrorE2Ok(_tmp);
}
function _M0MPC14json12ParseContext19unpaired__surrogateGuE(ctx, escape_start) {
  return _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, escape_start - ctx.offset | 0);
}
function _M0MPC14json12ParseContext17lex__string__slowN5flushS353(_env, end) {
  const ctx = _env._2;
  const start = _env._1;
  const buf = _env._0;
  if (start.val > 0 && end > start.val) {
    _M0IPB13StringBuilderPB6Logger11write__view(buf, _M0MPC16string10StringView11sub_2einner(ctx.input, start.val, end));
    return;
  } else {
    return;
  }
}
function _M0MPC14json12ParseContext17lex__string__slow(ctx) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const start = new _M0TPB8MutLocalGiE(ctx.offset);
  const _env = { _0: buf, _1: start, _2: ctx };
  _L: while (true) {
    const _bind$4 = _M0MPC14json12ParseContext10read__char(ctx);
    if (_bind$4 === -1) {
      return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
    } else {
      const _Some = _bind$4;
      const _x = _Some;
      switch (_x) {
        case 34: {
          _M0MPC14json12ParseContext17lex__string__slowN5flushS353(_env, ctx.offset - 1 | 0);
          break _L;
        }
        case 92: {
          _M0MPC14json12ParseContext17lex__string__slowN5flushS353(_env, ctx.offset - 1 | 0);
          const _bind$5 = _M0MPC14json12ParseContext10read__char(ctx);
          if (_bind$5 === -1) {
            return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
          } else {
            const _Some$2 = _bind$5;
            const _x$2 = _Some$2;
            switch (_x$2) {
              case 98: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 8);
                break;
              }
              case 102: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 12);
                break;
              }
              case 110: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 10);
                break;
              }
              case 114: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 13);
                break;
              }
              case 116: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 9);
                break;
              }
              case 34: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 34);
                break;
              }
              case 92: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 92);
                break;
              }
              case 47: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 47);
                break;
              }
              case 117: {
                const escape_start = ctx.offset - 2 | 0;
                const _bind$6 = _M0MPC14json12ParseContext16lex__hex__digits(ctx, 4);
                let c;
                if (_bind$6.$tag === 1) {
                  const _ok = _bind$6;
                  c = _ok._0;
                } else {
                  return _bind$6;
                }
                if (c >= 55296 && c <= 56319) {
                  const _bind$7 = _M0MPC14json12ParseContext10read__char(ctx);
                  if (_bind$7 === -1) {
                    return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
                  } else {
                    const _Some$3 = _bind$7;
                    const _x$3 = _Some$3;
                    if (_x$3 === 92) {
                    } else {
                      const _bind$8 = _M0MPC14json12ParseContext19unpaired__surrogateGuE(ctx, escape_start);
                      if (_bind$8.$tag === 1) {
                        const _ok = _bind$8;
                        _ok._0;
                      } else {
                        return _bind$8;
                      }
                    }
                  }
                  const _bind$8 = _M0MPC14json12ParseContext10read__char(ctx);
                  if (_bind$8 === -1) {
                    return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
                  } else {
                    const _Some$3 = _bind$8;
                    const _x$3 = _Some$3;
                    if (_x$3 === 117) {
                    } else {
                      const _bind$9 = _M0MPC14json12ParseContext19unpaired__surrogateGuE(ctx, escape_start);
                      if (_bind$9.$tag === 1) {
                        const _ok = _bind$9;
                        _ok._0;
                      } else {
                        return _bind$9;
                      }
                    }
                  }
                  const _bind$9 = _M0MPC14json12ParseContext16lex__hex__digits(ctx, 4);
                  let c2;
                  if (_bind$9.$tag === 1) {
                    const _ok = _bind$9;
                    c2 = _ok._0;
                  } else {
                    return _bind$9;
                  }
                  if (c2 >= 56320 && c2 <= 57343) {
                    const combined = ((c << 10) + c2 | 0) - 56613888 | 0;
                    _M0IPB13StringBuilderPB6Logger11write__char(buf, combined);
                  } else {
                    const _bind$10 = _M0MPC14json12ParseContext19unpaired__surrogateGuE(ctx, escape_start);
                    if (_bind$10.$tag === 1) {
                      const _ok = _bind$10;
                      _ok._0;
                    } else {
                      return _bind$10;
                    }
                  }
                } else {
                  if (c >= 56320 && c <= 57343) {
                    const _bind$7 = _M0MPC14json12ParseContext19unpaired__surrogateGuE(ctx, escape_start);
                    if (_bind$7.$tag === 1) {
                      const _ok = _bind$7;
                      _ok._0;
                    } else {
                      return _bind$7;
                    }
                  } else {
                    _M0IPB13StringBuilderPB6Logger11write__char(buf, c);
                  }
                }
                break;
              }
              default: {
                const _bind$7 = _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, -_M0MPC14char4Char10utf16__len(_x$2) | 0);
                if (_bind$7.$tag === 1) {
                  const _ok = _bind$7;
                  _ok._0;
                } else {
                  return _bind$7;
                }
              }
            }
          }
          start.val = ctx.offset;
          break;
        }
        default: {
          if (_x < 32) {
            const _bind$6 = _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, -1);
            if (_bind$6.$tag === 1) {
              const _ok = _bind$6;
              _ok._0;
            } else {
              return _bind$6;
            }
          } else {
            continue _L;
          }
        }
      }
    }
    continue;
  }
  return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE2Ok(_M0MPB13StringBuilder10to__string(buf));
}
function _M0MPC14json12ParseContext11lex__string(ctx) {
  const string_start = ctx.offset;
  const _bind$4 = ctx.end_offset;
  let _tmp = string_start;
  while (true) {
    const i = _tmp;
    if (i < _bind$4) {
      const _bind$5 = ctx.input;
      const c = _bind$5.str.charCodeAt(_bind$5.start + i | 0);
      if (_M0IPC16uint166UInt16PB2Eq5equal(c, 34)) {
        ctx.offset = i + 1 | 0;
        return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE2Ok(_M0MPC16string10StringView9to__owned(_M0MPC16string10StringView12view_2einner(ctx.input, string_start, i)));
      } else {
        if (_M0IPC16uint166UInt16PB2Eq5equal(c, 92)) {
          const _bind$6 = _M0MPC14json12ParseContext17lex__string__slow(ctx);
          let _tmp$2;
          if (_bind$6.$tag === 1) {
            const _ok = _bind$6;
            _tmp$2 = _ok._0;
          } else {
            return _bind$6;
          }
          return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE2Ok(_tmp$2);
        } else {
          if (c < 32) {
            ctx.offset = i + 1 | 0;
            const _bind$6 = _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, -1);
            if (_bind$6.$tag === 1) {
              const _ok = _bind$6;
              _ok._0;
            } else {
              return _bind$6;
            }
          }
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
}
function _M0MPC14json12ParseContext9lex__zero(ctx, start) {
  _L: {
    const _bind$4 = _M0MPC14json12ParseContext10read__char(ctx);
    if (_bind$4 === -1) {
      return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
    } else {
      const _Some = _bind$4;
      const _x = _Some;
      if (_x === 46) {
        return _M0MPC14json12ParseContext19lex__decimal__point(ctx, start);
      } else {
        if (_x === 101) {
          break _L;
        } else {
          if (_x === 69) {
            break _L;
          } else {
            if (_x >= 48 && _x <= 57) {
              ctx.offset = ctx.offset - 1 | 0;
              return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, 0);
            } else {
              ctx.offset = ctx.offset - 1 | 0;
              return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
            }
          }
        }
      }
    }
  }
  return _M0MPC14json12ParseContext22lex__decimal__exponent(ctx, start);
}
function _M0MPC14json12ParseContext10lex__value(ctx, allow_rbracket) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind$4 = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind$4 === -1) {
    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind$4;
    const _x = _Some;
    if (_x === 123) {
      return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token6LBrace__);
    } else {
      if (_x === 91) {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token8LBracket__);
      } else {
        if (_x === 93) {
          if (allow_rbracket) {
            return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token8RBracket__);
          } else {
            return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
          }
        } else {
          if (_x === 110) {
            const _bind$5 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 117);
            if (_bind$5.$tag === 1) {
              const _ok = _bind$5;
              _ok._0;
            } else {
              return _bind$5;
            }
            const _bind$6 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 108);
            if (_bind$6.$tag === 1) {
              const _ok = _bind$6;
              _ok._0;
            } else {
              return _bind$6;
            }
            const _bind$7 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 108);
            if (_bind$7.$tag === 1) {
              const _ok = _bind$7;
              _ok._0;
            } else {
              return _bind$7;
            }
            return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token4Null__);
          } else {
            if (_x === 116) {
              const _bind$5 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 114);
              if (_bind$5.$tag === 1) {
                const _ok = _bind$5;
                _ok._0;
              } else {
                return _bind$5;
              }
              const _bind$6 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 117);
              if (_bind$6.$tag === 1) {
                const _ok = _bind$6;
                _ok._0;
              } else {
                return _bind$6;
              }
              const _bind$7 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 101);
              if (_bind$7.$tag === 1) {
                const _ok = _bind$7;
                _ok._0;
              } else {
                return _bind$7;
              }
              return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token4True__);
            } else {
              if (_x === 102) {
                const _bind$5 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 97);
                if (_bind$5.$tag === 1) {
                  const _ok = _bind$5;
                  _ok._0;
                } else {
                  return _bind$5;
                }
                const _bind$6 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 108);
                if (_bind$6.$tag === 1) {
                  const _ok = _bind$6;
                  _ok._0;
                } else {
                  return _bind$6;
                }
                const _bind$7 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 115);
                if (_bind$7.$tag === 1) {
                  const _ok = _bind$7;
                  _ok._0;
                } else {
                  return _bind$7;
                }
                const _bind$8 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 101);
                if (_bind$8.$tag === 1) {
                  const _ok = _bind$8;
                  _ok._0;
                } else {
                  return _bind$8;
                }
                return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token5False__);
              } else {
                if (_x === 45) {
                  const _bind$5 = _M0MPC14json12ParseContext10read__char(ctx);
                  if (_bind$5 === -1) {
                    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
                  } else {
                    const _Some$2 = _bind$5;
                    const _x$2 = _Some$2;
                    if (_x$2 === 48) {
                      const _bind$6 = _M0MPC14json12ParseContext9lex__zero(ctx, ctx.offset - 2 | 0);
                      let _bind$7;
                      if (_bind$6.$tag === 1) {
                        const _ok = _bind$6;
                        _bind$7 = _ok._0;
                      } else {
                        return _bind$6;
                      }
                      const _n = _bind$7.value;
                      const _repr = _bind$7.repr;
                      return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6Number(_n, _M0MPC16option6Option3mapGRPC16string10StringViewsE(_repr, (repr) => _M0MPC16string10StringView9to__owned(repr))));
                    } else {
                      if (_x$2 >= 49 && _x$2 <= 57) {
                        const _bind$6 = _M0MPC14json12ParseContext21lex__decimal__integer(ctx, ctx.offset - 2 | 0);
                        let _bind$7;
                        if (_bind$6.$tag === 1) {
                          const _ok = _bind$6;
                          _bind$7 = _ok._0;
                        } else {
                          return _bind$6;
                        }
                        const _n = _bind$7.value;
                        const _repr = _bind$7.repr;
                        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6Number(_n, _M0MPC16option6Option3mapGRPC16string10StringViewsE(_repr, (repr) => _M0MPC16string10StringView9to__owned(repr))));
                      } else {
                        return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
                      }
                    }
                  }
                } else {
                  if (_x === 48) {
                    const _bind$5 = _M0MPC14json12ParseContext9lex__zero(ctx, ctx.offset - 1 | 0);
                    let _bind$6;
                    if (_bind$5.$tag === 1) {
                      const _ok = _bind$5;
                      _bind$6 = _ok._0;
                    } else {
                      return _bind$5;
                    }
                    const _n = _bind$6.value;
                    const _repr = _bind$6.repr;
                    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6Number(_n, _M0MPC16option6Option3mapGRPC16string10StringViewsE(_repr, (repr) => _M0MPC16string10StringView9to__owned(repr))));
                  } else {
                    if (_x >= 49 && _x <= 57) {
                      const _bind$5 = _M0MPC14json12ParseContext21lex__decimal__integer(ctx, ctx.offset - 1 | 0);
                      let _bind$6;
                      if (_bind$5.$tag === 1) {
                        const _ok = _bind$5;
                        _bind$6 = _ok._0;
                      } else {
                        return _bind$5;
                      }
                      const _n = _bind$6.value;
                      const _repr = _bind$6.repr;
                      return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6Number(_n, _M0MPC16option6Option3mapGRPC16string10StringViewsE(_repr, (repr) => _M0MPC16string10StringView9to__owned(repr))));
                    } else {
                      if (_x === 34) {
                        const _bind$5 = _M0MPC14json12ParseContext11lex__string(ctx);
                        let s;
                        if (_bind$5.$tag === 1) {
                          const _ok = _bind$5;
                          s = _ok._0;
                        } else {
                          return _bind$5;
                        }
                        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6String(s));
                      } else {
                        const shift = -_M0MPC14char4Char10utf16__len(_x) | 0;
                        return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, shift);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function _M0MPC14json12ParseContext24lex__after__array__value(ctx) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind$4 = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind$4 === -1) {
    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind$4;
    const _x = _Some;
    switch (_x) {
      case 93: {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token8RBracket__);
      }
      case 44: {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token5Comma__);
      }
      default: {
        return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
      }
    }
  }
}
function _M0MPC14json12ParseContext25lex__after__object__value(ctx) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind$4 = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind$4 === -1) {
    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind$4;
    const _x = _Some;
    switch (_x) {
      case 125: {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token6RBrace__);
      }
      case 44: {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token5Comma__);
      }
      default: {
        return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
      }
    }
  }
}
function _M0MPC14json12ParseContext26lex__after__property__name(ctx) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind$4 = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind$4 === -1) {
    return new _M0DTPC16result6ResultGuRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind$4;
    const _x = _Some;
    if (_x === 58) {
      return new _M0DTPC16result6ResultGuRPC14json10ParseErrorE2Ok(undefined);
    } else {
      return _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, -1);
    }
  }
}
function _M0MPC14json12ParseContext19lex__property__name(ctx) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind$4 = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind$4 === -1) {
    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind$4;
    const _x = _Some;
    switch (_x) {
      case 125: {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token6RBrace__);
      }
      case 34: {
        const _bind$5 = _M0MPC14json12ParseContext11lex__string(ctx);
        let s;
        if (_bind$5.$tag === 1) {
          const _ok = _bind$5;
          s = _ok._0;
        } else {
          return _bind$5;
        }
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6String(s));
      }
      default: {
        return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
      }
    }
  }
}
function _M0MPC14json12ParseContext20lex__property__name2(ctx) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind$4 = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind$4 === -1) {
    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind$4;
    const _x = _Some;
    if (_x === 34) {
      const _bind$5 = _M0MPC14json12ParseContext11lex__string(ctx);
      let s;
      if (_bind$5.$tag === 1) {
        const _ok = _bind$5;
        s = _ok._0;
      } else {
        return _bind$5;
      }
      return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6String(s));
    } else {
      return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
    }
  }
}
function _M0MPC14json12ParseContext12parse__value(ctx, remaining_available_depth) {
  const _bind$4 = _M0MPC14json12ParseContext10lex__value(ctx, false);
  let tok;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    tok = _ok._0;
  } else {
    return _bind$4;
  }
  return _M0MPC14json12ParseContext13parse__value2(ctx, tok, remaining_available_depth);
}
function _M0MPC14json12ParseContext13parse__value2(ctx, tok, remaining_available_depth) {
  _L: {
    switch (tok.$tag) {
      case 0: {
        return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_M0FPB4null);
      }
      case 1: {
        return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_M0MPC14json4Json7boolean(true));
      }
      case 2: {
        return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_M0MPC14json4Json7boolean(false));
      }
      case 3: {
        const _Number = tok;
        const _n = _Number._0;
        const _repr = _Number._1;
        return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_M0MPC14json4Json6number(_n, _repr));
      }
      case 4: {
        const _String = tok;
        const _s = _String._0;
        return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_M0MPC14json4Json6string(_s));
      }
      case 5: {
        return _M0MPC14json12ParseContext13parse__object(ctx, remaining_available_depth);
      }
      case 7: {
        return _M0MPC14json12ParseContext12parse__array(ctx, remaining_available_depth);
      }
      case 8: {
        break _L;
      }
      case 6: {
        break _L;
      }
      default: {
        break _L;
      }
    }
  }
  return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_M0FPC15abort5abortGRPB9ArrayViewGsEE("unreachable"));
}
function _M0MPC14json12ParseContext12parse__array(ctx, remaining_available_depth) {
  if (remaining_available_depth <= 0) {
    return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE3Err(_M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded__);
  }
  const child_remaining_available_depth = remaining_available_depth - 1 | 0;
  const vec = [];
  let _tmp;
  const _bind$4 = _M0MPC14json12ParseContext10lex__value(ctx, true);
  let _tmp$2;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _tmp$2 = _ok._0;
  } else {
    return _bind$4;
  }
  let _tmp$3 = _tmp$2;
  _L: while (true) {
    const x = _tmp$3;
    if (x.$tag === 8) {
      _tmp = _M0MPC14json4Json5array(vec);
      break;
    } else {
      const _bind$5 = _M0MPC14json12ParseContext13parse__value2(ctx, x, child_remaining_available_depth);
      let _tmp$4;
      if (_bind$5.$tag === 1) {
        const _ok = _bind$5;
        _tmp$4 = _ok._0;
      } else {
        return _bind$5;
      }
      _M0MPC15array5Array4pushGRPB4JsonE(vec, _tmp$4);
      const _bind$6 = _M0MPC14json12ParseContext24lex__after__array__value(ctx);
      let tok2;
      if (_bind$6.$tag === 1) {
        const _ok = _bind$6;
        tok2 = _ok._0;
      } else {
        return _bind$6;
      }
      switch (tok2.$tag) {
        case 9: {
          const _bind$7 = _M0MPC14json12ParseContext10lex__value(ctx, false);
          if (_bind$7.$tag === 1) {
            const _ok = _bind$7;
            _tmp$3 = _ok._0;
          } else {
            return _bind$7;
          }
          continue _L;
        }
        case 8: {
          _tmp = _M0MPC14json4Json5array(vec);
          break _L;
        }
        default: {
          _M0FPC15abort5abortGuE("unreachable");
        }
      }
    }
    continue;
  }
  return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_tmp);
}
function _M0MPC14json12ParseContext13parse__object(ctx, remaining_available_depth) {
  if (remaining_available_depth <= 0) {
    return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE3Err(_M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded__);
  }
  const child_remaining_available_depth = remaining_available_depth - 1 | 0;
  const _bind$4 = [];
  const map = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$4, 0, 0), undefined);
  let _tmp;
  const _bind$5 = _M0MPC14json12ParseContext19lex__property__name(ctx);
  let _tmp$2;
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _tmp$2 = _ok._0;
  } else {
    return _bind$5;
  }
  let _tmp$3 = _tmp$2;
  _L: while (true) {
    const x = _tmp$3;
    switch (x.$tag) {
      case 6: {
        _tmp = _M0MPC14json4Json6object(map);
        break _L;
      }
      case 4: {
        const _String = x;
        const _name = _String._0;
        const _bind$6 = _M0MPC14json12ParseContext26lex__after__property__name(ctx);
        if (_bind$6.$tag === 1) {
          const _ok = _bind$6;
          _ok._0;
        } else {
          return _bind$6;
        }
        const _bind$7 = _M0MPC14json12ParseContext12parse__value(ctx, child_remaining_available_depth);
        let _tmp$4;
        if (_bind$7.$tag === 1) {
          const _ok = _bind$7;
          _tmp$4 = _ok._0;
        } else {
          return _bind$7;
        }
        _M0MPB3Map3setGsRPB4JsonE(map, _name, _tmp$4);
        const _bind$8 = _M0MPC14json12ParseContext25lex__after__object__value(ctx);
        let _bind$9;
        if (_bind$8.$tag === 1) {
          const _ok = _bind$8;
          _bind$9 = _ok._0;
        } else {
          return _bind$8;
        }
        switch (_bind$9.$tag) {
          case 9: {
            const _bind$10 = _M0MPC14json12ParseContext20lex__property__name2(ctx);
            if (_bind$10.$tag === 1) {
              const _ok = _bind$10;
              _tmp$3 = _ok._0;
            } else {
              return _bind$10;
            }
            continue _L;
          }
          case 6: {
            _tmp = _M0MPC14json4Json6object(map);
            break _L;
          }
          default: {
            _M0FPC15abort5abortGuE("unreachable");
          }
        }
        break;
      }
      default: {
        _M0FPC15abort5abortGuE("unreachable");
      }
    }
    continue;
  }
  return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_tmp);
}
function _M0FPC14json13parse_2einner(input, max_nesting_depth) {
  const ctx = _M0MPC14json12ParseContext4make(input);
  const _bind$4 = _M0MPC14json12ParseContext12parse__value(ctx, max_nesting_depth);
  let val;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    val = _ok._0;
  } else {
    return _bind$4;
  }
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  return ctx.offset >= ctx.end_offset ? new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(val) : _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, 0);
}
function _M0FPC14json20need__escape__scalar(str, escape_slash, start, end) {
  let _tmp = start;
  while (true) {
    const i = _tmp;
    if (i < end) {
      const code = str.charCodeAt(i);
      if (_M0IPC16uint166UInt16PB2Eq5equal(code, 34) || (_M0IPC16uint166UInt16PB2Eq5equal(code, 92) || (code < 32 || escape_slash && _M0IPC16uint166UInt16PB2Eq5equal(code, 47)))) {
        return true;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function _M0FPC14json12need__escape(str, escape_slash) {
  return _M0FPC14json20need__escape__scalar(str, escape_slash, 0, str.length);
}
function _M0FPC14json14write__escaped(buf, str, escape_slash) {
  if (!_M0FPC14json12need__escape(str, escape_slash)) {
    _M0IPB13StringBuilderPB6Logger13write__string(buf, str);
    return undefined;
  }
  const _bind$4 = str.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$4) {
      const code = str.charCodeAt(_);
      switch (code) {
        case 34: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\\"");
          break;
        }
        case 92: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\\\");
          break;
        }
        case 47: {
          if (escape_slash) {
            _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\/");
          } else {
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 47);
          }
          break;
        }
        case 10: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\n");
          break;
        }
        case 13: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\r");
          break;
        }
        case 8: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\b");
          break;
        }
        case 9: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\t");
          break;
        }
        case 12: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\f");
          break;
        }
        default: {
          if (code < 32) {
            _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\u00");
            _M0IPB13StringBuilderPB6Logger13write__string(buf, _M0MPC14byte4Byte7to__hex(code & 255));
          } else {
            _M0IPB13StringBuilderPB6Logger11write__char(buf, _M0MPC16uint166UInt1616unsafe__to__char(code));
          }
        }
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPC14json13write__indent(buf, cache, level, indent) {
  while (true) {
    if (cache.length <= level) {
      if (cache.length >= 1) {
        const _last = cache[cache.length - 1 | 0];
        _M0MPC15array5Array4pushGRPB4JsonE(cache, `${_last}${_M0MPC16string6String6repeat(" ", indent)}`);
      } else {
        _M0MPC15array5Array4pushGRPB4JsonE(cache, "\n");
      }
      continue;
    } else {
      break;
    }
  }
  _M0IPB13StringBuilderPB6Logger13write__string(buf, _M0MPC15array5Array2atGsE(cache, level));
}
function _M0MPC14json4Json17stringify_2einner(self, escape_slash, indent, replacer) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const indent_cache = [];
  const stack = [];
  let depth = 0;
  let _tmp = self;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      if (stack.length === 0) {
        break;
      } else {
        const _x = stack[stack.length - 1 | 0];
        if (_x.$tag === 0) {
          const _Array = _x;
          const _arr = _Array._0;
          const _i = _Array._1;
          if (_i < _arr.length) {
            const element = _M0MPC15array5Array2atGsE(_arr, _i);
            _Array._1 = _i + 1 | 0;
            if (_i > 0) {
              _M0IPB13StringBuilderPB6Logger11write__char(buf, 44);
              if (indent > 0) {
                _M0FPC14json13write__indent(buf, indent_cache, depth, indent);
              }
            }
            _tmp = element;
            continue;
          } else {
            depth = depth - 1 | 0;
            _M0MPC15array5Array3popGRPC14json10WriteFrameE(stack);
            if (indent > 0) {
              _M0FPC14json13write__indent(buf, indent_cache, depth, indent);
            }
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 93);
            _tmp = undefined;
            continue;
          }
        } else {
          const _Object = _x;
          const _iterator = _Object._0;
          const _first = _Object._1;
          const _bind$4 = _M0MPB4Iter4nextGUsRPB4JsonEE(_iterator);
          if (_bind$4 === undefined) {
            depth = depth - 1 | 0;
            _M0MPC15array5Array3popGRPC14json10WriteFrameE(stack);
            if (indent > 0) {
              _M0FPC14json13write__indent(buf, indent_cache, depth, indent);
            }
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 125);
            _tmp = undefined;
            continue;
          } else {
            const _Some = _bind$4;
            const _x$2 = _Some;
            const _k = _x$2._0;
            const _v = _x$2._1;
            let v2 = _v;
            if (replacer === undefined) {
            } else {
              const _Some$2 = replacer;
              const _replacer = _Some$2;
              const _func = _replacer.f;
              const _bind$5 = _func(_k, _v);
              if (_bind$5 === undefined) {
                _tmp = undefined;
                continue;
              } else {
                const _Some$3 = _bind$5;
                const _v$2 = _Some$3;
                v2 = _v$2;
              }
            }
            if (!_first) {
              _M0IPB13StringBuilderPB6Logger11write__char(buf, 44);
              if (indent > 0) {
                _M0FPC14json13write__indent(buf, indent_cache, depth, indent);
              }
            }
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 34);
            _M0FPC14json14write__escaped(buf, _k, escape_slash);
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 34);
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 58);
            if (indent > 0) {
              _M0IPB13StringBuilderPB6Logger11write__char(buf, 32);
            }
            _Object._1 = false;
            _tmp = v2;
            continue;
          }
        }
      }
    } else {
      const _Some = x;
      const _value = _Some;
      switch (_value.$tag) {
        case 6: {
          const _Object = _value;
          const _members = _Object._0;
          if (_M0MPB3Map9is__emptyGssE(_members)) {
            _M0IPB13StringBuilderPB6Logger13write__string(buf, "{}");
          } else {
            depth = depth + 1 | 0;
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 123);
            if (indent > 0) {
              _M0FPC14json13write__indent(buf, indent_cache, depth, indent);
            }
            _M0MPC15array5Array4pushGRPB4JsonE(stack, new _M0DTPC14json10WriteFrame6Object(_M0MPB3Map4iterGsRPB4JsonE(_members), true));
          }
          break;
        }
        case 5: {
          const _Array = _value;
          const _arr = _Array._0;
          if (_M0MPC15array5Array9is__emptyGRPB4JsonE(_arr)) {
            _M0IPB13StringBuilderPB6Logger13write__string(buf, "[]");
          } else {
            depth = depth + 1 | 0;
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 91);
            if (indent > 0) {
              _M0FPC14json13write__indent(buf, indent_cache, depth, indent);
            }
            _M0MPC15array5Array4pushGRPB4JsonE(stack, new _M0DTPC14json10WriteFrame5Array(_arr, 0));
          }
          break;
        }
        case 4: {
          const _String = _value;
          const _s = _String._0;
          _M0IPB13StringBuilderPB6Logger11write__char(buf, 34);
          _M0FPC14json14write__escaped(buf, _s, escape_slash);
          _M0IPB13StringBuilderPB6Logger11write__char(buf, 34);
          break;
        }
        case 3: {
          const _Number = _value;
          const _n = _Number._0;
          const _repr = _Number._1;
          if (_repr === undefined) {
            _M0MPB13StringBuilder13write__objectGdE(buf, _n);
          } else {
            const _Some$2 = _repr;
            const _r = _Some$2;
            _M0IPB13StringBuilderPB6Logger13write__string(buf, _r);
          }
          break;
        }
        case 1: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "true");
          break;
        }
        case 2: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "false");
          break;
        }
        default: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "null");
        }
      }
      _tmp = undefined;
      continue;
    }
  }
  return _M0MPB13StringBuilder10to__string(buf);
}
function _M0IP216zhaojun_2dcoding6thrift10CodecErrorPC15debug5Debug8to__reprGRP216zhaojun_2dcoding6thrift10CodecErrorE(_x_1239) {
  let _arg_1240;
  _L: {
    const _Invalid = _x_1239;
    const _$42$arg_1240 = _Invalid._0;
    _arg_1240 = _$42$arg_1240;
    break _L;
  }
  return _M0MPC15debug4Repr4ctor("Invalid", [{ _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_1240) }]);
}
function _M0IP216zhaojun_2dcoding6thrift8ProtocolPB2Eq5equal(_x_1233, _x_1234) {
  if (_x_1233 === 0) {
    if (_x_1234 === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    if (_x_1234 === 1) {
      return true;
    } else {
      return false;
    }
  }
}
function _M0IP216zhaojun_2dcoding6thrift8IdlConstPB2Eq5equal(_x_1191, _x_1192) {
  let _x0_1203;
  let _y0_1204;
  _L: {
    let _x0_1201;
    let _y0_1202;
    _L$2: {
      let _x0_1199;
      let _y0_1200;
      _L$3: {
        let _x0_1197;
        let _y0_1198;
        _L$4: {
          let _x0_1195;
          let _y0_1196;
          _L$5: {
            let _x0_1193;
            let _y0_1194;
            _L$6: {
              switch (_x_1191.$tag) {
                case 0: {
                  const _IntegerConstant = _x_1191;
                  const _$42$x0_1193 = _IntegerConstant._0;
                  if (_x_1192.$tag === 0) {
                    const _IntegerConstant$2 = _x_1192;
                    const _$42$y0_1194 = _IntegerConstant$2._0;
                    _x0_1193 = _$42$x0_1193;
                    _y0_1194 = _$42$y0_1194;
                    break _L$6;
                  } else {
                    return false;
                  }
                }
                case 1: {
                  const _FloatConstant = _x_1191;
                  const _$42$x0_1195 = _FloatConstant._0;
                  if (_x_1192.$tag === 1) {
                    const _FloatConstant$2 = _x_1192;
                    const _$42$y0_1196 = _FloatConstant$2._0;
                    _x0_1195 = _$42$x0_1195;
                    _y0_1196 = _$42$y0_1196;
                    break _L$5;
                  } else {
                    return false;
                  }
                }
                case 2: {
                  const _StringConstant = _x_1191;
                  const _$42$x0_1197 = _StringConstant._0;
                  if (_x_1192.$tag === 2) {
                    const _StringConstant$2 = _x_1192;
                    const _$42$y0_1198 = _StringConstant$2._0;
                    _x0_1197 = _$42$x0_1197;
                    _y0_1198 = _$42$y0_1198;
                    break _L$4;
                  } else {
                    return false;
                  }
                }
                case 3: {
                  const _NameConstant = _x_1191;
                  const _$42$x0_1199 = _NameConstant._0;
                  if (_x_1192.$tag === 3) {
                    const _NameConstant$2 = _x_1192;
                    const _$42$y0_1200 = _NameConstant$2._0;
                    _x0_1199 = _$42$x0_1199;
                    _y0_1200 = _$42$y0_1200;
                    break _L$3;
                  } else {
                    return false;
                  }
                }
                case 4: {
                  const _ListConstant = _x_1191;
                  const _$42$x0_1201 = _ListConstant._0;
                  if (_x_1192.$tag === 4) {
                    const _ListConstant$2 = _x_1192;
                    const _$42$y0_1202 = _ListConstant$2._0;
                    _x0_1201 = _$42$x0_1201;
                    _y0_1202 = _$42$y0_1202;
                    break _L$2;
                  } else {
                    return false;
                  }
                }
                default: {
                  const _MapConstant = _x_1191;
                  const _$42$x0_1203 = _MapConstant._0;
                  if (_x_1192.$tag === 5) {
                    const _MapConstant$2 = _x_1192;
                    const _$42$y0_1204 = _MapConstant$2._0;
                    _x0_1203 = _$42$x0_1203;
                    _y0_1204 = _$42$y0_1204;
                    break _L;
                  } else {
                    return false;
                  }
                }
              }
            }
            return BigInt.asUintN(64, _x0_1193) === BigInt.asUintN(64, _y0_1194);
          }
          return _x0_1195 === _y0_1196;
        }
        return _x0_1197 === _y0_1198;
      }
      return _x0_1199 === _y0_1200;
    }
    return _M0IPC15array5ArrayPB2Eq5equalGRP216zhaojun_2dcoding6thrift8IdlConstE(_x0_1201, _y0_1202);
  }
  return _M0IPC15array5ArrayPB2Eq5equalGURP216zhaojun_2dcoding6thrift8IdlConstRP216zhaojun_2dcoding6thrift8IdlConstEE(_x0_1203, _y0_1204);
}
function _M0IP216zhaojun_2dcoding6thrift11IdlLocationPC15debug5Debug8to__repr(_x_1189) {
  const _bind$4 = [{ _0: "source", _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_x_1189.source) }, { _0: "offset", _1: _M0IPC13int3IntPC15debug5Debug8to__repr(_x_1189.offset) }, { _0: "line", _1: _M0IPC13int3IntPC15debug5Debug8to__repr(_x_1189.line) }, { _0: "column", _1: _M0IPC13int3IntPC15debug5Debug8to__repr(_x_1189.column) }];
  return _M0MPC15debug4Repr6record(_M0MPB3Map3MapGsRPC15debug4ReprE(new _M0TPB9ArrayViewGUsRPC15debug4ReprEE(_bind$4, 0, 4), undefined));
}
function _M0IP216zhaojun_2dcoding6thrift7IdlTypePB2Eq5equal(_x_1134, _x_1135) {
  let _tmp = _x_1134;
  let _tmp$2 = _x_1135;
  _L: while (true) {
    const _x_1134$2 = _tmp;
    const _x_1135$2 = _tmp$2;
    let _x1_1145;
    let _x0_1144;
    let _y0_1146;
    let _y1_1147;
    _L$2: {
      let _x0_1142;
      let _y0_1143;
      _L$3: {
        let _x0_1140;
        let _y0_1141;
        _L$4: {
          let _x0_1138;
          let _y0_1139;
          _L$5: {
            let _x0_1136;
            let _y0_1137;
            _L$6: {
              switch (_x_1134$2.$tag) {
                case 0: {
                  const _Base = _x_1134$2;
                  const _$42$x0_1136 = _Base._0;
                  if (_x_1135$2.$tag === 0) {
                    const _Base$2 = _x_1135$2;
                    const _$42$y0_1137 = _Base$2._0;
                    _x0_1136 = _$42$x0_1136;
                    _y0_1137 = _$42$y0_1137;
                    break _L$6;
                  } else {
                    return false;
                  }
                }
                case 1: {
                  const _Named = _x_1134$2;
                  const _$42$x0_1138 = _Named._0;
                  if (_x_1135$2.$tag === 1) {
                    const _Named$2 = _x_1135$2;
                    const _$42$y0_1139 = _Named$2._0;
                    _x0_1138 = _$42$x0_1138;
                    _y0_1139 = _$42$y0_1139;
                    break _L$5;
                  } else {
                    return false;
                  }
                }
                case 2: {
                  const _ListOf = _x_1134$2;
                  const _$42$x0_1140 = _ListOf._0;
                  if (_x_1135$2.$tag === 2) {
                    const _ListOf$2 = _x_1135$2;
                    const _$42$y0_1141 = _ListOf$2._0;
                    _x0_1140 = _$42$x0_1140;
                    _y0_1141 = _$42$y0_1141;
                    break _L$4;
                  } else {
                    return false;
                  }
                }
                case 3: {
                  const _SetOf = _x_1134$2;
                  const _$42$x0_1142 = _SetOf._0;
                  if (_x_1135$2.$tag === 3) {
                    const _SetOf$2 = _x_1135$2;
                    const _$42$y0_1143 = _SetOf$2._0;
                    _x0_1142 = _$42$x0_1142;
                    _y0_1143 = _$42$y0_1143;
                    break _L$3;
                  } else {
                    return false;
                  }
                }
                default: {
                  const _MapOf = _x_1134$2;
                  const _$42$x0_1144 = _MapOf._0;
                  const _$42$x1_1145 = _MapOf._1;
                  if (_x_1135$2.$tag === 4) {
                    const _MapOf$2 = _x_1135$2;
                    const _$42$y0_1146 = _MapOf$2._0;
                    const _$42$y1_1147 = _MapOf$2._1;
                    _x1_1145 = _$42$x1_1145;
                    _x0_1144 = _$42$x0_1144;
                    _y0_1146 = _$42$y0_1146;
                    _y1_1147 = _$42$y1_1147;
                    break _L$2;
                  } else {
                    return false;
                  }
                }
              }
            }
            return _x0_1136 === _y0_1137;
          }
          return _x0_1138 === _y0_1139;
        }
        _tmp = _x0_1140;
        _tmp$2 = _y0_1141;
        continue;
      }
      _tmp = _x0_1142;
      _tmp$2 = _y0_1143;
      continue;
    }
    if (_M0IP216zhaojun_2dcoding6thrift7IdlTypePB2Eq5equal(_x0_1144, _y0_1146)) {
      _tmp = _x1_1145;
      _tmp$2 = _y1_1147;
      continue;
    } else {
      return false;
    }
  }
}
function _M0IP216zhaojun_2dcoding6thrift5ValuePC15debug5Debug8to__repr(_x_1094) {
  let _arg_1110;
  _L: {
    let _arg_1108;
    let _arg_1107;
    let _arg_1109;
    _L$2: {
      let _arg_1105;
      let _arg_1106;
      _L$3: {
        let _arg_1103;
        let _arg_1104;
        _L$4: {
          let _arg_1102;
          _L$5: {
            let _arg_1101;
            _L$6: {
              let _arg_1100;
              _L$7: {
                let _arg_1099;
                _L$8: {
                  let _arg_1098;
                  _L$9: {
                    let _arg_1097;
                    _L$10: {
                      let _arg_1096;
                      _L$11: {
                        let _arg_1095;
                        _L$12: {
                          switch (_x_1094.$tag) {
                            case 0: {
                              const _Bool = _x_1094;
                              const _$42$arg_1095 = _Bool._0;
                              _arg_1095 = _$42$arg_1095;
                              break _L$12;
                            }
                            case 1: {
                              const _Byte = _x_1094;
                              const _$42$arg_1096 = _Byte._0;
                              _arg_1096 = _$42$arg_1096;
                              break _L$11;
                            }
                            case 2: {
                              const _I16 = _x_1094;
                              const _$42$arg_1097 = _I16._0;
                              _arg_1097 = _$42$arg_1097;
                              break _L$10;
                            }
                            case 3: {
                              const _I32 = _x_1094;
                              const _$42$arg_1098 = _I32._0;
                              _arg_1098 = _$42$arg_1098;
                              break _L$9;
                            }
                            case 4: {
                              const _I64 = _x_1094;
                              const _$42$arg_1099 = _I64._0;
                              _arg_1099 = _$42$arg_1099;
                              break _L$8;
                            }
                            case 5: {
                              const _Double = _x_1094;
                              const _$42$arg_1100 = _Double._0;
                              _arg_1100 = _$42$arg_1100;
                              break _L$7;
                            }
                            case 6: {
                              const _Binary = _x_1094;
                              const _$42$arg_1101 = _Binary._0;
                              _arg_1101 = _$42$arg_1101;
                              break _L$6;
                            }
                            case 7: {
                              const _Struct = _x_1094;
                              const _$42$arg_1102 = _Struct._0;
                              _arg_1102 = _$42$arg_1102;
                              break _L$5;
                            }
                            case 8: {
                              const _List = _x_1094;
                              const _$42$arg_1103 = _List._0;
                              const _$42$arg_1104 = _List._1;
                              _arg_1103 = _$42$arg_1103;
                              _arg_1104 = _$42$arg_1104;
                              break _L$4;
                            }
                            case 9: {
                              const _SetValue = _x_1094;
                              const _$42$arg_1105 = _SetValue._0;
                              const _$42$arg_1106 = _SetValue._1;
                              _arg_1105 = _$42$arg_1105;
                              _arg_1106 = _$42$arg_1106;
                              break _L$3;
                            }
                            case 10: {
                              const _MapValue = _x_1094;
                              const _$42$arg_1107 = _MapValue._0;
                              const _$42$arg_1108 = _MapValue._1;
                              const _$42$arg_1109 = _MapValue._2;
                              _arg_1108 = _$42$arg_1108;
                              _arg_1107 = _$42$arg_1107;
                              _arg_1109 = _$42$arg_1109;
                              break _L$2;
                            }
                            default: {
                              const _Uuid = _x_1094;
                              const _$42$arg_1110 = _Uuid._0;
                              _arg_1110 = _$42$arg_1110;
                              break _L;
                            }
                          }
                        }
                        return _M0MPC15debug4Repr4ctor("Bool", [{ _0: undefined, _1: _M0IPC14bool4BoolPC15debug5Debug8to__repr(_arg_1095) }]);
                      }
                      return _M0MPC15debug4Repr4ctor("Byte", [{ _0: undefined, _1: _M0IPC13int3IntPC15debug5Debug8to__repr(_arg_1096) }]);
                    }
                    return _M0MPC15debug4Repr4ctor("I16", [{ _0: undefined, _1: _M0IPC13int3IntPC15debug5Debug8to__repr(_arg_1097) }]);
                  }
                  return _M0MPC15debug4Repr4ctor("I32", [{ _0: undefined, _1: _M0IPC13int3IntPC15debug5Debug8to__repr(_arg_1098) }]);
                }
                return _M0MPC15debug4Repr4ctor("I64", [{ _0: undefined, _1: _M0IPC15int645Int64PC15debug5Debug8to__repr(_arg_1099) }]);
              }
              return _M0MPC15debug4Repr4ctor("Double", [{ _0: undefined, _1: _M0IPC16double6DoublePC15debug5Debug8to__repr(_arg_1100) }]);
            }
            return _M0MPC15debug4Repr4ctor("Binary", [{ _0: undefined, _1: _M0IPC15bytes5BytesPC15debug5Debug8to__repr(_arg_1101) }]);
          }
          return _M0MPC15debug4Repr4ctor("Struct", [{ _0: undefined, _1: _M0IPC15array5ArrayPC15debug5Debug8to__reprGUiRP216zhaojun_2dcoding6thrift5ValueEE(_arg_1102) }]);
        }
        return _M0MPC15debug4Repr4ctor("List", [{ _0: undefined, _1: _M0IP216zhaojun_2dcoding6thrift4KindPC15debug5Debug8to__repr(_arg_1103) }, { _0: undefined, _1: _M0IPC15array5ArrayPC15debug5Debug8to__reprGRP216zhaojun_2dcoding6thrift5ValueE(_arg_1104) }]);
      }
      return _M0MPC15debug4Repr4ctor("SetValue", [{ _0: undefined, _1: _M0IP216zhaojun_2dcoding6thrift4KindPC15debug5Debug8to__repr(_arg_1105) }, { _0: undefined, _1: _M0IPC15array5ArrayPC15debug5Debug8to__reprGRP216zhaojun_2dcoding6thrift5ValueE(_arg_1106) }]);
    }
    return _M0MPC15debug4Repr4ctor("MapValue", [{ _0: undefined, _1: _M0IPC16option6OptionPC15debug5Debug8to__reprGRP216zhaojun_2dcoding6thrift4KindE(_arg_1107) }, { _0: undefined, _1: _M0IPC16option6OptionPC15debug5Debug8to__reprGRP216zhaojun_2dcoding6thrift4KindE(_arg_1108) }, { _0: undefined, _1: _M0IPC15array5ArrayPC15debug5Debug8to__reprGURP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift5ValueEE(_arg_1109) }]);
  }
  return _M0MPC15debug4Repr4ctor("Uuid", [{ _0: undefined, _1: _M0IPC15bytes5BytesPC15debug5Debug8to__repr(_arg_1110) }]);
}
function _M0IP216zhaojun_2dcoding6thrift5ValuePB2Eq5equal(_x_1026, _x_1027) {
  let _x0_1058;
  let _y0_1059;
  _L: {
    let _x2_1054;
    let _x0_1052;
    let _x1_1053;
    let _y1_1056;
    let _y0_1055;
    let _y2_1057;
    _L$2: {
      let _x1_1049;
      let _x0_1048;
      let _y0_1050;
      let _y1_1051;
      _L$3: {
        let _x1_1045;
        let _x0_1044;
        let _y0_1046;
        let _y1_1047;
        _L$4: {
          let _x0_1042;
          let _y0_1043;
          _L$5: {
            let _x0_1040;
            let _y0_1041;
            _L$6: {
              let _x0_1038;
              let _y0_1039;
              _L$7: {
                let _x0_1036;
                let _y0_1037;
                _L$8: {
                  let _x0_1034;
                  let _y0_1035;
                  _L$9: {
                    let _x0_1032;
                    let _y0_1033;
                    _L$10: {
                      let _x0_1030;
                      let _y0_1031;
                      _L$11: {
                        let _x0_1028;
                        let _y0_1029;
                        _L$12: {
                          switch (_x_1026.$tag) {
                            case 0: {
                              const _Bool = _x_1026;
                              const _$42$x0_1028 = _Bool._0;
                              if (_x_1027.$tag === 0) {
                                const _Bool$2 = _x_1027;
                                const _$42$y0_1029 = _Bool$2._0;
                                _x0_1028 = _$42$x0_1028;
                                _y0_1029 = _$42$y0_1029;
                                break _L$12;
                              } else {
                                return false;
                              }
                            }
                            case 1: {
                              const _Byte = _x_1026;
                              const _$42$x0_1030 = _Byte._0;
                              if (_x_1027.$tag === 1) {
                                const _Byte$2 = _x_1027;
                                const _$42$y0_1031 = _Byte$2._0;
                                _x0_1030 = _$42$x0_1030;
                                _y0_1031 = _$42$y0_1031;
                                break _L$11;
                              } else {
                                return false;
                              }
                            }
                            case 2: {
                              const _I16 = _x_1026;
                              const _$42$x0_1032 = _I16._0;
                              if (_x_1027.$tag === 2) {
                                const _I16$2 = _x_1027;
                                const _$42$y0_1033 = _I16$2._0;
                                _x0_1032 = _$42$x0_1032;
                                _y0_1033 = _$42$y0_1033;
                                break _L$10;
                              } else {
                                return false;
                              }
                            }
                            case 3: {
                              const _I32 = _x_1026;
                              const _$42$x0_1034 = _I32._0;
                              if (_x_1027.$tag === 3) {
                                const _I32$2 = _x_1027;
                                const _$42$y0_1035 = _I32$2._0;
                                _x0_1034 = _$42$x0_1034;
                                _y0_1035 = _$42$y0_1035;
                                break _L$9;
                              } else {
                                return false;
                              }
                            }
                            case 4: {
                              const _I64 = _x_1026;
                              const _$42$x0_1036 = _I64._0;
                              if (_x_1027.$tag === 4) {
                                const _I64$2 = _x_1027;
                                const _$42$y0_1037 = _I64$2._0;
                                _x0_1036 = _$42$x0_1036;
                                _y0_1037 = _$42$y0_1037;
                                break _L$8;
                              } else {
                                return false;
                              }
                            }
                            case 5: {
                              const _Double = _x_1026;
                              const _$42$x0_1038 = _Double._0;
                              if (_x_1027.$tag === 5) {
                                const _Double$2 = _x_1027;
                                const _$42$y0_1039 = _Double$2._0;
                                _x0_1038 = _$42$x0_1038;
                                _y0_1039 = _$42$y0_1039;
                                break _L$7;
                              } else {
                                return false;
                              }
                            }
                            case 6: {
                              const _Binary = _x_1026;
                              const _$42$x0_1040 = _Binary._0;
                              if (_x_1027.$tag === 6) {
                                const _Binary$2 = _x_1027;
                                const _$42$y0_1041 = _Binary$2._0;
                                _x0_1040 = _$42$x0_1040;
                                _y0_1041 = _$42$y0_1041;
                                break _L$6;
                              } else {
                                return false;
                              }
                            }
                            case 7: {
                              const _Struct = _x_1026;
                              const _$42$x0_1042 = _Struct._0;
                              if (_x_1027.$tag === 7) {
                                const _Struct$2 = _x_1027;
                                const _$42$y0_1043 = _Struct$2._0;
                                _x0_1042 = _$42$x0_1042;
                                _y0_1043 = _$42$y0_1043;
                                break _L$5;
                              } else {
                                return false;
                              }
                            }
                            case 8: {
                              const _List = _x_1026;
                              const _$42$x0_1044 = _List._0;
                              const _$42$x1_1045 = _List._1;
                              if (_x_1027.$tag === 8) {
                                const _List$2 = _x_1027;
                                const _$42$y0_1046 = _List$2._0;
                                const _$42$y1_1047 = _List$2._1;
                                _x1_1045 = _$42$x1_1045;
                                _x0_1044 = _$42$x0_1044;
                                _y0_1046 = _$42$y0_1046;
                                _y1_1047 = _$42$y1_1047;
                                break _L$4;
                              } else {
                                return false;
                              }
                            }
                            case 9: {
                              const _SetValue = _x_1026;
                              const _$42$x0_1048 = _SetValue._0;
                              const _$42$x1_1049 = _SetValue._1;
                              if (_x_1027.$tag === 9) {
                                const _SetValue$2 = _x_1027;
                                const _$42$y0_1050 = _SetValue$2._0;
                                const _$42$y1_1051 = _SetValue$2._1;
                                _x1_1049 = _$42$x1_1049;
                                _x0_1048 = _$42$x0_1048;
                                _y0_1050 = _$42$y0_1050;
                                _y1_1051 = _$42$y1_1051;
                                break _L$3;
                              } else {
                                return false;
                              }
                            }
                            case 10: {
                              const _MapValue = _x_1026;
                              const _$42$x0_1052 = _MapValue._0;
                              const _$42$x1_1053 = _MapValue._1;
                              const _$42$x2_1054 = _MapValue._2;
                              if (_x_1027.$tag === 10) {
                                const _MapValue$2 = _x_1027;
                                const _$42$y0_1055 = _MapValue$2._0;
                                const _$42$y1_1056 = _MapValue$2._1;
                                const _$42$y2_1057 = _MapValue$2._2;
                                _x2_1054 = _$42$x2_1054;
                                _x0_1052 = _$42$x0_1052;
                                _x1_1053 = _$42$x1_1053;
                                _y1_1056 = _$42$y1_1056;
                                _y0_1055 = _$42$y0_1055;
                                _y2_1057 = _$42$y2_1057;
                                break _L$2;
                              } else {
                                return false;
                              }
                            }
                            default: {
                              const _Uuid = _x_1026;
                              const _$42$x0_1058 = _Uuid._0;
                              if (_x_1027.$tag === 11) {
                                const _Uuid$2 = _x_1027;
                                const _$42$y0_1059 = _Uuid$2._0;
                                _x0_1058 = _$42$x0_1058;
                                _y0_1059 = _$42$y0_1059;
                                break _L;
                              } else {
                                return false;
                              }
                            }
                          }
                        }
                        return _x0_1028 === _y0_1029;
                      }
                      return _x0_1030 === _y0_1031;
                    }
                    return _x0_1032 === _y0_1033;
                  }
                  return _x0_1034 === _y0_1035;
                }
                return BigInt.asUintN(64, _x0_1036) === BigInt.asUintN(64, _y0_1037);
              }
              return _x0_1038 === _y0_1039;
            }
            return $bytes_equal(_x0_1040, _y0_1041);
          }
          return _M0IPC15array5ArrayPB2Eq5equalGUiRP216zhaojun_2dcoding6thrift5ValueEE(_x0_1042, _y0_1043);
        }
        return _M0IP216zhaojun_2dcoding6thrift4KindPB2Eq5equal(_x0_1044, _y0_1046) && _M0IPC15array5ArrayPB2Eq5equalGRP216zhaojun_2dcoding6thrift5ValueE(_x1_1045, _y1_1047);
      }
      return _M0IP216zhaojun_2dcoding6thrift4KindPB2Eq5equal(_x0_1048, _y0_1050) && _M0IPC15array5ArrayPB2Eq5equalGRP216zhaojun_2dcoding6thrift5ValueE(_x1_1049, _y1_1051);
    }
    return _M0IPC16option6OptionPB2Eq5equalGRP216zhaojun_2dcoding6thrift4KindE(_x0_1052, _y0_1055) && (_M0IPC16option6OptionPB2Eq5equalGRP216zhaojun_2dcoding6thrift4KindE(_x1_1053, _y1_1056) && _M0IPC15array5ArrayPB2Eq5equalGURP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift5ValueEE(_x2_1054, _y2_1057));
  }
  return $bytes_equal(_x0_1058, _y0_1059);
}
function _M0IP216zhaojun_2dcoding6thrift4KindPC15debug5Debug8to__repr(_x_1024) {
  switch (_x_1024) {
    case 0: {
      return _M0MPC15debug4Repr4ctor("BoolKind", []);
    }
    case 1: {
      return _M0MPC15debug4Repr4ctor("ByteKind", []);
    }
    case 2: {
      return _M0MPC15debug4Repr4ctor("I16Kind", []);
    }
    case 3: {
      return _M0MPC15debug4Repr4ctor("I32Kind", []);
    }
    case 4: {
      return _M0MPC15debug4Repr4ctor("I64Kind", []);
    }
    case 5: {
      return _M0MPC15debug4Repr4ctor("DoubleKind", []);
    }
    case 6: {
      return _M0MPC15debug4Repr4ctor("BinaryKind", []);
    }
    case 7: {
      return _M0MPC15debug4Repr4ctor("StructKind", []);
    }
    case 8: {
      return _M0MPC15debug4Repr4ctor("ListKind", []);
    }
    case 9: {
      return _M0MPC15debug4Repr4ctor("SetKind", []);
    }
    case 10: {
      return _M0MPC15debug4Repr4ctor("MapKind", []);
    }
    default: {
      return _M0MPC15debug4Repr4ctor("UuidKind", []);
    }
  }
}
function _M0IP216zhaojun_2dcoding6thrift4KindPB2Eq5equal(_x_1020, _x_1021) {
  switch (_x_1020) {
    case 0: {
      if (_x_1021 === 0) {
        return true;
      } else {
        return false;
      }
    }
    case 1: {
      if (_x_1021 === 1) {
        return true;
      } else {
        return false;
      }
    }
    case 2: {
      if (_x_1021 === 2) {
        return true;
      } else {
        return false;
      }
    }
    case 3: {
      if (_x_1021 === 3) {
        return true;
      } else {
        return false;
      }
    }
    case 4: {
      if (_x_1021 === 4) {
        return true;
      } else {
        return false;
      }
    }
    case 5: {
      if (_x_1021 === 5) {
        return true;
      } else {
        return false;
      }
    }
    case 6: {
      if (_x_1021 === 6) {
        return true;
      } else {
        return false;
      }
    }
    case 7: {
      if (_x_1021 === 7) {
        return true;
      } else {
        return false;
      }
    }
    case 8: {
      if (_x_1021 === 8) {
        return true;
      } else {
        return false;
      }
    }
    case 9: {
      if (_x_1021 === 9) {
        return true;
      } else {
        return false;
      }
    }
    case 10: {
      if (_x_1021 === 10) {
        return true;
      } else {
        return false;
      }
    }
    default: {
      if (_x_1021 === 11) {
        return true;
      } else {
        return false;
      }
    }
  }
}
function _M0IP216zhaojun_2dcoding6thrift11SchemaErrorPC15debug5Debug8to__repr(_x_904) {
  let _arg_907;
  _L: {
    let _arg_905;
    let _arg_906;
    _L$2: {
      if (_x_904.$tag === 1) {
        const _Syntax = _x_904;
        const _$42$arg_905 = _Syntax._0;
        const _$42$arg_906 = _Syntax._1;
        _arg_905 = _$42$arg_905;
        _arg_906 = _$42$arg_906;
        break _L$2;
      } else {
        const _InvalidSchema = _x_904;
        const _$42$arg_907 = _InvalidSchema._0;
        _arg_907 = _$42$arg_907;
        break _L;
      }
    }
    return _M0MPC15debug4Repr4ctor("Syntax", [{ _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_905) }, { _0: undefined, _1: _M0IP216zhaojun_2dcoding6thrift11IdlLocationPC15debug5Debug8to__repr(_arg_906) }]);
  }
  return _M0MPC15debug4Repr4ctor("InvalidSchema", [{ _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_907) }]);
}
function _M0IP216zhaojun_2dcoding6thrift11SchemaErrorPC15debug5Debug8to__reprGRP216zhaojun_2dcoding6thrift11SchemaErrorE(_x_904) {
  let _arg_907;
  _L: {
    let _arg_905;
    let _arg_906;
    _L$2: {
      if (_x_904.$tag === 1) {
        const _Syntax = _x_904;
        const _$42$arg_905 = _Syntax._0;
        const _$42$arg_906 = _Syntax._1;
        _arg_905 = _$42$arg_905;
        _arg_906 = _$42$arg_906;
        break _L$2;
      } else {
        const _InvalidSchema = _x_904;
        const _$42$arg_907 = _InvalidSchema._0;
        _arg_907 = _$42$arg_907;
        break _L;
      }
    }
    return _M0MPC15debug4Repr4ctor("Syntax", [{ _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_905) }, { _0: undefined, _1: _M0IP216zhaojun_2dcoding6thrift11IdlLocationPC15debug5Debug8to__repr(_arg_906) }]);
  }
  return _M0MPC15debug4Repr4ctor("InvalidSchema", [{ _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_907) }]);
}
function _M0IP216zhaojun_2dcoding6thrift7MessagePC15debug5Debug8to__repr(_x_866) {
  const _bind$4 = [{ _0: "name", _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_x_866.name) }, { _0: "message_type", _1: _M0IPC13int3IntPC15debug5Debug8to__repr(_x_866.message_type) }, { _0: "sequence_id", _1: _M0IPC13int3IntPC15debug5Debug8to__repr(_x_866.sequence_id) }, { _0: "body", _1: _M0IP216zhaojun_2dcoding6thrift5ValuePC15debug5Debug8to__repr(_x_866.body) }];
  return _M0MPC15debug4Repr6record(_M0MPB3Map3MapGsRPC15debug4ReprE(new _M0TPB9ArrayViewGUsRPC15debug4ReprEE(_bind$4, 0, 4), undefined));
}
function _M0MP216zhaojun_2dcoding6thrift5Value4kind(self) {
  switch (self.$tag) {
    case 0: {
      return 0;
    }
    case 1: {
      return 1;
    }
    case 2: {
      return 2;
    }
    case 3: {
      return 3;
    }
    case 4: {
      return 4;
    }
    case 5: {
      return 5;
    }
    case 6: {
      return 6;
    }
    case 7: {
      return 7;
    }
    case 8: {
      return 8;
    }
    case 9: {
      return 9;
    }
    case 10: {
      return 10;
    }
    default: {
      return 11;
    }
  }
}
function _M0FP216zhaojun_2dcoding6thrift4code(kind, compact) {
  if (compact) {
    switch (kind) {
      case 0: {
        return 1;
      }
      case 1: {
        return 3;
      }
      case 2: {
        return 4;
      }
      case 3: {
        return 5;
      }
      case 4: {
        return 6;
      }
      case 5: {
        return 7;
      }
      case 6: {
        return 8;
      }
      case 8: {
        return 9;
      }
      case 9: {
        return 10;
      }
      case 10: {
        return 11;
      }
      case 7: {
        return 12;
      }
      default: {
        return 13;
      }
    }
  } else {
    switch (kind) {
      case 0: {
        return 2;
      }
      case 1: {
        return 3;
      }
      case 2: {
        return 6;
      }
      case 3: {
        return 8;
      }
      case 4: {
        return 10;
      }
      case 5: {
        return 4;
      }
      case 6: {
        return 11;
      }
      case 8: {
        return 15;
      }
      case 9: {
        return 14;
      }
      case 10: {
        return 13;
      }
      case 7: {
        return 12;
      }
      default: {
        return 16;
      }
    }
  }
}
function _M0FP216zhaojun_2dcoding6thrift4kind(raw, compact) {
  const _bind$4 = [0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 7, 11];
  const _bind$5 = _bind$4.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$5) {
      const k = _bind$4[_];
      if (_M0FP216zhaojun_2dcoding6thrift4code(k, compact) === raw) {
        return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift4KindRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(k);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (compact && raw === 2) {
    return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift4KindRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(0);
  }
  return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift4KindRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("unsupported type tag"));
}
function _M0FP216zhaojun_2dcoding6thrift6zigzag(n) {
  return BigInt.asUintN(64, BigInt.asUintN(64, n << BigInt(1 & 63)) ^ BigInt.asUintN(64, BigInt.asIntN(64, n) >> BigInt(63 & 63)));
}
function _M0FP216zhaojun_2dcoding6thrift8unzigzag(n) {
  return BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, n) >> BigInt(1 & 63)) ^ BigInt.asUintN(64, -BigInt.asUintN(64, n & 1n)));
}
function _M0FP216zhaojun_2dcoding6thrift5fixed(out, value, width, little) {
  const _bind$4 = 0;
  let _tmp = _bind$4;
  while (true) {
    const i = _tmp;
    if (i < width) {
      _M0MPC15array5Array4pushGyE(out, _M0MPC16uint646UInt648to__byte(BigInt.asUintN(64, BigInt.asUintN(64, value) >> BigInt((Math.imul(little ? i : (width - 1 | 0) - i | 0, 8) | 0) & 63))));
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FP216zhaojun_2dcoding6thrift13frame_2einner(payload, max_frame) {
  if (max_frame < 1 || (max_frame > 16777216 || payload.length > max_frame)) {
    return new _M0DTPC16result6ResultGzRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("frame limit"));
  }
  const out = [];
  _M0FP216zhaojun_2dcoding6thrift5fixed(out, _M0MPC13int3Int10to__uint64(payload.length), 4, false);
  const _bind$4 = payload.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$4) {
      const b = payload[_];
      _M0MPC15array5Array4pushGyE(out, b);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGzRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(_M0MPC15bytes5Bytes11from__array(new _M0TPB9ArrayViewGyE(out, 0, out.length)));
}
function _M0MP216zhaojun_2dcoding6thrift12FrameDecoder11new_2einner(max_frame) {
  if (max_frame < 1 || max_frame > 16777216) {
    return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift12FrameDecoderRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("frame limit"));
  }
  return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift12FrameDecoderRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(new _M0TP216zhaojun_2dcoding6thrift12FrameDecoder(max_frame, 0n, 0, -1, [], false));
}
function _M0MP216zhaojun_2dcoding6thrift12FrameDecoder4feed(self, chunk) {
  if (self.failed) {
    return new _M0DTPC16result6ResultGRPB5ArrayGzERP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("frame decoder requires reset"));
  }
  if (chunk.length > 16777220) {
    self.failed = true;
    return new _M0DTPC16result6ResultGRPB5ArrayGzERP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("feed exceeds 16 MiB plus header"));
  }
  const frames = [];
  const _bind$4 = chunk.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$4) {
      const b = chunk[_];
      if (self.expected < 0) {
        self.header = BigInt.asUintN(64, BigInt.asUintN(64, self.header << BigInt(8 & 63)) | _M0MPC14byte4Byte10to__uint64(b));
        self.header_bytes = self.header_bytes + 1 | 0;
        if (self.header_bytes === 4) {
          if (BigInt.asUintN(64, self.header) > BigInt.asUintN(64, _M0MPC13int3Int10to__uint64(self.max_frame))) {
            self.failed = true;
            self.buffer = [];
            return new _M0DTPC16result6ResultGRPB5ArrayGzERP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("negative or oversized transport frame"));
          }
          self.expected = Number(BigInt.asIntN(32, self.header)) | 0;
          self.header = 0n;
          self.header_bytes = 0;
          if (self.expected === 0) {
            _M0MPC15array5Array4pushGRPB4JsonE(frames, $bytes_literal$0);
            self.expected = -1;
          }
        }
      } else {
        _M0MPC15array5Array4pushGyE(self.buffer, b);
        if (self.buffer.length === self.expected) {
          const _bind$5 = self.buffer;
          _M0MPC15array5Array4pushGRPB4JsonE(frames, _M0MPC15bytes5Bytes11from__array(new _M0TPB9ArrayViewGyE(_bind$5, 0, _bind$5.length)));
          self.buffer = [];
          self.expected = -1;
        }
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGzERP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(frames);
}
function _M0MP216zhaojun_2dcoding6thrift12FrameDecoder6finish(self) {
  if (self.failed) {
    return new _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("frame decoder requires reset"));
  }
  if (self.header_bytes !== 0 || self.expected >= 0) {
    self.failed = true;
    self.buffer = [];
    return new _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("truncated transport frame"));
  } else {
    return new _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(undefined);
  }
}
function _M0FP216zhaojun_2dcoding6thrift6varint(out, value) {
  const n = new _M0TPB8MutLocalGmE(value);
  while (true) {
    if (BigInt.asUintN(64, n.val) >= BigInt.asUintN(64, 128n)) {
      _M0MPC15array5Array4pushGyE(out, _M0MPC16uint646UInt648to__byte(BigInt.asUintN(64, BigInt.asUintN(64, n.val & 127n) | 128n)));
      n.val = BigInt.asUintN(64, BigInt.asUintN(64, n.val) >> BigInt(7 & 63));
      continue;
    } else {
      break;
    }
  }
  _M0MPC15array5Array4pushGyE(out, _M0MPC16uint646UInt648to__byte(n.val));
}
function _M0FP216zhaojun_2dcoding6thrift12write__value(out, value, compact, depth) {
  if (depth > 64 || out.length > 1048576) {
    return new _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("serialization resource limit"));
  }
  let fields;
  _L: {
    let value_kind;
    let key_kind;
    let entries;
    _L$2: {
      let element;
      let items;
      _L$3: {
        let data;
        _L$4: {
          let n;
          _L$5: {
            let n$2;
            _L$6: {
              let n$3;
              _L$7: {
                let n$4;
                _L$8: {
                  let n$5;
                  _L$9: {
                    let b;
                    _L$10: {
                      let data$2;
                      _L$11: {
                        switch (value.$tag) {
                          case 11: {
                            const _Uuid = value;
                            const _data = _Uuid._0;
                            data$2 = _data;
                            break _L$11;
                          }
                          case 0: {
                            const _Bool = value;
                            const _b = _Bool._0;
                            b = _b;
                            break _L$10;
                          }
                          case 1: {
                            const _Byte = value;
                            const _n = _Byte._0;
                            n$5 = _n;
                            break _L$9;
                          }
                          case 2: {
                            const _I16 = value;
                            const _n$2 = _I16._0;
                            n$4 = _n$2;
                            break _L$8;
                          }
                          case 3: {
                            const _I32 = value;
                            const _n$3 = _I32._0;
                            n$3 = _n$3;
                            break _L$7;
                          }
                          case 4: {
                            const _I64 = value;
                            const _n$4 = _I64._0;
                            n$2 = _n$4;
                            break _L$6;
                          }
                          case 5: {
                            const _Double = value;
                            const _n$5 = _Double._0;
                            n = _n$5;
                            break _L$5;
                          }
                          case 6: {
                            const _Binary = value;
                            const _data$2 = _Binary._0;
                            data = _data$2;
                            break _L$4;
                          }
                          case 8: {
                            const _List = value;
                            const _element = _List._0;
                            const _items = _List._1;
                            element = _element;
                            items = _items;
                            break _L$3;
                          }
                          case 9: {
                            const _SetValue = value;
                            const _element$2 = _SetValue._0;
                            const _items$2 = _SetValue._1;
                            element = _element$2;
                            items = _items$2;
                            break _L$3;
                          }
                          case 10: {
                            const _MapValue = value;
                            const _key_kind = _MapValue._0;
                            const _value_kind = _MapValue._1;
                            const _entries = _MapValue._2;
                            value_kind = _value_kind;
                            key_kind = _key_kind;
                            entries = _entries;
                            break _L$2;
                          }
                          default: {
                            const _Struct = value;
                            const _fields = _Struct._0;
                            fields = _fields;
                            break _L;
                          }
                        }
                      }
                      if (data$2.length !== 16) {
                        return new _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("UUID requires 16 network-order bytes"));
                      }
                      const _bind$4 = data$2.length;
                      let _tmp = 0;
                      while (true) {
                        const _ = _tmp;
                        if (_ < _bind$4) {
                          const byte = data$2[_];
                          _M0MPC15array5Array4pushGyE(out, byte);
                          _tmp = _ + 1 | 0;
                          continue;
                        } else {
                          break;
                        }
                      }
                      return new _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(undefined);
                    }
                    return new _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(_M0MPC15array5Array4pushGyE(out, b ? 1 : compact ? 2 : 0));
                  }
                  if (n$5 < -128 || n$5 > 127) {
                    return new _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("byte out of range"));
                  }
                  return new _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(_M0MPC15array5Array4pushGyE(out, n$5 & 255));
                }
                if (n$4 < -32768 || n$4 > 32767) {
                  return new _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("i16 out of range"));
                }
                return compact ? new _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(_M0FP216zhaojun_2dcoding6thrift6varint(out, _M0FP216zhaojun_2dcoding6thrift6zigzag(BigInt.asUintN(64, BigInt(n$4))))) : new _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(_M0FP216zhaojun_2dcoding6thrift5fixed(out, BigInt.asUintN(64, BigInt(n$4)), 2, false));
              }
              return compact ? new _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(_M0FP216zhaojun_2dcoding6thrift6varint(out, _M0FP216zhaojun_2dcoding6thrift6zigzag(BigInt.asUintN(64, BigInt(n$3))))) : new _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(_M0FP216zhaojun_2dcoding6thrift5fixed(out, BigInt.asUintN(64, BigInt(n$3)), 4, false));
            }
            return compact ? new _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(_M0FP216zhaojun_2dcoding6thrift6varint(out, _M0FP216zhaojun_2dcoding6thrift6zigzag(n$2))) : new _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(_M0FP216zhaojun_2dcoding6thrift5fixed(out, n$2, 8, false));
          }
          return new _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(_M0FP216zhaojun_2dcoding6thrift5fixed(out, $f64_reinterpret_i64(n), 8, compact));
        }
        if (data.length > 1048576) {
          return new _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("binary too large"));
        }
        if (compact) {
          _M0FP216zhaojun_2dcoding6thrift6varint(out, _M0MPC13int3Int10to__uint64(data.length));
        } else {
          _M0FP216zhaojun_2dcoding6thrift5fixed(out, _M0MPC13int3Int10to__uint64(data.length), 4, false);
        }
        const _bind$4 = data.length;
        let _tmp = 0;
        while (true) {
          const _ = _tmp;
          if (_ < _bind$4) {
            const b = data[_];
            _M0MPC15array5Array4pushGyE(out, b);
            _tmp = _ + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        return new _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(undefined);
      }
      if (items.length > 100000) {
        return new _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("list too long"));
      }
      const t = _M0FP216zhaojun_2dcoding6thrift4code(element, compact);
      if (compact) {
        if (items.length < 15) {
          _M0MPC15array5Array4pushGyE(out, (items.length << 4 | t) & 255);
        } else {
          _M0MPC15array5Array4pushGyE(out, (240 | t) & 255);
          _M0FP216zhaojun_2dcoding6thrift6varint(out, _M0MPC13int3Int10to__uint64(items.length));
        }
      } else {
        _M0MPC15array5Array4pushGyE(out, t & 255);
        _M0FP216zhaojun_2dcoding6thrift5fixed(out, _M0MPC13int3Int10to__uint64(items.length), 4, false);
      }
      const _bind$4 = items.length;
      let _tmp = 0;
      while (true) {
        const _ = _tmp;
        if (_ < _bind$4) {
          const item = items[_];
          if (_M0IP016_24default__implPB2Eq10not__equalGRP216zhaojun_2dcoding6thrift4KindE(_M0MP216zhaojun_2dcoding6thrift5Value4kind(item), element)) {
            return new _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("heterogeneous list"));
          }
          const _bind$5 = _M0FP216zhaojun_2dcoding6thrift12write__value(out, item, compact, depth + 1 | 0);
          if (_bind$5.$tag === 1) {
            const _ok = _bind$5;
            _ok._0;
          } else {
            return _bind$5;
          }
          _tmp = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return new _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(undefined);
    }
    if (entries.length > 100000) {
      return new _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("map length limit"));
    }
    if (compact && _M0MPC15array5Array9is__emptyGRPB4JsonE(entries)) {
      return new _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(_M0MPC15array5Array4pushGyE(out, 0));
    } else {
      let kt;
      let k;
      _L$3: {
        _L$4: {
          if (key_kind === undefined) {
            if (_M0MPC15array5Array9is__emptyGRPB4JsonE(entries)) {
              kt = 0;
            } else {
              return new _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("missing map key type"));
            }
          } else {
            const _Some = key_kind;
            const _k = _Some;
            k = _k;
            break _L$4;
          }
          break _L$3;
        }
        kt = _M0FP216zhaojun_2dcoding6thrift4code(k, compact);
      }
      let vt;
      let k$2;
      _L$4: {
        _L$5: {
          if (value_kind === undefined) {
            if (_M0MPC15array5Array9is__emptyGRPB4JsonE(entries)) {
              vt = 0;
            } else {
              return new _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("missing map value type"));
            }
          } else {
            const _Some = value_kind;
            const _k = _Some;
            k$2 = _k;
            break _L$5;
          }
          break _L$4;
        }
        vt = _M0FP216zhaojun_2dcoding6thrift4code(k$2, compact);
      }
      if (compact) {
        _M0FP216zhaojun_2dcoding6thrift6varint(out, _M0MPC13int3Int10to__uint64(entries.length));
        _M0MPC15array5Array4pushGyE(out, (kt << 4 | vt) & 255);
      } else {
        _M0MPC15array5Array4pushGyE(out, kt & 255);
        _M0MPC15array5Array4pushGyE(out, vt & 255);
        _M0FP216zhaojun_2dcoding6thrift5fixed(out, _M0MPC13int3Int10to__uint64(entries.length), 4, false);
      }
      const _bind$4 = entries.length;
      let _tmp = 0;
      while (true) {
        const _ = _tmp;
        if (_ < _bind$4) {
          const _foreach_element = entries[_];
          let key;
          let value$2;
          _L$5: {
            const _key = _foreach_element._0;
            const _value = _foreach_element._1;
            key = _key;
            value$2 = _value;
            break _L$5;
          }
          if (_M0IP016_24default__implPB2Eq10not__equalGORP216zhaojun_2dcoding6thrift4KindE(_M0MP216zhaojun_2dcoding6thrift5Value4kind(key), key_kind) || _M0IP016_24default__implPB2Eq10not__equalGORP216zhaojun_2dcoding6thrift4KindE(_M0MP216zhaojun_2dcoding6thrift5Value4kind(value$2), value_kind)) {
            return new _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("heterogeneous map"));
          }
          const _bind$5 = _M0FP216zhaojun_2dcoding6thrift12write__value(out, key, compact, depth + 1 | 0);
          if (_bind$5.$tag === 1) {
            const _ok = _bind$5;
            _ok._0;
          } else {
            return _bind$5;
          }
          const _bind$6 = _M0FP216zhaojun_2dcoding6thrift12write__value(out, value$2, compact, depth + 1 | 0);
          if (_bind$6.$tag === 1) {
            const _ok = _bind$6;
            _ok._0;
          } else {
            return _bind$6;
          }
          _tmp = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return new _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(undefined);
    }
  }
  if (fields.length > 100000) {
    return new _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("too many fields"));
  }
  const previous = new _M0TPB8MutLocalGiE(0);
  const _bind$4 = fields.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$4) {
      const field = fields[_];
      let id;
      let item;
      _L$2: {
        const _id = field._0;
        const _item = field._1;
        id = _id;
        item = _item;
        break _L$2;
      }
      if (id < -32768 || id > 32767) {
        return new _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("field id out of range"));
      }
      const t = compact && _M0IP216zhaojun_2dcoding6thrift5ValuePB2Eq5equal(item, new _M0DTP216zhaojun_2dcoding6thrift5Value4Bool(false)) ? 2 : _M0FP216zhaojun_2dcoding6thrift4code(_M0MP216zhaojun_2dcoding6thrift5Value4kind(item), compact);
      if (compact) {
        const delta = id - previous.val | 0;
        if (delta > 0 && delta <= 15) {
          _M0MPC15array5Array4pushGyE(out, (delta << 4 | t) & 255);
        } else {
          _M0MPC15array5Array4pushGyE(out, t & 255);
          _M0FP216zhaojun_2dcoding6thrift6varint(out, _M0FP216zhaojun_2dcoding6thrift6zigzag(BigInt.asUintN(64, BigInt(id))));
        }
      } else {
        _M0MPC15array5Array4pushGyE(out, t & 255);
        _M0FP216zhaojun_2dcoding6thrift5fixed(out, BigInt.asUintN(64, BigInt(id)), 2, false);
      }
      if (!compact || _M0IP016_24default__implPB2Eq10not__equalGRP216zhaojun_2dcoding6thrift4KindE(_M0MP216zhaojun_2dcoding6thrift5Value4kind(item), 0)) {
        const _bind$5 = _M0FP216zhaojun_2dcoding6thrift12write__value(out, item, compact, depth + 1 | 0);
        if (_bind$5.$tag === 1) {
          const _ok = _bind$5;
          _ok._0;
        } else {
          return _bind$5;
        }
      }
      previous.val = id;
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(_M0MPC15array5Array4pushGyE(out, 0));
}
function _M0FP216zhaojun_2dcoding6thrift23encode__message_2einner(message, protocol, strict_write) {
  if (message.message_type < 1 || message.message_type > 4) {
    return new _M0DTPC16result6ResultGzRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("invalid RPC message type"));
  }
  if (_M0IP016_24default__implPB2Eq10not__equalGRP216zhaojun_2dcoding6thrift4KindE(_M0MP216zhaojun_2dcoding6thrift5Value4kind(message.body), 7)) {
    return new _M0DTPC16result6ResultGzRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("RPC body must be a struct"));
  }
  const _bind$4 = message.name;
  const name = _M0FPC28encoding4utf814encode_2einner(new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length), false);
  if (name.length > 1024) {
    return new _M0DTPC16result6ResultGzRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("RPC method name exceeds 1024 bytes"));
  }
  const compact = _M0IP216zhaojun_2dcoding6thrift8ProtocolPB2Eq5equal(protocol, 1);
  const out = [];
  if (compact) {
    _M0MPC15array5Array4pushGyE(out, 130);
    _M0MPC15array5Array4pushGyE(out, (message.message_type << 5 | 1) & 255);
    _M0FP216zhaojun_2dcoding6thrift6varint(out, _M0MPC14uint4UInt10to__uint64(message.sequence_id));
    const _bind$5 = _M0FP216zhaojun_2dcoding6thrift12write__value(out, new _M0DTP216zhaojun_2dcoding6thrift5Value6Binary(name), true, 0);
    if (_bind$5.$tag === 1) {
      const _ok = _bind$5;
      _ok._0;
    } else {
      return _bind$5;
    }
  } else {
    if (strict_write) {
      _M0FP216zhaojun_2dcoding6thrift5fixed(out, BigInt.asUintN(64, 2147549184n | _M0MPC13int3Int10to__uint64(message.message_type)), 4, false);
      const _bind$5 = _M0FP216zhaojun_2dcoding6thrift12write__value(out, new _M0DTP216zhaojun_2dcoding6thrift5Value6Binary(name), false, 0);
      if (_bind$5.$tag === 1) {
        const _ok = _bind$5;
        _ok._0;
      } else {
        return _bind$5;
      }
      _M0FP216zhaojun_2dcoding6thrift5fixed(out, _M0MPC14uint4UInt10to__uint64(message.sequence_id), 4, false);
    } else {
      const _bind$5 = _M0FP216zhaojun_2dcoding6thrift12write__value(out, new _M0DTP216zhaojun_2dcoding6thrift5Value6Binary(name), false, 0);
      if (_bind$5.$tag === 1) {
        const _ok = _bind$5;
        _ok._0;
      } else {
        return _bind$5;
      }
      _M0MPC15array5Array4pushGyE(out, message.message_type & 255);
      _M0FP216zhaojun_2dcoding6thrift5fixed(out, _M0MPC14uint4UInt10to__uint64(message.sequence_id), 4, false);
    }
  }
  const _bind$5 = _M0FP216zhaojun_2dcoding6thrift12write__value(out, message.body, compact, 0);
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _ok._0;
  } else {
    return _bind$5;
  }
  if (out.length > 1048576) {
    return new _M0DTPC16result6ResultGzRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("RPC message exceeds one MiB"));
  }
  return new _M0DTPC16result6ResultGzRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(_M0MPC15bytes5Bytes11from__array(new _M0TPB9ArrayViewGyE(out, 0, out.length)));
}
function _M0FP216zhaojun_2dcoding6thrift31encode__framed__message_2einner(message, protocol, strict_write) {
  const _bind$4 = _M0FP216zhaojun_2dcoding6thrift23encode__message_2einner(message, protocol, strict_write);
  let _tmp;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _tmp = _ok._0;
  } else {
    return _bind$4;
  }
  return _M0FP216zhaojun_2dcoding6thrift13frame_2einner(_tmp, 1048576);
}
function _M0MP216zhaojun_2dcoding6thrift6Reader4byte(self) {
  if (self.pos >= self.data.length) {
    return new _M0DTPC16result6ResultGiRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("truncated value"));
  }
  const _tmp = self.data;
  const _tmp$2 = self.pos;
  const b = _tmp$2 >>> 0 < _tmp.length ? _tmp[_tmp$2] : $oob();
  self.pos = self.pos + 1 | 0;
  return new _M0DTPC16result6ResultGiRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(b);
}
function _M0MP216zhaojun_2dcoding6thrift6Reader5fixed(self, width, little) {
  const n = new _M0TPB8MutLocalGmE(0n);
  const _bind$4 = 0;
  let _tmp = _bind$4;
  while (true) {
    const i = _tmp;
    if (i < width) {
      const _tmp$2 = n.val;
      const _bind$5 = _M0MP216zhaojun_2dcoding6thrift6Reader4byte(self);
      let _tmp$3;
      if (_bind$5.$tag === 1) {
        const _ok = _bind$5;
        _tmp$3 = _ok._0;
      } else {
        return _bind$5;
      }
      n.val = BigInt.asUintN(64, _tmp$2 | BigInt.asUintN(64, _M0MPC13int3Int10to__uint64(_tmp$3) << BigInt((Math.imul(little ? i : (width - 1 | 0) - i | 0, 8) | 0) & 63)));
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGmRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(n.val);
}
function _M0MP216zhaojun_2dcoding6thrift6Reader6varint(self) {
  const n = new _M0TPB8MutLocalGmE(0n);
  const _bind$4 = 0;
  const _bind$5 = 10;
  let _tmp = _bind$4;
  while (true) {
    const i = _tmp;
    if (i < _bind$5) {
      const _bind$6 = _M0MP216zhaojun_2dcoding6thrift6Reader4byte(self);
      let b;
      if (_bind$6.$tag === 1) {
        const _ok = _bind$6;
        b = _ok._0;
      } else {
        return _bind$6;
      }
      if (i === 9 && b > 1) {
        return new _M0DTPC16result6ResultGmRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("varint overflow"));
      }
      n.val = BigInt.asUintN(64, n.val | BigInt.asUintN(64, _M0MPC13int3Int10to__uint64(b & 127) << BigInt((Math.imul(i, 7) | 0) & 63)));
      if (b < 128) {
        return new _M0DTPC16result6ResultGmRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(n.val);
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGmRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("unterminated varint"));
}
function _M0MP216zhaojun_2dcoding6thrift6Reader6signed(self, width) {
  if (self.compact) {
    const _bind$4 = _M0MP216zhaojun_2dcoding6thrift6Reader6varint(self);
    let _tmp;
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      _tmp = _ok._0;
    } else {
      return _bind$4;
    }
    return new _M0DTPC16result6ResultGlRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(_M0FP216zhaojun_2dcoding6thrift8unzigzag(_tmp));
  }
  const _bind$4 = _M0MP216zhaojun_2dcoding6thrift6Reader5fixed(self, width, false);
  let n;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    n = _ok._0;
  } else {
    return _bind$4;
  }
  if (width === 8) {
    return new _M0DTPC16result6ResultGlRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(n);
  }
  const shift = 64 - (Math.imul(width, 8) | 0) | 0;
  return new _M0DTPC16result6ResultGlRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(BigInt.asUintN(64, BigInt.asIntN(64, BigInt.asUintN(64, n << BigInt(shift & 63))) >> BigInt(shift & 63)));
}
function _M0MP216zhaojun_2dcoding6thrift6Reader5value(self, tag, depth) {
  self.nodes = self.nodes + 1 | 0;
  if (depth > 64 || self.nodes > 100000) {
    return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("decoding resource limit"));
  }
  _L: {
    switch (tag) {
      case 11: {
        if ((self.data.length - self.pos | 0) < 16) {
          return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("truncated UUID"));
        }
        const data = _M0MPC15bytes9BytesView9to__owned(_M0MPC15bytes5Bytes12view_2einner(self.data, self.pos, self.pos + 16 | 0));
        self.pos = self.pos + 16 | 0;
        return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(new _M0DTP216zhaojun_2dcoding6thrift5Value4Uuid(data));
      }
      case 0: {
        const _bind$4 = _M0MP216zhaojun_2dcoding6thrift6Reader4byte(self);
        let b;
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          b = _ok._0;
        } else {
          return _bind$4;
        }
        if (b === 1) {
          return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(new _M0DTP216zhaojun_2dcoding6thrift5Value4Bool(true));
        } else {
          if (b === (self.compact ? 2 : 0)) {
            return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(new _M0DTP216zhaojun_2dcoding6thrift5Value4Bool(false));
          } else {
            return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("invalid boolean"));
          }
        }
      }
      case 1: {
        const _bind$5 = _M0MP216zhaojun_2dcoding6thrift6Reader4byte(self);
        let n;
        if (_bind$5.$tag === 1) {
          const _ok = _bind$5;
          n = _ok._0;
        } else {
          return _bind$5;
        }
        return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(new _M0DTP216zhaojun_2dcoding6thrift5Value4Byte(n > 127 ? n - 256 | 0 : n));
      }
      case 2: {
        const _bind$6 = _M0MP216zhaojun_2dcoding6thrift6Reader6signed(self, 2);
        let n$2;
        if (_bind$6.$tag === 1) {
          const _ok = _bind$6;
          n$2 = _ok._0;
        } else {
          return _bind$6;
        }
        if (BigInt.asIntN(64, n$2) < BigInt.asIntN(64, 18446744073709518848n) || BigInt.asIntN(64, n$2) > BigInt.asIntN(64, 32767n)) {
          return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("i16 overflow"));
        }
        return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(new _M0DTP216zhaojun_2dcoding6thrift5Value3I16(Number(BigInt.asIntN(32, n$2)) | 0));
      }
      case 3: {
        const _bind$7 = _M0MP216zhaojun_2dcoding6thrift6Reader6signed(self, 4);
        let n$3;
        if (_bind$7.$tag === 1) {
          const _ok = _bind$7;
          n$3 = _ok._0;
        } else {
          return _bind$7;
        }
        if (BigInt.asIntN(64, n$3) < BigInt.asIntN(64, 18446744071562067968n) || BigInt.asIntN(64, n$3) > BigInt.asIntN(64, 2147483647n)) {
          return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("i32 overflow"));
        }
        return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(new _M0DTP216zhaojun_2dcoding6thrift5Value3I32(Number(BigInt.asIntN(32, n$3)) | 0));
      }
      case 4: {
        const _bind$8 = _M0MP216zhaojun_2dcoding6thrift6Reader6signed(self, 8);
        let _tmp;
        if (_bind$8.$tag === 1) {
          const _ok = _bind$8;
          _tmp = _ok._0;
        } else {
          return _bind$8;
        }
        return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(new _M0DTP216zhaojun_2dcoding6thrift5Value3I64(_tmp));
      }
      case 5: {
        const _bind$9 = _M0MP216zhaojun_2dcoding6thrift6Reader5fixed(self, 8, self.compact);
        let _tmp$2;
        if (_bind$9.$tag === 1) {
          const _ok = _bind$9;
          _tmp$2 = _ok._0;
        } else {
          return _bind$9;
        }
        return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(new _M0DTP216zhaojun_2dcoding6thrift5Value6Double($i64_reinterpret_f64(_tmp$2)));
      }
      case 6: {
        let n$4;
        if (self.compact) {
          const _bind$10 = _M0MP216zhaojun_2dcoding6thrift6Reader6varint(self);
          if (_bind$10.$tag === 1) {
            const _ok = _bind$10;
            n$4 = _ok._0;
          } else {
            return _bind$10;
          }
        } else {
          const _bind$10 = _M0MP216zhaojun_2dcoding6thrift6Reader5fixed(self, 4, false);
          if (_bind$10.$tag === 1) {
            const _ok = _bind$10;
            n$4 = _ok._0;
          } else {
            return _bind$10;
          }
        }
        if (BigInt.asUintN(64, n$4) > BigInt.asUintN(64, 1048576n) || BigInt.asUintN(64, n$4) > BigInt.asUintN(64, _M0MPC13int3Int10to__uint64(self.data.length - self.pos | 0))) {
          return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("invalid binary length"));
        }
        const value = _M0MPC15bytes9BytesView9to__owned(_M0MPC15bytes5Bytes12view_2einner(self.data, self.pos, self.pos + (Number(BigInt.asIntN(32, n$4)) | 0) | 0));
        self.pos = self.pos + (Number(BigInt.asIntN(32, n$4)) | 0) | 0;
        return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(new _M0DTP216zhaojun_2dcoding6thrift5Value6Binary(value));
      }
      case 8: {
        break _L;
      }
      case 9: {
        break _L;
      }
      case 10: {
        let kt;
        let vt;
        let n$5;
        _L$2: {
          if (self.compact) {
            const _bind$10 = _M0MP216zhaojun_2dcoding6thrift6Reader6varint(self);
            let n$6;
            if (_bind$10.$tag === 1) {
              const _ok = _bind$10;
              n$6 = _ok._0;
            } else {
              return _bind$10;
            }
            if (BigInt.asUintN(64, n$6) === BigInt.asUintN(64, 0n)) {
              kt = 0;
              vt = 0;
              n$5 = n$6;
              break _L$2;
            } else {
              const _bind$11 = _M0MP216zhaojun_2dcoding6thrift6Reader4byte(self);
              let types;
              if (_bind$11.$tag === 1) {
                const _ok = _bind$11;
                types = _ok._0;
              } else {
                return _bind$11;
              }
              kt = types >> 4;
              vt = types & 15;
              n$5 = n$6;
              break _L$2;
            }
          } else {
            const _bind$10 = _M0MP216zhaojun_2dcoding6thrift6Reader4byte(self);
            let k;
            if (_bind$10.$tag === 1) {
              const _ok = _bind$10;
              k = _ok._0;
            } else {
              return _bind$10;
            }
            const _bind$11 = _M0MP216zhaojun_2dcoding6thrift6Reader4byte(self);
            let v;
            if (_bind$11.$tag === 1) {
              const _ok = _bind$11;
              v = _ok._0;
            } else {
              return _bind$11;
            }
            const _bind$12 = _M0MP216zhaojun_2dcoding6thrift6Reader5fixed(self, 4, false);
            let _tmp$3;
            if (_bind$12.$tag === 1) {
              const _ok = _bind$12;
              _tmp$3 = _ok._0;
            } else {
              return _bind$12;
            }
            kt = k;
            vt = v;
            n$5 = _tmp$3;
            break _L$2;
          }
        }
        if (BigInt.asUintN(64, n$5) > BigInt.asUintN(64, 100000n)) {
          return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("map length limit"));
        }
        let key_kind;
        if (BigInt.asUintN(64, n$5) === BigInt.asUintN(64, 0n) && kt === 0) {
          key_kind = undefined;
        } else {
          const _bind$10 = _M0FP216zhaojun_2dcoding6thrift4kind(kt, self.compact);
          if (_bind$10.$tag === 1) {
            const _ok = _bind$10;
            key_kind = _ok._0;
          } else {
            return _bind$10;
          }
        }
        let value_kind;
        if (BigInt.asUintN(64, n$5) === BigInt.asUintN(64, 0n) && vt === 0) {
          value_kind = undefined;
        } else {
          const _bind$10 = _M0FP216zhaojun_2dcoding6thrift4kind(vt, self.compact);
          if (_bind$10.$tag === 1) {
            const _ok = _bind$10;
            value_kind = _ok._0;
          } else {
            return _bind$10;
          }
        }
        const entries = [];
        const _bind$10 = 0;
        const _bind$11 = Number(BigInt.asIntN(32, n$5)) | 0;
        let _tmp$3 = _bind$10;
        while (true) {
          const _ = _tmp$3;
          if (_ < _bind$11) {
            _L$3: {
              _L$4: {
                let k;
                let v;
                _L$5: {
                  if (key_kind === undefined) {
                    break _L$4;
                  } else {
                    const _Some = key_kind;
                    const _k = _Some;
                    if (value_kind === undefined) {
                      break _L$4;
                    } else {
                      const _Some$2 = value_kind;
                      const _v = _Some$2;
                      k = _k;
                      v = _v;
                      break _L$5;
                    }
                  }
                }
                const _bind$12 = _M0MP216zhaojun_2dcoding6thrift6Reader5value(self, k, depth + 1 | 0);
                let _tmp$4;
                if (_bind$12.$tag === 1) {
                  const _ok = _bind$12;
                  _tmp$4 = _ok._0;
                } else {
                  return _bind$12;
                }
                const _tmp$5 = _tmp$4;
                const _bind$13 = _M0MP216zhaojun_2dcoding6thrift6Reader5value(self, v, depth + 1 | 0);
                let _tmp$6;
                if (_bind$13.$tag === 1) {
                  const _ok = _bind$13;
                  _tmp$6 = _ok._0;
                } else {
                  return _bind$13;
                }
                _M0MPC15array5Array4pushGRPB4JsonE(entries, { _0: _tmp$5, _1: _tmp$6 });
                break _L$3;
              }
              return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("missing map types"));
            }
            _tmp$3 = _ + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(new _M0DTP216zhaojun_2dcoding6thrift5Value8MapValue(key_kind, value_kind, entries));
      }
      default: {
        const fields = [];
        const previous = new _M0TPB8MutLocalGiE(0);
        while (true) {
          const _bind$12 = _M0MP216zhaojun_2dcoding6thrift6Reader4byte(self);
          let header;
          if (_bind$12.$tag === 1) {
            const _ok = _bind$12;
            header = _ok._0;
          } else {
            return _bind$12;
          }
          if (header === 0) {
            break;
          }
          const raw = self.compact ? header & 15 : header;
          const _bind$13 = _M0FP216zhaojun_2dcoding6thrift4kind(raw, self.compact);
          let tag$2;
          if (_bind$13.$tag === 1) {
            const _ok = _bind$13;
            tag$2 = _ok._0;
          } else {
            return _bind$13;
          }
          let id;
          if (self.compact) {
            if (header >> 4 > 0) {
              id = previous.val + (header >> 4) | 0;
            } else {
              const _bind$14 = _M0MP216zhaojun_2dcoding6thrift6Reader6varint(self);
              let _tmp$4;
              if (_bind$14.$tag === 1) {
                const _ok = _bind$14;
                _tmp$4 = _ok._0;
              } else {
                return _bind$14;
              }
              const n$6 = _M0FP216zhaojun_2dcoding6thrift8unzigzag(_tmp$4);
              if (BigInt.asIntN(64, n$6) < BigInt.asIntN(64, 18446744073709518848n) || BigInt.asIntN(64, n$6) > BigInt.asIntN(64, 32767n)) {
                return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("field id overflow"));
              }
              id = Number(BigInt.asIntN(32, n$6)) | 0;
            }
          } else {
            const _bind$14 = _M0MP216zhaojun_2dcoding6thrift6Reader6signed(self, 2);
            let _tmp$4;
            if (_bind$14.$tag === 1) {
              const _ok = _bind$14;
              _tmp$4 = _ok._0;
            } else {
              return _bind$14;
            }
            id = Number(BigInt.asIntN(32, _tmp$4)) | 0;
          }
          if (id < -32768 || id > 32767) {
            return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("field id overflow"));
          }
          let item;
          if (self.compact && _M0IP216zhaojun_2dcoding6thrift4KindPB2Eq5equal(tag$2, 0)) {
            item = new _M0DTP216zhaojun_2dcoding6thrift5Value4Bool(raw === 1);
          } else {
            const _bind$14 = _M0MP216zhaojun_2dcoding6thrift6Reader5value(self, tag$2, depth + 1 | 0);
            if (_bind$14.$tag === 1) {
              const _ok = _bind$14;
              item = _ok._0;
            } else {
              return _bind$14;
            }
          }
          _M0MPC15array5Array4pushGRPB4JsonE(fields, { _0: id, _1: item });
          previous.val = id;
          if (fields.length > 100000) {
            return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("field count limit"));
          }
          continue;
        }
        return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(new _M0DTP216zhaojun_2dcoding6thrift5Value6Struct(fields));
      }
    }
  }
  const is_set = _M0IP216zhaojun_2dcoding6thrift4KindPB2Eq5equal(tag, 9);
  const _bind$4 = _M0MP216zhaojun_2dcoding6thrift6Reader4byte(self);
  let header;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    header = _ok._0;
  } else {
    return _bind$4;
  }
  const _bind$5 = _M0FP216zhaojun_2dcoding6thrift4kind(self.compact ? header & 15 : header, self.compact);
  let tag$2;
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    tag$2 = _ok._0;
  } else {
    return _bind$5;
  }
  let n;
  if (self.compact) {
    if (header >> 4 === 15) {
      const _bind$6 = _M0MP216zhaojun_2dcoding6thrift6Reader6varint(self);
      if (_bind$6.$tag === 1) {
        const _ok = _bind$6;
        n = _ok._0;
      } else {
        return _bind$6;
      }
    } else {
      n = _M0MPC13int3Int10to__uint64(header >> 4);
    }
  } else {
    const _bind$6 = _M0MP216zhaojun_2dcoding6thrift6Reader5fixed(self, 4, false);
    if (_bind$6.$tag === 1) {
      const _ok = _bind$6;
      n = _ok._0;
    } else {
      return _bind$6;
    }
  }
  if (BigInt.asUintN(64, n) > BigInt.asUintN(64, 100000n)) {
    return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("list length exceeds limit"));
  }
  const items = [];
  const _bind$6 = 0;
  const _bind$7 = Number(BigInt.asIntN(32, n)) | 0;
  let _tmp = _bind$6;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$7) {
      const _bind$8 = _M0MP216zhaojun_2dcoding6thrift6Reader5value(self, tag$2, depth + 1 | 0);
      let _tmp$2;
      if (_bind$8.$tag === 1) {
        const _ok = _bind$8;
        _tmp$2 = _ok._0;
      } else {
        return _bind$8;
      }
      _M0MPC15array5Array4pushGRPB4JsonE(items, _tmp$2);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return is_set ? new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(new _M0DTP216zhaojun_2dcoding6thrift5Value8SetValue(tag$2, items)) : new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(new _M0DTP216zhaojun_2dcoding6thrift5Value4List(tag$2, items));
}
function _M0FP216zhaojun_2dcoding6thrift12schema__tick(work, depth) {
  work.val = work.val + 1 | 0;
  if (work.val > 100000 || depth > 64) {
    return new _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("schema value node/depth limit"));
  } else {
    return new _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(undefined);
  }
}
function _M0FP216zhaojun_2dcoding6thrift15schema__integer(n, t) {
  _L: {
    _L$2: {
      switch (t.$tag) {
        case 0: {
          const _Base = t;
          const _x = _Base._0;
          switch (_x) {
            case "bool": {
              return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(new _M0DTP216zhaojun_2dcoding6thrift5Value4Bool(BigInt.asUintN(64, n) !== BigInt.asUintN(64, 0n)));
            }
            case "byte": {
              if (BigInt.asIntN(64, n) >= BigInt.asIntN(64, 18446744073709551488n) && BigInt.asIntN(64, n) <= BigInt.asIntN(64, 127n)) {
                return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(new _M0DTP216zhaojun_2dcoding6thrift5Value4Byte(Number(BigInt.asIntN(32, n)) | 0));
              } else {
                return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("byte out of range"));
              }
            }
            case "i16": {
              if (BigInt.asIntN(64, n) >= BigInt.asIntN(64, 18446744073709518848n) && BigInt.asIntN(64, n) <= BigInt.asIntN(64, 32767n)) {
                return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(new _M0DTP216zhaojun_2dcoding6thrift5Value3I16(Number(BigInt.asIntN(32, n)) | 0));
              } else {
                return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("i16 out of range"));
              }
            }
            case "i32": {
              break _L$2;
            }
            case "i64": {
              return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(new _M0DTP216zhaojun_2dcoding6thrift5Value3I64(n));
            }
            case "double": {
              return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(new _M0DTP216zhaojun_2dcoding6thrift5Value6Double($f64_convert_i64(BigInt.asIntN(64, n))));
            }
            default: {
              break _L;
            }
          }
        }
        case 1: {
          break _L$2;
        }
        default: {
          break _L;
        }
      }
    }
    if (BigInt.asIntN(64, n) >= BigInt.asIntN(64, 18446744071562067968n) && BigInt.asIntN(64, n) <= BigInt.asIntN(64, 2147483647n)) {
      return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(new _M0DTP216zhaojun_2dcoding6thrift5Value3I32(Number(BigInt.asIntN(32, n)) | 0));
    } else {
      return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("i32/enum out of range"));
    }
  }
  return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("integer constant has incompatible type"));
}
function _M0FP216zhaojun_2dcoding6thrift11schema__hex(data) {
  const digits = "0123456789abcdef";
  const out = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const _bind$4 = data.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$4) {
      const byte = data[_];
      const n = byte;
      _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(digits, n >> 4, (n >> 4) + 1 | 0)));
      _M0IPB13StringBuilderPB6Logger13write__string(out, _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(digits, n & 15, (n & 15) + 1 | 0)));
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0MPB13StringBuilder10to__string(out);
}
function _M0FP216zhaojun_2dcoding6thrift13schema__unhex(text) {
  if (text.length > 2097152) {
    return new _M0DTPC16result6ResultGzRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("hex byte limit"));
  }
  const chars = _M0MPC16string6String9to__array(text);
  if (2 === 0) {
    $panic();
  }
  if ((chars.length % 2 | 0) !== 0) {
    return new _M0DTPC16result6ResultGzRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("odd hex length"));
  }
  const bytes = [];
  const value = new _M0TPB8MutLocalGiE(0);
  const _bind$4 = chars.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$4) {
      const c = chars[i];
      if (!_M0MPC14char4Char19is__ascii__hexdigit(c)) {
        return new _M0DTPC16result6ResultGzRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("invalid hex"));
      }
      const n = c <= 57 ? c - 48 | 0 : _M0MPC14char4Char20to__ascii__lowercase(c) - 87 | 0;
      if (2 === 0) {
        $panic();
      }
      if ((i % 2 | 0) === 0) {
        value.val = n << 4;
      } else {
        _M0MPC15array5Array4pushGyE(bytes, (value.val + n | 0) & 255);
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGzRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(_M0MPC15bytes5Bytes11from__array(new _M0TPB9ArrayViewGyE(bytes, 0, bytes.length)));
}
function _M0FP216zhaojun_2dcoding6thrift12schema__uuid(text) {
  let _tmp;
  if (text.length !== 36) {
    _tmp = true;
  } else {
    let _tmp$2;
    const _tmp$3 = _M0MPC16string6String11sub_2einner(text, 8, 9);
    const _bind$4 = "-";
    if (_M0IP016_24default__implPB2Eq10not__equalGRPC16string10StringViewE(_tmp$3, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length))) {
      _tmp$2 = true;
    } else {
      let _tmp$4;
      const _tmp$5 = _M0MPC16string6String11sub_2einner(text, 13, 14);
      const _bind$5 = "-";
      if (_M0IP016_24default__implPB2Eq10not__equalGRPC16string10StringViewE(_tmp$5, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length))) {
        _tmp$4 = true;
      } else {
        let _tmp$6;
        const _tmp$7 = _M0MPC16string6String11sub_2einner(text, 18, 19);
        const _bind$6 = "-";
        if (_M0IP016_24default__implPB2Eq10not__equalGRPC16string10StringViewE(_tmp$7, new _M0TPC16string10StringView(_bind$6, 0, _bind$6.length))) {
          _tmp$6 = true;
        } else {
          const _tmp$8 = _M0MPC16string6String11sub_2einner(text, 23, 24);
          const _bind$7 = "-";
          _tmp$6 = _M0IP016_24default__implPB2Eq10not__equalGRPC16string10StringViewE(_tmp$8, new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length));
        }
        _tmp$4 = _tmp$6;
      }
      _tmp$2 = _tmp$4;
    }
    _tmp = _tmp$2;
  }
  if (_tmp) {
    return new _M0DTPC16result6ResultGzRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("UUID requires canonical hyphenated spelling"));
  }
  const _bind$4 = "-";
  const _tmp$2 = new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length);
  const _bind$5 = "";
  const _bind$6 = _M0FP216zhaojun_2dcoding6thrift13schema__unhex(_M0MPC16string6String12replace__all(text, _tmp$2, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length)));
  let data;
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    data = _ok._0;
  } else {
    return _bind$6;
  }
  if (data.length !== 16) {
    return new _M0DTPC16result6ResultGzRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("UUID requires 16 bytes"));
  }
  return new _M0DTPC16result6ResultGzRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(data);
}
function _M0MP216zhaojun_2dcoding6thrift6Schema4find(self, owner, name) {
  const _bind$4 = "#";
  if (_M0MPC16string6String8contains(name, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length))) {
    let _tmp;
    let d;
    _L: {
      const _bind$5 = _M0MPB3Map3getGsRP216zhaojun_2dcoding6thrift13IdlDefinitionE(self.definitions, name);
      if (_bind$5 === undefined) {
        return new _M0DTPC16result6ResultGUsRP216zhaojun_2dcoding6thrift13IdlDefinitionERP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema(`unknown definition ${name}`));
      } else {
        const _Some = _bind$5;
        const _d = _Some;
        d = _d;
        break _L;
      }
    }
    _tmp = { _0: name, _1: d };
    return new _M0DTPC16result6ResultGUsRP216zhaojun_2dcoding6thrift13IdlDefinitionERP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(_tmp);
  }
  const local_name = `${owner}#${name}`;
  let definition;
  _L: {
    _L$2: {
      const _bind$5 = _M0MPB3Map3getGsRP216zhaojun_2dcoding6thrift13IdlDefinitionE(self.definitions, local_name);
      if (_bind$5 === undefined) {
      } else {
        const _Some = _bind$5;
        const _definition = _Some;
        definition = _definition;
        break _L$2;
      }
      break _L;
    }
    return new _M0DTPC16result6ResultGUsRP216zhaojun_2dcoding6thrift13IdlDefinitionERP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok({ _0: local_name, _1: definition });
  }
  const _bind$5 = ".";
  const parts = _M0MPB4Iter9to__arrayGsE(_M0MPB4Iter3mapGRPC16string10StringViewsE(_M0MPC16string6String5split(name, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length)), (x) => _M0MPC16string10StringView9to__owned(x)));
  if (parts.length > 1) {
    let imports;
    _L$2: {
      _L$3: {
        const _bind$6 = _M0MPB3Map3getGsRPB3MapGssEE(self.imports, owner);
        if (_bind$6 === undefined) {
        } else {
          const _Some = _bind$6;
          const _imports = _Some;
          imports = _imports;
          break _L$3;
        }
        break _L$2;
      }
      let imported;
      _L$4: {
        _L$5: {
          const _bind$6 = _M0MPB3Map3getGssE(imports, _M0MPC15array5Array2atGsE(parts, 0));
          if (_bind$6 === undefined) {
          } else {
            const _Some = _bind$6;
            const _imported = _Some;
            imported = _imported;
            break _L$5;
          }
          break _L$4;
        }
        const _tmp = _M0MPC15array9ArrayView9to__ownedGsE(_M0MPC15array5Array12view_2einnerGsE(parts, 1, undefined));
        const _bind$6 = ".";
        const name$2 = `${imported}#${_M0MPC15array5Array4joinGsE(_tmp, new _M0TPC16string10StringView(_bind$6, 0, _bind$6.length))}`;
        let definition$2;
        _L$6: {
          _L$7: {
            const _bind$7 = _M0MPB3Map3getGsRP216zhaojun_2dcoding6thrift13IdlDefinitionE(self.definitions, name$2);
            if (_bind$7 === undefined) {
            } else {
              const _Some = _bind$7;
              const _definition = _Some;
              definition$2 = _definition;
              break _L$7;
            }
            break _L$6;
          }
          return new _M0DTPC16result6ResultGUsRP216zhaojun_2dcoding6thrift13IdlDefinitionERP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok({ _0: name$2, _1: definition$2 });
        }
      }
    }
  }
  return new _M0DTPC16result6ResultGUsRP216zhaojun_2dcoding6thrift13IdlDefinitionERP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema(`unknown definition ${owner}:${name}`));
}
function _M0MP216zhaojun_2dcoding6thrift6Schema12enum__number(self, owner, t, name) {
  const target = new _M0TPB8MutLocalGORP216zhaojun_2dcoding6thrift13IdlDefinitionE(undefined);
  const label = new _M0TPB8MutLocalGsE(name);
  const _bind$4 = ".";
  const parts = _M0MPB4Iter9to__arrayGsE(_M0MPB4Iter3mapGRPC16string10StringViewsE(_M0MPC16string6String5split(name, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length)), (s) => _M0MPC16string10StringView9to__owned(s)));
  if (parts.length > 1) {
    label.val = _M0MPC15array5Array2atGsE(parts, parts.length - 1 | 0);
    const _tmp = _M0MPC15array9ArrayView9to__ownedGsE(_M0MPC15array5Array12view_2einnerGsE(parts, 0, parts.length - 1 | 0));
    const _bind$5 = ".";
    const prefix = _M0MPC15array5Array4joinGsE(_tmp, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length));
    let resolved;
    let _try_err;
    _L: {
      _L$2: {
        const _bind$6 = _M0MP216zhaojun_2dcoding6thrift6Schema4find(self, owner, prefix);
        if (_bind$6.$tag === 1) {
          const _ok = _bind$6;
          resolved = _ok._0;
        } else {
          const _err = _bind$6;
          _try_err = _err._0;
          break _L$2;
        }
        break _L;
      }
      return undefined;
    }
    target.val = resolved._1;
  } else {
    let target_name;
    _L: {
      _L$2: {
        if (t.$tag === 1) {
          const _Named = t;
          const _target_name = _Named._0;
          target_name = _target_name;
          break _L$2;
        }
        break _L;
      }
      target.val = _M0MPB3Map3getGsRP216zhaojun_2dcoding6thrift13IdlDefinitionE(self.definitions, target_name);
    }
  }
  let values;
  _L: {
    _L$2: {
      const _bind$5 = target.val;
      if (_bind$5 === undefined) {
      } else {
        const _Some = _bind$5;
        const _x = _Some;
        if (_x.$tag === 1) {
          const _Enumeration = _x;
          const _values = _Enumeration._1;
          values = _values;
          break _L$2;
        }
      }
      break _L;
    }
    const _bind$5 = values.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind$5) {
        const pair = values[_];
        if (pair._0 === label.val) {
          return pair._1;
        }
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  }
  return undefined;
}
function _M0FP216zhaojun_2dcoding6thrift17definition__owner(name) {
  const _bind$4 = "#";
  const _tmp = _M0MPB4Iter4nextGUsRPB4JsonEE(_M0MPC16string6String5split(name, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length)));
  const _bind$5 = "";
  return _M0MPC16string10StringView9to__owned(_M0MPC16option6Option10unwrap__orGsE(_tmp, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length)));
}
function _M0MP216zhaojun_2dcoding6thrift6Schema7resolve(self, owner, t, depth) {
  let _tmp = self;
  let _tmp$2 = owner;
  let _tmp$3 = t;
  let _tmp$4 = depth;
  _L: while (true) {
    const self$2 = _tmp;
    const owner$2 = _tmp$2;
    const t$2 = _tmp$3;
    const depth$2 = _tmp$4;
    if (depth$2 > 64) {
      return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift7IdlTypeRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("type alias or nesting cycle/limit"));
    }
    let key;
    let value;
    _L$2: {
      let elem;
      _L$3: {
        let elem$2;
        _L$4: {
          let name;
          _L$5: {
            switch (t$2.$tag) {
              case 0: {
                return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift7IdlTypeRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(t$2);
              }
              case 1: {
                const _Named = t$2;
                const _name = _Named._0;
                name = _name;
                break _L$5;
              }
              case 2: {
                const _ListOf = t$2;
                const _elem = _ListOf._0;
                elem$2 = _elem;
                break _L$4;
              }
              case 3: {
                const _SetOf = t$2;
                const _elem$2 = _SetOf._0;
                elem = _elem$2;
                break _L$3;
              }
              default: {
                const _MapOf = t$2;
                const _key = _MapOf._0;
                const _value = _MapOf._1;
                key = _key;
                value = _value;
                break _L$2;
              }
            }
          }
          let name$2;
          let definition;
          _L$6: {
            const _bind$4 = _M0MP216zhaojun_2dcoding6thrift6Schema4find(self$2, owner$2, name);
            let _bind$5;
            if (_bind$4.$tag === 1) {
              const _ok = _bind$4;
              _bind$5 = _ok._0;
            } else {
              return _bind$4;
            }
            const _name = _bind$5._0;
            const _definition = _bind$5._1;
            name$2 = _name;
            definition = _definition;
            break _L$6;
          }
          _L$7: {
            let target;
            _L$8: {
              switch (definition.$tag) {
                case 0: {
                  const _Alias = definition;
                  const _target = _Alias._1;
                  target = _target;
                  break _L$8;
                }
                case 2: {
                  break _L$7;
                }
                case 1: {
                  break _L$7;
                }
                default: {
                  return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift7IdlTypeRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema(`not a field type: ${name$2}`));
                }
              }
            }
            _tmp$2 = _M0FP216zhaojun_2dcoding6thrift17definition__owner(name$2);
            _tmp$3 = target;
            _tmp$4 = depth$2 + 1 | 0;
            continue;
          }
          return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift7IdlTypeRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(new _M0DTP216zhaojun_2dcoding6thrift7IdlType5Named(name$2));
        }
        const _bind$4 = _M0MP216zhaojun_2dcoding6thrift6Schema7resolve(self$2, owner$2, elem$2, depth$2 + 1 | 0);
        let elem$3;
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          elem$3 = _ok._0;
        } else {
          return _bind$4;
        }
        if (_M0IP216zhaojun_2dcoding6thrift7IdlTypePB2Eq5equal(elem$3, new _M0DTP216zhaojun_2dcoding6thrift7IdlType4Base("void"))) {
          return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift7IdlTypeRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("void list element"));
        }
        return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift7IdlTypeRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(new _M0DTP216zhaojun_2dcoding6thrift7IdlType6ListOf(elem$3));
      }
      const _bind$4 = _M0MP216zhaojun_2dcoding6thrift6Schema7resolve(self$2, owner$2, elem, depth$2 + 1 | 0);
      let elem$2;
      if (_bind$4.$tag === 1) {
        const _ok = _bind$4;
        elem$2 = _ok._0;
      } else {
        return _bind$4;
      }
      if (_M0IP216zhaojun_2dcoding6thrift7IdlTypePB2Eq5equal(elem$2, new _M0DTP216zhaojun_2dcoding6thrift7IdlType4Base("void"))) {
        return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift7IdlTypeRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("void set element"));
      }
      return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift7IdlTypeRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(new _M0DTP216zhaojun_2dcoding6thrift7IdlType5SetOf(elem$2));
    }
    const _bind$4 = _M0MP216zhaojun_2dcoding6thrift6Schema7resolve(self$2, owner$2, key, depth$2 + 1 | 0);
    let key$2;
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      key$2 = _ok._0;
    } else {
      return _bind$4;
    }
    const _bind$5 = _M0MP216zhaojun_2dcoding6thrift6Schema7resolve(self$2, owner$2, value, depth$2 + 1 | 0);
    let value$2;
    if (_bind$5.$tag === 1) {
      const _ok = _bind$5;
      value$2 = _ok._0;
    } else {
      return _bind$5;
    }
    if (_M0IP216zhaojun_2dcoding6thrift7IdlTypePB2Eq5equal(key$2, new _M0DTP216zhaojun_2dcoding6thrift7IdlType4Base("void")) || _M0IP216zhaojun_2dcoding6thrift7IdlTypePB2Eq5equal(value$2, new _M0DTP216zhaojun_2dcoding6thrift7IdlType4Base("void"))) {
      return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift7IdlTypeRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("void map type"));
    }
    return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift7IdlTypeRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(new _M0DTP216zhaojun_2dcoding6thrift7IdlType5MapOf(key$2, value$2));
  }
}
function _M0MP216zhaojun_2dcoding6thrift6Schema19const__json_2einner(self, owner, t, value, trail, depth, budget) {
  let _tmp = self;
  let _tmp$2 = owner;
  let _tmp$3 = t;
  let _tmp$4 = value;
  let _tmp$5 = trail;
  let _tmp$6 = depth;
  let _tmp$7 = budget;
  _L: while (true) {
    const self$2 = _tmp;
    const owner$2 = _tmp$2;
    const t$2 = _tmp$3;
    const value$2 = _tmp$4;
    const trail$2 = _tmp$5;
    const depth$2 = _tmp$6;
    const budget$2 = _tmp$7;
    const _bind$4 = _M0FP216zhaojun_2dcoding6thrift12schema__tick(budget$2, depth$2);
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      _ok._0;
    } else {
      return _bind$4;
    }
    let name;
    _L$2: {
      _L$3: {
        if (value$2.$tag === 3) {
          const _NameConstant = value$2;
          const _name = _NameConstant._0;
          name = _name;
          break _L$3;
        }
        break _L$2;
      }
      if (name === "true" || name === "false") {
        _tmp$4 = new _M0DTP216zhaojun_2dcoding6thrift8IdlConst15IntegerConstant(name === "true" ? 1n : 0n);
        _tmp$6 = depth$2 + 1 | 0;
        continue;
      }
      let target;
      _L$4: {
        _L$5: {
          if (t$2.$tag === 1) {
            const _Named = t$2;
            const _target = _Named._0;
            target = _target;
            break _L$5;
          }
          break _L$4;
        }
        const _bind$5 = _M0MPB3Map3getGsRP216zhaojun_2dcoding6thrift13IdlDefinitionE(self$2.definitions, target);
        if (_bind$5 === undefined) {
        } else {
          const _Some = _bind$5;
          const _x = _Some;
          switch (_x.$tag) {
            case 2: {
              return new _M0DTPC16result6ResultGRPB4JsonRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("struct default requires a map literal"));
            }
            case 1: {
              const _bind$6 = ".";
              if (!_M0MPC16string6String8contains(name, new _M0TPC16string10StringView(_bind$6, 0, _bind$6.length))) {
                return new _M0DTPC16result6ResultGRPB4JsonRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("enum constant identifier must be qualified"));
              }
              break;
            }
          }
        }
      }
      let n;
      _L$5: {
        _L$6: {
          const _bind$5 = _M0MP216zhaojun_2dcoding6thrift6Schema12enum__number(self$2, owner$2, t$2, name);
          if (_bind$5 === undefined) {
          } else {
            const _Some = _bind$5;
            const _n = _Some;
            n = _n;
            break _L$6;
          }
          break _L$5;
        }
        _tmp$4 = new _M0DTP216zhaojun_2dcoding6thrift8IdlConst15IntegerConstant(BigInt.asUintN(64, BigInt(n)));
        _tmp$6 = depth$2 + 1 | 0;
        continue;
      }
      let name$2;
      let definition;
      _L$6: {
        const _bind$5 = _M0MP216zhaojun_2dcoding6thrift6Schema4find(self$2, owner$2, name);
        let _bind$6;
        if (_bind$5.$tag === 1) {
          const _ok = _bind$5;
          _bind$6 = _ok._0;
        } else {
          return _bind$5;
        }
        const _name = _bind$6._0;
        const _definition = _bind$6._1;
        name$2 = _name;
        definition = _definition;
        break _L$6;
      }
      if (_M0MPC15array5Array8containsGsE(trail$2, name$2)) {
        return new _M0DTPC16result6ResultGRPB4JsonRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema(`circular constant ${name$2}`));
      }
      let declared;
      let constant;
      _L$7: {
        _L$8: {
          if (definition.$tag === 3) {
            const _Constant = definition;
            const _declared = _Constant._1;
            const _constant = _Constant._2;
            declared = _declared;
            constant = _constant;
            break _L$8;
          }
          break _L$7;
        }
        const context = _M0FP216zhaojun_2dcoding6thrift17definition__owner(name$2);
        const _bind$5 = _M0MP216zhaojun_2dcoding6thrift6Schema7resolve(self$2, context, declared, 0);
        let declared$2;
        if (_bind$5.$tag === 1) {
          const _ok = _bind$5;
          declared$2 = _ok._0;
        } else {
          return _bind$5;
        }
        let constant$2;
        _L$9: {
          _L$10: {
            if (_M0IP216zhaojun_2dcoding6thrift7IdlTypePB2Eq5equal(declared$2, new _M0DTP216zhaojun_2dcoding6thrift7IdlType4Base("double"))) {
              if (constant.$tag === 0) {
                constant$2 = new _M0DTP216zhaojun_2dcoding6thrift8IdlConst13FloatConstant(0);
              } else {
                break _L$10;
              }
            } else {
              break _L$10;
            }
            break _L$9;
          }
          constant$2 = constant;
        }
        _M0MPC15array5Array4pushGRPB4JsonE(trail$2, name$2);
        const _defer = () => {
          _M0MPC15array5Array3popGRPC14json10WriteFrameE(trail$2);
        };
        let _err;
        _L$10: {
          const _bind$6 = _M0MP216zhaojun_2dcoding6thrift6Schema19const__json_2einner(self$2, context, t$2, constant$2, trail$2, depth$2 + 1 | 0, budget$2);
          let _bind$7;
          if (_bind$6.$tag === 1) {
            const _ok = _bind$6;
            _bind$7 = _ok._0;
          } else {
            const _err$2 = _bind$6;
            _err = _err$2._0;
            break _L$10;
          }
          _defer();
          return new _M0DTPC16result6ResultGRPB4JsonRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(_bind$7);
        }
        _defer();
        return new _M0DTPC16result6ResultGRPB4JsonRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(_err);
      }
      return new _M0DTPC16result6ResultGRPB4JsonRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema(`not a constant ${name$2}`));
    }
    _L$3: {
      let name$2;
      let values;
      _L$4: {
        let tvalue;
        let key;
        let values$2;
        _L$5: {
          let elem;
          let values$3;
          _L$6: {
            let s;
            _L$7: {
              let s$2;
              _L$8: {
                let s$3;
                _L$9: {
                  let n;
                  _L$10: {
                    let name$3;
                    let n$2;
                    _L$11: {
                      let n$3;
                      _L$12: {
                        let n$4;
                        _L$13: {
                          let n$5;
                          _L$14: {
                            switch (t$2.$tag) {
                              case 0: {
                                const _Base = t$2;
                                const _x = _Base._0;
                                switch (_x) {
                                  case "bool": {
                                    if (value$2.$tag === 0) {
                                      const _IntegerConstant = value$2;
                                      const _n = _IntegerConstant._0;
                                      n$5 = _n;
                                      break _L$14;
                                    } else {
                                      break _L$3;
                                    }
                                  }
                                  case "byte": {
                                    if (value$2.$tag === 0) {
                                      const _IntegerConstant = value$2;
                                      const _n = _IntegerConstant._0;
                                      n$4 = _n;
                                      break _L$13;
                                    } else {
                                      break _L$3;
                                    }
                                  }
                                  case "i16": {
                                    if (value$2.$tag === 0) {
                                      const _IntegerConstant = value$2;
                                      const _n = _IntegerConstant._0;
                                      n$4 = _n;
                                      break _L$13;
                                    } else {
                                      break _L$3;
                                    }
                                  }
                                  case "i32": {
                                    if (value$2.$tag === 0) {
                                      const _IntegerConstant = value$2;
                                      const _n = _IntegerConstant._0;
                                      n$4 = _n;
                                      break _L$13;
                                    } else {
                                      break _L$3;
                                    }
                                  }
                                  case "double": {
                                    switch (value$2.$tag) {
                                      case 0: {
                                        const _IntegerConstant = value$2;
                                        const _n = _IntegerConstant._0;
                                        n$4 = _n;
                                        break _L$13;
                                      }
                                      case 1: {
                                        const _FloatConstant = value$2;
                                        const _n$2 = _FloatConstant._0;
                                        n = _n$2;
                                        break _L$10;
                                      }
                                      default: {
                                        break _L$3;
                                      }
                                    }
                                  }
                                  case "i64": {
                                    if (value$2.$tag === 0) {
                                      const _IntegerConstant$2 = value$2;
                                      const _n$3 = _IntegerConstant$2._0;
                                      n$3 = _n$3;
                                      break _L$12;
                                    } else {
                                      break _L$3;
                                    }
                                  }
                                  case "string": {
                                    if (value$2.$tag === 2) {
                                      const _StringConstant = value$2;
                                      const _s = _StringConstant._0;
                                      s$3 = _s;
                                      break _L$9;
                                    } else {
                                      break _L$3;
                                    }
                                  }
                                  case "binary": {
                                    if (value$2.$tag === 2) {
                                      const _StringConstant = value$2;
                                      const _s = _StringConstant._0;
                                      s$2 = _s;
                                      break _L$8;
                                    } else {
                                      break _L$3;
                                    }
                                  }
                                  case "uuid": {
                                    if (value$2.$tag === 2) {
                                      const _StringConstant = value$2;
                                      const _s = _StringConstant._0;
                                      s = _s;
                                      break _L$7;
                                    } else {
                                      break _L$3;
                                    }
                                  }
                                  default: {
                                    break _L$3;
                                  }
                                }
                              }
                              case 1: {
                                const _Named = t$2;
                                const _name = _Named._0;
                                switch (value$2.$tag) {
                                  case 0: {
                                    const _IntegerConstant$2 = value$2;
                                    const _n$3 = _IntegerConstant$2._0;
                                    _L$15: {
                                      const _bind$5 = _M0MPB3Map3getGsRP216zhaojun_2dcoding6thrift13IdlDefinitionE(self$2.definitions, _name);
                                      if (_bind$5 === undefined) {
                                        break _L$15;
                                      } else {
                                        const _Some = _bind$5;
                                        const _x$2 = _Some;
                                        if (_x$2.$tag === 1) {
                                          name$3 = _name;
                                          n$2 = _n$3;
                                          break _L$11;
                                        } else {
                                          break _L$15;
                                        }
                                      }
                                    }
                                    break _L$3;
                                  }
                                  case 5: {
                                    const _MapConstant = value$2;
                                    const _values = _MapConstant._0;
                                    name$2 = _name;
                                    values = _values;
                                    break _L$4;
                                  }
                                  default: {
                                    break _L$3;
                                  }
                                }
                              }
                              case 2: {
                                const _ListOf = t$2;
                                const _elem = _ListOf._0;
                                if (value$2.$tag === 4) {
                                  const _ListConstant = value$2;
                                  const _values$2 = _ListConstant._0;
                                  elem = _elem;
                                  values$3 = _values$2;
                                  break _L$6;
                                } else {
                                  break _L$3;
                                }
                              }
                              case 3: {
                                const _SetOf = t$2;
                                const _elem$2 = _SetOf._0;
                                if (value$2.$tag === 4) {
                                  const _ListConstant = value$2;
                                  const _values$2 = _ListConstant._0;
                                  elem = _elem$2;
                                  values$3 = _values$2;
                                  break _L$6;
                                } else {
                                  break _L$3;
                                }
                              }
                              default: {
                                const _MapOf = t$2;
                                const _key = _MapOf._0;
                                const _tvalue = _MapOf._1;
                                if (value$2.$tag === 5) {
                                  const _MapConstant$2 = value$2;
                                  const _values$2 = _MapConstant$2._0;
                                  tvalue = _tvalue;
                                  key = _key;
                                  values$2 = _values$2;
                                  break _L$5;
                                } else {
                                  break _L$3;
                                }
                              }
                            }
                          }
                          return new _M0DTPC16result6ResultGRPB4JsonRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(_M0IPC14bool4BoolPB6ToJson8to__json(BigInt.asUintN(64, n$5) !== BigInt.asUintN(64, 0n)));
                        }
                        return new _M0DTPC16result6ResultGRPB4JsonRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(_M0MPC14json4Json6number($f64_convert_i64(BigInt.asIntN(64, n$4)), _M0MPC15int645Int6418to__string_2einner(n$4, 10)));
                      }
                      return new _M0DTPC16result6ResultGRPB4JsonRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(_M0IPC16string6StringPB6ToJson8to__json(_M0MPC15int645Int6418to__string_2einner(n$3, 10)));
                    }
                    return new _M0DTPC16result6ResultGRPB4JsonRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(_M0MPC14json4Json6number($f64_convert_i64(BigInt.asIntN(64, n$2)), _M0MPC15int645Int6418to__string_2einner(n$2, 10)));
                  }
                  return _M0MPC16double6Double7is__nan(n) ? new _M0DTPC16result6ResultGRPB4JsonRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(_M0IPC16string6StringPB6ToJson8to__json("NaN")) : _M0MPC16double6Double7is__inf(n) ? new _M0DTPC16result6ResultGRPB4JsonRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(_M0IPC16string6StringPB6ToJson8to__json(n < 0 ? "-Infinity" : "Infinity")) : new _M0DTPC16result6ResultGRPB4JsonRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(_M0IPC16double6DoublePB6ToJson8to__json(n));
                }
                return new _M0DTPC16result6ResultGRPB4JsonRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(_M0IPC16string6StringPB6ToJson8to__json(s$3));
              }
              const _bind$5 = [{ _0: "$binary", _1: _M0IPC16string6StringPB6ToJson8to__json(_M0FP216zhaojun_2dcoding6thrift11schema__hex(_M0FPC28encoding4utf814encode_2einner(new _M0TPC16string10StringView(s$2, 0, s$2.length), false))) }];
              return new _M0DTPC16result6ResultGRPB4JsonRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(_M0MPC14json4Json6object(_M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$5, 0, 1), undefined)));
            }
            const _bind$5 = _M0FP216zhaojun_2dcoding6thrift12schema__uuid(s);
            if (_bind$5.$tag === 1) {
              const _ok = _bind$5;
              _ok._0;
            } else {
              return _bind$5;
            }
            return new _M0DTPC16result6ResultGRPB4JsonRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(_M0IPC16string6StringPB6ToJson8to__json(_M0MPC16string6String9to__lower(s)));
          }
          const _bind$5 = _M0MPC15array5Array3mapGRP216zhaojun_2dcoding6thrift8IdlConstRPB4JsonEHRP216zhaojun_2dcoding6thrift11SchemaError(values$3, (v) => _M0MP216zhaojun_2dcoding6thrift6Schema19const__json_2einner(self$2, owner$2, elem, v, trail$2, depth$2 + 1 | 0, budget$2));
          let _tmp$8;
          if (_bind$5.$tag === 1) {
            const _ok = _bind$5;
            _tmp$8 = _ok._0;
          } else {
            return _bind$5;
          }
          return new _M0DTPC16result6ResultGRPB4JsonRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(_M0MPC14json4Json5array(_tmp$8));
        }
        const _bind$5 = _M0MPC15array5Array3mapGURP216zhaojun_2dcoding6thrift8IdlConstRP216zhaojun_2dcoding6thrift8IdlConstERPB4JsonEHRP216zhaojun_2dcoding6thrift11SchemaError(values$2, (pair) => {
          const _bind$6 = _M0MP216zhaojun_2dcoding6thrift6Schema19const__json_2einner(self$2, owner$2, key, pair._0, trail$2, depth$2 + 1 | 0, budget$2);
          let _tmp$8;
          if (_bind$6.$tag === 1) {
            const _ok = _bind$6;
            _tmp$8 = _ok._0;
          } else {
            return _bind$6;
          }
          const _tmp$9 = _tmp$8;
          const _bind$7 = _M0MP216zhaojun_2dcoding6thrift6Schema19const__json_2einner(self$2, owner$2, tvalue, pair._1, trail$2, depth$2 + 1 | 0, budget$2);
          let _tmp$10;
          if (_bind$7.$tag === 1) {
            const _ok = _bind$7;
            _tmp$10 = _ok._0;
          } else {
            return _bind$7;
          }
          return new _M0DTPC16result6ResultGRPB4JsonRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(_M0MPC14json4Json5array([_tmp$9, _tmp$10]));
        });
        let _tmp$8;
        if (_bind$5.$tag === 1) {
          const _ok = _bind$5;
          _tmp$8 = _ok._0;
        } else {
          return _bind$5;
        }
        return new _M0DTPC16result6ResultGRPB4JsonRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(_M0MPC14json4Json5array(_tmp$8));
      }
      let fields;
      _L$5: {
        _L$6: {
          const _bind$5 = _M0MPB3Map3getGsRP216zhaojun_2dcoding6thrift13IdlDefinitionE(self$2.definitions, name$2);
          if (_bind$5 === undefined) {
            break _L$6;
          } else {
            const _Some = _bind$5;
            const _x = _Some;
            if (_x.$tag === 2) {
              const _Record = _x;
              const _fields = _Record._2;
              fields = _fields;
            } else {
              break _L$6;
            }
          }
          break _L$5;
        }
        return new _M0DTPC16result6ResultGRPB4JsonRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("map constant requires struct type"));
      }
      const _bind$5 = [];
      const object = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$5, 0, 0), undefined);
      const _bind$6 = values.length;
      let _tmp$8 = 0;
      while (true) {
        const _ = _tmp$8;
        if (_ < _bind$6) {
          const pair = values[_];
          let label;
          const _bind$7 = pair._0;
          switch (_bind$7.$tag) {
            case 2: {
              const _StringConstant = _bind$7;
              const _s = _StringConstant._0;
              label = _s;
              break;
            }
            case 3: {
              const _NameConstant = _bind$7;
              const _s$2 = _NameConstant._0;
              label = _s$2;
              break;
            }
            default: {
              return new _M0DTPC16result6ResultGRPB4JsonRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("struct constant key must name a field"));
            }
          }
          let field;
          const _bind$8 = _M0MPB4Iter11find__firstGRP216zhaojun_2dcoding6thrift8IdlFieldE(_M0MPC15array5Array4iterGRP216zhaojun_2dcoding6thrift8IdlFieldE(fields), (f) => f.name === label);
          if (_bind$8 === undefined) {
            return new _M0DTPC16result6ResultGRPB4JsonRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema(`unknown struct constant field ${label}`));
          } else {
            const _Some = _bind$8;
            const _field = _Some;
            field = _field;
          }
          const _bind$9 = _M0MP216zhaojun_2dcoding6thrift6Schema7resolve(self$2, _M0FP216zhaojun_2dcoding6thrift17definition__owner(name$2), field.field_type, 0);
          let _tmp$9;
          if (_bind$9.$tag === 1) {
            const _ok = _bind$9;
            _tmp$9 = _ok._0;
          } else {
            return _bind$9;
          }
          const _bind$10 = _M0MP216zhaojun_2dcoding6thrift6Schema19const__json_2einner(self$2, owner$2, _tmp$9, pair._1, trail$2, depth$2 + 1 | 0, budget$2);
          let _tmp$10;
          if (_bind$10.$tag === 1) {
            const _ok = _bind$10;
            _tmp$10 = _ok._0;
          } else {
            return _bind$10;
          }
          _M0MPB3Map3setGsRPB4JsonE(object, label, _tmp$10);
          _tmp$8 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return new _M0DTPC16result6ResultGRPB4JsonRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(_M0MPC14json4Json6object(object));
    }
    return new _M0DTPC16result6ResultGRPB4JsonRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("constant type mismatch"));
  }
}
function _M0MP216zhaojun_2dcoding6thrift6Schema11const__json(self, owner, t, value, trail, depth, budget$46$opt) {
  let budget;
  if (budget$46$opt === undefined) {
    budget = _M0MPC13ref3Ref3RefGiE(0);
  } else {
    const _Some = budget$46$opt;
    budget = _Some;
  }
  return _M0MP216zhaojun_2dcoding6thrift6Schema19const__json_2einner(self, owner, t, value, trail, depth, budget);
}
function _M0FP216zhaojun_2dcoding6thrift10idl__digit(c) {
  return c >= 48 && c <= 57;
}
function _M0FP216zhaojun_2dcoding6thrift13json__integer(input) {
  let n;
  _L: {
    let s;
    _L$2: {
      switch (input.$tag) {
        case 4: {
          const _String = input;
          const _s = _String._0;
          s = _s;
          break _L$2;
        }
        case 3: {
          const _Number = input;
          const _n = _Number._0;
          n = _n;
          break _L;
        }
        default: {
          return new _M0DTPC16result6ResultGlRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("expected integer"));
        }
      }
    }
    const cs = _M0MPC16string6String9to__array(s);
    if (_M0MPC15array5Array9is__emptyGcE(cs)) {
      return new _M0DTPC16result6ResultGlRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("empty integer"));
    }
    const _bind$4 = cs.length;
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < _bind$4) {
        const c = cs[i];
        if (!_M0FP216zhaojun_2dcoding6thrift10idl__digit(c) && !(i === 0 && (c === 45 || c === 43))) {
          return new _M0DTPC16result6ResultGlRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("invalid integer spelling"));
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    let _try_err;
    _L$3: {
      const _bind$5 = _M0FPC28internal7strconv20parse__int64_2einner(new _M0TPC16string10StringView(s, 0, s.length), 0);
      let _tmp$2;
      if (_bind$5.$tag === 1) {
        const _ok = _bind$5;
        _tmp$2 = _ok._0;
      } else {
        const _err = _bind$5;
        _try_err = _err._0;
        break _L$3;
      }
      return new _M0DTPC16result6ResultGlRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(_tmp$2);
    }
    return new _M0DTPC16result6ResultGlRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("integer outside signed 64-bit range"));
  }
  if (!_M0MPC16double6Double7is__nan(n) && (!_M0MPC16double6Double7is__inf(n) && (n === _M0MPC16double6Double5trunc(n) && Math.abs(n) <= 9007199254740991))) {
    return new _M0DTPC16result6ResultGlRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok($i64_trunc_f64(n));
  } else {
    return new _M0DTPC16result6ResultGlRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("JSON integer must be safe and integral; use a decimal string for i64"));
  }
}
function _M0MP216zhaojun_2dcoding6thrift6Schema10wire__kind(self, t) {
  let name;
  _L: {
    let name$2;
    _L$2: {
      switch (t.$tag) {
        case 0: {
          const _Base = t;
          const _name = _Base._0;
          name$2 = _name;
          break _L$2;
        }
        case 2: {
          return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift4KindRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(8);
        }
        case 3: {
          return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift4KindRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(9);
        }
        case 4: {
          return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift4KindRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(10);
        }
        default: {
          const _Named = t;
          const _name$2 = _Named._0;
          name = _name$2;
          break _L;
        }
      }
    }
    _L$3: {
      switch (name$2) {
        case "bool": {
          return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift4KindRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(0);
        }
        case "byte": {
          return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift4KindRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(1);
        }
        case "i16": {
          return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift4KindRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(2);
        }
        case "i32": {
          return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift4KindRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(3);
        }
        case "i64": {
          return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift4KindRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(4);
        }
        case "double": {
          return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift4KindRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(5);
        }
        case "string": {
          break _L$3;
        }
        case "binary": {
          break _L$3;
        }
        case "uuid": {
          return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift4KindRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(11);
        }
        default: {
          return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift4KindRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("void is not a wire value"));
        }
      }
    }
    return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift4KindRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(6);
  }
  _L$2: {
    const _bind$4 = _M0MPB3Map3getGsRP216zhaojun_2dcoding6thrift13IdlDefinitionE(self.definitions, name);
    if (_bind$4 === undefined) {
      break _L$2;
    } else {
      const _Some = _bind$4;
      const _x = _Some;
      switch (_x.$tag) {
        case 1: {
          return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift4KindRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(3);
        }
        case 2: {
          return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift4KindRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(7);
        }
        default: {
          break _L$2;
        }
      }
    }
  }
  return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift4KindRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("unresolved schema type"));
}
function _M0MP216zhaojun_2dcoding6thrift6Schema20const__value_2einner(self, owner, t, value, trail, depth, budget) {
  const _bind$4 = _M0MP216zhaojun_2dcoding6thrift6Schema19const__json_2einner(self, owner, t, value, trail, depth, budget);
  let json;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    json = _ok._0;
  } else {
    return _bind$4;
  }
  return _M0MP216zhaojun_2dcoding6thrift6Schema16from__json__type(self, owner, t, json, budget, depth);
}
function _M0MP216zhaojun_2dcoding6thrift6Schema16from__json__type(self, owner, t, input, work, depth) {
  const _bind$4 = _M0FP216zhaojun_2dcoding6thrift12schema__tick(work, depth);
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _ok._0;
  } else {
    return _bind$4;
  }
  _L: {
    let name;
    _L$2: {
      let tvalue;
      let key;
      let values;
      _L$3: {
        let elem;
        let values$2;
        _L$4: {
          let s;
          _L$5: {
            let s$2;
            _L$6: {
              let s$3;
              _L$7: {
                let s$4;
                _L$8: {
                  let n;
                  _L$9: {
                    _L$10: {
                      switch (t.$tag) {
                        case 0: {
                          const _Base = t;
                          const _x = _Base._0;
                          switch (_x) {
                            case "bool": {
                              switch (input.$tag) {
                                case 1: {
                                  return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(new _M0DTP216zhaojun_2dcoding6thrift5Value4Bool(true));
                                }
                                case 2: {
                                  return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(new _M0DTP216zhaojun_2dcoding6thrift5Value4Bool(false));
                                }
                                default: {
                                  break _L;
                                }
                              }
                            }
                            case "byte": {
                              break _L$10;
                            }
                            case "i16": {
                              break _L$10;
                            }
                            case "i32": {
                              break _L$10;
                            }
                            case "i64": {
                              break _L$10;
                            }
                            case "double": {
                              switch (input.$tag) {
                                case 3: {
                                  const _Number = input;
                                  const _n = _Number._0;
                                  n = _n;
                                  break _L$9;
                                }
                                case 4: {
                                  const _String = input;
                                  const _s = _String._0;
                                  s$4 = _s;
                                  break _L$8;
                                }
                                default: {
                                  break _L;
                                }
                              }
                            }
                            case "string": {
                              if (input.$tag === 4) {
                                const _String$2 = input;
                                const _s$2 = _String$2._0;
                                s$3 = _s$2;
                                break _L$7;
                              } else {
                                break _L;
                              }
                            }
                            case "binary": {
                              if (input.$tag === 6) {
                                const _Object = input;
                                const _x$2 = _Object._0;
                                const _x$3 = _M0MPB3Map3getGsRPB4JsonE(_x$2, "$binary");
                                if (_x$3 === undefined) {
                                  break _L;
                                } else {
                                  const _Some = _x$3;
                                  const _x$4 = _Some;
                                  if (_x$4.$tag === 4) {
                                    const _String$2 = _x$4;
                                    const _s$2 = _String$2._0;
                                    s$2 = _s$2;
                                    break _L$6;
                                  } else {
                                    break _L;
                                  }
                                }
                              } else {
                                break _L;
                              }
                            }
                            case "uuid": {
                              if (input.$tag === 4) {
                                const _String$2 = input;
                                const _s$2 = _String$2._0;
                                s = _s$2;
                                break _L$5;
                              } else {
                                break _L;
                              }
                            }
                            default: {
                              break _L;
                            }
                          }
                        }
                        case 2: {
                          const _ListOf = t;
                          const _elem = _ListOf._0;
                          if (input.$tag === 5) {
                            const _Array = input;
                            const _values = _Array._0;
                            elem = _elem;
                            values$2 = _values;
                            break _L$4;
                          } else {
                            break _L;
                          }
                        }
                        case 3: {
                          const _SetOf = t;
                          const _elem$2 = _SetOf._0;
                          if (input.$tag === 5) {
                            const _Array = input;
                            const _values = _Array._0;
                            elem = _elem$2;
                            values$2 = _values;
                            break _L$4;
                          } else {
                            break _L;
                          }
                        }
                        case 4: {
                          const _MapOf = t;
                          const _key = _MapOf._0;
                          const _tvalue = _MapOf._1;
                          if (input.$tag === 5) {
                            const _Array = input;
                            const _values = _Array._0;
                            tvalue = _tvalue;
                            key = _key;
                            values = _values;
                            break _L$3;
                          } else {
                            break _L;
                          }
                        }
                        default: {
                          const _Named = t;
                          const _name = _Named._0;
                          name = _name;
                          break _L$2;
                        }
                      }
                    }
                    const _bind$5 = _M0FP216zhaojun_2dcoding6thrift13json__integer(input);
                    let _tmp;
                    if (_bind$5.$tag === 1) {
                      const _ok = _bind$5;
                      _tmp = _ok._0;
                    } else {
                      return _bind$5;
                    }
                    return _M0FP216zhaojun_2dcoding6thrift15schema__integer(_tmp, t);
                  }
                  return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(new _M0DTP216zhaojun_2dcoding6thrift5Value6Double(n));
                }
                let n;
                if (s$4 === "NaN") {
                  n = 0 / 0;
                } else {
                  if (s$4 === "Infinity") {
                    n = 1 / 0;
                  } else {
                    if (s$4 === "-Infinity") {
                      n = -1 / 0;
                    } else {
                      let _try_err;
                      _L$9: {
                        _L$10: {
                          const _bind$5 = _M0FPC28internal7strconv13parse__double(new _M0TPC16string10StringView(s$4, 0, s$4.length));
                          if (_bind$5.$tag === 1) {
                            const _ok = _bind$5;
                            n = _ok._0;
                          } else {
                            const _err = _bind$5;
                            _try_err = _err._0;
                            break _L$10;
                          }
                          break _L$9;
                        }
                        return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("invalid double"));
                      }
                    }
                  }
                }
                return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(new _M0DTP216zhaojun_2dcoding6thrift5Value6Double(n));
              }
              return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(new _M0DTP216zhaojun_2dcoding6thrift5Value6Binary(_M0FPC28encoding4utf814encode_2einner(new _M0TPC16string10StringView(s$3, 0, s$3.length), false)));
            }
            const _bind$5 = _M0FP216zhaojun_2dcoding6thrift13schema__unhex(s$2);
            let _tmp;
            if (_bind$5.$tag === 1) {
              const _ok = _bind$5;
              _tmp = _ok._0;
            } else {
              return _bind$5;
            }
            return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(new _M0DTP216zhaojun_2dcoding6thrift5Value6Binary(_tmp));
          }
          const _bind$5 = _M0FP216zhaojun_2dcoding6thrift12schema__uuid(s);
          let _tmp;
          if (_bind$5.$tag === 1) {
            const _ok = _bind$5;
            _tmp = _ok._0;
          } else {
            return _bind$5;
          }
          return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(new _M0DTP216zhaojun_2dcoding6thrift5Value4Uuid(_tmp));
        }
        const _bind$5 = _M0MPC15array5Array3mapGRPB4JsonRP216zhaojun_2dcoding6thrift5ValueEHRP216zhaojun_2dcoding6thrift11SchemaError(values$2, (v) => _M0MP216zhaojun_2dcoding6thrift6Schema16from__json__type(self, owner, elem, v, work, depth + 1 | 0));
        let items;
        if (_bind$5.$tag === 1) {
          const _ok = _bind$5;
          items = _ok._0;
        } else {
          return _bind$5;
        }
        const _bind$6 = _M0MP216zhaojun_2dcoding6thrift6Schema10wire__kind(self, elem);
        let kind;
        if (_bind$6.$tag === 1) {
          const _ok = _bind$6;
          kind = _ok._0;
        } else {
          return _bind$6;
        }
        if (t.$tag === 2) {
          return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(new _M0DTP216zhaojun_2dcoding6thrift5Value4List(kind, items));
        } else {
          return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(new _M0DTP216zhaojun_2dcoding6thrift5Value8SetValue(kind, items));
        }
      }
      const items = [];
      const _bind$5 = values.length;
      let _tmp = 0;
      while (true) {
        const _ = _tmp;
        if (_ < _bind$5) {
          const pair = values[_];
          _L$4: {
            _L$5: {
              let k;
              let v;
              _L$6: {
                if (pair.$tag === 5) {
                  const _Array = pair;
                  const _x = _Array._0;
                  if (_x.length === 2) {
                    const _k = _x[0];
                    const _v = _x[1];
                    k = _k;
                    v = _v;
                    break _L$6;
                  } else {
                    break _L$5;
                  }
                } else {
                  break _L$5;
                }
              }
              const _bind$6 = _M0MP216zhaojun_2dcoding6thrift6Schema16from__json__type(self, owner, key, k, work, depth + 1 | 0);
              let _tmp$2;
              if (_bind$6.$tag === 1) {
                const _ok = _bind$6;
                _tmp$2 = _ok._0;
              } else {
                return _bind$6;
              }
              const _tmp$3 = _tmp$2;
              const _bind$7 = _M0MP216zhaojun_2dcoding6thrift6Schema16from__json__type(self, owner, tvalue, v, work, depth + 1 | 0);
              let _tmp$4;
              if (_bind$7.$tag === 1) {
                const _ok = _bind$7;
                _tmp$4 = _ok._0;
              } else {
                return _bind$7;
              }
              _M0MPC15array5Array4pushGRPB4JsonE(items, { _0: _tmp$3, _1: _tmp$4 });
              break _L$4;
            }
            return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("map uses an array of [key,value] entries"));
          }
          _tmp = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      const _bind$6 = _M0MP216zhaojun_2dcoding6thrift6Schema10wire__kind(self, key);
      let _tmp$2;
      if (_bind$6.$tag === 1) {
        const _ok = _bind$6;
        _tmp$2 = _ok._0;
      } else {
        return _bind$6;
      }
      const _bind$7 = _M0MP216zhaojun_2dcoding6thrift6Schema10wire__kind(self, tvalue);
      let _tmp$3;
      if (_bind$7.$tag === 1) {
        const _ok = _bind$7;
        _tmp$3 = _ok._0;
      } else {
        return _bind$7;
      }
      return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(new _M0DTP216zhaojun_2dcoding6thrift5Value8MapValue(_tmp$2, _tmp$3, items));
    }
    _L$3: {
      let fields;
      let flavor;
      _L$4: {
        const _bind$5 = _M0MPB3Map3getGsRP216zhaojun_2dcoding6thrift13IdlDefinitionE(self.definitions, name);
        if (_bind$5 === undefined) {
          break _L$3;
        } else {
          const _Some = _bind$5;
          const _x = _Some;
          switch (_x.$tag) {
            case 1: {
              let label;
              _L$5: {
                _L$6: {
                  if (input.$tag === 4) {
                    const _String = input;
                    const _label = _String._0;
                    label = _label;
                    break _L$6;
                  }
                  break _L$5;
                }
                let n;
                _L$7: {
                  _L$8: {
                    const _bind$6 = _M0MP216zhaojun_2dcoding6thrift6Schema12enum__number(self, _M0FP216zhaojun_2dcoding6thrift17definition__owner(name), t, label);
                    if (_bind$6 === undefined) {
                    } else {
                      const _Some$2 = _bind$6;
                      const _n = _Some$2;
                      n = _n;
                      break _L$8;
                    }
                    break _L$7;
                  }
                  return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(new _M0DTP216zhaojun_2dcoding6thrift5Value3I32(n));
                }
              }
              const _bind$6 = _M0FP216zhaojun_2dcoding6thrift13json__integer(input);
              let _tmp;
              if (_bind$6.$tag === 1) {
                const _ok = _bind$6;
                _tmp = _ok._0;
              } else {
                return _bind$6;
              }
              return _M0FP216zhaojun_2dcoding6thrift15schema__integer(_tmp, t);
            }
            case 2: {
              const _Record = _x;
              const _flavor = _Record._1;
              const _fields = _Record._2;
              fields = _fields;
              flavor = _flavor;
              break _L$4;
            }
            default: {
              break _L$3;
            }
          }
        }
      }
      return _M0MP216zhaojun_2dcoding6thrift6Schema18fields__from__json(self, _M0FP216zhaojun_2dcoding6thrift17definition__owner(name), fields, input, flavor === "union", work, depth);
    }
    return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("unresolved JSON value type"));
  }
  return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("JSON value does not match schema type"));
}
function _M0MP216zhaojun_2dcoding6thrift6Schema18fields__from__json(self, owner, fields, input, union, work, depth) {
  let object;
  if (input.$tag === 6) {
    const _Object = input;
    const _fields = _Object._0;
    object = _fields;
  } else {
    return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("expected JSON object for struct"));
  }
  const _it = _M0MPB3Map5iter2GssE(object);
  while (true) {
    let key;
    _L: {
      const _bind$4 = _M0MPB5Iter24nextGssE(_it);
      if (_bind$4 === undefined) {
        break;
      } else {
        const _Some = _bind$4;
        const _x = _Some;
        const _key = _x._0;
        key = _key;
        break _L;
      }
    }
    if (!_M0MPC15array5Array3anyGRP216zhaojun_2dcoding6thrift8IdlFieldE(fields, (f) => f.name === key)) {
      return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema(`unknown field ${key}`));
    }
    continue;
  }
  const result = [];
  const _bind$4 = fields.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$4) {
      const field = fields[_];
      const _bind$5 = _M0MP216zhaojun_2dcoding6thrift6Schema7resolve(self, owner, field.field_type, 0);
      let t;
      if (_bind$5.$tag === 1) {
        const _ok = _bind$5;
        t = _ok._0;
      } else {
        return _bind$5;
      }
      let v;
      _L: {
        _L$2: {
          const _bind$6 = _M0MPB3Map3getGsRPB4JsonE(object, field.name);
          if (_bind$6 === undefined) {
            let value;
            _L$3: {
              _L$4: {
                const _bind$7 = field.default_value;
                if (_bind$7 === undefined) {
                  if (field.requiredness === "required") {
                    return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema(`missing required field ${field.name}`));
                  }
                } else {
                  const _Some = _bind$7;
                  const _value = _Some;
                  value = _value;
                  break _L$4;
                }
                break _L$3;
              }
              const _tmp$2 = field.id;
              const _bind$7 = _M0MP216zhaojun_2dcoding6thrift6Schema20const__value_2einner(self, owner, t, value, [], depth + 1 | 0, work);
              let _tmp$3;
              if (_bind$7.$tag === 1) {
                const _ok = _bind$7;
                _tmp$3 = _ok._0;
              } else {
                return _bind$7;
              }
              _M0MPC15array5Array4pushGRPB4JsonE(result, { _0: _tmp$2, _1: _tmp$3 });
            }
          } else {
            const _Some = _bind$6;
            const _x = _Some;
            if (_x.$tag === 0) {
              if (field.requiredness === "required") {
                return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema(`required field ${field.name} is null`));
              }
            } else {
              v = _x;
              break _L$2;
            }
          }
          break _L;
        }
        const _tmp$2 = field.id;
        const _bind$6 = _M0MP216zhaojun_2dcoding6thrift6Schema16from__json__type(self, owner, t, v, work, depth + 1 | 0);
        let _tmp$3;
        if (_bind$6.$tag === 1) {
          const _ok = _bind$6;
          _tmp$3 = _ok._0;
        } else {
          return _bind$6;
        }
        _M0MPC15array5Array4pushGRPB4JsonE(result, { _0: _tmp$2, _1: _tmp$3 });
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (union && result.length > 1) {
    return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("union permits at most one field"));
  }
  return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(new _M0DTP216zhaojun_2dcoding6thrift5Value6Struct(result));
}
function _M0MP216zhaojun_2dcoding6thrift6Schema10from__json(self, name, input) {
  const _bind$4 = _M0MP216zhaojun_2dcoding6thrift6Schema7resolve(self, self.root, new _M0DTP216zhaojun_2dcoding6thrift7IdlType5Named(name), 0);
  let t;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    t = _ok._0;
  } else {
    return _bind$4;
  }
  return _M0MP216zhaojun_2dcoding6thrift6Schema16from__json__type(self, self.root, t, input, _M0MPC13ref3Ref3RefGiE(0), 0);
}
function _M0MP216zhaojun_2dcoding6thrift6Schema12read__fields(self, owner, fields, wire, union, work, depth) {
  const _bind$4 = [];
  const known = _M0MPB3Map3MapGiRP216zhaojun_2dcoding6thrift5ValueE(new _M0TPB9ArrayViewGUiRP216zhaojun_2dcoding6thrift5ValueEE(_bind$4, 0, 0), undefined);
  const _bind$5 = wire.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$5) {
      const pair = wire[_];
      const _bind$6 = fields.length;
      let _tmp$2 = 0;
      while (true) {
        const _$2 = _tmp$2;
        if (_$2 < _bind$6) {
          const field = fields[_$2];
          if (field.id === pair._0) {
            const _bind$7 = _M0MP216zhaojun_2dcoding6thrift6Schema7resolve(self, owner, field.field_type, 0);
            let t;
            if (_bind$7.$tag === 1) {
              const _ok = _bind$7;
              t = _ok._0;
            } else {
              return _bind$7;
            }
            let value;
            _L: {
              _L$2: {
                const _bind$8 = _M0MP216zhaojun_2dcoding6thrift6Schema10read__type(self, owner, t, pair._1, work, depth + 1 | 0);
                let _bind$9;
                if (_bind$8.$tag === 1) {
                  const _ok = _bind$8;
                  _bind$9 = _ok._0;
                } else {
                  return _bind$8;
                }
                if (_bind$9 === undefined) {
                } else {
                  const _Some = _bind$9;
                  const _value = _Some;
                  value = _value;
                  break _L$2;
                }
                break _L;
              }
              _M0MPB3Map3setGiRP216zhaojun_2dcoding6thrift5ValueE(known, field.id, value);
            }
            break;
          }
          _tmp$2 = _$2 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (union && _M0MPB3Map6lengthGiRP216zhaojun_2dcoding6thrift5ValueE(known) > 1) {
    return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("wire union has multiple fields"));
  }
  const result = [];
  const _bind$6 = fields.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$6) {
      const field = fields[_];
      let value;
      _L: {
        _L$2: {
          const _bind$7 = _M0MPB3Map3getGiRP216zhaojun_2dcoding6thrift5ValueE(known, field.id);
          if (_bind$7 === undefined) {
            if (field.requiredness === "required") {
              return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema(`missing required wire field ${field.name}`));
            } else {
              let value$2;
              _L$3: {
                _L$4: {
                  const _bind$8 = field.default_value;
                  if (_bind$8 === undefined) {
                  } else {
                    const _Some = _bind$8;
                    const _value = _Some;
                    value$2 = _value;
                    break _L$4;
                  }
                  break _L$3;
                }
                const _tmp$3 = field.id;
                const _bind$8 = _M0MP216zhaojun_2dcoding6thrift6Schema7resolve(self, owner, field.field_type, 0);
                let _tmp$4;
                if (_bind$8.$tag === 1) {
                  const _ok = _bind$8;
                  _tmp$4 = _ok._0;
                } else {
                  return _bind$8;
                }
                const _bind$9 = _M0MP216zhaojun_2dcoding6thrift6Schema20const__value_2einner(self, owner, _tmp$4, value$2, [], depth + 1 | 0, work);
                let _tmp$5;
                if (_bind$9.$tag === 1) {
                  const _ok = _bind$9;
                  _tmp$5 = _ok._0;
                } else {
                  return _bind$9;
                }
                _M0MPC15array5Array4pushGRPB4JsonE(result, { _0: _tmp$3, _1: _tmp$5 });
              }
            }
          } else {
            const _Some = _bind$7;
            const _value = _Some;
            value = _value;
            break _L$2;
          }
          break _L;
        }
        _M0MPC15array5Array4pushGRPB4JsonE(result, { _0: field.id, _1: value });
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (union && result.length > 1) {
    return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("union defaults select multiple fields"));
  }
  return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(new _M0DTP216zhaojun_2dcoding6thrift5Value6Struct(result));
}
function _M0MP216zhaojun_2dcoding6thrift6Schema10read__type(self, owner, t, wire, work, depth) {
  const _bind$4 = _M0FP216zhaojun_2dcoding6thrift12schema__tick(work, depth);
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _ok._0;
  } else {
    return _bind$4;
  }
  const _tmp = _M0MP216zhaojun_2dcoding6thrift5Value4kind(wire);
  const _bind$5 = _M0MP216zhaojun_2dcoding6thrift6Schema10wire__kind(self, t);
  let _tmp$2;
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _tmp$2 = _ok._0;
  } else {
    return _bind$5;
  }
  if (_M0IP016_24default__implPB2Eq10not__equalGRP216zhaojun_2dcoding6thrift4KindE(_tmp, _tmp$2)) {
    return new _M0DTPC16result6ResultGORP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(undefined);
  }
  _L: {
    let value;
    let key;
    let v;
    let k;
    let values;
    _L$2: {
      let elem;
      let kind;
      let values$2;
      _L$3: {
        let name;
        let fields;
        _L$4: {
          switch (t.$tag) {
            case 1: {
              const _Named = t;
              const _name = _Named._0;
              if (wire.$tag === 7) {
                const _Struct = wire;
                const _fields = _Struct._0;
                name = _name;
                fields = _fields;
                break _L$4;
              } else {
                break _L;
              }
            }
            case 2: {
              const _ListOf = t;
              const _elem = _ListOf._0;
              if (wire.$tag === 8) {
                const _List = wire;
                const _kind = _List._0;
                const _values = _List._1;
                elem = _elem;
                kind = _kind;
                values$2 = _values;
                break _L$3;
              } else {
                break _L;
              }
            }
            case 3: {
              const _SetOf = t;
              const _elem$2 = _SetOf._0;
              if (wire.$tag === 9) {
                const _SetValue = wire;
                const _kind = _SetValue._0;
                const _values = _SetValue._1;
                elem = _elem$2;
                kind = _kind;
                values$2 = _values;
                break _L$3;
              } else {
                break _L;
              }
            }
            case 4: {
              const _MapOf = t;
              const _key = _MapOf._0;
              const _value = _MapOf._1;
              if (wire.$tag === 10) {
                const _MapValue = wire;
                const _k = _MapValue._0;
                const _v = _MapValue._1;
                const _values = _MapValue._2;
                value = _value;
                key = _key;
                v = _v;
                k = _k;
                values = _values;
                break _L$2;
              } else {
                break _L;
              }
            }
            default: {
              break _L;
            }
          }
        }
        _L$5: {
          let expected;
          let flavor;
          _L$6: {
            const _bind$6 = _M0MPB3Map3getGsRP216zhaojun_2dcoding6thrift13IdlDefinitionE(self.definitions, name);
            if (_bind$6 === undefined) {
              break _L$5;
            } else {
              const _Some = _bind$6;
              const _x = _Some;
              if (_x.$tag === 2) {
                const _Record = _x;
                const _flavor = _Record._1;
                const _expected = _Record._2;
                expected = _expected;
                flavor = _flavor;
                break _L$6;
              } else {
                break _L$5;
              }
            }
          }
          const _bind$6 = _M0MP216zhaojun_2dcoding6thrift6Schema12read__fields(self, _M0FP216zhaojun_2dcoding6thrift17definition__owner(name), expected, fields, flavor === "union", work, depth);
          let _tmp$3;
          if (_bind$6.$tag === 1) {
            const _ok = _bind$6;
            _tmp$3 = _ok._0;
          } else {
            return _bind$6;
          }
          return new _M0DTPC16result6ResultGORP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(_tmp$3);
        }
        return new _M0DTPC16result6ResultGORP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(undefined);
      }
      const _bind$6 = _M0MP216zhaojun_2dcoding6thrift6Schema10wire__kind(self, elem);
      let _tmp$3;
      if (_bind$6.$tag === 1) {
        const _ok = _bind$6;
        _tmp$3 = _ok._0;
      } else {
        return _bind$6;
      }
      if (_M0IP016_24default__implPB2Eq10not__equalGRP216zhaojun_2dcoding6thrift4KindE(_tmp$3, kind)) {
        return new _M0DTPC16result6ResultGORP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(undefined);
      }
      const items = [];
      const _bind$7 = values$2.length;
      let _tmp$4 = 0;
      while (true) {
        const _ = _tmp$4;
        if (_ < _bind$7) {
          const value$2 = values$2[_];
          let v$2;
          _L$4: {
            const _bind$8 = _M0MP216zhaojun_2dcoding6thrift6Schema10read__type(self, owner, elem, value$2, work, depth + 1 | 0);
            let _bind$9;
            if (_bind$8.$tag === 1) {
              const _ok = _bind$8;
              _bind$9 = _ok._0;
            } else {
              return _bind$8;
            }
            if (_bind$9 === undefined) {
              return new _M0DTPC16result6ResultGORP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(undefined);
            } else {
              const _Some = _bind$9;
              const _v = _Some;
              v$2 = _v;
              break _L$4;
            }
          }
          _M0MPC15array5Array4pushGRPB4JsonE(items, v$2);
          _tmp$4 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      let _tmp$5;
      if (t.$tag === 2) {
        _tmp$5 = new _M0DTP216zhaojun_2dcoding6thrift5Value4List(kind, items);
      } else {
        _tmp$5 = new _M0DTP216zhaojun_2dcoding6thrift5Value8SetValue(kind, items);
      }
      return new _M0DTPC16result6ResultGORP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(_tmp$5);
    }
    const _bind$6 = _M0MP216zhaojun_2dcoding6thrift6Schema10wire__kind(self, key);
    let kk;
    if (_bind$6.$tag === 1) {
      const _ok = _bind$6;
      kk = _ok._0;
    } else {
      return _bind$6;
    }
    const _bind$7 = _M0MP216zhaojun_2dcoding6thrift6Schema10wire__kind(self, value);
    let vk;
    if (_bind$7.$tag === 1) {
      const _ok = _bind$7;
      vk = _ok._0;
    } else {
      return _bind$7;
    }
    if (!_M0MPC15array5Array9is__emptyGRPB4JsonE(values) && (_M0IP016_24default__implPB2Eq10not__equalGORP216zhaojun_2dcoding6thrift4KindE(k, kk) || _M0IP016_24default__implPB2Eq10not__equalGORP216zhaojun_2dcoding6thrift4KindE(v, vk))) {
      return new _M0DTPC16result6ResultGORP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(undefined);
    }
    const items = [];
    const _bind$8 = values.length;
    let _tmp$3 = 0;
    while (true) {
      const _ = _tmp$3;
      if (_ < _bind$8) {
        const pair = values[_];
        let k$2;
        const _bind$9 = _M0MP216zhaojun_2dcoding6thrift6Schema10read__type(self, owner, key, pair._0, work, depth + 1 | 0);
        let _bind$10;
        if (_bind$9.$tag === 1) {
          const _ok = _bind$9;
          _bind$10 = _ok._0;
        } else {
          return _bind$9;
        }
        if (_bind$10 === undefined) {
          return new _M0DTPC16result6ResultGORP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(undefined);
        } else {
          const _Some = _bind$10;
          const _v = _Some;
          k$2 = _v;
        }
        let v$2;
        const _bind$11 = _M0MP216zhaojun_2dcoding6thrift6Schema10read__type(self, owner, value, pair._1, work, depth + 1 | 0);
        let _bind$12;
        if (_bind$11.$tag === 1) {
          const _ok = _bind$11;
          _bind$12 = _ok._0;
        } else {
          return _bind$11;
        }
        if (_bind$12 === undefined) {
          return new _M0DTPC16result6ResultGORP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(undefined);
        } else {
          const _Some = _bind$12;
          const _v = _Some;
          v$2 = _v;
        }
        _M0MPC15array5Array4pushGRPB4JsonE(items, { _0: k$2, _1: v$2 });
        _tmp$3 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return new _M0DTPC16result6ResultGORP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(new _M0DTP216zhaojun_2dcoding6thrift5Value8MapValue(kk, vk, items));
  }
  return new _M0DTPC16result6ResultGORP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(wire);
}
function _M0MP216zhaojun_2dcoding6thrift6Schema10json__type(self, owner, t, value, depth) {
  if (depth > 64) {
    return new _M0DTPC16result6ResultGRPB4JsonRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("schema JSON depth limit"));
  }
  _L: {
    let name;
    let values;
    _L$2: {
      let tvalue;
      let key;
      let values$2;
      _L$3: {
        let elem;
        let values$3;
        _L$4: {
          let data;
          _L$5: {
            let data$2;
            _L$6: {
              let data$3;
              _L$7: {
                let n;
                _L$8: {
                  let n$2;
                  _L$9: {
                    let n$3;
                    _L$10: {
                      let n$4;
                      _L$11: {
                        switch (value.$tag) {
                          case 0: {
                            const _Bool = value;
                            const _n = _Bool._0;
                            n$4 = _n;
                            break _L$11;
                          }
                          case 1: {
                            const _Byte = value;
                            const _n$2 = _Byte._0;
                            n$3 = _n$2;
                            break _L$10;
                          }
                          case 2: {
                            const _I16 = value;
                            const _n$3 = _I16._0;
                            n$3 = _n$3;
                            break _L$10;
                          }
                          case 3: {
                            const _I32 = value;
                            const _n$4 = _I32._0;
                            n$3 = _n$4;
                            break _L$10;
                          }
                          case 4: {
                            const _I64 = value;
                            const _n$5 = _I64._0;
                            n$2 = _n$5;
                            break _L$9;
                          }
                          case 5: {
                            const _Double = value;
                            const _n$6 = _Double._0;
                            n = _n$6;
                            break _L$8;
                          }
                          default: {
                            if (t.$tag === 0) {
                              const _Base = t;
                              const _x = _Base._0;
                              if (_x === "string") {
                                switch (value.$tag) {
                                  case 6: {
                                    const _Binary = value;
                                    const _data = _Binary._0;
                                    data$3 = _data;
                                    break _L$7;
                                  }
                                  case 11: {
                                    const _Uuid = value;
                                    const _data$2 = _Uuid._0;
                                    data = _data$2;
                                    break _L$5;
                                  }
                                  default: {
                                    break _L;
                                  }
                                }
                              } else {
                                switch (value.$tag) {
                                  case 6: {
                                    const _Binary = value;
                                    const _data = _Binary._0;
                                    data$2 = _data;
                                    break _L$6;
                                  }
                                  case 11: {
                                    const _Uuid = value;
                                    const _data$2 = _Uuid._0;
                                    data = _data$2;
                                    break _L$5;
                                  }
                                  default: {
                                    break _L;
                                  }
                                }
                              }
                            } else {
                              switch (value.$tag) {
                                case 6: {
                                  const _Binary = value;
                                  const _data = _Binary._0;
                                  data$2 = _data;
                                  break _L$6;
                                }
                                case 11: {
                                  const _Uuid = value;
                                  const _data$2 = _Uuid._0;
                                  data = _data$2;
                                  break _L$5;
                                }
                                default: {
                                  switch (t.$tag) {
                                    case 2: {
                                      const _ListOf = t;
                                      const _elem = _ListOf._0;
                                      if (value.$tag === 8) {
                                        const _List = value;
                                        const _values = _List._1;
                                        elem = _elem;
                                        values$3 = _values;
                                        break _L$4;
                                      } else {
                                        break _L;
                                      }
                                    }
                                    case 3: {
                                      const _SetOf = t;
                                      const _elem$2 = _SetOf._0;
                                      if (value.$tag === 9) {
                                        const _SetValue = value;
                                        const _values = _SetValue._1;
                                        elem = _elem$2;
                                        values$3 = _values;
                                        break _L$4;
                                      } else {
                                        break _L;
                                      }
                                    }
                                    case 4: {
                                      const _MapOf = t;
                                      const _key = _MapOf._0;
                                      const _tvalue = _MapOf._1;
                                      if (value.$tag === 10) {
                                        const _MapValue = value;
                                        const _values = _MapValue._2;
                                        tvalue = _tvalue;
                                        key = _key;
                                        values$2 = _values;
                                        break _L$3;
                                      } else {
                                        break _L;
                                      }
                                    }
                                    default: {
                                      const _Named = t;
                                      const _name = _Named._0;
                                      if (value.$tag === 7) {
                                        const _Struct = value;
                                        const _values = _Struct._0;
                                        name = _name;
                                        values = _values;
                                        break _L$2;
                                      } else {
                                        break _L;
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                      return new _M0DTPC16result6ResultGRPB4JsonRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(_M0IPC14bool4BoolPB6ToJson8to__json(n$4));
                    }
                    return new _M0DTPC16result6ResultGRPB4JsonRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(_M0IPC13int3IntPB6ToJson8to__json(n$3));
                  }
                  return new _M0DTPC16result6ResultGRPB4JsonRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(_M0IPC16string6StringPB6ToJson8to__json(_M0MPC15int645Int6418to__string_2einner(n$2, 10)));
                }
                return _M0MPC16double6Double7is__nan(n) ? new _M0DTPC16result6ResultGRPB4JsonRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(_M0IPC16string6StringPB6ToJson8to__json("NaN")) : _M0MPC16double6Double7is__inf(n) ? new _M0DTPC16result6ResultGRPB4JsonRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(_M0IPC16string6StringPB6ToJson8to__json(n < 0 ? "-Infinity" : "Infinity")) : new _M0DTPC16result6ResultGRPB4JsonRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(_M0IPC16double6DoublePB6ToJson8to__json(n));
              }
              let text;
              let _try_err;
              _L$8: {
                _L$9: {
                  const _bind$4 = _M0FPC28encoding4utf814decode_2einner(new _M0TPC15bytes9BytesView(data$3, 0, data$3.length), false);
                  if (_bind$4.$tag === 1) {
                    const _ok = _bind$4;
                    text = _ok._0;
                  } else {
                    const _err = _bind$4;
                    _try_err = _err._0;
                    break _L$9;
                  }
                  break _L$8;
                }
                return new _M0DTPC16result6ResultGRPB4JsonRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("invalid UTF-8 string"));
              }
              return new _M0DTPC16result6ResultGRPB4JsonRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(_M0IPC16string6StringPB6ToJson8to__json(text));
            }
            const _bind$4 = [{ _0: "$binary", _1: _M0IPC16string6StringPB6ToJson8to__json(_M0FP216zhaojun_2dcoding6thrift11schema__hex(data$2)) }];
            return new _M0DTPC16result6ResultGRPB4JsonRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(_M0MPC14json4Json6object(_M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$4, 0, 1), undefined)));
          }
          const hex = _M0FP216zhaojun_2dcoding6thrift11schema__hex(data);
          if (hex.length !== 32) {
            return new _M0DTPC16result6ResultGRPB4JsonRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("invalid UUID size"));
          }
          return new _M0DTPC16result6ResultGRPB4JsonRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(_M0IPC16string6StringPB6ToJson8to__json(`${_M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(hex, 0, 8))}-${_M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(hex, 8, 12))}-${_M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(hex, 12, 16))}-${_M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(hex, 16, 20))}-${_M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(hex, 20, undefined))}`));
        }
        const _bind$4 = _M0MPC15array5Array3mapGRP216zhaojun_2dcoding6thrift5ValueRPB4JsonEHRP216zhaojun_2dcoding6thrift11SchemaError(values$3, (v) => _M0MP216zhaojun_2dcoding6thrift6Schema10json__type(self, owner, elem, v, depth + 1 | 0));
        let _tmp;
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          _tmp = _ok._0;
        } else {
          return _bind$4;
        }
        return new _M0DTPC16result6ResultGRPB4JsonRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(_M0MPC14json4Json5array(_tmp));
      }
      const _bind$4 = _M0MPC15array5Array3mapGURP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift5ValueERPB4JsonEHRP216zhaojun_2dcoding6thrift11SchemaError(values$2, (pair) => {
        const _bind$5 = _M0MP216zhaojun_2dcoding6thrift6Schema10json__type(self, owner, key, pair._0, depth + 1 | 0);
        let _tmp;
        if (_bind$5.$tag === 1) {
          const _ok = _bind$5;
          _tmp = _ok._0;
        } else {
          return _bind$5;
        }
        const _tmp$2 = _tmp;
        const _bind$6 = _M0MP216zhaojun_2dcoding6thrift6Schema10json__type(self, owner, tvalue, pair._1, depth + 1 | 0);
        let _tmp$3;
        if (_bind$6.$tag === 1) {
          const _ok = _bind$6;
          _tmp$3 = _ok._0;
        } else {
          return _bind$6;
        }
        return new _M0DTPC16result6ResultGRPB4JsonRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(_M0MPC14json4Json5array([_tmp$2, _tmp$3]));
      });
      let _tmp;
      if (_bind$4.$tag === 1) {
        const _ok = _bind$4;
        _tmp = _ok._0;
      } else {
        return _bind$4;
      }
      return new _M0DTPC16result6ResultGRPB4JsonRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(_M0MPC14json4Json5array(_tmp));
    }
    _L$3: {
      let fields;
      _L$4: {
        const _bind$4 = _M0MPB3Map3getGsRP216zhaojun_2dcoding6thrift13IdlDefinitionE(self.definitions, name);
        if (_bind$4 === undefined) {
          break _L$3;
        } else {
          const _Some = _bind$4;
          const _x = _Some;
          if (_x.$tag === 2) {
            const _Record = _x;
            const _fields = _Record._2;
            fields = _fields;
            break _L$4;
          } else {
            break _L$3;
          }
        }
      }
      return _M0MP216zhaojun_2dcoding6thrift6Schema12fields__json(self, _M0FP216zhaojun_2dcoding6thrift17definition__owner(name), fields, values, depth);
    }
    return new _M0DTPC16result6ResultGRPB4JsonRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("unknown struct"));
  }
  return new _M0DTPC16result6ResultGRPB4JsonRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("wire value does not match schema"));
}
function _M0MP216zhaojun_2dcoding6thrift6Schema12fields__json(self, owner, fields, values, depth) {
  const _bind$4 = [];
  const object = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$4, 0, 0), undefined);
  const _bind$5 = values.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$5) {
      const pair = values[_];
      const _bind$6 = fields.length;
      let _tmp$2 = 0;
      while (true) {
        const _$2 = _tmp$2;
        if (_$2 < _bind$6) {
          const field = fields[_$2];
          if (field.id === pair._0) {
            const _tmp$3 = field.name;
            const _bind$7 = _M0MP216zhaojun_2dcoding6thrift6Schema7resolve(self, owner, field.field_type, 0);
            let _tmp$4;
            if (_bind$7.$tag === 1) {
              const _ok = _bind$7;
              _tmp$4 = _ok._0;
            } else {
              return _bind$7;
            }
            const _bind$8 = _M0MP216zhaojun_2dcoding6thrift6Schema10json__type(self, owner, _tmp$4, pair._1, depth + 1 | 0);
            let _tmp$5;
            if (_bind$8.$tag === 1) {
              const _ok = _bind$8;
              _tmp$5 = _ok._0;
            } else {
              return _bind$8;
            }
            _M0MPB3Map3setGsRPB4JsonE(object, _tmp$3, _tmp$5);
            break;
          }
          _tmp$2 = _$2 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRPB4JsonRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(_M0MPC14json4Json6object(object));
}
function _M0MP216zhaojun_2dcoding6thrift6Schema8to__json(self, name, value) {
  const _bind$4 = _M0MP216zhaojun_2dcoding6thrift6Schema7resolve(self, self.root, new _M0DTP216zhaojun_2dcoding6thrift7IdlType5Named(name), 0);
  let t;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    t = _ok._0;
  } else {
    return _bind$4;
  }
  let value$2;
  const _bind$5 = _M0MP216zhaojun_2dcoding6thrift6Schema10read__type(self, self.root, t, value, _M0MPC13ref3Ref3RefGiE(0), 0);
  let _bind$6;
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _bind$6 = _ok._0;
  } else {
    return _bind$5;
  }
  if (_bind$6 === undefined) {
    return new _M0DTPC16result6ResultGRPB4JsonRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("root wire type mismatch"));
  } else {
    const _Some = _bind$6;
    const _v = _Some;
    value$2 = _v;
  }
  return _M0MP216zhaojun_2dcoding6thrift6Schema10json__type(self, self.root, t, value$2, 0);
}
function _M0FP216zhaojun_2dcoding6thrift6encode(value, protocol) {
  const out = [];
  const _bind$4 = _M0FP216zhaojun_2dcoding6thrift12write__value(out, value, _M0IP216zhaojun_2dcoding6thrift8ProtocolPB2Eq5equal(protocol, 1), 0);
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _ok._0;
  } else {
    return _bind$4;
  }
  if (out.length > 1048576) {
    return new _M0DTPC16result6ResultGzRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("encoded output exceeds one MiB"));
  }
  return new _M0DTPC16result6ResultGzRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(_M0MPC15bytes5Bytes11from__array(new _M0TPB9ArrayViewGyE(out, 0, out.length)));
}
function _M0MP216zhaojun_2dcoding6thrift6Schema12encode__json(self, name, input, protocol) {
  const _bind$4 = _M0MP216zhaojun_2dcoding6thrift6Schema10from__json(self, name, input);
  let _tmp;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _tmp = _ok._0;
  } else {
    return _bind$4;
  }
  return _M0FP216zhaojun_2dcoding6thrift6encode(_tmp, protocol);
}
function _M0FP216zhaojun_2dcoding6thrift6decode(data, root, protocol) {
  if (data.length > 1048576) {
    return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("input exceeds one MiB"));
  }
  const reader = new _M0TP216zhaojun_2dcoding6thrift6Reader(data, 0, 0, _M0IP216zhaojun_2dcoding6thrift8ProtocolPB2Eq5equal(protocol, 1));
  const _bind$4 = _M0MP216zhaojun_2dcoding6thrift6Reader5value(reader, root, 0);
  let result;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    result = _ok._0;
  } else {
    return _bind$4;
  }
  if (reader.pos !== data.length) {
    return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("trailing bytes"));
  }
  return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(result);
}
function _M0MP216zhaojun_2dcoding6thrift6Schema12decode__json(self, name, data, protocol) {
  const _bind$4 = _M0MP216zhaojun_2dcoding6thrift6Schema7resolve(self, self.root, new _M0DTP216zhaojun_2dcoding6thrift7IdlType5Named(name), 0);
  let t;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    t = _ok._0;
  } else {
    return _bind$4;
  }
  const _bind$5 = _M0MP216zhaojun_2dcoding6thrift6Schema10wire__kind(self, t);
  let _tmp;
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _tmp = _ok._0;
  } else {
    return _bind$5;
  }
  const _bind$6 = _M0FP216zhaojun_2dcoding6thrift6decode(data, _tmp, protocol);
  let _tmp$2;
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _tmp$2 = _ok._0;
  } else {
    return _bind$6;
  }
  return _M0MP216zhaojun_2dcoding6thrift6Schema8to__json(self, name, _tmp$2);
}
function _M0MP216zhaojun_2dcoding6thrift6Schema16service__methods(self, owner, name, trail) {
  let name$2;
  let definition;
  _L: {
    const _bind$4 = _M0MP216zhaojun_2dcoding6thrift6Schema4find(self, owner, name);
    let _bind$5;
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      _bind$5 = _ok._0;
    } else {
      return _bind$4;
    }
    const _name = _bind$5._0;
    const _definition = _bind$5._1;
    name$2 = _name;
    definition = _definition;
    break _L;
  }
  if (_M0MPC15array5Array8containsGsE(trail, name$2) || trail.length >= 64) {
    return new _M0DTPC16result6ResultGRPB5ArrayGUsRP216zhaojun_2dcoding6thrift9IdlMethodEERP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("service inheritance cycle/limit"));
  }
  let methods;
  let parent;
  _L$2: {
    if (definition.$tag === 4) {
      const _Service = definition;
      const _parent = _Service._1;
      const _methods = _Service._2;
      methods = _methods;
      parent = _parent;
      break _L$2;
    } else {
      return new _M0DTPC16result6ResultGRPB5ArrayGUsRP216zhaojun_2dcoding6thrift9IdlMethodEERP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema(`not a service: ${name$2}`));
    }
  }
  const owner$2 = _M0FP216zhaojun_2dcoding6thrift17definition__owner(name$2);
  _M0MPC15array5Array4pushGRPB4JsonE(trail, name$2);
  const _defer = () => {
    _M0MPC15array5Array3popGRPC14json10WriteFrameE(trail);
  };
  let _err;
  _L$3: {
    let result;
    let parent$2;
    _L$4: {
      _L$5: {
        if (parent === undefined) {
          result = [];
        } else {
          const _Some = parent;
          const _parent = _Some;
          parent$2 = _parent;
          break _L$5;
        }
        break _L$4;
      }
      const _bind$4 = _M0MP216zhaojun_2dcoding6thrift6Schema16service__methods(self, owner$2, parent$2, trail);
      if (_bind$4.$tag === 1) {
        const _ok = _bind$4;
        result = _ok._0;
      } else {
        const _err$2 = _bind$4;
        _err = _err$2._0;
        break _L$3;
      }
    }
    const _bind$4 = methods.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind$4) {
        const function_ = methods[_];
        if (_M0MPC15array5Array3anyGUsRP216zhaojun_2dcoding6thrift9IdlMethodEE(result, (x) => x._1.name === function_.name)) {
          _err = new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema(`duplicate inherited method ${function_.name}`);
          break _L$3;
        }
        _M0MPC15array5Array4pushGRPB4JsonE(result, { _0: owner$2, _1: function_ });
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const _defer_result = result;
    _defer();
    return new _M0DTPC16result6ResultGRPB5ArrayGUsRP216zhaojun_2dcoding6thrift9IdlMethodEERP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(_defer_result);
  }
  _defer();
  return new _M0DTPC16result6ResultGRPB5ArrayGUsRP216zhaojun_2dcoding6thrift9IdlMethodEERP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(_err);
}
function _M0MP216zhaojun_2dcoding6thrift6Schema13method__owner(self, service, name) {
  const _bind$4 = _M0MP216zhaojun_2dcoding6thrift6Schema16service__methods(self, self.root, service, []);
  let _bind$5;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _bind$5 = _ok._0;
  } else {
    return _bind$4;
  }
  const _bind$6 = _bind$5.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$6) {
      const pair = _bind$5[_];
      if (pair._1.name === name) {
        return new _M0DTPC16result6ResultGUsRP216zhaojun_2dcoding6thrift9IdlMethodERP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(pair);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGUsRP216zhaojun_2dcoding6thrift9IdlMethodERP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema(`unknown service method ${name}`));
}
function _M0MP216zhaojun_2dcoding6thrift6Schema10make__call(self, service, name, arguments_, sequence_id) {
  let owner;
  let function_;
  _L: {
    const _bind$4 = _M0MP216zhaojun_2dcoding6thrift6Schema13method__owner(self, service, name);
    let _bind$5;
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      _bind$5 = _ok._0;
    } else {
      return _bind$4;
    }
    const _owner = _bind$5._0;
    const _function_ = _bind$5._1;
    owner = _owner;
    function_ = _function_;
    break _L;
  }
  const _bind$4 = function_.oneway ? 4 : 1;
  const _bind$5 = _M0MP216zhaojun_2dcoding6thrift6Schema18fields__from__json(self, owner, function_.arguments, arguments_, false, _M0MPC13ref3Ref3RefGiE(0), 0);
  let _bind$6;
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _bind$6 = _ok._0;
  } else {
    return _bind$5;
  }
  return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift7MessageRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(new _M0TP216zhaojun_2dcoding6thrift7Message(name, _bind$4, sequence_id, _bind$6));
}
function _M0MP216zhaojun_2dcoding6thrift6Schema10read__call(self, service, request) {
  let owner;
  let function_;
  _L: {
    const _bind$4 = _M0MP216zhaojun_2dcoding6thrift6Schema13method__owner(self, service, request.name);
    let _bind$5;
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      _bind$5 = _ok._0;
    } else {
      return _bind$4;
    }
    const _owner = _bind$5._0;
    const _function_ = _bind$5._1;
    owner = _owner;
    function_ = _function_;
    break _L;
  }
  if (request.message_type !== (function_.oneway ? 4 : 1)) {
    return new _M0DTPC16result6ResultGRPB4JsonRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("request message type does not match method"));
  }
  let fields;
  const _bind$4 = request.body;
  if (_bind$4.$tag === 7) {
    const _Struct = _bind$4;
    const _fields = _Struct._0;
    fields = _fields;
  } else {
    return new _M0DTPC16result6ResultGRPB4JsonRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("RPC arguments must be a struct"));
  }
  let values;
  const _bind$5 = _M0MP216zhaojun_2dcoding6thrift6Schema12read__fields(self, owner, function_.arguments, fields, false, _M0MPC13ref3Ref3RefGiE(0), 0);
  let _bind$6;
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _bind$6 = _ok._0;
  } else {
    return _bind$5;
  }
  if (_bind$6.$tag === 7) {
    const _Struct = _bind$6;
    const _values = _Struct._0;
    values = _values;
  } else {
    values = [];
  }
  return _M0MP216zhaojun_2dcoding6thrift6Schema12fields__json(self, owner, function_.arguments, values, 0);
}
function _M0FP216zhaojun_2dcoding6thrift22application__exception(name, sequence_id, code, message) {
  const _bind$4 = 3;
  const _bind$5 = new _M0DTP216zhaojun_2dcoding6thrift5Value6Struct([{ _0: 1, _1: new _M0DTP216zhaojun_2dcoding6thrift5Value6Binary(_M0FPC28encoding4utf814encode_2einner(new _M0TPC16string10StringView(message, 0, message.length), false)) }, { _0: 2, _1: new _M0DTP216zhaojun_2dcoding6thrift5Value3I32(code) }]);
  return new _M0TP216zhaojun_2dcoding6thrift7Message(name, _bind$4, sequence_id, _bind$5);
}
function _M0MP216zhaojun_2dcoding6thrift6Schema11make__reply(self, service, name, sequence_id, outcome) {
  let owner;
  let function_;
  _L: {
    const _bind$4 = _M0MP216zhaojun_2dcoding6thrift6Schema13method__owner(self, service, name);
    let _bind$5;
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      _bind$5 = _ok._0;
    } else {
      return _bind$4;
    }
    const _owner = _bind$5._0;
    const _function_ = _bind$5._1;
    owner = _owner;
    function_ = _function_;
    break _L;
  }
  if (function_.oneway) {
    return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift7MessageRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("oneway method has no reply"));
  }
  let body;
  let label;
  let value;
  _L$2: {
    _L$3: {
      let value$2;
      _L$4: {
        let code;
        let message;
        _L$5: {
          switch (outcome.$tag) {
            case 2: {
              const _ApplicationFailure = outcome;
              const _code = _ApplicationFailure._0;
              const _message = _ApplicationFailure._1;
              code = _code;
              message = _message;
              break _L$5;
            }
            case 0: {
              const _Success = outcome;
              const _value = _Success._0;
              value$2 = _value;
              break _L$4;
            }
            default: {
              const _DeclaredException = outcome;
              const _label = _DeclaredException._0;
              const _value$2 = _DeclaredException._1;
              label = _label;
              value = _value$2;
              break _L$3;
            }
          }
        }
        return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift7MessageRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(_M0FP216zhaojun_2dcoding6thrift22application__exception(name, sequence_id, code, message));
      }
      const _bind$4 = _M0MP216zhaojun_2dcoding6thrift6Schema7resolve(self, owner, function_.return_type, 0);
      let t;
      if (_bind$4.$tag === 1) {
        const _ok = _bind$4;
        t = _ok._0;
      } else {
        return _bind$4;
      }
      let _tmp;
      if (_M0IP216zhaojun_2dcoding6thrift7IdlTypePB2Eq5equal(t, new _M0DTP216zhaojun_2dcoding6thrift7IdlType4Base("void"))) {
        _tmp = [];
      } else {
        const _bind$5 = _M0MP216zhaojun_2dcoding6thrift6Schema16from__json__type(self, owner, t, value$2, _M0MPC13ref3Ref3RefGiE(0), 0);
        let _tmp$2;
        if (_bind$5.$tag === 1) {
          const _ok = _bind$5;
          _tmp$2 = _ok._0;
        } else {
          return _bind$5;
        }
        _tmp = [{ _0: 0, _1: _tmp$2 }];
      }
      body = new _M0DTP216zhaojun_2dcoding6thrift5Value6Struct(_tmp);
      break _L$2;
    }
    const selected = new _M0TPB8MutLocalGORP216zhaojun_2dcoding6thrift8IdlFieldE(undefined);
    const _bind$4 = function_.exceptions;
    const _bind$5 = _bind$4.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind$5) {
        const field = _bind$4[_];
        if (field.name === label) {
          selected.val = field;
          break;
        }
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    let field;
    const _bind$6 = selected.val;
    if (_bind$6 === undefined) {
      return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift7MessageRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema(`unknown declared exception ${label}`));
    } else {
      const _Some = _bind$6;
      const _f = _Some;
      field = _f;
    }
    const _tmp$2 = field.id;
    const _bind$7 = _M0MP216zhaojun_2dcoding6thrift6Schema7resolve(self, owner, field.field_type, 0);
    let _tmp$3;
    if (_bind$7.$tag === 1) {
      const _ok = _bind$7;
      _tmp$3 = _ok._0;
    } else {
      return _bind$7;
    }
    const _bind$8 = _M0MP216zhaojun_2dcoding6thrift6Schema16from__json__type(self, owner, _tmp$3, value, _M0MPC13ref3Ref3RefGiE(0), 0);
    let _tmp$4;
    if (_bind$8.$tag === 1) {
      const _ok = _bind$8;
      _tmp$4 = _ok._0;
    } else {
      return _bind$8;
    }
    body = new _M0DTP216zhaojun_2dcoding6thrift5Value6Struct([{ _0: _tmp$2, _1: _tmp$4 }]);
  }
  const _bind$4 = 2;
  return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift7MessageRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(new _M0TP216zhaojun_2dcoding6thrift7Message(name, _bind$4, sequence_id, body));
}
function _M0MP216zhaojun_2dcoding6thrift6Schema11read__reply(self, service, name, response) {
  let owner;
  let function_;
  _L: {
    const _bind$4 = _M0MP216zhaojun_2dcoding6thrift6Schema13method__owner(self, service, name);
    let _bind$5;
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      _bind$5 = _ok._0;
    } else {
      return _bind$4;
    }
    const _owner = _bind$5._0;
    const _function_ = _bind$5._1;
    owner = _owner;
    function_ = _function_;
    break _L;
  }
  if (function_.oneway) {
    return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift10RpcOutcomeRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("oneway method has no reply"));
  }
  if (_M0IP016_24default__implPB2Eq10not__equalGsE(response.name, name)) {
    return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift10RpcOutcomeRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("reply method mismatch"));
  }
  let fields;
  const _bind$4 = response.body;
  if (_bind$4.$tag === 7) {
    const _Struct = _bind$4;
    const _fields = _Struct._0;
    fields = _fields;
  } else {
    return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift10RpcOutcomeRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("reply must be a struct"));
  }
  if (response.message_type === 3) {
    const code = new _M0TPB8MutLocalGiE(0);
    const message = new _M0TPB8MutLocalGsE("");
    const _bind$5 = fields.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind$5) {
        const pair = fields[_];
        let n;
        _L$2: {
          _L$3: {
            let bytes;
            _L$4: {
              _L$5: {
                const _x = pair._0;
                switch (_x) {
                  case 1: {
                    const _x$2 = pair._1;
                    if (_x$2.$tag === 6) {
                      const _Binary = _x$2;
                      const _bytes = _Binary._0;
                      bytes = _bytes;
                      break _L$5;
                    }
                    break;
                  }
                  case 2: {
                    const _x$3 = pair._1;
                    if (_x$3.$tag === 3) {
                      const _I32 = _x$3;
                      const _n = _I32._0;
                      n = _n;
                      break _L$3;
                    }
                    break;
                  }
                }
                break _L$4;
              }
              let _tmp$2;
              let _try_err;
              _L$6: {
                _L$7: {
                  const _bind$6 = _M0FPC28encoding4utf814decode_2einner(new _M0TPC15bytes9BytesView(bytes, 0, bytes.length), false);
                  if (_bind$6.$tag === 1) {
                    const _ok = _bind$6;
                    _tmp$2 = _ok._0;
                  } else {
                    const _err = _bind$6;
                    _try_err = _err._0;
                    break _L$7;
                  }
                  break _L$6;
                }
                return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift10RpcOutcomeRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("invalid exception UTF-8"));
              }
              message.val = _tmp$2;
            }
            break _L$2;
          }
          code.val = n;
        }
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift10RpcOutcomeRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(new _M0DTP216zhaojun_2dcoding6thrift10RpcOutcome18ApplicationFailure(code.val, message.val));
  }
  if (response.message_type !== 2) {
    return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift10RpcOutcomeRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("expected reply or application exception"));
  }
  const _bind$5 = _M0MP216zhaojun_2dcoding6thrift6Schema7resolve(self, owner, function_.return_type, 0);
  let return_type;
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    return_type = _ok._0;
  } else {
    return _bind$5;
  }
  const work = _M0MPC13ref3Ref3RefGiE(0);
  const result = new _M0TPB8MutLocalGORP216zhaojun_2dcoding6thrift5ValueE(undefined);
  const _bind$6 = [];
  const exceptions = _M0MPB3Map3MapGsURP216zhaojun_2dcoding6thrift7IdlTypeRP216zhaojun_2dcoding6thrift5ValueEE(new _M0TPB9ArrayViewGUsURP216zhaojun_2dcoding6thrift7IdlTypeRP216zhaojun_2dcoding6thrift5ValueEEE(_bind$6, 0, 0), undefined);
  const _bind$7 = fields.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$7) {
      const pair = fields[_];
      if (pair._0 === 0 && _M0IP016_24default__implPB2Eq10not__equalGRP216zhaojun_2dcoding6thrift7IdlTypeE(return_type, new _M0DTP216zhaojun_2dcoding6thrift7IdlType4Base("void"))) {
        let v;
        _L$2: {
          _L$3: {
            const _bind$8 = _M0MP216zhaojun_2dcoding6thrift6Schema10read__type(self, owner, return_type, pair._1, work, 0);
            let _bind$9;
            if (_bind$8.$tag === 1) {
              const _ok = _bind$8;
              _bind$9 = _ok._0;
            } else {
              return _bind$8;
            }
            if (_bind$9 === undefined) {
            } else {
              const _Some = _bind$9;
              const _v = _Some;
              v = _v;
              break _L$3;
            }
            break _L$2;
          }
          result.val = v;
        }
      } else {
        const _bind$8 = function_.exceptions;
        const _bind$9 = _bind$8.length;
        let _tmp$2 = 0;
        while (true) {
          const _$2 = _tmp$2;
          if (_$2 < _bind$9) {
            const field = _bind$8[_$2];
            if (pair._0 === field.id) {
              const _bind$10 = _M0MP216zhaojun_2dcoding6thrift6Schema7resolve(self, owner, field.field_type, 0);
              let t;
              if (_bind$10.$tag === 1) {
                const _ok = _bind$10;
                t = _ok._0;
              } else {
                return _bind$10;
              }
              let v;
              _L$2: {
                _L$3: {
                  const _bind$11 = _M0MP216zhaojun_2dcoding6thrift6Schema10read__type(self, owner, t, pair._1, work, 0);
                  let _bind$12;
                  if (_bind$11.$tag === 1) {
                    const _ok = _bind$11;
                    _bind$12 = _ok._0;
                  } else {
                    return _bind$11;
                  }
                  if (_bind$12 === undefined) {
                  } else {
                    const _Some = _bind$12;
                    const _v = _Some;
                    v = _v;
                    break _L$3;
                  }
                  break _L$2;
                }
                _M0MPB3Map3setGsURP216zhaojun_2dcoding6thrift7IdlTypeRP216zhaojun_2dcoding6thrift5ValueEE(exceptions, field.name, { _0: t, _1: v });
              }
              break;
            }
            _tmp$2 = _$2 + 1 | 0;
            continue;
          } else {
            break;
          }
        }
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let value;
  _L$2: {
    _L$3: {
      const _bind$8 = result.val;
      if (_bind$8 === undefined) {
      } else {
        const _Some = _bind$8;
        const _value = _Some;
        value = _value;
        break _L$3;
      }
      break _L$2;
    }
    const _bind$8 = _M0MP216zhaojun_2dcoding6thrift6Schema10json__type(self, owner, return_type, value, 0);
    let _tmp$2;
    if (_bind$8.$tag === 1) {
      const _ok = _bind$8;
      _tmp$2 = _ok._0;
    } else {
      return _bind$8;
    }
    return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift10RpcOutcomeRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(new _M0DTP216zhaojun_2dcoding6thrift10RpcOutcome7Success(_tmp$2));
  }
  const _bind$8 = function_.exceptions;
  const _bind$9 = _bind$8.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$9) {
      const field = _bind$8[_];
      let pair;
      _L$3: {
        _L$4: {
          const _bind$10 = _M0MPB3Map3getGsURP216zhaojun_2dcoding6thrift7IdlTypeRP216zhaojun_2dcoding6thrift5ValueEE(exceptions, field.name);
          if (_bind$10 === undefined) {
          } else {
            const _Some = _bind$10;
            const _pair = _Some;
            pair = _pair;
            break _L$4;
          }
          break _L$3;
        }
        const _bind$10 = _M0MP216zhaojun_2dcoding6thrift6Schema10json__type(self, owner, pair._0, pair._1, 0);
        let _tmp$3;
        if (_bind$10.$tag === 1) {
          const _ok = _bind$10;
          _tmp$3 = _ok._0;
        } else {
          return _bind$10;
        }
        return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift10RpcOutcomeRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(new _M0DTP216zhaojun_2dcoding6thrift10RpcOutcome17DeclaredException(field.name, _tmp$3));
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift10RpcOutcomeRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(_M0IP216zhaojun_2dcoding6thrift7IdlTypePB2Eq5equal(return_type, new _M0DTP216zhaojun_2dcoding6thrift7IdlType4Base("void")) ? new _M0DTP216zhaojun_2dcoding6thrift10RpcOutcome7Success(_M0MPC14json4Json4null()) : new _M0DTP216zhaojun_2dcoding6thrift10RpcOutcome18ApplicationFailure(5, `missing result for ${name}`));
}
function _M0FP216zhaojun_2dcoding6thrift16definition__name(definition) {
  switch (definition.$tag) {
    case 0: {
      const _Alias = definition;
      const _n = _Alias._0;
      return _n;
    }
    case 3: {
      const _Constant = definition;
      const _n$2 = _Constant._0;
      return _n$2;
    }
    case 1: {
      const _Enumeration = definition;
      const _n$3 = _Enumeration._0;
      return _n$3;
    }
    case 2: {
      const _Record = definition;
      const _n$4 = _Record._0;
      return _n$4;
    }
    default: {
      const _Service = definition;
      const _n$5 = _Service._0;
      return _n$5;
    }
  }
}
function _M0FP216zhaojun_2dcoding6thrift9idl__stem(path) {
  const _bind$4 = "\\";
  const _tmp = new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length);
  const _bind$5 = "/";
  const _tmp$2 = _M0MPC16string6String12replace__all(path, _tmp, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length));
  const _bind$6 = "/";
  const parts = _M0MPB4Iter9to__arrayGsE(_M0MPC16string6String5split(_tmp$2, new _M0TPC16string10StringView(_bind$6, 0, _bind$6.length)));
  const name = _M0MPC16string10StringView9to__owned(_M0MPC15array5Array2atGsE(parts, parts.length - 1 | 0));
  const _bind$7 = ".thrift";
  if (_M0MPC16string6String11has__suffix(name, new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length))) {
    return _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(name, 0, name.length - 7 | 0));
  } else {
    return name;
  }
}
function _M0MP216zhaojun_2dcoding6thrift6Schema17type__description(self, t) {
  let key;
  let value;
  _L: {
    let elem;
    _L$2: {
      let name;
      _L$3: {
        let name$2;
        _L$4: {
          switch (t.$tag) {
            case 0: {
              const _Base = t;
              const _name = _Base._0;
              name$2 = _name;
              break _L$4;
            }
            case 1: {
              const _Named = t;
              const _name$2 = _Named._0;
              name = _name$2;
              break _L$3;
            }
            case 2: {
              const _ListOf = t;
              const _elem = _ListOf._0;
              elem = _elem;
              break _L$2;
            }
            case 3: {
              const _SetOf = t;
              const _elem$2 = _SetOf._0;
              elem = _elem$2;
              break _L$2;
            }
            default: {
              const _MapOf = t;
              const _key = _MapOf._0;
              const _value = _MapOf._1;
              key = _key;
              value = _value;
              break _L;
            }
          }
        }
        const _bind$4 = [{ _0: "typeId", _1: _M0IPC16string6StringPB6ToJson8to__json(name$2 === "byte" ? "i8" : name$2) }];
        return new _M0DTPC16result6ResultGRPB4JsonRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(_M0MPC14json4Json6object(_M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$4, 0, 1), undefined)));
      }
      let definition;
      _L$4: {
        const _bind$4 = _M0MP216zhaojun_2dcoding6thrift6Schema4find(self, self.root, name);
        let _bind$5;
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          _bind$5 = _ok._0;
        } else {
          return _bind$4;
        }
        const _definition = _bind$5._1;
        definition = _definition;
        break _L$4;
      }
      let id;
      let flavor;
      _L$5: {
        _L$6: {
          switch (definition.$tag) {
            case 1: {
              id = "enum";
              break;
            }
            case 2: {
              const _Record = definition;
              const _flavor = _Record._1;
              flavor = _flavor;
              break _L$6;
            }
            default: {
              return new _M0DTPC16result6ResultGRPB4JsonRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("not a described type"));
            }
          }
          break _L$5;
        }
        id = flavor === "exception" ? "exception" : "struct";
      }
      const owner = _M0FP216zhaojun_2dcoding6thrift17definition__owner(name);
      const class_name = `${owner === self.root ? "" : `${_M0FP216zhaojun_2dcoding6thrift9idl__stem(owner)}.`}${_M0FP216zhaojun_2dcoding6thrift16definition__name(definition)}`;
      const _bind$4 = [{ _0: "typeId", _1: _M0IPC16string6StringPB6ToJson8to__json(id) }, { _0: "class", _1: _M0IPC16string6StringPB6ToJson8to__json(class_name) }];
      return new _M0DTPC16result6ResultGRPB4JsonRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(_M0MPC14json4Json6object(_M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$4, 0, 2), undefined)));
    }
    let _tmp;
    if (t.$tag === 2) {
      _tmp = "list";
    } else {
      _tmp = "set";
    }
    const _bind$4 = [{ _0: "typeId", _1: _M0IPC16string6StringPB6ToJson8to__json(_tmp) }];
    const data = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$4, 0, 1), undefined);
    const _bind$5 = _M0MP216zhaojun_2dcoding6thrift6Schema18describe__type__at(self, data, "elemTypeId", "elemType", elem);
    if (_bind$5.$tag === 1) {
      const _ok = _bind$5;
      _ok._0;
    } else {
      return _bind$5;
    }
    return new _M0DTPC16result6ResultGRPB4JsonRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(_M0MPC14json4Json6object(data));
  }
  const _bind$4 = [{ _0: "typeId", _1: _M0MPC14json4Json6string("map") }];
  const data = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$4, 0, 1), undefined);
  const _bind$5 = _M0MP216zhaojun_2dcoding6thrift6Schema18describe__type__at(self, data, "keyTypeId", "keyType", key);
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _ok._0;
  } else {
    return _bind$5;
  }
  const _bind$6 = _M0MP216zhaojun_2dcoding6thrift6Schema18describe__type__at(self, data, "valueTypeId", "valueType", value);
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  return new _M0DTPC16result6ResultGRPB4JsonRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(_M0MPC14json4Json6object(data));
}
function _M0MP216zhaojun_2dcoding6thrift6Schema18describe__type__at(self, data, id_key, type_key, t) {
  const _bind$4 = _M0MP216zhaojun_2dcoding6thrift6Schema17type__description(self, t);
  let description;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    description = _ok._0;
  } else {
    return _bind$4;
  }
  let fields;
  _L: {
    if (description.$tag === 6) {
      const _Object = description;
      const _fields = _Object._0;
      fields = _fields;
      break _L;
    } else {
      return new _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(undefined);
    }
  }
  _M0MPB3Map3setGsRPB4JsonE(data, id_key, _M0MPB3Map2atGsRPB4JsonE(fields, "typeId"));
  return _M0MPB3Map6lengthGssE(fields) > 1 ? new _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(_M0MPB3Map3setGsRPB4JsonE(data, type_key, description)) : new _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(undefined);
}
function _M0FP216zhaojun_2dcoding6thrift16add__annotations(data, annotations) {
  if (!_M0MPB3Map9is__emptyGssE(annotations)) {
    _M0MPB3Map3setGsRPB4JsonE(data, "annotations", _M0IPB3MapPB6ToJson8to__jsonGssE(annotations));
    return;
  } else {
    return;
  }
}
function _M0MP216zhaojun_2dcoding6thrift6Schema16describe__fields(self, owner, fields) {
  const _bind$4 = _M0MPC15array5Array3mapGRP216zhaojun_2dcoding6thrift8IdlFieldRPB4JsonEHRP216zhaojun_2dcoding6thrift11SchemaError(fields, (field) => {
    const _bind$5 = [{ _0: "key", _1: _M0IPC13int3IntPB6ToJson8to__json(field.id) }, { _0: "name", _1: _M0IPC16string6StringPB6ToJson8to__json(field.name) }, { _0: "required", _1: _M0IPC16string6StringPB6ToJson8to__json(field.requiredness) }];
    const data = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$5, 0, 3), undefined);
    const _bind$6 = _M0MP216zhaojun_2dcoding6thrift6Schema7resolve(self, owner, field.field_type, 0);
    let t;
    if (_bind$6.$tag === 1) {
      const _ok = _bind$6;
      t = _ok._0;
    } else {
      return _bind$6;
    }
    const _bind$7 = _M0MP216zhaojun_2dcoding6thrift6Schema18describe__type__at(self, data, "typeId", "type", t);
    if (_bind$7.$tag === 1) {
      const _ok = _bind$7;
      _ok._0;
    } else {
      return _bind$7;
    }
    _M0FP216zhaojun_2dcoding6thrift16add__annotations(data, field.annotations);
    let value;
    _L: {
      _L$2: {
        const _bind$8 = field.default_value;
        if (_bind$8 === undefined) {
        } else {
          const _Some = _bind$8;
          const _value = _Some;
          value = _value;
          break _L$2;
        }
        break _L;
      }
      const _bind$8 = _M0MP216zhaojun_2dcoding6thrift6Schema11const__json(self, owner, t, value, [], 0, undefined);
      let _tmp;
      if (_bind$8.$tag === 1) {
        const _ok = _bind$8;
        _tmp = _ok._0;
      } else {
        return _bind$8;
      }
      _M0MPB3Map3setGsRPB4JsonE(data, "default", _tmp);
    }
    return new _M0DTPC16result6ResultGRPB4JsonRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(_M0MPC14json4Json6object(data));
  });
  let _tmp;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _tmp = _ok._0;
  } else {
    return _bind$4;
  }
  return new _M0DTPC16result6ResultGRPB4JsonRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(_M0MPC14json4Json5array(_tmp));
}
function _M0MP216zhaojun_2dcoding6thrift6Schema8describe(self) {
  const module_ = _M0MPB3Map2atGsRP216zhaojun_2dcoding6thrift9IdlModuleE(self.modules, self.root);
  const enums = [];
  const structs = [];
  const aliases = [];
  const constants = [];
  const services = [];
  const _bind$4 = module_.definitions;
  const _bind$5 = _bind$4.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$5) {
      const definition = _bind$4[_];
      const _bind$6 = [{ _0: "name", _1: _M0IPC16string6StringPB6ToJson8to__json(_M0FP216zhaojun_2dcoding6thrift16definition__name(definition)) }];
      const data = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$6, 0, 1), undefined);
      let functions;
      let parent;
      let annotations;
      _L: {
        _L$2: {
          let t;
          let value;
          _L$3: {
            _L$4: {
              let fields;
              let flavor;
              let annotations$2;
              _L$5: {
                _L$6: {
                  let values;
                  let annotations$3;
                  _L$7: {
                    _L$8: {
                      let t$2;
                      let annotations$4;
                      _L$9: {
                        switch (definition.$tag) {
                          case 0: {
                            const _Alias = definition;
                            const _t = _Alias._1;
                            const _annotations = _Alias._2;
                            t$2 = _t;
                            annotations$4 = _annotations;
                            break _L$9;
                          }
                          case 1: {
                            const _Enumeration = definition;
                            const _values = _Enumeration._1;
                            const _annotations$2 = _Enumeration._2;
                            values = _values;
                            annotations$3 = _annotations$2;
                            break _L$8;
                          }
                          case 2: {
                            const _Record = definition;
                            const _flavor = _Record._1;
                            const _fields = _Record._2;
                            const _annotations$3 = _Record._3;
                            fields = _fields;
                            flavor = _flavor;
                            annotations$2 = _annotations$3;
                            break _L$6;
                          }
                          case 3: {
                            const _Constant = definition;
                            const _t$2 = _Constant._1;
                            const _value = _Constant._2;
                            t = _t$2;
                            value = _value;
                            break _L$4;
                          }
                          default: {
                            const _Service = definition;
                            const _parent = _Service._1;
                            const _functions = _Service._2;
                            const _annotations$4 = _Service._3;
                            functions = _functions;
                            parent = _parent;
                            annotations = _annotations$4;
                            break _L$2;
                          }
                        }
                      }
                      const _bind$7 = _M0MP216zhaojun_2dcoding6thrift6Schema7resolve(self, self.root, t$2, 0);
                      let _tmp$2;
                      if (_bind$7.$tag === 1) {
                        const _ok = _bind$7;
                        _tmp$2 = _ok._0;
                      } else {
                        return _bind$7;
                      }
                      const _bind$8 = _M0MP216zhaojun_2dcoding6thrift6Schema18describe__type__at(self, data, "typeId", "type", _tmp$2);
                      if (_bind$8.$tag === 1) {
                        const _ok = _bind$8;
                        _ok._0;
                      } else {
                        return _bind$8;
                      }
                      _M0FP216zhaojun_2dcoding6thrift16add__annotations(data, annotations$4);
                      _M0MPC15array5Array4pushGRPB4JsonE(aliases, _M0MPC14json4Json6object(data));
                      break _L$7;
                    }
                    _M0MPB3Map3setGsRPB4JsonE(data, "members", _M0MPC14json4Json5array(_M0MPC15array5Array3mapGUsiERPB4JsonE(values, (pair) => {
                      const _bind$7 = [{ _0: "name", _1: _M0IPC16string6StringPB6ToJson8to__json(pair._0) }, { _0: "value", _1: _M0IPC13int3IntPB6ToJson8to__json(pair._1) }];
                      return _M0MPC14json4Json6object(_M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$7, 0, 2), undefined));
                    })));
                    _M0FP216zhaojun_2dcoding6thrift16add__annotations(data, annotations$3);
                    _M0MPC15array5Array4pushGRPB4JsonE(enums, _M0MPC14json4Json6object(data));
                  }
                  break _L$5;
                }
                _M0MPB3Map3setGsRPB4JsonE(data, "isException", _M0IPC14bool4BoolPB6ToJson8to__json(flavor === "exception"));
                _M0MPB3Map3setGsRPB4JsonE(data, "isUnion", _M0IPC14bool4BoolPB6ToJson8to__json(flavor === "union"));
                const _bind$7 = _M0MP216zhaojun_2dcoding6thrift6Schema16describe__fields(self, self.root, fields);
                let _tmp$2;
                if (_bind$7.$tag === 1) {
                  const _ok = _bind$7;
                  _tmp$2 = _ok._0;
                } else {
                  return _bind$7;
                }
                _M0MPB3Map3setGsRPB4JsonE(data, "fields", _tmp$2);
                _M0FP216zhaojun_2dcoding6thrift16add__annotations(data, annotations$2);
                _M0MPC15array5Array4pushGRPB4JsonE(structs, _M0MPC14json4Json6object(data));
              }
              break _L$3;
            }
            const _bind$7 = _M0MP216zhaojun_2dcoding6thrift6Schema7resolve(self, self.root, t, 0);
            let t$2;
            if (_bind$7.$tag === 1) {
              const _ok = _bind$7;
              t$2 = _ok._0;
            } else {
              return _bind$7;
            }
            const _bind$8 = _M0MP216zhaojun_2dcoding6thrift6Schema18describe__type__at(self, data, "typeId", "type", t$2);
            if (_bind$8.$tag === 1) {
              const _ok = _bind$8;
              _ok._0;
            } else {
              return _bind$8;
            }
            const _bind$9 = _M0MP216zhaojun_2dcoding6thrift6Schema11const__json(self, self.root, t$2, value, [], 0, undefined);
            let _tmp$2;
            if (_bind$9.$tag === 1) {
              const _ok = _bind$9;
              _tmp$2 = _ok._0;
            } else {
              return _bind$9;
            }
            _M0MPB3Map3setGsRPB4JsonE(data, "value", _tmp$2);
            _M0MPC15array5Array4pushGRPB4JsonE(constants, _M0MPC14json4Json6object(data));
          }
          break _L;
        }
        let name;
        _L$3: {
          _L$4: {
            if (parent === undefined) {
            } else {
              const _Some = parent;
              const _name = _Some;
              name = _name;
              break _L$4;
            }
            break _L$3;
          }
          _M0MPB3Map3setGsRPB4JsonE(data, "extends", _M0IPC16string6StringPB6ToJson8to__json(name));
        }
        _M0FP216zhaojun_2dcoding6thrift16add__annotations(data, annotations);
        const _bind$7 = _M0MPC15array5Array3mapGRP216zhaojun_2dcoding6thrift9IdlMethodRPB4JsonEHRP216zhaojun_2dcoding6thrift11SchemaError(functions, (function_) => {
          const _tmp$2 = { _0: "name", _1: _M0IPC16string6StringPB6ToJson8to__json(function_.name) };
          const _tmp$3 = { _0: "oneway", _1: _M0IPC14bool4BoolPB6ToJson8to__json(function_.oneway) };
          const _bind$8 = _M0MP216zhaojun_2dcoding6thrift6Schema16describe__fields(self, self.root, function_.arguments);
          let _tmp$4;
          if (_bind$8.$tag === 1) {
            const _ok = _bind$8;
            _tmp$4 = _ok._0;
          } else {
            return _bind$8;
          }
          const _tmp$5 = { _0: "arguments", _1: _tmp$4 };
          const _bind$9 = _M0MP216zhaojun_2dcoding6thrift6Schema16describe__fields(self, self.root, function_.exceptions);
          let _tmp$6;
          if (_bind$9.$tag === 1) {
            const _ok = _bind$9;
            _tmp$6 = _ok._0;
          } else {
            return _bind$9;
          }
          const _bind$10 = [_tmp$2, _tmp$3, _tmp$5, { _0: "exceptions", _1: _tmp$6 }];
          const item = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$10, 0, 4), undefined);
          const _bind$11 = _M0MP216zhaojun_2dcoding6thrift6Schema7resolve(self, self.root, function_.return_type, 0);
          let _tmp$7;
          if (_bind$11.$tag === 1) {
            const _ok = _bind$11;
            _tmp$7 = _ok._0;
          } else {
            return _bind$11;
          }
          const _bind$12 = _M0MP216zhaojun_2dcoding6thrift6Schema18describe__type__at(self, item, "returnTypeId", "returnType", _tmp$7);
          if (_bind$12.$tag === 1) {
            const _ok = _bind$12;
            _ok._0;
          } else {
            return _bind$12;
          }
          _M0FP216zhaojun_2dcoding6thrift16add__annotations(item, function_.annotations);
          return new _M0DTPC16result6ResultGRPB4JsonRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(_M0MPC14json4Json6object(item));
        });
        let _tmp$2;
        if (_bind$7.$tag === 1) {
          const _ok = _bind$7;
          _tmp$2 = _ok._0;
        } else {
          return _bind$7;
        }
        _M0MPB3Map3setGsRPB4JsonE(data, "functions", _M0MPC14json4Json5array(_tmp$2));
        _M0MPC15array5Array4pushGRPB4JsonE(services, _M0MPC14json4Json6object(data));
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$6 = [{ _0: "name", _1: _M0IPC16string6StringPB6ToJson8to__json(_M0FP216zhaojun_2dcoding6thrift9idl__stem(self.root)) }, { _0: "namespaces", _1: _M0IPB3MapPB6ToJson8to__jsonGssE(module_.namespaces) }, { _0: "includes", _1: _M0IPC15array5ArrayPB6ToJson8to__jsonGsE(_M0MPC15array5Array6filterGsE(_M0MPC15array5Array3mapGssE(module_.includes, _M0FP216zhaojun_2dcoding6thrift9idl__stem), (s) => _M0MPB3Map8containsGssE(_M0MPB3Map2atGsRPB3MapGssEE(self.imports, self.root), s))) }, { _0: "enums", _1: _M0MPC14json4Json5array(enums) }, { _0: "typedefs", _1: _M0MPC14json4Json5array(aliases) }, { _0: "structs", _1: _M0MPC14json4Json5array(structs) }, { _0: "constants", _1: _M0MPC14json4Json5array(constants) }, { _0: "services", _1: _M0MPC14json4Json5array(services) }];
  return new _M0DTPC16result6ResultGRPB4JsonRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(_M0MPC14json4Json6object(_M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$6, 0, 8), undefined)));
}
function _M0FP216zhaojun_2dcoding6thrift9idl__path(path) {
  const _bind$4 = "\\";
  const _tmp = new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length);
  const _bind$5 = "/";
  const path$2 = _M0MPC16string6String12replace__all(path, _tmp, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length));
  const _bind$6 = "/";
  const absolute = _M0MPC16string6String11has__prefix(path$2, new _M0TPC16string10StringView(_bind$6, 0, _bind$6.length));
  const parts = [];
  const _bind$7 = "/";
  const _it = _M0MPC16string6String5split(path$2, new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length));
  while (true) {
    let part;
    _L: {
      const _bind$8 = _M0MPB4Iter4nextGUsRPB4JsonEE(_it);
      if (_bind$8 === undefined) {
        break;
      } else {
        const _Some = _bind$8;
        const _part = _Some;
        part = _part;
        break _L;
      }
    }
    let _tmp$2;
    const _bind$8 = "";
    if (_M0IPC16string10StringViewPB2Eq5equal(part, new _M0TPC16string10StringView(_bind$8, 0, _bind$8.length))) {
      _tmp$2 = true;
    } else {
      const _bind$9 = ".";
      _tmp$2 = _M0IPC16string10StringViewPB2Eq5equal(part, new _M0TPC16string10StringView(_bind$9, 0, _bind$9.length));
    }
    if (_tmp$2) {
      continue;
    }
    let _tmp$3;
    const _bind$9 = "..";
    if (_M0IPC16string10StringViewPB2Eq5equal(part, new _M0TPC16string10StringView(_bind$9, 0, _bind$9.length))) {
      _tmp$3 = !_M0MPC15array5Array9is__emptyGRPB4JsonE(parts) && _M0IP016_24default__implPB2Eq10not__equalGsE(_M0MPC15array5Array2atGsE(parts, parts.length - 1 | 0), "..");
    } else {
      _tmp$3 = false;
    }
    if (_tmp$3) {
      _M0MPC15array5Array3popGRPC14json10WriteFrameE(parts);
    } else {
      _M0MPC15array5Array4pushGRPB4JsonE(parts, _M0MPC16string10StringView9to__owned(part));
    }
    continue;
  }
  const _tmp$2 = absolute ? "/" : "";
  const _bind$8 = "/";
  return `${_tmp$2}${_M0MPC15array5Array4joinGsE(parts, new _M0TPC16string10StringView(_bind$8, 0, _bind$8.length))}`;
}
function _M0FP216zhaojun_2dcoding6thrift9idl__join(owner, path) {
  const _bind$4 = "\\";
  const _tmp = new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length);
  const _bind$5 = "/";
  const path$2 = _M0MPC16string6String12replace__all(path, _tmp, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length));
  let _tmp$2;
  const _bind$6 = "/";
  if (_M0MPC16string6String11has__prefix(path$2, new _M0TPC16string10StringView(_bind$6, 0, _bind$6.length))) {
    _tmp$2 = true;
  } else {
    let _tmp$3;
    if (path$2.length >= 2) {
      const _tmp$4 = _M0MPC16string6String11sub_2einner(path$2, 1, 2);
      const _bind$7 = ":";
      _tmp$3 = _M0IPC16string10StringViewPB2Eq5equal(_tmp$4, new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length));
    } else {
      _tmp$3 = false;
    }
    _tmp$2 = _tmp$3;
  }
  if (_tmp$2) {
    return _M0FP216zhaojun_2dcoding6thrift9idl__path(path$2);
  }
  const _bind$7 = "/";
  const parts = _M0MPB4Iter9to__arrayGsE(_M0MPB4Iter3mapGRPC16string10StringViewsE(_M0MPC16string6String5split(owner, new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length)), (x) => _M0MPC16string10StringView9to__owned(x)));
  _M0MPC15array5Array3popGRPC14json10WriteFrameE(parts);
  _M0MPC15array5Array4pushGRPB4JsonE(parts, path$2);
  const _bind$8 = "/";
  return _M0FP216zhaojun_2dcoding6thrift9idl__path(_M0MPC15array5Array4joinGsE(parts, new _M0TPC16string10StringView(_bind$8, 0, _bind$8.length)));
}
function _M0FP216zhaojun_2dcoding6thrift12idl__integer(token) {
  const text = token.text;
  const cs = _M0MPC16string6String9to__array(text);
  const start = new _M0TPB8MutLocalGiE(0);
  const sign = new _M0TPB8MutLocalGsE("");
  if (_M0IPC16option6OptionPB2Eq5equalGcE(_M0MPC15array5Array3getGcE(cs, 0), 43) || _M0IPC16option6OptionPB2Eq5equalGcE(_M0MPC15array5Array3getGcE(cs, 0), 45)) {
    if (_M0MPC15array5Array2atGcE(cs, 0) === 45) {
      sign.val = "-";
    }
    start.val = 1;
  }
  const hex = _M0IPC16option6OptionPB2Eq5equalGcE(_M0MPC15array5Array3getGcE(cs, start.val), 48) && (_M0IPC16option6OptionPB2Eq5equalGcE(_M0MPC15array5Array3getGcE(cs, start.val + 1 | 0), 120) || _M0IPC16option6OptionPB2Eq5equalGcE(_M0MPC15array5Array3getGcE(cs, start.val + 1 | 0), 88));
  if (hex) {
    start.val = start.val + 2 | 0;
  }
  if (start.val >= cs.length) {
    return new _M0DTPC16result6ResultGlRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eSchemaError_2eSyntax("expected integer", token.location));
  }
  const _bind$4 = start.val;
  const _bind$5 = cs.length;
  let _tmp = _bind$4;
  while (true) {
    const i = _tmp;
    if (i < _bind$5) {
      if (hex ? !_M0MPC14char4Char19is__ascii__hexdigit(_M0MPC15array5Array2atGcE(cs, i)) : !_M0FP216zhaojun_2dcoding6thrift10idl__digit(_M0MPC15array5Array2atGcE(cs, i))) {
        return new _M0DTPC16result6ResultGlRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eSchemaError_2eSyntax("invalid integer", token.location));
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _try_err;
  _L: {
    const _bind$6 = `${sign.val}${_M0MPC16string6String11from__array(_M0MPC15array5Array12view_2einnerGcE(cs, start.val, undefined))}`;
    const _bind$7 = _M0FPC28internal7strconv20parse__int64_2einner(new _M0TPC16string10StringView(_bind$6, 0, _bind$6.length), hex ? 16 : 10);
    let _tmp$2;
    if (_bind$7.$tag === 1) {
      const _ok = _bind$7;
      _tmp$2 = _ok._0;
    } else {
      const _err = _bind$7;
      _try_err = _err._0;
      break _L;
    }
    return new _M0DTPC16result6ResultGlRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(_tmp$2);
  }
  return new _M0DTPC16result6ResultGlRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eSchemaError_2eSyntax("integer out of signed 64-bit range", token.location));
}
function _M0FP216zhaojun_2dcoding6thrift10idl__alpha(c) {
  return c >= 97 && c <= 122 || (c >= 65 && c <= 90 || c === 95);
}
function _M0MP216zhaojun_2dcoding6thrift10IdlScanner8location(self) {
  return new _M0TP216zhaojun_2dcoding6thrift11IdlLocation(self.source, self.pos, self.line, self.column);
}
function _M0MP216zhaojun_2dcoding6thrift10IdlScanner12peek_2einner(self, n) {
  return _M0MPC15array5Array3getGcE(self.chars, self.pos + n | 0);
}
function _M0MP216zhaojun_2dcoding6thrift10IdlScanner4take(self) {
  const c = _M0MPC15array5Array2atGcE(self.chars, self.pos);
  self.pos = self.pos + 1 | 0;
  if (c === 10) {
    self.line = self.line + 1 | 0;
    self.column = 1;
  } else {
    self.column = self.column + 1 | 0;
  }
  return c;
}
function _M0FP216zhaojun_2dcoding6thrift8idl__lex(text, source) {
  if (text.length > 1000000) {
    return new _M0DTPC16result6ResultGRPB5ArrayGRP216zhaojun_2dcoding6thrift8IdlTokenERP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("IDL source exceeds 1000000 UTF-16 units"));
  }
  const scan = new _M0TP216zhaojun_2dcoding6thrift10IdlScanner(_M0MPC16string6String9to__array(text), 0, 1, 1, source);
  const tokens = [];
  while (true) {
    if (scan.pos < scan.chars.length) {
      const c = _M0MPC15array5Array2atGcE(scan.chars, scan.pos);
      if (_M0MPC15array5Array8containsGcE([32, 9, 13, 10, 12], c) || scan.pos === 0 && c === 65279) {
        _M0MP216zhaojun_2dcoding6thrift10IdlScanner4take(scan);
        continue;
      }
      if (c === 35 || c === 47 && _M0IPC16option6OptionPB2Eq5equalGcE(_M0MP216zhaojun_2dcoding6thrift10IdlScanner12peek_2einner(scan, 1), 47)) {
        while (true) {
          if (_M0IP016_24default__implPB2Eq10not__equalGOcE(_M0MP216zhaojun_2dcoding6thrift10IdlScanner12peek_2einner(scan, 0), -1) && _M0IP016_24default__implPB2Eq10not__equalGOcE(_M0MP216zhaojun_2dcoding6thrift10IdlScanner12peek_2einner(scan, 0), 10)) {
            _M0MP216zhaojun_2dcoding6thrift10IdlScanner4take(scan);
            continue;
          } else {
            break;
          }
        }
        continue;
      }
      if (c === 47 && _M0IPC16option6OptionPB2Eq5equalGcE(_M0MP216zhaojun_2dcoding6thrift10IdlScanner12peek_2einner(scan, 1), 42)) {
        const start = _M0MP216zhaojun_2dcoding6thrift10IdlScanner8location(scan);
        _M0MP216zhaojun_2dcoding6thrift10IdlScanner4take(scan);
        _M0MP216zhaojun_2dcoding6thrift10IdlScanner4take(scan);
        const closed = new _M0TPB8MutLocalGbE(false);
        while (true) {
          if (_M0IP016_24default__implPB2Eq10not__equalGOcE(_M0MP216zhaojun_2dcoding6thrift10IdlScanner12peek_2einner(scan, 0), -1)) {
            if (_M0IPC16option6OptionPB2Eq5equalGcE(_M0MP216zhaojun_2dcoding6thrift10IdlScanner12peek_2einner(scan, 0), 42) && _M0IPC16option6OptionPB2Eq5equalGcE(_M0MP216zhaojun_2dcoding6thrift10IdlScanner12peek_2einner(scan, 1), 47)) {
              _M0MP216zhaojun_2dcoding6thrift10IdlScanner4take(scan);
              _M0MP216zhaojun_2dcoding6thrift10IdlScanner4take(scan);
              closed.val = true;
              break;
            }
            _M0MP216zhaojun_2dcoding6thrift10IdlScanner4take(scan);
            continue;
          } else {
            break;
          }
        }
        if (!closed.val) {
          return new _M0DTPC16result6ResultGRPB5ArrayGRP216zhaojun_2dcoding6thrift8IdlTokenERP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eSchemaError_2eSyntax("unterminated comment", start));
        }
        continue;
      }
      const location = _M0MP216zhaojun_2dcoding6thrift10IdlScanner8location(scan);
      const start = scan.pos;
      if (c === 39 || c === 34) {
        _M0MP216zhaojun_2dcoding6thrift10IdlScanner4take(scan);
        const out = _M0MPB13StringBuilder21StringBuilder_2einner(0);
        const closed = new _M0TPB8MutLocalGbE(false);
        while (true) {
          if (_M0IP016_24default__implPB2Eq10not__equalGOcE(_M0MP216zhaojun_2dcoding6thrift10IdlScanner12peek_2einner(scan, 0), -1)) {
            const ch = _M0MP216zhaojun_2dcoding6thrift10IdlScanner4take(scan);
            if (ch === c) {
              closed.val = true;
              break;
            }
            if (ch === 10 || ch === 13) {
              return new _M0DTPC16result6ResultGRPB5ArrayGRP216zhaojun_2dcoding6thrift8IdlTokenERP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eSchemaError_2eSyntax("newline in string literal", location));
            }
            if (ch === 92) {
              if (_M0IPC16option6OptionPB2Eq5equalGcE(_M0MP216zhaojun_2dcoding6thrift10IdlScanner12peek_2einner(scan, 0), -1)) {
                return new _M0DTPC16result6ResultGRPB5ArrayGRP216zhaojun_2dcoding6thrift8IdlTokenERP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eSchemaError_2eSyntax("incomplete string escape", location));
              }
              const escape = _M0MP216zhaojun_2dcoding6thrift10IdlScanner4take(scan);
              switch (escape) {
                case 110: {
                  _M0IPB13StringBuilderPB6Logger11write__char(out, 10);
                  break;
                }
                case 114: {
                  _M0IPB13StringBuilderPB6Logger11write__char(out, 13);
                  break;
                }
                case 116: {
                  _M0IPB13StringBuilderPB6Logger11write__char(out, 9);
                  break;
                }
                case 98: {
                  _M0IPB13StringBuilderPB6Logger11write__char(out, 8);
                  break;
                }
                case 102: {
                  _M0IPB13StringBuilderPB6Logger11write__char(out, 12);
                  break;
                }
                case 92: {
                  _M0IPB13StringBuilderPB6Logger11write__char(out, 92);
                  break;
                }
                case 39: {
                  _M0IPB13StringBuilderPB6Logger11write__char(out, 39);
                  break;
                }
                case 34: {
                  _M0IPB13StringBuilderPB6Logger11write__char(out, 34);
                  break;
                }
                default: {
                  return new _M0DTPC16result6ResultGRPB5ArrayGRP216zhaojun_2dcoding6thrift8IdlTokenERP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eSchemaError_2eSyntax("unsupported string escape", location));
                }
              }
            } else {
              _M0IPB13StringBuilderPB6Logger11write__char(out, ch);
            }
            continue;
          } else {
            break;
          }
        }
        if (!closed.val) {
          return new _M0DTPC16result6ResultGRPB5ArrayGRP216zhaojun_2dcoding6thrift8IdlTokenERP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eSchemaError_2eSyntax("unterminated string literal", location));
        }
        _M0MPC15array5Array4pushGRPB4JsonE(tokens, new _M0TP216zhaojun_2dcoding6thrift8IdlToken(_M0MPB13StringBuilder10to__string(out), true, location));
      } else {
        if (_M0FP216zhaojun_2dcoding6thrift10idl__alpha(c)) {
          _M0MP216zhaojun_2dcoding6thrift10IdlScanner4take(scan);
          while (true) {
            let ch;
            _L: {
              const _bind$4 = _M0MP216zhaojun_2dcoding6thrift10IdlScanner12peek_2einner(scan, 0);
              if (_bind$4 === -1) {
                break;
              } else {
                const _Some = _bind$4;
                const _ch = _Some;
                ch = _ch;
                break _L;
              }
            }
            _L$2: {
              if (_M0FP216zhaojun_2dcoding6thrift10idl__alpha(ch)) {
                break _L$2;
              } else {
                if (_M0FP216zhaojun_2dcoding6thrift10idl__digit(ch)) {
                  break _L$2;
                } else {
                  if (ch === 46) {
                    break _L$2;
                  } else {
                    break;
                  }
                }
              }
            }
            _M0MP216zhaojun_2dcoding6thrift10IdlScanner4take(scan);
            continue;
          }
          _M0MPC15array5Array4pushGRPB4JsonE(tokens, new _M0TP216zhaojun_2dcoding6thrift8IdlToken(_M0MPC16string6String11from__array(_M0MPC15array5Array12view_2einnerGcE(scan.chars, start, scan.pos)), false, location));
        } else {
          _L: {
            _L$2: {
              if (_M0FP216zhaojun_2dcoding6thrift10idl__digit(c)) {
                break _L$2;
              } else {
                if (c === 43) {
                  break _L$2;
                } else {
                  if (c === 45) {
                    break _L$2;
                  } else {
                    _L$3: {
                      if (c === 46) {
                        let n;
                        _L$4: {
                          const _bind$4 = _M0MP216zhaojun_2dcoding6thrift10IdlScanner12peek_2einner(scan, 1);
                          if (_bind$4 === -1) {
                            break _L$3;
                          } else {
                            const _Some = _bind$4;
                            const _n = _Some;
                            n = _n;
                            break _L$4;
                          }
                        }
                        if (_M0FP216zhaojun_2dcoding6thrift10idl__digit(n)) {
                          break _L$2;
                        } else {
                          break _L$3;
                        }
                      } else {
                        break _L$3;
                      }
                    }
                    if (_M0MPC15array5Array8containsGcE([123, 125, 91, 93, 40, 41, 60, 62, 58, 44, 59, 61, 42], c)) {
                      _M0MP216zhaojun_2dcoding6thrift10IdlScanner4take(scan);
                      _M0MPC15array5Array4pushGRPB4JsonE(tokens, new _M0TP216zhaojun_2dcoding6thrift8IdlToken(_M0IPC14char4CharPB4Show10to__string(c), false, location));
                    } else {
                      return new _M0DTPC16result6ResultGRPB5ArrayGRP216zhaojun_2dcoding6thrift8IdlTokenERP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eSchemaError_2eSyntax(`unexpected character ${_M0IPC14char4CharPB4Show10to__string(c)}`, location));
                    }
                  }
                }
              }
              break _L;
            }
            _M0MP216zhaojun_2dcoding6thrift10IdlScanner4take(scan);
            while (true) {
              let ch;
              _L$3: {
                const _bind$4 = _M0MP216zhaojun_2dcoding6thrift10IdlScanner12peek_2einner(scan, 0);
                if (_bind$4 === -1) {
                  break;
                } else {
                  const _Some = _bind$4;
                  const _ch = _Some;
                  ch = _ch;
                  break _L$3;
                }
              }
              _L$4: {
                if (_M0FP216zhaojun_2dcoding6thrift10idl__alpha(ch)) {
                  break _L$4;
                } else {
                  if (_M0FP216zhaojun_2dcoding6thrift10idl__digit(ch)) {
                    break _L$4;
                  } else {
                    if (ch === 46) {
                      break _L$4;
                    } else {
                      _L$5: {
                        if (ch === 43) {
                          break _L$5;
                        } else {
                          if (ch === 45) {
                            break _L$5;
                          } else {
                            break;
                          }
                        }
                      }
                      if (_M0MPC15array5Array2atGcE(scan.chars, scan.pos - 1 | 0) === 101) {
                        break _L$4;
                      } else {
                        if (_M0MPC15array5Array2atGcE(scan.chars, scan.pos - 1 | 0) === 69) {
                          break _L$4;
                        } else {
                          break;
                        }
                      }
                    }
                  }
                }
              }
              _M0MP216zhaojun_2dcoding6thrift10IdlScanner4take(scan);
              continue;
            }
            _M0MPC15array5Array4pushGRPB4JsonE(tokens, new _M0TP216zhaojun_2dcoding6thrift8IdlToken(_M0MPC16string6String11from__array(_M0MPC15array5Array12view_2einnerGcE(scan.chars, start, scan.pos)), false, location));
          }
        }
      }
      if (tokens.length > 200000) {
        return new _M0DTPC16result6ResultGRPB5ArrayGRP216zhaojun_2dcoding6thrift8IdlTokenERP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("IDL token limit"));
      }
      continue;
    } else {
      break;
    }
  }
  _M0MPC15array5Array4pushGRPB4JsonE(tokens, new _M0TP216zhaojun_2dcoding6thrift8IdlToken("<eof>", false, _M0MP216zhaojun_2dcoding6thrift10IdlScanner8location(scan)));
  return new _M0DTPC16result6ResultGRPB5ArrayGRP216zhaojun_2dcoding6thrift8IdlTokenERP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(tokens);
}
function _M0MP216zhaojun_2dcoding6thrift9IdlParser4peek(self) {
  return _M0MPC15array5Array2atGsE(self.tokens, self.pos).quoted ? "<string>" : _M0MPC15array5Array2atGsE(self.tokens, self.pos).text;
}
function _M0MP216zhaojun_2dcoding6thrift9IdlParser3eat(self, text) {
  if (_M0MP216zhaojun_2dcoding6thrift9IdlParser4peek(self) === text) {
    self.pos = self.pos + 1 | 0;
    return true;
  } else {
    return false;
  }
}
function _M0MP216zhaojun_2dcoding6thrift9IdlParser4take(self) {
  const token = _M0MPC15array5Array2atGsE(self.tokens, self.pos);
  if (_M0MP216zhaojun_2dcoding6thrift9IdlParser4peek(self) === "<eof>") {
    return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift8IdlTokenRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eSchemaError_2eSyntax("unexpected end", token.location));
  }
  self.pos = self.pos + 1 | 0;
  self.work = self.work + 1 | 0;
  if (self.work > 200000) {
    return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift8IdlTokenRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("IDL parse work limit"));
  }
  return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift8IdlTokenRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(token);
}
function _M0MP216zhaojun_2dcoding6thrift9IdlParser7literal(self) {
  const _bind$4 = _M0MP216zhaojun_2dcoding6thrift9IdlParser4take(self);
  let token;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    token = _ok._0;
  } else {
    return _bind$4;
  }
  if (!token.quoted) {
    return new _M0DTPC16result6ResultGsRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eSchemaError_2eSyntax("expected string literal", token.location));
  }
  return new _M0DTPC16result6ResultGsRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(token.text);
}
function _M0FP216zhaojun_2dcoding6thrift13idl__reserved(name) {
  return _M0MPC15array5Array8containsGsE(["include", "cpp_include", "namespace", "typedef", "const", "enum", "struct", "union", "exception", "service", "extends", "oneway", "required", "optional", "throws", "cpp_type", "xsd_all", "xsd_optional", "xsd_nillable", "xsd_attrs"], name);
}
function _M0MP216zhaojun_2dcoding6thrift9IdlParser4name(self) {
  const _bind$4 = _M0MP216zhaojun_2dcoding6thrift9IdlParser4take(self);
  let token;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    token = _ok._0;
  } else {
    return _bind$4;
  }
  const cs = _M0MPC16string6String9to__array(token.text);
  if (token.quoted || (_M0MPC15array5Array9is__emptyGcE(cs) || (!_M0FP216zhaojun_2dcoding6thrift10idl__alpha(_M0MPC15array5Array2atGcE(cs, 0)) || _M0FP216zhaojun_2dcoding6thrift13idl__reserved(token.text)))) {
    return new _M0DTPC16result6ResultGsRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eSchemaError_2eSyntax("expected non-reserved identifier", token.location));
  }
  return new _M0DTPC16result6ResultGsRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(token.text);
}
function _M0MP216zhaojun_2dcoding6thrift9IdlParser9separator(self) {
  if (_M0MP216zhaojun_2dcoding6thrift9IdlParser4peek(self) === "," || _M0MP216zhaojun_2dcoding6thrift9IdlParser4peek(self) === ";") {
    self.pos = self.pos + 1 | 0;
    return;
  } else {
    return;
  }
}
function _M0MP216zhaojun_2dcoding6thrift9IdlParser11annotations(self) {
  const _bind$4 = [];
  const annotations = _M0MPB3Map3MapGssE(new _M0TPB9ArrayViewGUssEE(_bind$4, 0, 0), undefined);
  if (_M0MP216zhaojun_2dcoding6thrift9IdlParser3eat(self, "(")) {
    while (true) {
      if (!_M0MP216zhaojun_2dcoding6thrift9IdlParser3eat(self, ")")) {
        const _bind$5 = _M0MP216zhaojun_2dcoding6thrift9IdlParser4name(self);
        let name;
        if (_bind$5.$tag === 1) {
          const _ok = _bind$5;
          name = _ok._0;
        } else {
          return _bind$5;
        }
        let value;
        if (_M0MP216zhaojun_2dcoding6thrift9IdlParser3eat(self, "=")) {
          const _bind$6 = _M0MP216zhaojun_2dcoding6thrift9IdlParser7literal(self);
          if (_bind$6.$tag === 1) {
            const _ok = _bind$6;
            value = _ok._0;
          } else {
            return _bind$6;
          }
        } else {
          value = "1";
        }
        _M0MPB3Map3setGssE(annotations, name, value);
        _M0MP216zhaojun_2dcoding6thrift9IdlParser9separator(self);
        continue;
      } else {
        break;
      }
    }
  }
  return new _M0DTPC16result6ResultGRPB3MapGssERP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(annotations);
}
function _M0FP216zhaojun_2dcoding6thrift11idl__double(token) {
  const cs = _M0MPC16string6String9to__array(token.text);
  const i = new _M0TPB8MutLocalGiE(0);
  const digits = new _M0TPB8MutLocalGiE(0);
  if (_M0IPC16option6OptionPB2Eq5equalGcE(_M0MPC15array5Array3getGcE(cs, i.val), 43) || _M0IPC16option6OptionPB2Eq5equalGcE(_M0MPC15array5Array3getGcE(cs, i.val), 45)) {
    i.val = i.val + 1 | 0;
  }
  while (true) {
    if (i.val < cs.length && _M0FP216zhaojun_2dcoding6thrift10idl__digit(_M0MPC15array5Array2atGcE(cs, i.val))) {
      i.val = i.val + 1 | 0;
      digits.val = digits.val + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (_M0IPC16option6OptionPB2Eq5equalGcE(_M0MPC15array5Array3getGcE(cs, i.val), 46)) {
    i.val = i.val + 1 | 0;
    while (true) {
      if (i.val < cs.length && _M0FP216zhaojun_2dcoding6thrift10idl__digit(_M0MPC15array5Array2atGcE(cs, i.val))) {
        i.val = i.val + 1 | 0;
        digits.val = digits.val + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  }
  if (digits.val === 0) {
    return new _M0DTPC16result6ResultGdRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eSchemaError_2eSyntax("invalid floating constant", token.location));
  }
  if (_M0IPC16option6OptionPB2Eq5equalGcE(_M0MPC15array5Array3getGcE(cs, i.val), 101) || _M0IPC16option6OptionPB2Eq5equalGcE(_M0MPC15array5Array3getGcE(cs, i.val), 69)) {
    i.val = i.val + 1 | 0;
    if (_M0IPC16option6OptionPB2Eq5equalGcE(_M0MPC15array5Array3getGcE(cs, i.val), 43) || _M0IPC16option6OptionPB2Eq5equalGcE(_M0MPC15array5Array3getGcE(cs, i.val), 45)) {
      i.val = i.val + 1 | 0;
    }
    const start = i.val;
    while (true) {
      if (i.val < cs.length && _M0FP216zhaojun_2dcoding6thrift10idl__digit(_M0MPC15array5Array2atGcE(cs, i.val))) {
        i.val = i.val + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    if (i.val === start) {
      return new _M0DTPC16result6ResultGdRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eSchemaError_2eSyntax("invalid floating exponent", token.location));
    }
  }
  if (i.val !== cs.length) {
    return new _M0DTPC16result6ResultGdRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eSchemaError_2eSyntax("invalid floating constant", token.location));
  }
  let _try_err;
  _L: {
    const _bind$4 = token.text;
    const _bind$5 = _M0FPC28internal7strconv13parse__double(new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length));
    let _tmp;
    if (_bind$5.$tag === 1) {
      const _ok = _bind$5;
      _tmp = _ok._0;
    } else {
      const _err = _bind$5;
      _try_err = _err._0;
      break _L;
    }
    return new _M0DTPC16result6ResultGdRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(_tmp);
  }
  const _tmp = token.text;
  const _bind$4 = "-";
  if (_M0MPC16string6String11has__prefix(_tmp, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length))) {
    return new _M0DTPC16result6ResultGdRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(-1 / 0);
  } else {
    return new _M0DTPC16result6ResultGdRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(1 / 0);
  }
}
function _M0MP216zhaojun_2dcoding6thrift9IdlParser4need(self, text) {
  if (!_M0MP216zhaojun_2dcoding6thrift9IdlParser3eat(self, text)) {
    return new _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eSchemaError_2eSyntax(`expected ${text}, got ${_M0MP216zhaojun_2dcoding6thrift9IdlParser4peek(self)}`, _M0MPC15array5Array2atGsE(self.tokens, self.pos).location));
  } else {
    return new _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(undefined);
  }
}
function _M0MP216zhaojun_2dcoding6thrift9IdlParser8constant(self, depth) {
  if (depth > 64) {
    return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift8IdlConstRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("IDL constant nesting limit"));
  }
  if (_M0MP216zhaojun_2dcoding6thrift9IdlParser3eat(self, "[")) {
    const values = [];
    while (true) {
      if (!_M0MP216zhaojun_2dcoding6thrift9IdlParser3eat(self, "]")) {
        const _bind$4 = _M0MP216zhaojun_2dcoding6thrift9IdlParser8constant(self, depth + 1 | 0);
        let _tmp;
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          _tmp = _ok._0;
        } else {
          return _bind$4;
        }
        _M0MPC15array5Array4pushGRPB4JsonE(values, _tmp);
        _M0MP216zhaojun_2dcoding6thrift9IdlParser9separator(self);
        continue;
      } else {
        break;
      }
    }
    return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift8IdlConstRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(new _M0DTP216zhaojun_2dcoding6thrift8IdlConst12ListConstant(values));
  }
  if (_M0MP216zhaojun_2dcoding6thrift9IdlParser3eat(self, "{")) {
    const values = [];
    while (true) {
      if (!_M0MP216zhaojun_2dcoding6thrift9IdlParser3eat(self, "}")) {
        const _bind$4 = _M0MP216zhaojun_2dcoding6thrift9IdlParser8constant(self, depth + 1 | 0);
        let key;
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          key = _ok._0;
        } else {
          return _bind$4;
        }
        const _bind$5 = _M0MP216zhaojun_2dcoding6thrift9IdlParser4need(self, ":");
        if (_bind$5.$tag === 1) {
          const _ok = _bind$5;
          _ok._0;
        } else {
          return _bind$5;
        }
        const _bind$6 = _M0MP216zhaojun_2dcoding6thrift9IdlParser8constant(self, depth + 1 | 0);
        let _tmp;
        if (_bind$6.$tag === 1) {
          const _ok = _bind$6;
          _tmp = _ok._0;
        } else {
          return _bind$6;
        }
        _M0MPC15array5Array4pushGRPB4JsonE(values, { _0: key, _1: _tmp });
        _M0MP216zhaojun_2dcoding6thrift9IdlParser9separator(self);
        continue;
      } else {
        break;
      }
    }
    return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift8IdlConstRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(new _M0DTP216zhaojun_2dcoding6thrift8IdlConst11MapConstant(values));
  }
  const _bind$4 = _M0MP216zhaojun_2dcoding6thrift9IdlParser4take(self);
  let token;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    token = _ok._0;
  } else {
    return _bind$4;
  }
  if (token.quoted) {
    return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift8IdlConstRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(new _M0DTP216zhaojun_2dcoding6thrift8IdlConst14StringConstant(token.text));
  }
  const cs = _M0MPC16string6String9to__array(token.text);
  if (!_M0MPC15array5Array9is__emptyGcE(cs) && (_M0FP216zhaojun_2dcoding6thrift10idl__digit(_M0MPC15array5Array2atGcE(cs, 0)) || (_M0MPC15array5Array2atGcE(cs, 0) === 43 || (_M0MPC15array5Array2atGcE(cs, 0) === 45 || _M0MPC15array5Array2atGcE(cs, 0) === 46)))) {
    const _tmp = _M0MPC16string6String9to__lower(token.text);
    const _bind$5 = "0x";
    const hex = _M0MPC16string6String8contains(_tmp, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length));
    let _tmp$2;
    if (!hex) {
      let _tmp$3;
      const _tmp$4 = token.text;
      const _bind$6 = ".";
      if (_M0MPC16string6String8contains(_tmp$4, new _M0TPC16string10StringView(_bind$6, 0, _bind$6.length))) {
        _tmp$3 = true;
      } else {
        const _tmp$5 = _M0MPC16string6String9to__lower(token.text);
        const _bind$7 = "e";
        _tmp$3 = _M0MPC16string6String8contains(_tmp$5, new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length));
      }
      _tmp$2 = _tmp$3;
    } else {
      _tmp$2 = false;
    }
    if (_tmp$2) {
      const _bind$6 = _M0FP216zhaojun_2dcoding6thrift11idl__double(token);
      let _tmp$3;
      if (_bind$6.$tag === 1) {
        const _ok = _bind$6;
        _tmp$3 = _ok._0;
      } else {
        return _bind$6;
      }
      return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift8IdlConstRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(new _M0DTP216zhaojun_2dcoding6thrift8IdlConst13FloatConstant(_tmp$3));
    }
    const _bind$6 = _M0FP216zhaojun_2dcoding6thrift12idl__integer(token);
    let _tmp$3;
    if (_bind$6.$tag === 1) {
      const _ok = _bind$6;
      _tmp$3 = _ok._0;
    } else {
      return _bind$6;
    }
    return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift8IdlConstRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(new _M0DTP216zhaojun_2dcoding6thrift8IdlConst15IntegerConstant(_tmp$3));
  }
  if (!_M0MPC15array5Array9is__emptyGcE(cs) && _M0FP216zhaojun_2dcoding6thrift10idl__alpha(_M0MPC15array5Array2atGcE(cs, 0))) {
    return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift8IdlConstRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(new _M0DTP216zhaojun_2dcoding6thrift8IdlConst12NameConstant(token.text));
  } else {
    return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift8IdlConstRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eSchemaError_2eSyntax("expected constant", token.location));
  }
}
function _M0MP216zhaojun_2dcoding6thrift9IdlParser11field__type(self, depth) {
  if (depth > 64) {
    return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift7IdlTypeRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("IDL type nesting limit"));
  }
  const _bind$4 = _M0MP216zhaojun_2dcoding6thrift9IdlParser4take(self);
  let token;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    token = _ok._0;
  } else {
    return _bind$4;
  }
  const name = token.text;
  if (token.quoted) {
    return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift7IdlTypeRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eSchemaError_2eSyntax("expected type", token.location));
  }
  if (_M0MPC15array5Array8containsGsE(["bool", "byte", "i8", "i16", "i32", "i64", "double", "string", "binary", "uuid", "void"], name)) {
    return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift7IdlTypeRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(new _M0DTP216zhaojun_2dcoding6thrift7IdlType4Base(name === "i8" ? "byte" : name));
  }
  if (_M0MPC15array5Array8containsGsE(["list", "set", "map"], name)) {
    if (_M0MP216zhaojun_2dcoding6thrift9IdlParser3eat(self, "cpp_type")) {
      const _bind$5 = _M0MP216zhaojun_2dcoding6thrift9IdlParser7literal(self);
      if (_bind$5.$tag === 1) {
        const _ok = _bind$5;
        _ok._0;
      } else {
        return _bind$5;
      }
    }
    const _bind$5 = _M0MP216zhaojun_2dcoding6thrift9IdlParser4need(self, "<");
    if (_bind$5.$tag === 1) {
      const _ok = _bind$5;
      _ok._0;
    } else {
      return _bind$5;
    }
    const _bind$6 = _M0MP216zhaojun_2dcoding6thrift9IdlParser11field__type(self, depth + 1 | 0);
    let first;
    if (_bind$6.$tag === 1) {
      const _ok = _bind$6;
      first = _ok._0;
    } else {
      return _bind$6;
    }
    let result;
    if (name === "map") {
      const _bind$7 = _M0MP216zhaojun_2dcoding6thrift9IdlParser4need(self, ",");
      if (_bind$7.$tag === 1) {
        const _ok = _bind$7;
        _ok._0;
      } else {
        return _bind$7;
      }
      const _bind$8 = _M0MP216zhaojun_2dcoding6thrift9IdlParser11field__type(self, depth + 1 | 0);
      let _tmp;
      if (_bind$8.$tag === 1) {
        const _ok = _bind$8;
        _tmp = _ok._0;
      } else {
        return _bind$8;
      }
      result = new _M0DTP216zhaojun_2dcoding6thrift7IdlType5MapOf(first, _tmp);
    } else {
      result = name === "set" ? new _M0DTP216zhaojun_2dcoding6thrift7IdlType5SetOf(first) : new _M0DTP216zhaojun_2dcoding6thrift7IdlType6ListOf(first);
    }
    const _bind$7 = _M0MP216zhaojun_2dcoding6thrift9IdlParser4need(self, ">");
    if (_bind$7.$tag === 1) {
      const _ok = _bind$7;
      _ok._0;
    } else {
      return _bind$7;
    }
    if (_M0MP216zhaojun_2dcoding6thrift9IdlParser3eat(self, "cpp_type")) {
      const _bind$8 = _M0MP216zhaojun_2dcoding6thrift9IdlParser7literal(self);
      if (_bind$8.$tag === 1) {
        const _ok = _bind$8;
        _ok._0;
      } else {
        return _bind$8;
      }
    }
    const _bind$8 = _M0MP216zhaojun_2dcoding6thrift9IdlParser11annotations(self);
    if (_bind$8.$tag === 1) {
      const _ok = _bind$8;
      _ok._0;
    } else {
      return _bind$8;
    }
    return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift7IdlTypeRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(result);
  }
  _L: {
    let c;
    _L$2: {
      const _bind$5 = _M0MPC15array5Array3getGcE(_M0MPC16string6String9to__array(name), 0);
      if (_bind$5 === -1) {
        break _L;
      } else {
        const _Some = _bind$5;
        const _c = _Some;
        c = _c;
        break _L$2;
      }
    }
    if (_M0FP216zhaojun_2dcoding6thrift10idl__alpha(c)) {
      if (!_M0FP216zhaojun_2dcoding6thrift13idl__reserved(name)) {
        return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift7IdlTypeRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(new _M0DTP216zhaojun_2dcoding6thrift7IdlType5Named(name));
      } else {
        break _L;
      }
    } else {
      break _L;
    }
  }
  return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift7IdlTypeRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eSchemaError_2eSyntax("invalid type", token.location));
}
function _M0MP216zhaojun_2dcoding6thrift9IdlParser14fields_2einner(self, end, union, depth) {
  if (depth > 64) {
    return new _M0DTPC16result6ResultGRPB5ArrayGRP216zhaojun_2dcoding6thrift8IdlFieldERP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("IDL field metadata nesting limit"));
  }
  const fields = [];
  const _bind$4 = [];
  const ids = _M0MPB3Map3MapGibE(new _M0TPB9ArrayViewGUibEE(_bind$4, 0, 0), undefined);
  const _bind$5 = [];
  const names = _M0MPB3Map3MapGsbE(new _M0TPB9ArrayViewGUsbEE(_bind$5, 0, 0), undefined);
  const automatic = new _M0TPB8MutLocalGiE(-1);
  while (true) {
    if (!_M0MP216zhaojun_2dcoding6thrift9IdlParser3eat(self, end)) {
      const location = _M0MPC15array5Array2atGsE(self.tokens, self.pos).location;
      let explicit;
      let token;
      _L: {
        _L$2: {
          const _bind$6 = _M0MPC15array5Array3getGRP216zhaojun_2dcoding6thrift8IdlTokenE(self.tokens, self.pos + 1 | 0);
          if (_bind$6 === undefined) {
            explicit = false;
          } else {
            const _Some = _bind$6;
            const _token = _Some;
            token = _token;
            break _L$2;
          }
          break _L;
        }
        explicit = token.text === ":";
      }
      let id;
      if (explicit) {
        const _bind$6 = _M0MP216zhaojun_2dcoding6thrift9IdlParser4take(self);
        let _tmp;
        if (_bind$6.$tag === 1) {
          const _ok = _bind$6;
          _tmp = _ok._0;
        } else {
          return _bind$6;
        }
        const _bind$7 = _M0FP216zhaojun_2dcoding6thrift12idl__integer(_tmp);
        let n;
        if (_bind$7.$tag === 1) {
          const _ok = _bind$7;
          n = _ok._0;
        } else {
          return _bind$7;
        }
        const _bind$8 = _M0MP216zhaojun_2dcoding6thrift9IdlParser4need(self, ":");
        if (_bind$8.$tag === 1) {
          const _ok = _bind$8;
          _ok._0;
        } else {
          return _bind$8;
        }
        if (BigInt.asIntN(64, n) > BigInt.asIntN(64, 2147483647n)) {
          return new _M0DTPC16result6ResultGRPB5ArrayGRP216zhaojun_2dcoding6thrift8IdlFieldERP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eSchemaError_2eSyntax("field id exceeds metadata integer range", location));
        }
        if (BigInt.asIntN(64, n) > BigInt.asIntN(64, 0n)) {
          id = Number(BigInt.asIntN(32, n)) | 0;
        } else {
          const n$2 = automatic.val;
          automatic.val = automatic.val - 1 | 0;
          id = n$2;
        }
      } else {
        const n = automatic.val;
        automatic.val = automatic.val - 1 | 0;
        id = n;
      }
      if (automatic.val < -32769) {
        return new _M0DTPC16result6ResultGRPB5ArrayGRP216zhaojun_2dcoding6thrift8IdlFieldERP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eSchemaError_2eSyntax("automatic field id limit", location));
      }
      const req = _M0MP216zhaojun_2dcoding6thrift9IdlParser3eat(self, "required") ? "required" : _M0MP216zhaojun_2dcoding6thrift9IdlParser3eat(self, "optional") ? "optional" : "req_out";
      const _bind$6 = _M0MP216zhaojun_2dcoding6thrift9IdlParser11field__type(self, 0);
      let field_type;
      if (_bind$6.$tag === 1) {
        const _ok = _bind$6;
        field_type = _ok._0;
      } else {
        return _bind$6;
      }
      const _bind$7 = _M0MP216zhaojun_2dcoding6thrift9IdlParser4name(self);
      let name;
      if (_bind$7.$tag === 1) {
        const _ok = _bind$7;
        name = _ok._0;
      } else {
        return _bind$7;
      }
      if (_M0IP216zhaojun_2dcoding6thrift7IdlTypePB2Eq5equal(field_type, new _M0DTP216zhaojun_2dcoding6thrift7IdlType4Base("void"))) {
        return new _M0DTPC16result6ResultGRPB5ArrayGRP216zhaojun_2dcoding6thrift8IdlFieldERP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eSchemaError_2eSyntax("field cannot have void type", location));
      }
      let default_value;
      if (_M0MP216zhaojun_2dcoding6thrift9IdlParser3eat(self, "=")) {
        const _bind$8 = _M0MP216zhaojun_2dcoding6thrift9IdlParser8constant(self, 0);
        if (_bind$8.$tag === 1) {
          const _ok = _bind$8;
          default_value = _ok._0;
        } else {
          return _bind$8;
        }
      } else {
        default_value = undefined;
      }
      while (true) {
        if (_M0MP216zhaojun_2dcoding6thrift9IdlParser3eat(self, "xsd_optional") || _M0MP216zhaojun_2dcoding6thrift9IdlParser3eat(self, "xsd_nillable")) {
          continue;
        } else {
          break;
        }
      }
      if (_M0MP216zhaojun_2dcoding6thrift9IdlParser3eat(self, "xsd_attrs")) {
        const _bind$8 = _M0MP216zhaojun_2dcoding6thrift9IdlParser4need(self, "{");
        if (_bind$8.$tag === 1) {
          const _ok = _bind$8;
          _ok._0;
        } else {
          return _bind$8;
        }
        const _bind$9 = _M0MP216zhaojun_2dcoding6thrift9IdlParser14fields_2einner(self, "}", false, depth + 1 | 0);
        if (_bind$9.$tag === 1) {
          const _ok = _bind$9;
          _ok._0;
        } else {
          return _bind$9;
        }
      }
      const _bind$8 = _M0MP216zhaojun_2dcoding6thrift9IdlParser11annotations(self);
      let annotations;
      if (_bind$8.$tag === 1) {
        const _ok = _bind$8;
        annotations = _ok._0;
      } else {
        return _bind$8;
      }
      _M0MP216zhaojun_2dcoding6thrift9IdlParser9separator(self);
      if (_M0MPB3Map8containsGibE(ids, id) || _M0MPB3Map8containsGsbE(names, name)) {
        return new _M0DTPC16result6ResultGRPB5ArrayGRP216zhaojun_2dcoding6thrift8IdlFieldERP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eSchemaError_2eSyntax("duplicate field id or name", location));
      }
      _M0MPB3Map3setGibE(ids, id, true);
      _M0MPB3Map3setGsbE(names, name, true);
      _M0MPC15array5Array4pushGRPB4JsonE(fields, new _M0TP216zhaojun_2dcoding6thrift8IdlField(id, name, field_type, union ? "optional" : req, default_value, annotations, location));
      if (fields.length > 10000) {
        return new _M0DTPC16result6ResultGRPB5ArrayGRP216zhaojun_2dcoding6thrift8IdlFieldERP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("IDL field count limit"));
      }
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGRP216zhaojun_2dcoding6thrift8IdlFieldERP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(fields);
}
function _M0FP216zhaojun_2dcoding6thrift18parse__idl_2einner(text, source) {
  const _bind$4 = _M0FP216zhaojun_2dcoding6thrift8idl__lex(text, source);
  let _tmp;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _tmp = _ok._0;
  } else {
    return _bind$4;
  }
  const parser = new _M0TP216zhaojun_2dcoding6thrift9IdlParser(_tmp, 0, 0);
  const includes = [];
  const _bind$5 = [];
  const namespaces = _M0MPB3Map3MapGssE(new _M0TPB9ArrayViewGUssEE(_bind$5, 0, 0), undefined);
  const cpp_includes = [];
  const definitions = [];
  const _bind$6 = [];
  const names = _M0MPB3Map3MapGsbE(new _M0TPB9ArrayViewGUsbEE(_bind$6, 0, 0), undefined);
  while (true) {
    if (_M0IP016_24default__implPB2Eq10not__equalGsE(_M0MP216zhaojun_2dcoding6thrift9IdlParser4peek(parser), "<eof>")) {
      const _bind$7 = _M0MP216zhaojun_2dcoding6thrift9IdlParser4take(parser);
      let token;
      if (_bind$7.$tag === 1) {
        const _ok = _bind$7;
        token = _ok._0;
      } else {
        return _bind$7;
      }
      const keyword = token.text;
      if (!_M0MPC15array5Array9is__emptyGRPB4JsonE(definitions) && _M0MPC15array5Array8containsGsE(["include", "cpp_include", "namespace"], keyword)) {
        return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift9IdlModuleRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eSchemaError_2eSyntax("IDL headers must precede definitions", token.location));
      }
      if (keyword === "include") {
        const _bind$8 = _M0MP216zhaojun_2dcoding6thrift9IdlParser7literal(parser);
        let _tmp$2;
        if (_bind$8.$tag === 1) {
          const _ok = _bind$8;
          _tmp$2 = _ok._0;
        } else {
          return _bind$8;
        }
        _M0MPC15array5Array4pushGRPB4JsonE(includes, _tmp$2);
        _M0MP216zhaojun_2dcoding6thrift9IdlParser9separator(parser);
        continue;
      }
      if (keyword === "cpp_include") {
        const _bind$8 = _M0MP216zhaojun_2dcoding6thrift9IdlParser7literal(parser);
        let _tmp$2;
        if (_bind$8.$tag === 1) {
          const _ok = _bind$8;
          _tmp$2 = _ok._0;
        } else {
          return _bind$8;
        }
        _M0MPC15array5Array4pushGRPB4JsonE(cpp_includes, _tmp$2);
        _M0MP216zhaojun_2dcoding6thrift9IdlParser9separator(parser);
        continue;
      }
      if (keyword === "namespace") {
        let scope;
        if (_M0MP216zhaojun_2dcoding6thrift9IdlParser3eat(parser, "*")) {
          scope = "*";
        } else {
          const _bind$8 = _M0MP216zhaojun_2dcoding6thrift9IdlParser4name(parser);
          if (_bind$8.$tag === 1) {
            const _ok = _bind$8;
            scope = _ok._0;
          } else {
            return _bind$8;
          }
        }
        let _tmp$2;
        if (_M0MP216zhaojun_2dcoding6thrift9IdlParser4peek(parser) === "<string>") {
          const _bind$8 = _M0MP216zhaojun_2dcoding6thrift9IdlParser7literal(parser);
          if (_bind$8.$tag === 1) {
            const _ok = _bind$8;
            _tmp$2 = _ok._0;
          } else {
            return _bind$8;
          }
        } else {
          const _bind$8 = _M0MP216zhaojun_2dcoding6thrift9IdlParser4name(parser);
          if (_bind$8.$tag === 1) {
            const _ok = _bind$8;
            _tmp$2 = _ok._0;
          } else {
            return _bind$8;
          }
        }
        _M0MPB3Map3setGssE(namespaces, scope, _tmp$2);
        const _bind$8 = _M0MP216zhaojun_2dcoding6thrift9IdlParser11annotations(parser);
        if (_bind$8.$tag === 1) {
          const _ok = _bind$8;
          _ok._0;
        } else {
          return _bind$8;
        }
        _M0MP216zhaojun_2dcoding6thrift9IdlParser9separator(parser);
        continue;
      }
      let definition;
      _L: {
        _L$2: {
          switch (keyword) {
            case "typedef": {
              const _bind$8 = _M0MP216zhaojun_2dcoding6thrift9IdlParser11field__type(parser, 0);
              let t;
              if (_bind$8.$tag === 1) {
                const _ok = _bind$8;
                t = _ok._0;
              } else {
                return _bind$8;
              }
              const _bind$9 = _M0MP216zhaojun_2dcoding6thrift9IdlParser4name(parser);
              let name;
              if (_bind$9.$tag === 1) {
                const _ok = _bind$9;
                name = _ok._0;
              } else {
                return _bind$9;
              }
              const _bind$10 = _M0MP216zhaojun_2dcoding6thrift9IdlParser11annotations(parser);
              let _tmp$2;
              if (_bind$10.$tag === 1) {
                const _ok = _bind$10;
                _tmp$2 = _ok._0;
              } else {
                return _bind$10;
              }
              definition = new _M0DTP216zhaojun_2dcoding6thrift13IdlDefinition5Alias(name, t, _tmp$2);
              break;
            }
            case "const": {
              const _bind$11 = _M0MP216zhaojun_2dcoding6thrift9IdlParser11field__type(parser, 0);
              let t$2;
              if (_bind$11.$tag === 1) {
                const _ok = _bind$11;
                t$2 = _ok._0;
              } else {
                return _bind$11;
              }
              const _bind$12 = _M0MP216zhaojun_2dcoding6thrift9IdlParser4name(parser);
              let name$2;
              if (_bind$12.$tag === 1) {
                const _ok = _bind$12;
                name$2 = _ok._0;
              } else {
                return _bind$12;
              }
              const _bind$13 = _M0MP216zhaojun_2dcoding6thrift9IdlParser4need(parser, "=");
              if (_bind$13.$tag === 1) {
                const _ok = _bind$13;
                _ok._0;
              } else {
                return _bind$13;
              }
              const _bind$14 = _M0MP216zhaojun_2dcoding6thrift9IdlParser8constant(parser, 0);
              let _tmp$3;
              if (_bind$14.$tag === 1) {
                const _ok = _bind$14;
                _tmp$3 = _ok._0;
              } else {
                return _bind$14;
              }
              definition = new _M0DTP216zhaojun_2dcoding6thrift13IdlDefinition8Constant(name$2, t$2, _tmp$3);
              break;
            }
            case "enum": {
              const _bind$15 = _M0MP216zhaojun_2dcoding6thrift9IdlParser4name(parser);
              let name$3;
              if (_bind$15.$tag === 1) {
                const _ok = _bind$15;
                name$3 = _ok._0;
              } else {
                return _bind$15;
              }
              const _bind$16 = _M0MP216zhaojun_2dcoding6thrift9IdlParser4need(parser, "{");
              if (_bind$16.$tag === 1) {
                const _ok = _bind$16;
                _ok._0;
              } else {
                return _bind$16;
              }
              const members = [];
              const _bind$17 = [];
              const used = _M0MPB3Map3MapGsbE(new _M0TPB9ArrayViewGUsbEE(_bind$17, 0, 0), undefined);
              const next = new _M0TPB8MutLocalGlE(0n);
              while (true) {
                if (!_M0MP216zhaojun_2dcoding6thrift9IdlParser3eat(parser, "}")) {
                  const location = _M0MPC15array5Array2atGsE(parser.tokens, parser.pos).location;
                  const _bind$18 = _M0MP216zhaojun_2dcoding6thrift9IdlParser4name(parser);
                  let item_name;
                  if (_bind$18.$tag === 1) {
                    const _ok = _bind$18;
                    item_name = _ok._0;
                  } else {
                    return _bind$18;
                  }
                  let value;
                  if (_M0MP216zhaojun_2dcoding6thrift9IdlParser3eat(parser, "=")) {
                    const _bind$19 = _M0MP216zhaojun_2dcoding6thrift9IdlParser4take(parser);
                    let _tmp$4;
                    if (_bind$19.$tag === 1) {
                      const _ok = _bind$19;
                      _tmp$4 = _ok._0;
                    } else {
                      return _bind$19;
                    }
                    const _bind$20 = _M0FP216zhaojun_2dcoding6thrift12idl__integer(_tmp$4);
                    if (_bind$20.$tag === 1) {
                      const _ok = _bind$20;
                      value = _ok._0;
                    } else {
                      return _bind$20;
                    }
                  } else {
                    value = next.val;
                  }
                  if (BigInt.asIntN(64, value) < BigInt.asIntN(64, 18446744071562067968n) || BigInt.asIntN(64, value) > BigInt.asIntN(64, 2147483647n)) {
                    return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift9IdlModuleRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eSchemaError_2eSyntax("enum value out of signed 32-bit range", location));
                  }
                  if (_M0MPB3Map8containsGsbE(used, item_name)) {
                    return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift9IdlModuleRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eSchemaError_2eSyntax("duplicate enum member", location));
                  }
                  _M0MPB3Map3setGsbE(used, item_name, true);
                  _M0MPC15array5Array4pushGRPB4JsonE(members, { _0: item_name, _1: Number(BigInt.asIntN(32, value)) | 0 });
                  next.val = BigInt.asUintN(64, value + 1n);
                  const _bind$19 = _M0MP216zhaojun_2dcoding6thrift9IdlParser11annotations(parser);
                  if (_bind$19.$tag === 1) {
                    const _ok = _bind$19;
                    _ok._0;
                  } else {
                    return _bind$19;
                  }
                  _M0MP216zhaojun_2dcoding6thrift9IdlParser9separator(parser);
                  continue;
                } else {
                  break;
                }
              }
              const _bind$18 = _M0MP216zhaojun_2dcoding6thrift9IdlParser11annotations(parser);
              let _tmp$4;
              if (_bind$18.$tag === 1) {
                const _ok = _bind$18;
                _tmp$4 = _ok._0;
              } else {
                return _bind$18;
              }
              definition = new _M0DTP216zhaojun_2dcoding6thrift13IdlDefinition11Enumeration(name$3, members, _tmp$4);
              break;
            }
            case "struct": {
              break _L$2;
            }
            case "union": {
              break _L$2;
            }
            case "exception": {
              break _L$2;
            }
            case "service": {
              const _bind$19 = _M0MP216zhaojun_2dcoding6thrift9IdlParser4name(parser);
              let name$4;
              if (_bind$19.$tag === 1) {
                const _ok = _bind$19;
                name$4 = _ok._0;
              } else {
                return _bind$19;
              }
              let parent;
              if (_M0MP216zhaojun_2dcoding6thrift9IdlParser3eat(parser, "extends")) {
                const _bind$20 = _M0MP216zhaojun_2dcoding6thrift9IdlParser4name(parser);
                if (_bind$20.$tag === 1) {
                  const _ok = _bind$20;
                  parent = _ok._0;
                } else {
                  return _bind$20;
                }
              } else {
                parent = undefined;
              }
              const _bind$20 = _M0MP216zhaojun_2dcoding6thrift9IdlParser4need(parser, "{");
              if (_bind$20.$tag === 1) {
                const _ok = _bind$20;
                _ok._0;
              } else {
                return _bind$20;
              }
              const methods = [];
              const _bind$21 = [];
              const used$2 = _M0MPB3Map3MapGsbE(new _M0TPB9ArrayViewGUsbEE(_bind$21, 0, 0), undefined);
              while (true) {
                if (!_M0MP216zhaojun_2dcoding6thrift9IdlParser3eat(parser, "}")) {
                  const location = _M0MPC15array5Array2atGsE(parser.tokens, parser.pos).location;
                  const oneway = _M0MP216zhaojun_2dcoding6thrift9IdlParser3eat(parser, "oneway");
                  const _bind$22 = _M0MP216zhaojun_2dcoding6thrift9IdlParser11field__type(parser, 0);
                  let return_type;
                  if (_bind$22.$tag === 1) {
                    const _ok = _bind$22;
                    return_type = _ok._0;
                  } else {
                    return _bind$22;
                  }
                  const _bind$23 = _M0MP216zhaojun_2dcoding6thrift9IdlParser4name(parser);
                  let function_name;
                  if (_bind$23.$tag === 1) {
                    const _ok = _bind$23;
                    function_name = _ok._0;
                  } else {
                    return _bind$23;
                  }
                  const _bind$24 = _M0MP216zhaojun_2dcoding6thrift9IdlParser4need(parser, "(");
                  if (_bind$24.$tag === 1) {
                    const _ok = _bind$24;
                    _ok._0;
                  } else {
                    return _bind$24;
                  }
                  const _bind$25 = _M0MP216zhaojun_2dcoding6thrift9IdlParser14fields_2einner(parser, ")", false, 0);
                  let arguments_;
                  if (_bind$25.$tag === 1) {
                    const _ok = _bind$25;
                    arguments_ = _ok._0;
                  } else {
                    return _bind$25;
                  }
                  let exceptions;
                  if (_M0MP216zhaojun_2dcoding6thrift9IdlParser3eat(parser, "throws")) {
                    const _bind$26 = _M0MP216zhaojun_2dcoding6thrift9IdlParser4need(parser, "(");
                    if (_bind$26.$tag === 1) {
                      const _ok = _bind$26;
                      _ok._0;
                    } else {
                      return _bind$26;
                    }
                    const _bind$27 = _M0MP216zhaojun_2dcoding6thrift9IdlParser14fields_2einner(parser, ")", false, 0);
                    if (_bind$27.$tag === 1) {
                      const _ok = _bind$27;
                      exceptions = _ok._0;
                    } else {
                      return _bind$27;
                    }
                  } else {
                    exceptions = [];
                  }
                  if (_M0MPB3Map8containsGsbE(used$2, function_name)) {
                    return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift9IdlModuleRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eSchemaError_2eSyntax("duplicate service method", location));
                  }
                  _M0MPB3Map3setGsbE(used$2, function_name, true);
                  if (oneway && !_M0MPC15array5Array9is__emptyGRPB4JsonE(exceptions)) {
                    return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift9IdlModuleRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eSchemaError_2eSyntax("oneway method cannot throw", location));
                  }
                  const _bind$26 = _M0MP216zhaojun_2dcoding6thrift9IdlParser11annotations(parser);
                  let annotations;
                  if (_bind$26.$tag === 1) {
                    const _ok = _bind$26;
                    annotations = _ok._0;
                  } else {
                    return _bind$26;
                  }
                  _M0MP216zhaojun_2dcoding6thrift9IdlParser9separator(parser);
                  _M0MPC15array5Array4pushGRPB4JsonE(methods, new _M0TP216zhaojun_2dcoding6thrift9IdlMethod(function_name, return_type, oneway, arguments_, exceptions, annotations, location));
                  continue;
                } else {
                  break;
                }
              }
              const _bind$22 = _M0MP216zhaojun_2dcoding6thrift9IdlParser11annotations(parser);
              let _tmp$5;
              if (_bind$22.$tag === 1) {
                const _ok = _bind$22;
                _tmp$5 = _ok._0;
              } else {
                return _bind$22;
              }
              definition = new _M0DTP216zhaojun_2dcoding6thrift13IdlDefinition7Service(name$4, parent, methods, _tmp$5);
              break;
            }
            default: {
              return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift9IdlModuleRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eSchemaError_2eSyntax(`expected IDL definition, got ${keyword}`, token.location));
            }
          }
          break _L;
        }
        const _bind$8 = _M0MP216zhaojun_2dcoding6thrift9IdlParser4name(parser);
        let name;
        if (_bind$8.$tag === 1) {
          const _ok = _bind$8;
          name = _ok._0;
        } else {
          return _bind$8;
        }
        _M0MP216zhaojun_2dcoding6thrift9IdlParser3eat(parser, "xsd_all");
        const _bind$9 = _M0MP216zhaojun_2dcoding6thrift9IdlParser4need(parser, "{");
        if (_bind$9.$tag === 1) {
          const _ok = _bind$9;
          _ok._0;
        } else {
          return _bind$9;
        }
        const _bind$10 = _M0MP216zhaojun_2dcoding6thrift9IdlParser14fields_2einner(parser, "}", keyword === "union", 0);
        let _tmp$2;
        if (_bind$10.$tag === 1) {
          const _ok = _bind$10;
          _tmp$2 = _ok._0;
        } else {
          return _bind$10;
        }
        const _bind$11 = _M0MP216zhaojun_2dcoding6thrift9IdlParser11annotations(parser);
        let _tmp$3;
        if (_bind$11.$tag === 1) {
          const _ok = _bind$11;
          _tmp$3 = _ok._0;
        } else {
          return _bind$11;
        }
        definition = new _M0DTP216zhaojun_2dcoding6thrift13IdlDefinition6Record(name, keyword, _tmp$2, _tmp$3);
      }
      let name;
      switch (definition.$tag) {
        case 0: {
          const _Alias = definition;
          const _n = _Alias._0;
          name = _n;
          break;
        }
        case 3: {
          const _Constant = definition;
          const _n$2 = _Constant._0;
          name = _n$2;
          break;
        }
        case 1: {
          const _Enumeration = definition;
          const _n$3 = _Enumeration._0;
          name = _n$3;
          break;
        }
        case 2: {
          const _Record = definition;
          const _n$4 = _Record._0;
          name = _n$4;
          break;
        }
        default: {
          const _Service = definition;
          const _n$5 = _Service._0;
          name = _n$5;
        }
      }
      if (_M0MPB3Map8containsGsbE(names, name)) {
        return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift9IdlModuleRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eSchemaError_2eSyntax(`duplicate definition ${name}`, token.location));
      }
      _M0MPB3Map3setGsbE(names, name, true);
      _M0MPC15array5Array4pushGRPB4JsonE(definitions, definition);
      _M0MP216zhaojun_2dcoding6thrift9IdlParser9separator(parser);
      if (definitions.length > 10000) {
        return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift9IdlModuleRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("IDL definition count limit"));
      }
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift9IdlModuleRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(new _M0TP216zhaojun_2dcoding6thrift9IdlModule(source, includes, namespaces, cpp_includes, definitions));
}
function _M0FP216zhaojun_2dcoding6thrift18load__idl__modules(name, sources, modules, imports, active, diagnostics, include_paths) {
  if (_M0MPC15array5Array8containsGsE(active, name)) {
    return new _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema(`circular IDL include ${name}`));
  }
  if (_M0MPB3Map8containsGsRP216zhaojun_2dcoding6thrift9IdlModuleE(modules, name)) {
    return new _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(undefined);
  }
  if (active.length >= 32 || _M0MPB3Map6lengthGssE(modules) >= 128) {
    return new _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("IDL include limit"));
  }
  let text;
  const _bind$4 = _M0MPB3Map3getGssE(sources, name);
  if (_bind$4 === undefined) {
    return new _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema(`missing IDL source ${name}`));
  } else {
    const _Some = _bind$4;
    const _s = _Some;
    text = _s;
  }
  const _bind$5 = _M0FP216zhaojun_2dcoding6thrift18parse__idl_2einner(text, name);
  let parsed;
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    parsed = _ok._0;
  } else {
    return _bind$5;
  }
  _M0MPC15array5Array4pushGRPB4JsonE(active, name);
  const _defer = () => {
    _M0MPC15array5Array3popGRPC14json10WriteFrameE(active);
  };
  let _err;
  _L: {
    const _bind$6 = [];
    const aliases = _M0MPB3Map3MapGssE(new _M0TPB9ArrayViewGUssEE(_bind$6, 0, 0), undefined);
    const _bind$7 = parsed.includes;
    const _bind$8 = _bind$7.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind$8) {
        const include_path = _bind$7[_];
        _L$2: {
          const target = new _M0TPB8MutLocalGsE(_M0FP216zhaojun_2dcoding6thrift9idl__join(name, include_path));
          const import_name = _M0FP216zhaojun_2dcoding6thrift9idl__stem(include_path);
          if (!_M0MPB3Map8containsGssE(sources, target.val)) {
            const _bind$9 = include_paths.length;
            let _tmp$2 = 0;
            while (true) {
              const _$2 = _tmp$2;
              if (_$2 < _bind$9) {
                const directory = include_paths[_$2];
                const candidate = _M0FP216zhaojun_2dcoding6thrift9idl__path(`${directory}/${include_path}`);
                if (_M0MPB3Map8containsGssE(sources, candidate)) {
                  target.val = candidate;
                  break;
                }
                _tmp$2 = _$2 + 1 | 0;
                continue;
              } else {
                break;
              }
            }
          }
          if (!_M0MPB3Map8containsGssE(sources, target.val)) {
            _M0MPC15array5Array4pushGRPB4JsonE(diagnostics, `missing include ${target.val} (ignored unless referenced)`);
            break _L$2;
          }
          if (_M0MPB3Map8containsGssE(aliases, import_name)) {
            _err = new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema(`duplicate include alias ${import_name}`);
            break _L;
          }
          _M0MPB3Map3setGssE(aliases, import_name, target.val);
          const _bind$9 = _M0FP216zhaojun_2dcoding6thrift18load__idl__modules(target.val, sources, modules, imports, active, diagnostics, include_paths);
          if (_bind$9.$tag === 1) {
            const _ok = _bind$9;
            _ok._0;
          } else {
            const _err$2 = _bind$9;
            _err = _err$2._0;
            break _L;
          }
          break _L$2;
        }
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0MPB3Map3setGsRP216zhaojun_2dcoding6thrift9IdlModuleE(modules, name, parsed);
    const _defer_result = _M0MPB3Map3setGsRPB3MapGssEE(imports, name, aliases);
    _defer();
    return new _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(_defer_result);
  }
  _defer();
  return new _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(_err);
}
function _M0MP216zhaojun_2dcoding6thrift6Schema13check__fields(self, owner, fields, exceptions) {
  const _bind$4 = fields.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$4) {
      const field = fields[_];
      const _bind$5 = _M0MP216zhaojun_2dcoding6thrift6Schema7resolve(self, owner, field.field_type, 0);
      let t;
      if (_bind$5.$tag === 1) {
        const _ok = _bind$5;
        t = _ok._0;
      } else {
        return _bind$5;
      }
      if (_M0IP216zhaojun_2dcoding6thrift7IdlTypePB2Eq5equal(t, new _M0DTP216zhaojun_2dcoding6thrift7IdlType4Base("void"))) {
        return new _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("void field"));
      }
      if (exceptions) {
        let valid;
        let name;
        _L: {
          _L$2: {
            if (t.$tag === 1) {
              const _Named = t;
              const _name = _Named._0;
              name = _name;
              break _L$2;
            } else {
              valid = false;
            }
            break _L;
          }
          const _bind$6 = _M0MPB3Map3getGsRP216zhaojun_2dcoding6thrift13IdlDefinitionE(self.definitions, name);
          if (_bind$6 === undefined) {
            valid = false;
          } else {
            const _Some = _bind$6;
            const _x = _Some;
            if (_x.$tag === 2) {
              const _Record = _x;
              const _x$2 = _Record._1;
              if (_x$2 === "exception") {
                valid = true;
              } else {
                valid = false;
              }
            } else {
              valid = false;
            }
          }
        }
        if (!valid) {
          return new _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("throws field must name an exception"));
        }
      }
      let value;
      _L: {
        _L$2: {
          const _bind$6 = field.default_value;
          if (_bind$6 === undefined) {
          } else {
            const _Some = _bind$6;
            const _value = _Some;
            value = _value;
            break _L$2;
          }
          break _L;
        }
        const _bind$6 = _M0MP216zhaojun_2dcoding6thrift6Schema11const__json(self, owner, t, value, [], 0, undefined);
        if (_bind$6.$tag === 1) {
          const _ok = _bind$6;
          _ok._0;
        } else {
          return _bind$6;
        }
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(undefined);
}
function _M0FP216zhaojun_2dcoding6thrift23compile__schema_2einner(root, sources, include_paths) {
  if (_M0MPB3Map6lengthGssE(sources) > 128) {
    return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift6SchemaRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("IDL source count limit"));
  }
  const _bind$4 = [];
  const normalized = _M0MPB3Map3MapGssE(new _M0TPB9ArrayViewGUssEE(_bind$4, 0, 0), undefined);
  const size = new _M0TPB8MutLocalGiE(0);
  const _it = _M0MPB3Map5iter2GssE(sources);
  while (true) {
    let path;
    let text;
    _L: {
      const _bind$5 = _M0MPB5Iter24nextGssE(_it);
      if (_bind$5 === undefined) {
        break;
      } else {
        const _Some = _bind$5;
        const _x = _Some;
        const _path = _x._0;
        const _text = _x._1;
        path = _path;
        text = _text;
        break _L;
      }
    }
    const path$2 = _M0FP216zhaojun_2dcoding6thrift9idl__path(path);
    if (_M0MPB3Map8containsGssE(normalized, path$2)) {
      return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift6SchemaRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("duplicate normalized IDL path"));
    }
    size.val = size.val + text.length | 0;
    if (size.val > 4000000) {
      return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift6SchemaRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("IDL aggregate source limit"));
    }
    _M0MPB3Map3setGssE(normalized, path$2, text);
    continue;
  }
  const root$2 = _M0FP216zhaojun_2dcoding6thrift9idl__path(root);
  const _bind$5 = [];
  const modules = _M0MPB3Map3MapGsRP216zhaojun_2dcoding6thrift9IdlModuleE(new _M0TPB9ArrayViewGUsRP216zhaojun_2dcoding6thrift9IdlModuleEE(_bind$5, 0, 0), undefined);
  const _bind$6 = [];
  const imports = _M0MPB3Map3MapGsRPB3MapGssEE(new _M0TPB9ArrayViewGUsRPB3MapGssEEE(_bind$6, 0, 0), undefined);
  const _bind$7 = [];
  const definitions = _M0MPB3Map3MapGsRP216zhaojun_2dcoding6thrift13IdlDefinitionE(new _M0TPB9ArrayViewGUsRP216zhaojun_2dcoding6thrift13IdlDefinitionEE(_bind$7, 0, 0), undefined);
  const diagnostics = [];
  const _bind$8 = _M0FP216zhaojun_2dcoding6thrift18load__idl__modules(root$2, normalized, modules, imports, [], diagnostics, include_paths);
  if (_bind$8.$tag === 1) {
    const _ok = _bind$8;
    _ok._0;
  } else {
    return _bind$8;
  }
  const _it$2 = _M0MPB3Map5iter2GssE(modules);
  while (true) {
    let owner;
    let module_;
    _L: {
      const _bind$9 = _M0MPB5Iter24nextGssE(_it$2);
      if (_bind$9 === undefined) {
        break;
      } else {
        const _Some = _bind$9;
        const _x = _Some;
        const _owner = _x._0;
        const _module_ = _x._1;
        owner = _owner;
        module_ = _module_;
        break _L;
      }
    }
    const _bind$9 = module_.definitions;
    const _bind$10 = _bind$9.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind$10) {
        const definition = _bind$9[_];
        _M0MPB3Map3setGsRP216zhaojun_2dcoding6thrift13IdlDefinitionE(definitions, `${owner}#${_M0FP216zhaojun_2dcoding6thrift16definition__name(definition)}`, definition);
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    continue;
  }
  if (_M0MPB3Map6lengthGssE(definitions) > 20000) {
    return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift6SchemaRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("IDL aggregate definition limit"));
  }
  const schema = new _M0TP216zhaojun_2dcoding6thrift6Schema(root$2, modules, imports, definitions, diagnostics);
  const _it$3 = _M0MPB3Map5iter2GssE(definitions);
  while (true) {
    let name;
    let definition;
    _L: {
      const _bind$9 = _M0MPB5Iter24nextGssE(_it$3);
      if (_bind$9 === undefined) {
        break;
      } else {
        const _Some = _bind$9;
        const _x = _Some;
        const _name = _x._0;
        const _definition = _x._1;
        name = _name;
        definition = _definition;
        break _L;
      }
    }
    const owner = _M0FP216zhaojun_2dcoding6thrift17definition__owner(name);
    let methods;
    let parent;
    _L$2: {
      _L$3: {
        let fields;
        let flavor;
        _L$4: {
          _L$5: {
            let t;
            let value;
            _L$6: {
              _L$7: {
                let target;
                _L$8: {
                  _L$9: {
                    switch (definition.$tag) {
                      case 0: {
                        const _Alias = definition;
                        const _target = _Alias._1;
                        target = _target;
                        break _L$9;
                      }
                      case 1: {
                        break;
                      }
                      case 3: {
                        const _Constant = definition;
                        const _t = _Constant._1;
                        const _value = _Constant._2;
                        t = _t;
                        value = _value;
                        break _L$7;
                      }
                      case 2: {
                        const _Record = definition;
                        const _flavor = _Record._1;
                        const _fields = _Record._2;
                        fields = _fields;
                        flavor = _flavor;
                        break _L$5;
                      }
                      default: {
                        const _Service = definition;
                        const _parent = _Service._1;
                        const _methods = _Service._2;
                        methods = _methods;
                        parent = _parent;
                        break _L$3;
                      }
                    }
                    break _L$8;
                  }
                  const _bind$9 = _M0MP216zhaojun_2dcoding6thrift6Schema7resolve(schema, owner, target, 0);
                  let t$2;
                  if (_bind$9.$tag === 1) {
                    const _ok = _bind$9;
                    t$2 = _ok._0;
                  } else {
                    return _bind$9;
                  }
                  if (_M0IP216zhaojun_2dcoding6thrift7IdlTypePB2Eq5equal(t$2, new _M0DTP216zhaojun_2dcoding6thrift7IdlType4Base("void"))) {
                    return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift6SchemaRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("void typedef"));
                  }
                }
                break _L$6;
              }
              const _bind$9 = _M0MP216zhaojun_2dcoding6thrift6Schema7resolve(schema, owner, t, 0);
              let t$2;
              if (_bind$9.$tag === 1) {
                const _ok = _bind$9;
                t$2 = _ok._0;
              } else {
                return _bind$9;
              }
              const _bind$10 = _M0MP216zhaojun_2dcoding6thrift6Schema11const__json(schema, owner, t$2, value, [], 0, undefined);
              if (_bind$10.$tag === 1) {
                const _ok = _bind$10;
                _ok._0;
              } else {
                return _bind$10;
              }
            }
            break _L$4;
          }
          if (flavor === "union" && _M0MPC15array5Array6filterGRP216zhaojun_2dcoding6thrift8IdlFieldE(fields, (f) => _M0IP016_24default__implPB2Eq10not__equalGORP216zhaojun_2dcoding6thrift8IdlConstE(f.default_value, undefined)).length > 1) {
            return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift6SchemaRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("union may have only one default field"));
          }
          const _bind$9 = _M0MP216zhaojun_2dcoding6thrift6Schema13check__fields(schema, owner, fields, false);
          if (_bind$9.$tag === 1) {
            const _ok = _bind$9;
            _ok._0;
          } else {
            return _bind$9;
          }
        }
        break _L$2;
      }
      let parent$2;
      _L$4: {
        _L$5: {
          if (parent === undefined) {
          } else {
            const _Some = parent;
            const _parent = _Some;
            parent$2 = _parent;
            break _L$5;
          }
          break _L$4;
        }
        let base;
        _L$6: {
          const _bind$9 = _M0MP216zhaojun_2dcoding6thrift6Schema4find(schema, owner, parent$2);
          let _bind$10;
          if (_bind$9.$tag === 1) {
            const _ok = _bind$9;
            _bind$10 = _ok._0;
          } else {
            return _bind$9;
          }
          const _base = _bind$10._1;
          base = _base;
          break _L$6;
        }
        let _tmp;
        if (base.$tag === 4) {
          _tmp = true;
        } else {
          _tmp = false;
        }
        if (!_tmp) {
          return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift6SchemaRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema("service parent is not a service"));
        }
      }
      const _bind$9 = methods.length;
      let _tmp = 0;
      while (true) {
        const _ = _tmp;
        if (_ < _bind$9) {
          const function_ = methods[_];
          const _bind$10 = _M0MP216zhaojun_2dcoding6thrift6Schema7resolve(schema, owner, function_.return_type, 0);
          if (_bind$10.$tag === 1) {
            const _ok = _bind$10;
            _ok._0;
          } else {
            return _bind$10;
          }
          const _bind$11 = _M0MP216zhaojun_2dcoding6thrift6Schema13check__fields(schema, owner, function_.arguments, false);
          if (_bind$11.$tag === 1) {
            const _ok = _bind$11;
            _ok._0;
          } else {
            return _bind$11;
          }
          const _bind$12 = _M0MP216zhaojun_2dcoding6thrift6Schema13check__fields(schema, owner, function_.exceptions, true);
          if (_bind$12.$tag === 1) {
            const _ok = _bind$12;
            _ok._0;
          } else {
            return _bind$12;
          }
          _tmp = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      const _bind$10 = _M0MP216zhaojun_2dcoding6thrift6Schema16service__methods(schema, owner, name, []);
      if (_bind$10.$tag === 1) {
        const _ok = _bind$10;
        _ok._0;
      } else {
        return _bind$10;
      }
    }
    continue;
  }
  return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift6SchemaRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(schema);
}
function _M0MP216zhaojun_2dcoding6thrift6Schema11get__method(self, service, name) {
  const _bind$4 = _M0MP216zhaojun_2dcoding6thrift6Schema16service__methods(self, self.root, service, []);
  let _bind$5;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _bind$5 = _ok._0;
  } else {
    return _bind$4;
  }
  const _bind$6 = _bind$5.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$6) {
      const pair = _bind$5[_];
      if (pair._1.name === name) {
        return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift9IdlMethodRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(pair._1);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift9IdlMethodRP216zhaojun_2dcoding6thrift11SchemaErrorE3Err(new _M0DTPC15error5Error55zhaojun_2dcoding_2fthrift_2eSchemaError_2eInvalidSchema(`unknown service method ${name}`));
}
function _M0MP216zhaojun_2dcoding6thrift6Schema18service__functions(self, service) {
  const _bind$4 = _M0MP216zhaojun_2dcoding6thrift6Schema16service__methods(self, self.root, service, []);
  let _tmp;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _tmp = _ok._0;
  } else {
    return _bind$4;
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGRP216zhaojun_2dcoding6thrift9IdlMethodERP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(_M0MPC15array5Array3mapGUsRP216zhaojun_2dcoding6thrift9IdlMethodERP216zhaojun_2dcoding6thrift9IdlMethodE(_tmp, (pair) => pair._1));
}
function _M0MP216zhaojun_2dcoding6thrift6Schema8warnings(self) {
  return _M0MPC15array5Array4copyGsE(self.diagnostics);
}
function _M0FP216zhaojun_2dcoding6thrift23decode__message_2einner(data, protocol, strict_read) {
  if (data.length > 1048576) {
    return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift7MessageRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("RPC message exceeds one MiB"));
  }
  const compact = _M0IP216zhaojun_2dcoding6thrift8ProtocolPB2Eq5equal(protocol, 1);
  const reader = new _M0TP216zhaojun_2dcoding6thrift6Reader(data, 0, 0, compact);
  let message_type;
  let sequence_id;
  let name_data;
  _L: {
    if (compact) {
      const _bind$4 = _M0MP216zhaojun_2dcoding6thrift6Reader4byte(reader);
      let _tmp;
      if (_bind$4.$tag === 1) {
        const _ok = _bind$4;
        _tmp = _ok._0;
      } else {
        return _bind$4;
      }
      if (_tmp !== 130) {
        return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift7MessageRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("invalid Compact protocol id"));
      }
      const _bind$5 = _M0MP216zhaojun_2dcoding6thrift6Reader4byte(reader);
      let version_type;
      if (_bind$5.$tag === 1) {
        const _ok = _bind$5;
        version_type = _ok._0;
      } else {
        return _bind$5;
      }
      if ((version_type & 31) !== 1) {
        return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift7MessageRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("unsupported Compact version"));
      }
      const message_type$2 = version_type >> 5;
      const _bind$6 = _M0MP216zhaojun_2dcoding6thrift6Reader6varint(reader);
      let seq;
      if (_bind$6.$tag === 1) {
        const _ok = _bind$6;
        seq = _ok._0;
      } else {
        return _bind$6;
      }
      if (BigInt.asUintN(64, seq) > BigInt.asUintN(64, 4294967295n)) {
        return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift7MessageRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("sequence id overflow"));
      }
      const sequence_id$2 = Number(BigInt.asUintN(32, seq)) | 0;
      let name_data$2;
      const _bind$7 = _M0MP216zhaojun_2dcoding6thrift6Reader5value(reader, 6, 0);
      let _bind$8;
      if (_bind$7.$tag === 1) {
        const _ok = _bind$7;
        _bind$8 = _ok._0;
      } else {
        return _bind$7;
      }
      if (_bind$8.$tag === 6) {
        const _Binary = _bind$8;
        const _bytes = _Binary._0;
        name_data$2 = _bytes;
      } else {
        return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift7MessageRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("invalid method name"));
      }
      message_type = message_type$2;
      sequence_id = sequence_id$2;
      name_data = name_data$2;
      break _L;
    } else {
      const _bind$4 = _M0MP216zhaojun_2dcoding6thrift6Reader5fixed(reader, 4, false);
      let version_type;
      if (_bind$4.$tag === 1) {
        const _ok = _bind$4;
        version_type = _ok._0;
      } else {
        return _bind$4;
      }
      if (BigInt.asUintN(64, BigInt.asUintN(64, version_type & 2147483648n)) !== BigInt.asUintN(64, 0n)) {
        if (BigInt.asUintN(64, BigInt.asUintN(64, version_type & 4294901760n)) !== BigInt.asUintN(64, 2147549184n)) {
          return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift7MessageRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("unsupported Binary version"));
        }
        const message_type$2 = Number(BigInt.asIntN(32, BigInt.asUintN(64, version_type & 255n))) | 0;
        let name_data$2;
        const _bind$5 = _M0MP216zhaojun_2dcoding6thrift6Reader5value(reader, 6, 0);
        let _bind$6;
        if (_bind$5.$tag === 1) {
          const _ok = _bind$5;
          _bind$6 = _ok._0;
        } else {
          return _bind$5;
        }
        if (_bind$6.$tag === 6) {
          const _Binary = _bind$6;
          const _bytes = _Binary._0;
          name_data$2 = _bytes;
        } else {
          return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift7MessageRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("invalid method name"));
        }
        const _bind$7 = _M0MP216zhaojun_2dcoding6thrift6Reader5fixed(reader, 4, false);
        let _tmp;
        if (_bind$7.$tag === 1) {
          const _ok = _bind$7;
          _tmp = _ok._0;
        } else {
          return _bind$7;
        }
        const sequence_id$2 = Number(BigInt.asUintN(32, _tmp)) | 0;
        message_type = message_type$2;
        sequence_id = sequence_id$2;
        name_data = name_data$2;
        break _L;
      } else {
        if (strict_read) {
          return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift7MessageRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("expected strict Binary v1 header"));
        }
        if (BigInt.asUintN(64, version_type) > BigInt.asUintN(64, 1024n) || BigInt.asUintN(64, version_type) > BigInt.asUintN(64, _M0MPC13int3Int10to__uint64(data.length - reader.pos | 0))) {
          return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift7MessageRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("invalid legacy method length"));
        }
        const end = reader.pos + (Number(BigInt.asIntN(32, version_type)) | 0) | 0;
        const name_data$2 = _M0MPC15bytes9BytesView9to__owned(_M0MPC15bytes5Bytes12view_2einner(data, reader.pos, end));
        reader.pos = end;
        const _bind$5 = _M0MP216zhaojun_2dcoding6thrift6Reader4byte(reader);
        let message_type$2;
        if (_bind$5.$tag === 1) {
          const _ok = _bind$5;
          message_type$2 = _ok._0;
        } else {
          return _bind$5;
        }
        const _bind$6 = _M0MP216zhaojun_2dcoding6thrift6Reader5fixed(reader, 4, false);
        let _tmp;
        if (_bind$6.$tag === 1) {
          const _ok = _bind$6;
          _tmp = _ok._0;
        } else {
          return _bind$6;
        }
        const sequence_id$2 = Number(BigInt.asUintN(32, _tmp)) | 0;
        message_type = message_type$2;
        sequence_id = sequence_id$2;
        name_data = name_data$2;
        break _L;
      }
    }
  }
  if (message_type < 1 || message_type > 4) {
    return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift7MessageRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("invalid RPC message type"));
  }
  if (name_data.length > 1024) {
    return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift7MessageRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("RPC method name exceeds 1024 bytes"));
  }
  let name;
  let _try_err;
  _L$2: {
    _L$3: {
      const _bind$4 = _M0FPC28encoding4utf814decode_2einner(new _M0TPC15bytes9BytesView(name_data, 0, name_data.length), false);
      if (_bind$4.$tag === 1) {
        const _ok = _bind$4;
        name = _ok._0;
      } else {
        const _err = _bind$4;
        _try_err = _err._0;
        break _L$3;
      }
      break _L$2;
    }
    return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift7MessageRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("invalid UTF-8 method name"));
  }
  const _bind$4 = _M0MP216zhaojun_2dcoding6thrift6Reader5value(reader, 7, 0);
  let body;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    body = _ok._0;
  } else {
    return _bind$4;
  }
  if (reader.pos !== data.length) {
    return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift7MessageRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("trailing RPC bytes"));
  }
  return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift7MessageRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(new _M0TP216zhaojun_2dcoding6thrift7Message(name, message_type, sequence_id, body));
}
function _M0MP216zhaojun_2dcoding6thrift6Client11new_2einner(protocol, strict_read, strict_write) {
  const _bind$4 = _M0MP216zhaojun_2dcoding6thrift12FrameDecoder11new_2einner(1048576);
  let _tmp;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _tmp = _ok._0;
  } else {
    return _bind$4;
  }
  const _tmp$2 = _tmp;
  const _bind$5 = [];
  return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift6ClientRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(new _M0TP216zhaojun_2dcoding6thrift6Client(protocol, strict_read, strict_write, _tmp$2, _M0MPB3Map3MapGisE(new _M0TPB9ArrayViewGUisEE(_bind$5, 0, 0), undefined), 0, false));
}
function _M0MP216zhaojun_2dcoding6thrift6Client22call__with__id_2einner(self, name, body, oneway, response_name) {
  if (self.failed) {
    return new _M0DTPC16result6ResultGUizERP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("RPC client requires reconnect"));
  }
  if (_M0MPB3Map6lengthGisE(self.pending) >= 1024) {
    return new _M0DTPC16result6ResultGUizERP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("too many pending RPC calls"));
  }
  const seq = new _M0TPB8MutLocalGiE(self.next_sequence);
  while (true) {
    if (_M0MPB3Map8containsGisE(self.pending, seq.val)) {
      self.next_sequence = (self.next_sequence >>> 0) + (1 >>> 0) | 0;
      seq.val = self.next_sequence;
      continue;
    } else {
      break;
    }
  }
  const _bind$4 = oneway ? 4 : 1;
  const _bind$5 = seq.val;
  const _bind$6 = _M0FP216zhaojun_2dcoding6thrift31encode__framed__message_2einner(new _M0TP216zhaojun_2dcoding6thrift7Message(name, _bind$4, _bind$5, body), self.protocol, self.strict_write);
  let wire;
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    wire = _ok._0;
  } else {
    return _bind$6;
  }
  self.next_sequence = (self.next_sequence >>> 0) + (1 >>> 0) | 0;
  if (!oneway) {
    _M0MPB3Map3setGisE(self.pending, seq.val, _M0MPC16option6Option10unwrap__orGsE(response_name, name));
  }
  return new _M0DTPC16result6ResultGUizERP216zhaojun_2dcoding6thrift10CodecErrorE2Ok({ _0: seq.val, _1: wire });
}
function _M0MP216zhaojun_2dcoding6thrift6Client4feed(self, chunk) {
  if (self.failed) {
    return new _M0DTPC16result6ResultGRPB5ArrayGRP216zhaojun_2dcoding6thrift7MessageERP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("RPC client requires reconnect"));
  }
  let _err;
  _L: {
    const out = [];
    const _bind$4 = _M0MP216zhaojun_2dcoding6thrift12FrameDecoder4feed(self.decoder, chunk);
    let _bind$5;
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      _bind$5 = _ok._0;
    } else {
      const _err$2 = _bind$4;
      _err = _err$2._0;
      break _L;
    }
    const _bind$6 = _bind$5.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind$6) {
        const payload = _bind$5[_];
        const _bind$7 = _M0FP216zhaojun_2dcoding6thrift23decode__message_2einner(payload, self.protocol, self.strict_read);
        let response;
        if (_bind$7.$tag === 1) {
          const _ok = _bind$7;
          response = _ok._0;
        } else {
          const _err$2 = _bind$7;
          _err = _err$2._0;
          break _L;
        }
        if (response.message_type !== 2 && response.message_type !== 3) {
          _err = new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("expected reply or application exception");
          break _L;
        }
        let name;
        _L$2: {
          const _bind$8 = _M0MPB3Map3getGisE(self.pending, response.sequence_id);
          if (_bind$8 === undefined) {
            _err = new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("unknown or repeated RPC sequence id");
            break _L;
          } else {
            const _Some = _bind$8;
            const _name = _Some;
            name = _name;
            break _L$2;
          }
        }
        if (_M0IP016_24default__implPB2Eq10not__equalGsE(name, response.name)) {
          _err = new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("RPC method mismatch");
          break _L;
        }
        _M0MPB3Map6removeGisE(self.pending, response.sequence_id);
        _M0MPC15array5Array4pushGRPB4JsonE(out, response);
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return new _M0DTPC16result6ResultGRPB5ArrayGRP216zhaojun_2dcoding6thrift7MessageERP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(out);
  }
  self.failed = true;
  return new _M0DTPC16result6ResultGRPB5ArrayGRP216zhaojun_2dcoding6thrift7MessageERP216zhaojun_2dcoding6thrift10CodecErrorE3Err(_err);
}
function _M0MP216zhaojun_2dcoding6thrift6Client6finish(self) {
  if (self.failed) {
    return new _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("RPC client requires reconnect"));
  }
  let _err;
  _L: {
    const _bind$4 = _M0MP216zhaojun_2dcoding6thrift12FrameDecoder6finish(self.decoder);
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      _ok._0;
    } else {
      const _err$2 = _bind$4;
      _err = _err$2._0;
      break _L;
    }
    if (!_M0MPB3Map9is__emptyGisE(self.pending)) {
      _err = new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("connection closed with outstanding RPC calls");
      break _L;
    } else {
      return new _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(undefined);
    }
  }
  self.failed = true;
  return new _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(_err);
}
function _M0FP416zhaojun_2dcoding6thrift3cmd3web11wire__unhex(text) {
  let _tmp;
  if (text.length > 4194312) {
    _tmp = true;
  } else {
    if (2 === 0) {
      $panic();
    }
    _tmp = (text.length % 2 | 0) !== 0;
  }
  if (_tmp) {
    return new _M0DTPC16result6ResultGzRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure("wire hex length limit"));
  }
  const cs = _M0MPC16string6String9to__array(text);
  const bytes = [];
  const high = new _M0TPB8MutLocalGiE(0);
  const _bind$4 = cs.length;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$4) {
      const c = cs[i];
      if (!_M0MPC14char4Char19is__ascii__hexdigit(c)) {
        return new _M0DTPC16result6ResultGzRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure("invalid wire hex"));
      }
      const n = c <= 57 ? c - 48 | 0 : _M0MPC14char4Char20to__ascii__lowercase(c) - 87 | 0;
      if (2 === 0) {
        $panic();
      }
      if ((i % 2 | 0) === 0) {
        high.val = n << 4;
      } else {
        _M0MPC15array5Array4pushGyE(bytes, (high.val + n | 0) & 255);
      }
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGzRPC15error5ErrorE2Ok(_M0MPC15bytes5Bytes11from__array(new _M0TPB9ArrayViewGyE(bytes, 0, bytes.length)));
}
function _M0FP416zhaojun_2dcoding6thrift3cmd3web3hex(data) {
  const alphabet = "0123456789abcdef";
  const out = [];
  const _bind$4 = data.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$4) {
      const b = data[_];
      const n = b;
      if (16 === 0) {
        $panic();
      }
      const _tmp$2 = n / 16 | 0;
      if (16 === 0) {
        $panic();
      }
      const _tmp$3 = _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(alphabet, _tmp$2, (n / 16 | 0) + 1 | 0));
      if (16 === 0) {
        $panic();
      }
      const _tmp$4 = n % 16 | 0;
      if (16 === 0) {
        $panic();
      }
      _M0MPC15array5Array4pushGRPB4JsonE(out, `${_tmp$3}${_M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(alphabet, _tmp$4, (n % 16 | 0) + 1 | 0))}`);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$5 = "";
  return _M0MPC15array5Array4joinGsE(out, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length));
}
function _M0MP416zhaojun_2dcoding6thrift3cmd3web12BridgeServer9exception(self, name, sequence, code, message) {
  const _bind$4 = _M0FP216zhaojun_2dcoding6thrift31encode__framed__message_2einner(_M0FP216zhaojun_2dcoding6thrift22application__exception(name, sequence, code, message), self.protocol, !self.legacy);
  let _tmp;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _tmp = _ok._0;
  } else {
    return _bind$4;
  }
  return new _M0DTPC16result6ResultGsRPC15error5ErrorE2Ok(_M0FP416zhaojun_2dcoding6thrift3cmd3web3hex(_tmp));
}
function _M0FP416zhaojun_2dcoding6thrift3cmd3web13outcome__json(outcome) {
  let code;
  let message;
  _L: {
    let name;
    let value;
    _L$2: {
      let value$2;
      _L$3: {
        switch (outcome.$tag) {
          case 0: {
            const _Success = outcome;
            const _value = _Success._0;
            value$2 = _value;
            break _L$3;
          }
          case 1: {
            const _DeclaredException = outcome;
            const _name = _DeclaredException._0;
            const _value$2 = _DeclaredException._1;
            name = _name;
            value = _value$2;
            break _L$2;
          }
          default: {
            const _ApplicationFailure = outcome;
            const _code = _ApplicationFailure._0;
            const _message = _ApplicationFailure._1;
            code = _code;
            message = _message;
            break _L;
          }
        }
      }
      const _bind$4 = [{ _0: "kind", _1: _M0MPC14json4Json6string("success") }, { _0: "value", _1: value$2 }];
      return _M0MPC14json4Json6object(_M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$4, 0, 2), undefined));
    }
    const _bind$4 = [{ _0: "kind", _1: _M0MPC14json4Json6string("declared") }, { _0: "name", _1: _M0IPC16string6StringPB6ToJson8to__json(name) }, { _0: "value", _1: value }];
    return _M0MPC14json4Json6object(_M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$4, 0, 3), undefined));
  }
  const _bind$4 = [{ _0: "kind", _1: _M0MPC14json4Json6string("application") }, { _0: "code", _1: _M0IPC13int3IntPB6ToJson8to__json(code) }, { _0: "message", _1: _M0IPC16string6StringPB6ToJson8to__json(message) }];
  return _M0MPC14json4Json6object(_M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$4, 0, 3), undefined));
}
function _M0FP416zhaojun_2dcoding6thrift3cmd3web14request__value(input, key) {
  let fields;
  _L: {
    if (input.$tag === 6) {
      const _Object = input;
      const _fields = _Object._0;
      fields = _fields;
      break _L;
    } else {
      return _M0MPC14json4Json4null();
    }
  }
  return _M0MPC16option6Option10unwrap__orGsE(_M0MPB3Map3getGsRPB4JsonE(fields, key), _M0MPC14json4Json4null());
}
function _M0FP416zhaojun_2dcoding6thrift3cmd3web20request__int_2einner(input, key, default_) {
  let n;
  _L: {
    const _bind$4 = _M0FP416zhaojun_2dcoding6thrift3cmd3web14request__value(input, key);
    if (_bind$4.$tag === 3) {
      const _Number = _bind$4;
      const _n = _Number._0;
      n = _n;
      break _L;
    } else {
      return default_;
    }
  }
  return _M0MPC16double6Double7to__int(n);
}
function _M0FP416zhaojun_2dcoding6thrift3cmd3web12request__map(input, key) {
  const _bind$4 = [];
  const out = _M0MPB3Map3MapGssE(new _M0TPB9ArrayViewGUssEE(_bind$4, 0, 0), undefined);
  let values;
  _L: {
    _L$2: {
      const _bind$5 = _M0FP416zhaojun_2dcoding6thrift3cmd3web14request__value(input, key);
      if (_bind$5.$tag === 6) {
        const _Object = _bind$5;
        const _values = _Object._0;
        values = _values;
        break _L$2;
      }
      break _L;
    }
    const _it = _M0MPB3Map5iter2GssE(values);
    while (true) {
      let name;
      let value;
      _L$3: {
        const _bind$5 = _M0MPB5Iter24nextGssE(_it);
        if (_bind$5 === undefined) {
          break;
        } else {
          const _Some = _bind$5;
          const _x = _Some;
          const _name = _x._0;
          const _value = _x._1;
          name = _name;
          value = _value;
          break _L$3;
        }
      }
      let s;
      _L$4: {
        _L$5: {
          if (value.$tag === 4) {
            const _String = value;
            const _s = _String._0;
            s = _s;
            break _L$5;
          }
          break _L$4;
        }
        _M0MPB3Map3setGssE(out, name, s);
      }
      continue;
    }
  }
  return out;
}
function _M0FP416zhaojun_2dcoding6thrift3cmd3web21request__text_2einner(input, key, default_) {
  let fields;
  _L: {
    if (input.$tag === 6) {
      const _Object = input;
      const _fields = _Object._0;
      fields = _fields;
      break _L;
    } else {
      return default_;
    }
  }
  _L$2: {
    const _bind$4 = _M0MPB3Map3getGsRPB4JsonE(fields, key);
    if (_bind$4 === undefined) {
      break _L$2;
    } else {
      const _Some = _bind$4;
      const _x = _Some;
      if (_x.$tag === 4) {
        const _String = _x;
        const _s = _String._0;
        return _s;
      } else {
        break _L$2;
      }
    }
  }
  return default_;
}
function _M0FP416zhaojun_2dcoding6thrift3cmd3web16request__outcome(input) {
  const result = _M0FP416zhaojun_2dcoding6thrift3cmd3web14request__value(input, "outcome");
  const _bind$4 = _M0FP416zhaojun_2dcoding6thrift3cmd3web21request__text_2einner(result, "kind", "");
  switch (_bind$4) {
    case "declared": {
      return new _M0DTP216zhaojun_2dcoding6thrift10RpcOutcome17DeclaredException(_M0FP416zhaojun_2dcoding6thrift3cmd3web21request__text_2einner(result, "name", ""), _M0FP416zhaojun_2dcoding6thrift3cmd3web14request__value(result, "value"));
    }
    case "application": {
      return new _M0DTP216zhaojun_2dcoding6thrift10RpcOutcome18ApplicationFailure(_M0FP416zhaojun_2dcoding6thrift3cmd3web20request__int_2einner(result, "code", 0), _M0FP416zhaojun_2dcoding6thrift3cmd3web21request__text_2einner(result, "message", ""));
    }
    default: {
      return new _M0DTP216zhaojun_2dcoding6thrift10RpcOutcome7Success(_M0FP416zhaojun_2dcoding6thrift3cmd3web14request__value(result, "value"));
    }
  }
}
function _M0FP416zhaojun_2dcoding6thrift3cmd3web17request__protocol(input) {
  return _M0FP416zhaojun_2dcoding6thrift3cmd3web21request__text_2einner(input, "protocol", "binary") === "compact" ? 1 : 0;
}
function _M0FP416zhaojun_2dcoding6thrift3cmd3web15transport__json(input) {
  const failed_client = new _M0TPB8MutLocalGiE(-1);
  const failed_server = new _M0TPB8MutLocalGiE(-1);
  let _try_err;
  _L: {
    if (input.length > 5000000) {
      _try_err = new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure("transport bridge request limit");
      break _L;
    }
    const _bind$4 = _M0FPC14json13parse_2einner(new _M0TPC16string10StringView(input, 0, input.length), 1024);
    let request;
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      request = _ok._0;
    } else {
      const _err = _bind$4;
      _try_err = _err._0;
      break _L;
    }
    const action = _M0FP416zhaojun_2dcoding6thrift3cmd3web21request__text_2einner(request, "action", "");
    const id = _M0FP416zhaojun_2dcoding6thrift3cmd3web20request__int_2einner(request, "transport", 0);
    if (action === "clientClose") {
      _M0MPB3Map6removeGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeClientE(_M0FP416zhaojun_2dcoding6thrift3cmd3web12rpc__clients, id);
      return "{\"ok\":true}";
    }
    if (action === "serverClose") {
      _M0MPB3Map6removeGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeServerE(_M0FP416zhaojun_2dcoding6thrift3cmd3web12rpc__servers, id);
      return "{\"ok\":true}";
    }
    if (action === "clientOpen" || action === "serverOpen") {
      if ((_M0MPB3Map6lengthGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeClientE(_M0FP416zhaojun_2dcoding6thrift3cmd3web12rpc__clients) + _M0MPB3Map6lengthGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeServerE(_M0FP416zhaojun_2dcoding6thrift3cmd3web12rpc__servers) | 0) >= 256) {
        _try_err = new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure("transport session limit");
        break _L;
      }
      let schema;
      const _bind$5 = _M0MPB3Map3getGiRP216zhaojun_2dcoding6thrift6SchemaE(_M0FP416zhaojun_2dcoding6thrift3cmd3web7schemas, _M0FP416zhaojun_2dcoding6thrift3cmd3web20request__int_2einner(request, "schema", 0));
      if (_bind$5 === undefined) {
        _try_err = new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure("unknown schema");
        break _L;
      } else {
        const _Some = _bind$5;
        const _s = _Some;
        schema = _s;
      }
      const protocol = _M0FP416zhaojun_2dcoding6thrift3cmd3web17request__protocol(request);
      const legacy = _M0FP416zhaojun_2dcoding6thrift3cmd3web21request__text_2einner(request, "protocol", "") === "legacy";
      const service = _M0FP416zhaojun_2dcoding6thrift3cmd3web21request__text_2einner(request, "service", "");
      _M0FP416zhaojun_2dcoding6thrift3cmd3web15transport__next.val = _M0FP416zhaojun_2dcoding6thrift3cmd3web15transport__next.val + 1 | 0;
      const id$2 = _M0FP416zhaojun_2dcoding6thrift3cmd3web15transport__next.val;
      if (action === "clientOpen") {
        const _bind$6 = _M0MP216zhaojun_2dcoding6thrift6Schema18service__functions(schema, service);
        if (_bind$6.$tag === 1) {
          const _ok = _bind$6;
          _ok._0;
        } else {
          const _err = _bind$6;
          _try_err = _err._0;
          break _L;
        }
        const multiplex = _M0FP416zhaojun_2dcoding6thrift3cmd3web21request__text_2einner(request, "multiplex", "");
        const _bind$7 = ":";
        if (_M0MPC16string6String8contains(multiplex, new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length))) {
          _try_err = new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure("multiplex name cannot contain colon");
          break _L;
        }
        const _bind$8 = _M0MP216zhaojun_2dcoding6thrift6Client11new_2einner(protocol, !legacy, !legacy);
        let _tmp;
        if (_bind$8.$tag === 1) {
          const _ok = _bind$8;
          _tmp = _ok._0;
        } else {
          const _err = _bind$8;
          _try_err = _err._0;
          break _L;
        }
        _M0MPB3Map3setGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeClientE(_M0FP416zhaojun_2dcoding6thrift3cmd3web12rpc__clients, id$2, new _M0TP416zhaojun_2dcoding6thrift3cmd3web12BridgeClient(schema, service, multiplex, _tmp));
      } else {
        const services = _M0FP416zhaojun_2dcoding6thrift3cmd3web12request__map(request, "services");
        if (!_M0MPC16string6String9is__empty(service)) {
          const _bind$6 = _M0MP216zhaojun_2dcoding6thrift6Schema18service__functions(schema, service);
          if (_bind$6.$tag === 1) {
            const _ok = _bind$6;
            _ok._0;
          } else {
            const _err = _bind$6;
            _try_err = _err._0;
            break _L;
          }
        }
        const _it = _M0MPB3Map5iter2GssE(services);
        while (true) {
          let name;
          let value;
          _L$2: {
            const _bind$6 = _M0MPB5Iter24nextGssE(_it);
            if (_bind$6 === undefined) {
              break;
            } else {
              const _Some = _bind$6;
              const _x = _Some;
              const _name = _x._0;
              const _value = _x._1;
              name = _name;
              value = _value;
              break _L$2;
            }
          }
          let _tmp;
          if (_M0MPC16string6String9is__empty(name)) {
            _tmp = true;
          } else {
            const _bind$6 = ":";
            _tmp = _M0MPC16string6String8contains(name, new _M0TPC16string10StringView(_bind$6, 0, _bind$6.length));
          }
          if (_tmp) {
            _try_err = new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure("invalid multiplex service name");
            break _L;
          }
          const _bind$6 = _M0MP216zhaojun_2dcoding6thrift6Schema18service__functions(schema, value);
          if (_bind$6.$tag === 1) {
            const _ok = _bind$6;
            _ok._0;
          } else {
            const _err = _bind$6;
            _try_err = _err._0;
            break _L;
          }
          continue;
        }
        if (_M0MPC16string6String9is__empty(service) && _M0MPB3Map9is__emptyGssE(services)) {
          _try_err = new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure("server requires a service");
          break _L;
        }
        const _bind$6 = _M0MP216zhaojun_2dcoding6thrift12FrameDecoder11new_2einner(1048576);
        let _tmp;
        if (_bind$6.$tag === 1) {
          const _ok = _bind$6;
          _tmp = _ok._0;
        } else {
          const _err = _bind$6;
          _try_err = _err._0;
          break _L;
        }
        _M0MPB3Map3setGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeServerE(_M0FP416zhaojun_2dcoding6thrift3cmd3web12rpc__servers, id$2, new _M0TP416zhaojun_2dcoding6thrift3cmd3web12BridgeServer(schema, services, service, protocol, legacy, _tmp));
      }
      const _bind$6 = [{ _0: "ok", _1: _M0MPC14json4Json7boolean(true) }, { _0: "transport", _1: _M0IPC13int3IntPB6ToJson8to__json(id$2) }];
      return _M0MPC14json4Json17stringify_2einner(_M0MPC14json4Json6object(_M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$6, 0, 2), undefined)), false, 0, undefined);
    }
    const _bind$5 = "client";
    if (_M0MPC16string6String11has__prefix(action, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length))) {
      let entry;
      const _bind$6 = _M0MPB3Map3getGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeClientE(_M0FP416zhaojun_2dcoding6thrift3cmd3web12rpc__clients, id);
      if (_bind$6 === undefined) {
        _try_err = new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure("unknown client transport");
        break _L;
      } else {
        const _Some = _bind$6;
        const _e = _Some;
        entry = _e;
      }
      let result;
      switch (action) {
        case "clientCall": {
          const name = _M0FP416zhaojun_2dcoding6thrift3cmd3web21request__text_2einner(request, "name", "");
          const _bind$7 = _M0MP216zhaojun_2dcoding6thrift6Schema10make__call(entry.schema, entry.service, name, _M0FP416zhaojun_2dcoding6thrift3cmd3web14request__value(request, "arguments"), 0);
          let message;
          if (_bind$7.$tag === 1) {
            const _ok = _bind$7;
            message = _ok._0;
          } else {
            const _err = _bind$7;
            _try_err = _err._0;
            break _L;
          }
          const wire_name = `${_M0MPC16string6String9is__empty(entry.multiplex) ? "" : `${entry.multiplex}:`}${name}`;
          const oneway = message.message_type === 4;
          let sequence;
          let wire;
          _L$2: {
            const _bind$8 = _M0MP216zhaojun_2dcoding6thrift6Client22call__with__id_2einner(entry.client, wire_name, message.body, oneway, name);
            let _bind$9;
            if (_bind$8.$tag === 1) {
              const _ok = _bind$8;
              _bind$9 = _ok._0;
            } else {
              const _err = _bind$8;
              _try_err = _err._0;
              break _L;
            }
            const _sequence = _bind$9._0;
            const _wire = _bind$9._1;
            sequence = _sequence;
            wire = _wire;
            break _L$2;
          }
          const _bind$8 = [{ _0: "sequence", _1: _M0IPC13int3IntPB6ToJson8to__json(sequence) }, { _0: "hex", _1: _M0IPC16string6StringPB6ToJson8to__json(_M0FP416zhaojun_2dcoding6thrift3cmd3web3hex(wire)) }, { _0: "oneway", _1: _M0IPC14bool4BoolPB6ToJson8to__json(oneway) }];
          result = _M0MPC14json4Json6object(_M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$8, 0, 3), undefined));
          break;
        }
        case "clientFeed": {
          failed_client.val = id;
          const _tmp = entry.client;
          const _bind$9 = _M0FP416zhaojun_2dcoding6thrift3cmd3web11wire__unhex(_M0FP416zhaojun_2dcoding6thrift3cmd3web21request__text_2einner(request, "hex", ""));
          let _tmp$2;
          if (_bind$9.$tag === 1) {
            const _ok = _bind$9;
            _tmp$2 = _ok._0;
          } else {
            const _err = _bind$9;
            _try_err = _err._0;
            break _L;
          }
          const _bind$10 = _M0MP216zhaojun_2dcoding6thrift6Client4feed(_tmp, _tmp$2);
          let _tmp$3;
          if (_bind$10.$tag === 1) {
            const _ok = _bind$10;
            _tmp$3 = _ok._0;
          } else {
            const _err = _bind$10;
            _try_err = _err._0;
            break _L;
          }
          const _bind$11 = _M0MPC15array5Array3mapGRP216zhaojun_2dcoding6thrift7MessageRPB4JsonEHRP216zhaojun_2dcoding6thrift11SchemaError(_tmp$3, (message$2) => {
            const _tmp$4 = { _0: "sequence", _1: _M0IPC13int3IntPB6ToJson8to__json(message$2.sequence_id) };
            const _tmp$5 = { _0: "name", _1: _M0IPC16string6StringPB6ToJson8to__json(message$2.name) };
            const _bind$12 = _M0MP216zhaojun_2dcoding6thrift6Schema11read__reply(entry.schema, entry.service, message$2.name, message$2);
            let _tmp$6;
            if (_bind$12.$tag === 1) {
              const _ok = _bind$12;
              _tmp$6 = _ok._0;
            } else {
              return _bind$12;
            }
            const _bind$13 = [_tmp$4, _tmp$5, { _0: "outcome", _1: _M0FP416zhaojun_2dcoding6thrift3cmd3web13outcome__json(_tmp$6) }];
            return new _M0DTPC16result6ResultGRPB4JsonRP216zhaojun_2dcoding6thrift11SchemaErrorE2Ok(_M0MPC14json4Json6object(_M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$13, 0, 3), undefined)));
          });
          let _tmp$4;
          if (_bind$11.$tag === 1) {
            const _ok = _bind$11;
            _tmp$4 = _ok._0;
          } else {
            const _err = _bind$11;
            _try_err = _err._0;
            break _L;
          }
          result = _M0MPC14json4Json5array(_tmp$4);
          break;
        }
        case "clientFinish": {
          failed_client.val = id;
          const _bind$12 = _M0MP216zhaojun_2dcoding6thrift6Client6finish(entry.client);
          if (_bind$12.$tag === 1) {
            const _ok = _bind$12;
            _ok._0;
          } else {
            const _err = _bind$12;
            _try_err = _err._0;
            break _L;
          }
          result = _M0MPC14json4Json4null();
          break;
        }
        default: {
          _try_err = new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure("unknown client action");
          break _L;
        }
      }
      const _bind$13 = [{ _0: "ok", _1: _M0MPC14json4Json7boolean(true) }, { _0: "result", _1: result }];
      return _M0MPC14json4Json17stringify_2einner(_M0MPC14json4Json6object(_M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$13, 0, 2), undefined)), false, 0, undefined);
    }
    let entry;
    const _bind$6 = _M0MPB3Map3getGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeServerE(_M0FP416zhaojun_2dcoding6thrift3cmd3web12rpc__servers, id);
    if (_bind$6 === undefined) {
      _try_err = new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure("unknown server transport");
      break _L;
    } else {
      const _Some = _bind$6;
      const _e = _Some;
      entry = _e;
    }
    let result;
    switch (action) {
      case "serverFeed": {
        failed_server.val = id;
        const calls = [];
        const _tmp = entry.decoder;
        const _bind$7 = _M0FP416zhaojun_2dcoding6thrift3cmd3web11wire__unhex(_M0FP416zhaojun_2dcoding6thrift3cmd3web21request__text_2einner(request, "hex", ""));
        let _tmp$2;
        if (_bind$7.$tag === 1) {
          const _ok = _bind$7;
          _tmp$2 = _ok._0;
        } else {
          const _err = _bind$7;
          _try_err = _err._0;
          break _L;
        }
        const _bind$8 = _M0MP216zhaojun_2dcoding6thrift12FrameDecoder4feed(_tmp, _tmp$2);
        let _bind$9;
        if (_bind$8.$tag === 1) {
          const _ok = _bind$8;
          _bind$9 = _ok._0;
        } else {
          const _err = _bind$8;
          _try_err = _err._0;
          break _L;
        }
        const _bind$10 = _bind$9.length;
        let _tmp$3 = 0;
        while (true) {
          const _ = _tmp$3;
          if (_ < _bind$10) {
            const payload = _bind$9[_];
            const _bind$11 = _M0FP216zhaojun_2dcoding6thrift23decode__message_2einner(payload, entry.protocol, !entry.legacy);
            let message;
            if (_bind$11.$tag === 1) {
              const _ok = _bind$11;
              message = _ok._0;
            } else {
              const _err = _bind$11;
              _try_err = _err._0;
              break _L;
            }
            const _tmp$4 = message.name;
            const _bind$12 = ":";
            const parts = _M0MPB4Iter9to__arrayGsE(_M0MPB4Iter3mapGRPC16string10StringViewsE(_M0MPC16string6String5split(_tmp$4, new _M0TPC16string10StringView(_bind$12, 0, _bind$12.length)), (s) => _M0MPC16string10StringView9to__owned(s)));
            const route = parts.length > 1 ? _M0MPC15array5Array2atGsE(parts, 0) : "";
            let name;
            if (parts.length > 1) {
              const _tmp$5 = _M0MPC15array9ArrayView9to__ownedGsE(_M0MPC15array5Array12view_2einnerGsE(parts, 1, undefined));
              const _bind$13 = ":";
              name = _M0MPC15array5Array4joinGsE(_tmp$5, new _M0TPC16string10StringView(_bind$13, 0, _bind$13.length));
            } else {
              name = message.name;
            }
            const service = _M0MPC16string6String9is__empty(route) ? entry.default_service : _M0MPC16option6Option10unwrap__orGsE(_M0MPB3Map3getGssE(entry.services, route), "");
            const oneway = message.message_type === 4;
            const _bind$13 = [{ _0: "name", _1: _M0IPC16string6StringPB6ToJson8to__json(name) }, { _0: "sequence", _1: _M0IPC13int3IntPB6ToJson8to__json(message.sequence_id) }, { _0: "route", _1: _M0IPC16string6StringPB6ToJson8to__json(route) }, { _0: "service", _1: _M0IPC16string6StringPB6ToJson8to__json(service) }, { _0: "oneway", _1: _M0IPC14bool4BoolPB6ToJson8to__json(oneway) }];
            const call = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$13, 0, 5), undefined);
            const error = new _M0TPB8MutLocalGOUisEE(undefined);
            if (message.message_type !== 1 && message.message_type !== 4) {
              error.val = { _0: 2, _1: "invalid request message type" };
            } else {
              if (_M0MPC16string6String9is__empty(service)) {
                error.val = { _0: 1, _1: "unknown service" };
              } else {
                let known;
                let _try_err$2;
                _L$2: {
                  _L$3: {
                    const _bind$14 = _M0MP216zhaojun_2dcoding6thrift6Schema11get__method(entry.schema, service, name);
                    let _bind$15;
                    if (_bind$14.$tag === 1) {
                      const _ok = _bind$14;
                      _bind$15 = _ok._0;
                    } else {
                      const _err = _bind$14;
                      _try_err$2 = _err._0;
                      break _L$3;
                    }
                    const m = _bind$15;
                    known = m;
                    break _L$2;
                  }
                  error.val = { _0: 1, _1: `unknown method ${name}` };
                  known = undefined;
                }
                if (known === undefined) {
                } else {
                  let _try_err$3;
                  _L$3: {
                    _L$4: {
                      const _tmp$5 = entry.schema;
                      const _bind$14 = message.sequence_id;
                      const _bind$15 = message.message_type;
                      const _bind$16 = message.body;
                      const _bind$17 = _M0MP216zhaojun_2dcoding6thrift6Schema10read__call(_tmp$5, service, new _M0TP216zhaojun_2dcoding6thrift7Message(name, _bind$15, _bind$14, _bind$16));
                      let _tmp$6;
                      if (_bind$17.$tag === 1) {
                        const _ok = _bind$17;
                        _tmp$6 = _ok._0;
                      } else {
                        const _err = _bind$17;
                        _try_err$3 = _err._0;
                        break _L$4;
                      }
                      _M0MPB3Map3setGsRPB4JsonE(call, "arguments", _tmp$6);
                      break _L$3;
                    }
                    const e = _try_err$3;
                    error.val = { _0: 7, _1: _M0IP016_24default__implPB4Show10to__stringGRPC15debug4ReprE(_M0MPC15debug4Repr4ReprGRP216zhaojun_2dcoding6thrift11SchemaErrorE(e)) };
                  }
                }
              }
            }
            let code;
            let text;
            _L$2: {
              _L$3: {
                const _bind$14 = error.val;
                if (_bind$14 === undefined) {
                } else {
                  const _Some = _bind$14;
                  const _x = _Some;
                  const _code = _x._0;
                  const _text = _x._1;
                  code = _code;
                  text = _text;
                  break _L$3;
                }
                break _L$2;
              }
              const _bind$14 = [{ _0: "code", _1: _M0IPC13int3IntPB6ToJson8to__json(code) }, { _0: "message", _1: _M0IPC16string6StringPB6ToJson8to__json(text) }];
              _M0MPB3Map3setGsRPB4JsonE(call, "error", _M0MPC14json4Json6object(_M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$14, 0, 2), undefined)));
              if (!oneway) {
                const _bind$15 = _M0MP416zhaojun_2dcoding6thrift3cmd3web12BridgeServer9exception(entry, name, message.sequence_id, code, text);
                let _tmp$5;
                if (_bind$15.$tag === 1) {
                  const _ok = _bind$15;
                  _tmp$5 = _ok._0;
                } else {
                  const _err = _bind$15;
                  _try_err = _err._0;
                  break _L;
                }
                _M0MPB3Map3setGsRPB4JsonE(call, "reply", _M0IPC16string6StringPB6ToJson8to__json(_tmp$5));
              }
            }
            _M0MPC15array5Array4pushGRPB4JsonE(calls, _M0MPC14json4Json6object(call));
            _tmp$3 = _ + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        result = _M0MPC14json4Json5array(calls);
        break;
      }
      case "serverReply": {
        const _bind$11 = _M0MP216zhaojun_2dcoding6thrift6Schema11make__reply(entry.schema, _M0FP416zhaojun_2dcoding6thrift3cmd3web21request__text_2einner(request, "service", ""), _M0FP416zhaojun_2dcoding6thrift3cmd3web21request__text_2einner(request, "name", ""), _M0FP416zhaojun_2dcoding6thrift3cmd3web20request__int_2einner(request, "sequence", 0), _M0FP416zhaojun_2dcoding6thrift3cmd3web16request__outcome(request));
        let _tmp$4;
        if (_bind$11.$tag === 1) {
          const _ok = _bind$11;
          _tmp$4 = _ok._0;
        } else {
          const _err = _bind$11;
          _try_err = _err._0;
          break _L;
        }
        const _bind$12 = _M0FP216zhaojun_2dcoding6thrift31encode__framed__message_2einner(_tmp$4, entry.protocol, !entry.legacy);
        let _tmp$5;
        if (_bind$12.$tag === 1) {
          const _ok = _bind$12;
          _tmp$5 = _ok._0;
        } else {
          const _err = _bind$12;
          _try_err = _err._0;
          break _L;
        }
        result = _M0IPC16string6StringPB6ToJson8to__json(_M0FP416zhaojun_2dcoding6thrift3cmd3web3hex(_tmp$5));
        break;
      }
      case "serverException": {
        const _bind$13 = _M0MP416zhaojun_2dcoding6thrift3cmd3web12BridgeServer9exception(entry, _M0FP416zhaojun_2dcoding6thrift3cmd3web21request__text_2einner(request, "name", ""), _M0FP416zhaojun_2dcoding6thrift3cmd3web20request__int_2einner(request, "sequence", 0), _M0FP416zhaojun_2dcoding6thrift3cmd3web20request__int_2einner(request, "code", 6), _M0FP416zhaojun_2dcoding6thrift3cmd3web21request__text_2einner(request, "message", ""));
        let _tmp$6;
        if (_bind$13.$tag === 1) {
          const _ok = _bind$13;
          _tmp$6 = _ok._0;
        } else {
          const _err = _bind$13;
          _try_err = _err._0;
          break _L;
        }
        result = _M0IPC16string6StringPB6ToJson8to__json(_tmp$6);
        break;
      }
      case "serverFinish": {
        failed_server.val = id;
        const _bind$14 = _M0MP216zhaojun_2dcoding6thrift12FrameDecoder6finish(entry.decoder);
        if (_bind$14.$tag === 1) {
          const _ok = _bind$14;
          _ok._0;
        } else {
          const _err = _bind$14;
          _try_err = _err._0;
          break _L;
        }
        result = _M0MPC14json4Json4null();
        break;
      }
      default: {
        _try_err = new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure("unknown server action");
        break _L;
      }
    }
    const _bind$15 = [{ _0: "ok", _1: _M0MPC14json4Json7boolean(true) }, { _0: "result", _1: result }];
    return _M0MPC14json4Json17stringify_2einner(_M0MPC14json4Json6object(_M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$15, 0, 2), undefined)), false, 0, undefined);
  }
  const e = _try_err;
  if (failed_client.val >= 0) {
    _M0MPB3Map6removeGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeClientE(_M0FP416zhaojun_2dcoding6thrift3cmd3web12rpc__clients, failed_client.val);
  }
  if (failed_server.val >= 0) {
    _M0MPB3Map6removeGiRP416zhaojun_2dcoding6thrift3cmd3web12BridgeServerE(_M0FP416zhaojun_2dcoding6thrift3cmd3web12rpc__servers, failed_server.val);
  }
  const _bind$4 = [{ _0: "ok", _1: _M0MPC14json4Json7boolean(false) }, { _0: "error", _1: _M0IPC16string6StringPB6ToJson8to__json(_M0IP016_24default__implPB4Show10to__stringGRPC15debug4ReprE(_M0MPC15debug4Repr4ReprGRPC15error5ErrorE(e))) }];
  return _M0MPC14json4Json17stringify_2einner(_M0MPC14json4Json6object(_M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$4, 0, 2), undefined)), false, 0, undefined);
}
function _M0FP416zhaojun_2dcoding6thrift3cmd3web12schema__json(input) {
  let _try_err;
  _L: {
    if (input.length > 10000000) {
      _try_err = new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure("request length limit");
      break _L;
    }
    const _bind$4 = _M0FPC14json13parse_2einner(new _M0TPC16string10StringView(input, 0, input.length), 1024);
    let request;
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      request = _ok._0;
    } else {
      const _err = _bind$4;
      _try_err = _err._0;
      break _L;
    }
    const action = _M0FP416zhaojun_2dcoding6thrift3cmd3web21request__text_2einner(request, "action", "");
    if (action === "dependencies") {
      const _bind$5 = _M0FP216zhaojun_2dcoding6thrift18parse__idl_2einner(_M0FP416zhaojun_2dcoding6thrift3cmd3web21request__text_2einner(request, "source", ""), _M0FP416zhaojun_2dcoding6thrift3cmd3web21request__text_2einner(request, "name", "main.thrift"));
      let parsed;
      if (_bind$5.$tag === 1) {
        const _ok = _bind$5;
        parsed = _ok._0;
      } else {
        const _err = _bind$5;
        _try_err = _err._0;
        break _L;
      }
      const _bind$6 = [{ _0: "ok", _1: _M0MPC14json4Json7boolean(true) }, { _0: "includes", _1: _M0IPC15array5ArrayPB6ToJson8to__jsonGsE(parsed.includes) }];
      return _M0MPC14json4Json17stringify_2einner(_M0MPC14json4Json6object(_M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$6, 0, 2), undefined)), false, 0, undefined);
    }
    if (action === "compile") {
      if (_M0MPB3Map6lengthGiRP216zhaojun_2dcoding6thrift6SchemaE(_M0FP416zhaojun_2dcoding6thrift3cmd3web7schemas) >= 64) {
        _try_err = new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure("schema session limit");
        break _L;
      }
      let include_paths;
      let xs;
      _L$2: {
        _L$3: {
          const _bind$5 = _M0FP416zhaojun_2dcoding6thrift3cmd3web14request__value(request, "includePaths");
          if (_bind$5.$tag === 5) {
            const _Array = _bind$5;
            const _xs = _Array._0;
            xs = _xs;
            break _L$3;
          } else {
            include_paths = [];
          }
          break _L$2;
        }
        include_paths = _M0MPC15array5Array3mapGRPB4JsonsE(xs, (x) => {
          if (x.$tag === 4) {
            const _String = x;
            const _s = _String._0;
            return _s;
          } else {
            return "";
          }
        });
      }
      const _bind$5 = _M0FP216zhaojun_2dcoding6thrift23compile__schema_2einner(_M0FP416zhaojun_2dcoding6thrift3cmd3web21request__text_2einner(request, "root", "main.thrift"), _M0FP416zhaojun_2dcoding6thrift3cmd3web12request__map(request, "sources"), include_paths);
      let schema;
      if (_bind$5.$tag === 1) {
        const _ok = _bind$5;
        schema = _ok._0;
      } else {
        const _err = _bind$5;
        _try_err = _err._0;
        break _L;
      }
      const _bind$6 = _M0MP216zhaojun_2dcoding6thrift6Schema8describe(schema);
      let description;
      if (_bind$6.$tag === 1) {
        const _ok = _bind$6;
        description = _ok._0;
      } else {
        const _err = _bind$6;
        _try_err = _err._0;
        break _L;
      }
      _M0FP416zhaojun_2dcoding6thrift3cmd3web12schema__next.val = _M0FP416zhaojun_2dcoding6thrift3cmd3web12schema__next.val + 1 | 0;
      const id = _M0FP416zhaojun_2dcoding6thrift3cmd3web12schema__next.val;
      _M0MPB3Map3setGiRP216zhaojun_2dcoding6thrift6SchemaE(_M0FP416zhaojun_2dcoding6thrift3cmd3web7schemas, id, schema);
      const _bind$7 = [{ _0: "ok", _1: _M0MPC14json4Json7boolean(true) }, { _0: "schema", _1: _M0IPC13int3IntPB6ToJson8to__json(id) }, { _0: "description", _1: description }, { _0: "warnings", _1: _M0IPC15array5ArrayPB6ToJson8to__jsonGsE(_M0MP216zhaojun_2dcoding6thrift6Schema8warnings(schema)) }];
      return _M0MPC14json4Json17stringify_2einner(_M0MPC14json4Json6object(_M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$7, 0, 4), undefined)), false, 0, undefined);
    }
    const id = _M0FP416zhaojun_2dcoding6thrift3cmd3web20request__int_2einner(request, "schema", 0);
    if (action === "close") {
      _M0MPB3Map6removeGiRP216zhaojun_2dcoding6thrift6SchemaE(_M0FP416zhaojun_2dcoding6thrift3cmd3web7schemas, id);
      return "{\"ok\":true}";
    }
    let schema;
    const _bind$5 = _M0MPB3Map3getGiRP216zhaojun_2dcoding6thrift6SchemaE(_M0FP416zhaojun_2dcoding6thrift3cmd3web7schemas, id);
    if (_bind$5 === undefined) {
      _try_err = new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure("unknown schema session");
      break _L;
    } else {
      const _Some = _bind$5;
      const _schema = _Some;
      schema = _schema;
    }
    const protocol = _M0FP416zhaojun_2dcoding6thrift3cmd3web17request__protocol(request);
    const name = _M0FP416zhaojun_2dcoding6thrift3cmd3web21request__text_2einner(request, "type", "");
    let result;
    switch (action) {
      case "describe": {
        const _bind$6 = _M0MP216zhaojun_2dcoding6thrift6Schema8describe(schema);
        if (_bind$6.$tag === 1) {
          const _ok = _bind$6;
          result = _ok._0;
        } else {
          const _err = _bind$6;
          _try_err = _err._0;
          break _L;
        }
        break;
      }
      case "encode": {
        const _bind$7 = _M0MP216zhaojun_2dcoding6thrift6Schema12encode__json(schema, name, _M0FP416zhaojun_2dcoding6thrift3cmd3web14request__value(request, "value"), protocol);
        let _tmp;
        if (_bind$7.$tag === 1) {
          const _ok = _bind$7;
          _tmp = _ok._0;
        } else {
          const _err = _bind$7;
          _try_err = _err._0;
          break _L;
        }
        result = _M0IPC16string6StringPB6ToJson8to__json(_M0FP416zhaojun_2dcoding6thrift3cmd3web3hex(_tmp));
        break;
      }
      case "decode": {
        const _bind$8 = _M0FP416zhaojun_2dcoding6thrift3cmd3web11wire__unhex(_M0FP416zhaojun_2dcoding6thrift3cmd3web21request__text_2einner(request, "hex", ""));
        let _tmp$2;
        if (_bind$8.$tag === 1) {
          const _ok = _bind$8;
          _tmp$2 = _ok._0;
        } else {
          const _err = _bind$8;
          _try_err = _err._0;
          break _L;
        }
        const _bind$9 = _M0MP216zhaojun_2dcoding6thrift6Schema12decode__json(schema, name, _tmp$2, protocol);
        if (_bind$9.$tag === 1) {
          const _ok = _bind$9;
          result = _ok._0;
        } else {
          const _err = _bind$9;
          _try_err = _err._0;
          break _L;
        }
        break;
      }
      case "call": {
        const _bind$10 = _M0MP216zhaojun_2dcoding6thrift6Schema10make__call(schema, _M0FP416zhaojun_2dcoding6thrift3cmd3web21request__text_2einner(request, "service", ""), _M0FP416zhaojun_2dcoding6thrift3cmd3web21request__text_2einner(request, "name", ""), _M0FP416zhaojun_2dcoding6thrift3cmd3web14request__value(request, "arguments"), _M0FP416zhaojun_2dcoding6thrift3cmd3web20request__int_2einner(request, "sequence", 0));
        let message;
        if (_bind$10.$tag === 1) {
          const _ok = _bind$10;
          message = _ok._0;
        } else {
          const _err = _bind$10;
          _try_err = _err._0;
          break _L;
        }
        const _bind$11 = _M0FP216zhaojun_2dcoding6thrift23encode__message_2einner(message, protocol, _M0IP016_24default__implPB2Eq10not__equalGsE(_M0FP416zhaojun_2dcoding6thrift3cmd3web21request__text_2einner(request, "protocol", ""), "legacy"));
        let _tmp$3;
        if (_bind$11.$tag === 1) {
          const _ok = _bind$11;
          _tmp$3 = _ok._0;
        } else {
          const _err = _bind$11;
          _try_err = _err._0;
          break _L;
        }
        result = _M0IPC16string6StringPB6ToJson8to__json(_M0FP416zhaojun_2dcoding6thrift3cmd3web3hex(_tmp$3));
        break;
      }
      case "readCall": {
        const _bind$12 = _M0FP416zhaojun_2dcoding6thrift3cmd3web11wire__unhex(_M0FP416zhaojun_2dcoding6thrift3cmd3web21request__text_2einner(request, "hex", ""));
        let _tmp$4;
        if (_bind$12.$tag === 1) {
          const _ok = _bind$12;
          _tmp$4 = _ok._0;
        } else {
          const _err = _bind$12;
          _try_err = _err._0;
          break _L;
        }
        const _bind$13 = _M0FP216zhaojun_2dcoding6thrift23decode__message_2einner(_tmp$4, protocol, _M0IP016_24default__implPB2Eq10not__equalGsE(_M0FP416zhaojun_2dcoding6thrift3cmd3web21request__text_2einner(request, "protocol", ""), "legacy"));
        let message$2;
        if (_bind$13.$tag === 1) {
          const _ok = _bind$13;
          message$2 = _ok._0;
        } else {
          const _err = _bind$13;
          _try_err = _err._0;
          break _L;
        }
        const _tmp$5 = { _0: "name", _1: _M0IPC16string6StringPB6ToJson8to__json(message$2.name) };
        const _tmp$6 = { _0: "sequence", _1: _M0IPC13int3IntPB6ToJson8to__json(message$2.sequence_id) };
        const _tmp$7 = { _0: "messageType", _1: _M0IPC13int3IntPB6ToJson8to__json(message$2.message_type) };
        const _bind$14 = _M0MP216zhaojun_2dcoding6thrift6Schema10read__call(schema, _M0FP416zhaojun_2dcoding6thrift3cmd3web21request__text_2einner(request, "service", ""), message$2);
        let _tmp$8;
        if (_bind$14.$tag === 1) {
          const _ok = _bind$14;
          _tmp$8 = _ok._0;
        } else {
          const _err = _bind$14;
          _try_err = _err._0;
          break _L;
        }
        const _bind$15 = [_tmp$5, _tmp$6, _tmp$7, { _0: "arguments", _1: _tmp$8 }];
        result = _M0MPC14json4Json6object(_M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$15, 0, 4), undefined));
        break;
      }
      case "reply": {
        const _bind$16 = _M0MP216zhaojun_2dcoding6thrift6Schema11make__reply(schema, _M0FP416zhaojun_2dcoding6thrift3cmd3web21request__text_2einner(request, "service", ""), _M0FP416zhaojun_2dcoding6thrift3cmd3web21request__text_2einner(request, "name", ""), _M0FP416zhaojun_2dcoding6thrift3cmd3web20request__int_2einner(request, "sequence", 0), _M0FP416zhaojun_2dcoding6thrift3cmd3web16request__outcome(request));
        let _tmp$9;
        if (_bind$16.$tag === 1) {
          const _ok = _bind$16;
          _tmp$9 = _ok._0;
        } else {
          const _err = _bind$16;
          _try_err = _err._0;
          break _L;
        }
        const _bind$17 = _M0FP216zhaojun_2dcoding6thrift23encode__message_2einner(_tmp$9, protocol, _M0IP016_24default__implPB2Eq10not__equalGsE(_M0FP416zhaojun_2dcoding6thrift3cmd3web21request__text_2einner(request, "protocol", ""), "legacy"));
        let _tmp$10;
        if (_bind$17.$tag === 1) {
          const _ok = _bind$17;
          _tmp$10 = _ok._0;
        } else {
          const _err = _bind$17;
          _try_err = _err._0;
          break _L;
        }
        result = _M0IPC16string6StringPB6ToJson8to__json(_M0FP416zhaojun_2dcoding6thrift3cmd3web3hex(_tmp$10));
        break;
      }
      case "readReply": {
        const _tmp$11 = _M0FP416zhaojun_2dcoding6thrift3cmd3web21request__text_2einner(request, "service", "");
        const _tmp$12 = _M0FP416zhaojun_2dcoding6thrift3cmd3web21request__text_2einner(request, "name", "");
        const _bind$18 = _M0FP416zhaojun_2dcoding6thrift3cmd3web11wire__unhex(_M0FP416zhaojun_2dcoding6thrift3cmd3web21request__text_2einner(request, "hex", ""));
        let _tmp$13;
        if (_bind$18.$tag === 1) {
          const _ok = _bind$18;
          _tmp$13 = _ok._0;
        } else {
          const _err = _bind$18;
          _try_err = _err._0;
          break _L;
        }
        const _bind$19 = _M0FP216zhaojun_2dcoding6thrift23decode__message_2einner(_tmp$13, protocol, _M0IP016_24default__implPB2Eq10not__equalGsE(_M0FP416zhaojun_2dcoding6thrift3cmd3web21request__text_2einner(request, "protocol", ""), "legacy"));
        let _tmp$14;
        if (_bind$19.$tag === 1) {
          const _ok = _bind$19;
          _tmp$14 = _ok._0;
        } else {
          const _err = _bind$19;
          _try_err = _err._0;
          break _L;
        }
        const _bind$20 = _M0MP216zhaojun_2dcoding6thrift6Schema11read__reply(schema, _tmp$11, _tmp$12, _tmp$14);
        let _tmp$15;
        if (_bind$20.$tag === 1) {
          const _ok = _bind$20;
          _tmp$15 = _ok._0;
        } else {
          const _err = _bind$20;
          _try_err = _err._0;
          break _L;
        }
        result = _M0FP416zhaojun_2dcoding6thrift3cmd3web13outcome__json(_tmp$15);
        break;
      }
      default: {
        _try_err = new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure("unknown schema action");
        break _L;
      }
    }
    const _bind$21 = [{ _0: "ok", _1: _M0MPC14json4Json7boolean(true) }, { _0: "result", _1: result }];
    return _M0MPC14json4Json17stringify_2einner(_M0MPC14json4Json6object(_M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$21, 0, 2), undefined)), false, 0, undefined);
  }
  const e = _try_err;
  const _bind$4 = [{ _0: "ok", _1: _M0MPC14json4Json7boolean(false) }, { _0: "error", _1: _M0IPC16string6StringPB6ToJson8to__json(_M0IP016_24default__implPB4Show10to__stringGRPC15debug4ReprE(_M0MPC15debug4Repr4ReprGRPC15error5ErrorE(e))) }];
  return _M0MPC14json4Json17stringify_2einner(_M0MPC14json4Json6object(_M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$4, 0, 2), undefined)), false, 0, undefined);
}
function _M0FP416zhaojun_2dcoding6thrift3cmd3web5unhex(text) {
  const out = [];
  const high = new _M0TPB8MutLocalGiE(-1);
  if (text.length > 200000) {
    return new _M0DTPC16result6ResultGzRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure("input too long"));
  }
  const _it = _M0MPC16string6String4iter(text);
  while (true) {
    let c;
    _L: {
      const _bind$4 = _M0MPB4Iter4nextGcE(_it);
      if (_bind$4 === -1) {
        break;
      } else {
        const _Some = _bind$4;
        const _c = _Some;
        c = _c;
        break _L;
      }
    }
    if (c === 32 || (c === 10 || (c === 13 || c === 9))) {
      continue;
    }
    let n;
    if (c >= 48 && c <= 57) {
      n = c - 48 | 0;
    } else {
      if (c >= 97 && c <= 102) {
        n = c - 87 | 0;
      } else {
        if (c >= 65 && c <= 70) {
          n = c - 55 | 0;
        } else {
          return new _M0DTPC16result6ResultGzRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure("invalid hex character"));
        }
      }
    }
    if (high.val < 0) {
      high.val = n;
    } else {
      _M0MPC15array5Array4pushGyE(out, ((Math.imul(high.val, 16) | 0) + n | 0) & 255);
      high.val = -1;
    }
    continue;
  }
  if (high.val >= 0) {
    return new _M0DTPC16result6ResultGzRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure("odd hex length"));
  }
  return new _M0DTPC16result6ResultGzRPC15error5ErrorE2Ok(_M0MPC15bytes5Bytes11from__array(new _M0TPB9ArrayViewGyE(out, 0, out.length)));
}
function _M0FP416zhaojun_2dcoding6thrift3cmd3web3run(input) {
  let _try_err;
  _L: {
    const _bind$4 = "framed-";
    const framed = _M0MPC16string6String11has__prefix(input, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length));
    let rpc;
    const _bind$5 = "rpc-";
    if (_M0MPC16string6String11has__prefix(input, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length))) {
      rpc = true;
    } else {
      rpc = framed;
    }
    const payload = framed ? _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(input, 7, undefined)) : rpc ? _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(input, 4, undefined)) : input;
    const _bind$6 = "compact:";
    const compact = _M0MPC16string6String11has__prefix(payload, new _M0TPC16string10StringView(_bind$6, 0, _bind$6.length));
    const _bind$7 = "binary:";
    const binary = _M0MPC16string6String11has__prefix(payload, new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length));
    if (!compact && !binary) {
      _try_err = new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure("use compact:, binary:, rpc-compact:, rpc-binary:, framed-compact: or framed-binary:");
      break _L;
    }
    const protocol = compact ? 1 : 0;
    const _bind$8 = _M0FP416zhaojun_2dcoding6thrift3cmd3web5unhex(_M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(payload, compact ? 8 : 7, undefined)));
    let data;
    if (_bind$8.$tag === 1) {
      const _ok = _bind$8;
      data = _ok._0;
    } else {
      const _err = _bind$8;
      _try_err = _err._0;
      break _L;
    }
    if (framed) {
      const _bind$9 = _M0MP216zhaojun_2dcoding6thrift12FrameDecoder11new_2einner(1048576);
      let decoder;
      if (_bind$9.$tag === 1) {
        const _ok = _bind$9;
        decoder = _ok._0;
      } else {
        const _err = _bind$9;
        _try_err = _err._0;
        break _L;
      }
      const _bind$10 = _M0MP216zhaojun_2dcoding6thrift12FrameDecoder4feed(decoder, data);
      let frames;
      if (_bind$10.$tag === 1) {
        const _ok = _bind$10;
        frames = _ok._0;
      } else {
        const _err = _bind$10;
        _try_err = _err._0;
        break _L;
      }
      const _bind$11 = _M0MP216zhaojun_2dcoding6thrift12FrameDecoder6finish(decoder);
      if (_bind$11.$tag === 1) {
        const _ok = _bind$11;
        _ok._0;
      } else {
        const _err = _bind$11;
        _try_err = _err._0;
        break _L;
      }
      const messages = [];
      const _bind$12 = frames.length;
      let _tmp = 0;
      while (true) {
        const _ = _tmp;
        if (_ < _bind$12) {
          const frame = frames[_];
          const _bind$13 = _M0FP216zhaojun_2dcoding6thrift23decode__message_2einner(frame, protocol, false);
          let _tmp$2;
          if (_bind$13.$tag === 1) {
            const _ok = _bind$13;
            _tmp$2 = _ok._0;
          } else {
            const _err = _bind$13;
            _try_err = _err._0;
            break _L;
          }
          _M0MPC15array5Array4pushGRPB4JsonE(messages, _M0IP016_24default__implPB4Show10to__stringGRPC15debug4ReprE(_M0MPC15debug4Repr4ReprGRP216zhaojun_2dcoding6thrift7MessageE(_tmp$2)));
          _tmp = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      const _tmp$2 = _M0MPC13int3Int18to__string_2einner(frames.length, 10);
      const _bind$13 = "\n";
      return `Frames: ${_tmp$2}\n${_M0MPC15array5Array4joinGsE(messages, new _M0TPC16string10StringView(_bind$13, 0, _bind$13.length))}`;
    }
    if (rpc) {
      const _bind$9 = _M0FP216zhaojun_2dcoding6thrift23decode__message_2einner(data, protocol, true);
      let message;
      if (_bind$9.$tag === 1) {
        const _ok = _bind$9;
        message = _ok._0;
      } else {
        const _err = _bind$9;
        _try_err = _err._0;
        break _L;
      }
      const _tmp = _M0IP016_24default__implPB4Show10to__stringGRPC15debug4ReprE(_M0MPC15debug4Repr4ReprGRP216zhaojun_2dcoding6thrift7MessageE(message));
      const _bind$10 = _M0FP216zhaojun_2dcoding6thrift23encode__message_2einner(message, protocol, true);
      let _tmp$2;
      if (_bind$10.$tag === 1) {
        const _ok = _bind$10;
        _tmp$2 = _ok._0;
      } else {
        const _err = _bind$10;
        _try_err = _err._0;
        break _L;
      }
      return `${_tmp}\n\nRe-encoded: ${_M0FP416zhaojun_2dcoding6thrift3cmd3web3hex(_tmp$2)}`;
    }
    const _bind$9 = _M0FP216zhaojun_2dcoding6thrift6decode(data, 7, protocol);
    let value;
    if (_bind$9.$tag === 1) {
      const _ok = _bind$9;
      value = _ok._0;
    } else {
      const _err = _bind$9;
      _try_err = _err._0;
      break _L;
    }
    const _tmp = _M0IP016_24default__implPB4Show10to__stringGRPC15debug4ReprE(_M0MPC15debug4Repr4ReprGRP216zhaojun_2dcoding6thrift5ValueE(value));
    const _bind$10 = _M0FP216zhaojun_2dcoding6thrift6encode(value, protocol);
    let _tmp$2;
    if (_bind$10.$tag === 1) {
      const _ok = _bind$10;
      _tmp$2 = _ok._0;
    } else {
      const _err = _bind$10;
      _try_err = _err._0;
      break _L;
    }
    return `${_tmp}\n\nRe-encoded: ${_M0FP416zhaojun_2dcoding6thrift3cmd3web3hex(_tmp$2)}`;
  }
  const e = _try_err;
  return `ERROR: ${_M0IP016_24default__implPB4Show10to__stringGRPC15debug4ReprE(_M0MPC15debug4Repr4ReprGRPC15error5ErrorE(e))}`;
}
(() => {
})();
export { _M0FP416zhaojun_2dcoding6thrift3cmd3web15transport__json as transport_json, _M0FP416zhaojun_2dcoding6thrift3cmd3web12schema__json as schema_json, _M0FP416zhaojun_2dcoding6thrift3cmd3web3run as run }
//# sourceMappingURL=web.js.map
