// Set
{
  // 중복 허용 X
  const obj = new Set([1, 2, 1, "ABC"]);
  console.log(obj.size);
  for (let value of obj) {
    console.log(value);
  }
}

{
  //Set vs Map
  // : Set은 Map처럼 .get을 사용하지 못한다. 하나를 콕 찍어서
  //   활용할 수 밖에 없음
}

{
  //add
  let obj = new Set();
  obj.add("축구").add("농구");
  for (let value of obj) {
    console.log(value);
  }
}

{
  //add2
  let obj = new Set();
  obj.add(function sports() {
    return 100;
  });
  obj.add(function sports() {
    return 200;
  });
  for (let value of obj) {
    console.log(value());
  }
}

{
  //has
  const sports = () => {};
  const obj = new Set([sports]);
  console.log(obj.has(sports));
  console.log(obj.has("book"));
}

{
  //entries
  const obj = new Set(["one", () => {}]);
  const iterObj = obj.entries();
  console.log(iterObj.next());
  console.log(iterObj.next());
  console.log(iterObj.next());
}

{
  //keys
  const obj = new Set(["one", () => {}]);
  const iterObj = obj.keys();
  console.log(iterObj.next());
  console.log(iterObj.next());
  console.log(iterObj.next());
}

{
  //values
  const obj = new Set(["one", () => {}]);
  const iterObj = obj.values();
  console.log(iterObj.next());
  console.log(iterObj.next());
  console.log(iterObj.next());
}

{
  //Symbol.iterator();
  const obj = new Set(["one", () => {}]);
  const iter = obj[Symbol.iterator]();
  console.log(iterObj.next());
  console.log(iterObj.next());
  console.log(iterObj.next());
}

{
  //forEach()
  const obj = new Set(["one", () => {}]);
  function callback(value, key, set) {
    console.log(value);
  }
  obj.forEach(callback);
}

{
  //forEach() - this
  const obj = new Set(["one", () => {}]);
  function callback(value, key, set) {
    console.log(value, this.check);
  }
  obj.forEach(callback, { check: "ABC" });
}

{
  //delete
  const obj = new Set(["one", "two"]);
  console.log(obj.delete("one"));
  console.log(obj.delete("one"));
}

{
  //clear
  const obj = new Set(["one", "two"]);
  console.log(obj.size);
  obj.clear();
  console.log(obj.size);
  obj.add("one");
  console.log(obj.size);
}
