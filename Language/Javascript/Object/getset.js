// getter, setter
let obj = {};
let data = {};
//ES5
Object.defineProtperty(obj, "book", {
  set: function (param) {
    data.title = param;
  },
  get: function () {
    return data.title;
  },
});
//ES6
const book = {
  point: 100,
  title: "title",
  get getpoint() {
    return this.point;
  },
  get getTitle() {
    return this.title;
  },
  set setPoint(param) {
    this.point = param;
  },
};
