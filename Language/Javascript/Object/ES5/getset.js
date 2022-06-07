// getter, setter
let obj = {};
let data = {};
Object.defineProtperty(obj, "book", {
  set: function (param) {
    data.title = param;
  },
  get: function () {
    return data.title;
  },
});
