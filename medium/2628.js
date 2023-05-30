// Leetcode JS challenge day17
// https://leetcode.com/problems/json-deep-equal/?utm_campaign=PostD17&utm_medium=Post&utm_source=Post&gio_link_id=4PKqJ0z9
/**
 * @param {any} o1
 * @param {any} o2
 * @return {boolean}
 */
var areDeeplyEqual = function (o1, o2) {
  let answer = true;
  //   console.log({ o1, o2 });

  if (typeof o1 !== typeof o2) return false;
  if (typeof o1 !== "object") return o1 === o2;
  if (Array.isArray(o1) !== Array.isArray(o2)) return false;

  const checkArray = (value1, value2) => {
    let answer = true;
    if (value1.length !== value2.length) answer = false;
    value1.forEach((element) => {
      if (!value2.includes(element)) answer = false;
    });
    return answer;
  };

  if (Array.isArray(o1)) return checkArray(o1, o2);

  if ((o1 === null && o2 === null) || (o1 === undefined && o2 === undefined))
    return true;

  Object.keys(o1).forEach((key) => {
    // console.log(o1[key], o2[key], key);
    if (typeof o1[key] !== typeof o2[key]) answer = false;

    // if (
    //   (o1[key] === null && o2[key] === null) ||
    //   (o1[key] === undefined && o2[key] === undefined)
    // ) {
    //   return;
    // } else
    if (typeof o1[key] === "object" && !Array.isArray(o1[key])) {
      if (!areDeeplyEqual(o1[key], o2[key])) answer = false;
    } else if (Array.isArray(o1[key])) {
      //   console.log("ehre");
      answer = checkArray(o1[key], o2[key]);
      //   if (o1[key].length !== o2[key].length) answer = false;
      //   o1[key].forEach((element) => {
      //     if (!o2[key].includes(element)) answer = false;
      //   });
    } else if (o1[key] !== o2[key]) answer = false;
  });
  return answer;
};

// const o1 = { x: 1, y: 2 },
// o2 = { x: 1, y: 2 };
// const o1 = { y: 2, x: 1 },
//   o2 = { x: 1, y: 2 };
const o1 = { x: null, L: [1, 2, 3] },
  o2 = { x: null, L: ["1", "2", "3"] };
// const o1 = true,
//   o2 = false;
// const o1 = { 0: 1 },
//   o2 = [1];
// const o1 = [1],
//   o2 = [1, 2];
// const o1 = { x: null, L: [1, 2, 3] },
//   o2 = { x: null, L: [1, 2, 3] };
// const o1 = null,
//   o2 = null;
console.log(areDeeplyEqual(o1, o2));
