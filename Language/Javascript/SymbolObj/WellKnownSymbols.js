//Well-Known Symbols
{
    // 인스턴스 구분의 어려움
    const Book = function(){};
    const obj = new Book();
    console.log(obj.toString()); // [object Object]
    console.log({}.toString()); // [object Object]
}

{
    // 인스턴스 구분 - prototype을 연결하여 작성
    const Sports = function(){};
    const obj = new Sports();
    console.log(obj.toString()); // [object Object]

    // Symbol Property 활용
    Sports.prototype[Symbol.toStringTag] = "농구"
    console.log(obj.toString()); // [object 농구]

    // Sports {
    //     __proto{
    //         Symbol {
    //             toString:"농구"
    //         }
    //     }
    // }
    // 의 형태?
}

{
    
}