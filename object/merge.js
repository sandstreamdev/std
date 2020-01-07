import isNonNullable from "../is/nonNullable.js";
import isObject from "../is/object.js";
import map from "./map.js";

const isNonNullableObject = x => isNonNullable(x) && isObject(x);

const merge = (a, b) => ({
  ...a,
  ...map((value, key) =>
    isNonNullableObject(value) && isNonNullableObject(a[key])
      ? merge(a[key], value)
      : value
  )(b)
});

export default merge;
