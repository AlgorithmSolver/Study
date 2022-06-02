// *프로퍼티 키에 관하여..*
// 주요 질문 Q. 어떤 프로퍼티는 "name" : "kim"이고 어떤 프로퍼티는 name : "kim"이다
// 이렇게 사용하는 이유는? 바로 식별자 네이밍 규칙!!!

// *프로퍼티키 네이밍 규칙*
// 1.모든 프로퍼티키는 문자열이나 심벌값이다.
// 2.식별자 네이밍 규칙을 따르지 않는다면 ""를 씌운다.
// 3.숫자는 문자로 암묵적으로 타입변환이 된다.
const obj = {
    0:1,
    1:2,
    "last-name":"kim",
    name : "seonghyun"
}
// *프로퍼티 접근*
// - (1) [문자열로 접근] obj['name'];
console.log(obj['0']); // 숫자는 암묵적으로 프로퍼티키가 문자열로 변환
console.log(obj['1']); 
console.log(obj['last-name']);
console.log(obj['name']);
// - (2) 따옴표(.) 프로퍼티 연산자로 접근 obj.name
console.log(obj.name);
//  console.log(obj.last-name); 식별자 네이밍 규칙을 따르지 않으면 마침표(.) 프로퍼티 연산자로는 접근할 수 없음.

// *프로퍼티 삭제*
const obj1 = {
    name : "kim"
}
delete obj1.name; // working
console.log(obj1);

// es6
// (1) 프로퍼티 축약표현
let x = 1;
let y = 2;

const obj2 = {
    x,
    y
}
console.log(obj2);
// (2) 계산된 프로퍼티 이름
let prefix = 'prop';
const obj3 = {};
for(let i=0;i<10;i++){
    obj3[prefix + '-' + i] = i;
}
console.log(obj3);
let i3 = 0
const obj4 = {
    [`${prefix}-${++i3}`] : i3,
    [`${prefix}-${++i3}`] : i3,
    [`${prefix}-${++i3}`] : i3,
    [`${prefix}-${++i3}`] : i3,
};
console.log(obj4);
// (3) 메서드 축약 표현
let obj5 = {
    name: 'Lee',
    talk() { // es6방식 인스턴스 생성할 수 없는 non-constructor
        console.log(`talk ${this.name}`);
    },
    say: function() { // es6방식 인스턴스 생성할 수 없는 non-constructor
        console.log(`say ${this.name}`);
    }
}
obj5.talk();
obj5.say();
new obj5.say();