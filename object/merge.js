import isObject from "../is/object.js";
import map from "./map.js";

const isNonNullishObject = x => x !== undefined && x !== null && isObject(x);

const merge = (a, b) => {
  const source = a || {};
  const base = b || {};

  return {
    ...source,
    ...map((value, key) =>
      isNonNullishObject(value) && isNonNullishObject(source[key])
        ? merge(source[key], value)
        : value
    )(base)
  };
};

export default merge;
