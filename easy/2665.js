var createCounter = function (init) {
  let answer = init;

  return {
    increment: () => ++answer,
    decrement: () => --answer,
    reset: () => (answer = init),
  };
};
