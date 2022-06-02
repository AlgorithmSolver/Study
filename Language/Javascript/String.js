// #1 문자열 정리
// 활용1. 대문자/소문자 변환 :: .toUpperCase() & .toLowerCase()
// let str1 = "...!@BaT#*..y.abcdefghijklm";
// console.log(str1.toLowerCase);
// 활용2. 순회
// for of : 속성값 순회 / for in : 속성키 순회
// let str2 = "asdfasdfasdfasdf!";
// for( let i of str2){
    
// }
// str2.foreach(v=>{
//     console.log(v);
// })
// console.log(str2);

//#2 String Constructor
        // Constructor
// const strObj = new String("hello world!");
// const str = "hello world!";
//      // array access
// console.log(str[0]);
// console.log(strObj[0]);
//      // can't modify
// str[0] = 'S';
// strObj[0] = 'S';
// console.log(str);

//#3 Length
// console.log('Hello'.length);

//#4 methods
// const strObj = new String('Lee');
    // getOwnPropertyDescriptors(strObj)
// console.log(Object.getOwnPropertyDescriptors(strObj));
//     // 4.1 indexOf -> 반환 : int
// const str = 'Hello World';
// let n = str.indexOf(' ello');

//     // 4.2 search (with 정규표현식) -> 반환 : int
// const str = 'Hello World 1955';
// console.log(str.search(/[A-Za-z]+/));

    // 4.3 includes -> 반환 : boolean
// const str = 'Hello world';
// console.log(str.includes('world'));
// console.log(str.includes('ld',3));

    // 4.4 startsWith
// const str = 'Hello world';
// console.log(str.startsWith(' ',5));

    // 4.5 endsWith
// const str = 'Hello world';
// console.log(str.endsWith('H',1))

//     // 4.6 charAt
// console.log(str.charAt(0));

//     // 4.7 subString & slice
// console.log(str.substring(1,4));
// console.log(str.slice(1,4));
//     // 4.8 toUpperCase vs toLowerCase
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
//     // 4.9 trim
// const target = ' hello hi '
// console.log(target.trim());
//     // 4.10 repeat
// const str = 'hi';
// console.log(str.repeat(10));
    // 4.11 replace
// const str = 'helloWorld';
// console.log(str.replace('World','lee'));
//         //교체패턴 : $&
// console.log(str.replace('World','<strong>$&</strong>'));
        //콜백함수
// str.replace(/.[A-Z]/g, match => {
//     // console.log(match[0],match[1]);
//     return match[0] + '_' + match[1];
// });
        //반환 O
const tg = '-_helloWorld2021';
let tmp = tg.replace(/[0-9]/g,'');
console.log(tmp);

    // 4.12 split
// const str = 'How    are you doing?';
// console.log(str.split(/\s/));
