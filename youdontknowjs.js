// 248 page
var p = {
  then: function (cb, errcb) {
    cb(42);
    errcb("evil laugh");
  },
};

/**
 * not to trust worthy thenable
 */
// p.then(
//   function fulfilled(val) {
//     console.log(val);
//   },
//   function rejected(err) {
//     console.log(err);
//   }
// );

/**
 * Trust worthy promise
 */
/**
 * Promose.resolve()는 thenable을 promise로 변환
 * thenable이 아닌 경우에는 그냥 promise를 반환
 *
 * Promise.resolve()는 일반 함수의 반환 값을 (데너블이든 아니든) 감싸면
 * 함수 호출을 정규화하여 비동기 작업으로 잘 작동하게 할 수 있다는 부수 효과가 있다.
 * 이를테면 foo(42)가 어떨 때는 즉시값을, 어떨 때는 프라미스일 경우 Promise.resolve(foo(42))로 감싸면
 * 항상 결과값이 프라미스가 된다.
 * 따라서 thenable이든 아니든 항상 비동기적으로 작동한다.
 */
// Promise.resolve(p).then(
//   // p가 thenable이므로 thenable을 반환
//   function fulfilled(val) {
//     console.log(val);
//   },
//   function rejected(err) {
//     console.log(err);
//   } // 42
// );

// const fooMaker = function () {
const foo = (arg) => {
  return new Promise((resolve, reject) => {
    resolve(arg);
    // reject("evil laugh");
  });
};

// const foo = fooMaker();
// don't do this
// foo(42).then((val) => console.log(val));
// do this
Promise.resolve(foo(42)).then((val) => console.log(val));
