// sort
// 1.기초개념
// sort는 기본적으로 유니코드를 기준으로 오더를 정한다.
// 원본을 훼손.
let arr1 = [2, 3, 3, 5, 1, 3];
arr1.sort();
console.log(arr1);

// 2.파라미터로 콜백함수 인풋 : return값에 따라서 순서결정
let arr2 = [2, 3, 3, 5, 1, 3];
let arr3 = [2, 3, 3, 5, 1, 3];
let arr4 = [2, 3, 3, 5, 1, 3];
// 1) (a,b) => 실행코드.. 에서 return -1이면 a,b순서 그대로 유지
arr2.sort((a, b) => a - b); // 가 있다고 가정해보자.
// a-b를 반환했을때 a,b값에 관계없이 a-b = -1이면 a,b의 순서를 그대로 유지한다.
// 즉, a-b = -1일 경우, a,b의 순서가 그대로 유지된다는 이야기는
// b가 a보다 크다는 의미이므로 오름차순이라는 것을 뜻한다.
// 2) (a,b) => 실행코드.. 에서 return 0이면  a,b순서 바꾸지 않음
// 3) (a,b) => 실행코드.. 에서 return 1이면 b,a순서로 사용

// 3. 응용
//  1) 객체배열에서 sort함수를 응용해보자.
let arr5 = [
  { name: "kim", age: 31, grade: "A", major: "Social Science" },
  { name: "lee", age: 28, grade: "B", major: "Social Science" },
  { name: "park", age: 25, grade: "A", major: "Social Science" },
  { name: "kyu", age: 23, grade: "C", major: "Social Science" },
  { name: "jay", age: 22, grade: "D", major: "Social Science" },
  { name: "mick", age: 19, grade: "A", major: "Social Science" },
  { name: "kaa", age: 39, grade: "A", major: "Social Science" },
];

arr5.sort((a, b) => {
  return a.age - b.age;
});
console.log(arr5);

//  2) 오름차순 정렬을 나이에 대해서, 등급에 대해서 구현해보자.( 엑셀문제 찾아서 여기다가 적용하기 )

// 4.고찰
let arr6 = Array.from({ length: 10000000 }, (_, v) => v++).reverse();
let start6 = new Date();
arr6.sort((a, b) => a - b);
let end6 = new Date();
console.log(end6 - start6);

// 5.활용
// 1. sort함수 기본정의
const testArr = [2, 1, 4, 6];
//리턴값이 음수면 즉 a가 작으면 a,b순
//리턴값이 양수면 즉 b가 작으면 b,a순
testArr.sort((a, b) => {
  return a - b;
});
console.log("1.sort기본정의 : ", testArr);

// 2. 2차원배열에서 element를 기준으로 정렬
const twoDimentionArr1 = [
  ["classic", 1450],
  ["pop", 3100],
  ["k-pop", 2109],
];
// sort함수 사용
twoDimentionArr1.sort((a, b) => a[1] - b[1]);
console.log("2차원배열정렬1 : ", twoDimentionArr1);
const twoDimentionArr2 = [
  ["age", 30],
  ["age", 42],
  ["age", 29],
];
twoDimentionArr2.sort((a, b) => a[1] - b[1]);
console.log("2차원배열정렬2 : ", twoDimentionArr2);
