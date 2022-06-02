// 객체비교함수(lodash나 underscore를 사용하지 않고 집접 구현)
// 한계 : 속성에 함수가 들어가면 함수는 ==, ===로 비교 할 수 없기때문에 에러가 발생
function isEquivalent(a, b){
    // 속성 이름 배열
    let aProps = Object.getOwnPropertyNames(a); // 
    let bProps = Object.getOwnPropertyNames(b); // 속성리스트 배열반환

    if(aProps.length != bProps.length){
        return false;
    }

    for( let i = 0; i < aProps.length; i++){
       let propName = aProps[i];
       if(a[propName] !== b[propName]){
           return false;
       } 
    }

    return true;
}
var obj1 = { name : "thurdays", age : 23 }
var obj2 = { name : "thurdays", age : 23 }
const tfcheck = isEquivalent(obj1,obj2);
console.log(tfcheck);

