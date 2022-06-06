// push
const arr = [];
arr.push(1);
arr.push(2);
arr.push(3);
arr.push(4);
arr.push(5);
// 가능

// 배열의 추가 삭제
arr.splice(2,1);
// console.log(arr)


// 배열 크기설정
const arr1 = new Array(5).fill(false);
console.log(arr1);

// 배열 위치 변환
// Q1. 가장 숫자가 높은 순으로 내림차순 정렬
const arr2 = [ [ 'classic', 1450 ], [ 'pop', 3100 ], [ 'k-pop', 2109 ] ];
// 구조분해할당?
let a=0,b=1;
[a,b] = [b,a];
console.log(a,b);

const arr3 = [...[],1,2,3];
console.log(arr3.length);


// 배열 + 정렬
const tmp3 = [{play:300,index:2},{play:300,index:1},{play:400,index:0}]
.sort((a,b)=>{
    // Uereka!! : play가 같은 때, index가 작은 순으로 정렬하라!!
    if(a.play === b.play){
        return a.index - b.index
    }
    return b.play-a.play
})
.slice(0,2)
console.log(tmp3);


// PROBLEMS #1) 2차원 배열 동적확장문제
// - 문제점.
let testArr4 = []; // let testArr4 = []; 인 경우에 아래처럼 
                   // testArr4[0][0] = false 하면 1차원 배열인데 
                   // 2차원 배열로 접근한다고 에러 터짐..
// - 해결책 -
testArr4.push([]); // 한다.
// ---------
testArr4[0][0] = false;
console.log("2d array : ",testArr4);


// PROBLEMS #2) 1차원 배열에서 값으로 index찾기
let testArr5 = ['a','b','c','d','e'];
let finding = testArr5.indexOf('b');
console.log(finding);