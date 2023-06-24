// JS challenge day 20
// https://leetcode.com/problems/differences-between-two-objects/?utm_campaign=PostD20&utm_medium=Post&utm_source=Post&gio_link_id=LPdzgyA9

// 전일자 함수 활용하기
// 사라진 값은 무시하기 (마지막 예시 참고)
/**
 * @param {object} obj1
 * @param {object} obj2
 * @return {object}
 */

function flattenObj(obj, parent, res = {}, valueIsArray) {
  for (let key in obj) {
    // let parentName = valueIsArray ? ` "[${parent}"` : parent;
    const propName = parent ? parent + "." + key : key;
    // obj[key] 로 비교하는게 키인 것 같다.
    // 값이 obj가 아닐 때까지 재귀를 돌린다.
    if (typeof obj[key] == "object" && obj[key] !== null) {
      // obj 자리에 obj[key]를 넣어야 한다.
      flattenObj(obj[key], propName, res, Array.isArray(obj[key]));
    } else {
      res[propName] = obj[key];
    }
  }

  return res;
}

const recur = (obj, arr, value) => {
  if (arr.length === 0) {
    return;
  }
  const key = arr.shift();
  if (arr.length === 0) {
    obj[key] = value;
    return;
  }
  if (!obj[key]) {
    obj[key] = {};
  }

  recur(obj[key], arr, value);
};

function objDiff(obj1, obj2) {
  const answer = {};
  const flat1 = flattenObj(obj1);
  const flat2 = flattenObj(obj2);

  // key arr 비교
  const keys = Object.keys(flat1);
  keys.forEach((key) => {
    if (!Object.keys(flat2).includes(key)) {
      delete flat1[key];
      return;
    }
    if (flat1[key] === flat2[key]) {
      delete flat1[key];
      delete flat2[key];
      return;
    }
    // console.log({ flat1, flat2 });

    // push to the answer obj
    if (key.includes(".")) {
      const subKeys = key.split(".");
      //   console.log(flat1[key], flat2[key]);
      recur(answer, subKeys, [flat1[key], flat2[key]]);
      return;
    }
    answer[key] = [flat1[key], flat2[key]];
  });

  return answer;
}
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

const obj1 = {
    a: { b: 1 },
  },
  obj2 = {
    a: [5],
  };

// const obj1 = {
//     a: [1, 2, {}],
//     b: false,
//   },
//   obj2 = {
//     b: false,
//     a: [1, 2, {}],
//   };

console.log(objDiff(obj1, obj2));
