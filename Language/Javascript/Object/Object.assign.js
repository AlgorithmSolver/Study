// 객체를 복사
const sports = {
  event: "추구",
  player: 11,
};
let dup = {};

Object.assign(dup, sports);
console.log(dup); // {event:축구, player:11}

// 열거 가능 오브젝트 작성
let obj = {};
Object.assign(obj, { ten: 10 });
const one = Object.create(
  {},
  {
    book: { value: 100, enumerable: false },
    sports: { value: 200, enumerable: true },
  }
);
Object.assign(obj, one);
console.log(obj);

// 오브젝트 다수작성 후 다수를 하나에 복사
const book2 = { title: "책" };
const sports2 = { item: "축구" };
const obj2 = Object.assign({}, book2, sports2);

// 두번째 이후 파라미터로 값은 복사되지 않음, 열거가능한 오브젝트 형태로 붙여넣기 해야함
