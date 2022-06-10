{
  const list = ["A", "B", "C", "D"];
  list.fill("책", 1, 3); // 1시작 3직전(2)
  //list.fill("책"); // 전부 "책"으로 변경
  console.log(list);
}

{
  // fill은 제네릭
  const like = { 0: "A", 1: "B", 2: "C", length: 3 };
  console.log(Array.prototype.fill.call(like, "책", 1));
  // { 0: "A", 1: "책", 2: "책", length: 3 }
}
