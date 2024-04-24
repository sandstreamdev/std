import isObject from "../is/object.js";
import areArrays from "../array/are.js";
import lengthDiffers from "../array/lengthDiffers.js";

const keySet = (a, b) => [...new Set([...Object.keys(a), ...Object.keys(b)])];

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

const defaultEquals = (a, b) => a === b;
const equalsDeep = equalsDeepWith(defaultEquals);

export default equalsDeep;
