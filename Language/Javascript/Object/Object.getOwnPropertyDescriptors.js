// 데이터 디스크립터
const obj = { music: "음악" };
const des = Object.getOwnPropertyDescriptors(obj);
for (let name in des.music) {
  console.log(name + ": " + des.music[name]);
  // value: 음악
  // writable: true
  // enumerable: true
  // configurable: true
}

// 엑세스 디스크립터
const obj2 = {
  get music() {},
};
const des2 = Object.getOwnPropertyDescriptors(obj);
for (let name in des.music) {
  console.log(name + ": " + des.music[name]);
  // get: get music(){}
  // set: undefined
  // enumerable: true
  // configurable: true
}
