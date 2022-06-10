// flat - 배열 차원을 변환하고 새로운 배열로 설정하여 반환
{
  const list = [1, 2, [3, 4]];
  const result = list.flat();
  console.log(result);
  console.log(list); // 변환 x
}

{
  // 그대로 반환
  const list = [1, 2, [3, 4]];
  console.log(list.flat(0));
}

{
  // flat 차원 계산
  const list = [1, 2, [3, 4, [5, [6]]]];
  console.log(list.flat(2));
  // 파라미터 2에 1을 더하면 3이됨. 3까지 엘리먼트로 변환하므로 6만 남기고 1차원이 됨
  // 6은 4차원 - 3차원이 되어 1차원이 남음으로
  // [1,2,3,4,5,[6]];
}

{
  const list = [1, 2, , , , [3, 4]];
  console.log(list.length);
  const change = list.flat();
  console.log(change);
  console.log(change.length);
}
