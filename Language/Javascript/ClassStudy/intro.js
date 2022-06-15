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
  //constructor
}
