{
  const list = ["A", "B", "C"];
  const cb = (value, index, all) => value === "B";
  const result = list.find(cb);
  // result는 true
}

{
  const list = ["A", "B", "C"];
  const cb = (value, index, all) => value === 77;
  const result = list.find(cb);
  // result는 undefined
}

{
  const list = ["A", "B", "C"];
  function cb(value, index, all) {
    return value === "A" && value === this.check;
  }
  const result = list.find(cb, { check: "A" });
  // result는 undefined
}
