// 원래는 아래 두 코드 콘텍스트처럼 코딩해야했다.
{
    //Number오브젝트를 primitive 값 처럼 사용
    const point = {bonus:100};
    console.log(point.valueOf());

    const book = {
        valueOf() { return 30 }
    }
    console.log( book * 20 )
}

{
    //String 오브젝트를 primitive 값 처럼 사용
    const point = {bonus: 100};
    console.log(point.toString()); // 내가원한건 [object Object]가 아니고 문자열에 대응해서 출력하고 싶었음
    //그래서 아래처럼 작성해서 값처럼 사용한다.
    const book = {
        toString() {
            return "책"
        }
    }
    console.log(`${book}`)
}

// 이것을 Symbol.toPrimitive()를 이용해서 더 편하게 바꿨음.
{
    const obj = {
        [Symbol.toPrimitive](hint) {
            return hint === "number" ? 30 : hint === "string" ? "책" : "default";
        }
    }
    console.log(20 * obj); // 600
    console.log(`${obj}` + 100); // 책100
    console.log(obj + 50); // default50
    console.log("default" == obj);//true
}
