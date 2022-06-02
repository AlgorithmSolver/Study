<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        // let arr1 = [];
        
        // console.log(arr1);

        // let arr2 = [1,2,3,4,5];
        // console.log(arr2);

        // let arr3 = Array(10).fill(0);
        // console.log(arr3);

        // let arr4 = Array.from({ length: 20 }, (_, i) => i);
        // console.log(arr4);

        // let arr6 = Array.from({ length: 20 },(_, i)=>i);
        // console.log(arr6);

        // const arr = [1,2,3];
        // arr.push(4); // O(1)
        // arr.push(5,6); // O(1)
        // console.log(arr);

        //3번 인덱스에 128추가
        // arr.splice(3, 0, 128); // O(n)
        // console.log(arr);

        //3번 인덱스 값을 제거
        // arr.splice(3, 1); // O(n)
        // console.log(arr);

        // 실습
        // 배열생성법
        // const arr1 = new Array();
        // const arr2 = [];
        // const arr3 = [1,2,3,4,5];
        // const arr4 = new Array(5);
        // const arr5 = new Array(5).fill(5);
        // const arr6 = Array.from(Array(5), (v, k) => {
        //     return k + 1;
        // })
        // console.log(arr6);

        // length 조작으로 배열 삭제 :: 사용하지 않는것 권장
        // let arr = [1,2,3,4,5];
        // arr.length = 3;
        // console.log(arr);


        // join함수
        // const arr = [1,2,3,4,5,6];
        // console.log(typeof arr.join(",")); //string

        // reverse함수
        // console.log(arr.reverse());

        // concat함수 합치기
        // const arr1 = [1,2,3,4,5,6];
        // const arr2 = [7,8,9,10];
        // console.log(arr1.concat(arr2));
        
        // push함수, pop함수
        // const arr = [1, 2, 3, 4, 5, 6];
        // arr.push(7,8,9);
        // console.log(arr);
        // console.log(arr.pop()); //원본에 영향주고 pop한 것을 반환!
        // console.log(arr);

        // shift, unshift
        // let arr = [1,2,3,4,5];
        // arr.shift();
        // console.log(arr);
        // arr.unshift(10);
        // console.log(arr);

        // slice, splice
        // let arr = [1,2,3,4,5,6];
        // console.log(arr.slice(2,4)); // 인덱스 2부터 4전까지 자른 2가지 원소 반환 ,원본배열 변화 x
        // console.log(arr.splice(2,2)); // 인덱스 2포함해서 2개반환

        // 순회 - for of
        // let arr = [1,2,3,4,5,6];
        // for (const item of arr) {
        //     console.log(item);
        // }

        // JS 배열의 정체 : 객체
        // const arr = [1,2,3,4,5,6];
        // console.log(typeof arr);
        // arr["key"] = "value";
        // console.log(arr);
        // console.log(arr.length);


        // 객체
        // 생성
        // const obj1 = new Object();
        // const obj2 = {};
        // const obj = { name : "김성현", company: "Cobalt. Inc." };

        // 추가
        const obj = { name : "김성현", company: "Cobalt. Inc." };

        obj['email'] = 'kciter@naver.com';
        obj.phone = '01012345678';

        // 삭제
        delete obj.phone
        console.log(obj);

        // 확인
        console.log("email" in obj);
    
        // 키, 값 확인
        console.log(Object.keys(obj));

        // 객체 순회 : for in
        for( const key in obj) {
            console.log(key);
            console.log(obj[key]);
        }
    </script>
</body>
</html>