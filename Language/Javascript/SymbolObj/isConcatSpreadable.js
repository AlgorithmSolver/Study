// 환경설정값이 Symbol로 구성되어 있음
// isConcatSpreadable - concat시 배열을 펼쳐서 붙이기 OR NOT
{
    // Array인 경우(배열)
    // Default가 Yes Spread, isConcatSpreadable : true
    const one = [10,20],two = ["A","B"];
    const show = () => {
        console.log(one.concat(two));
    }
    show();
    two[Symbol.isConcatSpreadable] = true;
    show();
    two[Symbol.isConcatSpreadable] = false;
    show();
}

{
    // Array-like인 경우(객체) - Spread 디폴트 특성이 Array와 Array-like는 서로 반대
    // Default가 No Spread, isConcatSpreadable : false
    const one = [10,20];
    const like = {0: "A", 1:"B", length: 2};
    const show = () => {
        console.log(one.concat(like));
    }
    show();
    like[Symbol.isConcatSpreadable] = true;
    show(); // [10,20,A,B]
    like[Symbol.isConcatSpreadable] = false;
    show();
}
