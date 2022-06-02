// --- * map 함수 사용 ---
// Solved Problem1. map함수는 기본적으로 리턴값을 받아서 활용한다.
let stringArr1 = ['1','2','3','4','5'];
stringArr1.map(v=>+v); // 주의 : 이렇게 하면 stringArr1의 값이 숫자타입으로 바뀌지 않는다.
let stringArr2 = stringArr1.map(v=>+v); //
console.log(stringArr2);

// 1.프로토타입
let arr = [1,2,3,4,5];
arr.map((val,idx,arr) => {
    console.log("value:",val," index:",idx," array:",arr);
});


// 2.두번째 인자값 this
myArray = [1,2,3];
myArray.map(function(x) {
    console.log(this);
    return x;
},'test');

// 문제1. 2차원 배열 덧셈 ( 내가 푼것 )
function sumMatrix1(arr1,arr2){
    const answer = [];
    const tmpArr = [];
    for(let i=0;i<arr1.length;i++){
        for(let i=0;i<arr1[i].length;i++){
            tmpArr.push(arr1[i][j] + arr2[i][j]);
        }
        answer.push(tmpArr);
        tmpArr = [];
    }
    return answer;
}

// 문제1. 2차원 배열 덧셈 - 베스트 리뷰
//      (2차원 배열 덧셈을 map으로 해결)
function sumMatrix2(arr1,arr2){
    return arr1.map((v,i) => v.map((b, j) => b + arr2[i][j]));
}

const testArr1 = [[1,2],[2,3]];
const testArr2 = [[3,4],[5,6]];
const answerArr = testArr1.map((v1,i)=>v1.map((v2, j) => v2 + testArr2[i][j]));
console.log(answerArr);


// Q1. 아래에서 tmpArr이 변할까? 안변함 
// => 이유 : Array.prototype.map함수는 기존배열을 바탕으로 새로운배열을 만든다. 따라서 기존의 배열에 매핑해줘야한다.
let tmpArr = [1,2,3,4,5];
tmpArr = tmpArr.map(v=>{
    return v+2;
})
console.log("Q1 : ",tmpArr);