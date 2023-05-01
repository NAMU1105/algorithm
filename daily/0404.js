// For example, if our input was [1, 2, 3, 4, 5],
// the expected output would be [120, 60, 40, 30, 24].
// If our input was [3, 2, 1], the expected output would be [2, 3, 6].

// Follow-up: what if you can't use division?

// hard
// Uber
// #2

const arr = [1, 2, 3, 4, 5];
// const arr = [3, 2, 1];

// const test = (arr) => {
//   const callback = (accumulator, currentValue) => {
//     // console.log({ currentValue });
//     return accumulator * currentValue;
//   };
//   const totalMultipliedValue = arr.reduce(callback, 1);
//   arr.forEach((element, idx) => {
//     arr.splice(idx, 1, totalMultipliedValue / element);
//   });

//   return arr;
// };

const test2 = (arr) => {
  // Generate prefix products
  const prefix_products = [];

  arr.forEach((element, idx) => {
    if (prefix_products.length) {
      prefix_products.push(
        prefix_products[prefix_products.length - 1] * element
      );
    } else {
      prefix_products.push(element);
    }
  });

  // Generate suffix products
  const suffix_products = [];
  arr.reverse().forEach((element, idx) => {
    console.log({ element });
    if (suffix_products.length) {
      suffix_products.push(
        suffix_products[suffix_products.length - 1] * element
      );
    } else {
      suffix_products.push(element);
    }
  });
  suffix_products.reverse();

  console.log({ prefix_products });
  console.log({ suffix_products });

  // Generate result
  const result = [];
  arr.forEach((element, idx) => {
    if (idx === 0) {
      result.push(suffix_products[idx + 1]);
    } else if (idx === arr.length - 1) {
      result.push(prefix_products[idx - 1]);
    } else {
      result.push(prefix_products[idx - 1] * suffix_products[idx + 1]);
    }
  });

  return result;
};

console.log(test2(arr));
