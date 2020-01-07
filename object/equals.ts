import isObject from "../is/object";
import areArrays from "../array/are";
import lengthDiffers from "../array/lengthDiffers";

const keySet = (a: object, b: object) => [
  ...new Set([...Object.keys(a), ...Object.keys(b)])
];

export const equalsDeepWith = (f: (a: any, b: any) => boolean) => (
  a: any,
  b: any
): boolean => {
  if (areArrays(a, b)) {
    return (
      !lengthDiffers(a, b) &&
      a.every((_: any, key: string | number) => equalsDeepWith(f)(_, b[key]))
    );
  }

  return isObject(a) && isObject(b)
    ? a === b || keySet(a, b).every(key => equalsDeepWith(f)(a[key], b[key]))
    : f(a, b);
};

const defaultEquals = (a: any, b: any) => a === b;

const equalsDeep = equalsDeepWith(defaultEquals);

export default equalsDeep;
