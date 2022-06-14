// Symbol함수와 메소드 for, keyFor
{
    // Basic
    const one = Symbol.for("sports");
    console.log(one);
    // Part1.
    // { key:value } 형태로 one에 설정
    // sports가 key, Symbol(key)가 value
    // Symbol("sports")함수에서 파라미터가 주석인것과는 차이가 있음(?)
}

{
    // Part2.
    // 글로벌 Symbol 레지스트리에 저장
    // 글로벌 Symbol 레지스트리는 공유영역
    // 다른오브젝트에서도 사용가능
    // 같은 key가 존재하면 등록된 값을 사용
    const one = Symbol.for("sports");
    const two = Symbol.for("sports");
    console.log(one === two);

    console.log(Symbol.for(true));
}

// keyFor 함수 - 글로벌 레지스트리의 key를 구함
{
    const one = Symbol.for("book");
    const six = Symbol.keyFor(one);
    console.log(six); // book
}

// toString() - Symbol을 생성했던 형태를 문자열로 변환하여 반환, Symbol값은 반환되지 않음
{
    console.log(Symbol("100").toString());
    const sym = Symbol.for("book");
    console.log(sym.toString());

    // +로 문자열을 연결하면 TypeError
    try {
        console.log(Symbol() + "ABC");
    } catch {
        console.log("+로 연결 불가");
    }
    // "+로 연결 불가" 출력
}

// description
{
    console.log(Symbol("sports").description); // sports
    console.log(Symbol.for("book").description); // book
    console.log(Symbol.iterator.description); // Symbol.iterator
}

{
    // toString()과 차이
    console.log(Symbol("book").toString());
    console.log(Symbol("").toString());
    console.log(Symbol().toString());

    console.log(Symbol.for("book").description);
    console.log(Symbol("book").description);
    console.log(Symbol("").description);
    console.log(Symbol().description);
}

{
    // valueOf()
    console.log(Symbol("100").valueOf()); // Symbol(100)
    console.log(Symbol.for("200").valueOf()); // Symbol(200)
}

{
    // getOwnPropertySymbols()
    const obj = {point : 100};
    obj[Symbol("one")] = 200;
    obj[Symbol.for("two")] = 300;
    console.log(Object.getOwnPropertyNames(obj));
    const list = Object.getOwnPropertySymbols(obj);
    for( const sym of list ){
        console.log(`${sym.description}: ${obj[sym]}`);
    }
}