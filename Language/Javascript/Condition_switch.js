// (1) switch 사용법
function choice(value){
    switch(value){
        case 1 : 
            return "one";
        case 2 :
            return "two";
        default : 
            return "another";
    }
}

// console.log(choice(1));
// console.log(choice(2));
// console.log(choice(10));


// (2) 윤년계산 알고리즘 with switch
// 윤년인지 판별해서 2월의 일수를 계산하라.
// 윤년의 규칙
// 1.서력 기원 연수가 4로 나누어 떨어지는 해는 윤년으로 한다. 
// (1988년, 1992년, 1996년, 2004년, 2008년, 2012년, 2016년, 
// 2020년, 2024년, 2028년, 2032년, 2036년, 2040년, 2044년 ...)

// 2.서력 기원 연수가 4, 100으로 나누어 떨어지는 해는 평년으로 한다. 
// (1700년, 1800년, 1900년, 2100년, 2200년, 2300년...)

// 3.서력 기원 연수가 4, 100, 400으로 나누어 떨어지는 해는 
// 윤년으로 둔다. (1600년, 2000년, 2400년...)
function leapyear(year,month) {
    let days = 0;
    switch(month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            days = 31;
            return days;
        case 4:
        case 6:
        case 9:
        case 11:
            days = 30;
            return days;
        case 2:
            days = ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) ? 29 : 28;
            return days;
        default:
            return null;
    }
}

console.log(leapyear(2000,2));
