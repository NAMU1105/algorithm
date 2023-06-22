// Leetcode JS challenge day 19
// https://leetcode.com/problems/array-of-objects-to-matrix/?utm_campaign=PostD19&utm_medium=Post&utm_source=Post&gio_link_id=EoZk0Zy9

/**
 * @param {Array} arr
 * @return {Matrix}
 */

function flattenObj(obj, parent, res = {}) {
  for (let key in obj) {
    // console.log(key, parent, obj, obj[key]);
    const propName = parent ? parent + "." + key : key;
    // obj[key] 로 비교하는게 키인 것 같다.
    // 값이 obj가 아닐 때까지 재귀를 돌린다.
    if (typeof obj[key] == "object" && obj[key] !== null) {
      // obj 자리에 obj[key]를 넣어야 한다.
      flattenObj(obj[key], propName, res);
    } else {
      res[propName] = obj[key];
    }
  }

  return res;
}

var jsonToMatrix = function (arr) {
  const keys = [];
  const flat = arr.map((item) => flattenObj(item));
  // console.log({ flat });

  for (let item of flat) {
    for (let key of Object.keys(item)) {
      if (!keys.includes(key)) {
        keys.push(key);
      }
    }
  }

  keys.sort();

  const res = [keys];
  for (let item of flat) {
    const row = [];
    for (let key of keys) {
      if (key in item) row.push(item[key]);
      else row.push("");
    }
    res.push(row);
  }
  return res;
};

// const arr = [
//   { b: 1, a: 2 },
//   { b: 3, a: 4 },
// ];
// const arr = [{ a: 1, b: 2 }, { c: 3, d: 4 }, {}];
// const arr = [{ a: { b: 1, c: 2 } }, { a: { b: 3, d: 4 } }];
// const arr = [[{ a: null }], [{ b: true }], [{ c: "x" }]];
// const arr = [{}, {}, {}];
// const arr = [[[[1]]], [[[2]]], [[[3]]]];
const arr = [[[[1]]], [[2]], [3]];
console.log(jsonToMatrix(arr));
