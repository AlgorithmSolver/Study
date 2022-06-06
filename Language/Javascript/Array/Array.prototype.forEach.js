// 배열순회
const arr = [1, 2, 3, 4, 5];
arr.forEach((value, idx, arr) => {
  console.log(idx, value, arr);
});

// 콜백 함수안에서 this를 사용할 수 있고,
// forEach함수 두번째 Parameter에 Input된 객체를 참조한다.
// ==> 독립적으로 콜백함수를 만들 수 있음에 의의가 있음
let arr2 = [1, 2, 3, 4];
let func = (item, index, arr) => {
  console.log(item + this.num);
};
arr2.forEach(func, { num: 100 });

// for() vs forEach()
// : forEach를 쓴다는 것은 break, continue가 없다는 의미
