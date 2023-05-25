//  JS challenge 14th day
// https://leetcode.com/problems/cache-with-time-limit/?utm_campaign=PostD14&utm_medium=Post&utm_source=Post&gio_link_id=1P64Enz9

var TimeLimitedCache = function () {};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  let isAlreadyExist = false;
  //   isAlreadyExist = this[key] ? true : false;
  if (this[key]) {
    isAlreadyExist = true;
    clearTimeout(this[key].timeOutId);
  }

  // 이걸 안 해주면 전의 key에 설정되어있던 setTimeout이 취소되지 않아서 오답이 나옴
  const timeOutId = setTimeout(() => {
    delete this[key];
  }, duration);
  this[key] = { value, timeOutId };

  return isAlreadyExist;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  return this[key]?.value ?? -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  return Object.keys(this).length;
};

// var obj = new TimeLimitedCache();
// console.log(obj);

// console.log(obj.set(1, 42, 50)); //
// console.log(obj.set(1, 50, 100)); //
// console.log(obj.get(1)); //
// console.log(obj.get(1)); //
// console.log(obj.get(1)); //
// console.log(obj.count()); //
// console.log(obj);
