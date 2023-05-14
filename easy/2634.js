// https://leetcode.com/problems/filter-elements-from-array/?utm_campaign=PostD5&utm_medium=Post&utm_source=Post&gio_link_id=a9a5VZr9

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  const answer = [];
  arr.forEach((item, idx) => fn(item, idx) && answer.push(item));
  return answer;
};
