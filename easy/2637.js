// Leetcode js challenge day 12
// https://leetcode.com/problems/promise-time-limit/?utm_campaign=PostD12&utm_medium=Post&utm_source=Post&gio_link_id=nombN5Z9

/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
  return async function (...args) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Time Limit Exceeded");
      }, t);
      fn(...args).then(resolve, reject);
    });
  };
};

const limited = timeLimit(
  (t) => new Promise((res) => setTimeout(res, t)),
  1000
);
limited(1500).catch(console.log); // "Time Limit Exceeded" at t=100ms

// promise.race를 이용하여 풀 수도 있음
// https://leetcode.com/problems/promise-time-limit/solutions/3406548/easy-promise-race-solution/
var timeLimit = function (fn, t) {
  return async function (...args) {
    const originalFnPromise = fn(...args);

    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => {
        reject("Time Limit Exceeded");
      }, t);
    });

    return Promise.race([originalFnPromise, timeoutPromise]);
  };
};
