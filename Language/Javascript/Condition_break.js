// 1.break는 label문에 사용된다.
// label statement
foo: {
    console.log(1);
    break foo;
    console.log(2);
}

outer: for (let i = 0; i < 10; i++){
    inner: for( let j = 0; j < 10; j++ ){
        // i + j === 3이면  outer라는 식별자가 붙은 레이블 for문을 탈출한다.
        if( j === 3) break inner;
        console.log(`inner [${i}, ${j}]`);
    }
}
console.log('done');

// 2.break는 반복문에 적용된다.
let string = 'Hello World.';
let search = 'l';
let index;

for( let i = 0; i < string.length; i++ ){
    if(string[i] === search) {
        index = i;
        break;
    }
}