// Generator function만들기
{
  //1
  function* sports(one) {}
  //2
  const book = function* (one) {};
  //3
  const music = Object.getPrototypeOf(function* () {}, constructor);
  const gen = new music();
}

{
  function* sports(one, two) {
    yield one + two;
  }
  const obj = sports(1, 2);
  console.log(obj.next()); // {value: 100, done: false}
}

// GeneratorFunction
// : 제너레이터 함수를 생성, 파라미터를 문자열로 작성
{
  const fn = new Function("one", "return one");
  console.log(fn(100));
  const create = Object.getPrototypeOf(function* () {}).constructor;
  const sports = new create("one", "yield one");
  const obj = sports(100);
  console.log(obj.next());
}

// yield키워드
// 호출한곳으로 {value: 값, done: true/false} 반환
{
  function* sports(one) {
    yield one + 10;
    yield;
    const value = yield one + 50;
  }
  const obj = sports(30);
  console.log(obj.next());
  console.log(obj.next());
  console.log(obj.next());
  console.log(obj.next(200)); // {value:undefined, done:true}
}

{
  // yield 정리
  function* sports(one) {
    let two = yield one; // two에 10을 할당하지 않음
    let param = yield one + two;
    yield param + one;
  }
  const obj = sports(10);
  console.log(obj.next());
  console.log(obj.next()); //next()안에 파라미터가 없어서 two에 undefined할당
  console.log(obj.next(20)); //next()안에 20이 할당->param에 20할당
  console.log(obj.next());
}

//next()
{
  // next()는 yield단위로 실행 - 이전 yield의 다음부터 yield까지 실행
  function* sports(value) {
    value += 20;
    const param = yield ++value;
    value = param + value;
    yield ++value;
  }
  const obj = sports(10);
  console.log(obj.next());
  console.log(obj.next(20));
}

{
  //yield를 작성하지 않음
  function* sports(value) {
    ++value;
    console.log(value);
  }
  const obj = sports(10);
  console.log(obj.next());
}

{
  // yield대신 return쓰면
  function* sports(value) {
    return ++value;
  }
  const obj = sports(10);
  console.log(obj.next()); //{value:11,done:true};
  console.log(obj.next());
}

//yield반복
{
  let status = true;
  function* sports() {
    let count = 0;
    while (status) {
      yield ++count;
    }
  }
  const obj = sports();
  console.log(obj.next());
  console.log(obj.next());
  status = false;
  console.log(obj.next());
}

// 다수의 yield처리
{
  function* sports() {
    return yield yield yield;
  }
  const obj = sports();
  console.log(obj.next());
  console.log(obj.next(10));
  console.log(obj.next(20));
  console.log(obj.next(30));
}

// yield 분할 할당
{
  function* sports() {
    return [yield yield];
  }
  const obj = sports();
  console.log(obj.next());
  console.log(obj.next(10));
  const last = obj.next(20);
  console.log(last);
  console.log(last.value);
}

// for-of 문으로 반복
{
  function* sports(count) {
    while (true) {
      yield ++count;
    }
  }

  for (let point of sports(10)) {
    console.log(point);
    if (point > 12) {
      break;
    }
  }
}

// return() - 이터레이터 종료
{
  function* sports(count) {
    while (true) {
      yield ++count;
    }
  }
  const obj = sports(10);
  console.log(obj.next());
  console.log(obj.return(70));
  console.log(obj.next(50));
}

// throw() - Error를 의도적으로 발생
{
  function* sports() {
    try {
      yield 10;
    } catch (message) {
      yield message;
    }
    yield 20;
  }
  const obj = sports();
  console.log(obj.next());
  console.log(obj.throw("에러발생")); // 제너레이터 종료되지 않음
  console.log(obj.next());
}

// throw문 작성
{
  function* sports() {
    throw "에러 발생";
    yield 10;
  }
  const obj = sports();
  try {
    const result = obj.next();
  } catch (message) {
    console.log(message);
  }
  console.log(obj.next());
}

// yield* 표현식
{
  // yield* 의 표현식이 "배열"인경우
  function* sports() {
    yield* [10, 20];
  }
  const obj = sports();
  console.log(obj.next());
  console.log(obj.next());
}

{
  // yield* 의 표현식이 "제너레이터 함수"인경우
  function* point(count) {
    yield count + 5;
    yield count + 10;
  }

  function* sports(value) {
    yield* point(value);
    yield value + 20;
  }
  const obj = sports(10);
  console.log(obj.next());
  console.log(obj.next());
  console.log(obj.next());
}

{
  //재귀 호출
  function* sports(point) {
    yield point;
    yield* sports(point + 10);
  }
  const obj = sports(10);
  console.log(obj.next());
  console.log(obj.next());
}
