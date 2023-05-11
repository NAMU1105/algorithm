// 2626. Array Reduce Transformation
// https://leetcode.com/problems/array-reduce-transformation/?utm_campaign=PostD6&utm_medium=Post&utm_source=Post&gio_link_id=nPN45jD9

var reduce = function (nums, fn, init) {
  let result = init;
  nums.forEach((item, idx) => {
    result = fn(result, item);
  });

  return result;
};
