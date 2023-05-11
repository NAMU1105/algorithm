// JS challenge day 7
// https://leetcode.com/problems/function-composition/?utm_campaign=PostD7&utm_medium=Post&utm_source=Post&gio_link_id=4PY7wZM9

// const functions = [(x) => 10 * x, (x) => 10 * x, (x) => 10 * x],
//   x = 1;
const functions = [],
  x = 42;

var compose = function (functions) {
  return function (x) {
    let result = x;
    while (functions.length) {
      const func = functions.pop();
      result = func(result);
    }
    return result;
  };
};

const fn = compose(functions);
console.log(fn(x));
