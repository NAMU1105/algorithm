// Leetcode JS challenge day 18
// https://leetcode.com/problems/convert-object-to-json-string/?utm_campaign=PostD18&utm_medium=Post&utm_source=Post&gio_link_id=GPnkNmWo

// https://leetcode.com/problems/convert-object-to-json-string/solutions/3406872/without-using-the-built-in-json-stringify-method-recursive-solution/?utm_campaign=PostD18&utm_medium=Post&utm_source=Post&gio_link_id=GPnkNmWo
// 차분히 스텝 바이 스텝으로 생각하고 코드를 짜기

var jsonStringify = function (object) {
  if (object === null) return "null";
  // return the string value surrounded by double quotes.
  if (typeof object === "string") return `"${object}"`;
  // return its string representation.
  if (typeof object === "number" || typeof object === "boolean") {
    return String(object);
  }

  ////////////////////////////////
  // Recursively convert each item to a JSON string suing map and join them with commas.
  if (Array.isArray(object)) {
    const items = object.map((item) => jsonStringify(item)).join(",");
    return `[${items}]`;
  }
  // Recursively convert each value to a JSON string and pair it with the corresponding key.
  if (typeof object === "object") {
    const keys = Object.keys(object);
    const items = keys.map((key) => `"${key}":${jsonStringify(object[key])}`);
    return `{${items.join(",")}}`;
  }
};

console.log(jsonStringify(object));
