//https://www.acmicpc.net/problem/1003

// 값 대신에 1과 0 카운트 들을 넣어놓고,
// n-1, n+1 카운트들을 ++해주면 될 것 같다.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const tableFiv = (num) => {
  const arr = [
    [1, 0],
    [0, 1],
    [1, 1],
    [1, 2],
  ];
  if (num <= 3) return arr[num];
  for (let index = 4; index <= num; index++) {
    const x = arr[index - 1][0] + arr[index - 2][0];
    const y = arr[index - 1][1] + arr[index - 2][1];
    arr[index] = [x, y];
  }

  return arr[num];
};

let lineCount = 0;
const input = [];
let result = [];
rl.on("line", function (line) {
  if (lineCount === 0) {
    lineCount = parseInt(line);
    return;
  }
  input.push(parseInt(line));
  if (lineCount === input.length) rl.close();
}).on("close", function () {
  input.map((num) => {
    result.push(`${tableFiv(num)[0]} ${tableFiv(num)[1]}`);
  });

  console.log(result.join("\n"));
  process.exit();
});
