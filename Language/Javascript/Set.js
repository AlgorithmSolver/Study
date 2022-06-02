//***SET***
// 활용 1 : 중복제거 -> new set사용
let testInput1 = ["ryan con", "ryan con", "ryan con", "ryan con"];
let useSet = new Set(testInput1);
// 배열로 변환
let toArr = [...useSet];
console.log(toArr);

// console.log(useSet);

//set을 이용해 map 사용 =>  X
// useSet.map(v=>{
//     console.log('hi');
//     console.log(v);
// })

// 활용 2 : set은 forEach사용가능(MAP은 사용 불가능)
useSet.forEach(item=> {
    const [a, b] = item.split(' ');
})