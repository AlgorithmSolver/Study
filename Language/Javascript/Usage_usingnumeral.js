var numeral = require('numeral');
let value1 = numeral(0.000000000000000008);
console.log(value1);
let value2 = numeral(0.000003);
let res = value1._value + value2._value;
console.log(res);//0.000003000000000008
