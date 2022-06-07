// 인스턴스 생성
let Book = function (point) {
  this.point = point;
}
Book.prototype.getBook() = function() {
  return this.point + 100;
}
let oneInstance = new Book(200);
console.log(oneInstance.getPoint());

// 생성한 인스턴스 여부 (new Book 했냐)
console.log(oneInstance instanceof Book);