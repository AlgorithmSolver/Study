{
  const target = { food: "음식" };
  const middle = new Proxy(target, {});
  const food = middle.food;
  console.log(food);
}

// handler, trap
{
  // * target
  // const middle = new Proxy(target, {});
}

{
  // * trap
  const target = { food: "밥" };
  const handler = {
    get(target, key) {
      // get trap이라고...
      return target[key] + ",수저";
    },
    set(target, key) {}, // set trap이라고...
  };
  const middle = new Proxy(target, handler);
  const left = middle.food;
  console.log(left);
}

{
  // new Proxy()
  const target = ["A", "B"];
  const handler = {
    get(target, key) {
      return target[key] + ", 첫번 째";
    },
  };
  const obj = new Proxy(target, handler);
  console.log(obj[0]);
}

{
  //Proxy.revocable()
  const target = { point: 100 };
  const handler = {
    get(target, key) {
      return target[key];
    },
  };
  const obj = Proxy.revocable(target, handler);
  console.log(obj.proxy.point);

  obj.reboke();
  try {
    obj.proxy.point;
  } catch {
    console.log("Proxy 기능 사용 불가");
  }
}

//set trap
{
  const target = {};
  const obj = new Proxy(target, {});
  obj.point = 100;
  console.log(obj.point);
}

{
  const target = {};
  const handler = {
    set(target, key, value, receiver) {
      target[key] = value + 200;
    },
  };
  const obj = new Proxy(target, handler);
  obj.point = 100;
  console.log(obj.point);
}

{
  //인스턴스에 없는 프로퍼티 설정
  const target = {};
  const handler = {
    point: 700,
    set(target, key, value, receiver) {
      target[key] = value + 200;
    },
  };
  const proxy = new Proxy(target, handler);
  const obj = Object.create(proxy, {
    bonus: { value: 500, writable: true },
  });
  obj.point = 100;
  console.log(obj.point);
}
