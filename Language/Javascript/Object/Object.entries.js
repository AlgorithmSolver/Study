// 키와 값을 배열로 차례차례 반환
const obj = { one: 1, two: 2, three: 3 };
const list = Object.entries(obj);
for (let keyValue of list) {
  console.log(keyValue); // [one,1] [two,2] [three,3]
}
