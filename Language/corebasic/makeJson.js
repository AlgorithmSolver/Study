const fs = require("fs");

let data = {
  name: "김성현",
  age: 20,
  address: ["대전시", "서구", "둔산동", "오라클 빌딩"],
};

let jsonSet = JSON.stringify(data, null, 2);

// JSON파일 만들기
fs.writeFile(`./hello.JSON`, jsonSet, (err) => {
  if (err) throw err;
});
