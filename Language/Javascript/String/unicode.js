// 유니코드의 코드 포인트에 해당하는 문자 반환
// 1. 유니코드 -> 스트링 : fromCodePoint()
const point = String.fromCodePoint;
console.log(point(49, 50, 51));
console.log(point(49, 50, 51));
console.log(point(0x31, 0x32, 0x33));
console.log(point(0x1f418));

// 2. 스트링 -> 유니코드 : codePointAt()
const result = "가나다".codePointAt(0); //가

// 3. 유니코드가 한글일 경우
//    "ㄱ" "ㅏ"를 "가"로 연결한다면
//    :  유니코드모음.normalize("NFKD"), 유니코드모음.normalize("NFKC")
