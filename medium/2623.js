// https://leetcode.com/problems/memoize/?utm_campaign=PostD9&utm_medium=Post&utm_source=Post&gio_link_id=nRbADVd9
// JS challenge day 9
/**
 * @param {Function} fn
 */
// sum 이면 인자 두 개 더해서 키로 사용 -> 다른 두 값인데 합이 같으면 에러 발생
// => `${args[0]}_${args[1]}` 형식으로 키 생성
// 나머지는 인자를 키로 사용
// 밸류는 결과값

function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = args.length > 1 ? `${args[0]}_${args[1]}` : args[0];
    if (cache.has(key)) return cache.get(key);

    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

///////////////////////// SUM TESTS /////////////////////////
// let callCount = 0;
// const memoizedFn = memoize(function (a, b) {
//   callCount += 1;
//   return a + b;
// });
// console.log(memoizedFn(1, 7));
// console.log(memoizedFn(7, 4));
// console.log(memoizedFn(5, 6));
// console.log(memoizedFn(9, 8));
// // console.log(memoizedFn());
// console.log({ callCount });
