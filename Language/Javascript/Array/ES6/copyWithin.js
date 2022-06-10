// 배열 내 원소들 이동할때사용(속도가 빠름), typed어레이와 사용하면 효율적
// 기본개념 : 배열내에서 원소들을 지정한 만큼 짤라서 지정한 인덱스부터 잘린 원소들갯수만큼
// 잘라서 붙여넣기
{
  // Basic
  const list = ["A", "B", "C", "D", "E"];
  const copy = list.copyWithin(1, 3); // 배열 3 이후 D,E를 배열 1부터 D,E 갯수만큼 붙여넣기
  console.log(list); //[A,D,E,D,E]
  console.log(copy); //[A,D,E,D,E]
}

{
  // 3번째 파라미터 작성
  const list = ["A", "B", "C", "D", "E"];
  list.copyWithin(0, 2, 4);
  // 배열 2이후 4직전인 C,D를 복사해서 C,D 갯수만큼만 앞에서 부터 복사
  console.log(list); // [ C, D, C, D, E]
}

{
  const list = ["A", { B: "가" }, "C"]; // 얕은 복사
  console.log(list.copyWithin(0, 1));
}
