
        1. 구조 분해 할당을 이용한 변수 swap
        let a = 5, b = 10;
        [a, b] = [b, a];
        console.log(a, b);

        2. for문대신 배열생성
        let sum = 0;
        for(let i = 5; i < 10; i += 1){
            sum += i;
        }
        함수형 프로그래밍
        const sum2 = Array.from(new Array(5), (_,k)=>k+5).reduce((acc,cur) => acc + cur,0);
        console.log(sum2);


        3. 배열 내 같은 요소 제거하기
        const names = ['Lee', "kim", "Park", "Lee", "Kim"];
        const uniqueNamesWithArrayFrom = Array.from(new Set(names));
        const uniqueNamesWithSpread = [...new Set(names)];

        4. Spread 연산자를 이용한 객체 병합
        const person = { 
            name: "Lee Sun-Hyoup",
            familyName: "Lee",
            givenName: "sun-Hyoup"
        }
        const Company = {
            name: 'Cobalt. Inc.',
            address: 'Seoul'
        };
        const kim = {...person, ...Company};
        console.log(kim);

        5.&&와 ||활용
        #1 ||(또는) :: 아니면 뒤에꺼
        let participantName = 'john';
        const name = participantName || 'Guest';
        console.log(name);

        //#2 &&(그리고) :: 앞에꺼가 맞아야 뒤에꺼도 실행
        function doit(){
            console.log("doit");
        } 
        let check = false;
        check && doit();

        #3. 객체병합에 이용
        const mc = (showAddress) => {
            return {
                name: 'Cobalt. Inc.',
                ...showAddress && { address: "Seoul" }
            }
        };

        6.구조 분해 할당 사용하기

        const person = {
            name : 'Lee Sun-Hyoup',
            familyName: 'Lee',
            givenName: 'Sun-Hyoup',
            company: 'Cobalt. Inc.'
        }
        const { familyName, givenName } = person;
        console.log(familyName, givenName);

        const name = "Lee Sun-Hyoup";
        const company = "Cobalt";
        const person = {
            name,
            company
        }
        console.log(person);

        7.비구조화 할당 사용하기
        const makeCompany = ({name,address,serviceName}) => {
            return {
                name,
                address,
                serviceName
            }
        };
        const cobalt = makeCompany({ name: 'Cobalt. Inc.',address: 'Seoul',serviceName: 'Present'});
        console.log(cobalt);
        
        8.동적 속성 이름 : 객체의 키를 동적으로 생성가능
        const nameKey = 'name';
        const emailKey = 'email';
        const person = {
            [nameKey]: 'Lee Sun-Hyoup',
            [emailKey]: 'kciter@naver.com'
        };
        console.log(person);

        9. !! 연산자를 사용하여 Boolean 값으로 바꾸기
        function check(variable){
            if(!!variable){
                console.log(variable);
            } else {
                console.log('잘못된 값');
            }
        }
