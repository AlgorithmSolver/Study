// WeakMap
{
  //Map
  let sports = { like: "축구" };
  const obj = new Map([[sports, "like:축구"]]);
  sports = { like: "농구" }; // 키가 변경되면서 메모리 Leak이 발생
}

{
  // WeakMap
  //  - 이터레이션, forEach 등의 반복 안되게 설정해놓음
  //  - 기본적으로 CRUD기능만 있음
  //  -- get,set,has,delete 4개 밖에 없음
  let sports = { like: "축구" };
  const obj = new WeakMap([[sports, "like:축구"]]);

  let fn = () => {};
  // set
  obj.set(fn, "변경");

  // get
  console.log(obj.get(fn));

  // delete
  obj.delete(fn);

  // has
  console.log(obj.has(fn));
}

{
  // 가비지 컬렉션
  let obj = new WeakMap();
  let sports = () => {
    point: 1;
  };
  obj.set(sports, "변경전");
  sports = () => {
    point: 2;
  };
  obj.set(sports, "변경후");
}

{
  // Map
  let mapObj = new Map();
  (function () {
    mapObj.set(key, "키");
  });
  // WeakMap
  let weakMapObj = new WeakMap();
  (function () {
    weakMapObj.set(key, "키");
  });
}
