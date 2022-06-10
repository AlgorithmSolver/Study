// 자릿수에 맞춰서 문자열앞에 자릿수 채우기 : padStart()
console.log("ABC".padStart(10, "123")); //"1231231ABC"
console.log("ABC".padStart(6, "123456")); //"123ABC"
console.log("ABCDE".padStart(3, "123")); //"ABC"
console.log("ABC".padStart(6).length); //6
