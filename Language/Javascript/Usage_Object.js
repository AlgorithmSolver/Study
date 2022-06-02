// ****객체****
// 활용 1. 접근 :: 객체에 속성만 있는 경우 -> 속성값을 꺼내서 배열로 만들기
const obj = {};
obj['arr1'] = 1;
obj['arr2'] = 2;
obj['arr3'] = 3;

        // + 키를 순회할때는 for in , 
        // for of은 객체가 iterable이 아니라서 사용 못함
for( i in obj){
    console.log(i);
}

// let obj1 = Object.keys(obj);
// let obj2 = Object.values(obj);
// console.log(obj1);
// console.log(obj2);

// 활용 2. 동적 객체생성 -> 배열로 컨트롤
// let objArr = [];
// for(let i=0;i<4;i++){
//     let tmpArr = {
//         name : i,
//         age : i,
//     }
//     objArr.push(tmpArr);
// }

// objArr[0]['name'] = 'ryan'

//활용3. 객체배열에서 검색 및 업데이트
//1.인덱스를 찾아서 객체배열을 업데이트하는 방법
// const osArray = [
//     {id: 0, name: "Windows"},
//     {id: 1, name: "Linux"},
//     {id: 2, name: "MacOS"},
// ];
// elementIndex = osArray.findIndex((obj => obj.id == 1));
// console.log(elementIndex);
// console.log("Before update: ", osArray[elementIndex]);
// osArray[elementIndex].name = "Ubuntu";
// console.log("After update: ", osArray[elementIndex]);


//활용 4. 배열안에 객체들 중 속성값과 매칭되는 값 찾기
// var people = [ 
//     { "name": "bob", "dinner": "pizza" },
//     { "name": "john", "dinner": "sushi" }, 
//     { "name": "larry", "dinner": "hummus" } 
// ];
// var men = people.filter(person => { 
//     return person.dinner == "sushi" 
// }); 
// console.log(men[0].name);

