// 프로그래머스 스택 문제 유형

// 괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 예를 들어

// "()()" 또는 "(())()" 는 올바른 괄호입니다.
// ")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.
// '(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 
// 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.

// 제한사항
// 문자열 s의 길이 : 100,000 이하의 자연수
// 문자열 s는 '(' 또는 ')' 로만 이루어져 있습니다.

// 입출력 예
// s	    answer
// -----------------
// "()()"	true
// "(())()"	true
// ")()("	false
// "(()("	false
// 입출력 예 설명
// 입출력 예 #1,2,3,4
// 문제의 예시와 같습니다.



function solution(s){
    // 실전에서는 이 문제가 스택문제인지 가르쳐주지않음 -> 문제를 보고 스택의 개념을 떠올려서 해결할 수 있어야 함
    // 스택의 개념을 떠올릴 수 있었다면, 이 개념을 활용해서 문제를 푸는것과는 무슨 관계가 있는가?
    // 추가적으로 노트에 문제를 그리지 않고 계산해서 풀 수 있어야하는가? // 아니면 종이를 이용해서 풀 수 있는지?
    
    // 문제를 풀면서 느끼는 점은 위에 있는 모든 예제는 각각 문제풀이에 필요한 모든 힌트를 가지고 있다는 점이다.
    // 일단, 이문제에서의 핵심은...
    // (1) 자바스크립트의 배열을 이용해서 스택을 활용한다는 점
    // (2) '('가 들어왔을때는 스택에 저장하고 ')'가 들어오면 pop을 해서
    // (3) 최후에 '('가 남지 않으면(즉 배열의 크기가 0이면) true, 배열의 크기가 아직 존재한다면 false라는 점이다.
    // (4) 또한 '('가 없는 상황에서(배열의 길이가 0인 상황) 먼저 ')'가 들어온 경우에도 false라는 점이다.
    // (5) 문제를 다 풀고난 이후에는 배열을 카운트 변수로 바꾸는 추가적인 수정이 필요하다. 이렇게까지 하면 lv1에서는 100점
 
   
}
