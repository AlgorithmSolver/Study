{
  const list = [10, 20, 30];
  console.log(list.includes(10, 1)); //false
}

{
  // Generic
  const list = { 0: 10, 1: 20, 2: 30, length: 3 };
  console.log(Array.prototype.includes.call(list, 10, 1));
}
