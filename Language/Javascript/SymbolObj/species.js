// Symbol species
{
    // 접근 - Symbol.species를 설명하기 위해..

    // Symbol.species의 뉘앙스 : 같은 종, 형태, 모양
    // Symbol.species는 constructor를 반환..
    //  constructor를 실행하면 인스턴스를 생성하여 반환 
    //  ---- Q.contructor, prototype구조? --- => 너무 복잡하게 설명되어 있어서 우선 패스

    // const obj = [1,2,3]을 했을 경우
    const obj = [1,2,3]; 
    // obj의 구조에 prototype은 없고 [[prototype]]만 있기 때문에 obj는 
    // Array 오브젝트가 아니라 Array.prototype에 연결된 메소드로 생성한 인스턴스
    // + new 연산자를 사용하지 않았기 때문에, 인스턴스가 아니라 오브젝트라고 했다? 무슨말? 위에 인스턴스라고..
    debugger;
    const one = obj.slice(1,3);
    debugger;
    const two = one.slice(1,2);
    debugger;
        // 결과값이 설정된 인스턴스를 반환하기 때문에,obj와 one의 구조가 차이가 없다.
    // 정리하자면, 
    //  Array 인스턴스의 메소드를 호출하면 값을 반환하는 것이 아니라 
    //  반환할 Array 인스턴스를 생성하고 메소드에서 구한 값을 반환할 Array 인스턴스에 설정하여
    //  Array 인스턴스를 반환한다.
}

{
    class Sports extends Array {};
    const obj = new Sports(10, 20, 30);
    const one = obj.slice(1,2);
    console.log(one);
    // Symbol.species는 인스턴스를 반환하도록 한다.
    // 즉 이것을 오버라이드하면 다른 인스턴스를 반환할 수 있다는 의미!!!
}

// specied 오버라이드
// static 악세서 프로퍼티이다.(?)
// getter만 있고 setter는 없다.
// Array, Map, Set, RegExp, Promise, ArrayBuffer, TypedArray를 species 오버라이드 할 수 있다.
// 아래처럼, 빌트인 오브젝트를 상속받은 class에 
// Symbol.species를 작성하면 빌트인 오브젝트의 @@species가 오버라이드 됨
{
    class Sports extends Array {
        static get [Symbol.species](){
            return Array;
        }
    }
    const obj = new Sports(10,20);
}

{
    class Sports extends Array {
        static get [Symbol.species](){
            return Array;
        }
    }
    const one = new Sports(10,20,30);
    console.log(one instanceof Sports); // true

    const two = one.slice(1,2);
    console.log(two instanceof Array); // true
    console.log(two instanceof Sports); // false
}