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
function _M0TPB4IterGcE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB4IterGUsRPC15debug4ReprEE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function $makebytes(a, b) {
  const arr = new Uint8Array(a);
  if (b !== 0) {
    arr.fill(b);
  }
  return arr;
}
const _M0MPB7JSArray4push = (arr, val) => { arr.push(val); };
function _M0TPB8MutLocalGiE(param0) {
  this.val = param0;
}
function _M0TPB4IterGsE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB9ArrayViewGsE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function $make_array_len_and_init(a, b) {
  const arr = new Array(a);
  arr.fill(b);
  return arr;
}
function _M0TPB3MapGsRPC15debug4ReprE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB5EntryGsRPC15debug4ReprE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB8MutLocalGORPB5EntryGsRPC15debug4ReprEE(param0) {
  this.val = param0;
}
function _M0TPC15bytes9BytesView(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
const $bytes_literal$0 = new Uint8Array();
const _M0MPB7JSArray12append__view = (dst, src, src_offset, len) => {
   for (let i = 0; i < len; i++) {
     dst.push(src[src_offset + i]);
   }
 };
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
function _M0DTPC15error5Error43localreview_2fthrift_2eCodecError_2eInvalid(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error43localreview_2fthrift_2eCodecError_2eInvalid.prototype.$tag = 2;
function _M0DTPC15error5Error60moonbitlang_2fcore_2fencoding_2futf8_2eMalformed_2eMalformed(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error60moonbitlang_2fcore_2fencoding_2futf8_2eMalformed_2eMalformed.prototype.$tag = 1;
function _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure.prototype.$tag = 0;
function $bytes_equal(a, b) {
    if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
function _M0TPB9ArrayViewGUsRPC15debug4ReprEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC16result6ResultGRP211localreview6thrift4KindRP211localreview6thrift10CodecErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview6thrift4KindRP211localreview6thrift10CodecErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP211localreview6thrift4KindRP211localreview6thrift10CodecErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview6thrift4KindRP211localreview6thrift10CodecErrorE2Ok.prototype.$tag = 1;
function _M0TPB8MutLocalGmE(param0) {
  this.val = param0;
}
function _M0DTPC16result6ResultGuRP211localreview6thrift10CodecErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRP211localreview6thrift10CodecErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGuRP211localreview6thrift10CodecErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRP211localreview6thrift10CodecErrorE2Ok.prototype.$tag = 1;
const $reinterpret_view = new DataView(new ArrayBuffer(8));
function $f64_reinterpret_i64(a) {
  $reinterpret_view.setFloat64(0, a, false);
  return BigInt.asUintN(64, $reinterpret_view.getBigUint64(0, false));
}
function _M0DTP211localreview6thrift5Value4Bool(param0) {
  this._0 = param0;
}
_M0DTP211localreview6thrift5Value4Bool.prototype.$tag = 0;
function _M0DTP211localreview6thrift5Value4Byte(param0) {
  this._0 = param0;
}
_M0DTP211localreview6thrift5Value4Byte.prototype.$tag = 1;
function _M0DTP211localreview6thrift5Value3I16(param0) {
  this._0 = param0;
}
_M0DTP211localreview6thrift5Value3I16.prototype.$tag = 2;
function _M0DTP211localreview6thrift5Value3I32(param0) {
  this._0 = param0;
}
_M0DTP211localreview6thrift5Value3I32.prototype.$tag = 3;
function _M0DTP211localreview6thrift5Value3I64(param0) {
  this._0 = param0;
}
_M0DTP211localreview6thrift5Value3I64.prototype.$tag = 4;
function _M0DTP211localreview6thrift5Value6Double(param0) {
  this._0 = param0;
}
_M0DTP211localreview6thrift5Value6Double.prototype.$tag = 5;
function _M0DTP211localreview6thrift5Value6Binary(param0) {
  this._0 = param0;
}
_M0DTP211localreview6thrift5Value6Binary.prototype.$tag = 6;
function _M0DTP211localreview6thrift5Value6Struct(param0) {
  this._0 = param0;
}
_M0DTP211localreview6thrift5Value6Struct.prototype.$tag = 7;
function _M0DTP211localreview6thrift5Value4List(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP211localreview6thrift5Value4List.prototype.$tag = 8;
function _M0DTP211localreview6thrift5Value8SetValue(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP211localreview6thrift5Value8SetValue.prototype.$tag = 9;
function _M0DTP211localreview6thrift5Value8MapValue(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP211localreview6thrift5Value8MapValue.prototype.$tag = 10;
function _M0DTPC16result6ResultGzRP211localreview6thrift10CodecErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGzRP211localreview6thrift10CodecErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGzRP211localreview6thrift10CodecErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGzRP211localreview6thrift10CodecErrorE2Ok.prototype.$tag = 1;
function _M0TPB9ArrayViewGyE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC16result6ResultGiRP211localreview6thrift10CodecErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRP211localreview6thrift10CodecErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGiRP211localreview6thrift10CodecErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRP211localreview6thrift10CodecErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGmRP211localreview6thrift10CodecErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGmRP211localreview6thrift10CodecErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGmRP211localreview6thrift10CodecErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGmRP211localreview6thrift10CodecErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGlRP211localreview6thrift10CodecErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGlRP211localreview6thrift10CodecErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGlRP211localreview6thrift10CodecErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGlRP211localreview6thrift10CodecErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP211localreview6thrift5ValueRP211localreview6thrift10CodecErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview6thrift5ValueRP211localreview6thrift10CodecErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP211localreview6thrift5ValueRP211localreview6thrift10CodecErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview6thrift5ValueRP211localreview6thrift10CodecErrorE2Ok.prototype.$tag = 1;
function $i64_reinterpret_f64(a) {
  $reinterpret_view.setBigUint64(0, BigInt.asUintN(64, a), false);
  return $reinterpret_view.getFloat64(0, false);
}
function _M0DTPC16result6ResultGRP211localreview6thrift7MessageRP211localreview6thrift10CodecErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview6thrift7MessageRP211localreview6thrift10CodecErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP211localreview6thrift7MessageRP211localreview6thrift10CodecErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview6thrift7MessageRP211localreview6thrift10CodecErrorE2Ok.prototype.$tag = 1;
function _M0TP211localreview6thrift6Reader(param0, param1, param2, param3) {
  this.data = param0;
  this.pos = param1;
  this.nodes = param2;
  this.compact = param3;
}
function _M0TP211localreview6thrift7Message(param0, param1, param2, param3) {
  this.name = param0;
  this.message_type = param1;
  this.sequence_id = param2;
  this.body = param3;
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
    case 1: {
      return _M0IPC28encoding4utf89MalformedPC15debug5Debug8to__reprGRPC28encoding4utf89MalformedE(_e);
    }
    case 0: {
      return _M0IPB7FailurePC15debug5Debug8to__reprGRPB7FailureE(_e);
    }
    default: {
      return _M0IP211localreview6thrift10CodecErrorPC15debug5Debug8to__reprGRP211localreview6thrift10CodecErrorE(_e);
    }
  }
}
const _M0MPC16string6String4trimN7_2abindS6861 = "\t\n\r ";
const _M0MPB4Iter4nextN6constrS9855GcE = 0;
const _M0MPB4Iter4nextN6constrS9856GcE = 0;
const _M0MPB4Iter4nextN6constrS9855GUsRPC15debug4ReprEE = 0;
const _M0MPB4Iter4nextN6constrS9856GUsRPC15debug4ReprEE = 0;
const _M0MPB4Iter3newN6constrS9863GcE = 0;
const _M0MPB4Iter3newN6constrS9863GUsRPC15debug4ReprEE = 0;
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
const _M0FPC15debug6renderN6constrS1705 = 16;
const _M0FPB4seed = _M0FPB12random__seed();
function _M0FPC15abort5abortGRPC15bytes9BytesViewE(msg) {
  return $panic();
}
function _M0FPC15abort5abortGOiE(msg) {
  return $panic();
}
function _M0FPB4rotl(x, r) {
  return x << r | (x >>> (32 - r | 0) | 0);
}
function _M0FPB13consume4__acc(acc, input) {
  return Math.imul(_M0FPB4rotl((acc >>> 0) + ((Math.imul(input, -1028477379) | 0) >>> 0) | 0, 17), 668265263) | 0;
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
function _M0MPC16string10StringView12view_2einner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.end - self.start | 0;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= (self.end - self.start | 0)) ? new _M0TPC16string10StringView(self.str, self.start + start_offset | 0, self.start + end_offset$2 | 0) : _M0FPC15abort5abortGRPC15bytes9BytesViewE("Invalid index for View");
}
function _M0MPC16uint646UInt648to__byte(self) {
  return (Number(BigInt.asIntN(32, self)) | 0) & 255;
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
function _M0IPC15tuple6Tuple2PB2Eq5equalGRP211localreview6thrift5ValueRP211localreview6thrift5ValueE(self, other) {
  return _M0IP211localreview6thrift5ValuePB2Eq5equal(self._0, other._0) && _M0IP211localreview6thrift5ValuePB2Eq5equal(self._1, other._1);
}
function _M0IPC15tuple6Tuple2PB2Eq5equalGiRP211localreview6thrift5ValueE(self, other) {
  return self._0 === other._0 && _M0IP211localreview6thrift5ValuePB2Eq5equal(self._1, other._1);
}
function _M0IP016_24default__implPB2Eq10not__equalGRP211localreview6thrift4KindE(x, y) {
  return !_M0IP211localreview6thrift4KindPB2Eq5equal(x, y);
}
function _M0IP016_24default__implPB2Eq10not__equalGORP211localreview6thrift4KindE(x, y) {
  return !_M0IPC16option6OptionPB2Eq5equalGRP211localreview6thrift4KindE(x, y);
}
function _M0IP016_24default__implPB2Eq10not__equalGRPC16string10StringViewE(x, y) {
  return !_M0IPC16string10StringViewPB2Eq5equal(x, y);
}
function _M0IP016_24default__implPB2Eq10not__equalGsE(x, y) {
  return !(x === y);
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
function _M0IP016_24default__implPB4Show6outputGsE(self, logger) {
  logger.method_table.method_0(logger.self, _M0IPC16string6StringPB4Show10to__string(self));
}
function _M0IP016_24default__implPB4Show10to__stringGRPC15debug4ReprE(self) {
  const logger = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0IPC15debug4ReprPB4Show6output(self, { self: logger, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
  return _M0MPB13StringBuilder10to__string(logger);
}
function _M0MPB4Iter4nextGcE(self) {
  const _func = self.f;
  const result = _func();
  const _bind = self.size_hint;
  if (result === -1) {
    self.size_hint = _M0MPB4Iter4nextN6constrS9856GcE;
  } else {
    if (_bind === undefined) {
    } else {
      const _Some = _bind;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS9855GcE;
    }
  }
  return result;
}
function _M0MPB4Iter4nextGUsRPC15debug4ReprEE(self) {
  const _func = self.f;
  const result = _func();
  const _bind = self.size_hint;
  if (result === undefined) {
    self.size_hint = _M0MPB4Iter4nextN6constrS9856GUsRPC15debug4ReprEE;
  } else {
    if (_bind === undefined) {
    } else {
      const _Some = _bind;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS9855GUsRPC15debug4ReprEE;
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
function _M0MPB4Iter3newGUsRPC15debug4ReprEE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS9863GUsRPC15debug4ReprEE;
  }
  return new _M0TPB4IterGUsRPC15debug4ReprEE(f, size_hint$2);
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
    return _M0FPC15abort5abortGRPC15bytes9BytesViewE("negative repeat count");
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
          return _M0FPC15abort5abortGRPC15bytes9BytesViewE("repeat result too large");
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
function _M0MPC15array5Array4pushGyE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGsE(self, value) {
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
    chars = new _M0TPC16string10StringView(_M0MPC16string6String4trimN7_2abindS6861, 0, _M0MPC16string6String4trimN7_2abindS6861.length);
  } else {
    const _Some = chars$46$opt;
    chars = _Some;
  }
  return _M0MPC16string6String12trim_2einner(self, chars);
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
function _M0MPB4Iter3mapGssE(self, f) {
  return new _M0TPB4IterGsE(() => {
    const _bind = _M0MPB4Iter4nextGUsRPC15debug4ReprEE(self);
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
function _M0MPC14uint4UInt10to__uint64(self) {
  return BigInt.asUintN(64, BigInt(self >>> 0));
}
function _M0IPC14bool4BoolPB4Show10to__string(self) {
  return self ? "true" : "false";
}
function _M0MPC15array9ArrayView4iterGsE(self) {
  const i = new _M0TPB8MutLocalGiE(0);
  const len = self.end - self.start | 0;
  return _M0MPB4Iter3newGUsRPC15debug4ReprEE(() => {
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
function _M0IPC16option6OptionPB2Eq5equalGRP211localreview6thrift4KindE(self, other) {
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
      return _M0IP211localreview6thrift4KindPB2Eq5equal(_x, _y);
    }
  }
}
function _M0MPC16option6Option6unwrapGRPB5EntryGsRPC15debug4ReprEE(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    return _Some;
  }
}
function _M0MPC16option6Option10unwrap__orGRPC16string10StringViewE(self, default_) {
  if (self === undefined) {
    return default_;
  } else {
    const _Some = self;
    const _t = _Some;
    return _t;
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
function _M0FPB8new__mapGsRPC15debug4ReprE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPB3MapGsRPC15debug4ReprE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
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
function _M0MPB3Map20add__entry__to__tailGsRPC15debug4ReprE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    _M0MPC16option6Option6unwrapGRPB5EntryGsRPC15debug4ReprEE(_bind >>> 0 < _tmp.length ? _tmp[_bind] : $oob()).next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map10set__entryGsRPC15debug4ReprE(self, entry, new_idx) {
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
function _M0MPB3Map10push__awayGsRPC15debug4ReprE(self, idx, entry) {
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
      _M0MPB3Map10set__entryGsRPC15debug4ReprE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGsRPC15debug4ReprE(self, entry$2, idx$2);
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
function _M0MPB3Map20rehash__place__entryGsRPC15debug4ReprE(self, outer) {
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
      _M0MPB3Map20add__entry__to__tailGsRPC15debug4ReprE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGsRPC15debug4ReprE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGsRPC15debug4ReprE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map4growGsRPC15debug4ReprE(self) {
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
      _M0MPB3Map20rehash__place__entryGsRPC15debug4ReprE(self, _e);
      _tmp = next_in_chain;
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
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPC15debug4ReprE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGsRPC15debug4ReprE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPC15debug4ReprE(self, idx, entry);
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
          _M0MPB3Map4growGsRPC15debug4ReprE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPC15debug4ReprE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGsRPC15debug4ReprE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPC15debug4ReprE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3setGsRPC15debug4ReprE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRPC15debug4ReprE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
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
  const m = _M0FPB8new__mapGsRPC15debug4ReprE(capacity$2);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
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
function _M0MPB3Map4iterGsRPC15debug4ReprE(self) {
  const curr_entry = new _M0TPB8MutLocalGORPB5EntryGsRPC15debug4ReprEE(self.head);
  const len = self.size;
  const remaining = new _M0TPB8MutLocalGiE(len);
  return _M0MPB4Iter3newGUsRPC15debug4ReprEE(() => {
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
function _M0MPB3Map5iter2GsRPC15debug4ReprE(self) {
  return _M0MPB3Map4iterGsRPC15debug4ReprE(self);
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
function _M0MPC15array5Array3mapGURP211localreview6thrift5ValueRP211localreview6thrift5ValueERPC15debug4ReprE(self, f) {
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
function _M0MPC15array5Array3mapGRP211localreview6thrift5ValueRPC15debug4ReprE(self, f) {
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
function _M0MPC15array5Array3mapGUiRP211localreview6thrift5ValueERPC15debug4ReprE(self, f) {
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
function _M0MPB4Iter10size__hintGsE(self) {
  return self.size_hint;
}
function _M0MPB4Iter4iterGsE(self) {
  return self;
}
function _M0MPB5Iter24nextGsRPC15debug4ReprE(self) {
  return _M0MPB4Iter4nextGUsRPC15debug4ReprEE(self);
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
    const _bind = end$2 - start | 0;
    return new _M0TPC15bytes9BytesView(self, start, start + _bind | 0);
  } else {
    return _M0FPC15abort5abortGRPC15bytes9BytesViewE("Invalid index for View");
  }
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
function _M0MPC15array5Array9is__emptyGURP211localreview6thrift5ValueRP211localreview6thrift5ValueEE(self) {
  return self.length === 0;
}
function _M0MPC15array5Array2atGsE(self, index) {
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
function _M0IPC15array5ArrayPB2Eq5equalGURP211localreview6thrift5ValueRP211localreview6thrift5ValueEE(self, other) {
  const self_len = self.length;
  const other_len = other.length;
  if (self_len === other_len) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < self_len) {
        if (_M0IPC15tuple6Tuple2PB2Eq5equalGRP211localreview6thrift5ValueRP211localreview6thrift5ValueE(self[i], other[i])) {
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
function _M0IPC15array5ArrayPB2Eq5equalGRP211localreview6thrift5ValueE(self, other) {
  const self_len = self.length;
  const other_len = other.length;
  if (self_len === other_len) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < self_len) {
        if (_M0IP211localreview6thrift5ValuePB2Eq5equal(self[i], other[i])) {
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
function _M0IPC15array5ArrayPB2Eq5equalGUiRP211localreview6thrift5ValueEE(self, other) {
  const self_len = self.length;
  const other_len = other.length;
  if (self_len === other_len) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < self_len) {
        if (_M0IPC15tuple6Tuple2PB2Eq5equalGiRP211localreview6thrift5ValueE(self[i], other[i])) {
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
function _M0MPC15array5Array6filterGsE(self, f) {
  const arr = [];
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const v = self[_];
      if (f(v)) {
        _M0MPC15array5Array4pushGsE(arr, v);
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
    const _bind$2 = _M0MPB4Iter4nextGUsRPC15debug4ReprEE(iter);
    if (_bind$2 === undefined) {
      return;
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      _M0MPC15array5Array4pushGsE(self, _x);
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
function _M0MPC15debug4Repr4ReprGRP211localreview6thrift7MessageE(value) {
  return _M0IP211localreview6thrift7MessagePC15debug5Debug8to__repr(value);
}
function _M0MPC15debug4Repr4ReprGRP211localreview6thrift5ValueE(value) {
  return _M0IP211localreview6thrift5ValuePC15debug5Debug8to__repr(value);
}
function _M0MPC15debug4Repr4ReprGRP211localreview6thrift4KindE(value) {
  return _M0IP211localreview6thrift4KindPC15debug5Debug8to__repr(value);
}
function _M0MPC15debug4Repr4ReprGURP211localreview6thrift5ValueRP211localreview6thrift5ValueEE(value) {
  return _M0IPC15tuple6Tuple2PC15debug5Debug8to__reprGRP211localreview6thrift5ValueRP211localreview6thrift5ValueE(value);
}
function _M0MPC15debug4Repr4ReprGUiRP211localreview6thrift5ValueEE(value) {
  return _M0IPC15tuple6Tuple2PC15debug5Debug8to__reprGiRP211localreview6thrift5ValueE(value);
}
function _M0MPC15debug4Repr4ReprGyE(value) {
  return _M0IPC14byte4BytePC15debug5Debug8to__repr(value);
}
function _M0MPC15debug4Repr4ReprGiE(value) {
  return _M0IPC13int3IntPC15debug5Debug8to__repr(value);
}
function _M0MPC15debug4Repr5tuple(children) {
  return new _M0DTPC15debug4Repr5Tuple(children);
}
function _M0IPC15tuple6Tuple2PC15debug5Debug8to__reprGRP211localreview6thrift5ValueRP211localreview6thrift5ValueE(self) {
  const _a = self._0;
  const _b = self._1;
  return _M0MPC15debug4Repr5tuple([_M0MPC15debug4Repr4ReprGRP211localreview6thrift5ValueE(_a), _M0MPC15debug4Repr4ReprGRP211localreview6thrift5ValueE(_b)]);
}
function _M0IPC15tuple6Tuple2PC15debug5Debug8to__reprGiRP211localreview6thrift5ValueE(self) {
  const _a = self._0;
  const _b = self._1;
  return _M0MPC15debug4Repr5tuple([_M0MPC15debug4Repr4ReprGiE(_a), _M0MPC15debug4Repr4ReprGRP211localreview6thrift5ValueE(_b)]);
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
function _M0MPC15debug4Repr6string(x) {
  return new _M0DTPC15debug4Repr9StringLit(x);
}
function _M0MPC15debug4Repr5array(children) {
  return new _M0DTPC15debug4Repr5Array(children);
}
function _M0MPC15debug4Repr6record(fields) {
  const _acc = [];
  const _it = _M0MPB3Map5iter2GsRPC15debug4ReprE(fields);
  let _tmp;
  while (true) {
    const _bind = _M0MPB5Iter24nextGsRPC15debug4ReprE(_it);
    if (_bind === undefined) {
      _tmp = _acc;
      break;
    } else {
      const _Some = _bind;
      const _x = _Some;
      const _name = _x._0;
      const _value = _x._1;
      _M0MPC15array5Array4pushGsE(_acc, new _M0DTPC15debug4Repr11RecordField(_name, _value));
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
      _M0MPC15array5Array4pushGsE(_self, `${start}${_first}`);
      _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array9ArrayView4iterGsE(_x));
      _M0MPC15array5Array4pushGsE(_self, `${_last}${finish}`);
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
        const _bind = _x_end - 1 | 0;
        let _tmp = 0;
        while (true) {
          const _ = _tmp;
          if (_ < _bind) {
            const m = lines[1 + _ | 0];
            const t = _M0MPC16string6String4trim(m, undefined);
            if (_M0IP016_24default__implPB2Eq10not__equalGRPC16string10StringViewE(t, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1134, 0, _M0FPC15debug14compact__linesN7_2abindS1134.length))) {
              _M0MPC15array5Array4pushGsE(parts, t);
            }
            _tmp = _ + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        const joined0 = _M0MPC15array5Array4joinGRPC16string10StringViewE(parts, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1147, 0, _M0FPC15debug14compact__linesN7_2abindS1147.length));
        const _bind$2 = _M0MPC16string6String13strip__suffix(joined0, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1141, 0, _M0FPC15debug14compact__linesN7_2abindS1141.length));
        let joined;
        if (_bind$2 === undefined) {
          joined = new _M0TPC16string10StringView(joined0, 0, joined0.length);
        } else {
          const _Some = _bind$2;
          joined = _Some;
        }
        if (_first === "{") {
          const s1 = _M0MPC16option6Option10unwrap__orGRPC16string10StringViewE(_M0MPC16string10StringView13strip__prefix(joined, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1139, 0, _M0FPC15debug14compact__linesN7_2abindS1139.length)), joined);
          const inner = _M0MPC16option6Option10unwrap__orGRPC16string10StringViewE(_M0MPC16string10StringView13strip__suffix(s1, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1138, 0, _M0FPC15debug14compact__linesN7_2abindS1138.length)), s1);
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
          const _bind = _x_end - 1 | 0;
          let _tmp = 0;
          while (true) {
            const _ = _tmp;
            if (_ < _bind) {
              const m = lines[1 + _ | 0];
              const t = _M0MPC16string6String4trim(m, undefined);
              if (_M0IP016_24default__implPB2Eq10not__equalGRPC16string10StringViewE(t, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1152, 0, _M0FPC15debug14compact__linesN7_2abindS1152.length))) {
                _M0MPC15array5Array4pushGsE(parts, t);
              }
              _tmp = _ + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          const joined0 = _M0MPC15array5Array4joinGRPC16string10StringViewE(parts, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1161, 0, _M0FPC15debug14compact__linesN7_2abindS1161.length));
          const _bind$2 = _M0MPC16string6String13strip__suffix(joined0, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1155, 0, _M0FPC15debug14compact__linesN7_2abindS1155.length));
          let joined;
          if (_bind$2 === undefined) {
            joined = new _M0TPC16string10StringView(joined0, 0, joined0.length);
          } else {
            const _Some = _bind$2;
            joined = _Some;
          }
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(0);
          _M0MPB13StringBuilder13write__objectGsE(_string_builder, _first);
          _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(_string_builder, joined);
          _M0MPB13StringBuilder13write__objectGsE(_string_builder, _last);
          return [_M0MPB13StringBuilder10to__string(_string_builder)];
        } else {
          const parts = [new _M0TPC16string10StringView(_first, 0, _first.length)];
          const _bind = _x_end - 1 | 0;
          let _tmp = 0;
          while (true) {
            const _ = _tmp;
            if (_ < _bind) {
              const m = lines[1 + _ | 0];
              _M0MPC15array5Array4pushGsE(parts, _M0MPC16string6String4trim(m, undefined));
              _tmp = _ + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          _M0MPC15array5Array4pushGsE(parts, _M0MPC16string6String4trim(_last, undefined));
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
        if (!_M0MPC15array5Array9is__emptyGURP211localreview6thrift5ValueRP211localreview6thrift5ValueEE(lines)) {
          const last_i = lines.length - 1 | 0;
          _M0MPC15array5Array3setGsE(lines, last_i, `${_M0MPC15array5Array2atGsE(lines, last_i)},`);
        }
        const _self = [];
        _M0MPC15array5Array4pushGsE(_self, open);
        _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGsE(lines));
        _M0MPC15array5Array4pushGsE(_self, close);
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
            _M0MPC15array5Array4pushGsE(_self, open);
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGsE(_M0FPC15debug14indent__spaces(indent_by, new _M0TPC15debug13ContentParens(0, _item)).lines));
            _M0MPC15array5Array4pushGsE(_self, close);
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
              _M0MPC15array5Array4pushGsE(out, `${_M0MPC16string6String6repeat(" ", indent_by)}${_x},`);
            } else {
              const _first = item_lines[0];
              const _last = item_lines[item_lines.length - 1 | 0];
              const _x_end = item_lines.length - 1 | 0;
              _M0MPC15array5Array4pushGsE(out, `${_M0MPC16string6String6repeat(" ", indent_by)}${_first}`);
              const _bind$2 = _x_end - 1 | 0;
              let _tmp$2 = 0;
              while (true) {
                const _$2 = _tmp$2;
                if (_$2 < _bind$2) {
                  const mid = item_lines[1 + _$2 | 0];
                  _M0MPC15array5Array4pushGsE(out, `${_M0MPC16string6String6repeat(" ", indent_by)}${mid}`);
                  _tmp$2 = _$2 + 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              _M0MPC15array5Array4pushGsE(out, `${_M0MPC16string6String6repeat(" ", indent_by)}${_last},`);
            }
          }
          _tmp = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _M0MPC15array5Array4pushGsE(out, close);
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
                _M0MPC15array5Array4pushGsE(_self, begin);
                _M0MPC15array5Array10push__iterGsE(_self, _M0MPB4Iter4iterGsE(_M0MPB4Iter3mapGssE(_M0MPC15array9ArrayView4iterGsE(_x), (line) => `${_M0MPC16string6String6repeat(" ", 2)}${line}`)));
                _M0MPC15array5Array4pushGsE(_self, `${_M0MPC16string6String6repeat(" ", 2)}${_last_line},`);
                _M0MPC15array5Array4pushGsE(_self, end);
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
                    _M0MPC15array5Array4pushGsE(out, `${_M0MPC16string6String6repeat(" ", 2)}${_x},`);
                  } else {
                    const _first = item_lines[0];
                    const _last = item_lines[item_lines.length - 1 | 0];
                    const _x_end = item_lines.length - 1 | 0;
                    _M0MPC15array5Array4pushGsE(out, `${_M0MPC16string6String6repeat(" ", 2)}${_first}`);
                    const _bind$2 = _x_end - 1 | 0;
                    let _tmp$2 = 0;
                    while (true) {
                      const _$2 = _tmp$2;
                      if (_$2 < _bind$2) {
                        const mid = item_lines[1 + _$2 | 0];
                        _M0MPC15array5Array4pushGsE(out, `${_M0MPC16string6String6repeat(" ", 2)}${mid}`);
                        _tmp$2 = _$2 + 1 | 0;
                        continue;
                      } else {
                        break;
                      }
                    }
                    _M0MPC15array5Array4pushGsE(out, `${_M0MPC16string6String6repeat(" ", 2)}${_last},`);
                  }
                }
                _tmp = _ + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            _M0MPC15array5Array4pushGsE(out, end);
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
    return _M0MPC15array5Array9is__emptyGURP211localreview6thrift5ValueRP211localreview6thrift5ValueEE(children) ? node : !_M0MPC15debug4Repr17info__adds__depth(node) ? _M0MPC15debug4Repr14with__children(node, _M0MPC15array5Array3mapGRPC15debug4ReprRPC15debug4ReprE(children, (child) => _M0MPC15debug4Repr19prune__info_2einnerN2goS259(replacement, d, child))) : replacement;
  } else {
    if (_M0MPC15array5Array9is__emptyGURP211localreview6thrift5ValueRP211localreview6thrift5ValueEE(children)) {
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
      if (_M0MPC15array5Array9is__emptyGURP211localreview6thrift5ValueRP211localreview6thrift5ValueEE(children)) {
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
            _M0MPC15array5Array4pushGsE(_self, head);
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
            _M0MPC15array5Array4pushGsE(_self, `${_name$3}=${_first}`);
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
            _M0MPC15array5Array4pushGsE(_self, `${label}: ${_first}`);
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
function _M0IPC16string6StringPC15debug5Debug8to__repr(self) {
  return _M0MPC15debug4Repr6string(self);
}
function _M0IPC15bytes5BytesPC15debug5Debug8to__repr(self) {
  return _M0MPC15debug4Repr8opaque__("Bytes", _M0MPC15debug4Repr5array(_M0MPC15array5Array3mapGyRPC15debug4ReprE(_M0MPC15bytes5Bytes9to__array(self), (x) => _M0MPC15debug4Repr4ReprGyE(x))));
}
function _M0IPC15bytes9BytesViewPC15debug5Debug8to__repr(self) {
  return _M0MPC15debug4Repr8opaque__("BytesView", _M0MPC15debug4Repr5array(_M0MPC15array5Array3mapGyRPC15debug4ReprE(_M0MPC15bytes9BytesView9to__array(self), (x) => _M0MPC15debug4Repr4ReprGyE(x))));
}
function _M0IPC15array5ArrayPC15debug5Debug8to__reprGURP211localreview6thrift5ValueRP211localreview6thrift5ValueEE(self) {
  return _M0MPC15debug4Repr5array(_M0MPC15array5Array3mapGURP211localreview6thrift5ValueRP211localreview6thrift5ValueERPC15debug4ReprE(self, (x) => _M0MPC15debug4Repr4ReprGURP211localreview6thrift5ValueRP211localreview6thrift5ValueEE(x)));
}
function _M0IPC15array5ArrayPC15debug5Debug8to__reprGRP211localreview6thrift5ValueE(self) {
  return _M0MPC15debug4Repr5array(_M0MPC15array5Array3mapGRP211localreview6thrift5ValueRPC15debug4ReprE(self, (x) => _M0MPC15debug4Repr4ReprGRP211localreview6thrift5ValueE(x)));
}
function _M0IPC15array5ArrayPC15debug5Debug8to__reprGUiRP211localreview6thrift5ValueEE(self) {
  return _M0MPC15debug4Repr5array(_M0MPC15array5Array3mapGUiRP211localreview6thrift5ValueERPC15debug4ReprE(self, (x) => _M0MPC15debug4Repr4ReprGUiRP211localreview6thrift5ValueEE(x)));
}
function _M0IPC16option6OptionPC15debug5Debug8to__reprGRP211localreview6thrift4KindE(self) {
  if (self === undefined) {
    return _M0MPC15debug4Repr4ctor("None", []);
  } else {
    const _Some = self;
    const _x = _Some;
    return _M0MPC15debug4Repr4ctor("Some", [{ _0: undefined, _1: _M0MPC15debug4Repr4ReprGRP211localreview6thrift4KindE(_x) }]);
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
  const _bind = src_offset + src_length | 0;
  const _bind$2 = src.length;
  if (src_offset < 0 || (src_offset > _bind || _bind > _bind$2)) {
    $panic();
  }
  const view = new _M0TPC15bytes9BytesView(src, src_offset, _bind);
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
  const _bind = bytes.end - bytes.start | 0;
  if (malformed_offset < 0 || malformed_offset > _bind) {
    $panic();
  }
  return new _M0TPC15bytes9BytesView(bytes.buf, bytes.start + malformed_offset | 0, bytes.start + _bind | 0);
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
function _M0IPC15error5ErrorPC15debug5Debug8to__repr(self) {
  return _M0FP15Error8to__repr(self);
}
function _M0IP211localreview6thrift10CodecErrorPC15debug5Debug8to__reprGRP211localreview6thrift10CodecErrorE(_x_247) {
  let _arg_248;
  _L: {
    const _Invalid = _x_247;
    const _$42$arg_248 = _Invalid._0;
    _arg_248 = _$42$arg_248;
    break _L;
  }
  return _M0MPC15debug4Repr4ctor("Invalid", [{ _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_248) }]);
}
function _M0IP211localreview6thrift8ProtocolPB2Eq5equal(_x_241, _x_242) {
  if (_x_241 === 0) {
    if (_x_242 === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    if (_x_242 === 1) {
      return true;
    } else {
      return false;
    }
  }
}
function _M0IP211localreview6thrift5ValuePC15debug5Debug8to__repr(_x_209) {
  let _arg_223;
  let _arg_222;
  let _arg_224;
  _L: {
    let _arg_220;
    let _arg_221;
    _L$2: {
      let _arg_218;
      let _arg_219;
      _L$3: {
        let _arg_217;
        _L$4: {
          let _arg_216;
          _L$5: {
            let _arg_215;
            _L$6: {
              let _arg_214;
              _L$7: {
                let _arg_213;
                _L$8: {
                  let _arg_212;
                  _L$9: {
                    let _arg_211;
                    _L$10: {
                      let _arg_210;
                      _L$11: {
                        switch (_x_209.$tag) {
                          case 0: {
                            const _Bool = _x_209;
                            const _$42$arg_210 = _Bool._0;
                            _arg_210 = _$42$arg_210;
                            break _L$11;
                          }
                          case 1: {
                            const _Byte = _x_209;
                            const _$42$arg_211 = _Byte._0;
                            _arg_211 = _$42$arg_211;
                            break _L$10;
                          }
                          case 2: {
                            const _I16 = _x_209;
                            const _$42$arg_212 = _I16._0;
                            _arg_212 = _$42$arg_212;
                            break _L$9;
                          }
                          case 3: {
                            const _I32 = _x_209;
                            const _$42$arg_213 = _I32._0;
                            _arg_213 = _$42$arg_213;
                            break _L$8;
                          }
                          case 4: {
                            const _I64 = _x_209;
                            const _$42$arg_214 = _I64._0;
                            _arg_214 = _$42$arg_214;
                            break _L$7;
                          }
                          case 5: {
                            const _Double = _x_209;
                            const _$42$arg_215 = _Double._0;
                            _arg_215 = _$42$arg_215;
                            break _L$6;
                          }
                          case 6: {
                            const _Binary = _x_209;
                            const _$42$arg_216 = _Binary._0;
                            _arg_216 = _$42$arg_216;
                            break _L$5;
                          }
                          case 7: {
                            const _Struct = _x_209;
                            const _$42$arg_217 = _Struct._0;
                            _arg_217 = _$42$arg_217;
                            break _L$4;
                          }
                          case 8: {
                            const _List = _x_209;
                            const _$42$arg_218 = _List._0;
                            const _$42$arg_219 = _List._1;
                            _arg_218 = _$42$arg_218;
                            _arg_219 = _$42$arg_219;
                            break _L$3;
                          }
                          case 9: {
                            const _SetValue = _x_209;
                            const _$42$arg_220 = _SetValue._0;
                            const _$42$arg_221 = _SetValue._1;
                            _arg_220 = _$42$arg_220;
                            _arg_221 = _$42$arg_221;
                            break _L$2;
                          }
                          default: {
                            const _MapValue = _x_209;
                            const _$42$arg_222 = _MapValue._0;
                            const _$42$arg_223 = _MapValue._1;
                            const _$42$arg_224 = _MapValue._2;
                            _arg_223 = _$42$arg_223;
                            _arg_222 = _$42$arg_222;
                            _arg_224 = _$42$arg_224;
                            break _L;
                          }
                        }
                      }
                      return _M0MPC15debug4Repr4ctor("Bool", [{ _0: undefined, _1: _M0IPC14bool4BoolPC15debug5Debug8to__repr(_arg_210) }]);
                    }
                    return _M0MPC15debug4Repr4ctor("Byte", [{ _0: undefined, _1: _M0IPC13int3IntPC15debug5Debug8to__repr(_arg_211) }]);
                  }
                  return _M0MPC15debug4Repr4ctor("I16", [{ _0: undefined, _1: _M0IPC13int3IntPC15debug5Debug8to__repr(_arg_212) }]);
                }
                return _M0MPC15debug4Repr4ctor("I32", [{ _0: undefined, _1: _M0IPC13int3IntPC15debug5Debug8to__repr(_arg_213) }]);
              }
              return _M0MPC15debug4Repr4ctor("I64", [{ _0: undefined, _1: _M0IPC15int645Int64PC15debug5Debug8to__repr(_arg_214) }]);
            }
            return _M0MPC15debug4Repr4ctor("Double", [{ _0: undefined, _1: _M0IPC16double6DoublePC15debug5Debug8to__repr(_arg_215) }]);
          }
          return _M0MPC15debug4Repr4ctor("Binary", [{ _0: undefined, _1: _M0IPC15bytes5BytesPC15debug5Debug8to__repr(_arg_216) }]);
        }
        return _M0MPC15debug4Repr4ctor("Struct", [{ _0: undefined, _1: _M0IPC15array5ArrayPC15debug5Debug8to__reprGUiRP211localreview6thrift5ValueEE(_arg_217) }]);
      }
      return _M0MPC15debug4Repr4ctor("List", [{ _0: undefined, _1: _M0IP211localreview6thrift4KindPC15debug5Debug8to__repr(_arg_218) }, { _0: undefined, _1: _M0IPC15array5ArrayPC15debug5Debug8to__reprGRP211localreview6thrift5ValueE(_arg_219) }]);
    }
    return _M0MPC15debug4Repr4ctor("SetValue", [{ _0: undefined, _1: _M0IP211localreview6thrift4KindPC15debug5Debug8to__repr(_arg_220) }, { _0: undefined, _1: _M0IPC15array5ArrayPC15debug5Debug8to__reprGRP211localreview6thrift5ValueE(_arg_221) }]);
  }
  return _M0MPC15debug4Repr4ctor("MapValue", [{ _0: undefined, _1: _M0IPC16option6OptionPC15debug5Debug8to__reprGRP211localreview6thrift4KindE(_arg_222) }, { _0: undefined, _1: _M0IPC16option6OptionPC15debug5Debug8to__reprGRP211localreview6thrift4KindE(_arg_223) }, { _0: undefined, _1: _M0IPC15array5ArrayPC15debug5Debug8to__reprGURP211localreview6thrift5ValueRP211localreview6thrift5ValueEE(_arg_224) }]);
}
function _M0IP211localreview6thrift5ValuePB2Eq5equal(_x_145, _x_146) {
  let _x2_173;
  let _x0_171;
  let _x1_172;
  let _y1_175;
  let _y0_174;
  let _y2_176;
  _L: {
    let _x1_168;
    let _x0_167;
    let _y0_169;
    let _y1_170;
    _L$2: {
      let _x1_164;
      let _x0_163;
      let _y0_165;
      let _y1_166;
      _L$3: {
        let _x0_161;
        let _y0_162;
        _L$4: {
          let _x0_159;
          let _y0_160;
          _L$5: {
            let _x0_157;
            let _y0_158;
            _L$6: {
              let _x0_155;
              let _y0_156;
              _L$7: {
                let _x0_153;
                let _y0_154;
                _L$8: {
                  let _x0_151;
                  let _y0_152;
                  _L$9: {
                    let _x0_149;
                    let _y0_150;
                    _L$10: {
                      let _x0_147;
                      let _y0_148;
                      _L$11: {
                        switch (_x_145.$tag) {
                          case 0: {
                            const _Bool = _x_145;
                            const _$42$x0_147 = _Bool._0;
                            if (_x_146.$tag === 0) {
                              const _Bool$2 = _x_146;
                              const _$42$y0_148 = _Bool$2._0;
                              _x0_147 = _$42$x0_147;
                              _y0_148 = _$42$y0_148;
                              break _L$11;
                            } else {
                              return false;
                            }
                          }
                          case 1: {
                            const _Byte = _x_145;
                            const _$42$x0_149 = _Byte._0;
                            if (_x_146.$tag === 1) {
                              const _Byte$2 = _x_146;
                              const _$42$y0_150 = _Byte$2._0;
                              _x0_149 = _$42$x0_149;
                              _y0_150 = _$42$y0_150;
                              break _L$10;
                            } else {
                              return false;
                            }
                          }
                          case 2: {
                            const _I16 = _x_145;
                            const _$42$x0_151 = _I16._0;
                            if (_x_146.$tag === 2) {
                              const _I16$2 = _x_146;
                              const _$42$y0_152 = _I16$2._0;
                              _x0_151 = _$42$x0_151;
                              _y0_152 = _$42$y0_152;
                              break _L$9;
                            } else {
                              return false;
                            }
                          }
                          case 3: {
                            const _I32 = _x_145;
                            const _$42$x0_153 = _I32._0;
                            if (_x_146.$tag === 3) {
                              const _I32$2 = _x_146;
                              const _$42$y0_154 = _I32$2._0;
                              _x0_153 = _$42$x0_153;
                              _y0_154 = _$42$y0_154;
                              break _L$8;
                            } else {
                              return false;
                            }
                          }
                          case 4: {
                            const _I64 = _x_145;
                            const _$42$x0_155 = _I64._0;
                            if (_x_146.$tag === 4) {
                              const _I64$2 = _x_146;
                              const _$42$y0_156 = _I64$2._0;
                              _x0_155 = _$42$x0_155;
                              _y0_156 = _$42$y0_156;
                              break _L$7;
                            } else {
                              return false;
                            }
                          }
                          case 5: {
                            const _Double = _x_145;
                            const _$42$x0_157 = _Double._0;
                            if (_x_146.$tag === 5) {
                              const _Double$2 = _x_146;
                              const _$42$y0_158 = _Double$2._0;
                              _x0_157 = _$42$x0_157;
                              _y0_158 = _$42$y0_158;
                              break _L$6;
                            } else {
                              return false;
                            }
                          }
                          case 6: {
                            const _Binary = _x_145;
                            const _$42$x0_159 = _Binary._0;
                            if (_x_146.$tag === 6) {
                              const _Binary$2 = _x_146;
                              const _$42$y0_160 = _Binary$2._0;
                              _x0_159 = _$42$x0_159;
                              _y0_160 = _$42$y0_160;
                              break _L$5;
                            } else {
                              return false;
                            }
                          }
                          case 7: {
                            const _Struct = _x_145;
                            const _$42$x0_161 = _Struct._0;
                            if (_x_146.$tag === 7) {
                              const _Struct$2 = _x_146;
                              const _$42$y0_162 = _Struct$2._0;
                              _x0_161 = _$42$x0_161;
                              _y0_162 = _$42$y0_162;
                              break _L$4;
                            } else {
                              return false;
                            }
                          }
                          case 8: {
                            const _List = _x_145;
                            const _$42$x0_163 = _List._0;
                            const _$42$x1_164 = _List._1;
                            if (_x_146.$tag === 8) {
                              const _List$2 = _x_146;
                              const _$42$y0_165 = _List$2._0;
                              const _$42$y1_166 = _List$2._1;
                              _x1_164 = _$42$x1_164;
                              _x0_163 = _$42$x0_163;
                              _y0_165 = _$42$y0_165;
                              _y1_166 = _$42$y1_166;
                              break _L$3;
                            } else {
                              return false;
                            }
                          }
                          case 9: {
                            const _SetValue = _x_145;
                            const _$42$x0_167 = _SetValue._0;
                            const _$42$x1_168 = _SetValue._1;
                            if (_x_146.$tag === 9) {
                              const _SetValue$2 = _x_146;
                              const _$42$y0_169 = _SetValue$2._0;
                              const _$42$y1_170 = _SetValue$2._1;
                              _x1_168 = _$42$x1_168;
                              _x0_167 = _$42$x0_167;
                              _y0_169 = _$42$y0_169;
                              _y1_170 = _$42$y1_170;
                              break _L$2;
                            } else {
                              return false;
                            }
                          }
                          default: {
                            const _MapValue = _x_145;
                            const _$42$x0_171 = _MapValue._0;
                            const _$42$x1_172 = _MapValue._1;
                            const _$42$x2_173 = _MapValue._2;
                            if (_x_146.$tag === 10) {
                              const _MapValue$2 = _x_146;
                              const _$42$y0_174 = _MapValue$2._0;
                              const _$42$y1_175 = _MapValue$2._1;
                              const _$42$y2_176 = _MapValue$2._2;
                              _x2_173 = _$42$x2_173;
                              _x0_171 = _$42$x0_171;
                              _x1_172 = _$42$x1_172;
                              _y1_175 = _$42$y1_175;
                              _y0_174 = _$42$y0_174;
                              _y2_176 = _$42$y2_176;
                              break _L;
                            } else {
                              return false;
                            }
                          }
                        }
                      }
                      return _x0_147 === _y0_148;
                    }
                    return _x0_149 === _y0_150;
                  }
                  return _x0_151 === _y0_152;
                }
                return _x0_153 === _y0_154;
              }
              return BigInt.asUintN(64, _x0_155) === BigInt.asUintN(64, _y0_156);
            }
            return _x0_157 === _y0_158;
          }
          return $bytes_equal(_x0_159, _y0_160);
        }
        return _M0IPC15array5ArrayPB2Eq5equalGUiRP211localreview6thrift5ValueEE(_x0_161, _y0_162);
      }
      return _M0IP211localreview6thrift4KindPB2Eq5equal(_x0_163, _y0_165) && _M0IPC15array5ArrayPB2Eq5equalGRP211localreview6thrift5ValueE(_x1_164, _y1_166);
    }
    return _M0IP211localreview6thrift4KindPB2Eq5equal(_x0_167, _y0_169) && _M0IPC15array5ArrayPB2Eq5equalGRP211localreview6thrift5ValueE(_x1_168, _y1_170);
  }
  return _M0IPC16option6OptionPB2Eq5equalGRP211localreview6thrift4KindE(_x0_171, _y0_174) && (_M0IPC16option6OptionPB2Eq5equalGRP211localreview6thrift4KindE(_x1_172, _y1_175) && _M0IPC15array5ArrayPB2Eq5equalGURP211localreview6thrift5ValueRP211localreview6thrift5ValueEE(_x2_173, _y2_176));
}
function _M0IP211localreview6thrift4KindPC15debug5Debug8to__repr(_x_143) {
  switch (_x_143) {
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
    default: {
      return _M0MPC15debug4Repr4ctor("MapKind", []);
    }
  }
}
function _M0IP211localreview6thrift4KindPB2Eq5equal(_x_139, _x_140) {
  switch (_x_139) {
    case 0: {
      if (_x_140 === 0) {
        return true;
      } else {
        return false;
      }
    }
    case 1: {
      if (_x_140 === 1) {
        return true;
      } else {
        return false;
      }
    }
    case 2: {
      if (_x_140 === 2) {
        return true;
      } else {
        return false;
      }
    }
    case 3: {
      if (_x_140 === 3) {
        return true;
      } else {
        return false;
      }
    }
    case 4: {
      if (_x_140 === 4) {
        return true;
      } else {
        return false;
      }
    }
    case 5: {
      if (_x_140 === 5) {
        return true;
      } else {
        return false;
      }
    }
    case 6: {
      if (_x_140 === 6) {
        return true;
      } else {
        return false;
      }
    }
    case 7: {
      if (_x_140 === 7) {
        return true;
      } else {
        return false;
      }
    }
    case 8: {
      if (_x_140 === 8) {
        return true;
      } else {
        return false;
      }
    }
    case 9: {
      if (_x_140 === 9) {
        return true;
      } else {
        return false;
      }
    }
    default: {
      if (_x_140 === 10) {
        return true;
      } else {
        return false;
      }
    }
  }
}
function _M0IP211localreview6thrift7MessagePC15debug5Debug8to__repr(_x_137) {
  const _bind = [{ _0: "name", _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_x_137.name) }, { _0: "message_type", _1: _M0IPC13int3IntPC15debug5Debug8to__repr(_x_137.message_type) }, { _0: "sequence_id", _1: _M0IPC13int3IntPC15debug5Debug8to__repr(_x_137.sequence_id) }, { _0: "body", _1: _M0IP211localreview6thrift5ValuePC15debug5Debug8to__repr(_x_137.body) }];
  return _M0MPC15debug4Repr6record(_M0MPB3Map3MapGsRPC15debug4ReprE(new _M0TPB9ArrayViewGUsRPC15debug4ReprEE(_bind, 0, 4), undefined));
}
function _M0MP211localreview6thrift5Value4kind(self) {
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
    default: {
      return 10;
    }
  }
}
function _M0FP211localreview6thrift4code(kind, compact) {
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
      default: {
        return 12;
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
      default: {
        return 12;
      }
    }
  }
}
function _M0FP211localreview6thrift4kind(raw, compact) {
  const _bind = [0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 7];
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const k = _bind[_];
      if (_M0FP211localreview6thrift4code(k, compact) === raw) {
        return new _M0DTPC16result6ResultGRP211localreview6thrift4KindRP211localreview6thrift10CodecErrorE2Ok(k);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (compact && raw === 2) {
    return new _M0DTPC16result6ResultGRP211localreview6thrift4KindRP211localreview6thrift10CodecErrorE2Ok(0);
  }
  return new _M0DTPC16result6ResultGRP211localreview6thrift4KindRP211localreview6thrift10CodecErrorE3Err(new _M0DTPC15error5Error43localreview_2fthrift_2eCodecError_2eInvalid("unsupported type tag"));
}
function _M0FP211localreview6thrift6zigzag(n) {
  return BigInt.asUintN(64, BigInt.asUintN(64, n << BigInt(1 & 63)) ^ BigInt.asUintN(64, BigInt.asIntN(64, n) >> BigInt(63 & 63)));
}
function _M0FP211localreview6thrift8unzigzag(n) {
  return BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, n) >> BigInt(1 & 63)) ^ BigInt.asUintN(64, -BigInt.asUintN(64, n & 1n)));
}
function _M0FP211localreview6thrift5fixed(out, value, width, little) {
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
function _M0FP211localreview6thrift6varint(out, value) {
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
function _M0FP211localreview6thrift12write__value(out, value, compact, depth) {
  if (depth > 64 || out.length > 1048576) {
    return new _M0DTPC16result6ResultGuRP211localreview6thrift10CodecErrorE3Err(new _M0DTPC15error5Error43localreview_2fthrift_2eCodecError_2eInvalid("serialization resource limit"));
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
                      switch (value.$tag) {
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
                          const _data = _Binary._0;
                          data = _data;
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
                    return new _M0DTPC16result6ResultGuRP211localreview6thrift10CodecErrorE2Ok(_M0MPC15array5Array4pushGyE(out, b ? 1 : compact ? 2 : 0));
                  }
                  if (n$5 < -128 || n$5 > 127) {
                    return new _M0DTPC16result6ResultGuRP211localreview6thrift10CodecErrorE3Err(new _M0DTPC15error5Error43localreview_2fthrift_2eCodecError_2eInvalid("byte out of range"));
                  }
                  return new _M0DTPC16result6ResultGuRP211localreview6thrift10CodecErrorE2Ok(_M0MPC15array5Array4pushGyE(out, n$5 & 255));
                }
                if (n$4 < -32768 || n$4 > 32767) {
                  return new _M0DTPC16result6ResultGuRP211localreview6thrift10CodecErrorE3Err(new _M0DTPC15error5Error43localreview_2fthrift_2eCodecError_2eInvalid("i16 out of range"));
                }
                return compact ? new _M0DTPC16result6ResultGuRP211localreview6thrift10CodecErrorE2Ok(_M0FP211localreview6thrift6varint(out, _M0FP211localreview6thrift6zigzag(BigInt.asUintN(64, BigInt(n$4))))) : new _M0DTPC16result6ResultGuRP211localreview6thrift10CodecErrorE2Ok(_M0FP211localreview6thrift5fixed(out, BigInt.asUintN(64, BigInt(n$4)), 2, false));
              }
              return compact ? new _M0DTPC16result6ResultGuRP211localreview6thrift10CodecErrorE2Ok(_M0FP211localreview6thrift6varint(out, _M0FP211localreview6thrift6zigzag(BigInt.asUintN(64, BigInt(n$3))))) : new _M0DTPC16result6ResultGuRP211localreview6thrift10CodecErrorE2Ok(_M0FP211localreview6thrift5fixed(out, BigInt.asUintN(64, BigInt(n$3)), 4, false));
            }
            return compact ? new _M0DTPC16result6ResultGuRP211localreview6thrift10CodecErrorE2Ok(_M0FP211localreview6thrift6varint(out, _M0FP211localreview6thrift6zigzag(n$2))) : new _M0DTPC16result6ResultGuRP211localreview6thrift10CodecErrorE2Ok(_M0FP211localreview6thrift5fixed(out, n$2, 8, false));
          }
          return new _M0DTPC16result6ResultGuRP211localreview6thrift10CodecErrorE2Ok(_M0FP211localreview6thrift5fixed(out, $f64_reinterpret_i64(n), 8, compact));
        }
        if (data.length > 1048576) {
          return new _M0DTPC16result6ResultGuRP211localreview6thrift10CodecErrorE3Err(new _M0DTPC15error5Error43localreview_2fthrift_2eCodecError_2eInvalid("binary too large"));
        }
        if (compact) {
          _M0FP211localreview6thrift6varint(out, _M0MPC13int3Int10to__uint64(data.length));
        } else {
          _M0FP211localreview6thrift5fixed(out, _M0MPC13int3Int10to__uint64(data.length), 4, false);
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
        return new _M0DTPC16result6ResultGuRP211localreview6thrift10CodecErrorE2Ok(undefined);
      }
      if (items.length > 100000) {
        return new _M0DTPC16result6ResultGuRP211localreview6thrift10CodecErrorE3Err(new _M0DTPC15error5Error43localreview_2fthrift_2eCodecError_2eInvalid("list too long"));
      }
      const t = _M0FP211localreview6thrift4code(element, compact);
      if (compact) {
        if (items.length < 15) {
          _M0MPC15array5Array4pushGyE(out, (items.length << 4 | t) & 255);
        } else {
          _M0MPC15array5Array4pushGyE(out, (240 | t) & 255);
          _M0FP211localreview6thrift6varint(out, _M0MPC13int3Int10to__uint64(items.length));
        }
      } else {
        _M0MPC15array5Array4pushGyE(out, t & 255);
        _M0FP211localreview6thrift5fixed(out, _M0MPC13int3Int10to__uint64(items.length), 4, false);
      }
      const _bind = items.length;
      let _tmp = 0;
      while (true) {
        const _ = _tmp;
        if (_ < _bind) {
          const item = items[_];
          if (_M0IP016_24default__implPB2Eq10not__equalGRP211localreview6thrift4KindE(_M0MP211localreview6thrift5Value4kind(item), element)) {
            return new _M0DTPC16result6ResultGuRP211localreview6thrift10CodecErrorE3Err(new _M0DTPC15error5Error43localreview_2fthrift_2eCodecError_2eInvalid("heterogeneous list"));
          }
          const _bind$2 = _M0FP211localreview6thrift12write__value(out, item, compact, depth + 1 | 0);
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
      return new _M0DTPC16result6ResultGuRP211localreview6thrift10CodecErrorE2Ok(undefined);
    }
    if (entries.length > 100000) {
      return new _M0DTPC16result6ResultGuRP211localreview6thrift10CodecErrorE3Err(new _M0DTPC15error5Error43localreview_2fthrift_2eCodecError_2eInvalid("map length limit"));
    }
    if (compact && _M0MPC15array5Array9is__emptyGURP211localreview6thrift5ValueRP211localreview6thrift5ValueEE(entries)) {
      return new _M0DTPC16result6ResultGuRP211localreview6thrift10CodecErrorE2Ok(_M0MPC15array5Array4pushGyE(out, 0));
    } else {
      let kt;
      let k;
      _L$3: {
        _L$4: {
          if (key_kind === undefined) {
            if (_M0MPC15array5Array9is__emptyGURP211localreview6thrift5ValueRP211localreview6thrift5ValueEE(entries)) {
              kt = 0;
            } else {
              return new _M0DTPC16result6ResultGuRP211localreview6thrift10CodecErrorE3Err(new _M0DTPC15error5Error43localreview_2fthrift_2eCodecError_2eInvalid("missing map key type"));
            }
          } else {
            const _Some = key_kind;
            const _k = _Some;
            k = _k;
            break _L$4;
          }
          break _L$3;
        }
        kt = _M0FP211localreview6thrift4code(k, compact);
      }
      let vt;
      let k$2;
      _L$4: {
        _L$5: {
          if (value_kind === undefined) {
            if (_M0MPC15array5Array9is__emptyGURP211localreview6thrift5ValueRP211localreview6thrift5ValueEE(entries)) {
              vt = 0;
            } else {
              return new _M0DTPC16result6ResultGuRP211localreview6thrift10CodecErrorE3Err(new _M0DTPC15error5Error43localreview_2fthrift_2eCodecError_2eInvalid("missing map value type"));
            }
          } else {
            const _Some = value_kind;
            const _k = _Some;
            k$2 = _k;
            break _L$5;
          }
          break _L$4;
        }
        vt = _M0FP211localreview6thrift4code(k$2, compact);
      }
      if (compact) {
        _M0FP211localreview6thrift6varint(out, _M0MPC13int3Int10to__uint64(entries.length));
        _M0MPC15array5Array4pushGyE(out, (kt << 4 | vt) & 255);
      } else {
        _M0MPC15array5Array4pushGyE(out, kt & 255);
        _M0MPC15array5Array4pushGyE(out, vt & 255);
        _M0FP211localreview6thrift5fixed(out, _M0MPC13int3Int10to__uint64(entries.length), 4, false);
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
          if (_M0IP016_24default__implPB2Eq10not__equalGORP211localreview6thrift4KindE(_M0MP211localreview6thrift5Value4kind(key), key_kind) || _M0IP016_24default__implPB2Eq10not__equalGORP211localreview6thrift4KindE(_M0MP211localreview6thrift5Value4kind(value$2), value_kind)) {
            return new _M0DTPC16result6ResultGuRP211localreview6thrift10CodecErrorE3Err(new _M0DTPC15error5Error43localreview_2fthrift_2eCodecError_2eInvalid("heterogeneous map"));
          }
          const _bind$2 = _M0FP211localreview6thrift12write__value(out, key, compact, depth + 1 | 0);
          if (_bind$2.$tag === 1) {
            const _ok = _bind$2;
            _ok._0;
          } else {
            return _bind$2;
          }
          const _bind$3 = _M0FP211localreview6thrift12write__value(out, value$2, compact, depth + 1 | 0);
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
      return new _M0DTPC16result6ResultGuRP211localreview6thrift10CodecErrorE2Ok(undefined);
    }
  }
  if (fields.length > 100000) {
    return new _M0DTPC16result6ResultGuRP211localreview6thrift10CodecErrorE3Err(new _M0DTPC15error5Error43localreview_2fthrift_2eCodecError_2eInvalid("too many fields"));
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
        return new _M0DTPC16result6ResultGuRP211localreview6thrift10CodecErrorE3Err(new _M0DTPC15error5Error43localreview_2fthrift_2eCodecError_2eInvalid("field id out of range"));
      }
      const t = compact && _M0IP211localreview6thrift5ValuePB2Eq5equal(item, new _M0DTP211localreview6thrift5Value4Bool(false)) ? 2 : _M0FP211localreview6thrift4code(_M0MP211localreview6thrift5Value4kind(item), compact);
      if (compact) {
        const delta = id - previous.val | 0;
        if (delta > 0 && delta <= 15) {
          _M0MPC15array5Array4pushGyE(out, (delta << 4 | t) & 255);
        } else {
          _M0MPC15array5Array4pushGyE(out, t & 255);
          _M0FP211localreview6thrift6varint(out, _M0FP211localreview6thrift6zigzag(BigInt.asUintN(64, BigInt(id))));
        }
      } else {
        _M0MPC15array5Array4pushGyE(out, t & 255);
        _M0FP211localreview6thrift5fixed(out, BigInt.asUintN(64, BigInt(id)), 2, false);
      }
      if (!compact || _M0IP016_24default__implPB2Eq10not__equalGRP211localreview6thrift4KindE(_M0MP211localreview6thrift5Value4kind(item), 0)) {
        const _bind$2 = _M0FP211localreview6thrift12write__value(out, item, compact, depth + 1 | 0);
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
  return new _M0DTPC16result6ResultGuRP211localreview6thrift10CodecErrorE2Ok(_M0MPC15array5Array4pushGyE(out, 0));
}
function _M0FP211localreview6thrift15encode__message(message, protocol) {
  if (message.message_type < 1 || message.message_type > 4) {
    return new _M0DTPC16result6ResultGzRP211localreview6thrift10CodecErrorE3Err(new _M0DTPC15error5Error43localreview_2fthrift_2eCodecError_2eInvalid("invalid RPC message type"));
  }
  if (_M0IP016_24default__implPB2Eq10not__equalGRP211localreview6thrift4KindE(_M0MP211localreview6thrift5Value4kind(message.body), 7)) {
    return new _M0DTPC16result6ResultGzRP211localreview6thrift10CodecErrorE3Err(new _M0DTPC15error5Error43localreview_2fthrift_2eCodecError_2eInvalid("RPC body must be a struct"));
  }
  const _bind = message.name;
  const name = _M0FPC28encoding4utf814encode_2einner(new _M0TPC16string10StringView(_bind, 0, _bind.length), false);
  if (name.length > 1024) {
    return new _M0DTPC16result6ResultGzRP211localreview6thrift10CodecErrorE3Err(new _M0DTPC15error5Error43localreview_2fthrift_2eCodecError_2eInvalid("RPC method name exceeds 1024 bytes"));
  }
  const compact = _M0IP211localreview6thrift8ProtocolPB2Eq5equal(protocol, 1);
  const out = [];
  if (compact) {
    _M0MPC15array5Array4pushGyE(out, 130);
    _M0MPC15array5Array4pushGyE(out, (message.message_type << 5 | 1) & 255);
    _M0FP211localreview6thrift6varint(out, _M0MPC14uint4UInt10to__uint64(message.sequence_id));
    const _bind$2 = _M0FP211localreview6thrift12write__value(out, new _M0DTP211localreview6thrift5Value6Binary(name), true, 0);
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _ok._0;
    } else {
      return _bind$2;
    }
  } else {
    _M0FP211localreview6thrift5fixed(out, BigInt.asUintN(64, 2147549184n | _M0MPC13int3Int10to__uint64(message.message_type)), 4, false);
    const _bind$2 = _M0FP211localreview6thrift12write__value(out, new _M0DTP211localreview6thrift5Value6Binary(name), false, 0);
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _ok._0;
    } else {
      return _bind$2;
    }
    _M0FP211localreview6thrift5fixed(out, _M0MPC14uint4UInt10to__uint64(message.sequence_id), 4, false);
  }
  const _bind$2 = _M0FP211localreview6thrift12write__value(out, message.body, compact, 0);
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    _ok._0;
  } else {
    return _bind$2;
  }
  if (out.length > 1048576) {
    return new _M0DTPC16result6ResultGzRP211localreview6thrift10CodecErrorE3Err(new _M0DTPC15error5Error43localreview_2fthrift_2eCodecError_2eInvalid("RPC message exceeds one MiB"));
  }
  return new _M0DTPC16result6ResultGzRP211localreview6thrift10CodecErrorE2Ok(_M0MPC15bytes5Bytes11from__array(new _M0TPB9ArrayViewGyE(out, 0, out.length)));
}
function _M0MP211localreview6thrift6Reader4byte(self) {
  if (self.pos >= self.data.length) {
    return new _M0DTPC16result6ResultGiRP211localreview6thrift10CodecErrorE3Err(new _M0DTPC15error5Error43localreview_2fthrift_2eCodecError_2eInvalid("truncated value"));
  }
  const _tmp = self.data;
  const _tmp$2 = self.pos;
  const b = _tmp$2 >>> 0 < _tmp.length ? _tmp[_tmp$2] : $oob();
  self.pos = self.pos + 1 | 0;
  return new _M0DTPC16result6ResultGiRP211localreview6thrift10CodecErrorE2Ok(b);
}
function _M0MP211localreview6thrift6Reader5fixed(self, width, little) {
  const n = new _M0TPB8MutLocalGmE(0n);
  const _bind = 0;
  let _tmp = _bind;
  while (true) {
    const i = _tmp;
    if (i < width) {
      const _tmp$2 = n.val;
      const _bind$2 = _M0MP211localreview6thrift6Reader4byte(self);
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
  return new _M0DTPC16result6ResultGmRP211localreview6thrift10CodecErrorE2Ok(n.val);
}
function _M0MP211localreview6thrift6Reader6varint(self) {
  const n = new _M0TPB8MutLocalGmE(0n);
  const _bind = 0;
  const _bind$2 = 10;
  let _tmp = _bind;
  while (true) {
    const i = _tmp;
    if (i < _bind$2) {
      const _bind$3 = _M0MP211localreview6thrift6Reader4byte(self);
      let b;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        b = _ok._0;
      } else {
        return _bind$3;
      }
      if (i === 9 && b > 1) {
        return new _M0DTPC16result6ResultGmRP211localreview6thrift10CodecErrorE3Err(new _M0DTPC15error5Error43localreview_2fthrift_2eCodecError_2eInvalid("varint overflow"));
      }
      n.val = BigInt.asUintN(64, n.val | BigInt.asUintN(64, _M0MPC13int3Int10to__uint64(b & 127) << BigInt((Math.imul(i, 7) | 0) & 63)));
      if (b < 128) {
        return new _M0DTPC16result6ResultGmRP211localreview6thrift10CodecErrorE2Ok(n.val);
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGmRP211localreview6thrift10CodecErrorE3Err(new _M0DTPC15error5Error43localreview_2fthrift_2eCodecError_2eInvalid("unterminated varint"));
}
function _M0MP211localreview6thrift6Reader6signed(self, width) {
  if (self.compact) {
    const _bind = _M0MP211localreview6thrift6Reader6varint(self);
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    return new _M0DTPC16result6ResultGlRP211localreview6thrift10CodecErrorE2Ok(_M0FP211localreview6thrift8unzigzag(_tmp));
  }
  const _bind = _M0MP211localreview6thrift6Reader5fixed(self, width, false);
  let n;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    n = _ok._0;
  } else {
    return _bind;
  }
  if (width === 8) {
    return new _M0DTPC16result6ResultGlRP211localreview6thrift10CodecErrorE2Ok(n);
  }
  const shift = 64 - (Math.imul(width, 8) | 0) | 0;
  return new _M0DTPC16result6ResultGlRP211localreview6thrift10CodecErrorE2Ok(BigInt.asUintN(64, BigInt.asIntN(64, BigInt.asUintN(64, n << BigInt(shift & 63))) >> BigInt(shift & 63)));
}
function _M0MP211localreview6thrift6Reader5value(self, tag, depth) {
  self.nodes = self.nodes + 1 | 0;
  if (depth > 64 || self.nodes > 100000) {
    return new _M0DTPC16result6ResultGRP211localreview6thrift5ValueRP211localreview6thrift10CodecErrorE3Err(new _M0DTPC15error5Error43localreview_2fthrift_2eCodecError_2eInvalid("decoding resource limit"));
  }
  _L: {
    switch (tag) {
      case 0: {
        const _bind = _M0MP211localreview6thrift6Reader4byte(self);
        let b;
        if (_bind.$tag === 1) {
          const _ok = _bind;
          b = _ok._0;
        } else {
          return _bind;
        }
        if (b === 1) {
          return new _M0DTPC16result6ResultGRP211localreview6thrift5ValueRP211localreview6thrift10CodecErrorE2Ok(new _M0DTP211localreview6thrift5Value4Bool(true));
        } else {
          if (b === (self.compact ? 2 : 0)) {
            return new _M0DTPC16result6ResultGRP211localreview6thrift5ValueRP211localreview6thrift10CodecErrorE2Ok(new _M0DTP211localreview6thrift5Value4Bool(false));
          } else {
            return new _M0DTPC16result6ResultGRP211localreview6thrift5ValueRP211localreview6thrift10CodecErrorE3Err(new _M0DTPC15error5Error43localreview_2fthrift_2eCodecError_2eInvalid("invalid boolean"));
          }
        }
      }
      case 1: {
        const _bind$2 = _M0MP211localreview6thrift6Reader4byte(self);
        let n;
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          n = _ok._0;
        } else {
          return _bind$2;
        }
        return new _M0DTPC16result6ResultGRP211localreview6thrift5ValueRP211localreview6thrift10CodecErrorE2Ok(new _M0DTP211localreview6thrift5Value4Byte(n > 127 ? n - 256 | 0 : n));
      }
      case 2: {
        const _bind$3 = _M0MP211localreview6thrift6Reader6signed(self, 2);
        let n$2;
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          n$2 = _ok._0;
        } else {
          return _bind$3;
        }
        if (BigInt.asIntN(64, n$2) < BigInt.asIntN(64, 18446744073709518848n) || BigInt.asIntN(64, n$2) > BigInt.asIntN(64, 32767n)) {
          return new _M0DTPC16result6ResultGRP211localreview6thrift5ValueRP211localreview6thrift10CodecErrorE3Err(new _M0DTPC15error5Error43localreview_2fthrift_2eCodecError_2eInvalid("i16 overflow"));
        }
        return new _M0DTPC16result6ResultGRP211localreview6thrift5ValueRP211localreview6thrift10CodecErrorE2Ok(new _M0DTP211localreview6thrift5Value3I16(Number(BigInt.asIntN(32, n$2)) | 0));
      }
      case 3: {
        const _bind$4 = _M0MP211localreview6thrift6Reader6signed(self, 4);
        let n$3;
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          n$3 = _ok._0;
        } else {
          return _bind$4;
        }
        if (BigInt.asIntN(64, n$3) < BigInt.asIntN(64, 18446744071562067968n) || BigInt.asIntN(64, n$3) > BigInt.asIntN(64, 2147483647n)) {
          return new _M0DTPC16result6ResultGRP211localreview6thrift5ValueRP211localreview6thrift10CodecErrorE3Err(new _M0DTPC15error5Error43localreview_2fthrift_2eCodecError_2eInvalid("i32 overflow"));
        }
        return new _M0DTPC16result6ResultGRP211localreview6thrift5ValueRP211localreview6thrift10CodecErrorE2Ok(new _M0DTP211localreview6thrift5Value3I32(Number(BigInt.asIntN(32, n$3)) | 0));
      }
      case 4: {
        const _bind$5 = _M0MP211localreview6thrift6Reader6signed(self, 8);
        let _tmp;
        if (_bind$5.$tag === 1) {
          const _ok = _bind$5;
          _tmp = _ok._0;
        } else {
          return _bind$5;
        }
        return new _M0DTPC16result6ResultGRP211localreview6thrift5ValueRP211localreview6thrift10CodecErrorE2Ok(new _M0DTP211localreview6thrift5Value3I64(_tmp));
      }
      case 5: {
        const _bind$6 = _M0MP211localreview6thrift6Reader5fixed(self, 8, self.compact);
        let _tmp$2;
        if (_bind$6.$tag === 1) {
          const _ok = _bind$6;
          _tmp$2 = _ok._0;
        } else {
          return _bind$6;
        }
        return new _M0DTPC16result6ResultGRP211localreview6thrift5ValueRP211localreview6thrift10CodecErrorE2Ok(new _M0DTP211localreview6thrift5Value6Double($i64_reinterpret_f64(_tmp$2)));
      }
      case 6: {
        let n$4;
        if (self.compact) {
          const _bind$7 = _M0MP211localreview6thrift6Reader6varint(self);
          if (_bind$7.$tag === 1) {
            const _ok = _bind$7;
            n$4 = _ok._0;
          } else {
            return _bind$7;
          }
        } else {
          const _bind$7 = _M0MP211localreview6thrift6Reader5fixed(self, 4, false);
          if (_bind$7.$tag === 1) {
            const _ok = _bind$7;
            n$4 = _ok._0;
          } else {
            return _bind$7;
          }
        }
        if (BigInt.asUintN(64, n$4) > BigInt.asUintN(64, 1048576n) || BigInt.asUintN(64, n$4) > BigInt.asUintN(64, _M0MPC13int3Int10to__uint64(self.data.length - self.pos | 0))) {
          return new _M0DTPC16result6ResultGRP211localreview6thrift5ValueRP211localreview6thrift10CodecErrorE3Err(new _M0DTPC15error5Error43localreview_2fthrift_2eCodecError_2eInvalid("invalid binary length"));
        }
        const value = _M0MPC15bytes9BytesView9to__owned(_M0MPC15bytes5Bytes12view_2einner(self.data, self.pos, self.pos + (Number(BigInt.asIntN(32, n$4)) | 0) | 0));
        self.pos = self.pos + (Number(BigInt.asIntN(32, n$4)) | 0) | 0;
        return new _M0DTPC16result6ResultGRP211localreview6thrift5ValueRP211localreview6thrift10CodecErrorE2Ok(new _M0DTP211localreview6thrift5Value6Binary(value));
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
            const _bind$7 = _M0MP211localreview6thrift6Reader6varint(self);
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
              const _bind$8 = _M0MP211localreview6thrift6Reader4byte(self);
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
            const _bind$7 = _M0MP211localreview6thrift6Reader4byte(self);
            let k;
            if (_bind$7.$tag === 1) {
              const _ok = _bind$7;
              k = _ok._0;
            } else {
              return _bind$7;
            }
            const _bind$8 = _M0MP211localreview6thrift6Reader4byte(self);
            let v;
            if (_bind$8.$tag === 1) {
              const _ok = _bind$8;
              v = _ok._0;
            } else {
              return _bind$8;
            }
            const _bind$9 = _M0MP211localreview6thrift6Reader5fixed(self, 4, false);
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
          return new _M0DTPC16result6ResultGRP211localreview6thrift5ValueRP211localreview6thrift10CodecErrorE3Err(new _M0DTPC15error5Error43localreview_2fthrift_2eCodecError_2eInvalid("map length limit"));
        }
        let key_kind;
        if (BigInt.asUintN(64, n$5) === BigInt.asUintN(64, 0n) && kt === 0) {
          key_kind = undefined;
        } else {
          const _bind$7 = _M0FP211localreview6thrift4kind(kt, self.compact);
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
          const _bind$7 = _M0FP211localreview6thrift4kind(vt, self.compact);
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
                const _bind$9 = _M0MP211localreview6thrift6Reader5value(self, k, depth + 1 | 0);
                let _tmp$4;
                if (_bind$9.$tag === 1) {
                  const _ok = _bind$9;
                  _tmp$4 = _ok._0;
                } else {
                  return _bind$9;
                }
                const _tmp$5 = _tmp$4;
                const _bind$10 = _M0MP211localreview6thrift6Reader5value(self, v, depth + 1 | 0);
                let _tmp$6;
                if (_bind$10.$tag === 1) {
                  const _ok = _bind$10;
                  _tmp$6 = _ok._0;
                } else {
                  return _bind$10;
                }
                _M0MPC15array5Array4pushGsE(entries, { _0: _tmp$5, _1: _tmp$6 });
                break _L$3;
              }
              return new _M0DTPC16result6ResultGRP211localreview6thrift5ValueRP211localreview6thrift10CodecErrorE3Err(new _M0DTPC15error5Error43localreview_2fthrift_2eCodecError_2eInvalid("missing map types"));
            }
            _tmp$3 = _ + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        return new _M0DTPC16result6ResultGRP211localreview6thrift5ValueRP211localreview6thrift10CodecErrorE2Ok(new _M0DTP211localreview6thrift5Value8MapValue(key_kind, value_kind, entries));
      }
      default: {
        const fields = [];
        const previous = new _M0TPB8MutLocalGiE(0);
        while (true) {
          const _bind$9 = _M0MP211localreview6thrift6Reader4byte(self);
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
          const _bind$10 = _M0FP211localreview6thrift4kind(raw, self.compact);
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
              const _bind$11 = _M0MP211localreview6thrift6Reader6varint(self);
              let _tmp$4;
              if (_bind$11.$tag === 1) {
                const _ok = _bind$11;
                _tmp$4 = _ok._0;
              } else {
                return _bind$11;
              }
              const n$6 = _M0FP211localreview6thrift8unzigzag(_tmp$4);
              if (BigInt.asIntN(64, n$6) < BigInt.asIntN(64, 18446744073709518848n) || BigInt.asIntN(64, n$6) > BigInt.asIntN(64, 32767n)) {
                return new _M0DTPC16result6ResultGRP211localreview6thrift5ValueRP211localreview6thrift10CodecErrorE3Err(new _M0DTPC15error5Error43localreview_2fthrift_2eCodecError_2eInvalid("field id overflow"));
              }
              id = Number(BigInt.asIntN(32, n$6)) | 0;
            }
          } else {
            const _bind$11 = _M0MP211localreview6thrift6Reader6signed(self, 2);
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
            return new _M0DTPC16result6ResultGRP211localreview6thrift5ValueRP211localreview6thrift10CodecErrorE3Err(new _M0DTPC15error5Error43localreview_2fthrift_2eCodecError_2eInvalid("field id overflow"));
          }
          let item;
          if (self.compact && _M0IP211localreview6thrift4KindPB2Eq5equal(tag$2, 0)) {
            item = new _M0DTP211localreview6thrift5Value4Bool(raw === 1);
          } else {
            const _bind$11 = _M0MP211localreview6thrift6Reader5value(self, tag$2, depth + 1 | 0);
            if (_bind$11.$tag === 1) {
              const _ok = _bind$11;
              item = _ok._0;
            } else {
              return _bind$11;
            }
          }
          _M0MPC15array5Array4pushGsE(fields, { _0: id, _1: item });
          previous.val = id;
          if (fields.length > 100000) {
            return new _M0DTPC16result6ResultGRP211localreview6thrift5ValueRP211localreview6thrift10CodecErrorE3Err(new _M0DTPC15error5Error43localreview_2fthrift_2eCodecError_2eInvalid("field count limit"));
          }
          continue;
        }
        return new _M0DTPC16result6ResultGRP211localreview6thrift5ValueRP211localreview6thrift10CodecErrorE2Ok(new _M0DTP211localreview6thrift5Value6Struct(fields));
      }
    }
  }
  const is_set = _M0IP211localreview6thrift4KindPB2Eq5equal(tag, 9);
  const _bind = _M0MP211localreview6thrift6Reader4byte(self);
  let header;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    header = _ok._0;
  } else {
    return _bind;
  }
  const _bind$2 = _M0FP211localreview6thrift4kind(self.compact ? header & 15 : header, self.compact);
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
      const _bind$3 = _M0MP211localreview6thrift6Reader6varint(self);
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
    const _bind$3 = _M0MP211localreview6thrift6Reader5fixed(self, 4, false);
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      n = _ok._0;
    } else {
      return _bind$3;
    }
  }
  if (BigInt.asUintN(64, n) > BigInt.asUintN(64, 100000n)) {
    return new _M0DTPC16result6ResultGRP211localreview6thrift5ValueRP211localreview6thrift10CodecErrorE3Err(new _M0DTPC15error5Error43localreview_2fthrift_2eCodecError_2eInvalid("list length exceeds limit"));
  }
  const items = [];
  const _bind$3 = 0;
  const _bind$4 = Number(BigInt.asIntN(32, n)) | 0;
  let _tmp = _bind$3;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$4) {
      const _bind$5 = _M0MP211localreview6thrift6Reader5value(self, tag$2, depth + 1 | 0);
      let _tmp$2;
      if (_bind$5.$tag === 1) {
        const _ok = _bind$5;
        _tmp$2 = _ok._0;
      } else {
        return _bind$5;
      }
      _M0MPC15array5Array4pushGsE(items, _tmp$2);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return is_set ? new _M0DTPC16result6ResultGRP211localreview6thrift5ValueRP211localreview6thrift10CodecErrorE2Ok(new _M0DTP211localreview6thrift5Value8SetValue(tag$2, items)) : new _M0DTPC16result6ResultGRP211localreview6thrift5ValueRP211localreview6thrift10CodecErrorE2Ok(new _M0DTP211localreview6thrift5Value4List(tag$2, items));
}
function _M0FP211localreview6thrift15decode__message(data, protocol) {
  if (data.length > 1048576) {
    return new _M0DTPC16result6ResultGRP211localreview6thrift7MessageRP211localreview6thrift10CodecErrorE3Err(new _M0DTPC15error5Error43localreview_2fthrift_2eCodecError_2eInvalid("RPC message exceeds one MiB"));
  }
  const compact = _M0IP211localreview6thrift8ProtocolPB2Eq5equal(protocol, 1);
  const reader = new _M0TP211localreview6thrift6Reader(data, 0, 0, compact);
  let message_type;
  let sequence_id;
  let name_data;
  _L: {
    if (compact) {
      const _bind = _M0MP211localreview6thrift6Reader4byte(reader);
      let _tmp;
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _tmp = _ok._0;
      } else {
        return _bind;
      }
      if (_tmp !== 130) {
        return new _M0DTPC16result6ResultGRP211localreview6thrift7MessageRP211localreview6thrift10CodecErrorE3Err(new _M0DTPC15error5Error43localreview_2fthrift_2eCodecError_2eInvalid("invalid Compact protocol id"));
      }
      const _bind$2 = _M0MP211localreview6thrift6Reader4byte(reader);
      let version_type;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        version_type = _ok._0;
      } else {
        return _bind$2;
      }
      if ((version_type & 31) !== 1) {
        return new _M0DTPC16result6ResultGRP211localreview6thrift7MessageRP211localreview6thrift10CodecErrorE3Err(new _M0DTPC15error5Error43localreview_2fthrift_2eCodecError_2eInvalid("unsupported Compact version"));
      }
      const message_type$2 = version_type >> 5;
      const _bind$3 = _M0MP211localreview6thrift6Reader6varint(reader);
      let seq;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        seq = _ok._0;
      } else {
        return _bind$3;
      }
      if (BigInt.asUintN(64, seq) > BigInt.asUintN(64, 4294967295n)) {
        return new _M0DTPC16result6ResultGRP211localreview6thrift7MessageRP211localreview6thrift10CodecErrorE3Err(new _M0DTPC15error5Error43localreview_2fthrift_2eCodecError_2eInvalid("sequence id overflow"));
      }
      const sequence_id$2 = Number(BigInt.asUintN(32, seq)) | 0;
      let name_data$2;
      const _bind$4 = _M0MP211localreview6thrift6Reader5value(reader, 6, 0);
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
        return new _M0DTPC16result6ResultGRP211localreview6thrift7MessageRP211localreview6thrift10CodecErrorE3Err(new _M0DTPC15error5Error43localreview_2fthrift_2eCodecError_2eInvalid("invalid method name"));
      }
      message_type = message_type$2;
      sequence_id = sequence_id$2;
      name_data = name_data$2;
      break _L;
    } else {
      const _bind = _M0MP211localreview6thrift6Reader5fixed(reader, 4, false);
      let version_type;
      if (_bind.$tag === 1) {
        const _ok = _bind;
        version_type = _ok._0;
      } else {
        return _bind;
      }
      if (BigInt.asUintN(64, BigInt.asUintN(64, version_type & 4294967040n)) !== BigInt.asUintN(64, 2147549184n)) {
        return new _M0DTPC16result6ResultGRP211localreview6thrift7MessageRP211localreview6thrift10CodecErrorE3Err(new _M0DTPC15error5Error43localreview_2fthrift_2eCodecError_2eInvalid("expected strict Binary v1 header"));
      }
      const message_type$2 = Number(BigInt.asIntN(32, BigInt.asUintN(64, version_type & 255n))) | 0;
      let name_data$2;
      const _bind$2 = _M0MP211localreview6thrift6Reader5value(reader, 6, 0);
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
        return new _M0DTPC16result6ResultGRP211localreview6thrift7MessageRP211localreview6thrift10CodecErrorE3Err(new _M0DTPC15error5Error43localreview_2fthrift_2eCodecError_2eInvalid("invalid method name"));
      }
      const _bind$4 = _M0MP211localreview6thrift6Reader5fixed(reader, 4, false);
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
    }
  }
  if (message_type < 1 || message_type > 4) {
    return new _M0DTPC16result6ResultGRP211localreview6thrift7MessageRP211localreview6thrift10CodecErrorE3Err(new _M0DTPC15error5Error43localreview_2fthrift_2eCodecError_2eInvalid("invalid RPC message type"));
  }
  if (name_data.length > 1024) {
    return new _M0DTPC16result6ResultGRP211localreview6thrift7MessageRP211localreview6thrift10CodecErrorE3Err(new _M0DTPC15error5Error43localreview_2fthrift_2eCodecError_2eInvalid("RPC method name exceeds 1024 bytes"));
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
    return new _M0DTPC16result6ResultGRP211localreview6thrift7MessageRP211localreview6thrift10CodecErrorE3Err(new _M0DTPC15error5Error43localreview_2fthrift_2eCodecError_2eInvalid("invalid UTF-8 method name"));
  }
  const _bind = _M0MP211localreview6thrift6Reader5value(reader, 7, 0);
  let body;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    body = _ok._0;
  } else {
    return _bind;
  }
  if (reader.pos !== data.length) {
    return new _M0DTPC16result6ResultGRP211localreview6thrift7MessageRP211localreview6thrift10CodecErrorE3Err(new _M0DTPC15error5Error43localreview_2fthrift_2eCodecError_2eInvalid("trailing RPC bytes"));
  }
  return new _M0DTPC16result6ResultGRP211localreview6thrift7MessageRP211localreview6thrift10CodecErrorE2Ok(new _M0TP211localreview6thrift7Message(name, message_type, sequence_id, body));
}
function _M0FP211localreview6thrift6encode(value, protocol) {
  const out = [];
  const _bind = _M0FP211localreview6thrift12write__value(out, value, _M0IP211localreview6thrift8ProtocolPB2Eq5equal(protocol, 1), 0);
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _ok._0;
  } else {
    return _bind;
  }
  if (out.length > 1048576) {
    return new _M0DTPC16result6ResultGzRP211localreview6thrift10CodecErrorE3Err(new _M0DTPC15error5Error43localreview_2fthrift_2eCodecError_2eInvalid("encoded output exceeds one MiB"));
  }
  return new _M0DTPC16result6ResultGzRP211localreview6thrift10CodecErrorE2Ok(_M0MPC15bytes5Bytes11from__array(new _M0TPB9ArrayViewGyE(out, 0, out.length)));
}
function _M0FP211localreview6thrift6decode(data, root, protocol) {
  if (data.length > 1048576) {
    return new _M0DTPC16result6ResultGRP211localreview6thrift5ValueRP211localreview6thrift10CodecErrorE3Err(new _M0DTPC15error5Error43localreview_2fthrift_2eCodecError_2eInvalid("input exceeds one MiB"));
  }
  const reader = new _M0TP211localreview6thrift6Reader(data, 0, 0, _M0IP211localreview6thrift8ProtocolPB2Eq5equal(protocol, 1));
  const _bind = _M0MP211localreview6thrift6Reader5value(reader, root, 0);
  let result;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    result = _ok._0;
  } else {
    return _bind;
  }
  if (reader.pos !== data.length) {
    return new _M0DTPC16result6ResultGRP211localreview6thrift5ValueRP211localreview6thrift10CodecErrorE3Err(new _M0DTPC15error5Error43localreview_2fthrift_2eCodecError_2eInvalid("trailing bytes"));
  }
  return new _M0DTPC16result6ResultGRP211localreview6thrift5ValueRP211localreview6thrift10CodecErrorE2Ok(result);
}
function _M0FP411localreview6thrift3cmd3web3hex(data) {
  const alphabet = "0123456789abcdef";
  const out = [];
  const _bind = data.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
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
      _M0MPC15array5Array4pushGsE(out, `${_tmp$3}${_M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(alphabet, _tmp$4, (n % 16 | 0) + 1 | 0))}`);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$2 = "";
  return _M0MPC15array5Array4joinGsE(out, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length));
}
function _M0FP411localreview6thrift3cmd3web5unhex(text) {
  const out = [];
  const high = new _M0TPB8MutLocalGiE(-1);
  if (text.length > 200000) {
    return new _M0DTPC16result6ResultGzRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure("input too long"));
  }
  const _it = _M0MPC16string6String4iter(text);
  while (true) {
    let c;
    _L: {
      const _bind = _M0MPB4Iter4nextGcE(_it);
      if (_bind === -1) {
        break;
      } else {
        const _Some = _bind;
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
function _M0FP411localreview6thrift3cmd3web3run(input) {
  let _try_err;
  _L: {
    const _bind = "rpc-";
    const rpc = _M0MPC16string6String11has__prefix(input, new _M0TPC16string10StringView(_bind, 0, _bind.length));
    const payload = rpc ? _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(input, 4, undefined)) : input;
    const _bind$2 = "compact:";
    const compact = _M0MPC16string6String11has__prefix(payload, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length));
    const _bind$3 = "binary:";
    const binary = _M0MPC16string6String11has__prefix(payload, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length));
    if (!compact && !binary) {
      _try_err = new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure("use compact:, binary:, rpc-compact: or rpc-binary:");
      break _L;
    }
    const protocol = compact ? 1 : 0;
    const _bind$4 = _M0FP411localreview6thrift3cmd3web5unhex(_M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(payload, compact ? 8 : 7, undefined)));
    let data;
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      data = _ok._0;
    } else {
      const _err = _bind$4;
      _try_err = _err._0;
      break _L;
    }
    if (rpc) {
      const _bind$5 = _M0FP211localreview6thrift15decode__message(data, protocol);
      let message;
      if (_bind$5.$tag === 1) {
        const _ok = _bind$5;
        message = _ok._0;
      } else {
        const _err = _bind$5;
        _try_err = _err._0;
        break _L;
      }
      const _tmp = _M0IP016_24default__implPB4Show10to__stringGRPC15debug4ReprE(_M0MPC15debug4Repr4ReprGRP211localreview6thrift7MessageE(message));
      const _bind$6 = _M0FP211localreview6thrift15encode__message(message, protocol);
      let _tmp$2;
      if (_bind$6.$tag === 1) {
        const _ok = _bind$6;
        _tmp$2 = _ok._0;
      } else {
        const _err = _bind$6;
        _try_err = _err._0;
        break _L;
      }
      return `${_tmp}\n\nRe-encoded: ${_M0FP411localreview6thrift3cmd3web3hex(_tmp$2)}`;
    }
    const _bind$5 = _M0FP211localreview6thrift6decode(data, 7, protocol);
    let value;
    if (_bind$5.$tag === 1) {
      const _ok = _bind$5;
      value = _ok._0;
    } else {
      const _err = _bind$5;
      _try_err = _err._0;
      break _L;
    }
    const _tmp = _M0IP016_24default__implPB4Show10to__stringGRPC15debug4ReprE(_M0MPC15debug4Repr4ReprGRP211localreview6thrift5ValueE(value));
    const _bind$6 = _M0FP211localreview6thrift6encode(value, protocol);
    let _tmp$2;
    if (_bind$6.$tag === 1) {
      const _ok = _bind$6;
      _tmp$2 = _ok._0;
    } else {
      const _err = _bind$6;
      _try_err = _err._0;
      break _L;
    }
    return `${_tmp}\n\nRe-encoded: ${_M0FP411localreview6thrift3cmd3web3hex(_tmp$2)}`;
  }
  const e = _try_err;
  return `ERROR: ${_M0IP016_24default__implPB4Show10to__stringGRPC15debug4ReprE(_M0MPC15debug4Repr4ReprGRPC15error5ErrorE(e))}`;
}
(() => {
})();
export { _M0FP411localreview6thrift3cmd3web3run as run }
//# sourceMappingURL=web.js.map
