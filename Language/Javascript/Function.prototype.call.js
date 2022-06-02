function add(a,b){
    return a+b;
}
const result = add.call(this,1,2);
console.log(result);