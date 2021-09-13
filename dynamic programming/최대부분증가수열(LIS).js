// N개의 자연수로 이루어진 수열이 주어졌을 때, 그 중에서 가장 길게 증가하는
// (작은 수에서 큰수로) 원소들의 집합을 찾는 프로그램을 작성하라.
// 예를 들어, 원소가 2, 7, 5, 8, 6, 4, 7, 12, 3 이면 가장 길게 증가하도록 원소들을 차례대로 뽑아내면
// 2, 5, 6, 7, 12를 뽑아내어 길이가 5인 최대 부분 증가수열을 만들 수 있다.

// 자기 바로 직전 수부터 인덱스 0까지 가면서 체크 해야 하므로
// 두 번째 포문은 i-1부터 0까지
// 두 번째 포문에서 자기보다 수가 작고(inputArr[i]>inputArr[i-1,2,3...])
// 그 수를 인덱스로 하는 dynamicTable 배열의 값이 맥스값보다 크면 그 숫자를 채택(채택 후 +1)

// inputArr[i]보다 작은 요소들 중에서 dynamicTable의 값이 가장 큰 인덱스를 구해야 함
// -> 이걸 i-0부터 0까지 해야 함

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const LIS = () => {
  const inputArr = [5, 3, 7, 8, 6, 2, 9, 4];
  const dynamicTable = [1];

  let answer = 0;
  for (let i = 0; i < inputArr.length; i++) {
    let max = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (inputArr[i] > inputArr[j] && dynamicTable[j] > max) {
        max = dynamicTable[j];
      }
    }
    dynamicTable[i] = max + 1;
    answer = Math.max(answer, dynamicTable[i]);
  }

  return answer;
};

rl.on("line", function (line) {
  console.log(LIS());
  rl.close();
}).on("close", function () {
  process.exit();
});
