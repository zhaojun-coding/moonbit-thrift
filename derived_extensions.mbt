///|
pub extend CodecError with @moonbitlang/core/debug.Debug::{to_repr}

///|
pub extend IdlConst with @moonbitlang/core/debug.Debug::{to_repr}

///|
pub extend IdlConst with Eq::{not_equal, equal}

///|
pub extend IdlDefinition with @moonbitlang/core/debug.Debug::{to_repr}

///|
pub extend IdlDefinition with Eq::{not_equal, equal}

///|
pub extend IdlField with @moonbitlang/core/debug.Debug::{to_repr}

///|
pub extend IdlField with Eq::{not_equal, equal}

///|
pub extend IdlLocation with @moonbitlang/core/debug.Debug::{to_repr}

///|
pub extend IdlLocation with Eq::{not_equal, equal}

///|
pub extend IdlLocation with ToJson::{to_json}

///|
pub extend IdlMethod with @moonbitlang/core/debug.Debug::{to_repr}

///|
pub extend IdlMethod with Eq::{not_equal, equal}

///|
pub extend IdlModule with @moonbitlang/core/debug.Debug::{to_repr}

///|
pub extend IdlModule with Eq::{not_equal, equal}

///|
pub extend IdlType with @moonbitlang/core/debug.Debug::{to_repr}

///|
pub extend IdlType with Eq::{not_equal, equal}

///|
pub extend Kind with @moonbitlang/core/debug.Debug::{to_repr}

///|
pub extend Kind with Eq::{not_equal, equal}

///|
pub extend Message with @moonbitlang/core/debug.Debug::{to_repr}

///|
pub extend Message with Eq::{not_equal, equal}

///|
pub extend PendingCall with @moonbitlang/core/debug.Debug::{to_repr}

///|
pub extend PendingCall with Eq::{not_equal, equal}

///|
pub extend Protocol with @moonbitlang/core/debug.Debug::{to_repr}

///|
pub extend Protocol with Eq::{not_equal, equal}

///|
pub extend RpcOutcome with @moonbitlang/core/debug.Debug::{to_repr}

///|
pub extend RpcOutcome with Eq::{not_equal, equal}

///|
pub extend SchemaError with @moonbitlang/core/debug.Debug::{to_repr}

///|
pub extend Value with @moonbitlang/core/debug.Debug::{to_repr}

///|
pub extend Value with Eq::{not_equal, equal}
