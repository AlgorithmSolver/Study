// (1) js에서는 나눗셈했을때 부동소수점으로 출력(형이 정해져 있는 언어와 큰 차이점 존재)
console.log(1/3);
// 따라서 정수로 만들고 싶으면 floor사용(round,ceil);
console.log(Math.floor(1/3));

// (2) js에서는 0.1 + 0.2 = 0.3이 false 따라서 함수를 만들어 사용
console.log(0.1+0.2===0.3);
const compareEpsilon = function(a,b){
    // 두수를 뺀 절대값이 EPSILON보다 작으면 참
    return Math.abs(a-b) < Number.EPSILON;
}
console.log(compareEpsilon(0.1+0.2,0.3));

// (3) - 1.Number.MAX_SAFETY_INTEGER / Number.MAX_VALUE

// (3) - 2.Number.MIN_SAFETY_INTEGER / Number.MIN_VALUE
console.log(Number.MIN_VALUE - 1 === -1);//true
console.log(0 < Number.MIN_VALUE);//true
console.log(0 === Number.MIN_VALUE);//false

// (4) Math.random()
console.log(Math.random() * 100); // 74.74540478533618
console.log(Math.floor(Math.random() * 100)) // 0 ~ 99까지의 무작위수