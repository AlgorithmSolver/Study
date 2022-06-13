// primitive
//  오브젝트가 아니라 값이며 함수를 갖고 있지 않음
//  ES5에서 string, nunber, boolean, null, undefined
//  ES6에서 symbol 타입 추가 - Symbol은 값임

// wrapper 오브젝트
//  프리미티브 값이 포함된 오브젝트
//  wrapper 오브젝트에는 메소드가 있음
//  String Number Boolean Symbol
//  ex>
//  const obj = new String(100);
//  하면 [[PrimitiveValue]]에 100이 설정됨
//  그런데,
//  Symbom(ABC)하면 [[PrimitiveValue]]가 보이지 않음(debugger)
//  그렇다고 값이 없는것은 아님
//  ( 특징으로 생각! -> primitive값을 외부에 노출시키지 않기위함 )
