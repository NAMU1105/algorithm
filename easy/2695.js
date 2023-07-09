// JS challenge day 28
// https://leetcode.com/problems/array-wrapper/?utm_campaign=PostD28&utm_medium=Post&utm_source=Post&gio_link_id=1R3l3Q0P

/**
 * @param {number[]} nums
 */
var ArrayWrapper = function (nums) {
  this.arr = nums;
};

ArrayWrapper.prototype.valueOf = function () {
  this.value = this.arr.reduce((acc, cur) => acc + cur, 0);
  return this.value;
};

ArrayWrapper.prototype.toString = function () {
  return `[${this.arr.join(",")}]`;
};

const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);
// obj1 + obj2; // 10
console.log(obj1 + obj2);
console.log(String(obj1)); // "[1,2]"
String(obj2); // "[3,4]"
