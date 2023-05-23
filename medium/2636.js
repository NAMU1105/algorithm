// JS 30 days challenge -> 13th day
// https://leetcode.com/problems/promise-pool/?utm_campaign=PostD13&utm_medium=Post&utm_source=Post&gio_link_id=3oLQwOg9

/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Function}
 */
var promisePool = async function (functions, n) {
  let i = 0;

  const next = async () => {
    const fn = functions[i++];
    if (!fn) return;
    await fn();
    return next();
  };
  return await Promise.all(Array(n).fill().map(next));
};

const functions = [
    () => new Promise((res) => setTimeout(res, 3000)),
    () => new Promise((res) => setTimeout(res, 4000)),
    () => new Promise((res) => setTimeout(res, 2000)),
  ],
  n = 2;

// const functions = [
//   () => new Promise((res) => setTimeout(res, 300)),
//   () => new Promise((res) => setTimeout(res, 400)),
//   () => new Promise((res) => setTimeout(res, 200)),
// ];
// n = 5;

// const functions = [
//   () => new Promise((res) => setTimeout(res, 300)),
//   () => new Promise((res) => setTimeout(res, 400)),
//   () => new Promise((res) => setTimeout(res, 200)),
// ];
// n = 1;

// const sleep = (t) => new Promise((res) => setTimeout(res, t));
// promisePool([() => sleep(500), () => sleep(400)], 1).then(console.log); // After 900ms
promisePool(functions, n);

// https://leetcode.com/problems/promise-pool/solutions/3540050/simple-solution-with-promise-all-and-recursion/
// https://leetcode.com/problems/promise-pool/solutions/3533194/javascript-with-comments-beginner-friendly/
