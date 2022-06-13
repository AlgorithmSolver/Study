// Symbol.species의 뉘앙스 : 같은 종, 형태, 모양
// Symbol.species는 constructor를 반환..
//  constructor를 실행하면 인스턴스를 생성하여 반환 
//  ---- Q.contructor, prototype구조? --- => 너무 복잡하게 설명되어 있어서 우선 패스
// const obj = [1,2,3]을 했을 경우
// __
{
    const obj = [1,2,3]; 
    // prototype은 없고 [[prototype]]만 있기 때문에 obj는 
    // Array 오브젝트가 아니라 Array.prototype에 연결된 메소드로 생성한 인스턴스입니다.

    debugger;
}