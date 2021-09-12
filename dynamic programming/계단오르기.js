// 철수는 계단을 오를 때 한 번에 한 계단 또는 두 계단씩 올라간다. 만약 총 4계단을 오른다면
// 그 방법의 수는 1+1+1+1, 1+1+2, 1+2+1, 2+1+1, 2+2 로 5가지이다.
// 그렇다면 총 N계단일 때 철수가 올라갈 수 있는 방법의 수는 몇 가지인가?

const tableFiv = (num) => {
  if (num <= 2) return 1;
  const arr = [0, 1, 2];
  for (let index = 3; index <= num; index++) {
    arr[index] = arr[index - 1] + arr[index - 2];
  }

  return arr[num];
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  console.log(tableFiv(Number(line)));

  rl.close();
}).on("close", function () {
  process.exit();
});
