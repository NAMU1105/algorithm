// JS challenge day 20
// https://leetcode.com/problems/differences-between-two-objects/?utm_campaign=PostD20&utm_medium=Post&utm_source=Post&gio_link_id=LPdzgyA9

// 참고
// https://leetcode.com/problems/differences-between-two-objects/solutions/3557230/recursion-easy-self-explanatory/?utm_campaign=PostD20&utm_medium=Post&utm_source=Post&gio_link_id=LPdzgyA9

/**
 * @param {object} obj1
 * @param {object} obj2
 * @return {object}
 */

const objDiff = (sourceObj, targetObj) => {
  // Special case: Objects are the same
  if (sourceObj === targetObj) {
    // console.log("1");
    // console.log({ sourceObj, targetObj });
    // return {};
    return null;
  }

  // Special cases: Null values or different types
  if (sourceObj === null || targetObj === null) {
    // console.log("2");
    return [sourceObj, targetObj];
  }
  // 1번을 안 하면 3번에서 걸림
  if (typeof sourceObj !== "object" || typeof targetObj !== "object") {
    // console.log("3");
    return [sourceObj, targetObj];
  }
  if (Array.isArray(sourceObj) !== Array.isArray(targetObj)) {
    // console.log("4");
    return [sourceObj, targetObj];
  }

  const diffObj = {}; // Object to store the differences

  // Iterate over the keys in sourceObj
  // 아하!!! array의 object 키는 인덱스니까!
  //   console.log("keys: ", Object.keys(sourceObj));
  Object.keys(sourceObj).forEach((key) => {
    if (key in targetObj) {
      const subDiff = objDiff(sourceObj[key], targetObj[key]); // Recursive call for nested objects

      //   console.log({ key, subDiff });
      // If there are differences, add them to the diffObj
      if (subDiff === null) return;
      if (Object.keys(subDiff).length > 0) {
        diffObj[key] = subDiff;
      }
    }
  });

  return diffObj; // Return the object containing the differences
};

// const obj1 = {},
//   obj2 = {
//     a: 1,
//     b: 2,
//   };

// const obj1 = {
//     a: 1,
//     v: 3,
//     x: [],
//     z: {
//       a: null,
//     },
//   },
//   obj2 = {
//     a: 2,
//     v: 4,
//     x: [],
//     z: {
//       a: 2,
//     },
//   };

// const obj1 = {
//     a: 5,
//     v: 6,
//     z: [1, 2, 4, [2, 5, 7]],
//   },
//   obj2 = {
//     a: 5,
//     v: 7,
//     z: [1, 2, 3, [1]],
//   };

// const obj1 = {
//     a: { b: 1 },
//   },
//   obj2 = {
//     a: [5],
//   };

const obj1 = {
    a: [1, 2, {}],
    b: false,
  },
  obj2 = {
    b: false,
    a: [1, 2, {}],
  };

console.log(objDiff(obj1, obj2));
