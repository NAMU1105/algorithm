// JS challenge day 21
// https://leetcode.com/problems/chunk-array/?utm_campaign=PostD21&utm_medium=Post&utm_source=Post&gio_link_id=YoXvrdGR

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function (arr, size) {
  if (!arr.length) return [];
  if (size >= arr.length) return [arr];
  const answer = [];

  let tempArr = [];
  arr.forEach((item, idx) => {
    tempArr.push(item);
    if ((idx + 1) % size === 0) {
      answer.push([...tempArr]);
      tempArr = [];
    }
  });

  if (tempArr.length) answer.push(tempArr);

  return answer;
};

// const arr = [1, 2, 3, 4, 5],
//   size = 1;

// const arr = [1, 9, 6, 3, 2],
//   size = 3;

const arr = [8, 5, 3, 2, 6],
  size = 6;

// const arr = [],
//   size = 1;

console.log(chunk(arr, size));
