class $PanicError extends Error {}
function $panic() {
  throw new $PanicError();
}
function _M0DTPB4Json4Null() {}
_M0DTPB4Json4Null.prototype.$tag = 0;
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
function _M0TPB9ArrayViewGyE(param0, param1, param2) {
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
const _M0MPB7JSArray4push = (arr, val) => { arr.push(val); };
function _M0TPB4IterGsE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB8MutLocalGiE(param0) {
  this.val = param0;
}
function _M0TPB9ArrayViewGsE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift11FrameStreamRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift11FrameStreamRP216zhaojun_2dcoding6thrift10CodecErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift11FrameStreamRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift11FrameStreamRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok.prototype.$tag = 1;
function $make_array_len_and_init(a, b) {
  const arr = new Array(a);
  arr.fill(b);
  return arr;
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
function _M0TPB3MapGisE(param0, param1, param2, param3, param4, param5, param6) {
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
function _M0TPB5EntryGsRPB4JsonE(param0, param1, param2, param3, param4, param5) {
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
function _M0TPB5EntryGisE(param0, param1, param2, param3, param4, param5) {
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
function _M0TPB8MutLocalGORPB5EntryGibEE(param0) {
  this.val = param0;
}
function _M0DTPC16result6ResultGRPB5ArrayGURP35Xpeng10moonthrift8protocol5ValueRP35Xpeng10moonthrift8protocol5ValueEERP216zhaojun_2dcoding6thrift10CodecErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGURP35Xpeng10moonthrift8protocol5ValueRP35Xpeng10moonthrift8protocol5ValueEERP216zhaojun_2dcoding6thrift10CodecErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGURP35Xpeng10moonthrift8protocol5ValueRP35Xpeng10moonthrift8protocol5ValueEERP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGURP35Xpeng10moonthrift8protocol5ValueRP35Xpeng10moonthrift8protocol5ValueEERP216zhaojun_2dcoding6thrift10CodecErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPB5ArrayGRP35Xpeng10moonthrift8protocol5ValueERP216zhaojun_2dcoding6thrift10CodecErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP35Xpeng10moonthrift8protocol5ValueERP216zhaojun_2dcoding6thrift10CodecErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGRP35Xpeng10moonthrift8protocol5ValueERP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP35Xpeng10moonthrift8protocol5ValueERP216zhaojun_2dcoding6thrift10CodecErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPB5ArrayGRP35Xpeng10moonthrift8protocol10FieldValueERP216zhaojun_2dcoding6thrift10CodecErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP35Xpeng10moonthrift8protocol10FieldValueERP216zhaojun_2dcoding6thrift10CodecErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGRP35Xpeng10moonthrift8protocol10FieldValueERP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP35Xpeng10moonthrift8protocol10FieldValueERP216zhaojun_2dcoding6thrift10CodecErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPB5ArrayGURP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift5ValueEERP216zhaojun_2dcoding6thrift10CodecErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGURP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift5ValueEERP216zhaojun_2dcoding6thrift10CodecErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGURP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift5ValueEERP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGURP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift5ValueEERP216zhaojun_2dcoding6thrift10CodecErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPB5ArrayGRP216zhaojun_2dcoding6thrift5ValueERP216zhaojun_2dcoding6thrift10CodecErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP216zhaojun_2dcoding6thrift5ValueERP216zhaojun_2dcoding6thrift10CodecErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGRP216zhaojun_2dcoding6thrift5ValueERP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP216zhaojun_2dcoding6thrift5ValueERP216zhaojun_2dcoding6thrift10CodecErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPB5ArrayGUiRP216zhaojun_2dcoding6thrift5ValueEERP216zhaojun_2dcoding6thrift10CodecErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGUiRP216zhaojun_2dcoding6thrift5ValueEERP216zhaojun_2dcoding6thrift10CodecErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGUiRP216zhaojun_2dcoding6thrift5ValueEERP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGUiRP216zhaojun_2dcoding6thrift5ValueEERP216zhaojun_2dcoding6thrift10CodecErrorE2Ok.prototype.$tag = 1;
function _M0TPC15bytes9BytesView(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
const $bytes_literal$0 = new Uint8Array();
const _M0MPB7JSArray11set__length = (arr, len) => { arr.length = len; };
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
function _M0DTPC15error5Error60moonbitlang_2fcore_2fencoding_2futf8_2eMalformed_2eMalformed(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error60moonbitlang_2fcore_2fencoding_2futf8_2eMalformed_2eMalformed.prototype.$tag = 14;
function _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure.prototype.$tag = 13;
function _M0DTPC15error5Error61Xpeng_2fmoonthrift_2fprotocol_2eProtocolError_2eUnexpectedEof(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15error5Error61Xpeng_2fmoonthrift_2fprotocol_2eProtocolError_2eUnexpectedEof.prototype.$tag = 12;
function _M0DTPC15error5Error59Xpeng_2fmoonthrift_2fprotocol_2eProtocolError_2eInvalidType(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error59Xpeng_2fmoonthrift_2fprotocol_2eProtocolError_2eInvalidType.prototype.$tag = 11;
function _M0DTPC15error5Error60Xpeng_2fmoonthrift_2fprotocol_2eProtocolError_2eTypeMismatch(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15error5Error60Xpeng_2fmoonthrift_2fprotocol_2eProtocolError_2eTypeMismatch.prototype.$tag = 10;
function _M0DTPC15error5Error60Xpeng_2fmoonthrift_2fprotocol_2eProtocolError_2eNegativeSize(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error60Xpeng_2fmoonthrift_2fprotocol_2eProtocolError_2eNegativeSize.prototype.$tag = 9;
function _M0DTPC15error5Error61Xpeng_2fmoonthrift_2fprotocol_2eProtocolError_2eLimitExceeded(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTPC15error5Error61Xpeng_2fmoonthrift_2fprotocol_2eProtocolError_2eLimitExceeded.prototype.$tag = 8;
function _M0DTPC15error5Error60Xpeng_2fmoonthrift_2fprotocol_2eProtocolError_2eTrailingData(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15error5Error60Xpeng_2fmoonthrift_2fprotocol_2eProtocolError_2eTrailingData.prototype.$tag = 7;
function _M0DTPC15error5Error62Xpeng_2fmoonthrift_2fprotocol_2eProtocolError_2eInvalidCompact(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error62Xpeng_2fmoonthrift_2fprotocol_2eProtocolError_2eInvalidCompact.prototype.$tag = 6;
function _M0DTPC15error5Error62Xpeng_2fmoonthrift_2fprotocol_2eProtocolError_2eInvalidMessage(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error62Xpeng_2fmoonthrift_2fprotocol_2eProtocolError_2eInvalidMessage.prototype.$tag = 5;
function _M0DTPC15error5Error68Xpeng_2fmoonthrift_2fprotocol_2eProtocolError_2eApplicationException(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15error5Error68Xpeng_2fmoonthrift_2fprotocol_2eProtocolError_2eApplicationException.prototype.$tag = 4;
function _M0DTPC15error5Error60Xpeng_2fmoonthrift_2fprotocol_2eProtocolError_2eInvalidValue(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error60Xpeng_2fmoonthrift_2fprotocol_2eProtocolError_2eInvalidValue.prototype.$tag = 3;
function _M0DTPC15error5Error59Xpeng_2fmoonthrift_2fprotocol_2eProtocolError_2eInvalidEnum(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15error5Error59Xpeng_2fmoonthrift_2fprotocol_2eProtocolError_2eInvalidEnum.prototype.$tag = 2;
function _M0DTPC15error5Error68Xpeng_2fmoonthrift_2fprotocol_2eProtocolError_2eMissingRequiredField(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTPC15error5Error68Xpeng_2fmoonthrift_2fprotocol_2eProtocolError_2eMissingRequiredField.prototype.$tag = 1;
function _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid.prototype.$tag = 0;
function _M0TPC13ref3RefGORP216zhaojun_2dcoding6thrift6ClientE(param0) {
  this.val = param0;
}
function _M0TPC13ref3RefGiE(param0) {
  this.val = param0;
}
function _M0TPC16buffer6Buffer(param0, param1) {
  this.data = param0;
  this.len = param1;
}
const $reinterpret_view = new DataView(new ArrayBuffer(8));
function $f64_reinterpret_i64(a) {
  $reinterpret_view.setFloat64(0, a, false);
  return BigInt.asUintN(64, $reinterpret_view.getBigUint64(0, false));
}
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
function $i64_reinterpret_f64(a) {
  $reinterpret_view.setBigUint64(0, BigInt.asUintN(64, a), false);
  return $reinterpret_view.getFloat64(0, false);
}
function _M0TP216zhaojun_2dcoding6thrift12MessageCodec(param0, param1) {
  this.encoder = param0;
  this.decoder = param1;
}
function _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift7MessageRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift7MessageRP216zhaojun_2dcoding6thrift10CodecErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift7MessageRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift7MessageRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok.prototype.$tag = 1;
function _M0TP216zhaojun_2dcoding6thrift6Reader(param0, param1, param2, param3) {
  this.data = param0;
  this.pos = param1;
  this.nodes = param2;
  this.compact = param3;
}
function _M0TP216zhaojun_2dcoding6thrift7Message(param0, param1, param2, param3) {
  this.name = param0;
  this.message_type = param1;
  this.sequence_id = param2;
  this.body = param3;
}
function _M0TP216zhaojun_2dcoding6thrift11FrameStream(param0, param1, param2, param3, param4) {
  this.encoder = param0;
  this.decoder = param1;
  this.eof = param2;
  this.closed = param3;
  this.failed = param4;
}
function _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift6ClientRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift6ClientRP216zhaojun_2dcoding6thrift10CodecErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift6ClientRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift6ClientRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok.prototype.$tag = 1;
function _M0TP216zhaojun_2dcoding6thrift6Client(param0, param1, param2, param3, param4, param5) {
  this.codec = param0;
  this.decoder = param1;
  this.pending = param2;
  this.next_sequence = param3;
  this.failed = param4;
  this.exhausted = param5;
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
function _M0DTPC16option6OptionGOsE4None() {}
_M0DTPC16option6OptionGOsE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGOsE4None__ = new _M0DTPC16option6OptionGOsE4None();
function _M0DTPC16option6OptionGOsE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGOsE4Some.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPB5ArrayGRP216zhaojun_2dcoding6thrift7MessageERP216zhaojun_2dcoding6thrift10CodecErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP216zhaojun_2dcoding6thrift7MessageERP216zhaojun_2dcoding6thrift10CodecErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGRP216zhaojun_2dcoding6thrift7MessageERP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP216zhaojun_2dcoding6thrift7MessageERP216zhaojun_2dcoding6thrift10CodecErrorE2Ok.prototype.$tag = 1;
function _M0TPB9ArrayViewGUibEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol8WireTypeRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol8WireTypeRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol8WireTypeRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol8WireTypeRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol11MessageTypeRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol11MessageTypeRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol11MessageTypeRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol11MessageTypeRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGlRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGlRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGlRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGlRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPB5ArrayGRP35Xpeng10moonthrift8protocol10FieldValueERP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP35Xpeng10moonthrift8protocol10FieldValueERP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGRP35Xpeng10moonthrift8protocol10FieldValueERP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP35Xpeng10moonthrift8protocol10FieldValueERP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGsRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGsRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGuRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGuRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGzRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGzRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGzRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGzRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGiRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGiRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGyRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGyRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGyRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGyRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol5ValueRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol5ValueRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol5ValueRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol5ValueRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok.prototype.$tag = 1;
function _M0DTP35Xpeng10moonthrift8protocol5Value9BoolValue(param0) {
  this._0 = param0;
}
_M0DTP35Xpeng10moonthrift8protocol5Value9BoolValue.prototype.$tag = 0;
function _M0DTP35Xpeng10moonthrift8protocol5Value9ByteValue(param0) {
  this._0 = param0;
}
_M0DTP35Xpeng10moonthrift8protocol5Value9ByteValue.prototype.$tag = 1;
function _M0DTP35Xpeng10moonthrift8protocol5Value8I16Value(param0) {
  this._0 = param0;
}
_M0DTP35Xpeng10moonthrift8protocol5Value8I16Value.prototype.$tag = 2;
function _M0DTP35Xpeng10moonthrift8protocol5Value8I32Value(param0) {
  this._0 = param0;
}
_M0DTP35Xpeng10moonthrift8protocol5Value8I32Value.prototype.$tag = 3;
function _M0DTP35Xpeng10moonthrift8protocol5Value8I64Value(param0) {
  this._0 = param0;
}
_M0DTP35Xpeng10moonthrift8protocol5Value8I64Value.prototype.$tag = 4;
function _M0DTP35Xpeng10moonthrift8protocol5Value11DoubleValue(param0) {
  this._0 = param0;
}
_M0DTP35Xpeng10moonthrift8protocol5Value11DoubleValue.prototype.$tag = 5;
function _M0DTP35Xpeng10moonthrift8protocol5Value11BinaryValue(param0) {
  this._0 = param0;
}
_M0DTP35Xpeng10moonthrift8protocol5Value11BinaryValue.prototype.$tag = 6;
function _M0DTP35Xpeng10moonthrift8protocol5Value11StructValue(param0) {
  this._0 = param0;
}
_M0DTP35Xpeng10moonthrift8protocol5Value11StructValue.prototype.$tag = 7;
function _M0DTP35Xpeng10moonthrift8protocol5Value8MapValue(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP35Xpeng10moonthrift8protocol5Value8MapValue.prototype.$tag = 8;
function _M0DTP35Xpeng10moonthrift8protocol5Value8SetValue(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP35Xpeng10moonthrift8protocol5Value8SetValue.prototype.$tag = 9;
function _M0DTP35Xpeng10moonthrift8protocol5Value9ListValue(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP35Xpeng10moonthrift8protocol5Value9ListValue.prototype.$tag = 10;
function _M0TP35Xpeng10moonthrift8protocol10FieldValue(param0, param1) {
  this.id = param0;
  this.value = param1;
}
function _M0TP35Xpeng10moonthrift8protocol12BinaryReader(param0, param1, param2, param3, param4) {
  this.input = param0;
  this.offset = param1;
  this.max_depth = param2;
  this.max_container_size = param3;
  this.max_binary_size = param4;
}
function _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol7MessageRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol7MessageRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol7MessageRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol7MessageRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok.prototype.$tag = 1;
function _M0TP35Xpeng10moonthrift8protocol7Message(param0, param1, param2, param3) {
  this.name = param0;
  this.kind = param1;
  this.sequence_id = param2;
  this.body = param3;
}
function _M0DTPC16result6ResultGmRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGmRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGmRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGmRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGURP35Xpeng10moonthrift8protocol8WireTypeObERP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGURP35Xpeng10moonthrift8protocol8WireTypeObERP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGURP35Xpeng10moonthrift8protocol8WireTypeObERP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGURP35Xpeng10moonthrift8protocol8WireTypeObERP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGdRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGdRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGdRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGdRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok.prototype.$tag = 1;
function _M0TP35Xpeng10moonthrift8protocol13CompactReader(param0, param1, param2, param3, param4) {
  this.input = param0;
  this.offset = param1;
  this.max_depth = param2;
  this.max_container_size = param3;
  this.max_binary_size = param4;
}
function _M0DTPC16result6ResultGRP35Xpeng10moonthrift3rpc12FrameDecoderRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP35Xpeng10moonthrift3rpc12FrameDecoderRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP35Xpeng10moonthrift3rpc12FrameDecoderRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP35Xpeng10moonthrift3rpc12FrameDecoderRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok.prototype.$tag = 1;
function _M0TP35Xpeng10moonthrift3rpc12FrameDecoder(param0, param1, param2, param3, param4) {
  this.max_frame_size = param0;
  this.header = param1;
  this.body = param2;
  this.expected = param3;
  this.received = param4;
}
function _M0DTPC16result6ResultGRPB5ArrayGzERP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGzERP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGzERP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGzERP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok.prototype.$tag = 1;
function _M0TPB8MutLocalGORP416zhaojun_2dcoding6thrift8examples17moonthrift__model15SharedAddResultE(param0) {
  this.val = param0;
}
function _M0DTPC16result6ResultGRP416zhaojun_2dcoding6thrift8examples17moonthrift__model15SharedAddResultRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP416zhaojun_2dcoding6thrift8examples17moonthrift__model15SharedAddResultRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP416zhaojun_2dcoding6thrift8examples17moonthrift__model15SharedAddResultRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP416zhaojun_2dcoding6thrift8examples17moonthrift__model15SharedAddResultRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok.prototype.$tag = 1;
function _M0DTP416zhaojun_2dcoding6thrift8examples17moonthrift__model15SharedAddResult7Success(param0) {
  this._0 = param0;
}
_M0DTP416zhaojun_2dcoding6thrift8examples17moonthrift__model15SharedAddResult7Success.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol8WireTypeRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol8WireTypeRP216zhaojun_2dcoding6thrift10CodecErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol8WireTypeRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol8WireTypeRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol10FieldValueRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol10FieldValueRP216zhaojun_2dcoding6thrift10CodecErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol10FieldValueRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol10FieldValueRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGURP35Xpeng10moonthrift8protocol5ValueRP35Xpeng10moonthrift8protocol5ValueERP216zhaojun_2dcoding6thrift10CodecErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGURP35Xpeng10moonthrift8protocol5ValueRP35Xpeng10moonthrift8protocol5ValueERP216zhaojun_2dcoding6thrift10CodecErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGURP35Xpeng10moonthrift8protocol5ValueRP35Xpeng10moonthrift8protocol5ValueERP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGURP35Xpeng10moonthrift8protocol5ValueRP35Xpeng10moonthrift8protocol5ValueERP216zhaojun_2dcoding6thrift10CodecErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGUiRP216zhaojun_2dcoding6thrift5ValueERP216zhaojun_2dcoding6thrift10CodecErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUiRP216zhaojun_2dcoding6thrift5ValueERP216zhaojun_2dcoding6thrift10CodecErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGUiRP216zhaojun_2dcoding6thrift5ValueERP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUiRP216zhaojun_2dcoding6thrift5ValueERP216zhaojun_2dcoding6thrift10CodecErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGURP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift5ValueERP216zhaojun_2dcoding6thrift10CodecErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGURP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift5ValueERP216zhaojun_2dcoding6thrift10CodecErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGURP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift5ValueERP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGURP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift5ValueERP216zhaojun_2dcoding6thrift10CodecErrorE2Ok.prototype.$tag = 1;
function _M0TP416zhaojun_2dcoding6thrift8examples17moonthrift__model13SharedAddArgs(param0, param1) {
  this.a = param0;
  this.b = param1;
}
function _M0TPB9ArrayViewGUsRPB4JsonEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
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
const _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger = { method_0: _M0IPB13StringBuilderPB6Logger13write__string, method_1: _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE, method_2: _M0IPB13StringBuilderPB6Logger11write__view, method_3: _M0IPB13StringBuilderPB6Logger11write__char, method_4: _M0IP016_24default__implPB6Logger28write__string__interpolationGRPB13StringBuilderE, method_5: _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE };
function _M0FP15Error8to__repr(_e) {
  switch (_e.$tag) {
    case 6: {
      return _M0IP35Xpeng10moonthrift8protocol13ProtocolErrorPC15debug5Debug8to__reprGRP35Xpeng10moonthrift8protocol13ProtocolErrorE(_e);
    }
    case 14: {
      return _M0IPC28encoding4utf89MalformedPC15debug5Debug8to__reprGRPC28encoding4utf89MalformedE(_e);
    }
    case 3: {
      return _M0IP35Xpeng10moonthrift8protocol13ProtocolErrorPC15debug5Debug8to__reprGRP35Xpeng10moonthrift8protocol13ProtocolErrorE(_e);
    }
    case 13: {
      return _M0IPB7FailurePC15debug5Debug8to__reprGRPB7FailureE(_e);
    }
    case 9: {
      return _M0IP35Xpeng10moonthrift8protocol13ProtocolErrorPC15debug5Debug8to__reprGRP35Xpeng10moonthrift8protocol13ProtocolErrorE(_e);
    }
    case 11: {
      return _M0IP35Xpeng10moonthrift8protocol13ProtocolErrorPC15debug5Debug8to__reprGRP35Xpeng10moonthrift8protocol13ProtocolErrorE(_e);
    }
    case 4: {
      return _M0IP35Xpeng10moonthrift8protocol13ProtocolErrorPC15debug5Debug8to__reprGRP35Xpeng10moonthrift8protocol13ProtocolErrorE(_e);
    }
    case 12: {
      return _M0IP35Xpeng10moonthrift8protocol13ProtocolErrorPC15debug5Debug8to__reprGRP35Xpeng10moonthrift8protocol13ProtocolErrorE(_e);
    }
    case 8: {
      return _M0IP35Xpeng10moonthrift8protocol13ProtocolErrorPC15debug5Debug8to__reprGRP35Xpeng10moonthrift8protocol13ProtocolErrorE(_e);
    }
    case 5: {
      return _M0IP35Xpeng10moonthrift8protocol13ProtocolErrorPC15debug5Debug8to__reprGRP35Xpeng10moonthrift8protocol13ProtocolErrorE(_e);
    }
    case 2: {
      return _M0IP35Xpeng10moonthrift8protocol13ProtocolErrorPC15debug5Debug8to__reprGRP35Xpeng10moonthrift8protocol13ProtocolErrorE(_e);
    }
    case 0: {
      return _M0IP216zhaojun_2dcoding6thrift10CodecErrorPC15debug5Debug8to__reprGRP216zhaojun_2dcoding6thrift10CodecErrorE(_e);
    }
    case 10: {
      return _M0IP35Xpeng10moonthrift8protocol13ProtocolErrorPC15debug5Debug8to__reprGRP35Xpeng10moonthrift8protocol13ProtocolErrorE(_e);
    }
    case 7: {
      return _M0IP35Xpeng10moonthrift8protocol13ProtocolErrorPC15debug5Debug8to__reprGRP35Xpeng10moonthrift8protocol13ProtocolErrorE(_e);
    }
    default: {
      return _M0IP35Xpeng10moonthrift8protocol13ProtocolErrorPC15debug5Debug8to__reprGRP35Xpeng10moonthrift8protocol13ProtocolErrorE(_e);
    }
  }
}
const _M0MPC16string6String4trimN7_2abindS6932 = "\t\n\r ";
const _M0MPB4Iter4nextN6constrS9909GUsRPB4JsonEE = 0;
const _M0MPB4Iter4nextN6constrS9910GUsRPB4JsonEE = 0;
const _M0MPB4Iter3newN6constrS9917GUsRPB4JsonEE = 0;
const _M0FPC15debug15compact__middleN7_2abindS1131 = "";
const _M0FPC15debug15compact__middleN7_2abindS1139 = " ";
const _M0FPC15debug15compact__middleN7_2abindS1133 = ",";
const _M0FPC15debug14compact__linesN7_2abindS1143 = " ";
const _M0FPC15debug14compact__linesN7_2abindS1142 = " ";
const _M0FPC15debug14compact__linesN7_2abindS1140 = "";
const _M0FPC15debug14compact__linesN7_2abindS1145 = "(";
const _M0FPC15debug14compact__linesN7_2abindS1151 = " ";
const _M0FPC15debug19bracket__seq__linesN7_2abindS1160 = "";
const _M0FPC15debug14print__contentN7_2abindS1229 = "\n";
const _M0FP35Xpeng10moonthrift3rpc25default__max__frame__size = 16384000;
const _M0FPB4seed = _M0FPB12random__seed();
const _M0FPC15debug6renderN6constrS1683 = 16;
const _M0FP416zhaojun_2dcoding6thrift3cmd17moonthrift__model7session = _M0MPC13ref3Ref3RefGORP216zhaojun_2dcoding6thrift6ClientE(undefined);
function _M0FPC15abort5abortGsE(msg) {
  return $panic();
}
function _M0FPC15abort5abortGuE(msg) {
  $panic();
}
function _M0FPC15abort5abortGOiE(msg) {
  return $panic();
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
function _M0FPB13clamp__offset(offset, len) {
  return offset < 0 ? 0 : offset > len ? len : offset;
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
function _M0MPB18UninitializedArray12unsafe__blitGyE(dst, dst_offset, src, src_offset, len) {
  _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGyEE(dst, dst_offset, src, src_offset, len);
}
function _M0MPB18UninitializedArray12unsafe__blitGsE(dst, dst_offset, src, src_offset, len) {
  _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGsEE(dst, dst_offset, src, src_offset, len);
}
function _M0MPB18UninitializedArray23unsafe__make__and__blitGyE(src, allocate_len, src_offset, dst_offset, blit_len) {
  const dst = new Uint8Array(allocate_len);
  _M0MPB18UninitializedArray12unsafe__blitGyE(dst, dst_offset, src, src_offset, blit_len);
  return dst;
}
function _M0MPB13StringBuilder13write__objectGdE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGdE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder13write__objectGiE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGiE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
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
function _M0MPC14byte4Byte7to__hexN14to__hex__digitS4038(i) {
  return i < 10 ? _M0MPC14byte4Byte8to__char(_M0IPC14byte4BytePB3Add3add(i, 48)) : _M0MPC14byte4Byte8to__char(_M0IPC14byte4BytePB3Sub3sub(_M0IPC14byte4BytePB3Add3add(i, 97), 10));
}
function _M0MPC14byte4Byte7to__hex(b) {
  const _self = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0IPB13StringBuilderPB6Logger11write__char(_self, _M0MPC14byte4Byte7to__hexN14to__hex__digitS4038(_M0IPC14byte4BytePB3Div3div(b, 16)));
  _M0IPB13StringBuilderPB6Logger11write__char(_self, _M0MPC14byte4Byte7to__hexN14to__hex__digitS4038(_M0IPC14byte4BytePB3Mod3mod(b, 16)));
  return _M0MPB13StringBuilder10to__string(_self);
}
function _M0MPC16string10StringView21clamped__view_2einner(self, start, end) {
  const len = self.end - self.start | 0;
  let lo = start < 0 ? 0 : start > len ? len : start;
  let hi;
  if (end === undefined) {
    hi = len;
  } else {
    const _Some = end;
    const _e = _Some;
    hi = _e < 0 ? 0 : _e > len ? len : _e;
  }
  const str = self.str;
  const base = self.start;
  if (lo > 0 && (lo < len && (_M0MPC16uint166UInt1623is__trailing__surrogate(str.charCodeAt(base + lo | 0)) && _M0MPC16uint166UInt1622is__leading__surrogate(str.charCodeAt((base + lo | 0) - 1 | 0))))) {
    lo = lo + 1 | 0;
  }
  if (hi > 0 && (hi < len && (_M0MPC16uint166UInt1623is__trailing__surrogate(str.charCodeAt(base + hi | 0)) && _M0MPC16uint166UInt1622is__leading__surrogate(str.charCodeAt((base + hi | 0) - 1 | 0))))) {
    hi = hi - 1 | 0;
  }
  return lo >= hi ? new _M0TPC16string10StringView(str, base + lo | 0, base + lo | 0) : new _M0TPC16string10StringView(str, base + lo | 0, base + hi | 0);
}
function _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS4021(_env, seg, i) {
  const self = _env._1;
  const logger = _env._0;
  if (i > seg) {
    logger.method_table.method_2(logger.self, _M0MPC16string10StringView21clamped__view_2einner(self, seg, i));
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
  const _env = { _0: logger, _1: self };
  let _tmp = 0;
  let _tmp$2 = 0;
  _L: while (true) {
    const i = _tmp;
    const seg = _tmp$2;
    if (i >= len) {
      _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS4021(_env, seg, i);
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
          _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS4021(_env, seg, i);
          logger.method_table.method_0(logger.self, "\\n");
          _tmp = i + 1 | 0;
          _tmp$2 = i + 1 | 0;
          continue _L;
        }
        case 13: {
          _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS4021(_env, seg, i);
          logger.method_table.method_0(logger.self, "\\r");
          _tmp = i + 1 | 0;
          _tmp$2 = i + 1 | 0;
          continue _L;
        }
        case 8: {
          _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS4021(_env, seg, i);
          logger.method_table.method_0(logger.self, "\\b");
          _tmp = i + 1 | 0;
          _tmp$2 = i + 1 | 0;
          continue _L;
        }
        case 9: {
          _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS4021(_env, seg, i);
          logger.method_table.method_0(logger.self, "\\t");
          _tmp = i + 1 | 0;
          _tmp$2 = i + 1 | 0;
          continue _L;
        }
        default: {
          if (code < 32) {
            _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS4021(_env, seg, i);
            logger.method_table.method_0(logger.self, "\\u{");
            logger.method_table.method_0(logger.self, _M0MPC14byte4Byte7to__hex(code & 255));
            logger.method_table.method_0(logger.self, "}");
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
    _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS4021(_env, seg, i);
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
function _M0MPC16string10StringView12view_2einner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.end - self.start | 0;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= (self.end - self.start | 0)) ? new _M0TPC16string10StringView(self.str, self.start + start_offset | 0, self.start + end_offset$2 | 0) : _M0FPC15abort5abortGsE("Invalid index for View");
}
function _M0MPC16uint646UInt648to__byte(self) {
  return (Number(BigInt.asIntN(32, self)) | 0) & 255;
}
function _M0MPC16uint166UInt168to__char(self) {
  _L: {
    if (self >= 0 && self <= 55295) {
      break _L;
    } else {
      if (self >= 57344) {
        break _L;
      } else {
        return -1;
      }
    }
  }
  return _M0MPC16uint166UInt1616unsafe__to__char(self);
}
function _M0IPC16uint166UInt16PB2Eq5equal(self, that) {
  return self === that;
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
function _M0IP016_24default__implPB2Eq10not__equalGsE(x, y) {
  return !(x === y);
}
function _M0IP016_24default__implPB2Eq10not__equalGRP216zhaojun_2dcoding6thrift4KindE(x, y) {
  return !_M0IP216zhaojun_2dcoding6thrift4KindPB2Eq5equal(x, y);
}
function _M0IP016_24default__implPB2Eq10not__equalGRP35Xpeng10moonthrift8protocol8WireTypeE(x, y) {
  return !_M0IP35Xpeng10moonthrift8protocol8WireTypePB2Eq5equal(x, y);
}
function _M0IP016_24default__implPB2Eq10not__equalGORP216zhaojun_2dcoding6thrift4KindE(x, y) {
  return !_M0IPC16option6OptionPB2Eq5equalGRP216zhaojun_2dcoding6thrift4KindE(x, y);
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
function _M0MPC16string6String21clamped__view_2einner(self, start, end) {
  const len = self.length;
  let lo = start < 0 ? 0 : start > len ? len : start;
  let hi;
  if (end === undefined) {
    hi = len;
  } else {
    const _Some = end;
    const _e = _Some;
    hi = _e < 0 ? 0 : _e > len ? len : _e;
  }
  if (lo > 0 && (lo < len && (_M0MPC16uint166UInt1623is__trailing__surrogate(self.charCodeAt(lo)) && _M0MPC16uint166UInt1622is__leading__surrogate(self.charCodeAt(lo - 1 | 0))))) {
    lo = lo + 1 | 0;
  }
  if (hi > 0 && (hi < len && (_M0MPC16uint166UInt1623is__trailing__surrogate(self.charCodeAt(hi)) && _M0MPC16uint166UInt1622is__leading__surrogate(self.charCodeAt(hi - 1 | 0))))) {
    hi = hi - 1 | 0;
  }
  return lo >= hi ? new _M0TPC16string10StringView(self, lo, lo) : new _M0TPC16string10StringView(self, lo, hi);
}
function _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(self, value, start, len) {
  _M0IPB13StringBuilderPB6Logger11write__view(self, _M0MPC16string6String21clamped__view_2einner(value, start, start + len | 0));
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
function _M0IP016_24default__implPB4Show6outputGiE(self, logger) {
  logger.method_table.method_0(logger.self, _M0IPC13int3IntPB4Show10to__string(self));
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
  const _bind = self.size_hint;
  if (result === undefined) {
    self.size_hint = _M0MPB4Iter4nextN6constrS9910GUsRPB4JsonEE;
  } else {
    if (_bind === undefined) {
    } else {
      const _Some = _bind;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS9909GUsRPB4JsonEE;
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
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS9917GUsRPB4JsonEE;
  }
  return new _M0TPB4IterGUsRPB4JsonEE(f, size_hint$2);
}
function _M0MPC15array10FixedArray21clamped__view_2einnerGyE(self, start, end) {
  const len = self.length;
  const lo = _M0FPB13clamp__offset(start, len);
  let hi;
  if (end === undefined) {
    hi = len;
  } else {
    const _Some = end;
    const _end = _Some;
    hi = _M0FPB13clamp__offset(_end, len);
  }
  const count = hi > lo ? hi - lo | 0 : 0;
  const _bind = self;
  return new _M0TPB9ArrayViewGyE(_bind, lo, lo + count | 0);
}
function _M0MPC14uint4UInt8to__byte(self) {
  return self & 255;
}
function _M0MPC16string10StringView9to__owned(self) {
  return self.str.substring(self.start, self.end);
}
function _M0IPC16string10StringViewPB4Show6output(self, logger) {
  logger.method_table.method_2(logger.self, self);
}
function _M0MPC16string10StringView3all(self, f) {
  const _bind = self.str;
  const _bind$2 = self.start;
  const _bind$3 = self.end;
  let _tmp = _bind$2;
  while (true) {
    const _string_index = _tmp;
    if (_string_index < _bind$3) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$4 = _bind.charCodeAt(_string_index);
        if (_bind$4 >= 55296 && _bind$4 <= 56319 && (_string_index + 1 | 0) < _bind$3) {
          const _bind$5 = _bind.charCodeAt(_string_index + 1 | 0);
          if (_bind$5 >= 56320 && _bind$5 <= 57343) {
            _decoded_next_string_index = _string_index + 2 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char((((Math.imul(_bind$4 - 55296 | 0, 1024) | 0) + _bind$5 | 0) - 56320 | 0) + 65536 | 0);
            break _L;
          } else {
            _decoded_next_string_index = _string_index + 1 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$4);
            break _L;
          }
        } else {
          _decoded_next_string_index = _string_index + 1 | 0;
          _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$4);
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
function _M0IPC16string6StringPB4Show10to__string(self) {
  return self;
}
function _M0MPC16string6String6repeat(self, n) {
  if (n < 0) {
    return _M0FPC15abort5abortGsE("negative repeat count");
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
          return _M0FPC15abort5abortGsE("repeat result too large");
        }
      }
    }
  }
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
function _M0MPC15array5Array4pushGRPB4JsonE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGyE(self, value) {
  _M0MPB7JSArray4push(self, value);
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
function _M0MPC14char4Char8to__uint(self) {
  return self;
}
function _M0FPB23build__ascii__char__set(chars) {
  let bits0 = 0;
  let bits1 = 0;
  let bits2 = 0;
  let bits3 = 0;
  const _bind = chars.str;
  const _bind$2 = chars.start;
  const _bind$3 = chars.end;
  let _tmp = _bind$2;
  while (true) {
    const _string_index = _tmp;
    if (_string_index < _bind$3) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$4 = _bind.charCodeAt(_string_index);
        if (_bind$4 >= 55296 && _bind$4 <= 56319 && (_string_index + 1 | 0) < _bind$3) {
          const _bind$5 = _bind.charCodeAt(_string_index + 1 | 0);
          if (_bind$5 >= 56320 && _bind$5 <= 57343) {
            _decoded_next_string_index = _string_index + 2 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char((((Math.imul(_bind$4 - 55296 | 0, 1024) | 0) + _bind$5 | 0) - 56320 | 0) + 65536 | 0);
            break _L;
          } else {
            _decoded_next_string_index = _string_index + 1 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$4);
            break _L;
          }
        } else {
          _decoded_next_string_index = _string_index + 1 | 0;
          _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$4);
          break _L;
        }
      }
      const code = _M0MPC14char4Char8to__uint(_decoded_char);
      if (code >>> 0 < 128 >>> 0) {
        const bit = 1 << (code & 31);
        const _bind$4 = code >>> 5 | 0;
        switch (_bind$4) {
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
    const _bind = code >>> 5 | 0;
    switch (_bind) {
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
      const _bind = _M0MPC16string6String29offset__of__nth__char_2einner(x.str, 1, x.start, x.end);
      let _tmp$3;
      if (_bind === undefined) {
        _tmp$3 = x.end;
      } else {
        const _Some = _bind;
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
  const _bind = _M0FPB23build__ascii__char__set(chars);
  if (_bind === undefined) {
    return _M0MPC16string10StringView22trim__end__with__chars(_M0MPC16string10StringView24trim__start__with__chars(self, chars), chars);
  } else {
    const _Some = _bind;
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
    chars = new _M0TPC16string10StringView(_M0MPC16string6String4trimN7_2abindS6932, 0, _M0MPC16string6String4trimN7_2abindS6932.length);
  } else {
    const _Some = chars$46$opt;
    chars = _Some;
  }
  return _M0MPC16string6String12trim_2einner(self, chars);
}
function _M0MPB4Iter3mapGssE(self, f) {
  return new _M0TPB4IterGsE(() => {
    const _bind = _M0MPB4Iter4nextGUsRPB4JsonEE(self);
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _x = _Some;
      return f(_x);
    }
  }, self.size_hint);
}
function _M0IPC16string6StringPB12ToStringView16to__string__view(self) {
  return new _M0TPC16string10StringView(self, 0, self.length);
}
function _M0IPC16string10StringViewPB12ToStringView16to__string__view(self) {
  return self;
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
function _M0IPC13int3IntPB4Show10to__string(self) {
  return _M0MPC13int3Int18to__string_2einner(self, 10);
}
function _M0MPC15array9ArrayView4iterGsE(self) {
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
function _M0MPC15array5Array4iterGsE(self) {
  return _M0MPC15array9ArrayView4iterGsE(new _M0TPB9ArrayViewGsE(self, 0, self.length));
}
function _M0MPC13int3Int3min(self, other) {
  return self < other ? self : other;
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
    const _bind = _x_end - _x_start | 0;
    let size_hint;
    let _tmp = 0;
    let _tmp$2 = hd.end - hd.start | 0;
    while (true) {
      const _ = _tmp;
      const size_hint$2 = _tmp$2;
      if (_ < _bind) {
        const s = _x_buf[_x_start + _ | 0];
        _tmp = _ + 1 | 0;
        const _bind$2 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
        _tmp$2 = (size_hint$2 + (_bind$2.end - _bind$2.start | 0) | 0) + (separator.end - separator.start | 0) | 0;
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
      const _bind$2 = _x_end - _x_start | 0;
      let _tmp$3 = 0;
      while (true) {
        const _ = _tmp$3;
        if (_ < _bind$2) {
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
      const _bind$2 = _x_end - _x_start | 0;
      let _tmp$3 = 0;
      while (true) {
        const _ = _tmp$3;
        if (_ < _bind$2) {
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
    const _bind = _x_end - _x_start | 0;
    let size_hint;
    let _tmp = 0;
    let _tmp$2 = hd.end - hd.start | 0;
    while (true) {
      const _ = _tmp;
      const size_hint$2 = _tmp$2;
      if (_ < _bind) {
        const s = _x_buf[_x_start + _ | 0];
        _tmp = _ + 1 | 0;
        const _bind$2 = _M0IPC16string10StringViewPB12ToStringView16to__string__view(s);
        _tmp$2 = (size_hint$2 + (_bind$2.end - _bind$2.start | 0) | 0) + (separator.end - separator.start | 0) | 0;
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
      const _bind$2 = _x_end - _x_start | 0;
      let _tmp$3 = 0;
      while (true) {
        const _ = _tmp$3;
        if (_ < _bind$2) {
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
      const _bind$2 = _x_end - _x_start | 0;
      let _tmp$3 = 0;
      while (true) {
        const _ = _tmp$3;
        if (_ < _bind$2) {
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
function _M0MPC16option6Option6unwrapGcE(self) {
  return self === -1 ? $panic() : self;
}
function _M0MPC16option6Option6unwrapGRPB5EntryGsRPB4JsonEE(self) {
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
function _M0MPC16option6Option16unwrap__or__elseGRP216zhaojun_2dcoding6thrift12MessageCodecE(self, default_) {
  if (self === undefined) {
    return default_();
  } else {
    const _Some = self;
    const _t = _Some;
    return _t;
  }
}
function _M0MPC16option6Option16unwrap__or__elseGRP216zhaojun_2dcoding6thrift11FrameStreamEHRP216zhaojun_2dcoding6thrift10CodecError(self, default_) {
  if (self === undefined) {
    return default_();
  } else {
    const _Some = self;
    const _t = _Some;
    return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift11FrameStreamRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(_t);
  }
}
function _M0MPC15array5Array31unsafe__make__and__blit_2einnerGsE(src, allocate_len, len, src_offset, dst_offset) {
  const dst = new Array(allocate_len);
  _M0MPB18UninitializedArray12unsafe__blitGsE(dst, dst_offset, src, src_offset, len);
  return dst;
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
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPB3MapGsRPB4JsonE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
}
function _M0FPB8new__mapGisE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPB3MapGisE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
}
function _M0FPB8new__mapGibE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPB3MapGibE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
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
function _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    _M0MPC16option6Option6unwrapGRPB5EntryGsRPB4JsonEE(_bind >>> 0 < _tmp.length ? _tmp[_bind] : $oob()).next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGibE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    _M0MPC16option6Option6unwrapGRPB5EntryGsRPB4JsonEE(_bind >>> 0 < _tmp.length ? _tmp[_bind] : $oob()).next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGisE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    _M0MPC16option6Option6unwrapGRPB5EntryGsRPB4JsonEE(_bind >>> 0 < _tmp.length ? _tmp[_bind] : $oob()).next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map10set__entryGsRPB4JsonE(self, entry, new_idx) {
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10set__entryGibE(self, entry, new_idx) {
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10set__entryGisE(self, entry, new_idx) {
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10push__awayGsRPB4JsonE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _bind = self.entries[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGsRPB4JsonE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
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
function _M0MPB3Map10push__awayGibE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _bind = self.entries[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGibE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
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
function _M0MPB3Map10push__awayGisE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _bind = self.entries[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGisE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
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
function _M0MPB3Map20rehash__place__entryGsRPB4JsonE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind;
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
function _M0MPB3Map20rehash__place__entryGibE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGibE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind;
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
function _M0MPB3Map20rehash__place__entryGisE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGisE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind;
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
function _M0MPB3Map15set__with__hashGsRPB4JsonE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPB4JsonE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGsRPB4JsonE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
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
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGsRPB4JsonE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry);
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
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGibE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGibE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGibE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
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
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGibE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGibE(self, idx, entry);
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
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGisE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGisE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGisE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
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
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGisE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGisE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3setGsRPB4JsonE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRPB4JsonE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGibE(self, key, value) {
  _M0MPB3Map15set__with__hashGibE(self, key, value, _M0IPC13int3IntPB4Hash4hash(key));
}
function _M0MPB3Map3setGisE(self, key, value) {
  _M0MPB3Map15set__with__hashGisE(self, key, value, _M0IPC13int3IntPB4Hash4hash(key));
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
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
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
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
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
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
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
function _M0MPB3Map3getGisE(self, key) {
  const hash = _M0IPC13int3IntPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
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
function _M0MPB3Map8containsGibE(self, key) {
  const hash = _M0IPC13int3IntPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      return false;
    } else {
      const _Some = _bind;
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
function _M0MPB3Map8containsGisE(self, key) {
  const hash = _M0IPC13int3IntPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      return false;
    } else {
      const _Some = _bind;
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
function _M0MPB3Map13remove__entryGisE(self, entry) {
  const _bind = entry.prev;
  if (_bind === -1) {
    self.head = entry.next;
  } else {
    const _tmp = self.entries;
    _M0MPC16option6Option6unwrapGRPB5EntryGsRPB4JsonEE(_bind >>> 0 < _tmp.length ? _tmp[_bind] : $oob()).next = entry.next;
  }
  const _bind$2 = entry.next;
  if (_bind$2 === undefined) {
    self.tail = entry.prev;
    return;
  } else {
    const _Some = _bind$2;
    const _next = _Some;
    _next.prev = entry.prev;
    return;
  }
}
function _M0MPB3Map11shift__backGisE(self, idx) {
  let _tmp = idx;
  while (true) {
    const cur = _tmp;
    const next = (cur + 1 | 0) & self.capacity_mask;
    _L: {
      const _bind = self.entries[next];
      if (_bind === undefined) {
        break _L;
      } else {
        const _Some = _bind;
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
function _M0MPB3Map18remove__with__hashGisE(self, key, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      return;
    } else {
      const _Some = _bind;
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
function _M0MPB3Map6removeGisE(self, key) {
  _M0MPB3Map18remove__with__hashGisE(self, key, _M0IPC13int3IntPB4Hash4hash(key));
}
function _M0MPB3Map6lengthGisE(self) {
  return self.size;
}
function _M0MPB3Map9is__emptyGsRPB4JsonE(self) {
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
        const _bind = curr_entry.val;
        if (_bind === undefined) {
          break _L;
        } else {
          const _Some = _bind;
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
function _M0MPB3Map4iterGibE(self) {
  const curr_entry = new _M0TPB8MutLocalGORPB5EntryGibEE(self.head);
  const len = self.size;
  const remaining = new _M0TPB8MutLocalGiE(len);
  return _M0MPB4Iter3newGUsRPB4JsonEE(() => {
    _L: {
      if (remaining.val > 0) {
        const _bind = curr_entry.val;
        if (_bind === undefined) {
          break _L;
        } else {
          const _Some = _bind;
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
function _M0MPB3Map5iter2GibE(self) {
  return _M0MPB3Map4iterGibE(self);
}
function _M0IPC14byte4BytePB2Eq5equal(self, that) {
  return self === that;
}
function _M0MPC14json4Json7boolean(boolean) {
  return boolean ? _M0DTPB4Json4True__ : _M0DTPB4Json5False__;
}
function _M0MPC14json4Json6object(object) {
  return new _M0DTPB4Json6Object(object);
}
function _M0MPC15array5Array3mapGRPB4JsonRPB4JsonE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
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
function _M0MPC15array5Array3mapGURP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift5ValueEURP35Xpeng10moonthrift8protocol5ValueRP35Xpeng10moonthrift8protocol5ValueEEHRP216zhaojun_2dcoding6thrift10CodecError(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      const _bind$2 = f(v);
      let _tmp$2;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _tmp$2 = _ok._0;
      } else {
        return _bind$2;
      }
      arr[i] = _tmp$2;
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGURP35Xpeng10moonthrift8protocol5ValueRP35Xpeng10moonthrift8protocol5ValueEERP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(arr);
}
function _M0MPC15array5Array3mapGRP216zhaojun_2dcoding6thrift5ValueRP35Xpeng10moonthrift8protocol5ValueEHRP216zhaojun_2dcoding6thrift10CodecError(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      const _bind$2 = f(v);
      let _tmp$2;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _tmp$2 = _ok._0;
      } else {
        return _bind$2;
      }
      arr[i] = _tmp$2;
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGRP35Xpeng10moonthrift8protocol5ValueERP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(arr);
}
function _M0MPC15array5Array3mapGUiRP216zhaojun_2dcoding6thrift5ValueERP35Xpeng10moonthrift8protocol10FieldValueEHRP216zhaojun_2dcoding6thrift10CodecError(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      const _bind$2 = f(v);
      let _tmp$2;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _tmp$2 = _ok._0;
      } else {
        return _bind$2;
      }
      arr[i] = _tmp$2;
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGRP35Xpeng10moonthrift8protocol10FieldValueERP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(arr);
}
function _M0MPC15array5Array3mapGURP35Xpeng10moonthrift8protocol5ValueRP35Xpeng10moonthrift8protocol5ValueEURP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift5ValueEEHRP216zhaojun_2dcoding6thrift10CodecError(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      const _bind$2 = f(v);
      let _tmp$2;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _tmp$2 = _ok._0;
      } else {
        return _bind$2;
      }
      arr[i] = _tmp$2;
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGURP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift5ValueEERP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(arr);
}
function _M0MPC15array5Array3mapGRP35Xpeng10moonthrift8protocol5ValueRP216zhaojun_2dcoding6thrift5ValueEHRP216zhaojun_2dcoding6thrift10CodecError(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      const _bind$2 = f(v);
      let _tmp$2;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _tmp$2 = _ok._0;
      } else {
        return _bind$2;
      }
      arr[i] = _tmp$2;
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGRP216zhaojun_2dcoding6thrift5ValueERP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(arr);
}
function _M0MPC15array5Array3mapGRP35Xpeng10moonthrift8protocol10FieldValueUiRP216zhaojun_2dcoding6thrift5ValueEEHRP216zhaojun_2dcoding6thrift10CodecError(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      const _bind$2 = f(v);
      let _tmp$2;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _tmp$2 = _ok._0;
      } else {
        return _bind$2;
      }
      arr[i] = _tmp$2;
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGUiRP216zhaojun_2dcoding6thrift5ValueEERP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(arr);
}
function _M0MPC15array5Array3mapGUOsRPC15debug4ReprERPC15debug4ReprE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
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
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
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
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
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
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
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
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
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
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
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
function _M0MPC15array5Array3mapGyRPC15debug4ReprE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
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
function _M0IPC15array5ArrayPB6ToJson8to__jsonGRPB4JsonE(self) {
  return new _M0DTPB4Json5Array(_M0MPC15array5Array3mapGRPB4JsonRPB4JsonE(self, (x) => _M0IPC14json4JsonPB6ToJson8to__json(x)));
}
function _M0MPB4Iter10size__hintGsE(self) {
  return self.size_hint;
}
function _M0MPB4Iter4iterGsE(self) {
  return self;
}
function _M0MPB5Iter24nextGibE(self) {
  return _M0MPB4Iter4nextGUsRPB4JsonEE(self);
}
function _M0MPC13int3Int13is__surrogate(self) {
  return 55296 <= self && self <= 57343;
}
function _M0IPC16string6StringPB4Hash4hash(self) {
  let acc = (_M0FPB4seed >>> 0) + (374761393 >>> 0) | 0;
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
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
function _M0MPC15array10FixedArray23unsafe__make__and__blitGyE(src, allocate_len, init, src_offset, dst_offset, blit_len) {
  const dst = $makebytes(allocate_len, init);
  _M0MPC15array10FixedArray12unsafe__blitGyE(dst, dst_offset, src, src_offset, blit_len);
  return dst;
}
function _M0MPC15array10FixedArray23make__and__blit_2einnerGyE(src, allocate_len, init, len, src_offset, dst_offset) {
  if (allocate_len >= 0 && (len >= 0 && (src_offset >= 0 && (dst_offset >= 0 && ((src_offset + len | 0) <= src.length && (dst_offset + len | 0) <= allocate_len))))) {
    return _M0MPC15array10FixedArray23unsafe__make__and__blitGyE(src, allocate_len, init, src_offset, dst_offset, len);
  } else {
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(89);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "bounds check failed: allocate_len = ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, allocate_len);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", src_offset = ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, src_offset);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", dst_offset = ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, dst_offset);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", len = ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, len);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", src.length = ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, src.length);
    return _M0FPC15abort5abortGsE(_M0MPB13StringBuilder10to__string(_string_builder));
  }
}
function _M0IPC16double6DoublePB4Show10to__string(self) {
  return String(self);
}
function _M0MPC14char4Char7to__hex(char) {
  const code = char;
  return code >= 0 && code <= 255 ? _M0MPC14byte4Byte7to__hex(code & 255) : code <= 65535 ? `${_M0MPC14byte4Byte7to__hex(code >> 8 & 255)}${_M0MPC14byte4Byte7to__hex(code & 255)}` : `${_M0MPC14byte4Byte7to__hex(code >> 16 & 255)}${_M0MPC14byte4Byte7to__hex(code >> 8 & 255)}${_M0MPC14byte4Byte7to__hex(code & 255)}`;
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
                      logger.method_table.method_0(logger.self, "}");
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
function _M0MPC15bytes5Bytes21clamped__view_2einner(self, start, end) {
  const len = self.length;
  const lo = _M0FPB13clamp__offset(start, len);
  let hi;
  if (end === undefined) {
    hi = len;
  } else {
    const _Some = end;
    const _end = _Some;
    hi = _M0FPB13clamp__offset(_end, len);
  }
  const count = hi > lo ? hi - lo | 0 : 0;
  return new _M0TPC15bytes9BytesView(self, lo, lo + count | 0);
}
function _M0MPC15bytes9BytesView21clamped__view_2einner(self, start, end) {
  const len = self.end - self.start | 0;
  const lo = _M0FPB13clamp__offset(start, len);
  let hi;
  if (end === undefined) {
    hi = len;
  } else {
    const _Some = end;
    const _end = _Some;
    hi = _M0FPB13clamp__offset(_end, len);
  }
  const count = hi > lo ? hi - lo | 0 : 0;
  const _bind = self.buf;
  const _bind$2 = self.start + lo | 0;
  return new _M0TPC15bytes9BytesView(_bind, _bind$2, _bind$2 + count | 0);
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
function _M0MPC15bytes9BytesView9to__array(self) {
  const len = self.end - self.start | 0;
  return _M0MPC15array5Array44unsafe__make__and__blit__from__fixed_2einnerGyE(_M0MPC15bytes9BytesView4data(self), len, len, _M0MPC15bytes9BytesView13start__offset(self), 0);
}
function _M0IPC14byte4BytePB6BitAnd4land(self, that) {
  return self & that & 255;
}
function _M0IPC14byte4BytePB3Shr3shr(self, count) {
  return (_M0MPC14byte4Byte8to__uint(self) >>> count | 0) & 255;
}
function _M0MPC15array5Array28unsafe__truncate__to__lengthGyE(self, new_len) {
  _M0MPB7JSArray11set__length(self, new_len);
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
function _M0MPC15array5Array2atGRPB4JsonE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGyE(self, index) {
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
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
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
function _M0MPC15array5Array5clearGyE(self) {
  _M0MPC15array5Array28unsafe__truncate__to__lengthGyE(self, 0);
}
function _M0MPC15array5Array6filterGsE(self, f) {
  const arr = [];
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
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
function _M0MPC15array5Array10push__iterGsE(self, iter) {
  const _bind = _M0MPB4Iter10size__hintGsE(iter);
  if (_bind === undefined) {
  } else {
    const _Some = _bind;
    const _n = _Some;
    _M0MPC15array5Array17reserve__capacityGsE(self, self.length + _n | 0);
  }
  while (true) {
    const _bind$2 = _M0MPB4Iter4nextGUsRPB4JsonEE(iter);
    if (_bind$2 === undefined) {
      return;
    } else {
      const _Some = _bind$2;
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
function _M0MPC15int165Int1623reinterpret__as__uint16(self) {
  return self << 16 >> 16 & 65535;
}
function _M0MPC15debug4Repr4ReprGRPC15error5ErrorE(value) {
  return _M0IPC15error5ErrorPC15debug5Debug8to__repr(value);
}
function _M0MPC15debug4Repr4ReprGRP216zhaojun_2dcoding6thrift10CodecErrorE(value) {
  return _M0IP216zhaojun_2dcoding6thrift10CodecErrorPC15debug5Debug8to__repr(value);
}
function _M0MPC15debug4Repr4ReprGRP35Xpeng10moonthrift8protocol13ProtocolErrorE(value) {
  return _M0IP35Xpeng10moonthrift8protocol13ProtocolErrorPC15debug5Debug8to__repr(value);
}
function _M0MPC15debug4Repr4ReprGyE(value) {
  return _M0IPC14byte4BytePC15debug5Debug8to__repr(value);
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
function _M0MPC15debug4Repr6string(x) {
  return new _M0DTPC15debug4Repr9StringLit(x);
}
function _M0MPC15debug4Repr5array(children) {
  return new _M0DTPC15debug4Repr5Array(children);
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
      _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array9ArrayView4iterGsE(_x));
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
function _M0FPC15debug15compact__middle(middle) {
  const parts = [];
  const _bind = middle.end - middle.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const m = middle.buf[middle.start + _ | 0];
      const t = _M0MPC16string6String4trim(m, undefined);
      if (_M0IP016_24default__implPB2Eq10not__equalGRPC16string10StringViewE(t, new _M0TPC16string10StringView(_M0FPC15debug15compact__middleN7_2abindS1131, 0, _M0FPC15debug15compact__middleN7_2abindS1131.length))) {
        _M0MPC15array5Array4pushGRPB4JsonE(parts, t);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const joined0 = _M0MPC15array5Array4joinGRPC16string10StringViewE(parts, new _M0TPC16string10StringView(_M0FPC15debug15compact__middleN7_2abindS1139, 0, _M0FPC15debug15compact__middleN7_2abindS1139.length));
  const _bind$2 = _M0MPC16string6String13strip__suffix(joined0, new _M0TPC16string10StringView(_M0FPC15debug15compact__middleN7_2abindS1133, 0, _M0FPC15debug15compact__middleN7_2abindS1133.length));
  if (_bind$2 === undefined) {
    return new _M0TPC16string10StringView(joined0, 0, joined0.length);
  } else {
    const _Some = _bind$2;
    return _Some;
  }
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
      const _bind = lines.length - 1 | 0;
      const _x = new _M0TPB9ArrayViewGsE(lines, 1, _bind);
      if (_first === "[" && _last === "]" || _first === "{" && _last === "}") {
        const joined = _M0FPC15debug15compact__middle(_x);
        if (_first === "{") {
          const s1 = _M0MPC16option6Option10unwrap__orGsE(_M0MPC16string10StringView13strip__prefix(joined, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1143, 0, _M0FPC15debug14compact__linesN7_2abindS1143.length)), joined);
          const inner = _M0MPC16option6Option10unwrap__orGsE(_M0MPC16string10StringView13strip__suffix(s1, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1142, 0, _M0FPC15debug14compact__linesN7_2abindS1142.length)), s1);
          if (_M0IPC16string10StringViewPB2Eq5equal(inner, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1140, 0, _M0FPC15debug14compact__linesN7_2abindS1140.length))) {
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
        if (_M0MPC16string6String11has__suffix(_first, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1145, 0, _M0FPC15debug14compact__linesN7_2abindS1145.length)) && _last === ")") {
          const joined = _M0FPC15debug15compact__middle(_x);
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(0);
          _M0MPB13StringBuilder13write__objectGsE(_string_builder, _first);
          _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(_string_builder, joined);
          _M0MPB13StringBuilder13write__objectGsE(_string_builder, _last);
          return [_M0MPB13StringBuilder10to__string(_string_builder)];
        } else {
          const parts = [new _M0TPC16string10StringView(_first, 0, _first.length)];
          const _bind$2 = _bind - 1 | 0;
          let _tmp = 0;
          while (true) {
            const _ = _tmp;
            if (_ < _bind$2) {
              const m = lines[1 + _ | 0];
              _M0MPC15array5Array4pushGRPB4JsonE(parts, _M0MPC16string6String4trim(m, undefined));
              _tmp = _ + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          _M0MPC15array5Array4pushGRPB4JsonE(parts, _M0MPC16string6String4trim(_last, undefined));
          return [_M0MPC15array5Array4joinGRPC16string10StringViewE(parts, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1151, 0, _M0FPC15debug14compact__linesN7_2abindS1151.length))];
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
          _M0MPC15array5Array3setGsE(lines, last_i, `${_M0MPC15array5Array2atGRPB4JsonE(lines, last_i)},`);
        }
        const _self = [];
        _M0MPC15array5Array4pushGRPB4JsonE(_self, open);
        _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGsE(lines));
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
              if (_M0IPC16string10StringViewPB2Eq5equal(inner$2, new _M0TPC16string10StringView(_M0FPC15debug19bracket__seq__linesN7_2abindS1160, 0, _M0FPC15debug19bracket__seq__linesN7_2abindS1160.length))) {
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
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGsE(_M0FPC15debug14indent__spaces(indent_by, new _M0TPC15debug13ContentParens(0, _item)).lines));
            _M0MPC15array5Array4pushGRPB4JsonE(_self, close);
            return _self;
          }
        }
      }
    } else {
      const out = [open];
      const _bind = contents.length;
      let _tmp = 0;
      while (true) {
        const _ = _tmp;
        if (_ < _bind) {
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
              const _bind$2 = _x_end - 1 | 0;
              let _tmp$2 = 0;
              while (true) {
                const _$2 = _tmp$2;
                if (_$2 < _bind$2) {
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
            const _bind = _x_end - 1 | 0;
            let _tmp = 0;
            while (true) {
              const _ = _tmp;
              if (_ < _bind) {
                const item = contents[1 + _ | 0];
                const _bind$2 = _M0FPC15debug15surround__lines(space, ",", item);
                _M0MPC15array5Array6appendGsE(middle_lines, new _M0TPB9ArrayViewGsE(_bind$2, 0, _bind$2.length));
                _tmp = _ + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            const _self = [];
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGsE(_M0FPC15debug15surround__lines(begin, ",", _first)));
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGsE(middle_lines));
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGsE(_M0FPC15debug15surround__lines(space, end, _last)));
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
                _M0MPC15array5Array10push__iterGsE(_self, _M0MPB4Iter4iterGsE(_M0MPB4Iter3mapGssE(_M0MPC15array9ArrayView4iterGsE(_x), (line) => `${_M0MPC16string6String6repeat(" ", 2)}${line}`)));
                _M0MPC15array5Array4pushGRPB4JsonE(_self, `${_M0MPC16string6String6repeat(" ", 2)}${_last_line},`);
                _M0MPC15array5Array4pushGRPB4JsonE(_self, end);
                return _self;
              }
            }
          } else {
            const out = [begin];
            const _bind = contents.length;
            let _tmp = 0;
            while (true) {
              const _ = _tmp;
              if (_ < _bind) {
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
                    const _bind$2 = _x_end - 1 | 0;
                    let _tmp$2 = 0;
                    while (true) {
                      const _$2 = _tmp$2;
                      if (_$2 < _bind$2) {
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
  const _bind = contents.length;
  let _tmp = 0;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp;
    const size = _tmp$2;
    if (_ < _bind) {
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
  return _M0MPC15array5Array4joinGsE(r.lines, new _M0TPC16string10StringView(_M0FPC15debug14print__contentN7_2abindS1229, 0, _M0FPC15debug14print__contentN7_2abindS1229.length));
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
        const _bind = v.lines;
        if (_bind.length === 0) {
          return _M0FPC15debug14empty__content();
        } else {
          if (_bind.length === 1) {
            const _one = _bind[0];
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens((1 + k.size | 0) + v.size | 0, [`${_M0FPC15debug14print__content(_M0FPC15debug8surround("", ": ", k))}${_one}`]));
          } else {
            const _first = _bind[0];
            const _x$6 = new _M0TPB9ArrayViewGsE(_bind, 1, _bind.length);
            const head = `${_M0FPC15debug14print__content(_M0FPC15debug8surround("", ": ", k))}${_first}`;
            const _tmp$2 = (1 + k.size | 0) + v.size | 0;
            const _self = [];
            _M0MPC15array5Array4pushGRPB4JsonE(_self, head);
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array9ArrayView4iterGsE(_x$6));
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
        const _bind = _val.lines;
        if (_bind.length === 0) {
          return _M0FPC15debug14empty__content();
        } else {
          if (_bind.length === 1) {
            const _first = _bind[0];
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(1 + _val.size | 0, [`${_name$3}=${_first}`]));
          } else {
            const _first = _bind[0];
            const _x$6 = new _M0TPB9ArrayViewGsE(_bind, 1, _bind.length);
            const _tmp$2 = 1 + _val.size | 0;
            const _self = [];
            _M0MPC15array5Array4pushGRPB4JsonE(_self, `${_name$3}=${_first}`);
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array9ArrayView4iterGsE(_x$6));
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
        const _bind = v.lines;
        if (_bind.length === 0) {
          return _M0FPC15debug14empty__content();
        } else {
          if (_bind.length === 1) {
            const _one = _bind[0];
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(1 + v.size | 0, [`${label}: ${_one}`]));
          } else {
            const _first = _bind[0];
            const _x$6 = new _M0TPB9ArrayViewGsE(_bind, 1, _bind.length);
            const _tmp$2 = 1 + v.size | 0;
            const _self = [];
            _M0MPC15array5Array4pushGRPB4JsonE(_self, `${label}: ${_first}`);
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array9ArrayView4iterGsE(_x$6));
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
  const max_depth$2 = max_depth === undefined ? _M0FPC15debug6renderN6constrS1683 : max_depth;
  const info = _M0MPC15debug4Repr11prune__info(r, undefined, max_depth$2);
  return _M0FPC15debug14print__content(_M0MPC15debug7Content8no__wrap(_M0MPC15debug4Repr12render__repr(info, 70)));
}
function _M0IPC15debug4ReprPB4Show6output(self, logger) {
  logger.method_table.method_0(logger.self, _M0FPC15debug6render(self, undefined));
}
function _M0IPC13int3IntPC15debug5Debug8to__repr(self) {
  return _M0MPC15debug4Repr7integer(_M0MPC13int3Int18to__string_2einner(self, 10));
}
function _M0IPC14byte4BytePC15debug5Debug8to__repr(self) {
  return _M0MPC15debug4Repr7literal(`0x${_M0MPC14byte4Byte7to__hex(self)}`);
}
function _M0IPC16string6StringPC15debug5Debug8to__repr(self) {
  return _M0MPC15debug4Repr6string(self);
}
function _M0IPC15bytes9BytesViewPC15debug5Debug8to__repr(self) {
  return _M0MPC15debug4Repr8opaque__("BytesView", _M0MPC15debug4Repr5array(_M0MPC15array5Array3mapGyRPC15debug4ReprE(_M0MPC15bytes9BytesView9to__array(self), (x) => _M0MPC15debug4Repr4ReprGyE(x))));
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
  const view = _M0MPC15bytes5Bytes21clamped__view_2einner(src, src_offset, src_offset + src_length | 0);
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
  return _M0MPC15bytes9BytesView21clamped__view_2einner(bytes, malformed_offset, undefined);
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
function _M0MPC13ref3Ref3RefGORP216zhaojun_2dcoding6thrift6ClientE(x) {
  return new _M0TPC13ref3RefGORP216zhaojun_2dcoding6thrift6ClientE(x);
}
function _M0MPC13ref3Ref3RefGiE(x) {
  return new _M0TPC13ref3RefGiE(x);
}
function _M0IPC15error5ErrorPC15debug5Debug8to__repr(self) {
  return _M0FP15Error8to__repr(self);
}
function _M0FPC16buffer24buffer__growth__capacity(current, len, required) {
  if (required < len) {
    _M0FPC15abort5abortGuE("Buffer capacity overflow");
  }
  const start = current <= 0 ? 1 : current;
  let _tmp = start;
  while (true) {
    const space = _tmp;
    if (space >= required) {
      return space;
    }
    const next = Math.imul(space, 2) | 0;
    if (next <= space) {
      return required;
    }
    _tmp = next;
    continue;
  }
}
function _M0MPC16buffer6Buffer4grow(self, required) {
  const new_capacity = _M0FPC16buffer24buffer__growth__capacity(self.data.length, self.len, required);
  const new_data = _M0MPC15array10FixedArray23make__and__blit_2einnerGyE(self.data, new_capacity, 0, self.len, 0, 0);
  self.data = new_data;
}
function _M0MPC16buffer6Buffer9to__bytes(self) {
  return _M0MPC15bytes5Bytes11from__array(_M0MPC15array10FixedArray21clamped__view_2einnerGyE(self.data, 0, self.len));
}
function _M0MPC16buffer6Buffer14Buffer_2einner(size_hint) {
  const initial = size_hint < 1 ? 1 : size_hint;
  const data = $makebytes(initial, 0);
  return new _M0TPC16buffer6Buffer(data, 0);
}
function _M0MPC16buffer6Buffer16write__bytesview(self, value) {
  const val_len = value.end - value.start | 0;
  const required = self.len + val_len | 0;
  if (required > self.data.length || required < self.len) {
    _M0MPC16buffer6Buffer4grow(self, required);
  }
  _M0MPC15array10FixedArray17blit__from__bytes(self.data, self.len, _M0MPC15bytes9BytesView4data(value), _M0MPC15bytes9BytesView13start__offset(value), value.end - value.start | 0);
  self.len = self.len + val_len | 0;
}
function _M0MPC16buffer6Buffer12write__bytes(self, value) {
  _M0MPC16buffer6Buffer16write__bytesview(self, value);
}
function _M0MPC16buffer6Buffer17write__uint64__be(self, value) {
  if ((self.data.length - self.len | 0) < 8) {
    _M0MPC16buffer6Buffer4grow(self, self.len + 8 | 0);
  }
  const data = self.data;
  const offset = self.len;
  data[offset] = _M0MPC16uint646UInt648to__byte(BigInt.asUintN(64, BigInt.asUintN(64, value) >> BigInt(56 & 63)));
  data[offset + 1 | 0] = _M0MPC16uint646UInt648to__byte(BigInt.asUintN(64, BigInt.asUintN(64, value) >> BigInt(48 & 63)));
  data[offset + 2 | 0] = _M0MPC16uint646UInt648to__byte(BigInt.asUintN(64, BigInt.asUintN(64, value) >> BigInt(40 & 63)));
  data[offset + 3 | 0] = _M0MPC16uint646UInt648to__byte(BigInt.asUintN(64, BigInt.asUintN(64, value) >> BigInt(32 & 63)));
  data[offset + 4 | 0] = _M0MPC16uint646UInt648to__byte(BigInt.asUintN(64, BigInt.asUintN(64, value) >> BigInt(24 & 63)));
  data[offset + 5 | 0] = _M0MPC16uint646UInt648to__byte(BigInt.asUintN(64, BigInt.asUintN(64, value) >> BigInt(16 & 63)));
  data[offset + 6 | 0] = _M0MPC16uint646UInt648to__byte(BigInt.asUintN(64, BigInt.asUintN(64, value) >> BigInt(8 & 63)));
  data[offset + 7 | 0] = _M0MPC16uint646UInt648to__byte(value);
  self.len = self.len + 8 | 0;
}
function _M0MPC16buffer6Buffer17write__uint64__le(self, value) {
  if ((self.data.length - self.len | 0) < 8) {
    _M0MPC16buffer6Buffer4grow(self, self.len + 8 | 0);
  }
  const data = self.data;
  const offset = self.len;
  data[offset] = _M0MPC16uint646UInt648to__byte(value);
  data[offset + 1 | 0] = _M0MPC16uint646UInt648to__byte(BigInt.asUintN(64, BigInt.asUintN(64, value) >> BigInt(8 & 63)));
  data[offset + 2 | 0] = _M0MPC16uint646UInt648to__byte(BigInt.asUintN(64, BigInt.asUintN(64, value) >> BigInt(16 & 63)));
  data[offset + 3 | 0] = _M0MPC16uint646UInt648to__byte(BigInt.asUintN(64, BigInt.asUintN(64, value) >> BigInt(24 & 63)));
  data[offset + 4 | 0] = _M0MPC16uint646UInt648to__byte(BigInt.asUintN(64, BigInt.asUintN(64, value) >> BigInt(32 & 63)));
  data[offset + 5 | 0] = _M0MPC16uint646UInt648to__byte(BigInt.asUintN(64, BigInt.asUintN(64, value) >> BigInt(40 & 63)));
  data[offset + 6 | 0] = _M0MPC16uint646UInt648to__byte(BigInt.asUintN(64, BigInt.asUintN(64, value) >> BigInt(48 & 63)));
  data[offset + 7 | 0] = _M0MPC16uint646UInt648to__byte(BigInt.asUintN(64, BigInt.asUintN(64, value) >> BigInt(56 & 63)));
  self.len = self.len + 8 | 0;
}
function _M0MPC16buffer6Buffer16write__int64__be(self, value) {
  _M0MPC16buffer6Buffer17write__uint64__be(self, value);
}
function _M0MPC16buffer6Buffer15write__uint__be(self, value) {
  if ((self.data.length - self.len | 0) < 4) {
    _M0MPC16buffer6Buffer4grow(self, self.len + 4 | 0);
  }
  const data = self.data;
  const offset = self.len;
  data[offset] = _M0MPC14uint4UInt8to__byte(value >>> 24 | 0);
  data[offset + 1 | 0] = _M0MPC14uint4UInt8to__byte(value >>> 16 | 0);
  data[offset + 2 | 0] = _M0MPC14uint4UInt8to__byte(value >>> 8 | 0);
  data[offset + 3 | 0] = _M0MPC14uint4UInt8to__byte(value);
  self.len = self.len + 4 | 0;
}
function _M0MPC16buffer6Buffer14write__int__be(self, value) {
  _M0MPC16buffer6Buffer15write__uint__be(self, value);
}
function _M0MPC16buffer6Buffer17write__uint16__be(self, value) {
  if ((self.data.length - self.len | 0) < 2) {
    _M0MPC16buffer6Buffer4grow(self, self.len + 2 | 0);
  }
  const data = self.data;
  const offset = self.len;
  data[offset] = value >> 8 & 255;
  data[offset + 1 | 0] = value & 255;
  self.len = self.len + 2 | 0;
}
function _M0MPC16buffer6Buffer16write__int16__be(self, value) {
  _M0MPC16buffer6Buffer17write__uint16__be(self, _M0MPC15int165Int1623reinterpret__as__uint16(value));
}
function _M0MPC16buffer6Buffer17write__double__be(self, value) {
  _M0MPC16buffer6Buffer17write__uint64__be(self, $f64_reinterpret_i64(value));
}
function _M0MPC16buffer6Buffer17write__double__le(self, value) {
  _M0MPC16buffer6Buffer17write__uint64__le(self, $f64_reinterpret_i64(value));
}
function _M0MPC16buffer6Buffer11write__byte(self, value) {
  if (self.len >= self.data.length) {
    _M0MPC16buffer6Buffer4grow(self, self.len + 1 | 0);
  }
  self.data[self.len] = value;
  self.len = self.len + 1 | 0;
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
  const _bind = str.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
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
  _M0IPB13StringBuilderPB6Logger13write__string(buf, _M0MPC15array5Array2atGRPB4JsonE(cache, level));
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
            const element = _M0MPC15array5Array2atGRPB4JsonE(_arr, _i);
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
          const _bind = _M0MPB4Iter4nextGUsRPB4JsonEE(_iterator);
          if (_bind === undefined) {
            depth = depth - 1 | 0;
            _M0MPC15array5Array3popGRPC14json10WriteFrameE(stack);
            if (indent > 0) {
              _M0FPC14json13write__indent(buf, indent_cache, depth, indent);
            }
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 125);
            _tmp = undefined;
            continue;
          } else {
            const _Some = _bind;
            const _x$2 = _Some;
            const _k = _x$2._0;
            const _v = _x$2._1;
            let v2 = _v;
            if (replacer === undefined) {
            } else {
              const _Some$2 = replacer;
              const _replacer = _Some$2;
              const _func = _replacer.f;
              const _bind$2 = _func(_k, _v);
              if (_bind$2 === undefined) {
                _tmp = undefined;
                continue;
              } else {
                const _Some$3 = _bind$2;
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
          if (_M0MPB3Map9is__emptyGsRPB4JsonE(_members)) {
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
function _M0IPC14json4JsonPB6ToJson8to__json(self) {
  return self;
}
function _M0IP216zhaojun_2dcoding6thrift10CodecErrorPC15debug5Debug8to__repr(_x_1284) {
  let _arg_1285;
  _L: {
    const _Invalid = _x_1284;
    const _$42$arg_1285 = _Invalid._0;
    _arg_1285 = _$42$arg_1285;
    break _L;
  }
  return _M0MPC15debug4Repr4ctor("Invalid", [{ _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_1285) }]);
}
function _M0IP216zhaojun_2dcoding6thrift10CodecErrorPC15debug5Debug8to__reprGRP216zhaojun_2dcoding6thrift10CodecErrorE(_x_1284) {
  let _arg_1285;
  _L: {
    const _Invalid = _x_1284;
    const _$42$arg_1285 = _Invalid._0;
    _arg_1285 = _$42$arg_1285;
    break _L;
  }
  return _M0MPC15debug4Repr4ctor("Invalid", [{ _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_1285) }]);
}
function _M0IP216zhaojun_2dcoding6thrift8ProtocolPB2Eq5equal(_x_1272, _x_1273) {
  if (_x_1272 === 0) {
    if (_x_1273 === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    if (_x_1273 === 1) {
      return true;
    } else {
      return false;
    }
  }
}
function _M0IP216zhaojun_2dcoding6thrift5ValuePB2Eq5equal(_x_1065, _x_1066) {
  let _x0_1097;
  let _y0_1098;
  _L: {
    let _x2_1093;
    let _x0_1091;
    let _x1_1092;
    let _y1_1095;
    let _y0_1094;
    let _y2_1096;
    _L$2: {
      let _x1_1088;
      let _x0_1087;
      let _y0_1089;
      let _y1_1090;
      _L$3: {
        let _x1_1084;
        let _x0_1083;
        let _y0_1085;
        let _y1_1086;
        _L$4: {
          let _x0_1081;
          let _y0_1082;
          _L$5: {
            let _x0_1079;
            let _y0_1080;
            _L$6: {
              let _x0_1077;
              let _y0_1078;
              _L$7: {
                let _x0_1075;
                let _y0_1076;
                _L$8: {
                  let _x0_1073;
                  let _y0_1074;
                  _L$9: {
                    let _x0_1071;
                    let _y0_1072;
                    _L$10: {
                      let _x0_1069;
                      let _y0_1070;
                      _L$11: {
                        let _x0_1067;
                        let _y0_1068;
                        _L$12: {
                          switch (_x_1065.$tag) {
                            case 0: {
                              const _Bool = _x_1065;
                              const _$42$x0_1067 = _Bool._0;
                              if (_x_1066.$tag === 0) {
                                const _Bool$2 = _x_1066;
                                const _$42$y0_1068 = _Bool$2._0;
                                _x0_1067 = _$42$x0_1067;
                                _y0_1068 = _$42$y0_1068;
                                break _L$12;
                              } else {
                                return false;
                              }
                            }
                            case 1: {
                              const _Byte = _x_1065;
                              const _$42$x0_1069 = _Byte._0;
                              if (_x_1066.$tag === 1) {
                                const _Byte$2 = _x_1066;
                                const _$42$y0_1070 = _Byte$2._0;
                                _x0_1069 = _$42$x0_1069;
                                _y0_1070 = _$42$y0_1070;
                                break _L$11;
                              } else {
                                return false;
                              }
                            }
                            case 2: {
                              const _I16 = _x_1065;
                              const _$42$x0_1071 = _I16._0;
                              if (_x_1066.$tag === 2) {
                                const _I16$2 = _x_1066;
                                const _$42$y0_1072 = _I16$2._0;
                                _x0_1071 = _$42$x0_1071;
                                _y0_1072 = _$42$y0_1072;
                                break _L$10;
                              } else {
                                return false;
                              }
                            }
                            case 3: {
                              const _I32 = _x_1065;
                              const _$42$x0_1073 = _I32._0;
                              if (_x_1066.$tag === 3) {
                                const _I32$2 = _x_1066;
                                const _$42$y0_1074 = _I32$2._0;
                                _x0_1073 = _$42$x0_1073;
                                _y0_1074 = _$42$y0_1074;
                                break _L$9;
                              } else {
                                return false;
                              }
                            }
                            case 4: {
                              const _I64 = _x_1065;
                              const _$42$x0_1075 = _I64._0;
                              if (_x_1066.$tag === 4) {
                                const _I64$2 = _x_1066;
                                const _$42$y0_1076 = _I64$2._0;
                                _x0_1075 = _$42$x0_1075;
                                _y0_1076 = _$42$y0_1076;
                                break _L$8;
                              } else {
                                return false;
                              }
                            }
                            case 5: {
                              const _Double = _x_1065;
                              const _$42$x0_1077 = _Double._0;
                              if (_x_1066.$tag === 5) {
                                const _Double$2 = _x_1066;
                                const _$42$y0_1078 = _Double$2._0;
                                _x0_1077 = _$42$x0_1077;
                                _y0_1078 = _$42$y0_1078;
                                break _L$7;
                              } else {
                                return false;
                              }
                            }
                            case 6: {
                              const _Binary = _x_1065;
                              const _$42$x0_1079 = _Binary._0;
                              if (_x_1066.$tag === 6) {
                                const _Binary$2 = _x_1066;
                                const _$42$y0_1080 = _Binary$2._0;
                                _x0_1079 = _$42$x0_1079;
                                _y0_1080 = _$42$y0_1080;
                                break _L$6;
                              } else {
                                return false;
                              }
                            }
                            case 7: {
                              const _Struct = _x_1065;
                              const _$42$x0_1081 = _Struct._0;
                              if (_x_1066.$tag === 7) {
                                const _Struct$2 = _x_1066;
                                const _$42$y0_1082 = _Struct$2._0;
                                _x0_1081 = _$42$x0_1081;
                                _y0_1082 = _$42$y0_1082;
                                break _L$5;
                              } else {
                                return false;
                              }
                            }
                            case 8: {
                              const _List = _x_1065;
                              const _$42$x0_1083 = _List._0;
                              const _$42$x1_1084 = _List._1;
                              if (_x_1066.$tag === 8) {
                                const _List$2 = _x_1066;
                                const _$42$y0_1085 = _List$2._0;
                                const _$42$y1_1086 = _List$2._1;
                                _x1_1084 = _$42$x1_1084;
                                _x0_1083 = _$42$x0_1083;
                                _y0_1085 = _$42$y0_1085;
                                _y1_1086 = _$42$y1_1086;
                                break _L$4;
                              } else {
                                return false;
                              }
                            }
                            case 9: {
                              const _SetValue = _x_1065;
                              const _$42$x0_1087 = _SetValue._0;
                              const _$42$x1_1088 = _SetValue._1;
                              if (_x_1066.$tag === 9) {
                                const _SetValue$2 = _x_1066;
                                const _$42$y0_1089 = _SetValue$2._0;
                                const _$42$y1_1090 = _SetValue$2._1;
                                _x1_1088 = _$42$x1_1088;
                                _x0_1087 = _$42$x0_1087;
                                _y0_1089 = _$42$y0_1089;
                                _y1_1090 = _$42$y1_1090;
                                break _L$3;
                              } else {
                                return false;
                              }
                            }
                            case 10: {
                              const _MapValue = _x_1065;
                              const _$42$x0_1091 = _MapValue._0;
                              const _$42$x1_1092 = _MapValue._1;
                              const _$42$x2_1093 = _MapValue._2;
                              if (_x_1066.$tag === 10) {
                                const _MapValue$2 = _x_1066;
                                const _$42$y0_1094 = _MapValue$2._0;
                                const _$42$y1_1095 = _MapValue$2._1;
                                const _$42$y2_1096 = _MapValue$2._2;
                                _x2_1093 = _$42$x2_1093;
                                _x0_1091 = _$42$x0_1091;
                                _x1_1092 = _$42$x1_1092;
                                _y1_1095 = _$42$y1_1095;
                                _y0_1094 = _$42$y0_1094;
                                _y2_1096 = _$42$y2_1096;
                                break _L$2;
                              } else {
                                return false;
                              }
                            }
                            default: {
                              const _Uuid = _x_1065;
                              const _$42$x0_1097 = _Uuid._0;
                              if (_x_1066.$tag === 11) {
                                const _Uuid$2 = _x_1066;
                                const _$42$y0_1098 = _Uuid$2._0;
                                _x0_1097 = _$42$x0_1097;
                                _y0_1098 = _$42$y0_1098;
                                break _L;
                              } else {
                                return false;
                              }
                            }
                          }
                        }
                        return _x0_1067 === _y0_1068;
                      }
                      return _x0_1069 === _y0_1070;
                    }
                    return _x0_1071 === _y0_1072;
                  }
                  return _x0_1073 === _y0_1074;
                }
                return BigInt.asUintN(64, _x0_1075) === BigInt.asUintN(64, _y0_1076);
              }
              return _x0_1077 === _y0_1078;
            }
            return $bytes_equal(_x0_1079, _y0_1080);
          }
          return _M0IPC15array5ArrayPB2Eq5equalGUiRP216zhaojun_2dcoding6thrift5ValueEE(_x0_1081, _y0_1082);
        }
        return _M0IP216zhaojun_2dcoding6thrift4KindPB2Eq5equal(_x0_1083, _y0_1085) && _M0IPC15array5ArrayPB2Eq5equalGRP216zhaojun_2dcoding6thrift5ValueE(_x1_1084, _y1_1086);
      }
      return _M0IP216zhaojun_2dcoding6thrift4KindPB2Eq5equal(_x0_1087, _y0_1089) && _M0IPC15array5ArrayPB2Eq5equalGRP216zhaojun_2dcoding6thrift5ValueE(_x1_1088, _y1_1090);
    }
    return _M0IPC16option6OptionPB2Eq5equalGRP216zhaojun_2dcoding6thrift4KindE(_x0_1091, _y0_1094) && (_M0IPC16option6OptionPB2Eq5equalGRP216zhaojun_2dcoding6thrift4KindE(_x1_1092, _y1_1095) && _M0IPC15array5ArrayPB2Eq5equalGURP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift5ValueEE(_x2_1093, _y2_1096));
  }
  return $bytes_equal(_x0_1097, _y0_1098);
}
function _M0IP216zhaojun_2dcoding6thrift4KindPB2Eq5equal(_x_1059, _x_1060) {
  switch (_x_1059) {
    case 0: {
      if (_x_1060 === 0) {
        return true;
      } else {
        return false;
      }
    }
    case 1: {
      if (_x_1060 === 1) {
        return true;
      } else {
        return false;
      }
    }
    case 2: {
      if (_x_1060 === 2) {
        return true;
      } else {
        return false;
      }
    }
    case 3: {
      if (_x_1060 === 3) {
        return true;
      } else {
        return false;
      }
    }
    case 4: {
      if (_x_1060 === 4) {
        return true;
      } else {
        return false;
      }
    }
    case 5: {
      if (_x_1060 === 5) {
        return true;
      } else {
        return false;
      }
    }
    case 6: {
      if (_x_1060 === 6) {
        return true;
      } else {
        return false;
      }
    }
    case 7: {
      if (_x_1060 === 7) {
        return true;
      } else {
        return false;
      }
    }
    case 8: {
      if (_x_1060 === 8) {
        return true;
      } else {
        return false;
      }
    }
    case 9: {
      if (_x_1060 === 9) {
        return true;
      } else {
        return false;
      }
    }
    case 10: {
      if (_x_1060 === 10) {
        return true;
      } else {
        return false;
      }
    }
    default: {
      if (_x_1060 === 11) {
        return true;
      } else {
        return false;
      }
    }
  }
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
  const _bind = [0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 7, 11];
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const k = _bind[_];
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
  const _bind = 0;
  let _tmp = _bind;
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
  const _bind = payload.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
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
  const _bind = chunk.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
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
          const _bind$2 = self.buffer;
          _M0MPC15array5Array4pushGRPB4JsonE(frames, _M0MPC15bytes5Bytes11from__array(new _M0TPB9ArrayViewGyE(_bind$2, 0, _bind$2.length)));
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
                      const _bind = data$2.length;
                      let _tmp = 0;
                      while (true) {
                        const _ = _tmp;
                        if (_ < _bind) {
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
        const _bind = data.length;
        let _tmp = 0;
        while (true) {
          const _ = _tmp;
          if (_ < _bind) {
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
      const _bind = items.length;
      let _tmp = 0;
      while (true) {
        const _ = _tmp;
        if (_ < _bind) {
          const item = items[_];
          if (_M0IP016_24default__implPB2Eq10not__equalGRP216zhaojun_2dcoding6thrift4KindE(_M0MP216zhaojun_2dcoding6thrift5Value4kind(item), element)) {
            return new _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("heterogeneous list"));
          }
          const _bind$2 = _M0FP216zhaojun_2dcoding6thrift12write__value(out, item, compact, depth + 1 | 0);
          if (_bind$2.$tag === 1) {
            const _ok = _bind$2;
            _ok._0;
          } else {
            return _bind$2;
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
      const _bind = entries.length;
      let _tmp = 0;
      while (true) {
        const _ = _tmp;
        if (_ < _bind) {
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
          const _bind$2 = _M0FP216zhaojun_2dcoding6thrift12write__value(out, key, compact, depth + 1 | 0);
          if (_bind$2.$tag === 1) {
            const _ok = _bind$2;
            _ok._0;
          } else {
            return _bind$2;
          }
          const _bind$3 = _M0FP216zhaojun_2dcoding6thrift12write__value(out, value$2, compact, depth + 1 | 0);
          if (_bind$3.$tag === 1) {
            const _ok = _bind$3;
            _ok._0;
          } else {
            return _bind$3;
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
  const _bind = fields.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
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
        const _bind$2 = _M0FP216zhaojun_2dcoding6thrift12write__value(out, item, compact, depth + 1 | 0);
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          _ok._0;
        } else {
          return _bind$2;
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
  const _bind = message.name;
  const name = _M0FPC28encoding4utf814encode_2einner(new _M0TPC16string10StringView(_bind, 0, _bind.length), false);
  if (name.length > 1024) {
    return new _M0DTPC16result6ResultGzRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("RPC method name exceeds 1024 bytes"));
  }
  const compact = _M0IP216zhaojun_2dcoding6thrift8ProtocolPB2Eq5equal(protocol, 1);
  const out = [];
  if (compact) {
    _M0MPC15array5Array4pushGyE(out, 130);
    _M0MPC15array5Array4pushGyE(out, (message.message_type << 5 | 1) & 255);
    _M0FP216zhaojun_2dcoding6thrift6varint(out, _M0MPC14uint4UInt10to__uint64(message.sequence_id));
    const _bind$2 = _M0FP216zhaojun_2dcoding6thrift12write__value(out, new _M0DTP216zhaojun_2dcoding6thrift5Value6Binary(name), true, 0);
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _ok._0;
    } else {
      return _bind$2;
    }
  } else {
    if (strict_write) {
      _M0FP216zhaojun_2dcoding6thrift5fixed(out, BigInt.asUintN(64, 2147549184n | _M0MPC13int3Int10to__uint64(message.message_type)), 4, false);
      const _bind$2 = _M0FP216zhaojun_2dcoding6thrift12write__value(out, new _M0DTP216zhaojun_2dcoding6thrift5Value6Binary(name), false, 0);
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _ok._0;
      } else {
        return _bind$2;
      }
      _M0FP216zhaojun_2dcoding6thrift5fixed(out, _M0MPC14uint4UInt10to__uint64(message.sequence_id), 4, false);
    } else {
      const _bind$2 = _M0FP216zhaojun_2dcoding6thrift12write__value(out, new _M0DTP216zhaojun_2dcoding6thrift5Value6Binary(name), false, 0);
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _ok._0;
      } else {
        return _bind$2;
      }
      _M0MPC15array5Array4pushGyE(out, message.message_type & 255);
      _M0FP216zhaojun_2dcoding6thrift5fixed(out, _M0MPC14uint4UInt10to__uint64(message.sequence_id), 4, false);
    }
  }
  const _bind$2 = _M0FP216zhaojun_2dcoding6thrift12write__value(out, message.body, compact, 0);
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    _ok._0;
  } else {
    return _bind$2;
  }
  if (out.length > 1048576) {
    return new _M0DTPC16result6ResultGzRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("RPC message exceeds one MiB"));
  }
  return new _M0DTPC16result6ResultGzRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(_M0MPC15bytes5Bytes11from__array(new _M0TPB9ArrayViewGyE(out, 0, out.length)));
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
  const _bind = 0;
  let _tmp = _bind;
  while (true) {
    const i = _tmp;
    if (i < width) {
      const _tmp$2 = n.val;
      const _bind$2 = _M0MP216zhaojun_2dcoding6thrift6Reader4byte(self);
      let _tmp$3;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _tmp$3 = _ok._0;
      } else {
        return _bind$2;
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
  const _bind = 0;
  const _bind$2 = 10;
  let _tmp = _bind;
  while (true) {
    const i = _tmp;
    if (i < _bind$2) {
      const _bind$3 = _M0MP216zhaojun_2dcoding6thrift6Reader4byte(self);
      let b;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        b = _ok._0;
      } else {
        return _bind$3;
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
    const _bind = _M0MP216zhaojun_2dcoding6thrift6Reader6varint(self);
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    return new _M0DTPC16result6ResultGlRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(_M0FP216zhaojun_2dcoding6thrift8unzigzag(_tmp));
  }
  const _bind = _M0MP216zhaojun_2dcoding6thrift6Reader5fixed(self, width, false);
  let n;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    n = _ok._0;
  } else {
    return _bind;
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
        const data = _M0MPC15bytes9BytesView9to__owned(_M0MPC15bytes5Bytes21clamped__view_2einner(self.data, self.pos, self.pos + 16 | 0));
        self.pos = self.pos + 16 | 0;
        return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(new _M0DTP216zhaojun_2dcoding6thrift5Value4Uuid(data));
      }
      case 0: {
        const _bind = _M0MP216zhaojun_2dcoding6thrift6Reader4byte(self);
        let b;
        if (_bind.$tag === 1) {
          const _ok = _bind;
          b = _ok._0;
        } else {
          return _bind;
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
        const _bind$2 = _M0MP216zhaojun_2dcoding6thrift6Reader4byte(self);
        let n;
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          n = _ok._0;
        } else {
          return _bind$2;
        }
        return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(new _M0DTP216zhaojun_2dcoding6thrift5Value4Byte(n > 127 ? n - 256 | 0 : n));
      }
      case 2: {
        const _bind$3 = _M0MP216zhaojun_2dcoding6thrift6Reader6signed(self, 2);
        let n$2;
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          n$2 = _ok._0;
        } else {
          return _bind$3;
        }
        if (BigInt.asIntN(64, n$2) < BigInt.asIntN(64, 18446744073709518848n) || BigInt.asIntN(64, n$2) > BigInt.asIntN(64, 32767n)) {
          return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("i16 overflow"));
        }
        return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(new _M0DTP216zhaojun_2dcoding6thrift5Value3I16(Number(BigInt.asIntN(32, n$2)) | 0));
      }
      case 3: {
        const _bind$4 = _M0MP216zhaojun_2dcoding6thrift6Reader6signed(self, 4);
        let n$3;
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          n$3 = _ok._0;
        } else {
          return _bind$4;
        }
        if (BigInt.asIntN(64, n$3) < BigInt.asIntN(64, 18446744071562067968n) || BigInt.asIntN(64, n$3) > BigInt.asIntN(64, 2147483647n)) {
          return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("i32 overflow"));
        }
        return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(new _M0DTP216zhaojun_2dcoding6thrift5Value3I32(Number(BigInt.asIntN(32, n$3)) | 0));
      }
      case 4: {
        const _bind$5 = _M0MP216zhaojun_2dcoding6thrift6Reader6signed(self, 8);
        let _tmp;
        if (_bind$5.$tag === 1) {
          const _ok = _bind$5;
          _tmp = _ok._0;
        } else {
          return _bind$5;
        }
        return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(new _M0DTP216zhaojun_2dcoding6thrift5Value3I64(_tmp));
      }
      case 5: {
        const _bind$6 = _M0MP216zhaojun_2dcoding6thrift6Reader5fixed(self, 8, self.compact);
        let _tmp$2;
        if (_bind$6.$tag === 1) {
          const _ok = _bind$6;
          _tmp$2 = _ok._0;
        } else {
          return _bind$6;
        }
        return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(new _M0DTP216zhaojun_2dcoding6thrift5Value6Double($i64_reinterpret_f64(_tmp$2)));
      }
      case 6: {
        let n$4;
        if (self.compact) {
          const _bind$7 = _M0MP216zhaojun_2dcoding6thrift6Reader6varint(self);
          if (_bind$7.$tag === 1) {
            const _ok = _bind$7;
            n$4 = _ok._0;
          } else {
            return _bind$7;
          }
        } else {
          const _bind$7 = _M0MP216zhaojun_2dcoding6thrift6Reader5fixed(self, 4, false);
          if (_bind$7.$tag === 1) {
            const _ok = _bind$7;
            n$4 = _ok._0;
          } else {
            return _bind$7;
          }
        }
        if (BigInt.asUintN(64, n$4) > BigInt.asUintN(64, 1048576n) || BigInt.asUintN(64, n$4) > BigInt.asUintN(64, _M0MPC13int3Int10to__uint64(self.data.length - self.pos | 0))) {
          return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("invalid binary length"));
        }
        const value = _M0MPC15bytes9BytesView9to__owned(_M0MPC15bytes5Bytes21clamped__view_2einner(self.data, self.pos, self.pos + (Number(BigInt.asIntN(32, n$4)) | 0) | 0));
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
            const _bind$7 = _M0MP216zhaojun_2dcoding6thrift6Reader6varint(self);
            let n$6;
            if (_bind$7.$tag === 1) {
              const _ok = _bind$7;
              n$6 = _ok._0;
            } else {
              return _bind$7;
            }
            if (BigInt.asUintN(64, n$6) === BigInt.asUintN(64, 0n)) {
              kt = 0;
              vt = 0;
              n$5 = n$6;
              break _L$2;
            } else {
              const _bind$8 = _M0MP216zhaojun_2dcoding6thrift6Reader4byte(self);
              let types;
              if (_bind$8.$tag === 1) {
                const _ok = _bind$8;
                types = _ok._0;
              } else {
                return _bind$8;
              }
              kt = types >> 4;
              vt = types & 15;
              n$5 = n$6;
              break _L$2;
            }
          } else {
            const _bind$7 = _M0MP216zhaojun_2dcoding6thrift6Reader4byte(self);
            let k;
            if (_bind$7.$tag === 1) {
              const _ok = _bind$7;
              k = _ok._0;
            } else {
              return _bind$7;
            }
            const _bind$8 = _M0MP216zhaojun_2dcoding6thrift6Reader4byte(self);
            let v;
            if (_bind$8.$tag === 1) {
              const _ok = _bind$8;
              v = _ok._0;
            } else {
              return _bind$8;
            }
            const _bind$9 = _M0MP216zhaojun_2dcoding6thrift6Reader5fixed(self, 4, false);
            let _tmp$3;
            if (_bind$9.$tag === 1) {
              const _ok = _bind$9;
              _tmp$3 = _ok._0;
            } else {
              return _bind$9;
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
          const _bind$7 = _M0FP216zhaojun_2dcoding6thrift4kind(kt, self.compact);
          if (_bind$7.$tag === 1) {
            const _ok = _bind$7;
            key_kind = _ok._0;
          } else {
            return _bind$7;
          }
        }
        let value_kind;
        if (BigInt.asUintN(64, n$5) === BigInt.asUintN(64, 0n) && vt === 0) {
          value_kind = undefined;
        } else {
          const _bind$7 = _M0FP216zhaojun_2dcoding6thrift4kind(vt, self.compact);
          if (_bind$7.$tag === 1) {
            const _ok = _bind$7;
            value_kind = _ok._0;
          } else {
            return _bind$7;
          }
        }
        const entries = [];
        const _bind$7 = 0;
        const _bind$8 = Number(BigInt.asIntN(32, n$5)) | 0;
        let _tmp$3 = _bind$7;
        while (true) {
          const _ = _tmp$3;
          if (_ < _bind$8) {
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
                const _bind$9 = _M0MP216zhaojun_2dcoding6thrift6Reader5value(self, k, depth + 1 | 0);
                let _tmp$4;
                if (_bind$9.$tag === 1) {
                  const _ok = _bind$9;
                  _tmp$4 = _ok._0;
                } else {
                  return _bind$9;
                }
                const _tmp$5 = _tmp$4;
                const _bind$10 = _M0MP216zhaojun_2dcoding6thrift6Reader5value(self, v, depth + 1 | 0);
                let _tmp$6;
                if (_bind$10.$tag === 1) {
                  const _ok = _bind$10;
                  _tmp$6 = _ok._0;
                } else {
                  return _bind$10;
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
          const _bind$9 = _M0MP216zhaojun_2dcoding6thrift6Reader4byte(self);
          let header;
          if (_bind$9.$tag === 1) {
            const _ok = _bind$9;
            header = _ok._0;
          } else {
            return _bind$9;
          }
          if (header === 0) {
            break;
          }
          const raw = self.compact ? header & 15 : header;
          const _bind$10 = _M0FP216zhaojun_2dcoding6thrift4kind(raw, self.compact);
          let tag$2;
          if (_bind$10.$tag === 1) {
            const _ok = _bind$10;
            tag$2 = _ok._0;
          } else {
            return _bind$10;
          }
          let id;
          if (self.compact) {
            if (header >> 4 > 0) {
              id = previous.val + (header >> 4) | 0;
            } else {
              const _bind$11 = _M0MP216zhaojun_2dcoding6thrift6Reader6varint(self);
              let _tmp$4;
              if (_bind$11.$tag === 1) {
                const _ok = _bind$11;
                _tmp$4 = _ok._0;
              } else {
                return _bind$11;
              }
              const n$6 = _M0FP216zhaojun_2dcoding6thrift8unzigzag(_tmp$4);
              if (BigInt.asIntN(64, n$6) < BigInt.asIntN(64, 18446744073709518848n) || BigInt.asIntN(64, n$6) > BigInt.asIntN(64, 32767n)) {
                return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("field id overflow"));
              }
              id = Number(BigInt.asIntN(32, n$6)) | 0;
            }
          } else {
            const _bind$11 = _M0MP216zhaojun_2dcoding6thrift6Reader6signed(self, 2);
            let _tmp$4;
            if (_bind$11.$tag === 1) {
              const _ok = _bind$11;
              _tmp$4 = _ok._0;
            } else {
              return _bind$11;
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
            const _bind$11 = _M0MP216zhaojun_2dcoding6thrift6Reader5value(self, tag$2, depth + 1 | 0);
            if (_bind$11.$tag === 1) {
              const _ok = _bind$11;
              item = _ok._0;
            } else {
              return _bind$11;
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
  const _bind = _M0MP216zhaojun_2dcoding6thrift6Reader4byte(self);
  let header;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    header = _ok._0;
  } else {
    return _bind;
  }
  const _bind$2 = _M0FP216zhaojun_2dcoding6thrift4kind(self.compact ? header & 15 : header, self.compact);
  let tag$2;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    tag$2 = _ok._0;
  } else {
    return _bind$2;
  }
  let n;
  if (self.compact) {
    if (header >> 4 === 15) {
      const _bind$3 = _M0MP216zhaojun_2dcoding6thrift6Reader6varint(self);
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        n = _ok._0;
      } else {
        return _bind$3;
      }
    } else {
      n = _M0MPC13int3Int10to__uint64(header >> 4);
    }
  } else {
    const _bind$3 = _M0MP216zhaojun_2dcoding6thrift6Reader5fixed(self, 4, false);
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      n = _ok._0;
    } else {
      return _bind$3;
    }
  }
  if (BigInt.asUintN(64, n) > BigInt.asUintN(64, 100000n)) {
    return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("list length exceeds limit"));
  }
  const items = [];
  const _bind$3 = 0;
  const _bind$4 = Number(BigInt.asIntN(32, n)) | 0;
  let _tmp = _bind$3;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$4) {
      const _bind$5 = _M0MP216zhaojun_2dcoding6thrift6Reader5value(self, tag$2, depth + 1 | 0);
      let _tmp$2;
      if (_bind$5.$tag === 1) {
        const _ok = _bind$5;
        _tmp$2 = _ok._0;
      } else {
        return _bind$5;
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
function _M0MP216zhaojun_2dcoding6thrift12MessageCodec3new(encode, decode) {
  return new _M0TP216zhaojun_2dcoding6thrift12MessageCodec(encode, decode);
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
      const _bind = _M0MP216zhaojun_2dcoding6thrift6Reader4byte(reader);
      let _tmp;
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _tmp = _ok._0;
      } else {
        return _bind;
      }
      if (_tmp !== 130) {
        return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift7MessageRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("invalid Compact protocol id"));
      }
      const _bind$2 = _M0MP216zhaojun_2dcoding6thrift6Reader4byte(reader);
      let version_type;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        version_type = _ok._0;
      } else {
        return _bind$2;
      }
      if ((version_type & 31) !== 1) {
        return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift7MessageRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("unsupported Compact version"));
      }
      const message_type$2 = version_type >> 5;
      const _bind$3 = _M0MP216zhaojun_2dcoding6thrift6Reader6varint(reader);
      let seq;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        seq = _ok._0;
      } else {
        return _bind$3;
      }
      if (BigInt.asUintN(64, seq) > BigInt.asUintN(64, 4294967295n)) {
        return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift7MessageRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("sequence id overflow"));
      }
      const sequence_id$2 = Number(BigInt.asUintN(32, seq)) | 0;
      let name_data$2;
      const _bind$4 = _M0MP216zhaojun_2dcoding6thrift6Reader5value(reader, 6, 0);
      let _bind$5;
      if (_bind$4.$tag === 1) {
        const _ok = _bind$4;
        _bind$5 = _ok._0;
      } else {
        return _bind$4;
      }
      if (_bind$5.$tag === 6) {
        const _Binary = _bind$5;
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
      const _bind = _M0MP216zhaojun_2dcoding6thrift6Reader5fixed(reader, 4, false);
      let version_type;
      if (_bind.$tag === 1) {
        const _ok = _bind;
        version_type = _ok._0;
      } else {
        return _bind;
      }
      if (BigInt.asUintN(64, BigInt.asUintN(64, version_type & 2147483648n)) !== BigInt.asUintN(64, 0n)) {
        if (BigInt.asUintN(64, BigInt.asUintN(64, version_type & 4294901760n)) !== BigInt.asUintN(64, 2147549184n)) {
          return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift7MessageRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("unsupported Binary version"));
        }
        const message_type$2 = Number(BigInt.asIntN(32, BigInt.asUintN(64, version_type & 255n))) | 0;
        let name_data$2;
        const _bind$2 = _M0MP216zhaojun_2dcoding6thrift6Reader5value(reader, 6, 0);
        let _bind$3;
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          _bind$3 = _ok._0;
        } else {
          return _bind$2;
        }
        if (_bind$3.$tag === 6) {
          const _Binary = _bind$3;
          const _bytes = _Binary._0;
          name_data$2 = _bytes;
        } else {
          return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift7MessageRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("invalid method name"));
        }
        const _bind$4 = _M0MP216zhaojun_2dcoding6thrift6Reader5fixed(reader, 4, false);
        let _tmp;
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          _tmp = _ok._0;
        } else {
          return _bind$4;
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
        const name_data$2 = _M0MPC15bytes9BytesView9to__owned(_M0MPC15bytes5Bytes21clamped__view_2einner(data, reader.pos, end));
        reader.pos = end;
        const _bind$2 = _M0MP216zhaojun_2dcoding6thrift6Reader4byte(reader);
        let message_type$2;
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          message_type$2 = _ok._0;
        } else {
          return _bind$2;
        }
        const _bind$3 = _M0MP216zhaojun_2dcoding6thrift6Reader5fixed(reader, 4, false);
        let _tmp;
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          _tmp = _ok._0;
        } else {
          return _bind$3;
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
      const _bind = _M0FPC28encoding4utf814decode_2einner(new _M0TPC15bytes9BytesView(name_data, 0, name_data.length), false);
      if (_bind.$tag === 1) {
        const _ok = _bind;
        name = _ok._0;
      } else {
        const _err = _bind;
        _try_err = _err._0;
        break _L$3;
      }
      break _L$2;
    }
    return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift7MessageRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("invalid UTF-8 method name"));
  }
  const _bind = _M0MP216zhaojun_2dcoding6thrift6Reader5value(reader, 7, 0);
  let body;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    body = _ok._0;
  } else {
    return _bind;
  }
  if (reader.pos !== data.length) {
    return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift7MessageRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("trailing RPC bytes"));
  }
  return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift7MessageRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(new _M0TP216zhaojun_2dcoding6thrift7Message(name, message_type, sequence_id, body));
}
function _M0MP216zhaojun_2dcoding6thrift12MessageCodec15builtin_2einner(protocol, strict_read, strict_write) {
  return _M0MP216zhaojun_2dcoding6thrift12MessageCodec3new((message) => _M0FP216zhaojun_2dcoding6thrift23encode__message_2einner(message, protocol, strict_write), (data) => _M0FP216zhaojun_2dcoding6thrift23decode__message_2einner(data, protocol, strict_read));
}
function _M0FP216zhaojun_2dcoding6thrift15check__envelope(message) {
  if (message.message_type < 1 || (message.message_type > 4 || _M0IP016_24default__implPB2Eq10not__equalGRP216zhaojun_2dcoding6thrift4KindE(_M0MP216zhaojun_2dcoding6thrift5Value4kind(message.body), 7))) {
    return new _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("invalid RPC envelope"));
  }
  const _bind = message.name;
  if (_M0FPC28encoding4utf814encode_2einner(new _M0TPC16string10StringView(_bind, 0, _bind.length), false).length > 1024) {
    return new _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("RPC method name exceeds 1024 bytes"));
  } else {
    return new _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(undefined);
  }
}
function _M0MP216zhaojun_2dcoding6thrift12MessageCodec6encode(self, message) {
  const _bind = _M0FP216zhaojun_2dcoding6thrift15check__envelope(message);
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _ok._0;
  } else {
    return _bind;
  }
  const _func = self.encoder;
  const _bind$2 = _func(message);
  let data;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    data = _ok._0;
  } else {
    return _bind$2;
  }
  if (data.length > 1048576) {
    return new _M0DTPC16result6ResultGzRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("RPC message exceeds one MiB"));
  }
  return new _M0DTPC16result6ResultGzRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(data);
}
function _M0MP216zhaojun_2dcoding6thrift12MessageCodec6decode(self, data) {
  if (data.length > 1048576) {
    return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift7MessageRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("RPC message exceeds one MiB"));
  }
  const _func = self.decoder;
  const _bind = _func(data);
  let message;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    message = _ok._0;
  } else {
    return _bind;
  }
  const _bind$2 = _M0FP216zhaojun_2dcoding6thrift15check__envelope(message);
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    _ok._0;
  } else {
    return _bind$2;
  }
  return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift7MessageRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(message);
}
function _M0MP216zhaojun_2dcoding6thrift11FrameStream3new(encode, feed, finish) {
  return new _M0TP216zhaojun_2dcoding6thrift11FrameStream(encode, feed, finish, false, false);
}
function _M0MP216zhaojun_2dcoding6thrift11FrameStream7builtin() {
  const _bind = _M0MP216zhaojun_2dcoding6thrift12FrameDecoder11new_2einner(1048576);
  let d;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    d = _ok._0;
  } else {
    return _bind;
  }
  return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift11FrameStreamRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(_M0MP216zhaojun_2dcoding6thrift11FrameStream3new((payload) => _M0FP216zhaojun_2dcoding6thrift13frame_2einner(payload, 1048576), (chunk) => _M0MP216zhaojun_2dcoding6thrift12FrameDecoder4feed(d, chunk), () => _M0MP216zhaojun_2dcoding6thrift12FrameDecoder6finish(d)));
}
function _M0MP216zhaojun_2dcoding6thrift11FrameStream6encode(self, payload) {
  if (self.failed) {
    return new _M0DTPC16result6ResultGzRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("framed stream is closed"));
  }
  const _func = self.encoder;
  return _func(payload);
}
function _M0MP216zhaojun_2dcoding6thrift11FrameStream4feed(self, chunk) {
  if (self.closed || self.failed) {
    return new _M0DTPC16result6ResultGRPB5ArrayGzERP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("framed stream is closed"));
  }
  let _err;
  _L: {
    if (chunk.length > 16777220) {
      _err = new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("feed exceeds 16 MiB plus header");
      break _L;
    }
    const frames = [];
    const at = new _M0TPB8MutLocalGiE(0);
    while (true) {
      if (at.val < chunk.length) {
        const end = _M0MPC13int3Int3min(at.val + 4096 | 0, chunk.length);
        const _func = self.decoder;
        const _bind = _func(_M0MPC15bytes9BytesView9to__owned(_M0MPC15bytes5Bytes21clamped__view_2einner(chunk, at.val, end)));
        let decoded;
        if (_bind.$tag === 1) {
          const _ok = _bind;
          decoded = _ok._0;
        } else {
          const _err$2 = _bind;
          _err = _err$2._0;
          break _L;
        }
        if (decoded.length > (4096 - frames.length | 0)) {
          _err = new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("more than 4096 frames in one feed");
          break _L;
        }
        const _bind$2 = decoded.length;
        let _tmp = 0;
        while (true) {
          const _ = _tmp;
          if (_ < _bind$2) {
            const payload = decoded[_];
            _M0MPC15array5Array4pushGRPB4JsonE(frames, payload);
            _tmp = _ + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        at.val = end;
        continue;
      } else {
        break;
      }
    }
    return new _M0DTPC16result6ResultGRPB5ArrayGzERP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(frames);
  }
  self.failed = true;
  return new _M0DTPC16result6ResultGRPB5ArrayGzERP216zhaojun_2dcoding6thrift10CodecErrorE3Err(_err);
}
function _M0MP216zhaojun_2dcoding6thrift11FrameStream6finish(self) {
  if (self.closed || self.failed) {
    return new _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("framed stream is closed"));
  }
  self.closed = true;
  let _err;
  _L: {
    const _func = self.eof;
    const _bind = _func();
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _ok._0;
    } else {
      const _err$2 = _bind;
      _err = _err$2._0;
      break _L;
    }
    return new _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(undefined);
  }
  self.failed = true;
  return new _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(_err);
}
function _M0MP216zhaojun_2dcoding6thrift6Client11new_2einner(protocol, strict_read, strict_write, codec, frame_stream) {
  const _tmp = _M0MPC16option6Option16unwrap__or__elseGRP216zhaojun_2dcoding6thrift12MessageCodecE(codec, () => _M0MP216zhaojun_2dcoding6thrift12MessageCodec15builtin_2einner(protocol, strict_read, strict_write));
  const _bind = _M0MPC16option6Option16unwrap__or__elseGRP216zhaojun_2dcoding6thrift11FrameStreamEHRP216zhaojun_2dcoding6thrift10CodecError(frame_stream, () => _M0MP216zhaojun_2dcoding6thrift11FrameStream7builtin());
  let _tmp$2;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _tmp$2 = _ok._0;
  } else {
    return _bind;
  }
  const _tmp$3 = _tmp$2;
  const _bind$2 = [];
  return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift6ClientRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(new _M0TP216zhaojun_2dcoding6thrift6Client(_tmp, _tmp$3, _M0MPB3Map3MapGisE(new _M0TPB9ArrayViewGUisEE(_bind$2, 0, 0), undefined), 0, false, false));
}
function _M0MP216zhaojun_2dcoding6thrift6Client22call__with__id_2einner(self, name, body, oneway, response_name) {
  if (self.failed) {
    return new _M0DTPC16result6ResultGUizERP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("RPC client requires reconnect"));
  }
  if (self.exhausted) {
    return new _M0DTPC16result6ResultGUizERP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("RPC sequence space exhausted; reconnect after draining"));
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
  const _tmp = self.decoder;
  const _tmp$2 = self.codec;
  const _bind = oneway ? 4 : 1;
  const _bind$2 = seq.val;
  const _bind$3 = _M0MP216zhaojun_2dcoding6thrift12MessageCodec6encode(_tmp$2, new _M0TP216zhaojun_2dcoding6thrift7Message(name, _bind, _bind$2, body));
  let _tmp$3;
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    _tmp$3 = _ok._0;
  } else {
    return _bind$3;
  }
  const _bind$4 = _M0MP216zhaojun_2dcoding6thrift11FrameStream6encode(_tmp, _tmp$3);
  let wire;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    wire = _ok._0;
  } else {
    return _bind$4;
  }
  self.next_sequence = (self.next_sequence >>> 0) + (1 >>> 0) | 0;
  if (self.next_sequence === 0) {
    self.exhausted = true;
  }
  if (!oneway) {
    _M0MPB3Map3setGisE(self.pending, seq.val, _M0MPC16option6Option10unwrap__orGsE(response_name, name));
  }
  return new _M0DTPC16result6ResultGUizERP216zhaojun_2dcoding6thrift10CodecErrorE2Ok({ _0: seq.val, _1: wire });
}
function _M0MP216zhaojun_2dcoding6thrift6Client14call__with__id(self, name, body, oneway$46$opt, response_name$46$opt) {
  const oneway = oneway$46$opt === -1 ? false : oneway$46$opt;
  let response_name;
  if (response_name$46$opt.$tag === 1) {
    const _Some = response_name$46$opt;
    response_name = _Some._0;
  } else {
    response_name = undefined;
  }
  return _M0MP216zhaojun_2dcoding6thrift6Client22call__with__id_2einner(self, name, body, oneway, response_name);
}
function _M0MP216zhaojun_2dcoding6thrift6Client12call_2einner(self, name, body, oneway) {
  const _bind = _M0MP216zhaojun_2dcoding6thrift6Client14call__with__id(self, name, body, oneway, _M0DTPC16option6OptionGOsE4None__);
  let _tmp;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _tmp = _ok._0;
  } else {
    return _bind;
  }
  return new _M0DTPC16result6ResultGzRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(_tmp._1);
}
function _M0MP216zhaojun_2dcoding6thrift6Client4feed(self, chunk) {
  if (self.failed) {
    return new _M0DTPC16result6ResultGRPB5ArrayGRP216zhaojun_2dcoding6thrift7MessageERP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("RPC client requires reconnect"));
  }
  let _err;
  _L: {
    const out = [];
    const _bind = [];
    const matched = _M0MPB3Map3MapGibE(new _M0TPB9ArrayViewGUibEE(_bind, 0, 0), undefined);
    const _bind$2 = _M0MP216zhaojun_2dcoding6thrift11FrameStream4feed(self.decoder, chunk);
    let _bind$3;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _bind$3 = _ok._0;
    } else {
      const _err$2 = _bind$2;
      _err = _err$2._0;
      break _L;
    }
    const _bind$4 = _bind$3.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind$4) {
        const payload = _bind$3[_];
        const _bind$5 = _M0MP216zhaojun_2dcoding6thrift12MessageCodec6decode(self.codec, payload);
        let response;
        if (_bind$5.$tag === 1) {
          const _ok = _bind$5;
          response = _ok._0;
        } else {
          const _err$2 = _bind$5;
          _err = _err$2._0;
          break _L;
        }
        if (response.message_type !== 2 && response.message_type !== 3) {
          _err = new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("expected reply or application exception");
          break _L;
        }
        if (_M0MPB3Map8containsGibE(matched, response.sequence_id)) {
          _err = new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("repeated RPC sequence in one response chunk");
          break _L;
        }
        let name;
        _L$2: {
          const _bind$6 = _M0MPB3Map3getGisE(self.pending, response.sequence_id);
          if (_bind$6 === undefined) {
            _err = new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("unknown or repeated RPC sequence id");
            break _L;
          } else {
            const _Some = _bind$6;
            const _name = _Some;
            name = _name;
            break _L$2;
          }
        }
        if (_M0IP016_24default__implPB2Eq10not__equalGsE(name, response.name)) {
          _err = new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("RPC method mismatch");
          break _L;
        }
        _M0MPB3Map3setGibE(matched, response.sequence_id, true);
        _M0MPC15array5Array4pushGRPB4JsonE(out, response);
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const _it = _M0MPB3Map5iter2GibE(matched);
    while (true) {
      let id;
      _L$2: {
        const _bind$5 = _M0MPB5Iter24nextGibE(_it);
        if (_bind$5 === undefined) {
          break;
        } else {
          const _Some = _bind$5;
          const _x = _Some;
          const _id = _x._0;
          id = _id;
          break _L$2;
        }
      }
      _M0MPB3Map6removeGisE(self.pending, id);
      continue;
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
    self.failed = true;
    const _bind = _M0MP216zhaojun_2dcoding6thrift11FrameStream6finish(self.decoder);
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _ok._0;
    } else {
      const _err$2 = _bind;
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
function _M0IP35Xpeng10moonthrift8protocol8WireTypePC15debug5Debug8to__repr(_x_490) {
  switch (_x_490) {
    case 0: {
      return _M0MPC15debug4Repr4ctor("Stop", []);
    }
    case 1: {
      return _M0MPC15debug4Repr4ctor("Bool", []);
    }
    case 2: {
      return _M0MPC15debug4Repr4ctor("Byte", []);
    }
    case 3: {
      return _M0MPC15debug4Repr4ctor("Double", []);
    }
    case 4: {
      return _M0MPC15debug4Repr4ctor("I16", []);
    }
    case 5: {
      return _M0MPC15debug4Repr4ctor("I32", []);
    }
    case 6: {
      return _M0MPC15debug4Repr4ctor("I64", []);
    }
    case 7: {
      return _M0MPC15debug4Repr4ctor("Binary", []);
    }
    case 8: {
      return _M0MPC15debug4Repr4ctor("Struct", []);
    }
    case 9: {
      return _M0MPC15debug4Repr4ctor("Map", []);
    }
    case 10: {
      return _M0MPC15debug4Repr4ctor("Set", []);
    }
    default: {
      return _M0MPC15debug4Repr4ctor("List", []);
    }
  }
}
function _M0IP35Xpeng10moonthrift8protocol8WireTypePB2Eq5equal(_x_486, _x_487) {
  switch (_x_486) {
    case 0: {
      if (_x_487 === 0) {
        return true;
      } else {
        return false;
      }
    }
    case 1: {
      if (_x_487 === 1) {
        return true;
      } else {
        return false;
      }
    }
    case 2: {
      if (_x_487 === 2) {
        return true;
      } else {
        return false;
      }
    }
    case 3: {
      if (_x_487 === 3) {
        return true;
      } else {
        return false;
      }
    }
    case 4: {
      if (_x_487 === 4) {
        return true;
      } else {
        return false;
      }
    }
    case 5: {
      if (_x_487 === 5) {
        return true;
      } else {
        return false;
      }
    }
    case 6: {
      if (_x_487 === 6) {
        return true;
      } else {
        return false;
      }
    }
    case 7: {
      if (_x_487 === 7) {
        return true;
      } else {
        return false;
      }
    }
    case 8: {
      if (_x_487 === 8) {
        return true;
      } else {
        return false;
      }
    }
    case 9: {
      if (_x_487 === 9) {
        return true;
      } else {
        return false;
      }
    }
    case 10: {
      if (_x_487 === 10) {
        return true;
      } else {
        return false;
      }
    }
    default: {
      if (_x_487 === 11) {
        return true;
      } else {
        return false;
      }
    }
  }
}
function _M0IP35Xpeng10moonthrift8protocol13ProtocolErrorPC15debug5Debug8to__repr(_x_328) {
  let _arg_348;
  let _arg_347;
  let _arg_349;
  _L: {
    let _arg_345;
    let _arg_346;
    _L$2: {
      let _arg_344;
      _L$3: {
        let _arg_342;
        let _arg_343;
        _L$4: {
          let _arg_341;
          _L$5: {
            let _arg_340;
            _L$6: {
              let _arg_338;
              let _arg_339;
              _L$7: {
                let _arg_336;
                let _arg_335;
                let _arg_337;
                _L$8: {
                  let _arg_334;
                  _L$9: {
                    let _arg_332;
                    let _arg_333;
                    _L$10: {
                      let _arg_331;
                      _L$11: {
                        let _arg_329;
                        let _arg_330;
                        _L$12: {
                          switch (_x_328.$tag) {
                            case 12: {
                              const _UnexpectedEof = _x_328;
                              const _$42$arg_329 = _UnexpectedEof._0;
                              const _$42$arg_330 = _UnexpectedEof._1;
                              _arg_329 = _$42$arg_329;
                              _arg_330 = _$42$arg_330;
                              break _L$12;
                            }
                            case 11: {
                              const _InvalidType = _x_328;
                              const _$42$arg_331 = _InvalidType._0;
                              _arg_331 = _$42$arg_331;
                              break _L$11;
                            }
                            case 10: {
                              const _TypeMismatch = _x_328;
                              const _$42$arg_332 = _TypeMismatch._0;
                              const _$42$arg_333 = _TypeMismatch._1;
                              _arg_332 = _$42$arg_332;
                              _arg_333 = _$42$arg_333;
                              break _L$10;
                            }
                            case 9: {
                              const _NegativeSize = _x_328;
                              const _$42$arg_334 = _NegativeSize._0;
                              _arg_334 = _$42$arg_334;
                              break _L$9;
                            }
                            case 8: {
                              const _LimitExceeded = _x_328;
                              const _$42$arg_335 = _LimitExceeded._0;
                              const _$42$arg_336 = _LimitExceeded._1;
                              const _$42$arg_337 = _LimitExceeded._2;
                              _arg_336 = _$42$arg_336;
                              _arg_335 = _$42$arg_335;
                              _arg_337 = _$42$arg_337;
                              break _L$8;
                            }
                            case 7: {
                              const _TrailingData = _x_328;
                              const _$42$arg_338 = _TrailingData._0;
                              const _$42$arg_339 = _TrailingData._1;
                              _arg_338 = _$42$arg_338;
                              _arg_339 = _$42$arg_339;
                              break _L$7;
                            }
                            case 6: {
                              const _InvalidCompact = _x_328;
                              const _$42$arg_340 = _InvalidCompact._0;
                              _arg_340 = _$42$arg_340;
                              break _L$6;
                            }
                            case 5: {
                              const _InvalidMessage = _x_328;
                              const _$42$arg_341 = _InvalidMessage._0;
                              _arg_341 = _$42$arg_341;
                              break _L$5;
                            }
                            case 4: {
                              const _ApplicationException = _x_328;
                              const _$42$arg_342 = _ApplicationException._0;
                              const _$42$arg_343 = _ApplicationException._1;
                              _arg_342 = _$42$arg_342;
                              _arg_343 = _$42$arg_343;
                              break _L$4;
                            }
                            case 3: {
                              const _InvalidValue = _x_328;
                              const _$42$arg_344 = _InvalidValue._0;
                              _arg_344 = _$42$arg_344;
                              break _L$3;
                            }
                            case 2: {
                              const _InvalidEnum = _x_328;
                              const _$42$arg_345 = _InvalidEnum._0;
                              const _$42$arg_346 = _InvalidEnum._1;
                              _arg_345 = _$42$arg_345;
                              _arg_346 = _$42$arg_346;
                              break _L$2;
                            }
                            default: {
                              const _MissingRequiredField = _x_328;
                              const _$42$arg_347 = _MissingRequiredField._0;
                              const _$42$arg_348 = _MissingRequiredField._1;
                              const _$42$arg_349 = _MissingRequiredField._2;
                              _arg_348 = _$42$arg_348;
                              _arg_347 = _$42$arg_347;
                              _arg_349 = _$42$arg_349;
                              break _L;
                            }
                          }
                        }
                        return _M0MPC15debug4Repr4ctor("UnexpectedEof", [{ _0: "offset", _1: _M0IPC13int3IntPC15debug5Debug8to__repr(_arg_329) }, { _0: "needed", _1: _M0IPC13int3IntPC15debug5Debug8to__repr(_arg_330) }]);
                      }
                      return _M0MPC15debug4Repr4ctor("InvalidType", [{ _0: undefined, _1: _M0IPC14byte4BytePC15debug5Debug8to__repr(_arg_331) }]);
                    }
                    return _M0MPC15debug4Repr4ctor("TypeMismatch", [{ _0: "expected", _1: _M0IP35Xpeng10moonthrift8protocol8WireTypePC15debug5Debug8to__repr(_arg_332) }, { _0: "actual", _1: _M0IP35Xpeng10moonthrift8protocol8WireTypePC15debug5Debug8to__repr(_arg_333) }]);
                  }
                  return _M0MPC15debug4Repr4ctor("NegativeSize", [{ _0: undefined, _1: _M0IPC13int3IntPC15debug5Debug8to__repr(_arg_334) }]);
                }
                return _M0MPC15debug4Repr4ctor("LimitExceeded", [{ _0: "kind", _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_335) }, { _0: "limit", _1: _M0IPC13int3IntPC15debug5Debug8to__repr(_arg_336) }, { _0: "actual", _1: _M0IPC13int3IntPC15debug5Debug8to__repr(_arg_337) }]);
              }
              return _M0MPC15debug4Repr4ctor("TrailingData", [{ _0: "offset", _1: _M0IPC13int3IntPC15debug5Debug8to__repr(_arg_338) }, { _0: "remaining", _1: _M0IPC13int3IntPC15debug5Debug8to__repr(_arg_339) }]);
            }
            return _M0MPC15debug4Repr4ctor("InvalidCompact", [{ _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_340) }]);
          }
          return _M0MPC15debug4Repr4ctor("InvalidMessage", [{ _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_341) }]);
        }
        return _M0MPC15debug4Repr4ctor("ApplicationException", [{ _0: "message", _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_342) }, { _0: "type_code", _1: _M0IPC13int3IntPC15debug5Debug8to__repr(_arg_343) }]);
      }
      return _M0MPC15debug4Repr4ctor("InvalidValue", [{ _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_344) }]);
    }
    return _M0MPC15debug4Repr4ctor("InvalidEnum", [{ _0: "type_name", _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_345) }, { _0: "value", _1: _M0IPC13int3IntPC15debug5Debug8to__repr(_arg_346) }]);
  }
  return _M0MPC15debug4Repr4ctor("MissingRequiredField", [{ _0: "type_name", _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_347) }, { _0: "field_id", _1: _M0IPC13int3IntPC15debug5Debug8to__repr(_arg_348) }, { _0: "field_name", _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_349) }]);
}
function _M0IP35Xpeng10moonthrift8protocol13ProtocolErrorPC15debug5Debug8to__reprGRP35Xpeng10moonthrift8protocol13ProtocolErrorE(_x_328) {
  let _arg_348;
  let _arg_347;
  let _arg_349;
  _L: {
    let _arg_345;
    let _arg_346;
    _L$2: {
      let _arg_344;
      _L$3: {
        let _arg_342;
        let _arg_343;
        _L$4: {
          let _arg_341;
          _L$5: {
            let _arg_340;
            _L$6: {
              let _arg_338;
              let _arg_339;
              _L$7: {
                let _arg_336;
                let _arg_335;
                let _arg_337;
                _L$8: {
                  let _arg_334;
                  _L$9: {
                    let _arg_332;
                    let _arg_333;
                    _L$10: {
                      let _arg_331;
                      _L$11: {
                        let _arg_329;
                        let _arg_330;
                        _L$12: {
                          switch (_x_328.$tag) {
                            case 12: {
                              const _UnexpectedEof = _x_328;
                              const _$42$arg_329 = _UnexpectedEof._0;
                              const _$42$arg_330 = _UnexpectedEof._1;
                              _arg_329 = _$42$arg_329;
                              _arg_330 = _$42$arg_330;
                              break _L$12;
                            }
                            case 11: {
                              const _InvalidType = _x_328;
                              const _$42$arg_331 = _InvalidType._0;
                              _arg_331 = _$42$arg_331;
                              break _L$11;
                            }
                            case 10: {
                              const _TypeMismatch = _x_328;
                              const _$42$arg_332 = _TypeMismatch._0;
                              const _$42$arg_333 = _TypeMismatch._1;
                              _arg_332 = _$42$arg_332;
                              _arg_333 = _$42$arg_333;
                              break _L$10;
                            }
                            case 9: {
                              const _NegativeSize = _x_328;
                              const _$42$arg_334 = _NegativeSize._0;
                              _arg_334 = _$42$arg_334;
                              break _L$9;
                            }
                            case 8: {
                              const _LimitExceeded = _x_328;
                              const _$42$arg_335 = _LimitExceeded._0;
                              const _$42$arg_336 = _LimitExceeded._1;
                              const _$42$arg_337 = _LimitExceeded._2;
                              _arg_336 = _$42$arg_336;
                              _arg_335 = _$42$arg_335;
                              _arg_337 = _$42$arg_337;
                              break _L$8;
                            }
                            case 7: {
                              const _TrailingData = _x_328;
                              const _$42$arg_338 = _TrailingData._0;
                              const _$42$arg_339 = _TrailingData._1;
                              _arg_338 = _$42$arg_338;
                              _arg_339 = _$42$arg_339;
                              break _L$7;
                            }
                            case 6: {
                              const _InvalidCompact = _x_328;
                              const _$42$arg_340 = _InvalidCompact._0;
                              _arg_340 = _$42$arg_340;
                              break _L$6;
                            }
                            case 5: {
                              const _InvalidMessage = _x_328;
                              const _$42$arg_341 = _InvalidMessage._0;
                              _arg_341 = _$42$arg_341;
                              break _L$5;
                            }
                            case 4: {
                              const _ApplicationException = _x_328;
                              const _$42$arg_342 = _ApplicationException._0;
                              const _$42$arg_343 = _ApplicationException._1;
                              _arg_342 = _$42$arg_342;
                              _arg_343 = _$42$arg_343;
                              break _L$4;
                            }
                            case 3: {
                              const _InvalidValue = _x_328;
                              const _$42$arg_344 = _InvalidValue._0;
                              _arg_344 = _$42$arg_344;
                              break _L$3;
                            }
                            case 2: {
                              const _InvalidEnum = _x_328;
                              const _$42$arg_345 = _InvalidEnum._0;
                              const _$42$arg_346 = _InvalidEnum._1;
                              _arg_345 = _$42$arg_345;
                              _arg_346 = _$42$arg_346;
                              break _L$2;
                            }
                            default: {
                              const _MissingRequiredField = _x_328;
                              const _$42$arg_347 = _MissingRequiredField._0;
                              const _$42$arg_348 = _MissingRequiredField._1;
                              const _$42$arg_349 = _MissingRequiredField._2;
                              _arg_348 = _$42$arg_348;
                              _arg_347 = _$42$arg_347;
                              _arg_349 = _$42$arg_349;
                              break _L;
                            }
                          }
                        }
                        return _M0MPC15debug4Repr4ctor("UnexpectedEof", [{ _0: "offset", _1: _M0IPC13int3IntPC15debug5Debug8to__repr(_arg_329) }, { _0: "needed", _1: _M0IPC13int3IntPC15debug5Debug8to__repr(_arg_330) }]);
                      }
                      return _M0MPC15debug4Repr4ctor("InvalidType", [{ _0: undefined, _1: _M0IPC14byte4BytePC15debug5Debug8to__repr(_arg_331) }]);
                    }
                    return _M0MPC15debug4Repr4ctor("TypeMismatch", [{ _0: "expected", _1: _M0IP35Xpeng10moonthrift8protocol8WireTypePC15debug5Debug8to__repr(_arg_332) }, { _0: "actual", _1: _M0IP35Xpeng10moonthrift8protocol8WireTypePC15debug5Debug8to__repr(_arg_333) }]);
                  }
                  return _M0MPC15debug4Repr4ctor("NegativeSize", [{ _0: undefined, _1: _M0IPC13int3IntPC15debug5Debug8to__repr(_arg_334) }]);
                }
                return _M0MPC15debug4Repr4ctor("LimitExceeded", [{ _0: "kind", _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_335) }, { _0: "limit", _1: _M0IPC13int3IntPC15debug5Debug8to__repr(_arg_336) }, { _0: "actual", _1: _M0IPC13int3IntPC15debug5Debug8to__repr(_arg_337) }]);
              }
              return _M0MPC15debug4Repr4ctor("TrailingData", [{ _0: "offset", _1: _M0IPC13int3IntPC15debug5Debug8to__repr(_arg_338) }, { _0: "remaining", _1: _M0IPC13int3IntPC15debug5Debug8to__repr(_arg_339) }]);
            }
            return _M0MPC15debug4Repr4ctor("InvalidCompact", [{ _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_340) }]);
          }
          return _M0MPC15debug4Repr4ctor("InvalidMessage", [{ _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_341) }]);
        }
        return _M0MPC15debug4Repr4ctor("ApplicationException", [{ _0: "message", _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_342) }, { _0: "type_code", _1: _M0IPC13int3IntPC15debug5Debug8to__repr(_arg_343) }]);
      }
      return _M0MPC15debug4Repr4ctor("InvalidValue", [{ _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_344) }]);
    }
    return _M0MPC15debug4Repr4ctor("InvalidEnum", [{ _0: "type_name", _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_345) }, { _0: "value", _1: _M0IPC13int3IntPC15debug5Debug8to__repr(_arg_346) }]);
  }
  return _M0MPC15debug4Repr4ctor("MissingRequiredField", [{ _0: "type_name", _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_347) }, { _0: "field_id", _1: _M0IPC13int3IntPC15debug5Debug8to__repr(_arg_348) }, { _0: "field_name", _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_349) }]);
}
function _M0MP35Xpeng10moonthrift8protocol8WireType10binary__id(self) {
  switch (self) {
    case 0: {
      return 0;
    }
    case 1: {
      return 2;
    }
    case 2: {
      return 3;
    }
    case 3: {
      return 4;
    }
    case 4: {
      return 6;
    }
    case 5: {
      return 8;
    }
    case 6: {
      return 10;
    }
    case 7: {
      return 11;
    }
    case 8: {
      return 12;
    }
    case 9: {
      return 13;
    }
    case 10: {
      return 14;
    }
    default: {
      return 15;
    }
  }
}
function _M0MP35Xpeng10moonthrift8protocol8WireType16from__binary__id(id) {
  let value;
  _L: {
    switch (id) {
      case 0: {
        return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol8WireTypeRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(0);
      }
      case 2: {
        return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol8WireTypeRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(1);
      }
      case 3: {
        return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol8WireTypeRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(2);
      }
      case 4: {
        return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol8WireTypeRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(3);
      }
      case 6: {
        return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol8WireTypeRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(4);
      }
      case 8: {
        return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol8WireTypeRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(5);
      }
      case 10: {
        return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol8WireTypeRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(6);
      }
      case 11: {
        return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol8WireTypeRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(7);
      }
      case 12: {
        return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol8WireTypeRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(8);
      }
      case 13: {
        return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol8WireTypeRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(9);
      }
      case 14: {
        return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol8WireTypeRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(10);
      }
      case 15: {
        return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol8WireTypeRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(11);
      }
      default: {
        value = id;
        break _L;
      }
    }
  }
  return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol8WireTypeRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err(new _M0DTPC15error5Error59Xpeng_2fmoonthrift_2fprotocol_2eProtocolError_2eInvalidType(value));
}
function _M0MP35Xpeng10moonthrift8protocol11MessageType2id(self) {
  switch (self) {
    case 0: {
      return 1;
    }
    case 1: {
      return 2;
    }
    case 2: {
      return 3;
    }
    default: {
      return 4;
    }
  }
}
function _M0MP35Xpeng10moonthrift8protocol11MessageType8from__id(id) {
  switch (id) {
    case 1: {
      return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol11MessageTypeRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(0);
    }
    case 2: {
      return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol11MessageTypeRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(1);
    }
    case 3: {
      return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol11MessageTypeRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(2);
    }
    case 4: {
      return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol11MessageTypeRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(3);
    }
    default: {
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(21);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "unknown message type ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, id);
      return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol11MessageTypeRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err(new _M0DTPC15error5Error62Xpeng_2fmoonthrift_2fprotocol_2eProtocolError_2eInvalidMessage(_M0MPB13StringBuilder10to__string(_string_builder)));
    }
  }
}
function _M0MP35Xpeng10moonthrift8protocol5Value10wire__type(self) {
  switch (self.$tag) {
    case 0: {
      return 1;
    }
    case 1: {
      return 2;
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
      return 3;
    }
    case 6: {
      return 7;
    }
    case 7: {
      return 8;
    }
    case 8: {
      return 9;
    }
    case 9: {
      return 10;
    }
    default: {
      return 11;
    }
  }
}
function _M0MP35Xpeng10moonthrift8protocol5Value12require__i64(self) {
  let value;
  _L: {
    let value$2;
    _L$2: {
      if (self.$tag === 4) {
        const _I64Value = self;
        const _value = _I64Value._0;
        value$2 = _value;
        break _L$2;
      } else {
        value = self;
        break _L;
      }
    }
    return new _M0DTPC16result6ResultGlRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(value$2);
  }
  return new _M0DTPC16result6ResultGlRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err(new _M0DTPC15error5Error60Xpeng_2fmoonthrift_2fprotocol_2eProtocolError_2eTypeMismatch(6, _M0MP35Xpeng10moonthrift8protocol5Value10wire__type(value)));
}
function _M0MP35Xpeng10moonthrift8protocol5Value15require__struct(self) {
  let value;
  _L: {
    let fields;
    _L$2: {
      if (self.$tag === 7) {
        const _StructValue = self;
        const _fields = _StructValue._0;
        fields = _fields;
        break _L$2;
      } else {
        value = self;
        break _L;
      }
    }
    return new _M0DTPC16result6ResultGRPB5ArrayGRP35Xpeng10moonthrift8protocol10FieldValueERP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(fields);
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGRP35Xpeng10moonthrift8protocol10FieldValueERP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err(new _M0DTPC15error5Error60Xpeng_2fmoonthrift_2fprotocol_2eProtocolError_2eTypeMismatch(8, _M0MP35Xpeng10moonthrift8protocol5Value10wire__type(value)));
}
function _M0FP35Xpeng10moonthrift8protocol12decode__utf8(bytes) {
  let _try_err;
  _L: {
    const _bind = _M0FPC28encoding4utf814decode_2einner(new _M0TPC15bytes9BytesView(bytes, 0, bytes.length), false);
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      const _err = _bind;
      _try_err = _err._0;
      break _L;
    }
    return new _M0DTPC16result6ResultGsRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(_tmp);
  }
  return new _M0DTPC16result6ResultGsRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err(new _M0DTPC15error5Error62Xpeng_2fmoonthrift_2fprotocol_2eProtocolError_2eInvalidMessage("message name is not valid UTF-8"));
}
function _M0FP35Xpeng10moonthrift8protocol12write__value(buffer, value) {
  let element_type;
  let values;
  _L: {
    let value_type;
    let key_type;
    let entries;
    _L$2: {
      let fields;
      _L$3: {
        let value$2;
        _L$4: {
          let value$3;
          _L$5: {
            let value$4;
            _L$6: {
              let value$5;
              _L$7: {
                let value$6;
                _L$8: {
                  let value$7;
                  _L$9: {
                    let value$8;
                    _L$10: {
                      switch (value.$tag) {
                        case 0: {
                          const _BoolValue = value;
                          const _value = _BoolValue._0;
                          value$8 = _value;
                          break _L$10;
                        }
                        case 1: {
                          const _ByteValue = value;
                          const _value$2 = _ByteValue._0;
                          value$7 = _value$2;
                          break _L$9;
                        }
                        case 2: {
                          const _I16Value = value;
                          const _value$3 = _I16Value._0;
                          value$6 = _value$3;
                          break _L$8;
                        }
                        case 3: {
                          const _I32Value = value;
                          const _value$4 = _I32Value._0;
                          value$5 = _value$4;
                          break _L$7;
                        }
                        case 4: {
                          const _I64Value = value;
                          const _value$5 = _I64Value._0;
                          value$4 = _value$5;
                          break _L$6;
                        }
                        case 5: {
                          const _DoubleValue = value;
                          const _value$6 = _DoubleValue._0;
                          value$3 = _value$6;
                          break _L$5;
                        }
                        case 6: {
                          const _BinaryValue = value;
                          const _value$7 = _BinaryValue._0;
                          value$2 = _value$7;
                          break _L$4;
                        }
                        case 7: {
                          const _StructValue = value;
                          const _fields = _StructValue._0;
                          fields = _fields;
                          break _L$3;
                        }
                        case 8: {
                          const _MapValue = value;
                          const _key_type = _MapValue._0;
                          const _value_type = _MapValue._1;
                          const _entries = _MapValue._2;
                          value_type = _value_type;
                          key_type = _key_type;
                          entries = _entries;
                          break _L$2;
                        }
                        case 9: {
                          const _SetValue = value;
                          const _element_type = _SetValue._0;
                          const _values = _SetValue._1;
                          element_type = _element_type;
                          values = _values;
                          break _L;
                        }
                        default: {
                          const _ListValue = value;
                          const _element_type$2 = _ListValue._0;
                          const _values$2 = _ListValue._1;
                          element_type = _element_type$2;
                          values = _values$2;
                          break _L;
                        }
                      }
                    }
                    return new _M0DTPC16result6ResultGuRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(_M0MPC16buffer6Buffer11write__byte(buffer, value$8 ? 1 : 0));
                  }
                  return new _M0DTPC16result6ResultGuRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(_M0MPC16buffer6Buffer11write__byte(buffer, value$7 & 255));
                }
                return new _M0DTPC16result6ResultGuRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(_M0MPC16buffer6Buffer16write__int16__be(buffer, value$6 & 65535));
              }
              return new _M0DTPC16result6ResultGuRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(_M0MPC16buffer6Buffer14write__int__be(buffer, value$5));
            }
            return new _M0DTPC16result6ResultGuRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(_M0MPC16buffer6Buffer16write__int64__be(buffer, value$4));
          }
          return new _M0DTPC16result6ResultGuRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(_M0MPC16buffer6Buffer17write__double__be(buffer, value$3));
        }
        _M0MPC16buffer6Buffer14write__int__be(buffer, value$2.length);
        return new _M0DTPC16result6ResultGuRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(_M0MPC16buffer6Buffer12write__bytes(buffer, new _M0TPC15bytes9BytesView(value$2, 0, value$2.length)));
      }
      const _bind = fields.length;
      let _tmp = 0;
      while (true) {
        const _ = _tmp;
        if (_ < _bind) {
          const field = fields[_];
          _M0MPC16buffer6Buffer11write__byte(buffer, _M0MP35Xpeng10moonthrift8protocol8WireType10binary__id(_M0MP35Xpeng10moonthrift8protocol5Value10wire__type(field.value)));
          _M0MPC16buffer6Buffer16write__int16__be(buffer, field.id & 65535);
          const _bind$2 = _M0FP35Xpeng10moonthrift8protocol12write__value(buffer, field.value);
          if (_bind$2.$tag === 1) {
            const _ok = _bind$2;
            _ok._0;
          } else {
            return _bind$2;
          }
          _tmp = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return new _M0DTPC16result6ResultGuRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(_M0MPC16buffer6Buffer11write__byte(buffer, _M0MP35Xpeng10moonthrift8protocol8WireType10binary__id(0)));
    }
    _M0MPC16buffer6Buffer11write__byte(buffer, _M0MP35Xpeng10moonthrift8protocol8WireType10binary__id(key_type));
    _M0MPC16buffer6Buffer11write__byte(buffer, _M0MP35Xpeng10moonthrift8protocol8WireType10binary__id(value_type));
    _M0MPC16buffer6Buffer14write__int__be(buffer, entries.length);
    const _bind = entries.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind) {
        const entry = entries[_];
        let key;
        let entry_value;
        _L$3: {
          const _key = entry._0;
          const _entry_value = entry._1;
          key = _key;
          entry_value = _entry_value;
          break _L$3;
        }
        const _bind$2 = _M0FP35Xpeng10moonthrift8protocol20write__type__checked(buffer, key_type, key);
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          _ok._0;
        } else {
          return _bind$2;
        }
        const _bind$3 = _M0FP35Xpeng10moonthrift8protocol20write__type__checked(buffer, value_type, entry_value);
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          _ok._0;
        } else {
          return _bind$3;
        }
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return new _M0DTPC16result6ResultGuRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(undefined);
  }
  _M0MPC16buffer6Buffer11write__byte(buffer, _M0MP35Xpeng10moonthrift8protocol8WireType10binary__id(element_type));
  _M0MPC16buffer6Buffer14write__int__be(buffer, values.length);
  const _bind = values.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const item = values[_];
      const _bind$2 = _M0FP35Xpeng10moonthrift8protocol20write__type__checked(buffer, element_type, item);
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _ok._0;
      } else {
        return _bind$2;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGuRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(undefined);
}
function _M0FP35Xpeng10moonthrift8protocol20write__type__checked(buffer, expected, value) {
  const actual = _M0MP35Xpeng10moonthrift8protocol5Value10wire__type(value);
  if (_M0IP016_24default__implPB2Eq10not__equalGRP35Xpeng10moonthrift8protocol8WireTypeE(expected, actual)) {
    return new _M0DTPC16result6ResultGuRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err(new _M0DTPC15error5Error60Xpeng_2fmoonthrift_2fprotocol_2eProtocolError_2eTypeMismatch(expected, actual));
  }
  return _M0FP35Xpeng10moonthrift8protocol12write__value(buffer, value);
}
function _M0FP35Xpeng10moonthrift8protocol32write__compact__or__binary__body(buffer, body) {
  return _M0FP35Xpeng10moonthrift8protocol12write__value(buffer, body);
}
function _M0FP35Xpeng10moonthrift8protocol23encode__binary__message(message) {
  const _bind = message.body;
  let _tmp;
  if (_bind.$tag === 7) {
    _tmp = true;
  } else {
    _tmp = false;
  }
  if (!_tmp) {
    return new _M0DTPC16result6ResultGzRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err(new _M0DTPC15error5Error60Xpeng_2fmoonthrift_2fprotocol_2eProtocolError_2eTypeMismatch(8, _M0MP35Xpeng10moonthrift8protocol5Value10wire__type(message.body)));
  }
  const buffer = _M0MPC16buffer6Buffer14Buffer_2einner(0);
  const version_and_type = -2147418112 | _M0MP35Xpeng10moonthrift8protocol11MessageType2id(message.kind);
  _M0MPC16buffer6Buffer15write__uint__be(buffer, version_and_type);
  const _bind$2 = message.name;
  const name = _M0FPC28encoding4utf814encode_2einner(new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length), false);
  _M0MPC16buffer6Buffer14write__int__be(buffer, name.length);
  _M0MPC16buffer6Buffer12write__bytes(buffer, new _M0TPC15bytes9BytesView(name, 0, name.length));
  _M0MPC16buffer6Buffer14write__int__be(buffer, message.sequence_id);
  const _bind$3 = _M0FP35Xpeng10moonthrift8protocol32write__compact__or__binary__body(buffer, message.body);
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    _ok._0;
  } else {
    return _bind$3;
  }
  return new _M0DTPC16result6ResultGzRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(_M0MPC16buffer6Buffer9to__bytes(buffer));
}
function _M0MP35Xpeng10moonthrift8protocol12BinaryReader9remaining(self) {
  return self.input.length - self.offset | 0;
}
function _M0MP35Xpeng10moonthrift8protocol12BinaryReader7require(self, count) {
  if (count < 0 || _M0MP35Xpeng10moonthrift8protocol12BinaryReader9remaining(self) < count) {
    return new _M0DTPC16result6ResultGuRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err(new _M0DTPC15error5Error61Xpeng_2fmoonthrift_2fprotocol_2eProtocolError_2eUnexpectedEof(self.offset, count));
  } else {
    return new _M0DTPC16result6ResultGuRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(undefined);
  }
}
function _M0MP35Xpeng10moonthrift8protocol12BinaryReader9read__i32(self) {
  const _bind = _M0MP35Xpeng10moonthrift8protocol12BinaryReader7require(self, 4);
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _ok._0;
  } else {
    return _bind;
  }
  const _tmp = self.input;
  const _tmp$2 = self.offset;
  const _tmp$3 = _M0MPC14byte4Byte8to__uint(_tmp$2 >>> 0 < _tmp.length ? _tmp[_tmp$2] : $oob()) << 24;
  const _tmp$4 = self.input;
  const _tmp$5 = self.offset + 1 | 0;
  const _tmp$6 = _tmp$3 | _M0MPC14byte4Byte8to__uint(_tmp$5 >>> 0 < _tmp$4.length ? _tmp$4[_tmp$5] : $oob()) << 16;
  const _tmp$7 = self.input;
  const _tmp$8 = self.offset + 2 | 0;
  const _tmp$9 = _tmp$6 | _M0MPC14byte4Byte8to__uint(_tmp$8 >>> 0 < _tmp$7.length ? _tmp$7[_tmp$8] : $oob()) << 8;
  const _tmp$10 = self.input;
  const _tmp$11 = self.offset + 3 | 0;
  const raw = _tmp$9 | _M0MPC14byte4Byte8to__uint(_tmp$11 >>> 0 < _tmp$10.length ? _tmp$10[_tmp$11] : $oob());
  self.offset = self.offset + 4 | 0;
  return new _M0DTPC16result6ResultGiRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(raw);
}
function _M0MP35Xpeng10moonthrift8protocol12BinaryReader12read__binary(self) {
  const _bind = _M0MP35Xpeng10moonthrift8protocol12BinaryReader9read__i32(self);
  let length;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    length = _ok._0;
  } else {
    return _bind;
  }
  if (length < 0) {
    return new _M0DTPC16result6ResultGzRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err(new _M0DTPC15error5Error60Xpeng_2fmoonthrift_2fprotocol_2eProtocolError_2eNegativeSize(length));
  }
  if (length > self.max_binary_size) {
    return new _M0DTPC16result6ResultGzRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err(new _M0DTPC15error5Error61Xpeng_2fmoonthrift_2fprotocol_2eProtocolError_2eLimitExceeded("binary", self.max_binary_size, length));
  }
  const _bind$2 = _M0MP35Xpeng10moonthrift8protocol12BinaryReader7require(self, length);
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    _ok._0;
  } else {
    return _bind$2;
  }
  const value = _M0MPC15bytes9BytesView9to__owned(_M0MPC15bytes5Bytes21clamped__view_2einner(self.input, self.offset, self.offset + length | 0));
  self.offset = self.offset + length | 0;
  return new _M0DTPC16result6ResultGzRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(value);
}
function _M0MP35Xpeng10moonthrift8protocol12BinaryReader16check__container(self, size) {
  if (size < 0) {
    return new _M0DTPC16result6ResultGuRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err(new _M0DTPC15error5Error60Xpeng_2fmoonthrift_2fprotocol_2eProtocolError_2eNegativeSize(size));
  }
  if (size > self.max_container_size) {
    return new _M0DTPC16result6ResultGuRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err(new _M0DTPC15error5Error61Xpeng_2fmoonthrift_2fprotocol_2eProtocolError_2eLimitExceeded("container", self.max_container_size, size));
  } else {
    return new _M0DTPC16result6ResultGuRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(undefined);
  }
}
function _M0MP35Xpeng10moonthrift8protocol12BinaryReader10read__byte(self) {
  const _bind = _M0MP35Xpeng10moonthrift8protocol12BinaryReader7require(self, 1);
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _ok._0;
  } else {
    return _bind;
  }
  const _tmp = self.input;
  const _tmp$2 = self.offset;
  const value = _tmp$2 >>> 0 < _tmp.length ? _tmp[_tmp$2] : $oob();
  self.offset = self.offset + 1 | 0;
  return new _M0DTPC16result6ResultGyRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(value);
}
function _M0MP35Xpeng10moonthrift8protocol12BinaryReader9read__i16(self) {
  const _bind = _M0MP35Xpeng10moonthrift8protocol12BinaryReader7require(self, 2);
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _ok._0;
  } else {
    return _bind;
  }
  const _tmp = self.input;
  const _tmp$2 = self.offset;
  const _tmp$3 = (_tmp$2 >>> 0 < _tmp.length ? _tmp[_tmp$2] : $oob()) << 8;
  const _tmp$4 = self.input;
  const _tmp$5 = self.offset + 1 | 0;
  const raw = _tmp$3 | (_tmp$5 >>> 0 < _tmp$4.length ? _tmp$4[_tmp$5] : $oob());
  self.offset = self.offset + 2 | 0;
  return new _M0DTPC16result6ResultGiRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(raw >= 32768 ? raw - 65536 | 0 : raw);
}
function _M0MP35Xpeng10moonthrift8protocol12BinaryReader9read__i64(self) {
  const _bind = _M0MP35Xpeng10moonthrift8protocol12BinaryReader7require(self, 8);
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _ok._0;
  } else {
    return _bind;
  }
  const raw = new _M0TPB8MutLocalGmE(0n);
  const _bind$2 = 0;
  const _bind$3 = 8;
  let _tmp = _bind$2;
  while (true) {
    const index = _tmp;
    if (index < _bind$3) {
      const _tmp$2 = BigInt.asUintN(64, raw.val << BigInt(8 & 63));
      const _tmp$3 = self.input;
      const _tmp$4 = self.offset + index | 0;
      raw.val = BigInt.asUintN(64, _tmp$2 | BigInt.asUintN(64, BigInt(_M0MPC14byte4Byte8to__uint(_tmp$4 >>> 0 < _tmp$3.length ? _tmp$3[_tmp$4] : $oob()) >>> 0)));
      _tmp = index + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  self.offset = self.offset + 8 | 0;
  return new _M0DTPC16result6ResultGlRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(raw.val);
}
function _M0MP35Xpeng10moonthrift8protocol12BinaryReader11read__value(self, ty, depth) {
  if (depth > self.max_depth) {
    return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol5ValueRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err(new _M0DTPC15error5Error61Xpeng_2fmoonthrift_2fprotocol_2eProtocolError_2eLimitExceeded("depth", self.max_depth, depth));
  }
  _L: {
    switch (ty) {
      case 0: {
        return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol5ValueRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err(new _M0DTPC15error5Error60Xpeng_2fmoonthrift_2fprotocol_2eProtocolError_2eTypeMismatch(8, 0));
      }
      case 1: {
        const _bind = _M0MP35Xpeng10moonthrift8protocol12BinaryReader10read__byte(self);
        let _tmp;
        if (_bind.$tag === 1) {
          const _ok = _bind;
          _tmp = _ok._0;
        } else {
          return _bind;
        }
        return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol5ValueRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(new _M0DTP35Xpeng10moonthrift8protocol5Value9BoolValue(_tmp !== 0));
      }
      case 2: {
        const _bind$2 = _M0MP35Xpeng10moonthrift8protocol12BinaryReader10read__byte(self);
        let raw;
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          raw = _ok._0;
        } else {
          return _bind$2;
        }
        return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol5ValueRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(new _M0DTP35Xpeng10moonthrift8protocol5Value9ByteValue(raw >= 128 ? raw - 256 | 0 : raw));
      }
      case 4: {
        const _bind$3 = _M0MP35Xpeng10moonthrift8protocol12BinaryReader9read__i16(self);
        let _tmp$2;
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          _tmp$2 = _ok._0;
        } else {
          return _bind$3;
        }
        return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol5ValueRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(new _M0DTP35Xpeng10moonthrift8protocol5Value8I16Value(_tmp$2));
      }
      case 5: {
        const _bind$4 = _M0MP35Xpeng10moonthrift8protocol12BinaryReader9read__i32(self);
        let _tmp$3;
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          _tmp$3 = _ok._0;
        } else {
          return _bind$4;
        }
        return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol5ValueRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(new _M0DTP35Xpeng10moonthrift8protocol5Value8I32Value(_tmp$3));
      }
      case 6: {
        const _bind$5 = _M0MP35Xpeng10moonthrift8protocol12BinaryReader9read__i64(self);
        let _tmp$4;
        if (_bind$5.$tag === 1) {
          const _ok = _bind$5;
          _tmp$4 = _ok._0;
        } else {
          return _bind$5;
        }
        return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol5ValueRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(new _M0DTP35Xpeng10moonthrift8protocol5Value8I64Value(_tmp$4));
      }
      case 3: {
        const _bind$6 = _M0MP35Xpeng10moonthrift8protocol12BinaryReader9read__i64(self);
        let _tmp$5;
        if (_bind$6.$tag === 1) {
          const _ok = _bind$6;
          _tmp$5 = _ok._0;
        } else {
          return _bind$6;
        }
        return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol5ValueRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(new _M0DTP35Xpeng10moonthrift8protocol5Value11DoubleValue($i64_reinterpret_f64(_tmp$5)));
      }
      case 7: {
        const _bind$7 = _M0MP35Xpeng10moonthrift8protocol12BinaryReader12read__binary(self);
        let _tmp$6;
        if (_bind$7.$tag === 1) {
          const _ok = _bind$7;
          _tmp$6 = _ok._0;
        } else {
          return _bind$7;
        }
        return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol5ValueRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(new _M0DTP35Xpeng10moonthrift8protocol5Value11BinaryValue(_tmp$6));
      }
      case 8: {
        const fields = [];
        while (true) {
          const _bind$8 = _M0MP35Xpeng10moonthrift8protocol12BinaryReader10read__byte(self);
          let _tmp$7;
          if (_bind$8.$tag === 1) {
            const _ok = _bind$8;
            _tmp$7 = _ok._0;
          } else {
            return _bind$8;
          }
          const _bind$9 = _M0MP35Xpeng10moonthrift8protocol8WireType16from__binary__id(_tmp$7);
          let field_type;
          if (_bind$9.$tag === 1) {
            const _ok = _bind$9;
            field_type = _ok._0;
          } else {
            return _bind$9;
          }
          if (field_type === 0) {
            break;
          }
          const _bind$10 = _M0MP35Xpeng10moonthrift8protocol12BinaryReader9read__i16(self);
          let id;
          if (_bind$10.$tag === 1) {
            const _ok = _bind$10;
            id = _ok._0;
          } else {
            return _bind$10;
          }
          const _bind$11 = _M0MP35Xpeng10moonthrift8protocol12BinaryReader11read__value(self, field_type, depth + 1 | 0);
          let value;
          if (_bind$11.$tag === 1) {
            const _ok = _bind$11;
            value = _ok._0;
          } else {
            return _bind$11;
          }
          _M0MPC15array5Array4pushGRPB4JsonE(fields, new _M0TP35Xpeng10moonthrift8protocol10FieldValue(id, value));
          continue;
        }
        return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol5ValueRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(new _M0DTP35Xpeng10moonthrift8protocol5Value11StructValue(fields));
      }
      case 9: {
        const _bind$8 = _M0MP35Xpeng10moonthrift8protocol12BinaryReader10read__byte(self);
        let _tmp$7;
        if (_bind$8.$tag === 1) {
          const _ok = _bind$8;
          _tmp$7 = _ok._0;
        } else {
          return _bind$8;
        }
        const _bind$9 = _M0MP35Xpeng10moonthrift8protocol8WireType16from__binary__id(_tmp$7);
        let key_type;
        if (_bind$9.$tag === 1) {
          const _ok = _bind$9;
          key_type = _ok._0;
        } else {
          return _bind$9;
        }
        const _bind$10 = _M0MP35Xpeng10moonthrift8protocol12BinaryReader10read__byte(self);
        let _tmp$8;
        if (_bind$10.$tag === 1) {
          const _ok = _bind$10;
          _tmp$8 = _ok._0;
        } else {
          return _bind$10;
        }
        const _bind$11 = _M0MP35Xpeng10moonthrift8protocol8WireType16from__binary__id(_tmp$8);
        let value_type;
        if (_bind$11.$tag === 1) {
          const _ok = _bind$11;
          value_type = _ok._0;
        } else {
          return _bind$11;
        }
        const _bind$12 = _M0MP35Xpeng10moonthrift8protocol12BinaryReader9read__i32(self);
        let size;
        if (_bind$12.$tag === 1) {
          const _ok = _bind$12;
          size = _ok._0;
        } else {
          return _bind$12;
        }
        const _bind$13 = _M0MP35Xpeng10moonthrift8protocol12BinaryReader16check__container(self, size);
        if (_bind$13.$tag === 1) {
          const _ok = _bind$13;
          _ok._0;
        } else {
          return _bind$13;
        }
        const entries = [];
        const _bind$14 = 0;
        let _tmp$9 = _bind$14;
        while (true) {
          const _ = _tmp$9;
          if (_ < size) {
            const _bind$15 = _M0MP35Xpeng10moonthrift8protocol12BinaryReader11read__value(self, key_type, depth + 1 | 0);
            let _tmp$10;
            if (_bind$15.$tag === 1) {
              const _ok = _bind$15;
              _tmp$10 = _ok._0;
            } else {
              return _bind$15;
            }
            const _tmp$11 = _tmp$10;
            const _bind$16 = _M0MP35Xpeng10moonthrift8protocol12BinaryReader11read__value(self, value_type, depth + 1 | 0);
            let _tmp$12;
            if (_bind$16.$tag === 1) {
              const _ok = _bind$16;
              _tmp$12 = _ok._0;
            } else {
              return _bind$16;
            }
            _M0MPC15array5Array4pushGRPB4JsonE(entries, { _0: _tmp$11, _1: _tmp$12 });
            _tmp$9 = _ + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol5ValueRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(new _M0DTP35Xpeng10moonthrift8protocol5Value8MapValue(key_type, value_type, entries));
      }
      case 11: {
        break _L;
      }
      default: {
        break _L;
      }
    }
  }
  const _bind = _M0MP35Xpeng10moonthrift8protocol12BinaryReader10read__byte(self);
  let _tmp;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _tmp = _ok._0;
  } else {
    return _bind;
  }
  const _bind$2 = _M0MP35Xpeng10moonthrift8protocol8WireType16from__binary__id(_tmp);
  let element_type;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    element_type = _ok._0;
  } else {
    return _bind$2;
  }
  const _bind$3 = _M0MP35Xpeng10moonthrift8protocol12BinaryReader9read__i32(self);
  let size;
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    size = _ok._0;
  } else {
    return _bind$3;
  }
  const _bind$4 = _M0MP35Xpeng10moonthrift8protocol12BinaryReader16check__container(self, size);
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _ok._0;
  } else {
    return _bind$4;
  }
  const values = [];
  const _bind$5 = 0;
  let _tmp$2 = _bind$5;
  while (true) {
    const _ = _tmp$2;
    if (_ < size) {
      const _bind$6 = _M0MP35Xpeng10moonthrift8protocol12BinaryReader11read__value(self, element_type, depth + 1 | 0);
      let _tmp$3;
      if (_bind$6.$tag === 1) {
        const _ok = _bind$6;
        _tmp$3 = _ok._0;
      } else {
        return _bind$6;
      }
      _M0MPC15array5Array4pushGRPB4JsonE(values, _tmp$3);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (ty === 11) {
    return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol5ValueRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(new _M0DTP35Xpeng10moonthrift8protocol5Value9ListValue(element_type, values));
  } else {
    return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol5ValueRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(new _M0DTP35Xpeng10moonthrift8protocol5Value8SetValue(element_type, values));
  }
}
function _M0FP35Xpeng10moonthrift8protocol31decode__binary__message_2einner(input, max_depth, max_container_size, max_binary_size) {
  const reader = new _M0TP35Xpeng10moonthrift8protocol12BinaryReader(input, 0, max_depth, max_container_size, max_binary_size);
  const _bind = _M0MP35Xpeng10moonthrift8protocol12BinaryReader9read__i32(reader);
  let header;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    header = _ok._0;
  } else {
    return _bind;
  }
  if ((header & -65536) !== -2147418112) {
    return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol7MessageRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err(new _M0DTPC15error5Error62Xpeng_2fmoonthrift_2fprotocol_2eProtocolError_2eInvalidMessage("binary message is missing strict version 1 header"));
  }
  const _bind$2 = _M0MP35Xpeng10moonthrift8protocol11MessageType8from__id(header & 255);
  let kind;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    kind = _ok._0;
  } else {
    return _bind$2;
  }
  const _bind$3 = _M0MP35Xpeng10moonthrift8protocol12BinaryReader12read__binary(reader);
  let _tmp;
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    _tmp = _ok._0;
  } else {
    return _bind$3;
  }
  const _bind$4 = _M0FP35Xpeng10moonthrift8protocol12decode__utf8(_tmp);
  let name;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    name = _ok._0;
  } else {
    return _bind$4;
  }
  const _bind$5 = _M0MP35Xpeng10moonthrift8protocol12BinaryReader9read__i32(reader);
  let sequence_id;
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    sequence_id = _ok._0;
  } else {
    return _bind$5;
  }
  const _bind$6 = _M0MP35Xpeng10moonthrift8protocol12BinaryReader11read__value(reader, 8, 0);
  let body;
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    body = _ok._0;
  } else {
    return _bind$6;
  }
  if (_M0MP35Xpeng10moonthrift8protocol12BinaryReader9remaining(reader) !== 0) {
    return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol7MessageRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err(new _M0DTPC15error5Error60Xpeng_2fmoonthrift_2fprotocol_2eProtocolError_2eTrailingData(reader.offset, _M0MP35Xpeng10moonthrift8protocol12BinaryReader9remaining(reader)));
  }
  return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol7MessageRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(new _M0TP35Xpeng10moonthrift8protocol7Message(name, kind, sequence_id, body));
}
function _M0FP35Xpeng10moonthrift8protocol13compact__type(ty) {
  switch (ty) {
    case 0: {
      return 0;
    }
    case 1: {
      return 1;
    }
    case 2: {
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
    case 3: {
      return 7;
    }
    case 7: {
      return 8;
    }
    case 11: {
      return 9;
    }
    case 10: {
      return 10;
    }
    case 9: {
      return 11;
    }
    default: {
      return 12;
    }
  }
}
function _M0FP35Xpeng10moonthrift8protocol25compact__type__for__value(value) {
  _L: {
    if (value.$tag === 0) {
      const _BoolValue = value;
      const _x = _BoolValue._0;
      if (_x === false) {
        return 2;
      } else {
        break _L;
      }
    } else {
      break _L;
    }
  }
  return _M0FP35Xpeng10moonthrift8protocol13compact__type(_M0MP35Xpeng10moonthrift8protocol5Value10wire__type(value));
}
function _M0FP35Xpeng10moonthrift8protocol14write__varuint(buffer, value) {
  const current = new _M0TPB8MutLocalGmE(value);
  while (true) {
    if (BigInt.asUintN(64, current.val) >= BigInt.asUintN(64, 128n)) {
      _M0MPC16buffer6Buffer11write__byte(buffer, _M0MPC16uint646UInt648to__byte(BigInt.asUintN(64, BigInt.asUintN(64, current.val & 127n) | 128n)));
      current.val = BigInt.asUintN(64, BigInt.asUintN(64, current.val) >> BigInt(7 & 63));
      continue;
    } else {
      break;
    }
  }
  _M0MPC16buffer6Buffer11write__byte(buffer, _M0MPC16uint646UInt648to__byte(current.val));
}
function _M0FP35Xpeng10moonthrift8protocol6zigzag(value) {
  return BigInt.asUintN(64, BigInt.asUintN(64, value << BigInt(1 & 63)) ^ BigInt.asUintN(64, BigInt.asIntN(64, value) >> BigInt(63 & 63)));
}
function _M0FP35Xpeng10moonthrift8protocol21write__compact__value(buffer, value) {
  let element_type;
  let values;
  _L: {
    let value_type;
    let key_type;
    let entries;
    _L$2: {
      let fields;
      _L$3: {
        let value$2;
        _L$4: {
          let value$3;
          _L$5: {
            let value$4;
            _L$6: {
              let value$5;
              _L$7: {
                let value$6;
                _L$8: {
                  let value$7;
                  _L$9: {
                    let value$8;
                    _L$10: {
                      switch (value.$tag) {
                        case 0: {
                          const _BoolValue = value;
                          const _value = _BoolValue._0;
                          value$8 = _value;
                          break _L$10;
                        }
                        case 1: {
                          const _ByteValue = value;
                          const _value$2 = _ByteValue._0;
                          value$7 = _value$2;
                          break _L$9;
                        }
                        case 2: {
                          const _I16Value = value;
                          const _value$3 = _I16Value._0;
                          value$6 = _value$3;
                          break _L$8;
                        }
                        case 3: {
                          const _I32Value = value;
                          const _value$4 = _I32Value._0;
                          value$5 = _value$4;
                          break _L$7;
                        }
                        case 4: {
                          const _I64Value = value;
                          const _value$5 = _I64Value._0;
                          value$4 = _value$5;
                          break _L$6;
                        }
                        case 5: {
                          const _DoubleValue = value;
                          const _value$6 = _DoubleValue._0;
                          value$3 = _value$6;
                          break _L$5;
                        }
                        case 6: {
                          const _BinaryValue = value;
                          const _value$7 = _BinaryValue._0;
                          value$2 = _value$7;
                          break _L$4;
                        }
                        case 7: {
                          const _StructValue = value;
                          const _fields = _StructValue._0;
                          fields = _fields;
                          break _L$3;
                        }
                        case 8: {
                          const _MapValue = value;
                          const _key_type = _MapValue._0;
                          const _value_type = _MapValue._1;
                          const _entries = _MapValue._2;
                          value_type = _value_type;
                          key_type = _key_type;
                          entries = _entries;
                          break _L$2;
                        }
                        case 10: {
                          const _ListValue = value;
                          const _element_type = _ListValue._0;
                          const _values = _ListValue._1;
                          element_type = _element_type;
                          values = _values;
                          break _L;
                        }
                        default: {
                          const _SetValue = value;
                          const _element_type$2 = _SetValue._0;
                          const _values$2 = _SetValue._1;
                          element_type = _element_type$2;
                          values = _values$2;
                          break _L;
                        }
                      }
                    }
                    return new _M0DTPC16result6ResultGuRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(_M0MPC16buffer6Buffer11write__byte(buffer, value$8 ? 1 : 2));
                  }
                  return new _M0DTPC16result6ResultGuRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(_M0MPC16buffer6Buffer11write__byte(buffer, value$7 & 255));
                }
                return new _M0DTPC16result6ResultGuRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(_M0FP35Xpeng10moonthrift8protocol14write__varuint(buffer, _M0FP35Xpeng10moonthrift8protocol6zigzag(BigInt.asUintN(64, BigInt(value$6)))));
              }
              return new _M0DTPC16result6ResultGuRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(_M0FP35Xpeng10moonthrift8protocol14write__varuint(buffer, _M0FP35Xpeng10moonthrift8protocol6zigzag(BigInt.asUintN(64, BigInt(value$5)))));
            }
            return new _M0DTPC16result6ResultGuRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(_M0FP35Xpeng10moonthrift8protocol14write__varuint(buffer, _M0FP35Xpeng10moonthrift8protocol6zigzag(value$4)));
          }
          return new _M0DTPC16result6ResultGuRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(_M0MPC16buffer6Buffer17write__double__le(buffer, value$3));
        }
        _M0FP35Xpeng10moonthrift8protocol14write__varuint(buffer, BigInt.asUintN(64, BigInt(value$2.length >>> 0)));
        return new _M0DTPC16result6ResultGuRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(_M0MPC16buffer6Buffer12write__bytes(buffer, new _M0TPC15bytes9BytesView(value$2, 0, value$2.length)));
      }
      const previous_id = new _M0TPB8MutLocalGiE(0);
      const _bind = fields.length;
      let _tmp = 0;
      while (true) {
        const _ = _tmp;
        if (_ < _bind) {
          const field = fields[_];
          const delta = field.id - previous_id.val | 0;
          const kind = _M0FP35Xpeng10moonthrift8protocol25compact__type__for__value(field.value);
          if (delta > 0 && delta <= 15) {
            _M0MPC16buffer6Buffer11write__byte(buffer, (delta << 4 | kind) & 255);
          } else {
            _M0MPC16buffer6Buffer11write__byte(buffer, kind);
            _M0FP35Xpeng10moonthrift8protocol14write__varuint(buffer, _M0FP35Xpeng10moonthrift8protocol6zigzag(BigInt.asUintN(64, BigInt(field.id))));
          }
          const _bind$2 = field.value;
          let _tmp$2;
          if (_bind$2.$tag === 0) {
            _tmp$2 = true;
          } else {
            _tmp$2 = false;
          }
          if (!_tmp$2) {
            const _bind$3 = _M0FP35Xpeng10moonthrift8protocol21write__compact__value(buffer, field.value);
            if (_bind$3.$tag === 1) {
              const _ok = _bind$3;
              _ok._0;
            } else {
              return _bind$3;
            }
          }
          previous_id.val = field.id;
          _tmp = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return new _M0DTPC16result6ResultGuRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(_M0MPC16buffer6Buffer11write__byte(buffer, 0));
    }
    _M0FP35Xpeng10moonthrift8protocol14write__varuint(buffer, BigInt.asUintN(64, BigInt(entries.length >>> 0)));
    if (entries.length > 0) {
      const key_id = _M0FP35Xpeng10moonthrift8protocol13compact__type(key_type);
      const value_id = _M0FP35Xpeng10moonthrift8protocol13compact__type(value_type);
      _M0MPC16buffer6Buffer11write__byte(buffer, (key_id << 4 | value_id) & 255);
      const _bind = entries.length;
      let _tmp = 0;
      while (true) {
        const _ = _tmp;
        if (_ < _bind) {
          const entry = entries[_];
          let key;
          let entry_value;
          _L$3: {
            const _key = entry._0;
            const _entry_value = entry._1;
            key = _key;
            entry_value = _entry_value;
            break _L$3;
          }
          if (_M0IP016_24default__implPB2Eq10not__equalGRP35Xpeng10moonthrift8protocol8WireTypeE(_M0MP35Xpeng10moonthrift8protocol5Value10wire__type(key), key_type)) {
            return new _M0DTPC16result6ResultGuRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err(new _M0DTPC15error5Error60Xpeng_2fmoonthrift_2fprotocol_2eProtocolError_2eTypeMismatch(key_type, _M0MP35Xpeng10moonthrift8protocol5Value10wire__type(key)));
          }
          if (_M0IP016_24default__implPB2Eq10not__equalGRP35Xpeng10moonthrift8protocol8WireTypeE(_M0MP35Xpeng10moonthrift8protocol5Value10wire__type(entry_value), value_type)) {
            return new _M0DTPC16result6ResultGuRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err(new _M0DTPC15error5Error60Xpeng_2fmoonthrift_2fprotocol_2eProtocolError_2eTypeMismatch(value_type, _M0MP35Xpeng10moonthrift8protocol5Value10wire__type(entry_value)));
          }
          const _bind$2 = _M0FP35Xpeng10moonthrift8protocol21write__compact__value(buffer, key);
          if (_bind$2.$tag === 1) {
            const _ok = _bind$2;
            _ok._0;
          } else {
            return _bind$2;
          }
          const _bind$3 = _M0FP35Xpeng10moonthrift8protocol21write__compact__value(buffer, entry_value);
          if (_bind$3.$tag === 1) {
            const _ok = _bind$3;
            _ok._0;
          } else {
            return _bind$3;
          }
          _tmp = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return new _M0DTPC16result6ResultGuRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(undefined);
    } else {
      return new _M0DTPC16result6ResultGuRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(undefined);
    }
  }
  const kind = _M0FP35Xpeng10moonthrift8protocol13compact__type(element_type);
  if (values.length <= 14) {
    _M0MPC16buffer6Buffer11write__byte(buffer, (values.length << 4 | kind) & 255);
  } else {
    _M0MPC16buffer6Buffer11write__byte(buffer, (240 | kind) & 255);
    _M0FP35Xpeng10moonthrift8protocol14write__varuint(buffer, BigInt.asUintN(64, BigInt(values.length >>> 0)));
  }
  const _bind = values.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const item = values[_];
      if (_M0IP016_24default__implPB2Eq10not__equalGRP35Xpeng10moonthrift8protocol8WireTypeE(_M0MP35Xpeng10moonthrift8protocol5Value10wire__type(item), element_type)) {
        return new _M0DTPC16result6ResultGuRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err(new _M0DTPC15error5Error60Xpeng_2fmoonthrift_2fprotocol_2eProtocolError_2eTypeMismatch(element_type, _M0MP35Xpeng10moonthrift8protocol5Value10wire__type(item)));
      }
      const _bind$2 = _M0FP35Xpeng10moonthrift8protocol21write__compact__value(buffer, item);
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _ok._0;
      } else {
        return _bind$2;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGuRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(undefined);
}
function _M0FP35Xpeng10moonthrift8protocol24encode__compact__message(message) {
  const _bind = message.body;
  let _tmp;
  if (_bind.$tag === 7) {
    _tmp = true;
  } else {
    _tmp = false;
  }
  if (!_tmp) {
    return new _M0DTPC16result6ResultGzRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err(new _M0DTPC15error5Error60Xpeng_2fmoonthrift_2fprotocol_2eProtocolError_2eTypeMismatch(8, _M0MP35Xpeng10moonthrift8protocol5Value10wire__type(message.body)));
  }
  const buffer = _M0MPC16buffer6Buffer14Buffer_2einner(0);
  _M0MPC16buffer6Buffer11write__byte(buffer, 130);
  _M0MPC16buffer6Buffer11write__byte(buffer, (_M0MP35Xpeng10moonthrift8protocol11MessageType2id(message.kind) << 5 | 1) & 255);
  _M0FP35Xpeng10moonthrift8protocol14write__varuint(buffer, BigInt.asUintN(64, BigInt(message.sequence_id >>> 0)));
  const _bind$2 = message.name;
  const name = _M0FPC28encoding4utf814encode_2einner(new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length), false);
  _M0FP35Xpeng10moonthrift8protocol14write__varuint(buffer, BigInt.asUintN(64, BigInt(name.length >>> 0)));
  _M0MPC16buffer6Buffer12write__bytes(buffer, new _M0TPC15bytes9BytesView(name, 0, name.length));
  const _bind$3 = _M0FP35Xpeng10moonthrift8protocol21write__compact__value(buffer, message.body);
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    _ok._0;
  } else {
    return _bind$3;
  }
  return new _M0DTPC16result6ResultGzRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(_M0MPC16buffer6Buffer9to__bytes(buffer));
}
function _M0MP35Xpeng10moonthrift8protocol13CompactReader10read__byte(self) {
  if (self.offset >= self.input.length) {
    return new _M0DTPC16result6ResultGyRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err(new _M0DTPC15error5Error61Xpeng_2fmoonthrift_2fprotocol_2eProtocolError_2eUnexpectedEof(self.offset, 1));
  }
  const _tmp = self.input;
  const _tmp$2 = self.offset;
  const value = _tmp$2 >>> 0 < _tmp.length ? _tmp[_tmp$2] : $oob();
  self.offset = self.offset + 1 | 0;
  return new _M0DTPC16result6ResultGyRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(value);
}
function _M0MP35Xpeng10moonthrift8protocol13CompactReader13read__varuint(self) {
  const value = new _M0TPB8MutLocalGmE(0n);
  let _tmp = 0;
  while (true) {
    const shift = _tmp;
    if (shift < 70) {
      const _bind = _M0MP35Xpeng10moonthrift8protocol13CompactReader10read__byte(self);
      let byte;
      if (_bind.$tag === 1) {
        const _ok = _bind;
        byte = _ok._0;
      } else {
        return _bind;
      }
      value.val = BigInt.asUintN(64, value.val | BigInt.asUintN(64, BigInt.asUintN(64, BigInt(_M0MPC14byte4Byte8to__uint(_M0IPC14byte4BytePB6BitAnd4land(byte, 127)) >>> 0)) << BigInt(shift & 63)));
      if (_M0IPC14byte4BytePB2Eq5equal(_M0IPC14byte4BytePB6BitAnd4land(byte, 128), 0)) {
        return new _M0DTPC16result6ResultGmRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(value.val);
      }
      _tmp = shift + 7 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGmRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err(new _M0DTPC15error5Error62Xpeng_2fmoonthrift_2fprotocol_2eProtocolError_2eInvalidCompact("varint exceeds ten bytes"));
}
function _M0MP35Xpeng10moonthrift8protocol13CompactReader9remaining(self) {
  return self.input.length - self.offset | 0;
}
function _M0MP35Xpeng10moonthrift8protocol13CompactReader12read__binary(self) {
  const _bind = _M0MP35Xpeng10moonthrift8protocol13CompactReader13read__varuint(self);
  let length64;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    length64 = _ok._0;
  } else {
    return _bind;
  }
  if (BigInt.asUintN(64, length64) > BigInt.asUintN(64, BigInt.asUintN(64, BigInt(self.max_binary_size)))) {
    return new _M0DTPC16result6ResultGzRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err(new _M0DTPC15error5Error61Xpeng_2fmoonthrift_2fprotocol_2eProtocolError_2eLimitExceeded("binary", self.max_binary_size, Number(BigInt.asIntN(32, length64)) | 0));
  }
  const length = Number(BigInt.asIntN(32, length64)) | 0;
  if (_M0MP35Xpeng10moonthrift8protocol13CompactReader9remaining(self) < length) {
    return new _M0DTPC16result6ResultGzRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err(new _M0DTPC15error5Error61Xpeng_2fmoonthrift_2fprotocol_2eProtocolError_2eUnexpectedEof(self.offset, length));
  }
  const result = _M0MPC15bytes9BytesView9to__owned(_M0MPC15bytes5Bytes21clamped__view_2einner(self.input, self.offset, self.offset + length | 0));
  self.offset = self.offset + length | 0;
  return new _M0DTPC16result6ResultGzRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(result);
}
function _M0FP35Xpeng10moonthrift8protocol8unzigzag(value) {
  const magnitude = BigInt.asUintN(64, BigInt.asUintN(64, value) >> BigInt(1 & 63));
  return BigInt.asUintN(64, BigInt.asUintN(64, value & 1n)) === BigInt.asUintN(64, 0n) ? magnitude : BigInt.asUintN(64, BigInt.asUintN(64, -magnitude) - 1n);
}
function _M0FP35Xpeng10moonthrift8protocol25wire__type__from__compact(id) {
  let value;
  _L: {
    switch (id) {
      case 0: {
        return new _M0DTPC16result6ResultGURP35Xpeng10moonthrift8protocol8WireTypeObERP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok({ _0: 0, _1: -1 });
      }
      case 1: {
        return new _M0DTPC16result6ResultGURP35Xpeng10moonthrift8protocol8WireTypeObERP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok({ _0: 1, _1: true });
      }
      case 2: {
        return new _M0DTPC16result6ResultGURP35Xpeng10moonthrift8protocol8WireTypeObERP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok({ _0: 1, _1: false });
      }
      case 3: {
        return new _M0DTPC16result6ResultGURP35Xpeng10moonthrift8protocol8WireTypeObERP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok({ _0: 2, _1: -1 });
      }
      case 4: {
        return new _M0DTPC16result6ResultGURP35Xpeng10moonthrift8protocol8WireTypeObERP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok({ _0: 4, _1: -1 });
      }
      case 5: {
        return new _M0DTPC16result6ResultGURP35Xpeng10moonthrift8protocol8WireTypeObERP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok({ _0: 5, _1: -1 });
      }
      case 6: {
        return new _M0DTPC16result6ResultGURP35Xpeng10moonthrift8protocol8WireTypeObERP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok({ _0: 6, _1: -1 });
      }
      case 7: {
        return new _M0DTPC16result6ResultGURP35Xpeng10moonthrift8protocol8WireTypeObERP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok({ _0: 3, _1: -1 });
      }
      case 8: {
        return new _M0DTPC16result6ResultGURP35Xpeng10moonthrift8protocol8WireTypeObERP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok({ _0: 7, _1: -1 });
      }
      case 9: {
        return new _M0DTPC16result6ResultGURP35Xpeng10moonthrift8protocol8WireTypeObERP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok({ _0: 11, _1: -1 });
      }
      case 10: {
        return new _M0DTPC16result6ResultGURP35Xpeng10moonthrift8protocol8WireTypeObERP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok({ _0: 10, _1: -1 });
      }
      case 11: {
        return new _M0DTPC16result6ResultGURP35Xpeng10moonthrift8protocol8WireTypeObERP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok({ _0: 9, _1: -1 });
      }
      case 12: {
        return new _M0DTPC16result6ResultGURP35Xpeng10moonthrift8protocol8WireTypeObERP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok({ _0: 8, _1: -1 });
      }
      default: {
        value = id;
        break _L;
      }
    }
  }
  return new _M0DTPC16result6ResultGURP35Xpeng10moonthrift8protocol8WireTypeObERP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err(new _M0DTPC15error5Error59Xpeng_2fmoonthrift_2fprotocol_2eProtocolError_2eInvalidType(value));
}
function _M0MP35Xpeng10moonthrift8protocol13CompactReader12read__double(self) {
  if (_M0MP35Xpeng10moonthrift8protocol13CompactReader9remaining(self) < 8) {
    return new _M0DTPC16result6ResultGdRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err(new _M0DTPC15error5Error61Xpeng_2fmoonthrift_2fprotocol_2eProtocolError_2eUnexpectedEof(self.offset, 8));
  }
  const raw = new _M0TPB8MutLocalGmE(0n);
  const _bind = 0;
  const _bind$2 = 8;
  let _tmp = _bind;
  while (true) {
    const index = _tmp;
    if (index < _bind$2) {
      const _tmp$2 = raw.val;
      const _tmp$3 = self.input;
      const _tmp$4 = self.offset + index | 0;
      raw.val = BigInt.asUintN(64, _tmp$2 | BigInt.asUintN(64, BigInt.asUintN(64, BigInt(_M0MPC14byte4Byte8to__uint(_tmp$4 >>> 0 < _tmp$3.length ? _tmp$3[_tmp$4] : $oob()) >>> 0)) << BigInt((Math.imul(index, 8) | 0) & 63)));
      _tmp = index + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  self.offset = self.offset + 8 | 0;
  return new _M0DTPC16result6ResultGdRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok($i64_reinterpret_f64(raw.val));
}
function _M0MP35Xpeng10moonthrift8protocol13CompactReader10read__size(self) {
  const _bind = _M0MP35Xpeng10moonthrift8protocol13CompactReader13read__varuint(self);
  let size;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    size = _ok._0;
  } else {
    return _bind;
  }
  if (BigInt.asUintN(64, size) > BigInt.asUintN(64, BigInt.asUintN(64, BigInt(self.max_container_size)))) {
    return new _M0DTPC16result6ResultGiRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err(new _M0DTPC15error5Error61Xpeng_2fmoonthrift_2fprotocol_2eProtocolError_2eLimitExceeded("container", self.max_container_size, Number(BigInt.asIntN(32, size)) | 0));
  }
  return new _M0DTPC16result6ResultGiRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(Number(BigInt.asIntN(32, size)) | 0);
}
function _M0MP35Xpeng10moonthrift8protocol13CompactReader11read__value(self, ty, depth, bool_value) {
  if (depth > self.max_depth) {
    return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol5ValueRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err(new _M0DTPC15error5Error61Xpeng_2fmoonthrift_2fprotocol_2eProtocolError_2eLimitExceeded("depth", self.max_depth, depth));
  }
  _L: {
    switch (ty) {
      case 0: {
        return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol5ValueRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err(new _M0DTPC15error5Error60Xpeng_2fmoonthrift_2fprotocol_2eProtocolError_2eTypeMismatch(8, 0));
      }
      case 1: {
        let value;
        _L$2: {
          if (bool_value === -1) {
            const _bind = _M0MP35Xpeng10moonthrift8protocol13CompactReader10read__byte(self);
            let _bind$2;
            if (_bind.$tag === 1) {
              const _ok = _bind;
              _bind$2 = _ok._0;
            } else {
              return _bind;
            }
            switch (_bind$2) {
              case 1: {
                return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol5ValueRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(new _M0DTP35Xpeng10moonthrift8protocol5Value9BoolValue(true));
              }
              case 2: {
                return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol5ValueRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(new _M0DTP35Xpeng10moonthrift8protocol5Value9BoolValue(false));
              }
              default: {
                return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol5ValueRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err(new _M0DTPC15error5Error62Xpeng_2fmoonthrift_2fprotocol_2eProtocolError_2eInvalidCompact("boolean value must be 1 or 2"));
              }
            }
          } else {
            const _Some = bool_value;
            const _value = _Some;
            value = _value;
            break _L$2;
          }
        }
        return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol5ValueRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(new _M0DTP35Xpeng10moonthrift8protocol5Value9BoolValue(value));
      }
      case 2: {
        const _bind = _M0MP35Xpeng10moonthrift8protocol13CompactReader10read__byte(self);
        let raw;
        if (_bind.$tag === 1) {
          const _ok = _bind;
          raw = _ok._0;
        } else {
          return _bind;
        }
        return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol5ValueRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(new _M0DTP35Xpeng10moonthrift8protocol5Value9ByteValue(raw >= 128 ? raw - 256 | 0 : raw));
      }
      case 4: {
        const _bind$2 = _M0MP35Xpeng10moonthrift8protocol13CompactReader13read__varuint(self);
        let _tmp;
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          _tmp = _ok._0;
        } else {
          return _bind$2;
        }
        return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol5ValueRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(new _M0DTP35Xpeng10moonthrift8protocol5Value8I16Value(Number(BigInt.asIntN(32, _M0FP35Xpeng10moonthrift8protocol8unzigzag(_tmp))) | 0));
      }
      case 5: {
        const _bind$3 = _M0MP35Xpeng10moonthrift8protocol13CompactReader13read__varuint(self);
        let _tmp$2;
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          _tmp$2 = _ok._0;
        } else {
          return _bind$3;
        }
        return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol5ValueRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(new _M0DTP35Xpeng10moonthrift8protocol5Value8I32Value(Number(BigInt.asIntN(32, _M0FP35Xpeng10moonthrift8protocol8unzigzag(_tmp$2))) | 0));
      }
      case 6: {
        const _bind$4 = _M0MP35Xpeng10moonthrift8protocol13CompactReader13read__varuint(self);
        let _tmp$3;
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          _tmp$3 = _ok._0;
        } else {
          return _bind$4;
        }
        return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol5ValueRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(new _M0DTP35Xpeng10moonthrift8protocol5Value8I64Value(_M0FP35Xpeng10moonthrift8protocol8unzigzag(_tmp$3)));
      }
      case 3: {
        const _bind$5 = _M0MP35Xpeng10moonthrift8protocol13CompactReader12read__double(self);
        let _tmp$4;
        if (_bind$5.$tag === 1) {
          const _ok = _bind$5;
          _tmp$4 = _ok._0;
        } else {
          return _bind$5;
        }
        return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol5ValueRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(new _M0DTP35Xpeng10moonthrift8protocol5Value11DoubleValue(_tmp$4));
      }
      case 7: {
        const _bind$6 = _M0MP35Xpeng10moonthrift8protocol13CompactReader12read__binary(self);
        let _tmp$5;
        if (_bind$6.$tag === 1) {
          const _ok = _bind$6;
          _tmp$5 = _ok._0;
        } else {
          return _bind$6;
        }
        return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol5ValueRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(new _M0DTP35Xpeng10moonthrift8protocol5Value11BinaryValue(_tmp$5));
      }
      case 8: {
        const fields = [];
        const previous_id = new _M0TPB8MutLocalGiE(0);
        while (true) {
          const _bind$7 = _M0MP35Xpeng10moonthrift8protocol13CompactReader10read__byte(self);
          let header;
          if (_bind$7.$tag === 1) {
            const _ok = _bind$7;
            header = _ok._0;
          } else {
            return _bind$7;
          }
          if (_M0IPC14byte4BytePB2Eq5equal(header, 0)) {
            break;
          }
          const delta = header >> 4 & 15;
          const type_id = _M0IPC14byte4BytePB6BitAnd4land(header, 15);
          let field_type;
          let bool_marker;
          _L$3: {
            const _bind$8 = _M0FP35Xpeng10moonthrift8protocol25wire__type__from__compact(type_id);
            let _bind$9;
            if (_bind$8.$tag === 1) {
              const _ok = _bind$8;
              _bind$9 = _ok._0;
            } else {
              return _bind$8;
            }
            const _field_type = _bind$9._0;
            const _bool_marker = _bind$9._1;
            field_type = _field_type;
            bool_marker = _bool_marker;
            break _L$3;
          }
          let id;
          if (delta === 0) {
            const _bind$8 = _M0MP35Xpeng10moonthrift8protocol13CompactReader13read__varuint(self);
            let _tmp$6;
            if (_bind$8.$tag === 1) {
              const _ok = _bind$8;
              _tmp$6 = _ok._0;
            } else {
              return _bind$8;
            }
            id = Number(BigInt.asIntN(32, _M0FP35Xpeng10moonthrift8protocol8unzigzag(_tmp$6))) | 0;
          } else {
            id = previous_id.val + delta | 0;
          }
          let value$2;
          let marker;
          _L$4: {
            _L$5: {
              if (bool_marker === -1) {
                const _bind$8 = _M0MP35Xpeng10moonthrift8protocol13CompactReader11read__value(self, field_type, depth + 1 | 0, -1);
                if (_bind$8.$tag === 1) {
                  const _ok = _bind$8;
                  value$2 = _ok._0;
                } else {
                  return _bind$8;
                }
              } else {
                const _Some = bool_marker;
                const _marker = _Some;
                marker = _marker;
                break _L$5;
              }
              break _L$4;
            }
            const _bind$8 = _M0MP35Xpeng10moonthrift8protocol13CompactReader11read__value(self, field_type, depth + 1 | 0, marker);
            if (_bind$8.$tag === 1) {
              const _ok = _bind$8;
              value$2 = _ok._0;
            } else {
              return _bind$8;
            }
          }
          _M0MPC15array5Array4pushGRPB4JsonE(fields, new _M0TP35Xpeng10moonthrift8protocol10FieldValue(id, value$2));
          previous_id.val = id;
          continue;
        }
        return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol5ValueRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(new _M0DTP35Xpeng10moonthrift8protocol5Value11StructValue(fields));
      }
      case 9: {
        const _bind$7 = _M0MP35Xpeng10moonthrift8protocol13CompactReader10read__size(self);
        let size;
        if (_bind$7.$tag === 1) {
          const _ok = _bind$7;
          size = _ok._0;
        } else {
          return _bind$7;
        }
        if (size === 0) {
          return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol5ValueRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(new _M0DTP35Xpeng10moonthrift8protocol5Value8MapValue(0, 0, []));
        } else {
          const _bind$8 = _M0MP35Xpeng10moonthrift8protocol13CompactReader10read__byte(self);
          let types;
          if (_bind$8.$tag === 1) {
            const _ok = _bind$8;
            types = _ok._0;
          } else {
            return _bind$8;
          }
          let key_type;
          _L$3: {
            const _bind$9 = _M0FP35Xpeng10moonthrift8protocol25wire__type__from__compact(_M0IPC14byte4BytePB3Shr3shr(types, 4));
            let _bind$10;
            if (_bind$9.$tag === 1) {
              const _ok = _bind$9;
              _bind$10 = _ok._0;
            } else {
              return _bind$9;
            }
            const _key_type = _bind$10._0;
            key_type = _key_type;
            break _L$3;
          }
          let value_type;
          _L$4: {
            const _bind$9 = _M0FP35Xpeng10moonthrift8protocol25wire__type__from__compact(_M0IPC14byte4BytePB6BitAnd4land(types, 15));
            let _bind$10;
            if (_bind$9.$tag === 1) {
              const _ok = _bind$9;
              _bind$10 = _ok._0;
            } else {
              return _bind$9;
            }
            const _value_type = _bind$10._0;
            value_type = _value_type;
            break _L$4;
          }
          const entries = [];
          const _bind$9 = 0;
          let _tmp$6 = _bind$9;
          while (true) {
            const _ = _tmp$6;
            if (_ < size) {
              const _bind$10 = _M0MP35Xpeng10moonthrift8protocol13CompactReader11read__value(self, key_type, depth + 1 | 0, -1);
              let _tmp$7;
              if (_bind$10.$tag === 1) {
                const _ok = _bind$10;
                _tmp$7 = _ok._0;
              } else {
                return _bind$10;
              }
              const _tmp$8 = _tmp$7;
              const _bind$11 = _M0MP35Xpeng10moonthrift8protocol13CompactReader11read__value(self, value_type, depth + 1 | 0, -1);
              let _tmp$9;
              if (_bind$11.$tag === 1) {
                const _ok = _bind$11;
                _tmp$9 = _ok._0;
              } else {
                return _bind$11;
              }
              _M0MPC15array5Array4pushGRPB4JsonE(entries, { _0: _tmp$8, _1: _tmp$9 });
              _tmp$6 = _ + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol5ValueRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(new _M0DTP35Xpeng10moonthrift8protocol5Value8MapValue(key_type, value_type, entries));
        }
      }
      case 11: {
        break _L;
      }
      default: {
        break _L;
      }
    }
  }
  const _bind = _M0MP35Xpeng10moonthrift8protocol13CompactReader10read__byte(self);
  let header;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    header = _ok._0;
  } else {
    return _bind;
  }
  const inline_size = header >> 4 & 15;
  let size;
  if (inline_size === 15) {
    const _bind$2 = _M0MP35Xpeng10moonthrift8protocol13CompactReader10read__size(self);
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      size = _ok._0;
    } else {
      return _bind$2;
    }
  } else {
    size = inline_size;
  }
  if (size > self.max_container_size) {
    return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol5ValueRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err(new _M0DTPC15error5Error61Xpeng_2fmoonthrift_2fprotocol_2eProtocolError_2eLimitExceeded("container", self.max_container_size, size));
  }
  let element_type;
  _L$2: {
    const _bind$2 = _M0FP35Xpeng10moonthrift8protocol25wire__type__from__compact(_M0IPC14byte4BytePB6BitAnd4land(header, 15));
    let _bind$3;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _bind$3 = _ok._0;
    } else {
      return _bind$2;
    }
    const _element_type = _bind$3._0;
    element_type = _element_type;
    break _L$2;
  }
  const values = [];
  const _bind$2 = 0;
  let _tmp = _bind$2;
  while (true) {
    const _ = _tmp;
    if (_ < size) {
      const _bind$3 = _M0MP35Xpeng10moonthrift8protocol13CompactReader11read__value(self, element_type, depth + 1 | 0, -1);
      let _tmp$2;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _tmp$2 = _ok._0;
      } else {
        return _bind$3;
      }
      _M0MPC15array5Array4pushGRPB4JsonE(values, _tmp$2);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (ty === 11) {
    return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol5ValueRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(new _M0DTP35Xpeng10moonthrift8protocol5Value9ListValue(element_type, values));
  } else {
    return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol5ValueRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(new _M0DTP35Xpeng10moonthrift8protocol5Value8SetValue(element_type, values));
  }
}
function _M0FP35Xpeng10moonthrift8protocol32decode__compact__message_2einner(input, max_depth, max_container_size, max_binary_size) {
  const reader = new _M0TP35Xpeng10moonthrift8protocol13CompactReader(input, 0, max_depth, max_container_size, max_binary_size);
  const _bind = _M0MP35Xpeng10moonthrift8protocol13CompactReader10read__byte(reader);
  let _tmp;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _tmp = _ok._0;
  } else {
    return _bind;
  }
  if (_tmp !== 130) {
    return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol7MessageRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err(new _M0DTPC15error5Error62Xpeng_2fmoonthrift_2fprotocol_2eProtocolError_2eInvalidMessage("compact message is missing protocol id 0x82"));
  }
  const _bind$2 = _M0MP35Xpeng10moonthrift8protocol13CompactReader10read__byte(reader);
  let version_and_type;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    version_and_type = _ok._0;
  } else {
    return _bind$2;
  }
  if ((version_and_type & 31) !== 1) {
    return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol7MessageRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err(new _M0DTPC15error5Error62Xpeng_2fmoonthrift_2fprotocol_2eProtocolError_2eInvalidMessage("unsupported compact protocol version"));
  }
  const _bind$3 = _M0MP35Xpeng10moonthrift8protocol11MessageType8from__id(version_and_type >> 5 & 7);
  let kind;
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    kind = _ok._0;
  } else {
    return _bind$3;
  }
  const _bind$4 = _M0MP35Xpeng10moonthrift8protocol13CompactReader13read__varuint(reader);
  let _tmp$2;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _tmp$2 = _ok._0;
  } else {
    return _bind$4;
  }
  const sequence_id = Number(BigInt.asIntN(32, _tmp$2)) | 0;
  const _bind$5 = _M0MP35Xpeng10moonthrift8protocol13CompactReader12read__binary(reader);
  let _tmp$3;
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _tmp$3 = _ok._0;
  } else {
    return _bind$5;
  }
  const _bind$6 = _M0FP35Xpeng10moonthrift8protocol12decode__utf8(_tmp$3);
  let name;
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    name = _ok._0;
  } else {
    return _bind$6;
  }
  const _bind$7 = _M0MP35Xpeng10moonthrift8protocol13CompactReader11read__value(reader, 8, 0, -1);
  let body;
  if (_bind$7.$tag === 1) {
    const _ok = _bind$7;
    body = _ok._0;
  } else {
    return _bind$7;
  }
  if (_M0MP35Xpeng10moonthrift8protocol13CompactReader9remaining(reader) !== 0) {
    return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol7MessageRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err(new _M0DTPC15error5Error60Xpeng_2fmoonthrift_2fprotocol_2eProtocolError_2eTrailingData(reader.offset, _M0MP35Xpeng10moonthrift8protocol13CompactReader9remaining(reader)));
  }
  return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol7MessageRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(new _M0TP35Xpeng10moonthrift8protocol7Message(name, kind, sequence_id, body));
}
function _M0FP35Xpeng10moonthrift3rpc22validate__frame__limit(max_frame_size) {
  if (max_frame_size < 0 || max_frame_size > _M0FP35Xpeng10moonthrift3rpc25default__max__frame__size) {
    return new _M0DTPC16result6ResultGuRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err(new _M0DTPC15error5Error60Xpeng_2fmoonthrift_2fprotocol_2eProtocolError_2eInvalidValue("frame limit must be between 0 and 16384000 bytes"));
  } else {
    return new _M0DTPC16result6ResultGuRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(undefined);
  }
}
function _M0FP35Xpeng10moonthrift3rpc13frame__length(first, second, third, fourth, max_frame_size) {
  const raw = _M0MPC14byte4Byte8to__uint(first) << 24 | _M0MPC14byte4Byte8to__uint(second) << 16 | _M0MPC14byte4Byte8to__uint(third) << 8 | _M0MPC14byte4Byte8to__uint(fourth);
  const length = raw;
  if (length < 0) {
    return new _M0DTPC16result6ResultGiRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err(new _M0DTPC15error5Error60Xpeng_2fmoonthrift_2fprotocol_2eProtocolError_2eNegativeSize(length));
  }
  if (length > max_frame_size) {
    return new _M0DTPC16result6ResultGiRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err(new _M0DTPC15error5Error61Xpeng_2fmoonthrift_2fprotocol_2eProtocolError_2eLimitExceeded("frame", max_frame_size, length));
  }
  return new _M0DTPC16result6ResultGiRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(length);
}
function _M0FP35Xpeng10moonthrift3rpc21encode__frame_2einner(payload, max_frame_size) {
  const _bind = _M0FP35Xpeng10moonthrift3rpc22validate__frame__limit(max_frame_size);
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _ok._0;
  } else {
    return _bind;
  }
  if (payload.length > max_frame_size) {
    return new _M0DTPC16result6ResultGzRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err(new _M0DTPC15error5Error61Xpeng_2fmoonthrift_2fprotocol_2eProtocolError_2eLimitExceeded("frame", max_frame_size, payload.length));
  }
  const buffer = _M0MPC16buffer6Buffer14Buffer_2einner(0);
  _M0MPC16buffer6Buffer14write__int__be(buffer, payload.length);
  _M0MPC16buffer6Buffer12write__bytes(buffer, new _M0TPC15bytes9BytesView(payload, 0, payload.length));
  return new _M0DTPC16result6ResultGzRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(_M0MPC16buffer6Buffer9to__bytes(buffer));
}
function _M0MP35Xpeng10moonthrift3rpc12FrameDecoder11new_2einner(max_frame_size) {
  const _bind = _M0FP35Xpeng10moonthrift3rpc22validate__frame__limit(max_frame_size);
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _ok._0;
  } else {
    return _bind;
  }
  return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift3rpc12FrameDecoderRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(new _M0TP35Xpeng10moonthrift3rpc12FrameDecoder(max_frame_size, [], _M0MPC16buffer6Buffer14Buffer_2einner(0), -1, 0));
}
function _M0MP35Xpeng10moonthrift3rpc12FrameDecoder5reset(self) {
  _M0MPC15array5Array5clearGyE(self.header);
  self.body = _M0MPC16buffer6Buffer14Buffer_2einner(0);
  self.expected = -1;
  self.received = 0;
}
function _M0MP35Xpeng10moonthrift3rpc12FrameDecoder4push(self, chunk) {
  const frames = [];
  const offset = new _M0TPB8MutLocalGiE(0);
  while (true) {
    if (offset.val < chunk.length) {
      if (self.expected < 0) {
        const needed = 4 - self.header.length | 0;
        const take = (chunk.length - offset.val | 0) < needed ? chunk.length - offset.val | 0 : needed;
        const _bind = offset.val;
        const _bind$2 = offset.val + take | 0;
        let _tmp = _bind;
        while (true) {
          const index = _tmp;
          if (index < _bind$2) {
            _M0MPC15array5Array4pushGyE(self.header, index >>> 0 < chunk.length ? chunk[index] : $oob());
            _tmp = index + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        offset.val = offset.val + take | 0;
        if (self.header.length === 4) {
          let _err;
          _L: {
            _L$2: {
              const _bind$3 = _M0FP35Xpeng10moonthrift3rpc13frame__length(_M0MPC15array5Array2atGyE(self.header, 0), _M0MPC15array5Array2atGyE(self.header, 1), _M0MPC15array5Array2atGyE(self.header, 2), _M0MPC15array5Array2atGyE(self.header, 3), self.max_frame_size);
              let _tmp$2;
              if (_bind$3.$tag === 1) {
                const _ok = _bind$3;
                _tmp$2 = _ok._0;
              } else {
                const _err$2 = _bind$3;
                _err = _err$2._0;
                break _L$2;
              }
              self.expected = _tmp$2;
              if (self.expected === 0) {
                _M0MPC15array5Array4pushGRPB4JsonE(frames, $bytes_literal$0);
                _M0MP35Xpeng10moonthrift3rpc12FrameDecoder5reset(self);
              }
              break _L;
            }
            _M0MP35Xpeng10moonthrift3rpc12FrameDecoder5reset(self);
            return new _M0DTPC16result6ResultGRPB5ArrayGzERP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err(_err);
          }
        }
      } else {
        const needed = self.expected - self.received | 0;
        const take = (chunk.length - offset.val | 0) < needed ? chunk.length - offset.val | 0 : needed;
        _M0MPC16buffer6Buffer12write__bytes(self.body, _M0MPC15bytes5Bytes21clamped__view_2einner(chunk, offset.val, offset.val + take | 0));
        self.received = self.received + take | 0;
        offset.val = offset.val + take | 0;
        if (self.received === self.expected) {
          _M0MPC15array5Array4pushGRPB4JsonE(frames, _M0MPC16buffer6Buffer9to__bytes(self.body));
          _M0MP35Xpeng10moonthrift3rpc12FrameDecoder5reset(self);
        }
      }
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGzERP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(frames);
}
function _M0MP35Xpeng10moonthrift3rpc12FrameDecoder12has__pending(self) {
  return self.header.length > 0;
}
function _M0MP416zhaojun_2dcoding6thrift8examples17moonthrift__model13SharedAddArgs17to__thrift__value(self) {
  const fields = [];
  _M0MPC15array5Array4pushGRPB4JsonE(fields, new _M0TP35Xpeng10moonthrift8protocol10FieldValue(1, new _M0DTP35Xpeng10moonthrift8protocol5Value8I64Value(self.a)));
  _M0MPC15array5Array4pushGRPB4JsonE(fields, new _M0TP35Xpeng10moonthrift8protocol10FieldValue(2, new _M0DTP35Xpeng10moonthrift8protocol5Value8I64Value(self.b)));
  return new _M0DTP35Xpeng10moonthrift8protocol5Value11StructValue(fields);
}
function _M0MP416zhaojun_2dcoding6thrift8examples17moonthrift__model15SharedAddResult19from__thrift__value(value) {
  const _bind = _M0MP35Xpeng10moonthrift8protocol5Value15require__struct(value);
  let fields;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    fields = _ok._0;
  } else {
    return _bind;
  }
  const result = new _M0TPB8MutLocalGORP416zhaojun_2dcoding6thrift8examples17moonthrift__model15SharedAddResultE(undefined);
  const _bind$2 = fields.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const field = fields[_];
      const _bind$3 = field.id;
      if (_bind$3 === 0) {
        const _bind$4 = result.val;
        if (_bind$4 === undefined) {
        } else {
          return new _M0DTPC16result6ResultGRP416zhaojun_2dcoding6thrift8examples17moonthrift__model15SharedAddResultRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err(new _M0DTPC15error5Error60Xpeng_2fmoonthrift_2fprotocol_2eProtocolError_2eInvalidValue("result SharedAddResult contains multiple known fields"));
        }
        const _bind$5 = _M0MP35Xpeng10moonthrift8protocol5Value12require__i64(field.value);
        let _tmp$2;
        if (_bind$5.$tag === 1) {
          const _ok = _bind$5;
          _tmp$2 = _ok._0;
        } else {
          return _bind$5;
        }
        result.val = new _M0DTP416zhaojun_2dcoding6thrift8examples17moonthrift__model15SharedAddResult7Success(_tmp$2);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let value$2;
  _L: {
    const _bind$3 = result.val;
    if (_bind$3 === undefined) {
      return new _M0DTPC16result6ResultGRP416zhaojun_2dcoding6thrift8examples17moonthrift__model15SharedAddResultRP35Xpeng10moonthrift8protocol13ProtocolErrorE3Err(new _M0DTPC15error5Error60Xpeng_2fmoonthrift_2fprotocol_2eProtocolError_2eInvalidValue("result SharedAddResult has no recognized field"));
    } else {
      const _Some = _bind$3;
      const _value = _Some;
      value$2 = _value;
      break _L;
    }
  }
  return new _M0DTPC16result6ResultGRP416zhaojun_2dcoding6thrift8examples17moonthrift__model15SharedAddResultRP35Xpeng10moonthrift8protocol13ProtocolErrorE2Ok(value$2);
}
function _M0FP316zhaojun_2dcoding6thrift10moonthrift13frame__stream() {
  let decoder;
  let _try_err;
  _L: {
    _L$2: {
      const _bind = _M0MP35Xpeng10moonthrift3rpc12FrameDecoder11new_2einner(1048576);
      if (_bind.$tag === 1) {
        const _ok = _bind;
        decoder = _ok._0;
      } else {
        const _err = _bind;
        _try_err = _err._0;
        break _L$2;
      }
      break _L;
    }
    const e = _try_err;
    return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift11FrameStreamRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid(`upstream frame decoder: ${_M0IP016_24default__implPB4Show10to__stringGRPC15debug4ReprE(_M0MPC15debug4Repr4ReprGRP35Xpeng10moonthrift8protocol13ProtocolErrorE(e))}`));
  }
  return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift11FrameStreamRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(_M0MP216zhaojun_2dcoding6thrift11FrameStream3new((payload) => {
    let _try_err$2;
    _L$2: {
      const _bind = _M0FP35Xpeng10moonthrift3rpc21encode__frame_2einner(payload, 1048576);
      let _tmp;
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _tmp = _ok._0;
      } else {
        const _err = _bind;
        _try_err$2 = _err._0;
        break _L$2;
      }
      return new _M0DTPC16result6ResultGzRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(_tmp);
    }
    const e = _try_err$2;
    return new _M0DTPC16result6ResultGzRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid(`upstream frame encode: ${_M0IP016_24default__implPB4Show10to__stringGRPC15debug4ReprE(_M0MPC15debug4Repr4ReprGRP35Xpeng10moonthrift8protocol13ProtocolErrorE(e))}`));
  }, (chunk) => {
    let _try_err$2;
    _L$2: {
      const _bind = _M0MP35Xpeng10moonthrift3rpc12FrameDecoder4push(decoder, chunk);
      let _tmp;
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _tmp = _ok._0;
      } else {
        const _err = _bind;
        _try_err$2 = _err._0;
        break _L$2;
      }
      return new _M0DTPC16result6ResultGRPB5ArrayGzERP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(_tmp);
    }
    const e = _try_err$2;
    return new _M0DTPC16result6ResultGRPB5ArrayGzERP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid(`upstream frame decode: ${_M0IP016_24default__implPB4Show10to__stringGRPC15debug4ReprE(_M0MPC15debug4Repr4ReprGRP35Xpeng10moonthrift8protocol13ProtocolErrorE(e))}`));
  }, () => {
    if (_M0MP35Xpeng10moonthrift3rpc12FrameDecoder12has__pending(decoder)) {
      return new _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid("truncated upstream transport frame"));
    } else {
      return new _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(undefined);
    }
  }));
}
function _M0FP316zhaojun_2dcoding6thrift10moonthrift4fail(message) {
  return new _M0DTPC15error5Error48zhaojun_2dcoding_2fthrift_2eCodecError_2eInvalid(`Xpeng/moonthrift adapter: ${message}`);
}
function _M0FP316zhaojun_2dcoding6thrift10moonthrift5range(value, minimum, maximum) {
  if (value < minimum || value > maximum) {
    return new _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(_M0FP316zhaojun_2dcoding6thrift10moonthrift4fail("integer or field ID out of range"));
  } else {
    return new _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(undefined);
  }
}
function _M0FP316zhaojun_2dcoding6thrift10moonthrift8to__wire(kind) {
  switch (kind) {
    case 0: {
      return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol8WireTypeRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(1);
    }
    case 1: {
      return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol8WireTypeRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(2);
    }
    case 2: {
      return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol8WireTypeRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(4);
    }
    case 3: {
      return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol8WireTypeRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(5);
    }
    case 4: {
      return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol8WireTypeRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(6);
    }
    case 5: {
      return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol8WireTypeRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(3);
    }
    case 6: {
      return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol8WireTypeRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(7);
    }
    case 7: {
      return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol8WireTypeRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(8);
    }
    case 8: {
      return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol8WireTypeRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(11);
    }
    case 9: {
      return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol8WireTypeRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(10);
    }
    case 10: {
      return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol8WireTypeRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(9);
    }
    default: {
      return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol8WireTypeRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(_M0FP316zhaojun_2dcoding6thrift10moonthrift4fail("UUID is not supported by upstream 0.2.0"));
    }
  }
}
function _M0FP316zhaojun_2dcoding6thrift10moonthrift10from__wire(kind) {
  switch (kind) {
    case 1: {
      return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift4KindRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(0);
    }
    case 2: {
      return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift4KindRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(1);
    }
    case 4: {
      return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift4KindRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(2);
    }
    case 5: {
      return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift4KindRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(3);
    }
    case 6: {
      return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift4KindRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(4);
    }
    case 3: {
      return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift4KindRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(5);
    }
    case 7: {
      return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift4KindRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(6);
    }
    case 8: {
      return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift4KindRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(7);
    }
    case 11: {
      return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift4KindRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(8);
    }
    case 10: {
      return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift4KindRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(9);
    }
    case 9: {
      return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift4KindRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(10);
    }
    default: {
      return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift4KindRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(_M0FP316zhaojun_2dcoding6thrift10moonthrift4fail("Stop is not a value type"));
    }
  }
}
function _M0FP316zhaojun_2dcoding6thrift10moonthrift6budget(nodes, depth) {
  nodes.val = nodes.val + 1 | 0;
  if (nodes.val > 100000 || depth > 64) {
    return new _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(_M0FP316zhaojun_2dcoding6thrift10moonthrift4fail("value conversion depth/node limit"));
  } else {
    return new _M0DTPC16result6ResultGuRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(undefined);
  }
}
function _M0FP316zhaojun_2dcoding6thrift10moonthrift9to__value(value, nodes, depth, allow_typeless) {
  const _bind = _M0FP316zhaojun_2dcoding6thrift10moonthrift6budget(nodes, depth);
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _ok._0;
  } else {
    return _bind;
  }
  let value$2;
  let key;
  let entries;
  _L: {
    let kind;
    let values;
    _L$2: {
      let kind$2;
      let values$2;
      _L$3: {
        let fields;
        _L$4: {
          let v;
          _L$5: {
            let v$2;
            _L$6: {
              let v$3;
              _L$7: {
                let v$4;
                _L$8: {
                  let v$5;
                  _L$9: {
                    let v$6;
                    _L$10: {
                      let v$7;
                      _L$11: {
                        switch (value.$tag) {
                          case 0: {
                            const _Bool = value;
                            const _v = _Bool._0;
                            v$7 = _v;
                            break _L$11;
                          }
                          case 1: {
                            const _Byte = value;
                            const _v$2 = _Byte._0;
                            v$6 = _v$2;
                            break _L$10;
                          }
                          case 2: {
                            const _I16 = value;
                            const _v$3 = _I16._0;
                            v$5 = _v$3;
                            break _L$9;
                          }
                          case 3: {
                            const _I32 = value;
                            const _v$4 = _I32._0;
                            v$4 = _v$4;
                            break _L$8;
                          }
                          case 4: {
                            const _I64 = value;
                            const _v$5 = _I64._0;
                            v$3 = _v$5;
                            break _L$7;
                          }
                          case 5: {
                            const _Double = value;
                            const _v$6 = _Double._0;
                            v$2 = _v$6;
                            break _L$6;
                          }
                          case 6: {
                            const _Binary = value;
                            const _v$7 = _Binary._0;
                            v = _v$7;
                            break _L$5;
                          }
                          case 7: {
                            const _Struct = value;
                            const _fields = _Struct._0;
                            fields = _fields;
                            break _L$4;
                          }
                          case 8: {
                            const _List = value;
                            const _kind = _List._0;
                            const _values = _List._1;
                            kind$2 = _kind;
                            values$2 = _values;
                            break _L$3;
                          }
                          case 9: {
                            const _SetValue = value;
                            const _kind$2 = _SetValue._0;
                            const _values$2 = _SetValue._1;
                            kind = _kind$2;
                            values = _values$2;
                            break _L$2;
                          }
                          case 10: {
                            const _MapValue = value;
                            const _key = _MapValue._0;
                            const _value = _MapValue._1;
                            const _entries = _MapValue._2;
                            value$2 = _value;
                            key = _key;
                            entries = _entries;
                            break _L;
                          }
                          default: {
                            return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(_M0FP316zhaojun_2dcoding6thrift10moonthrift4fail("UUID is not supported by upstream 0.2.0"));
                          }
                        }
                      }
                      return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(new _M0DTP35Xpeng10moonthrift8protocol5Value9BoolValue(v$7));
                    }
                    const _bind$2 = _M0FP316zhaojun_2dcoding6thrift10moonthrift5range(v$6, -128, 127);
                    if (_bind$2.$tag === 1) {
                      const _ok = _bind$2;
                      _ok._0;
                    } else {
                      return _bind$2;
                    }
                    return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(new _M0DTP35Xpeng10moonthrift8protocol5Value9ByteValue(v$6));
                  }
                  const _bind$2 = _M0FP316zhaojun_2dcoding6thrift10moonthrift5range(v$5, -32768, 32767);
                  if (_bind$2.$tag === 1) {
                    const _ok = _bind$2;
                    _ok._0;
                  } else {
                    return _bind$2;
                  }
                  return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(new _M0DTP35Xpeng10moonthrift8protocol5Value8I16Value(v$5));
                }
                return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(new _M0DTP35Xpeng10moonthrift8protocol5Value8I32Value(v$4));
              }
              return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(new _M0DTP35Xpeng10moonthrift8protocol5Value8I64Value(v$3));
            }
            return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(new _M0DTP35Xpeng10moonthrift8protocol5Value11DoubleValue(v$2));
          }
          if (v.length > 1048576) {
            return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(_M0FP316zhaojun_2dcoding6thrift10moonthrift4fail("binary size limit"));
          }
          return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(new _M0DTP35Xpeng10moonthrift8protocol5Value11BinaryValue(v));
        }
        const _bind$2 = _M0MPC15array5Array3mapGUiRP216zhaojun_2dcoding6thrift5ValueERP35Xpeng10moonthrift8protocol10FieldValueEHRP216zhaojun_2dcoding6thrift10CodecError(fields, (pair) => {
          const _bind$3 = _M0FP316zhaojun_2dcoding6thrift10moonthrift5range(pair._0, -32768, 32767);
          if (_bind$3.$tag === 1) {
            const _ok = _bind$3;
            _ok._0;
          } else {
            return _bind$3;
          }
          const _tmp = pair._0;
          const _bind$4 = _M0FP316zhaojun_2dcoding6thrift10moonthrift9to__value(pair._1, nodes, depth + 1 | 0, allow_typeless);
          let _tmp$2;
          if (_bind$4.$tag === 1) {
            const _ok = _bind$4;
            _tmp$2 = _ok._0;
          } else {
            return _bind$4;
          }
          return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol10FieldValueRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(new _M0TP35Xpeng10moonthrift8protocol10FieldValue(_tmp, _tmp$2));
        });
        let _tmp;
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          _tmp = _ok._0;
        } else {
          return _bind$2;
        }
        return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(new _M0DTP35Xpeng10moonthrift8protocol5Value11StructValue(_tmp));
      }
      const _bind$2 = _M0FP316zhaojun_2dcoding6thrift10moonthrift8to__wire(kind$2);
      let _tmp;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _tmp = _ok._0;
      } else {
        return _bind$2;
      }
      const _bind$3 = _M0MPC15array5Array3mapGRP216zhaojun_2dcoding6thrift5ValueRP35Xpeng10moonthrift8protocol5ValueEHRP216zhaojun_2dcoding6thrift10CodecError(values$2, (value$3) => _M0FP316zhaojun_2dcoding6thrift10moonthrift9to__value(value$3, nodes, depth + 1 | 0, allow_typeless));
      let _tmp$2;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _tmp$2 = _ok._0;
      } else {
        return _bind$3;
      }
      return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(new _M0DTP35Xpeng10moonthrift8protocol5Value9ListValue(_tmp, _tmp$2));
    }
    const _bind$2 = _M0FP316zhaojun_2dcoding6thrift10moonthrift8to__wire(kind);
    let _tmp;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _tmp = _ok._0;
    } else {
      return _bind$2;
    }
    const _bind$3 = _M0MPC15array5Array3mapGRP216zhaojun_2dcoding6thrift5ValueRP35Xpeng10moonthrift8protocol5ValueEHRP216zhaojun_2dcoding6thrift10CodecError(values, (value$3) => _M0FP316zhaojun_2dcoding6thrift10moonthrift9to__value(value$3, nodes, depth + 1 | 0, allow_typeless));
    let _tmp$2;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      _tmp$2 = _ok._0;
    } else {
      return _bind$3;
    }
    return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(new _M0DTP35Xpeng10moonthrift8protocol5Value8SetValue(_tmp, _tmp$2));
  }
  let key_type;
  let value_type;
  _L$2: {
    _L$3: {
      let k;
      let v;
      _L$4: {
        if (key === undefined) {
          if (value$2 === undefined) {
            if (_M0MPC15array5Array9is__emptyGRPB4JsonE(entries) && allow_typeless) {
              key_type = 0;
              value_type = 0;
              break _L$2;
            } else {
              break _L$3;
            }
          } else {
            break _L$3;
          }
        } else {
          const _Some = key;
          const _k = _Some;
          if (value$2 === undefined) {
            break _L$3;
          } else {
            const _Some$2 = value$2;
            const _v = _Some$2;
            k = _k;
            v = _v;
            break _L$4;
          }
        }
      }
      const _bind$2 = _M0FP316zhaojun_2dcoding6thrift10moonthrift8to__wire(k);
      let _tmp;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _tmp = _ok._0;
      } else {
        return _bind$2;
      }
      const _tmp$2 = _tmp;
      const _bind$3 = _M0FP316zhaojun_2dcoding6thrift10moonthrift8to__wire(v);
      let _tmp$3;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _tmp$3 = _ok._0;
      } else {
        return _bind$3;
      }
      key_type = _tmp$2;
      value_type = _tmp$3;
      break _L$2;
    }
    return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(_M0FP316zhaojun_2dcoding6thrift10moonthrift4fail("map needs both types unless it is an untyped empty Compact map"));
  }
  const _bind$2 = _M0MPC15array5Array3mapGURP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift5ValueEURP35Xpeng10moonthrift8protocol5ValueRP35Xpeng10moonthrift8protocol5ValueEEHRP216zhaojun_2dcoding6thrift10CodecError(entries, (pair) => {
    const _bind$3 = _M0FP316zhaojun_2dcoding6thrift10moonthrift9to__value(pair._0, nodes, depth + 1 | 0, allow_typeless);
    let _tmp;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      _tmp = _ok._0;
    } else {
      return _bind$3;
    }
    const _tmp$2 = _tmp;
    const _bind$4 = _M0FP316zhaojun_2dcoding6thrift10moonthrift9to__value(pair._1, nodes, depth + 1 | 0, allow_typeless);
    let _tmp$3;
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      _tmp$3 = _ok._0;
    } else {
      return _bind$4;
    }
    return new _M0DTPC16result6ResultGURP35Xpeng10moonthrift8protocol5ValueRP35Xpeng10moonthrift8protocol5ValueERP216zhaojun_2dcoding6thrift10CodecErrorE2Ok({ _0: _tmp$2, _1: _tmp$3 });
  });
  let _tmp;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    _tmp = _ok._0;
  } else {
    return _bind$2;
  }
  return new _M0DTPC16result6ResultGRP35Xpeng10moonthrift8protocol5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(new _M0DTP35Xpeng10moonthrift8protocol5Value8MapValue(key_type, value_type, _tmp));
}
function _M0FP316zhaojun_2dcoding6thrift10moonthrift11from__value(value, nodes, depth) {
  const _bind = _M0FP316zhaojun_2dcoding6thrift10moonthrift6budget(nodes, depth);
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _ok._0;
  } else {
    return _bind;
  }
  let value_type;
  let key_type;
  let entries;
  _L: {
    let element_type;
    let values;
    _L$2: {
      let element_type$2;
      let values$2;
      _L$3: {
        let fields;
        _L$4: {
          let v;
          _L$5: {
            let v$2;
            _L$6: {
              let v$3;
              _L$7: {
                let v$4;
                _L$8: {
                  let v$5;
                  _L$9: {
                    let v$6;
                    _L$10: {
                      let v$7;
                      _L$11: {
                        switch (value.$tag) {
                          case 0: {
                            const _BoolValue = value;
                            const _v = _BoolValue._0;
                            v$7 = _v;
                            break _L$11;
                          }
                          case 1: {
                            const _ByteValue = value;
                            const _v$2 = _ByteValue._0;
                            v$6 = _v$2;
                            break _L$10;
                          }
                          case 2: {
                            const _I16Value = value;
                            const _v$3 = _I16Value._0;
                            v$5 = _v$3;
                            break _L$9;
                          }
                          case 3: {
                            const _I32Value = value;
                            const _v$4 = _I32Value._0;
                            v$4 = _v$4;
                            break _L$8;
                          }
                          case 4: {
                            const _I64Value = value;
                            const _v$5 = _I64Value._0;
                            v$3 = _v$5;
                            break _L$7;
                          }
                          case 5: {
                            const _DoubleValue = value;
                            const _v$6 = _DoubleValue._0;
                            v$2 = _v$6;
                            break _L$6;
                          }
                          case 6: {
                            const _BinaryValue = value;
                            const _v$7 = _BinaryValue._0;
                            v = _v$7;
                            break _L$5;
                          }
                          case 7: {
                            const _StructValue = value;
                            const _fields = _StructValue._0;
                            fields = _fields;
                            break _L$4;
                          }
                          case 10: {
                            const _ListValue = value;
                            const _element_type = _ListValue._0;
                            const _values = _ListValue._1;
                            element_type$2 = _element_type;
                            values$2 = _values;
                            break _L$3;
                          }
                          case 9: {
                            const _SetValue = value;
                            const _element_type$2 = _SetValue._0;
                            const _values$2 = _SetValue._1;
                            element_type = _element_type$2;
                            values = _values$2;
                            break _L$2;
                          }
                          default: {
                            const _MapValue = value;
                            const _key_type = _MapValue._0;
                            const _value_type = _MapValue._1;
                            const _entries = _MapValue._2;
                            value_type = _value_type;
                            key_type = _key_type;
                            entries = _entries;
                            break _L;
                          }
                        }
                      }
                      return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(new _M0DTP216zhaojun_2dcoding6thrift5Value4Bool(v$7));
                    }
                    return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(new _M0DTP216zhaojun_2dcoding6thrift5Value4Byte(v$6));
                  }
                  return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(new _M0DTP216zhaojun_2dcoding6thrift5Value3I16(v$5));
                }
                return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(new _M0DTP216zhaojun_2dcoding6thrift5Value3I32(v$4));
              }
              return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(new _M0DTP216zhaojun_2dcoding6thrift5Value3I64(v$3));
            }
            return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(new _M0DTP216zhaojun_2dcoding6thrift5Value6Double(v$2));
          }
          if (v.length > 1048576) {
            return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(_M0FP316zhaojun_2dcoding6thrift10moonthrift4fail("binary size limit"));
          }
          return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(new _M0DTP216zhaojun_2dcoding6thrift5Value6Binary(v));
        }
        const _bind$2 = _M0MPC15array5Array3mapGRP35Xpeng10moonthrift8protocol10FieldValueUiRP216zhaojun_2dcoding6thrift5ValueEEHRP216zhaojun_2dcoding6thrift10CodecError(fields, (field) => {
          const _tmp = field.id;
          const _bind$3 = _M0FP316zhaojun_2dcoding6thrift10moonthrift11from__value(field.value, nodes, depth + 1 | 0);
          let _tmp$2;
          if (_bind$3.$tag === 1) {
            const _ok = _bind$3;
            _tmp$2 = _ok._0;
          } else {
            return _bind$3;
          }
          return new _M0DTPC16result6ResultGUiRP216zhaojun_2dcoding6thrift5ValueERP216zhaojun_2dcoding6thrift10CodecErrorE2Ok({ _0: _tmp, _1: _tmp$2 });
        });
        let _tmp;
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          _tmp = _ok._0;
        } else {
          return _bind$2;
        }
        return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(new _M0DTP216zhaojun_2dcoding6thrift5Value6Struct(_tmp));
      }
      const _bind$2 = _M0FP316zhaojun_2dcoding6thrift10moonthrift10from__wire(element_type$2);
      let _tmp;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _tmp = _ok._0;
      } else {
        return _bind$2;
      }
      const _bind$3 = _M0MPC15array5Array3mapGRP35Xpeng10moonthrift8protocol5ValueRP216zhaojun_2dcoding6thrift5ValueEHRP216zhaojun_2dcoding6thrift10CodecError(values$2, (value$2) => _M0FP316zhaojun_2dcoding6thrift10moonthrift11from__value(value$2, nodes, depth + 1 | 0));
      let _tmp$2;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _tmp$2 = _ok._0;
      } else {
        return _bind$3;
      }
      return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(new _M0DTP216zhaojun_2dcoding6thrift5Value4List(_tmp, _tmp$2));
    }
    const _bind$2 = _M0FP316zhaojun_2dcoding6thrift10moonthrift10from__wire(element_type);
    let _tmp;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _tmp = _ok._0;
    } else {
      return _bind$2;
    }
    const _bind$3 = _M0MPC15array5Array3mapGRP35Xpeng10moonthrift8protocol5ValueRP216zhaojun_2dcoding6thrift5ValueEHRP216zhaojun_2dcoding6thrift10CodecError(values, (value$2) => _M0FP316zhaojun_2dcoding6thrift10moonthrift11from__value(value$2, nodes, depth + 1 | 0));
    let _tmp$2;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      _tmp$2 = _ok._0;
    } else {
      return _bind$3;
    }
    return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(new _M0DTP216zhaojun_2dcoding6thrift5Value8SetValue(_tmp, _tmp$2));
  }
  let key;
  let value$2;
  _L$2: {
    if (_M0IP35Xpeng10moonthrift8protocol8WireTypePB2Eq5equal(key_type, 0) && (_M0IP35Xpeng10moonthrift8protocol8WireTypePB2Eq5equal(value_type, 0) && _M0MPC15array5Array9is__emptyGRPB4JsonE(entries))) {
      key = undefined;
      value$2 = undefined;
      break _L$2;
    } else {
      const _bind$2 = _M0FP316zhaojun_2dcoding6thrift10moonthrift10from__wire(key_type);
      let _tmp;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _tmp = _ok._0;
      } else {
        return _bind$2;
      }
      const _tmp$2 = _tmp;
      const _bind$3 = _M0FP316zhaojun_2dcoding6thrift10moonthrift10from__wire(value_type);
      let _tmp$3;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _tmp$3 = _ok._0;
      } else {
        return _bind$3;
      }
      key = _tmp$2;
      value$2 = _tmp$3;
      break _L$2;
    }
  }
  const _bind$2 = _M0MPC15array5Array3mapGURP35Xpeng10moonthrift8protocol5ValueRP35Xpeng10moonthrift8protocol5ValueEURP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift5ValueEEHRP216zhaojun_2dcoding6thrift10CodecError(entries, (pair) => {
    const _bind$3 = _M0FP316zhaojun_2dcoding6thrift10moonthrift11from__value(pair._0, nodes, depth + 1 | 0);
    let _tmp;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      _tmp = _ok._0;
    } else {
      return _bind$3;
    }
    const _tmp$2 = _tmp;
    const _bind$4 = _M0FP316zhaojun_2dcoding6thrift10moonthrift11from__value(pair._1, nodes, depth + 1 | 0);
    let _tmp$3;
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      _tmp$3 = _ok._0;
    } else {
      return _bind$4;
    }
    return new _M0DTPC16result6ResultGURP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift5ValueERP216zhaojun_2dcoding6thrift10CodecErrorE2Ok({ _0: _tmp$2, _1: _tmp$3 });
  });
  let _tmp;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    _tmp = _ok._0;
  } else {
    return _bind$2;
  }
  return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift5ValueRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(new _M0DTP216zhaojun_2dcoding6thrift5Value8MapValue(key, value$2, _tmp));
}
function _M0FP316zhaojun_2dcoding6thrift10moonthrift14from__upstream(value) {
  return _M0FP316zhaojun_2dcoding6thrift10moonthrift11from__value(value, _M0MPC13ref3Ref3RefGiE(0), 0);
}
function _M0FP316zhaojun_2dcoding6thrift10moonthrift12to__upstream(value) {
  return _M0FP316zhaojun_2dcoding6thrift10moonthrift9to__value(value, _M0MPC13ref3Ref3RefGiE(0), 0, true);
}
function _M0FP316zhaojun_2dcoding6thrift10moonthrift14message__codec(protocol) {
  return _M0MP216zhaojun_2dcoding6thrift12MessageCodec3new((message) => {
    let _try_err;
    _L: {
      const _tmp = message.name;
      const _bind = _M0MP35Xpeng10moonthrift8protocol11MessageType8from__id(message.message_type);
      let _tmp$2;
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _tmp$2 = _ok._0;
      } else {
        const _err = _bind;
        _try_err = _err._0;
        break _L;
      }
      const _tmp$3 = _tmp$2;
      const _tmp$4 = message.sequence_id;
      const _bind$2 = _M0FP316zhaojun_2dcoding6thrift10moonthrift9to__value(message.body, _M0MPC13ref3Ref3RefGiE(0), 0, _M0IP216zhaojun_2dcoding6thrift8ProtocolPB2Eq5equal(protocol, 1));
      let _tmp$5;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _tmp$5 = _ok._0;
      } else {
        const _err = _bind$2;
        _try_err = _err._0;
        break _L;
      }
      const upstream = new _M0TP35Xpeng10moonthrift8protocol7Message(_tmp, _tmp$3, _tmp$4, _tmp$5);
      if (protocol === 0) {
        const _bind$3 = _M0FP35Xpeng10moonthrift8protocol23encode__binary__message(upstream);
        let _tmp$6;
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          _tmp$6 = _ok._0;
        } else {
          const _err = _bind$3;
          _try_err = _err._0;
          break _L;
        }
        return new _M0DTPC16result6ResultGzRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(_tmp$6);
      } else {
        const _bind$3 = _M0FP35Xpeng10moonthrift8protocol24encode__compact__message(upstream);
        let _tmp$6;
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          _tmp$6 = _ok._0;
        } else {
          const _err = _bind$3;
          _try_err = _err._0;
          break _L;
        }
        return new _M0DTPC16result6ResultGzRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(_tmp$6);
      }
    }
    const error = _try_err;
    return new _M0DTPC16result6ResultGzRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(_M0FP316zhaojun_2dcoding6thrift10moonthrift4fail(_M0IP016_24default__implPB4Show10to__stringGRPC15debug4ReprE(_M0MPC15debug4Repr4ReprGRPC15error5ErrorE(error))));
  }, (data) => {
    let _try_err;
    _L: {
      let message;
      if (protocol === 0) {
        const _bind = _M0FP35Xpeng10moonthrift8protocol31decode__binary__message_2einner(data, 64, 100000, 1048576);
        if (_bind.$tag === 1) {
          const _ok = _bind;
          message = _ok._0;
        } else {
          const _err = _bind;
          _try_err = _err._0;
          break _L;
        }
      } else {
        const _bind = _M0FP35Xpeng10moonthrift8protocol32decode__compact__message_2einner(data, 64, 100000, 1048576);
        if (_bind.$tag === 1) {
          const _ok = _bind;
          message = _ok._0;
        } else {
          const _err = _bind;
          _try_err = _err._0;
          break _L;
        }
      }
      const _tmp = message.name;
      const _tmp$2 = _M0MP35Xpeng10moonthrift8protocol11MessageType2id(message.kind);
      const _tmp$3 = message.sequence_id;
      const _bind = _M0FP316zhaojun_2dcoding6thrift10moonthrift14from__upstream(message.body);
      let _tmp$4;
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _tmp$4 = _ok._0;
      } else {
        const _err = _bind;
        _try_err = _err._0;
        break _L;
      }
      return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift7MessageRP216zhaojun_2dcoding6thrift10CodecErrorE2Ok(new _M0TP216zhaojun_2dcoding6thrift7Message(_tmp, _tmp$2, _tmp$3, _tmp$4));
    }
    const error = _try_err;
    return new _M0DTPC16result6ResultGRP216zhaojun_2dcoding6thrift7MessageRP216zhaojun_2dcoding6thrift10CodecErrorE3Err(_M0FP316zhaojun_2dcoding6thrift10moonthrift4fail(_M0IP016_24default__implPB4Show10to__stringGRPC15debug4ReprE(_M0MPC15debug4Repr4ReprGRPC15error5ErrorE(error))));
  });
}
function _M0FP416zhaojun_2dcoding6thrift3cmd17moonthrift__model3hex(data) {
  const out = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const digits = "0123456789abcdef";
  const _bind = data.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const byte = data[_];
      const n = byte;
      const _tmp$2 = n >> 4;
      _M0IPB13StringBuilderPB6Logger11write__char(out, _M0MPC16option6Option6unwrapGcE(_M0MPC16uint166UInt168to__char(_tmp$2 >>> 0 < digits.length ? digits.charCodeAt(_tmp$2) : $oob())));
      const _tmp$3 = n & 15;
      _M0IPB13StringBuilderPB6Logger11write__char(out, _M0MPC16option6Option6unwrapGcE(_M0MPC16uint166UInt168to__char(_tmp$3 >>> 0 < digits.length ? digits.charCodeAt(_tmp$3) : $oob())));
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0MPB13StringBuilder10to__string(out);
}
function _M0FP416zhaojun_2dcoding6thrift3cmd17moonthrift__model5start(protocol) {
  let _try_err;
  _L: {
    const _bind = _M0FP416zhaojun_2dcoding6thrift3cmd17moonthrift__model7session.val;
    if (_bind === undefined) {
    } else {
      _try_err = new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure("example already started");
      break _L;
    }
    let protocol$2;
    switch (protocol) {
      case "binary": {
        protocol$2 = 0;
        break;
      }
      case "compact": {
        protocol$2 = 1;
        break;
      }
      default: {
        _try_err = new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure("invalid protocol");
        break _L;
      }
    }
    const _tmp = _M0FP316zhaojun_2dcoding6thrift10moonthrift14message__codec(protocol$2);
    const _bind$2 = _M0FP316zhaojun_2dcoding6thrift10moonthrift13frame__stream();
    let _tmp$2;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _tmp$2 = _ok._0;
    } else {
      const _err = _bind$2;
      _try_err = _err._0;
      break _L;
    }
    const _bind$3 = _M0MP216zhaojun_2dcoding6thrift6Client11new_2einner(protocol$2, true, true, _tmp, _tmp$2);
    let client;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      client = _ok._0;
    } else {
      const _err = _bind$3;
      _try_err = _err._0;
      break _L;
    }
    const args = new _M0TP416zhaojun_2dcoding6thrift8examples17moonthrift__model13SharedAddArgs(9007199254740993n, 1n);
    const _bind$4 = _M0FP316zhaojun_2dcoding6thrift10moonthrift14from__upstream(_M0MP416zhaojun_2dcoding6thrift8examples17moonthrift__model13SharedAddArgs17to__thrift__value(args));
    let _tmp$3;
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      _tmp$3 = _ok._0;
    } else {
      const _err = _bind$4;
      _try_err = _err._0;
      break _L;
    }
    const _bind$5 = _M0MP216zhaojun_2dcoding6thrift6Client12call_2einner(client, "add", _tmp$3, false);
    let frame;
    if (_bind$5.$tag === 1) {
      const _ok = _bind$5;
      frame = _ok._0;
    } else {
      const _err = _bind$5;
      _try_err = _err._0;
      break _L;
    }
    _M0FP416zhaojun_2dcoding6thrift3cmd17moonthrift__model7session.val = client;
    const _bind$6 = [{ _0: "ok", _1: _M0MPC14json4Json7boolean(true) }, { _0: "hex", _1: _M0IPC16string6StringPB6ToJson8to__json(_M0FP416zhaojun_2dcoding6thrift3cmd17moonthrift__model3hex(frame)) }];
    return _M0MPC14json4Json17stringify_2einner(_M0MPC14json4Json6object(_M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$6, 0, 2), undefined)), false, 0, undefined);
  }
  const error = _try_err;
  const _bind = [{ _0: "ok", _1: _M0MPC14json4Json7boolean(false) }, { _0: "error", _1: _M0IPC16string6StringPB6ToJson8to__json(_M0IP016_24default__implPB4Show10to__stringGRPC15debug4ReprE(_M0MPC15debug4Repr4ReprGRPC15error5ErrorE(error))) }];
  return _M0MPC14json4Json17stringify_2einner(_M0MPC14json4Json6object(_M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind, 0, 2), undefined)), false, 0, undefined);
}
function _M0FP416zhaojun_2dcoding6thrift3cmd17moonthrift__model5unhex(text) {
  if (2 === 0) {
    $panic();
  }
  if ((text.length % 2 | 0) !== 0) {
    return new _M0DTPC16result6ResultGzRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure("odd hex length"));
  }
  const data = [];
  const digits = "0123456789abcdef";
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < text.length) {
      const hi = new _M0TPB8MutLocalGiE(-1);
      const lo = new _M0TPB8MutLocalGiE(-1);
      const _bind = 0;
      const _bind$2 = 16;
      let _tmp$2 = _bind;
      while (true) {
        const j = _tmp$2;
        if (j < _bind$2) {
          if (_M0IPC16uint166UInt16PB2Eq5equal(i >>> 0 < text.length ? text.charCodeAt(i) : $oob(), j >>> 0 < digits.length ? digits.charCodeAt(j) : $oob())) {
            hi.val = j;
          }
          const _tmp$3 = i + 1 | 0;
          if (_M0IPC16uint166UInt16PB2Eq5equal(_tmp$3 >>> 0 < text.length ? text.charCodeAt(_tmp$3) : $oob(), j >>> 0 < digits.length ? digits.charCodeAt(j) : $oob())) {
            lo.val = j;
          }
          _tmp$2 = j + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      if (hi.val < 0 || lo.val < 0) {
        return new _M0DTPC16result6ResultGzRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure("invalid hex"));
      }
      _M0MPC15array5Array4pushGyE(data, (hi.val << 4 | lo.val) & 255);
      _tmp = i + 2 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGzRPC15error5ErrorE2Ok(_M0MPC15bytes5Bytes11from__array(new _M0TPB9ArrayViewGyE(data, 0, data.length)));
}
function _M0FP416zhaojun_2dcoding6thrift3cmd17moonthrift__model4feed(chunk) {
  let _try_err;
  _L: {
    let client;
    const _bind = _M0FP416zhaojun_2dcoding6thrift3cmd17moonthrift__model7session.val;
    if (_bind === undefined) {
      _try_err = new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure("example not started");
      break _L;
    } else {
      const _Some = _bind;
      const _c = _Some;
      client = _c;
    }
    const _bind$2 = _M0FP416zhaojun_2dcoding6thrift3cmd17moonthrift__model5unhex(chunk);
    let _tmp;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _tmp = _ok._0;
    } else {
      const _err = _bind$2;
      _try_err = _err._0;
      break _L;
    }
    const _bind$3 = _M0MP216zhaojun_2dcoding6thrift6Client4feed(client, _tmp);
    let replies;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      replies = _ok._0;
    } else {
      const _err = _bind$3;
      _try_err = _err._0;
      break _L;
    }
    const results = [];
    const _bind$4 = replies.length;
    let _tmp$2 = 0;
    while (true) {
      const _ = _tmp$2;
      if (_ < _bind$4) {
        const reply = replies[_];
        if (reply.message_type !== 2) {
          _try_err = new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure("unexpected application exception");
          break _L;
        }
        const _bind$5 = _M0FP316zhaojun_2dcoding6thrift10moonthrift12to__upstream(reply.body);
        let _tmp$3;
        if (_bind$5.$tag === 1) {
          const _ok = _bind$5;
          _tmp$3 = _ok._0;
        } else {
          const _err = _bind$5;
          _try_err = _err._0;
          break _L;
        }
        const _bind$6 = _M0MP416zhaojun_2dcoding6thrift8examples17moonthrift__model15SharedAddResult19from__thrift__value(_tmp$3);
        let result;
        if (_bind$6.$tag === 1) {
          const _ok = _bind$6;
          result = _ok._0;
        } else {
          const _err = _bind$6;
          _try_err = _err._0;
          break _L;
        }
        let value;
        _L$2: {
          const _Success = result;
          const _value = _Success._0;
          value = _value;
          break _L$2;
        }
        _M0MPC15array5Array4pushGRPB4JsonE(results, _M0IPC16string6StringPB6ToJson8to__json(_M0MPC15int645Int6418to__string_2einner(value, 10)));
        _tmp$2 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const _bind$5 = [{ _0: "ok", _1: _M0MPC14json4Json7boolean(true) }, { _0: "results", _1: _M0IPC15array5ArrayPB6ToJson8to__jsonGRPB4JsonE(results) }];
    return _M0MPC14json4Json17stringify_2einner(_M0MPC14json4Json6object(_M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$5, 0, 2), undefined)), false, 0, undefined);
  }
  const error = _try_err;
  const _bind = [{ _0: "ok", _1: _M0MPC14json4Json7boolean(false) }, { _0: "error", _1: _M0IPC16string6StringPB6ToJson8to__json(_M0IP016_24default__implPB4Show10to__stringGRPC15debug4ReprE(_M0MPC15debug4Repr4ReprGRPC15error5ErrorE(error))) }];
  return _M0MPC14json4Json17stringify_2einner(_M0MPC14json4Json6object(_M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind, 0, 2), undefined)), false, 0, undefined);
}
function _M0FP416zhaojun_2dcoding6thrift3cmd17moonthrift__model6finish() {
  const previous = _M0FP416zhaojun_2dcoding6thrift3cmd17moonthrift__model7session.val;
  _M0FP416zhaojun_2dcoding6thrift3cmd17moonthrift__model7session.val = undefined;
  let _try_err;
  _L: {
    let c;
    _L$2: {
      _L$3: {
        if (previous === undefined) {
        } else {
          const _Some = previous;
          const _c = _Some;
          c = _c;
          break _L$3;
        }
        break _L$2;
      }
      const _bind = _M0MP216zhaojun_2dcoding6thrift6Client6finish(c);
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _ok._0;
      } else {
        const _err = _bind;
        _try_err = _err._0;
        break _L;
      }
    }
    const _bind = [{ _0: "ok", _1: _M0MPC14json4Json7boolean(true) }];
    return _M0MPC14json4Json17stringify_2einner(_M0MPC14json4Json6object(_M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind, 0, 1), undefined)), false, 0, undefined);
  }
  const error = _try_err;
  const _bind = [{ _0: "ok", _1: _M0MPC14json4Json7boolean(false) }, { _0: "error", _1: _M0IPC16string6StringPB6ToJson8to__json(_M0IP016_24default__implPB4Show10to__stringGRPC15debug4ReprE(_M0MPC15debug4Repr4ReprGRP216zhaojun_2dcoding6thrift10CodecErrorE(error))) }];
  return _M0MPC14json4Json17stringify_2einner(_M0MPC14json4Json6object(_M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind, 0, 2), undefined)), false, 0, undefined);
}
(() => {
})();
export { _M0FP416zhaojun_2dcoding6thrift3cmd17moonthrift__model5start as start, _M0FP416zhaojun_2dcoding6thrift3cmd17moonthrift__model4feed as feed, _M0FP416zhaojun_2dcoding6thrift3cmd17moonthrift__model6finish as finish }
//# sourceMappingURL=moonthrift_model.js.map
