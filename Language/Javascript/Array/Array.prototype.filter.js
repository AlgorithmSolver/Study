// 1.개념
// 10개의 배열이 생성되고 무작위적으로 undefined가 할당된 배열이 있다고 가정해보자.
let arr = Array.from({length:10},(_,v)=>v++);
function randomArr(arr) {
    let number1 = Math.floor(Math.random() * 10) + 1;
    let number2 = Math.floor(Math.random() * 10) + 1;
    for(let i = 0; i < number1; i++){
        delete arr[number2];
        number2 = Math.floor(Math.random() * 10) + 1;
    }   
}
// 이 때, Array.prototype.filter를 사용하면 undefined를 거른 새로운 배열을 구성할 수 있다.

