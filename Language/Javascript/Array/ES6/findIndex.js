{
  const list = ["A", "B", "C"];
  const cb = (value, index, all) => value === "B";
  console.log(list.findIndex(cb)); // 1
}

{
  const list = ["A", "B", "C"];
  const cb = (value, index, all) => value === 77;
  const result = list.findIndex(cb); // -1
}
