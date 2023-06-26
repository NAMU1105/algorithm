// JS challenge day 22
// https://leetcode.com/problems/flatten-deeply-nested-array/?utm_campaign=PostD22&utm_medium=Post&utm_source=Post&gio_link_id=rREX6Gm9

/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */

// 배열을 순회하면서 배열을 하나씩 꺼내서 보고
// 뎁스 확인
var flat = function (arr, n) {
  if (n === 0) return arr;
  const answer = [];

  const checkArr = (array, depth) => {
    array.forEach((item) => {
      //   console.log(item, depth, Array.isArray(item));

      if (!Array.isArray(item) && depth <= n) {
        answer.push(item);
        return;
      }

      if (Array.isArray(item)) {
        if (depth >= n) {
          answer.push(item);
        } else {
          checkArr(item, depth + 1);
        }
      }
    });
  };

  checkArr(arr, 0);
  return answer;
};

// const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
// n = 0;

// const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
// n = 1;

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, [9, 10, 11], 12],
  [13, 14, 15],
];
n = 2;

console.log(flat(arr, n));
