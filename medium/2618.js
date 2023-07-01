// JS challenge day 25
// https://leetcode.com/problems/check-if-object-instance-of-class/?utm_campaign=PostD25&utm_medium=Post&utm_source=Post&gio_link_id=qPkbxBwR

/**
 * @param {any} obj
 * @param {any} classFunction
 * @return {boolean}
 */

// 타고타고 올라가야 함 (recursion)
// https://leetcode.com/problems/check-if-object-instance-of-class/solutions/3406893/javascript-solution-with-explaination-easy-to-understand/
var checkIfInstanceOf = function (obj, classFunction) {
  const prototype = classFunction?.prototype;
  while (obj !== null && obj !== undefined) {
    obj = Object.getPrototypeOf(obj);
    if (obj === prototype) return true;
  }
  return false;
};

// another anwser
// var checkIfInstanceOf = function (obj, classFunction) {
//     while (obj !== null && obj !== undefined) {
//       if (obj.constructor === classFunction) return true;

//       obj = Object.getPrototypeOf(obj);
//     }

//     return false;
//   };

// const func = () => checkIfInstanceOf(new Date(), Date);

// const func = () => {
//   class Animal {}
//   class Dog extends Animal {}
//   return checkIfInstanceOf(new Dog(), Animal);
// };

// const func = () => checkIfInstanceOf(Date, Date);

const func = () => checkIfInstanceOf(5, Number);

console.log(func());
