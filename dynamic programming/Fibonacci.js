// basic fibonacci problem solving

// 1. recursion
const recursionFiv = (num) => {
  if (num <= 2) return 1;
  return recursionFiv(num - 1) + recursionFiv(num - 2);
};

// 2. memoization
const memoFiv = (num, arr = [0]) => {
  if (arr[num]) return arr[num];
  arr[num] = arr[num - 1] + arr[num - 2];
  return memoFiv(num - 1, arr) + memoFiv(num - 2, arr);
};

// 3. tabulation(bottom up)
const tableFiv = (num) => {
  if (num <= 2) return 1;
  const arr = [0, 1, 1];
  for (let index = 3; index <= num; index++) {
    arr[index] = arr[index - 1] + arr[index - 2];
  }

  return arr[num];
};

// 3번이 2번 보다 메모리적으로 더 나은 문제 풀이, 2번은 10만을 넣으면 스택오버플로우 에러가 난다.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  //   console.log(recursionFiv(Number(line)));
  //   console.log(memoFiv(Number(line), [0, 1, 1]));
  console.log(tableFiv(Number(line)));
  rl.close();
}).on("close", function () {
  process.exit();
});
