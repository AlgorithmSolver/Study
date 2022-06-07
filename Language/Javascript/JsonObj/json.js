let value = {
  book: "책",
  title: 123,
};
let value2 = ["a", "b", 123];

let result = JSON.stringify(value);
let result2 = JSON.stringify(value2);
let result3 = JSON.stringify([Infinity, NaN, null]); // 주의 : [null,null,null]
let result4 = JSON.stringify([true, false]); //[true,false]

let result5 = JSON.stringify(undefined); //undefined
let result6 = JSON.stringify([undefined]); //[null]
let result7 = JSON.stringify({ value: undefined }); //{}
