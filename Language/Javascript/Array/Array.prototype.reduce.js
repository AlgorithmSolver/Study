// 1.정의
//  1) 초기값을 설정하지 않았을때 vs 초기값을 설정했을때
//      1-1) 초기값을 설정하지 않으면 아래에서는 acc = 1, cur = 2부터 시작한다. 때문에 총 3번 순회한다.
let tmp1 = 0;
const sum1 = [1, 2, 3, 4].reduce((acc, cur, idx, arr) => {
  tmp = acc + cur;
  return tmp;
});
//      1-2) 초기값을 설정하면 아래에서는 acc = 0, cur = 1부터 시작한다. 때문에 총 4번 순회한다.
const sum2 = [1, 2, 3, 4].reduce((acc, cur, idx, arr) => {
  tmp = acc + cur;
  return tmp;
}, 0);
// console.log(sum2);

//  2) reduce는 배열을 모두 순회하면서 콜백함수의 반환값이
//     다음 콜백함수 순회 시에 첫번째 인수로 전달한다. 최종적으로 하나의 값을 전달한다.

// 2.활용
//  1) 평균 : reduce와 삼항연산자를 이용하여 길이의 마지막일때는 평균을 반환하고 마지막이 아니면 합을 반환한다.
const values3 = [1, 2, 3, 4, 5, 6];
const average3 = values3.reduce((acc, cur, idx, { length }) => {
  return idx === length - 1 ? (acc + cur) / length : acc + cur;
});

//  2) 최대값 구하기
//      (1) reduce로 최댓값 구하기
const values4 = [1, 2, 3, 4, 5];
const max4 = values4.reduce((acc, cur) => (acc > cur ? acc : cur), 0);
// console.log(max4);
//      (2) Math.max로 최댓값 구하기
const max42 = Math.max(...values4);

//  3) 요소의 중복 횟수 구하기
const fruits5 = ["banana", "apple", "orange", "orange", "apple"];
const count5 = fruits5.reduce((acc, cur) => {
  acc[cur] = (acc[cur] || 0) + 1;
  return acc;
}, {});
// console.log(count5);

// 4) 중첩 배열 평탄화
const values6 = [1, [2, 3], 4, [5, 6]];
const flatten6 = values6.reduce((acc, cur) => acc.concat(cur), []);
// console.log([].concat(6));
// console.log([].concat([6]));
// ... 이 두가지가 같음
// console.log(flatten6);

const flatten61 = values6.flat(1);
const values62 = [1, [2, 3, [4, 5, 6], 7, 8], 9];
const flatten62 = values62.flat(2);
// console.log(flatten62)
// console.log(flatten61);

// 5) 중복 요소 제거
const values7 = [1, 2, 1, 3, 5, 4, 5, 3, 4, 4];
const result71 = values7
  .reduce((acc, cur, i, arr) => {
    if (arr.indexOf(cur) === i) acc.push(cur);
    return acc;
  }, [])
  .sort((a, b) => a - b);
console.log(result71);

// 6) 활용
// reduce함수 : reduce는 배열에 있는 모든 값을 더할 떄 사용한다.

// - 1. null을 포함한 숫자 더하기
const numbers = [null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 맨앞에 있는 값 null을 지우고 1부터 10까지 다 더해라!
// null + 1 = 1임 무시하고 더해도 됨
const num = numbers.reduce((acc, val) => {
  return acc + val * val;
});

// console.log(null + 1);
// null + 1 = 1?ㅇㅇㅇㅇㅇㅇㅇ

// - 2. 오브젝트 항목에서 원하는 값만 더하기
const brothers = [
  {
    name: "양주진",
    age: 32,
    job: "코인러",
    married: false,
  },
  {
    name: "양주원",
    age: 33,
    job: "코인러",
    married: false,
  },
  {
    name: "양주혁",
    age: 34,
    job: "잡부",
    married: true,
  },
];

//  ** initialValue의 가격이 있고 없고에 결과값에 차이가 있음.**
//  2-1) initialValue가 존재 -> 초기 acc에는 0이 들어감
// console.log("ageSum1");
let initialValue = 0;
const ageSum1 = brothers.reduce((acc, cur) => {
  // console.log("acc:",acc);
  // console.log("cur:",cur.age);
  return acc + cur.age;
}, initialValue);
// console.log("ageSum1:",ageSum1);

//  2-2) initialValue가 존재x -> 초기 acc에는 ageSum2[0]이 들어감
// console.log("ageSum2");
const ageSum2 = brothers.reduce((acc, cur) => {
  // console.log("acc:",acc);
  // console.log("cur:",cur.age);
  return acc + cur.age;
});
// console.log("ageSum2:",ageSum2);
