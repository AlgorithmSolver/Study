// 1.RegExp메서드 3가지
//  - RegExp가 중심이 되는 함수 : exec, test
//      1)RegExp.prototype.exec => [ matchedValue, index, originStr, groups ]
const str = "Is this all there is?";
const regExp = /is/;
const res = regExp.exec(str);
console.log(res);
//      2)RegExp.prototype.test => True / False
const str2 = "Is this all there is?";
const regExp2 = /is/;
const res2 = regExp2.test(str2);
console.log(res2);
//  -String이 중심이 되는 함수
//      3)String.prototype.match => [ matchedValue, index, input, groups ]
const str3 = "Is this all there is?";
const regExp3 = /is/;
const res3 = str3.match(regExp3);
console.log(res3);
//  -결론 : RegExp.prototype.exec <-> String.prototype.match :: 리턴값이 같음
//       : RegExp.prototype.test => True, False 반환

// 2.플래그
//  i(Ignore case) : 대소문자를 구별하지 않고 패턴을 검색
//  g(Global) : 모든 문자열 전역 검색, 결과값 n개
//  m(Multi line) : 문자열의 행이 바뀌더라도 패턴 검색을 계속한다.
const str4 = "Is this all there is?";
const res41 = str4.match(/is/);
const res42 = str4.match(/is/i);
const res43 = str4.match(/is/g);
const res44 = str4.match(/is/m);
const res45 = str4.match(/is/ig);
console.log(res41);
console.log(res42);
console.log(res43);
console.log(res44);
console.log(res45);

// 3.패턴
//  1) 문자열 검색 /문자열/
//  2) 임의의 문자열 검색 : .은 임의의 문자한개를 의미
const str5 = "Is this all there is?";
const regExp5 = /.../g; // 이렇게 하니까 str을 띄어쓰기포함해서 3개씩 나눴다...
const res5 = str5.match(regExp5);
console.log(res5); 
//  3-1) 반복 검색 : {최소n,최대m}
const str6 = "A AA B BB Aa Bb AAA";
const regExp6 = /A{1,2}/g;
const res6 = str6.match(regExp6);
console.log(res6);
//  3-2) +는 {1,} 즉, 최소한번
const str7 = "A AA B BB Aa Bb AAA";
const regExp7 = /A+/g;
const res7 = str7.match(regExp7);
console.log(res7);
//  3-3) ?는 {0,1}
const str8 = "color colour";
const regExp8 = /colou?r/g;
const res8 = str8.match(regExp8);
console.log(res8);

//  4) OR : |
const str9 = "A AA B BB Aa Bb";
const regExp9 = /A|B/g;
const res9 = str9.match(regExp9);
console.log(res9);

//  4-2) 분해되지 않은 단어를 찾기 위해서..
const str10 = "A AA B BB Aa Bb";
const regExp10 = /A+|B+/g;
const res10 = str10.match(regExp10);
console.log(res10);

//  4-3) [AB]는 A|B
const str11 = "A AA B BB Aa Bb";
const regExp11 = /[AB]+/g; // A+ || B+ 와 동일하게 동작
const res11 = str11.match(regExp11);
console.log(res11);

//  4-4) []내에 -가 들어가면 범위를 지정, 'A' ~ 'Z'가 한 번 이상 반복되는 문자열을 전역 검색
const str12 = "A AA BB ZZ Aa Bb";
const regExp12 = /[A-Z]+/g;
const res12 = str12.match(regExp12);
console.log(res12);

//  4-5) 대소문자를 구별하지 않고 알파벳을 검색 : 'A' ~ 'Z' 또는 'a' ~ 'z'가 한번 이상 반복되는 문자열을 전역 검색
const str13 = "AA BB Aa Bb 12";
const regExp13 = /[A-Za-z]+/g;
const res13 = str13.match(regExp13);
console.log(res13);

// Q. "A AA B BB Aa Bb";에서 앞자리가 대문자인거만 단어별로 출력하려면 어떻게 해야하지? => [A AA B BB]가 출력되게 하려면...??
const str14 = "A AA B BB Aa Bb";
const regExp14 = /A+/g;
const res14 = str14.match(regExp14);
console.log("res14: ",res14);


//  4-6) 숫자를 검색하는 방법
const str15 = "AA BB 12,345";
const regExp15 = /[0-9]+/g;
const res15 = str15.match(regExp15);
console.log(res15); // [ '12', '345' ]

//      4-6-2) 숫자를 검색하는 방법(2)
const str16 = "AA BB 12,345 34";
const regExp16 = /[0-9,]+/g;
const res16 = str16.match(regExp16);
console.log(res16); // [ '12', '345' ]

//      4-6-3) 간단한 숫자표현 : \d
const str17 = "AA BB 12,345";
let regExp17 = /[\d,]+/g;
const res17 = str17.match(regExp17);
console.log(res17);//[ '12,345' ]

//      4-6-4) 간단한 문자표현 : \D
const str18 = "AA BB 12,345";
let regExp18 = /[\D]+/g;
const res18 = str18.match(regExp18);
console.log(res18);//[ '12,345' ]

//      4-6-5) [A-Za-z0-9_] : \w
const str19 = "AA BB 12,345";
let regExp19 = /[\w,]+/g;
let res19 = str19.match(regExp19);
console.log(res19);
// \W는 \w의 반대
regExp19 = /[\W]+/g;
res19 = str19.match(regExp19);
console.log(res19);

//  5) NOT 검색
const str20 = "AA BB 12 Aa Bb";
const regExp20 = /[^0-9]/g;
const res20 = str20.match(regExp20);
console.log(res20);


//  6) 시작 위치로 검색
const str21 = "https://poiemaweb.com";
const regExp21 = /^https/g; // /^https/와 반환값이 다르다!! 주의!
const res21 = str21.match(regExp21);
console.log(res21);

//  7) 마지막 위치로 검색
const str22 = "https://poiemaweb.com";
const regExp22 = /com$/;
const res22 = str22.match(regExp22);
console.log(res22);

// 4.자주 사용하는 정규표현식
//  1) 특정 단어로 시작하는지 검사
const str23 = "https://example.com";
const res23 = /^https?:\/\//.test(str23);
console.log(res23);

//  2) 특정 단어로 끝나는지 검사
const str24 = "index.html";
const res24 = /html$/.test(str24);
console.log(res24);

//  3) 숫자로만 이뤄져 있는 지 검사?
const str25 = "12345";
const res25 = /^\d+$/.test(str25);
console.log(res25);

//  4) 하나 이상의 공백으로 시작하는지 검사 : \s = [\t\r\n\v\f]
const str26 = " Hi";
const res26 = /^[\s]+/.test(str26);
console.log(res26);

//  5) 아이디로 사용 가능한지 검사
const str27 = "abc123";
const res27 = /^[A-Za-z0-9]{4,10}$/.test(str27);
console.log(res27);

//  6) 메일 주소 형식에 맞는지 검사
//  생략

