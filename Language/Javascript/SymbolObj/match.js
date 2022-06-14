// Symbol.match
{
    const result = "Sports".match(/s/);
    console.log(result);
}

{
    // Symbol.match 오버라이드 한 경우
    const sports = {
        base: "ball",
        [Symbol.match](value){
            return this.base.indexOf(value) < 0 ? "없음" : "있음";
        }
    }
    console.log("al".match(sports)); // 있음
}

{
    try {
        "/book/".startsWith(/book/);
    } catch {
        console.log("정규 표현식으로 처리");
    }
    let check = /book/;
    check[Symbol.match] = false; // 정규표현식으로 사용하지 않고 문자열로 체크하겠다는 시맨틱
    console.log("/book/".startsWith(check)); // true
}