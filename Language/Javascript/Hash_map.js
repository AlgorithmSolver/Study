// 1. 해시맵 선언
const map1 = new Map();
// 2. 해시충돌
map1.set("k1",1000);
map1.set("k1",2000);
map1.set("k2",3000);
// -> 해시충돌이 일어나면 맨 뒤에 선언된 Map Element가 저장

// 3. 입력 map2.set(1,["classic",300]); / 주의 map2[1] = ["classic",300] -> X
const map2 = new Map();
map2.set(1,["classic",300]);
console.log("map2:",map2);

// 4.key값만 나열 / value값만 나열
console.log("keys : ",map2.keys());
console.log("values : ",map2.values());
// 4-1) keys값은 이터러블, 배열로 변경시키기
const arr4 = Array.from(map2.keys());
console.log("arr4:",arr4);

// 5. value값으로 key값 찾기
// 5-1) 우회
function topK(nums, k) {
    const map = new Map()
    const result = []
    for(const i of nums){
     map[i] = map[i] +1 ||1 
    }
    const array = Object.values(map).sort((a,b)=> b-a);
    for(let i=0; i< k ;i++){
      Object.keys(map).find(key => {
        if(map[key] === array[i]){     
          result.push(parseInt(key))
        }
      })
    }
    return result
}
console.log(topK([1,2,3,3,5],4));

// 5-2) StackOverflow + Array.from(Map Iterator)
// https://stackoverflow.com/questions/28718641/transforming-a-javascript-iterable-into-an-array
const map3 = new Map();
map3.set("american",1);
map3.set("korean",2);
const hashArr = Array.from(map3);
console.log(hashArr)
// 중요한 실수 :: 해쉬맵을 사용하는것은 O(1)의 원리를 활용하기 위해서 해쉬맵을 사용한다.
// 하지만, value값으로 key값을 찾기위해서 1차원배열에서 선형검색을 하는것은 O(n)의 시간을 소비한다.
// 항상 기억하기 : 해쉬맵을 활용한다는것은 O(1)의 원리를 사용하기 위함이다!!!
  
  
// 6. 활용
// key를 알고 있을때 당연히 해시를 사용한다.
// [ 'pop', 2500 ], [ 'classic', 800 ], ... ] 
// {  pop -> 2500 ,    classic -> 800   ... } 
    