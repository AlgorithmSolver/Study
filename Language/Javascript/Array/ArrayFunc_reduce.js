// reduce함수 : reduce는 배열에 있는 모든 값을 더할 떄 사용한다.

// - 1. null을 포함한 숫자 더하기
const numbers = [null,1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 맨앞에 있는 값 null을 지우고 1부터 10까지 다 더해라!
// null + 1 = 1임 무시하고 더해도 됨
const num = numbers.reduce((acc,val)=>{
    return acc + val * val
});

// console.log(null + 1); 
// null + 1 = 1?ㅇㅇㅇㅇㅇㅇㅇ

// - 2. 오브젝트 항목에서 원하는 값만 더하기
const brothers = [
    {
        name : '양주진',
        age : 32,
        job : '코인러',
        married: false
    },
    {
        name : '양주원',
        age : 33,
        job : '코인러',
        married: false
    },
    {
        name : '양주혁',
        age : 34,
        job : '잡부',
        married: true
    }
];

//  ** initialValue의 가격이 있고 없고에 결과값에 차이가 있음.**
//  2-1) initialValue가 존재 -> 초기 acc에는 0이 들어감
// console.log("ageSum1");
let initialValue = 0; 
const ageSum1 = brothers.reduce((acc, cur) => {
    // console.log("acc:",acc);
    // console.log("cur:",cur.age);
    return acc + cur.age;
},initialValue);
// console.log("ageSum1:",ageSum1);

//  2-2) initialValue가 존재x -> 초기 acc에는 ageSum2[0]이 들어감
// console.log("ageSum2");
const ageSum2 = brothers.reduce((acc, cur) => {
    // console.log("acc:",acc);
    // console.log("cur:",cur.age);
    return acc + cur.age;
});
// console.log("ageSum2:",ageSum2);


