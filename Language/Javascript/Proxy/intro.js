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
  console.log(obj.point); //300
}

{
  //set 트랩 호출
  const target = {};
  const handler = {
    point: 700,
    set(target, key, value, receiver) {
      target[key] = value + 200;
    },
  };
  const proxy = new Proxy(target, handler);
  const obj = Object.create(proxy, {
    // obj에 proxy를 상속!
    bonus: { value: 500, writable: true },
  });
  obj.point = 100;
  console.log(obj.point);
}

{
  //인스턴스에 있는 프로퍼티 설정
  const target = {};
  const handler = {
    set(target, key, value, receiver) {
      target[key] = value + 200;
    },
  };
  const proxy = new Proxy(target, handler);
  const obj = Object.create(proxy, {
    point: { value: 100, writable: true },
  });
  obj.point = 700;
  console.log(obj.point); // 700
  console.log(target.point); // undefined
}

{
  // set 트랩에서 아무것도 하지 않으면 undefined 발생
  const target = {};
  const handler = {
    set(target, key, value, receiver) {
      // target[key] = value + 200;
    },
  };
  const obj = new Proxy(target, handler);
  obj.point = 100;
  console.log(obj.point); // undefined
}

{
  // set 트랩 준수사항
  const target = {};
  Object.defineProperty(target, "point", {
    value: 500,
    writable: false,
  });
  const handler = {
    set(target, key, value, receiver) {
      target[key] = value + 200;
    },
  };
  const obj = new Proxy(target, handler);
  console.log((obj.point = 100)); //100
  console.log(obj.point); // 500
}

{
  //set의 4번째 파라미터 - proxy 인스턴스 설정
  const target = { point: 100 };
  const handler = {
    set(target, key, value, receiver) {
      console.log(Object.is(target, receiver)); // false
      console.log(receiver.point);
    },
  };
  const obj = new Proxy(target, handler);
  obj.point = 500;
}

{
  const target = {};
  const handler = {
    set(target, key, value, receiver) {
      target[key] = value + 200;
      target.title = receiver.title + ",JS";
      return true;
    },
  };
  const proxy = new Proxy(target, handler);
  const obj = Object.create(proxy, {
    title: { value: "책" },
  });
  obj.point = 100;
  console.log(obj.title);
  console.log(target.title);
}

{
  //set에서 this는 handler를 참조
  const target = { point: 100 };
  const handler = {
    point: 123,
    set(target, key, value, receiver) {
      console.log(this.point);
      this.book = "책";
    },
  };
  const obj = new Proxy(target, handler);
  obj.point = 500;
  console.log(handler.book);
  console.log(target.book);
}

// get트랩
{
  // basic
  const target = { point: 100 };
  const handler = {
    get(target, key, receiver) {
      return target[key] + 200;
    },
  };
  const obj = new Proxy(target, handler);
  console.log(obj.point);
  console.log(obj.bonus); // NaN
}

{
  const target = { point: 100 };
  const handler = {
    get(target, key, receiver) {
      const value = target[key];
      return this.check ? value + 200 : value;
    },
  };
  const obj = new Proxy(target, handler);
  handler.check = true;
  console.log(obj.point);
}

// has 트랩
{
  const target = { point: 100 };
  const handler = {
    has(target, key) {
      return target[key];
    },
  };
  const obj = new Proxy(target, handler);
  console.log("point" in obj);
  console.log("book" in obj);
}

{
  //key in Object.create()
  const target = { point: 600, bonus: 100 };
  const handler = {
    has(target, key) {
      return target[key];
    },
  };
  const proxy = new Proxy(target, handler);
  const obj = Object.create(proxy, {
    point: { value: 500 },
  });
  console.log("point" in obj);
  console.log("bonus" in obj);
}

{
  const target = { point: 100 };
}
