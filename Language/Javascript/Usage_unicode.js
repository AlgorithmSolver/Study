// 고찰 
// : 유니코드를 값으로 변환할때는 숫자를 따라서 순차적으로 출력하면 된다.
// : 하지만, 값을 유니코드로 변환하려면 고유값을 입력해야한다. 따라서
// : 유니코드의 값을 조작할때는 유니코드를 중심으로 값으로 변환할 수 밖에 없다.
// : 즉, (숫자표기된) 유니코드가 중심

// 1. 값을 유니코드로 변환              vs     유니코드를 값으로 변환
//    [ Value.charCodeAt(0) ]             [ String.fromCharCode(unicode) ]
// let uniCode = "a".charCodeAt(0);
// console.log(uniCode);
// console.log(String.fromCharCode(uniCode));

// 2. 유니코드를 값으로 변환 : 유니코드.fromCharCode
function checkUnicode(count1,count2){
    for(let i=count1;i<=count2;i++){
        if(String.fromCharCode(i) === ' ') console.log(i);
        else console.log(i," : ",String.fromCharCode(i));
    }
}

checkUnicode(1,100);

// 결론 : charCodeAt(index), String.fromCharCode(unicode)