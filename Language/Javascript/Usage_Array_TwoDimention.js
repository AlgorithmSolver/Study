let sizeArr = 3;
let twoDimArr = Array.from( 
    new Array(sizeArr),
    () => Array.from(new Array(sizeArr),()=>false)
)
console.log(twoDimArr);