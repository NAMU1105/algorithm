// Leetcode JS challenge day17
// https://leetcode.com/problems/json-deep-equal/?utm_campaign=PostD17&utm_medium=Post&utm_source=Post&gio_link_id=4PKqJ0z9
// https://leetcode.com/problems/json-deep-equal/solutions/3411176/all-cases-detailed-explanation/

var areDeeplyEqual = function (o1, o2) {
  // All equal values and same objects are eliminated
  if (o1 === o2) return true;

  // If any of o1 or o2 is not an object, they are different values
  if (typeof o1 != "object" || typeof o2 != "object") return false;

  // Both of them should be objects or arrays
  if (Array.isArray(o1) !== Array.isArray(o2)) return false;

  // Both should have same keys, in case of indexes this will return indexes
  if (Object.keys(o1).length != Object.keys(o2).length) return false;

  // Check if all values against keys of o1 and o2 are deeply equal.
  // If number of keys are same, then at a different key in objects would mean at least
  // 1 value against the key of o2 will be undefined
  for (const key in o1) {
    if (!areDeeplyEqual(o1[key], o2[key])) return false;
  }

  // All checks passed
  return true;
};

// const o1 = { x: 1, y: 2 },
// o2 = { x: 1, y: 2 };
// const o1 = { y: 2, x: 1 },
//   o2 = { x: 1, y: 2 };
// const o1 = { x: null, L: [1, 2, 3] },
//   o2 = { x: null, L: ["1", "2", "3"] };
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
const o1 = [1, 2, 3, { x: 4 }],
  o2 = [1, 2, 3, { x: 4 }];
console.log(areDeeplyEqual(o1, o2));
