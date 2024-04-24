import isNumber from "../is/number";
import isInteger from "../is/integer";
import isByte from "../is/byte";
import isNormal from "../is/normal";
import isString from "../is/string";
import isDefined from "../is/defined";

const assert = (
  condition: boolean,
  callbackOrMessage: (() => void) | string
) => {
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

export const throws = (f: () => void): unknown | undefined => {
  try {
    f();

    return undefined;
  } catch (error) {
    return error;
  }
};

export const assertNumber = (x?: unknown) =>
  assert(isNumber(x), `Value must be a valid number but it is ${typeof x}.`);

export const assertInteger = (x?: unknown) => {
  assertNumber(x);
  assert(isInteger(x), "Value must be an integer.");
};

export const assertByte = (x?: unknown) => {
  assertInteger(x);
  assert(isByte(x), "Value must be a byte.");
};

export const assertNormal = (x?: unknown) => {
  assertNumber(x);
  assert(
    isNormal(x),
    `Value must be a number in range of 0 to 1 inclusive but it is ${x}.`
  );
};

export const assertString = (
  x?: unknown,
  message = "Value must be a string."
) => assert(isString(x), message);

export const assertIsDefined = (
  x?: unknown,
  message = "Value must be defined."
) => assert(isDefined(x), message);

export default assert;
