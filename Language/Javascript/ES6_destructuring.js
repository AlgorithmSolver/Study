//  1. 디스트럭처링 스왑 vs tmp변수생성 이동 : tmp변수생성 이동이 훨씬 빠름
//  1-1)디스트럭처링 스왑
let start1 = new Date();  // 시작
a = [1,2];
for(let i=0;i<100000000;i++){
    [a[1],a[0]] = [a[0],a[1]];
}
let end1 = new Date();  // 종료
console.log("destructuring:",end1 - start1);
//  1-2)tmp변수생성 이동
let start2 = new Date();  // 시작
let tmp = 0;
for(let i=0;i<100000000;i++){
    tmp = a[1];
    a[1] = a[0];
    a[0] = tmp;
}
let end2 = new Date();  // 종료
console.log("destructuring:",end2 - start2);

// 결론 : 
// tmp변수생성 이동이 훨씬 빠르다. 많은 작업을 하게 된다면
// 디스트럭처링 사용보다는 tmp변수생성 이동을 사용하자.