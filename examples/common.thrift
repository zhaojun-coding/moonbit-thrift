namespace py common

typedef i64 AccountId
enum Status { READY = 1, ACTIVE = 2 }

struct Record {
  1: required AccountId id
  2: optional string name = "anonymous"
  3: optional binary data
  4: optional map<string, list<i32>> groups
  5: optional uuid tag
  6: optional set<string> labels
  7: Status state = Status.READY
  8: optional Record child
}

exception Problem {
  1: i32 code
  2: string message
}

service Base {
  string ping(1: string message)
}
