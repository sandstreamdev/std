import assert, {
  assertByte,
  assertInteger,
  assertIsDefined,
  assertNormal,
  assertNumber,
  assertString,
  throws
} from "./assert.ts";

import range from "../array/range.js";

describe("assert", () => {
  it("throws when assertion fails", () => {
    expect(() => assert(false)).toThrow();
  });

  it("does not throw when assertion passes", () => {
    expect(() => assert(true)).not.toThrow();
  });

  it("throws a custom message", () => {
    expect(() => assert(false, "Custom message")).toThrow("Custom message");
  });

  it("calls a callback if given", () => {
    const callback = jest.fn();

    assert(false, callback);

    expect(callback).toBeCalled();
  });

  it("does not call a callback when assertion passes", () => {
    const callback = jest.fn();

    assert(true, callback);

    expect(callback).not.toBeCalled();
  });

  it("asserts the given value is a byte", () => {
    expect(() => assertByte(128)).not.toThrow();

    for (const value of range(256)) {
      expect(() => assertByte(value)).not.toThrow();
    }

    expect(() => assertByte(256)).toThrow();
    expect(() => assertByte(-3)).toThrow();

    expect(() => assertByte(512)).toThrow("Value must be a byte.");
    expect(() => assertByte(128.5)).toThrow("Value must be an integer.");

    expect(() => assertByte(null)).toThrow();
    expect(() => assertByte(undefined)).toThrow();
    expect(() => assertByte("test")).toThrow();
    expect(() => assertByte({})).toThrow();
    expect(() => assertByte([])).toThrow();
  });

  it("asserts the given value is an integer", () => {
    expect(() => assertInteger(128)).not.toThrow();
    expect(() => assertInteger(0.5)).toThrow();
    expect(() => assertInteger(2 / 3)).toThrow();

    for (const value of range(100)) {
      expect(() => assertInteger(value)).not.toThrow();
    }

    expect(() => assertInteger(128.5)).toThrow("Value must be an integer.");

    expect(() => assertInteger(null)).toThrow();
    expect(() => assertInteger(undefined)).toThrow();
    expect(() => assertInteger("test")).toThrow();
    expect(() => assertInteger({})).toThrow();
    expect(() => assertInteger([])).toThrow();
  });

  it("asserts the given value is defined", () => {
    expect(() => assertIsDefined(undefined)).toThrow();
    expect(() => assertIsDefined(null)).not.toThrow();
    expect(() => assertIsDefined("test")).not.toThrow();
    expect(() => assertIsDefined({})).not.toThrow();
    expect(() => assertIsDefined([])).not.toThrow();
    expect(() => assertIsDefined(3)).not.toThrow();
    expect(() => assertIsDefined(0)).not.toThrow();
    expect(() => assertIsDefined(false)).not.toThrow();

    expect(() => assertIsDefined()).toThrow("Value must be defined.");
    expect(() => assertIsDefined(undefined, "test")).toThrow("test");
  });

  it("asserts the given value is a number in a normal range [0, 1]", () => {
    expect(() => assertNormal(0.5)).not.toThrow();
    expect(() => assertNormal(0)).not.toThrow();
    expect(() => assertNormal(1)).not.toThrow();
    expect(() => assertNormal(1.5)).toThrow();
    expect(() => assertNormal(-1)).toThrow();

    for (const value of range(100)) {
      expect(() => assertNormal(value / 100)).not.toThrow();
    }

    expect(() => assertNormal(null)).toThrow();
    expect(() => assertNormal(undefined)).toThrow();
    expect(() => assertNormal("test")).toThrow();
    expect(() => assertNormal({})).toThrow();
    expect(() => assertNormal([])).toThrow();

    expect(() => assertNormal(5)).toThrow(
      "Value must be a number in range of 0 to 1 inclusive but it is 5."
    );
  });

  it("asserts the given value is a valid number", () => {
    expect(() => assertNumber(5)).not.toThrow();
    expect(() => assertNumber(1.5)).not.toThrow();
    expect(() => assertNumber(-2)).not.toThrow();
    expect(() => assertNumber(0)).not.toThrow();

    expect(() => assertNumber(Infinity)).toThrow();
    expect(() => assertNumber(-Infinity)).toThrow();
    expect(() => assertNumber(NaN)).toThrow();

    expect(() => assertNumber("test")).toThrow();
    expect(() => assertNumber("")).toThrow();
    expect(() => assertNumber(null)).toThrow();
    expect(() => assertNumber({})).toThrow();
    expect(() => assertNumber([])).toThrow();
    expect(() => assertNumber(false)).toThrow();

    expect(() => assertNumber("test")).toThrow(
      "Value must be a valid number but it is string."
    );
  });

  it("asserts the given value is a string", () => {
    expect(() => assertString("test")).not.toThrow();
    expect(() => assertString("")).not.toThrow();
    expect(() => assertString(null)).toThrow();
    expect(() => assertString({})).toThrow();
    expect(() => assertString([])).toThrow();
    expect(() => assertString(3)).toThrow();
    expect(() => assertString(0)).toThrow();
    expect(() => assertString(false)).toThrow();

    expect(() => assertString({ a: 5 })).toThrow("Value must be a string.");
    expect(() => assertString(5, "test")).toThrow("test");
  });

  it("asserts the given function throws", () => {
    const error = new Error();

    const thisThrows = () => {
      throw error;
    };

    const thisDoesNotThrow = () => {};

    expect(throws(thisThrows)).toBe(error);
    expect(throws(thisDoesNotThrow)).toBe(undefined);
  });
});
