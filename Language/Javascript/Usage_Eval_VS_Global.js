// eval
var start_e = performance.now();
var namee = 'value_eval';
var max = 100000;
for(let i=0; i<max; i++){
    eval(`var ${namee}${i} = ${i}`); // var var
}
var end_e = performance.now();
    
// window
var start_g = performance.now();
for(let i = 0; i < max; i++) {
    global['value_global'+i] = + i;
}
var end_g = performance.now();

console.log("eval: ",end_e-start_e);
console.log("global: ",end_g-start_g);

// 결론 
// (1) eval보다 전역변수추가가(global/window) 약 10배 빠르다.
// (2) 하지만 결론적으로는 전부다 느리다. 동적으로 변수를 생성하는 것은 10000번에서 1~10초때로 매우 느리게
//     진행되기 때문에 사용하지 않는 것이 좋다. 특히 알고리즘문제풀이에서 접근할 방법이 아님.