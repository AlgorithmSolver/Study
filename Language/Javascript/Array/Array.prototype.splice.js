// 1. splice 함수 정리 - 배열의 기존 요소를 삭제 또는 교체,
//                     새 요소를 추가해 기존 배열의 내용을 변경한다.
// 파라미터가 3개 일 때 :: splice(시작점, 지울 개수, 넣을 것)

// 1-1) 배열 n번째 원소를 m개 삭제할때 사용
let n1 = 2;
let m1 = 1;
const arr1 = [1,2,3,4,5];
arr1.splice(n1,m1);
console.log("삭제 : ", arr1);

// 1-2) 배열 n번쨰 원소를 m개 삭제하고 replaceValue로 대체
let n2 = 2;
let m2 = 1;
let replaceValue2 = 7;
const arr2 = [1,2,3,4,5];
arr2.splice(n2,m2,replaceValue2);
console.log("대체 : ",arr2);

// 1-3)응용 : arr.indexOf와 Math.min(...arr)도 추가 - 다른사람 풀이
const arr3 = [100,50,27,1,39,55];
const targetArr3 = [...arr3];
function findSmallest(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)),1); // 배열에서 가장 작은값을 없애달라
    if(arr.length<1)return[-1];
    return arr;
}

console.log(arr3,"에서 findSmallest And Delete : ",findSmallest(targetArr3));

// 1-3-1)활용 arr.indexOf
