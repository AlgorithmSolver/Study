// "숫자"(따옴표된 숫자 즉, 문자) -> parsing -> 숫자
// "Boolean" ( " ) -> parsing -> Boolean
// "배열" ( " ) -> parsing -> 배열

// 예> 숫자
let value = "123";
try {
  let result = JSON.parse(value);
} catch (e) {
  console.log("JSON 파싱 에러");
}

console.log(result);
console.log(typeof result);

// 활용
let data = '{"book" : "책","movie" : "영화"}';
let check = function (key, value) {
  return key === "book" ? "JS책" : value;
  // 값을 반환하지 않거나 undefined를 반환하면
  // 프로퍼티가 제외되므로 반환 해야 함
};
let result = JSON.parse(data, check);
console.log(result); //{book: "JS책", movie:"영화"}
