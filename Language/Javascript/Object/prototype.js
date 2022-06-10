// 1. prototype vs __proto__
// prototype
function Book() {
  this.point = 100;
}
Book.prototype.getPoint = function () {
  console.log(Object.is(this, Book.prototype));
  return this.point;
};
console.log(Book.prototype.getPoint());
console.log(Book.prototype.getPOint.call(book));

// 2. 인스턴스에 함수로 추가(new),
// 인스턴스의 프로퍼티로 함수를 추가, 다른 인스턴스와 공유하지 않음
const obj = new Book();
obj.setPoint = function (param) {
  this.point = param;
};
obj.setPoint(200);

const newObj = new Book(); // 여기에는 setPoint가 없음

// 3. __proto__에 메소드 추가
function Book2(param) {
  this.point = param;
}
// 이것(객체에서 메소드를 추가하는것)과
Book.prototype.setPoint = function (param) {
  this.point = param;
};
// 이것(인스턴스에서 메소드를 추가하는것)이 같음
const obj2 = new Book2(100);
obj2.__proto__.setPoint2 = function (param) {
  this.point = param;
};
