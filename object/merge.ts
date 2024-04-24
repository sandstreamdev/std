import isNonNullable from "../is/nonNullable";
import isObject from "../is/object";
import map from "./map";

const isNonNullableObject = (x?: unknown) =>
  x && isNonNullable(x) && isObject(x);

type GenericObject = { [index: string]: unknown };

const merge = (a: GenericObject, b: GenericObject): GenericObject => ({
  ...a,
  ...map((value, key) =>
    value &&
    typeof value === "object" &&
    isNonNullableObject(value) &&
    a &&
    isNonNullableObject((a as GenericObject)[key])
      ? merge(a[key] as GenericObject, value as GenericObject)
      : value
  )(b)
});

export default merge;
