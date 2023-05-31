// Leetcode JS challenge day 18
// https://leetcode.com/problems/convert-object-to-json-string/?utm_campaign=PostD18&utm_medium=Post&utm_source=Post&gio_link_id=GPnkNmWo

/**
 * @param {any} object
 * @return {string}
 */
var jsonStringify = function (object) {
  let anwser = "";
  const helper = (obj, idx, last) => {
    // console.log({ obj });
    if (typeof obj !== "object" || obj === null) {
      anwser += `${typeof obj === "string" ? `"${obj}"` : obj}${
        idx === last - 1 ? "" : ","
      }`;
      return;
    }

    if (Array.isArray(obj)) {
      obj.forEach((item, idx) => {
        helper(item, idx, obj.length);
      });
      return;
    }
    if (Object.keys(obj).length === 0) {
      anwser += `{}${idx === last - 1 ? "" : ","}`;
      return;
    }
    Object.keys(obj).forEach((key, idx) => {
      //   console.log(obj, obj[key]);
      if (typeof obj[key] !== "object" || obj[key] === null) {
        // console.log("here2: ", obj[key]);
        const value = typeof obj[key] === "string" ? `"${obj[key]}"` : obj[key];
        anwser += `${idx === 0 ? "{" : ""}"${key}":${value}${
          idx === Object.keys(obj).length - 1 ? "}" : ","
        }`;
      } else {
        const isArray = Array.isArray(obj[key]);
        // console.log(obj[key], isArray);
        const braketStart = isArray ? "[" : "{";
        const braketEnd = isArray ? "]" : "}";

        // const isNotEmpty = Object.keys(obj[key]).length > 0;
        // console.log("here: ", obj[key], isNotEmpty);
        if (isArray) {
          anwser += `${idx === 0 ? "{" : ""}"${key}":${braketStart}`;
        } else {
          anwser += `${idx === 0 ? braketStart : ""}"${key}":`;

          //   anwser += isNotEmpty
          //     ? `${idx === 0 ? braketStart : ""}"${key}":`
          //     : `${braketStart}`;
        }
        // console.log(obj[key]);
        // if (isNotEmpty) helper(obj[key]);
        helper(obj[key], idx, Object.keys(obj).length);
        // anwser += isNotEmpty
        //   ? `${idx === Object.keys(obj).length - 1 ? braketEnd : ","}`
        //   : `${braketEnd},`;
        // console.log({ key, last, idx });

        anwser += `${idx === Object.keys(obj).length - 1 ? braketEnd : ","}`;
      }
    });
  };
  helper(object);
  return anwser;
};

// const object = { y: 1, x: 2 };
// const object = { a: "str", b: -12, c: true, d: null };
// const object = { key: { a: 1, b: [{}, null, "Hello"] } };
const object = true;

console.log(jsonStringify(object));
