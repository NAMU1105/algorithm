// https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox/FMfcgzGsltMvBtKWJgqgGCjTHNXwzrQh
// hard
// Stripe
// [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.
// You can modify the input array in-place.

// const arr = [3, 4, -1, 1];
const arr = [1, 2, 0];

const test = (arr) => {
  arr = arr.sort();
  let isPositiveInteger = false;
  let previousToAnswer = 0;
  let answer = undefined;
  arr.forEach((element) => {
    if (element > 0) isPositiveInteger = true;
    if (!isPositiveInteger) return;
    if (previousToAnswer + 1 !== element) answer = previousToAnswer + 1;
    previousToAnswer = element;
  });

  return answer ?? arr[arr.length - 1] + 1;
};

// console.log(test(arr));
// 정답
const test2 = (arr) => {
  arr = arr.sort();

  let i = 1;
  while (arr.includes(i)) {
    i += 1;
  }

  return i;
};
console.log(test2(arr));
