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
