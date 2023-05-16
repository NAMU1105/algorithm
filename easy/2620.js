// https://leetcode.com/problems/counter/description/?utm_campaign=PostD2&utm_medium=Post&utm_source=Post&gio_link_id=xogkVqBo
// JS Challnege day 2

var createCounter = function (n) {
  let value = n;
  return function () {
    return value++;
  };
};
