import isNonNullable from "../is/nonNullable";
import isObject from "../is/object";
import map from "./map";

const isNonNullableObject = (x?: object) => isNonNullable(x) && isObject(x);

const merge = (a: { [index: string]: any }, b: object): object => ({
  ...a,
  ...map((value, key) =>
    isNonNullableObject(value) && isNonNullableObject(a[key])
      ? merge(a[key], value)
      : value
  )(b)
});

export default merge;
