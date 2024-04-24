import isNonNullable from "../is/nonNullable.js";
import isObject from "../is/object.js";
import map from "./map.js";

const isNonNullableObject = x => x && isNonNullable(x) && isObject(x);

const merge = (a, b) => ({
  ...a,
  ...map((value, key) =>
    value &&
    typeof value === "object" &&
    isNonNullableObject(value) &&
    a &&
    isNonNullableObject(a[key])
      ? merge(a[key], value)
      : value
  )(b)
});

export default merge;
