// 이차원 배열 중복제거하는 방법 정리
// 1: 'Set'
//  1-1. 먼저 일차원배열을 중복제거하는법
//  [...new Set(array)];
//  1-2. 다음 이차원배열을 중복제거하는법
const example1 = [ ['a','b'],['a','c'],['a','d'],['a','d'] ];
const tmp1 = [...new Set(example1.join('|').split('|'))].map(v=>v.split(' ')).map(v=>v.map(a=>a.split(',')));
// console.log(tmp1);

let newArr = [];
// 활용1. 2차원 배열의 중복을 제거( JSON.stringify, JSON.parse 사용, map )
example1.map(v=>newArr.push(JSON.stringify(v)));
        //  ---------set으로 바꿔서 중복제거하기-------------
let set = new Set(newArr);
        //  ---------set을 배열로 바꾸기-------------
let arr = Array.from(set);
        //  ---------map사용해서 JSON.parse()사용하기-------------
arr = arr.map(v=>{
    return JSON.parse(v);
})

console.log(arr);
// console.log(set);