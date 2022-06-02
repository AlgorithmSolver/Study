//자바스크립트 정규표현식 정리

//#1
// const tel = '010-3131-2323';
// const regExp = /^\d{3}-\d{4}-\d{3}/;
// const isTrue = regExp.test(tel);
// console.log(isTrue);

// const tel2 = '010-3208-7098';
// const regexp = /\d{3}-\d{4}-d{3}/;
// const isFalse = regexp.test(tel2);
// console.log(isFalse);

//#2 RegExp.prototype.exec
// const target = 'Is this all there is?';
// const regexp = /is/i;
// console.log(regexp.exec(target));

//#Q1. regex constructor vs regex literal
// const words = ['foo', 'bar', 'orange', 'platypus'];
// const str = "I say, foo, what a lovely platypus!";
// const tmp = str.match(new RegExp('\\b('+words.join('|')+')\\b', 'g')); //["foo", "platypus"]
// console.log(tmp);
// const target = 'Is there all there is';
// const isTrue = new RegExp(/is/g).test(target);
// // const isTrue = new RegExp(/is/,'g').test(target);
// console.log(isTrue);

//#3 String.prototype.match
// const target = 'Is this all there is?';
// const regExp = /is/g;
// console.log(target.match(regExp));

// const target = 'Is this all there is?';
// const result = target.match(/is/);
// console.log(result);

//#4 flag
// const target = 'Is this all there is?';
// let result = target.match(/is/i);
// console.log(result);

// result = target.match(/is/g);
// console.log(result);

// result = target.match(/is/m);
// console.log(result);

// result = target.match(/is/ig);
// console.log(result);

//#5 pattern

//5.1 임의의 문자열 1개 => .
// const target = 'Is this all there is?';
// const regExp = /.../g;
// console.log(target.match(regExp));

//5.2 반복검색 => {m,n}, {m,}, + <- {1,}, ? <- {0,1} 
// const target = 'A AA B BB Aa Bb AAA';
// let c = target.length;//19
// const regExp = /A?/g;
// let d = target.match(regExp).length;// 20 ???
// console.log(c === d); // false

// const target = 'aaa';
// let d = target.match(regExp);
// let g = target.match(regExp).length;
// console.log(d);// [ 'a', 'a', 'a', '' ] ??
// console.log(g);// 4 ???
// console.log(target.match(regExp));


// ?
// const target = 'color colour';
// const regExp = /colou?r/g;
// console.log(target.match(regExp));

//5.3 OR검색
// const target = 'A AA B BB Aa Bb AAA';
// const regExp = /A|B/g;
// console.log(target.match(regExp));

//A+ <- A{1,}
// const target = 'A AA B BB Aa Bb AAA';
// const regExp = /A+/g;
// console.log(target.match(regExp));

//[] <- OR , ex>[AB],[a-zA-Z]
// const target = 'A AA B BB Aa Bb AAA';
// const regExp = /[AB]+/g;
// console.log(target.match(regExp));

//[ - ] <- 범위지정
// const target = 'A AA B BB Aa Bb AAA ZZZ';
// const regExp = /[A-Z]+/g;
// console.log(target.match(regExp));
//
// const target = 'AA BB Aa Bba 12';
// const regExp = /[A-Za-z]+/g;
// console.log(target.match(regExp));
//
// const target = 'AA BB 12,345';
// const regExp = /[0-9]+/g;
// console.log(target.match(regExp));
// => 숫자있는데까지 표현하다가 숫자가 아닌 문자를 만나면 끊어짐
//
// const target = 'AA BB 12,345';
// const regExp = /[0-9,]+/g;
// console.log(target.match(regExp));
//
// const target = 'aa, 1,200,!';
// const regExp = /[0-9,]+/g
// console.log(target.match(regExp));
//
// \d(숫자) vs \D(문자)
// const target = '12,334 aa bb c,c';
// const regExp = /[\d,]+/g
// console.log(target.match(regExp));
//
// ****************** 중요 ******************
// \w([A-Za-z0-9_]) vs \W(그외것들)
// const target = 'AA BB 12,345';
// let regExp = /[\W]+/g;
// console.log(target.match(regExp));
//
// NOT검색
// const target = 'AA BB 12 Aa Bb';
// const regExp = /[^0-9]+/g;
// console.log(target.match(regExp));
//
// 5.4 ^(시작위치) vs $(마지막위치) 검색
// const target = 'https://www.naver.com';
// // const regExp = /^https/g;
// const regExp = /^https/g;
// const regExp2 = /com$/g;
// console.log(regExp2.test(target));
//
// #6 자주사용하는 표현식
//
// 특정 단어로 시작하는지 검사
// const target = 'https://www.naver.com';
// const regExp = /^https?:\/\//g;
// console.log(regExp.test(target));
//
// 숫자로만 이루어졌는지 검사
// const target = '12345';
// const regExp = /^\d+$/g;
// console.log(regExp.test(target));
//
// 하나이상의 공백으로 시작하는지 검사
// const target = ' AA aa bb cc';
// const regExp = /^[\s]+/g;
// console.log(regExp.test(target));
//
// 아이디로 사용 가능한지 검사
// const target = 'abc123';
// const regExp = /[A-Za-z0-9]+/g;
// console.log(target.match(regExp));
//
// const target = 'abc123';
// const regExp = /^[A-Za-z0-9]{4,10}$/g;
// console.log(regExp.test(target));
