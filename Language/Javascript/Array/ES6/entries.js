// Array 오브젝트를 Array 이터레이터 오브젝트로 생성, 반환
{
  // Basic
  const iterator = ["A", "B"].entries();
  console.log(iterator.next().value); //[0,A]
  console.log(iterator.next().value); //[1,B]
}

{
  // 배열을 이터러블로 바꿔서 for of 사용
  const iterator = ["A", "B"].entries();
  for (const property of iterator) {
    console.log(property);
  }
}

{
  // 배열을 이터러블로 바꿔서 for of 사용 : 분할 할당
  const iterator = ["A", "B"].entries();
  for (const [key, value] of iterator) {
    console.log(`${key}: ${value}`);
  }
}

{
  //다시 반복 불가
  const iterator = ["A", "B"].entries();
  for (const property of iterator) {
    console.log(`${key}: ${value}`);
  }
  for (const property of iterator) {
    console.log(`다시전개`);
  }
}
