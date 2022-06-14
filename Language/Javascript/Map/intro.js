// 빈번하게 추가/삭제할 경우 Map이 Object보다 좋은 경우가 있다고 한다.

{
    // Basic
    const obj = new Map([
        ["key","value"],
        [{book:200},"오브젝트"],
        [100,"Number"]
    ]);
    for(let keyValue of obj){
        console.log(keyValue);
    }
}

{
    // Map 인스턴스 생성
    const obj = new Map([
        ["key","value"],
        [100,"Number"]
    ]);
    console.log(obj);
    console.log(typeof obj);
}

{
    // SameValueZero 비교
    const obj = new Map([
        [100,"Number"],
        ["100","String"]
    ]);
    for( let [key,value] of obj){
        console.log(`${key} : ${value}`);
    }
    // 100과 "100"이 타입이 달라서 두개가 출력 -> key(100,100)

    const obj2 = new Map([
        [100,"첫번"],
        [200,"두번"]
    ]);
    for( let [key, value] of obj){
        console.log(`${key}: ${value}`)
    }
    // 100 : 두번째
}

//set 
{
    let obj = new Map();
    obj.set("one",100);
    obj.set("one",200); // 키값이 같으면 마지막 value로 설정
    for (let [key, value] of obj) {
        console.log(`${key} : ${value}`)
    }
}

//get
{
    let obj = new Map([
        ["one",100]
    ]);
    console.log(obj.get("one"));
}

{
    // 오브젝트 추출
    let obj = new Map();
    const like = {sports: "스포츠"};
    obj.set(like,{value:"농구"});
    console.log(obj.get(like));
}

//has - key존재여부확인
{
    const obj = new Map([
        ["one",100]
    ]);
    console.log(has("one"))
}


//entries
{
    const obj = new Map([
        ["one",100],
        ["two",200]
    ]);
    const iter = obj.entries();
    console.log(iter.next()); // {value:["two",100], done:false}
    console.log(iter.next());
    console.log(iter.next());
}

// keys
{
    const obj = new Map([
        ["one",100],
        ["two",200]
    ]);
    const iter = obj.keys();
    console.log(iter.next()); // {value: one, done:false}
    console.log(iter.next());
    console.log(iter.next());
}


// values
{
    const obj = new Map([
        ["one",100],
        ["two",200]
    ]);
    const iter = obj.values();
    console.log(iter.next()); // {value: 100, done:false}
    console.log(iter.next());
    console.log(iter.next());
}

// Symbol.iterator()
{
    const obj = new Map([
        ["one",100],
        ["two",200]
    ]);
    const iter = obj[Symbol.iterator]();
    console.log(iter.next()); // {value: [one,100], done:false}
    console.log(iter.next());
    console.log(iter.next());
}

//forEach
{
    const obj = new Map([
        ["one",100],
        ["two",200]
    ]);
    const callback = (value, key, map) => {
        console.log(`${key}, ${value}`);
    };
    obj.forEach(callback);
}

{
    const obj = new Map([
        ["one",100],
        ["two",200]
    ]);
    function callback(value, key, map) {
        console.log(`${key}, ${value}, ${this.check}`);
    };
    obj.forEach(callback, {check: 50});
}

// delete 
{
    const obj = new Map([
        ["one",100],
        ["two",200],
        [{},"오브젝트"]
    ]);
    console.log(obj.delete("one"));//true
    console.log(obj.delete({}));//false(? what?);
}

// clear
{
    const obj = new Map([
        ["one",100],
        ["two",200],
    ]);
    obj.clear();
    console.log(obj.size);//0
    obj.set("add","추가");
    console.log(obj.size);//1
}

