{
  const empty = new WeakSet();
  const sports = {};
  const obj = new WeakSet([sports]);
}

{
  //has
  const fn = () => {};
  const obj = new WeakSet([fn]);
  log(obj.has(fn));
}

{
  //add
  const obj = new WeakSet();
  const fn = () => {};
  obj.add(fn);
  console.log(obj.has(fn));
}

{
  //delete
  const fn = () => {};
  const obj = new WeakSet([fn]);
  console.log(obj.delete(fn));
  console.log(obj.has(fn));
}
