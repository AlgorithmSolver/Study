// 1. sort함수 기본정의
const testArr = [2,1,4,6];
//리턴값이 음수면 즉 a가 작으면 a,b순
//리턴값이 양수면 즉 b가 작으면 b,a순
testArr.sort((a,b) => {
    return a-b;
})
console.log("1.sort기본정의 : ",testArr);

// 2. 2차원배열에서 element를 기준으로 정렬
const twoDimentionArr1 = [['classic',1450],['pop', 3100],['k-pop', 2109]];
// sort함수 사용
twoDimentionArr1.sort((a,b)=>a[1]-b[1]);
console.log("2차원배열정렬1 : ",twoDimentionArr1);
const twoDimentionArr2 = [['age',30],['age',42],['age',29]];
twoDimentionArr2.sort((a,b)=>a[1]-b[1]);
console.log("2차원배열정렬2 : ",twoDimentionArr2);
