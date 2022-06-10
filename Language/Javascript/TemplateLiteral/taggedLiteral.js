//tagged Template
{
  // Basic
  const one = 1;
  const two = 2;
  const show = (text, value) => {
    console.log(`${text[0]}${value}}`);
    console.log(text[1]);
  };
  show`1+2 = ${one + two}`;
}

{
  // value가 여러개 ( plus, minus )
  const one = 1;
  const two = 2;
  const show = (text, plus, minus) => {
    console.log(`${text[0]}${plus}`);
    console.log(`${text[1]}${minus}`);
    console.log(`${text[2]}${text[3]}`);
  };
  show`1+2 = ${one + two}이고 1-2 = ${one - two}이다.`;
}

{
  // Rest파라미터
  const one = 1,
    two = 2;
  const show = (text, ...rest) => {
    console.log(`${text[0]}${rest[0]}`);
    console.log(`${text[1]}${rest[1]}${text[2]}`);
  };
  show`1+2 = ${one + two}이고 1-2 = ${one - two}이다.`;
}
