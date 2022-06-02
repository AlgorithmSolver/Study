let arr = ['a','b','c','c','c','d'];
let finding = 'c'
let idx = arr.indexOf(finding);
while(idx !== -1){
    console.log(idx);
    idx = arr.indexOf(element,idx + 1)
}