// 주의 : 기본적으로 객체를 복사하지 않고 참조로 하는 이유는 메모리 효율성 때문이다.
//       객체는 가변이고 범위가 크기 때문에 원시값으로 하지 않고 참조로 해서 메모리공간의 효율을 높이려고 한것이다.
//       따라서, 로대시를 그냥 쓰면 안됨. 

const _ = require('lodash');
// 얕은 복사 : 한 단계까지만 복사, 나머지는 참조
const origin = { x: { y: 1} };
const c1 = {...origin}
console.log(c1.x === origin.x) // true
console.log(c1);
// 깊은 복사(lodash사용) : 중첩객체까지 복사해서 원시값처럼 별개의 객체가 된다.
const c2 = _.cloneDeep(origin);
console.log(c2.x === origin.x); // false : lodash를 써서 깊은복사를 하면 참조가 아닌 
console.log(c2);
