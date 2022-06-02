// #1. for문 거꾸로 감소
// let arr = [1,2,3,4,5];
// for(let i=arr.length;i>=0;i--){
//     console.log(i);
// }

// #2. 이중 for문에서 break 사용 -> 결론 : j에서 for문을 사용하면 내부 for문 한번만 종료!
for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
        if(i===2 && j===2){
            break;
        }
        console.log("i:",i,"j:",j);
    }
}