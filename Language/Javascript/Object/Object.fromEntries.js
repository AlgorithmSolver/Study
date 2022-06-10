// [[key,value]] 형태를 {key:value}형태로 변환 : fromEntries()
const list = [
  ["one", 10],
  ["two", 20],
  ["two", 30],
];
const obj = Object.fromEntries(list);
console.log(obj); //{one:10, two:30}
