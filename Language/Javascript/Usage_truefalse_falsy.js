function isFalsy(value){
    return !value;
}

console.log(isFalsy(false))
console.log(isFalsy(null))
console.log(isFalsy(undefined))
console.log(isFalsy(NaN))
console.log(isFalsy(0))
console.log(isFalsy(''))