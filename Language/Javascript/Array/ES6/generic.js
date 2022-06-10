//Generic : copyWithin을 쓰는데 Array대신 Array-like를 넘겨줄 수 있고
//          배열이 아닌 대상 오브젝트 형태로 반환을 받는다.
//          이것이 Generic이다.
//
//          copyWithin메소드는 배열만 처리할 수 있는 것이 아니다.
//          그것의 논리적인 근거는 바로 Generic이라는 것이다.
{
  //basic
  const like = { 0: 10, 1: 20, 2: 30, length: 3 };
  console.log(Array.prototype.copyWithin.call(like, 1, 0));
  // { 0: 10, 1: 10, 2: 20, length: 3 };
}
