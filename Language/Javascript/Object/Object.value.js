const obj = { one: 1, two: 2, three: 3 };
const list = Object.values(obj);
for (let value of list) {
  console.log(value); // 1,2,3
}

// 프로퍼티 숫자 -> 문자 순서
const obj2 = { one: 1, 2: two, three: 3 };
const list2 = Object.values(obj);
for (let value of list2) {
  console.log(value); // two 1 3
}
