// from() - 이터러블 오브젝트에서 배열로 바꿈
{
  // Basic
  const like = { 0: "zero", 1: "one", length: 2 };
  const list = Array.from(like);
  console.log(list);
}

{
  function args() {
    return Array.from(arguments);
  }
  console.log(args(1, 2, 3)); // [1,2,3]
}

{
  // NodeList가 이터러블 오브젝트 이므로 Array.from()으로 배열로 반환가능
  ////<li class=sports>축구</li>
  ////<li class=sports>농구</li>
  //const nodes = document.querySelectorAll(".sports");
  //const show = (node) => console.log(node.textContent);
  //Array.from(nodes).forEach(show);
}

{
  //두번째 파라미터 - 콜백 함수 호출
  const like = { 0: "zero", 1: "one", length: 2 };
  console.log(
    Array.from(like, (value) => {
      return value + "변경";
    })
  );
}

{
  //세번째 파라미터 - 오브젝트 제공 및 this참조
  const like = { 0: 10, 1: 20, length: 2 };
  console.log(
    Array.from(
      like,
      function (value) {
        return value + this.plus;
      },
      { plus: 70 }
    )
  );
}
