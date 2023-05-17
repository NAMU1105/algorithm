// https://leetcode.com/problems/curry/?utm_campaign=PostD10&utm_medium=Post&utm_source=Post&gio_link_id=QRekxgjo
// JS Challnege day 9

/**
 * @param {Function} fn
 * @return {Function}
 */

var curry = function (fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }

    return function (...args2) {
      // args 갯수를 충족할 때까지 함수를 return
      return curried.apply(this, args.concat(args2));
    };
  };
};

/////// test ///////
// function sum(a, b, c) {
//   console.log("sum: ", a, b, c);
//   return a + b + c;
// }
function sum(a, b) {
  console.log("sum: ", a, b);
  return a + b;
}
function life() {
  return 42;
}

const curriedSum = curry(sum);
// console.log(curriedSum(1)(2)(3));
// console.log(curriedSum(1)(2, 3));
// console.log(curriedSum(1, 2, 3));
const curriedLife = curry(life);
console.log(curriedLife());
