import isNumber from "../is/number.js";
import isInteger from "../is/integer.js";
import isByte from "../is/byte.js";
import isNormal from "../is/normal.js";
import isString from "../is/string.js";
import isDefined from "../is/defined.js";

const assert = (condition, callbackOrMessage) => {
  if (!condition) {
    if (typeof callbackOrMessage === "function") {
      callbackOrMessage();
    } else {
      throw new TypeError(
        typeof callbackOrMessage === "string"
          ? callbackOrMessage
          : "Assertion failed!"
      );
    }
  }
};

export const throws = f => {
  try {
    f();
    return undefined;
  } catch (error) {
    return error;
  }
};

export const assertNumber = x =>
  assert(isNumber(x), `Value must be a valid number but it is ${typeof x}.`);

export const assertInteger = x =>
  assertNumber(x) && assert(isInteger(x), "Value must be an integer.");

export const assertByte = x =>
  assertInteger(x) && assert(isByte(x), "Value must be a byte.");

export const assertNormal = x =>
  assertNumber(x) &&
  assert(
    isNormal(x),
    `Value must be a number in range of 0 to 1 inclusive but it is ${x}.`
  );

export const assertString = x => assert(isString(x), "Value must be a string.");

export const assertIsDefined = (x, message = "Value must be defined.") =>
  assert(isDefined(x), message);

export default assert;
