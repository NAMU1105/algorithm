// https://leetcode.com/problems/sleep/?utm_campaign=PostD11&utm_medium=Post&utm_source=Post&gio_link_id=5Rp2Wmzo
// JS Challnege day 10
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise
/**
 * @param {number} millis
 */

const millis = 2000;
async function sleep(millis) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve();
    }, millis);
  });
}

let t = Date.now();
sleep(millis).then(() => console.log(Date.now() - t));
