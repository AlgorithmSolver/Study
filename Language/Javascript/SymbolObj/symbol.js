// 1. Symbol은 어떠한 형태라도 값을 외부로 노출시키지 않는다.
{
  // 1) basic
  const sym = Symbol();
  console.log(sym);
  console.log(typeof sym);
}

{
  // 2) false
  const one = Symbol();
  const two = Symbol();
  console.log(one == two);
}

{
  // 3) 연산 불가
  let sym = Symbol();
  try {
    const add = sym + 5;
  } catch (e) {
    console.log("연산 불가");
  }
}

{
  // 4) 값 타입 변경 불가
  let sym = Symbol();
  try {
    +sym;
  } catch {
    console.log("값 타입 변경 불가");
  }
}

{
  // 5) Symbol("주석, 설명")
  const sym = Symbol("주석, 설명");
  console.log(sym); // Symbol("주석, 설명")
}

{
  // 6) Symbol(설명)연결
  const sym = Symbol("설명");
  console.log(sym.toString() + "연결"); // Symbol(설명)연결
}

{
  // 7) ${sym} 불가
  const sym = Symbol("주석, 설명");
  try {
    `${sym}`;
  } catch {
    console.log(`${sym} 불가`); // ${sym} 불가
  }
}

// 2. Symbol 사용 형태
{
  // symbol-keyed property
  const sym = Symbol("설명");
  const obj = { [sym]: 100 };
}

{
  // 프로퍼티 값 추출
  const sym = Symbol("설명");
  const obj = { [sym]: 100 };
  console.log(obj[sym]); // 100
  console.log(obj.sym); // undefined
}

{
  // 함수이름으로 사용
  const sym = Symbol("함수 이름");
  const obj = {
    [sym](param) {
      return param;
    },
  };
  console.log(obj[sym](200));
}

{
  // for-in문에서 사용 -> [[Enumerable]]:false
  const obj = {
    [Symbol("100")]: 100,
    two: 200,
  };
  for (let key in obj) {
    console.log(key); // two (만 출력)
  }
}

{
  // for-of문
  const list = [Symbol("100")];
  for (let value of list) {
    console.log(value); // Symbol(100)
  }
}

{
  // JSON.stringify는  Object의 프로퍼티 키와 값을
  // { "key": "value" } 형태로 변환하는데, 아래는 {}를 출력함
  const sym = Symbol("JSON");
  const result = JSON.stringify({ [sym]: "ABC" });
  console.log(result); //{}
}
