// Array Iterater Object 생성

//keys() - [key,value]형태에서 key만 반환
{
  const iterator = ["A", "B"].keys();
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
}

//values() - [key,value]형태에서 value만 반환
{
  const iterator = ["A", "B"].values();
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
}

{
  //for of 사용
  const iterator = ["A", "B"].values();
  for (const property of iterator) {
    console.log(property);
  }
}

{
  //Symbol.iterator()와 같음
  const check = Array.prototype.values === Array.prototype[Symbol.iterator];
  const iterator = ["A", "B"][Symbol.iterator]();
  for (const property of iterator) {
    console.log(property);
  }
}

{
  // 연동
  let list = ["A", "B"];
  let iterator = list.values();
  list[0];
  console.log(iterator.next());
  console.log(iterator.next());
}
