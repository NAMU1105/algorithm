// Leetcode JS challenge day16
// https://leetcode.com/problems/throttle/?utm_campaign=PostD16&utm_medium=Post&utm_source=Post&gio_link_id=bR7jOnr9
//
// https://leetcode.com/problems/throttle/solutions/3570952/very-simple-solution-with-explanation/
// https://leetcode.com/problems/throttle/solutions/3548801/easy-js-solution-beats-100/
/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */

var throttle = function (fn, t) {
  let isThrottled = false;
  let savedArgs = null;

  return function (...args) {
    if (isThrottled) {
      // wait for the next call
      savedArgs = args;
      console.log("savedArgs: ", savedArgs);
      return;
    }
    // execute the function for the first time
    fn(...args);
    isThrottled = true;
    setTimeout(helper, t);

    function helper() {
      if (savedArgs) {
        fn(...savedArgs);
        isThrottled = true;
        savedArgs = null;
        setTimeout(helper, t);
        return;
      }
      isThrottled = false;
    }
  };
};

const throttled = throttle(console.log, 100);
throttled("log"); // logged immediately.
throttled("log2"); // 무시됨
throttled("log3"); // logged at t=100ms
