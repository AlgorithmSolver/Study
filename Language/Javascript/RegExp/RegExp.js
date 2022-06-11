// ES6에서 3개의 플래그 추가 y, u, s

// 정규 표현식 사용 형태
// lastIndex
{
  // 기본형태
  const value = "ABC";
  const obj = new RegExp("A", "g");
  console.log(obj.test(value));
  const reg = /A/g;
  console.log(reg.test(value));
}

{
  //lastIndex
  const v = "ABABA";
  const obj = /B/g;
  console.log(obj.test(value) + ": " + obj.lastIndex);
  console.log(obj.test(value) + ": " + obj.lastIndex);
  console.log(obj.test(value) + ": " + obj.lastIndex);
  // 매치되지 않으면 lastIndex 0
}

{
  //lastIndex g없으면 lastIndex갱신 안됨
  const v = "ABABA";
  const obj = /B/;
  console.log(obj.test(value) + ": " + obj.lastIndex);
  console.log(obj.test(value) + ": " + obj.lastIndex);
  console.log(obj.test(value) + ": " + obj.lastIndex);
  // 매치되지 않으면 lastIndex 0
}

//y플래그 - lastIndex위치에 매치(부터가 아님);
{
  const value = "AABBA";
  const obj = /A/y; // B를 만나는 순간 인덱스 4에 A가 있지만 false반환
  console.log(obj.test(value) + ": " + obj.lastIndex); // true: 1
  console.log(obj.test(value) + ": " + obj.lastIndex); // true: 2
  console.log(obj.test(value) + ": " + obj.lastIndex); // false: 0

  // y플래그는 lastIndex를 셋업하여 사용
  obj.lastIndex = 4;
  console.log(obj.test(value) + ": " + obj.lastIndex);
}

//u플래그
{
  //정규표현식의 패턴을 유니코드의 코드 포인트로 변환하고 u플래그로 인스턴스 생성
  const obj = new RegExp("\u{31}\u{32}", "u");
  console.log(obj.test("12"));
  console.log(obj.unicode);
  console.log(/\u{31}\u{32}/u.test("12"));
}

//s플래그
{
  //정규표현식에서 dot(점.)은 모든문자를 매치하지만 줄바꿈문자는 매치하지 않음
  //s플래그를 사용하면 줄바꿈문자를 매치
  const text = `line
  줄을바꿈`;
  //이전방법
  console.log(/[\s\S]+/.test(text));
  console.log(/[^]+/.test(text));
  //s플래그
  const obj = new RegExp(".+", "s");
  console.log(obj.test(test));
  console.log(obj.dotAll);
}
