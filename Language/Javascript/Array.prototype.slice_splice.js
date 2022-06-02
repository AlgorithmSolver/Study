const testArr1 = [1,2,3,4,5,6];
const testArr2 = [1,2,3,4,5,6];
const newTestArr1 = testArr1.slice(0,testArr1.length-1);
testArr2.splice(0,testArr2.length-1);
console.log(newTestArr1);
console.log(testArr2);

//splice 규칙 다시 정리
