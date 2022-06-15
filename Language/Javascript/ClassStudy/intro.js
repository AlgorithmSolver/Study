{
  // OOP의 Object(객체)와 JS의 Object는 다름(JS는 실체, OOP는 개념,사상)
  // OOP는 행위 + 속성
}

{
  // 객체는 class
  // 행위는 method
  // 속성은 property
}

{
  // 메소드 + 프로퍼티
  // 클래스는 인스턴스를 만들어서 사용
  class Point {
    constructor(point) {
      this.point = point;
    }
    getPoint() {
      return this.point;
    }
  }
  const obj = new Point(100);
  console.log(obj.getPoint());
}

{
  // 클래스 선언
  class Point {
    getPoint() {
      return 100;
    }
  }
  const obj = new Point();
  console.log(obj.getPoint());
}

{
  const Point = class {
    getPoint() {
      return 100;
    }
  };
  const obj = new Point();
  console.log(obj.getPoint());
}

{
  //let vs const
  // obj가 바뀌지 않으면 const!
}

{
  console.log(Array.isArray([]));

  const point = {
    getPoint() {
      return 100;
    },
  };
  console.log(obj.getPoint());
}

{
  const Point = function () {};
  Point.prototype.getPoint = function () {
    return 100;
  };
  const obj = new Point();
  console.log(obj.getPoint());
}

{
  // 빌트인 오브젝트 -> push는 강좌에서 method
  const list = [];
  list.push("책");
  console.log(list);
}

{
  // 메소드 작성 방법
  class Point {
    setPoint(point) {
      this.point = point;
    }
    getPoint() {
      return this.point;
    }
  }
  console.log(typeof Point);
}

{
  // computed name
  const name = "Point";
  class Point {
    static ["get" + name](add) {
      return add ? 100 : 50;
    }
  }
  console.log(Point["get" + name](true));
}

{
  const Point = class {
    setPoint(point) {
      this.point = point;
    }
  };
  console.log(Point.prototype.setPoint);
  // Prototype Sharing
  Point.prototype.getPoint = function () {
    return 100;
  };
  const obj = new Point();
  console.log(obj.getpoint());
}

{
  // constructor
  class Point {
    constructor(point) {
      this.point = point;
    }
  }
  const obj = new Point();
  obj.setPoint(100);
}

{
  // Number 반환
  class Point {
    constructor(point) {
      this.point = point;
      return point;
    }
  }
  const obj = new point(100);
  console.log(obj.point);
  console.log(obj instanceof Point); // true
}

{
  // Object 반환
  class Point {
    constructor(point) {
      return { point: point }; // 오브젝트 표현식 반환
    }
  }
  const obj = new point(100);
  console.log(obj);
  console.log(obj instanceof Point);
  // Point로 만든 인스턴스가 아니기 때문에 false
}

// getter, setter, static메소드
{
  //getter, setter
  class Point {
    constructor(point) {
      this.point = point;
    }
    get getPoint() {
      return this.point;
    }
    set setPoint(point) {
      this.point = point;
    }
  }
  const obj = new Point(0);
  obj.setPoint(120);
}

{
  //static 메소드 - 프로토타입이 아닌 클래스에 바로 연결
  class Point {
    constructor(point) {
      this.point = point;
    }
    static getPoint() {
      return 100;
    }
  }
  const obj = new Point();
  console.log(obj.getPoint);
}

{
  // 클래스는 호이스팅이 되지 않음
}

// new.target
// - 함수 또는 생성자가 new 연산자로 호출된 여부 반환
{
  // constructor를 호출
  class Point {
    constructor() {
      console.log(new.target.name);
    }
  }
  new Point();
}

{
  // 함수는 undefined 반환
  function book() {
    console.log(new.target);
  }
  book();
}
