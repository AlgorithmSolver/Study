// 1. &&, || 활용에 대해서 정리
//  1) &&는 앞이 거짓이면 뒤에것이 실행되지 않게 할 때 사용함
//      return false && excution();
//  2) ||는 앞이 거짓이면 뒤에것이 실행되도록 할 때 사용함
//      return false || excution();

let shortcut = inputWord => {
    return inputWord || "nothing";
}

let shortcut2 = inputWord => {
    return "nothing" && inputWord;
}

let tmp = shortcut2("");
console.log(tmp);