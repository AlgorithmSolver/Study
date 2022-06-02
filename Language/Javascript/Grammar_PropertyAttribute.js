// Property Attribute
//
//#1 [[Prototype]] 내부슬롯 접근 -> 객체.__proto__
// const o = {};
// console.log(o.__proto__);
//
//#2 프로퍼티 어트리뷰트(내부슬롯 : [[value]],[[Writable]],[[Enumerable]],[[Configurable]] ) <- 프로퍼티 디스크립터 객체로 간접적으로 표현가능
// const person = {
//     name : 'Lee',
//     age : 20,
// }
// console.log(Object.getOwnPropertyDescriptor(person,'name'));
//
//#3 Data property & Accessor property
// const person = {
//     firstName : 'Ungmo',
//     lastName : 'Lee',
//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     },
//     set fullName(name) {
//         [this.firstName, this.lastName] = name.split(' ');
//     }
// };
// console.log(person.firstName + ' ' + person.lastName);
// let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
// console.log(descriptor);
// descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
// console.log(descriptor);
// descriptor = Object.getOwnPropertyDescriptor(person);
// console.log(descriptor);
//     // 접근자 프로퍼티와 데이터 프로퍼티 구별
// // 일반객체의 __proto__는 접근자 프로퍼티
// console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));
// // 함수객체의 prototype은 데이터 프로퍼티
// console.log(Object.getOwnPropertyDescriptor(function() {} , 'prototype'));
//
//#4 프로퍼티 정의
    // defineProperty
// const person = {};

// Object.defineProperty(person, 'firstName', {
//     value: 'Ungmo',
//     writable: true,
//     enumerable: true,
//     configurable: true
// });

// Object.defineProperty(person, 'lastName', {
//     value: 'Lee',
//     writable: true,
//     enumerable: true,
//     configurable: true,
// });

// Object.defineProperty(person, 'fullName', {
//     get() {
//         return `${this.firstName} ${this.lastName}`;
//     },
//     set(name) {
//         [this.firstName, this.lastName] = name.split(' ');
//     },
//     enumerable: true,
//     configurable: true,
// });

// descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
// console.log('fullName',descriptor);
// person.fullName = 'Heegun Lee';
// console.log(person.fullName);
    // defineProperties
// const person = {};

// Object.defineProperties(person, {
//     firstName : {
//         value: 'Ungmo',
//         writable: true,
//         enumerable: true,
//         configurable: true
//     },
//     lastName : {
//         value: 'Lee',
//         writable: true,
//         enumerable: true,
//         configurable: true,
//     },
//     fullName : {
//         get() {
//             return `${this.firstName} ${this.lastName}`;
//         },
//         set(name) {
//             [this.firstName, this.lastName] = name.split(' ');
//         },
//         enumerable: true,
//         configurable: true,
//     }
// });

console.log(person);