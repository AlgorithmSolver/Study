// 1. String.raw - 태그드 리러털을 사용했을경우 특수문자, 유니코드 날것그대로 출력

{
  // Basic - 여기는 일반 태그드 리터럴과 사용방법이 같음
  const one = 1;
  const two = 2;
  const result = String.raw`1+2=${one + two}`;
  console.log(result);
}

{
  //다른점1. String.raw의 특수문자 처리,유니코드 처리
  console.log(`one\ntwo`);
  console.log(String.raw`one\ntwo`);
}

// 2. String.raw() - 이것은 함수 : 조합하는 함수
{
  // 문자열 조합 후 반환
  const one = 1,
    two = 2;
  console.log(String.raw({ raw: "ABCD" }, one, two, 3));
}

{
  // 배열 조합 후 반환
  const rawValue = { raw: ["A", "B", "C"] };
  console.log(String.raw(rawValue, 1, 2, 3));
  // *주의점 C뒤에는 표현식이 없는 것으로 처리함
}
