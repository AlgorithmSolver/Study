// 소수를 제외한 정수 반환
console.log(Math.trunc(12.56));

// 값의 부호 판별 -> 양수 1 음수 0
console.log(Math.sign(5), Math.sign(-5));

// 각각 제곱하여 합산하고 제곱근, 파라미터 하나일때는 Math.abs();
console.log(Math.hypot(3, 4)); //9+16의 제곱근 5
console.log(Math.hypot(-7));

// 삼각함수
//로그
Math.log2(16);
Math.log10(10);
Math.log1p(3); //log(1+3);

// 32비트 계산 - c,c++ (Emscripten) 호환
