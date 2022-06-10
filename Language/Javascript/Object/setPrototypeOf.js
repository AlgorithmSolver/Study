// setPrototypeOf() : 인스턴스 사용
{
  ("use strict");
  debugger;

  const obj = { 0: 10, 1: 20, length: 2 };

  debugger;

  Object.setPrototypeOf(obj, Array.prototype);

  debugger;

  const callback = (element, index, all) => console.log(element);
  obj.forEach(callback);

  debugger;

  // Object.prototype이 바뀌지 않습니다.
  const check = Object.prototype;

  debugger;
}

{
  ("use strict");
  const obj = { 0: 10, 1: 20, length: 2 };
  Object.setPrototypeOf(obj, Array.prototype);
  // Array-like오브젝트에서도 setPrototypeOf를 통해 forEach 메소드를 사용할 수 있음
  const callback = (element, index, all) => console.log(element);
  obj.forEach(callback);

  // Object.prototype이 바뀌지 않습니다.
  const check = Object.prototype;
}

// 3 setPrototypeOf
let obj = { 0: 10, length: 1 };
Object.setPrototypeOf(obj, Array.prototype);

// 4 setPrototypeof :: 프로토타입
{
  ("use strict");
  debugger;

  function Book() {}
  Book.prototype.getBook = function () {};

  function Point() {}
  Point.prototype.getPoint = function () {};
  debugger;

  // Point 프로토타입에 Book 프로토타입을 넣음
  //  => Point.prototype에 __proto__를 만들어 설정, 인스턴스에도 적용
  Object.setPrototypeOf(Point.prototype, Book.prototype);

  debugger;

  const obj = new Point(300);
}

// 상속이 목적이면 class를 사용하고, 프로토타입의 확장을 목적으로 한다면 setPrototypeOf
