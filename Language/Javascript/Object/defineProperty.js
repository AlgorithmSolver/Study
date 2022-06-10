// 1. defineProperty 메소드
let obj = {};
Object.defineProperty(obj, "book", {
  value: "JS북",
  // *** 핵심 ***
  enumerable: true, // 열거할 수 없어서 데이터를 보호할 수 있는 형태(이 메소드 목적)
  writable: true,
  configurable: false, // false가 default 값
  // ***********
});
console.log(obj);
