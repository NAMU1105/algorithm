// 철수는 학교에 가는데 개울을 만났습니다. 개울은 N개의 돌로 다리를 만들어 놓았습니다.
// 철수는 돌 다리를 건널 때 한 번에 한 칸 또는 두 칸씩 건너뛰면서 돌다리를 건널 수 있습니다.
// 철수가 개울을 건너는 방법은 몇 가지일까요?

// 계단 오르기와 같은데, 돌을 다 건너서 개울까지 가는 것을 고려해야 하므로 +1을 해야 한다.

const tableFiv = (num) => {
  if (num <= 2) return 1;
  const arr = [0, 1, 2, 3, 6];
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
  console.log(tableFiv(Number(line) + 1));

  rl.close();
}).on("close", function () {
  process.exit();
});
