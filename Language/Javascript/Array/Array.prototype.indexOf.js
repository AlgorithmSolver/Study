// 1. arr.indexOf(value) 기본 => 배열의 값을 넣으면, 그 배열의 인덱스를 반환
// 즉, indexOf의 input은 value, output은 index :: 배열의 값을 알고 있을 때, 인덱스를 알려달라!
const arr1 = [11,22,33,44,55];
console.log(Math.min(...arr1)); // arr1의 가장 작은값 11을 반환
let arrValue = Math.min(...arr1);
console.log(arr1.indexOf(arrValue)); 
console.log(arr1.indexOf(Math.min(...arr1))); 

console.log(arr1.indexOf(33));