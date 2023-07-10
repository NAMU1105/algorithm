// JS challenge day 30
// https://leetcode.com/problems/nested-array-generator/?utm_campaign=PostD30&utm_medium=Post&utm_source=Post&gio_link_id=JoOOVj1o
/**
 * @param {Array} arr
 * @return {Generator}
 */

function* foreach(arr, fn) {
  var i;

  for (i = 0; i < arr.length; i++) {
    yield* fn(arr[i]);
  }
}

var inorderTraversal = function* (arr) {
  if (!Array.isArray(arr)) {
    yield arr;
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    yield* inorderTraversal(arr[i]);
  }
};

const gen = inorderTraversal([1, [2, 3]]);
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
