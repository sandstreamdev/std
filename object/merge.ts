import isObject from "../is/object";
import map from "./map";

const isNonNullishObject = (x?: object) =>
  x !== undefined && x !== null && isObject(x);

const merge = (a: object, b: object): object => {
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
