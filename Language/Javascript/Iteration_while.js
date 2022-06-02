// while문 안에서 const변수를 사용하고 값을 재할당할 경우 사용이 가능한건가? ㅇㅇ 가능함

// +추가) 코드란 무엇인가?
//       코드를 작성하는 사고방법은 무엇인가?

// let count = 3;
// while(true){
//     const v = count;
//     console.log(v);
//     count--;
//     if(count === 0) break;
// }
let start = new Date();
let n = 100000000;
while(n>0){
    n--;
}
let end = new Date();
console.log("시간: ",end-start);