// JS challenge day 26
// https://leetcode.com/problems/call-function-with-custom-context/?utm_campaign=PostD26&utm_medium=Post&utm_source=Post&gio_link_id=39lbqjpP

/**
 * @param {Object} context
 * @param {any[]} args
 * @return {any}
 */
Function.prototype.callPolyfill = function (context, ...args) {
  //   const keys = Object.keys(context);
  //   keys.forEach((key) => {
  //     this[key] = context[key];
  //   });
  //   return this.call(this, ...args);
  this.callFn = this.bind(context, ...args);
  return this.callFn();
};

// const fn = function add(b) {
//   return this.a + b;
// };
// args = [{ a: 5 }, 7];

// const fn = function tax(price, taxRate) {
//   return `The cost of the ${this.item} is ${price * taxRate}`;
// };
// args = [{ item: "burger" }, 10, 1.1];

const fn = function increment() {
    this.count++;
    return this.count;
  },
  args = [{ count: 1 }];

console.log(fn.callPolyfill(...args));
