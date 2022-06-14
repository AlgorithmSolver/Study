{
    // Basic - Array 오브젝트의 [Symbol.iterator]()를 호출하면 이터레이터 오브젝트 반환
    // next()로 배열 엘리먼트 값을 하나씩 구할 수 있습니다.
    const list = [10,20];
    const obj = list[Symbol.iterator()];
    console.log(obj.next());
    console.log(obj.next());
    console.log(obj.next());
}

{
    // 오버라이드해서 작성
    const obj = {
        [Symbol.iterator](){
            return {
                count: 0,
                maxCount: this.maxCount,
                next() {// 오버라이드
                    if( this.count < this.maxCount){
                        return {value: this.count++, done: false};
                    };
                    return {value: undefined, done: true};
                }
            }
        }
    }
    obj.maxCount = 2;
    for( const value of obj){
        console.log(value);
    }
}

// generator 함수 연결
{
    // Basic
    const obj = {};
    obj[Symbol.iterator] = function*(){
        yield 1;
        yield 2;
        yield 3;
    }
    console.log(...obj);
}

{
    // 이터레이터 오브젝트를 연결하여 값을 공유하는 형태.
    // 제너레이터 오브젝트에 이터레이터 오브젝트가 포함된 구조
    const gen = function*(){
        yield 10;
        yield 20;
    };
    const genObj = gen();
    console.log(genObj.next());


    // 아래에서...
    // genObj에 Symbol.iterator 함수를 호출하면 
    // generator의 현재 상황을 공유한다.
    // obj에서는 yield 20을 수행!
    const obj = genObj[Symbol.iterator]();
    console.log(obj.next());
}