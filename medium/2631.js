// JS challenge day 23
// https://leetcode.com/problems/group-by/?utm_campaign=PostD24&utm_medium=Post&utm_source=Post&gio_link_id=WoM5GZKo

/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function (fn) {
  const answer = {};

  this.forEach((item) => {
    const key = fn(item);
    if (answer[key]) {
      answer[key].push(item);
    } else {
      answer[key] = [item];
    }
  });

  return answer;
};

// console.log([1, 2, 3].groupBy(String)); // {"1":[1],"2":[2],"3":[3]}

// const array = [{ id: "1" }, { id: "1" }, { id: "2" }],
//   fn = function (item) {
//     return item.id;
//   };

// const array = [
//   [1, 2, 3],
//   [1, 3, 5],
//   [1, 5, 9],
// ];
// fn = function (list) {
//   return String(list[0]);
// };

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
fn = function (n) {
  return String(n > 5);
};

console.log(array.groupBy(fn));
