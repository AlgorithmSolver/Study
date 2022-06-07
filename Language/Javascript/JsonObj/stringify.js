// 1.stringify 두번째 파라미터
// 1)함수일경우
let data = { book: "책", point: 55 };
function replace(key, value) {
  return key === "point" ? 11 : value;
}
let result = JSON.stringify(data, replace);
console.log(result); //{"book":"책","point":11}

// 2)배열일경우
let data2 = { book: "책", point: 11, amount: 11 };
let result2 = JSON.stringify(data, ["book", "amount"]);
console.log(result); //{"book":"책","amount":11}

// 2.stringify 세번째 파라미터 -> 가독성을 위한 것
