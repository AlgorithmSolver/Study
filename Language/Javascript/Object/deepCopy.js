// 다단계 계층 구조에서 값이 연동되지 않도록 복사하는 것

// DEEP카피방법 - JSON 활용(문자열로 바꾸고 파싱하면 깊은복사가 가능)
const book = {
  item: { title: "자바스크립트" },
};

const copy = JSON.parse(JSON.stringify(book));
book.item.title = "책";
