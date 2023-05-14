// https://leetcode.com/problems/allow-one-function-call/?utm_campaign=PostD8&utm_medium=Post&utm_source=Post&gio_link_id=a9By01Oo

/**
 * @param {Function} fn
 * @return {Function}
 */

// const fn = (a, b, c) => a + b + c,
//   calls = [
//     [1, 2, 3],
//     [2, 3, 6],
//   ];

const fn = (a, b, c) => a * b * c,
  calls = [
    [5, 7, 4],
    [2, 3, 6],
    [4, 6, 8],
  ];

var once = function (fn) {
  let isCalled = false;
  return function (...args) {
    if (isCalled) return;
    isCalled = true;
    return fn(...args);
  };
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
const onceFn = once(fn);
calls.forEach((call) => console.log(onceFn(...call)));
