import isObject from "../is/object";
import map from "./map";

const isNonNullishObject = (x?: object) =>
  x !== undefined && x !== null && isObject(x);

const merge = (a: object, b: object): object => ({
  ...a,
  ...map((value, key) =>
    isNonNullishObject(value) && isNonNullishObject(a[key])
      ? merge(a[key], value)
      : value
  )(b)
});

export default merge;
