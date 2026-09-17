include "common.thrift"
namespace py demo

service Records extends common.Base {
  common.Record echo(1: common.Record value)
  i64 add(1: i64 a, 2: i64 b)
  void fail(1: i32 code) throws (1: common.Problem problem)
  oneway void notify(1: string message)
  string slow(1: i32 delayMs)
}
