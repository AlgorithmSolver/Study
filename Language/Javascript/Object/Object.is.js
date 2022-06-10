// 값과 타입비교 : Object.is(p1,p2); - ===과 유사(Object.is가 훨씬 명확함)
const result = Object.is(10, "10"); // false
const one = {};
const two = {};
const result2 = Object.is(one, two); // false
