const arr = [
    ['a','b'],
    ['a','b'],
    ['a','b'],
    ['a','c'],
    ['d','e'],
    ['e','d'],
    ['d','e']
];

// 배열의 중복을 제거해보자!
// 1. filter사용?
// arr.filter((number, index, source)=>{
//     // number: 요소값 
//     // index: source에서 요소의 index 
//     // source: 순회하는 대상

// });

// 2. filter NO사용
// function md(arr) {
//     var uniques = [];
//     var itemsFound = {};
//     for(let i = 0;i<arr.length;i++){
//         let stringified = JSON.stringify(arr[i]);
//         if(itemsFound[stringified]) continue;
//         uniques.push(arr[i]);
//         itemsFound[stringified] = true;
//     }
//     return uniques;
// }
// const arr2 = md(arr);
// console.log(arr2);

function md2(arr) {
    var unique = [];
    var itemsFound = {};
    for(let i = 0; i < arr.length; i++) {
        let stringified = JSON.stringify(arr[i]);
        if(itemsFound[stringified]) continue;
        unique.push(arr[i]);
        itemsFound[stringified] = true;
    }
    return unique;
}
console.log(md2(arr));