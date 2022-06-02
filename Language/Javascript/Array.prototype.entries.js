// array.prototype.entries() : entries는 각 배열의 키/값 쌍 인덱스를 가지는 새로운 iterator객체를 반환합니다.
// (1) 개념
const strArr = [..."helloworld"];
for(const [index,value] of strArr){
    console.log(index,value);
    // (0,"h")
    // (1,"e")
    // (2,"l")
    // ...
}

// (2) 활용#1. : next().value;
const array1 = ['a', 'b', 'c'];
const iterator1 = array1.entries();
console.log(iterator1.next().value);
// expected output: Array [0, "a"]
console.log(iterator1.next().value);
// expected output: Array [1, "b"]