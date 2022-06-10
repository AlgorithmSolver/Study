// 추가금지,
// 삭제,변경 가능
let obj = {};
Object.preventExtensions(obj);
try {
  Object.defineProperty(obj, "book", {
    value: "책",
  });
} catch (e) {
  console.log("추가 불가");
}
