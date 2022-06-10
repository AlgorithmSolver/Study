{
  // basic - 기본적으로는 map과 같음
  const list = [10, 20];
  const cb = (element, index, all) => {
    return element + 5;
  };
  console.log(list.flatMap(cb));
  console.log(list.map(cb));
}

{
  // 차이점 map vs flatMap
  const list = [10, 20];
  const cb = (element, index, all) => {
    return [element + 5];
  };
  console.log(list.map(cb));
  console.log(list.flatMap(cb));
}
