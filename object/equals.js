import isObject from "../is/object.js";
import areArrays from "../array/are.js";
import lengthDiffers from "../array/lengthDiffers.js";

const keySet = (a, b) => [...new Set([...Object.keys(a), ...Object.keys(b)])];

export const equalsDeep = (a, b) => {
  if (areArrays(a, b)) {
    return !lengthDiffers(a, b) && a.every((_, key) => equalsDeep(_, b[key]));
  }

  return isObject(a) && isObject(b)
    ? a === b || keySet(a, b).every(key => equalsDeep(a[key], b[key]))
    : a === b;
};

export const equalsDeepWith = f => (a, b) => {
  if (areArrays(a, b)) {
    return (
      !lengthDiffers(a, b) && a.every((_, key) => equalsDeepWith(f)(_, b[key]))
    );
  }

  return isObject(a) && isObject(b)
    ? a === b || keySet(a, b).every(key => equalsDeepWith(f)(a[key], b[key]))
    : f(a, b);
};

export default equalsDeep;
