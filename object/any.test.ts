import any from "./any.js";

describe("any", () => {
  it("returns true if the object is not empty", () => {
    expect(any({ a: 1, b: 2, c: 3 })).toBe(true);
  });

  it("returns false if the object is empty", () => {
    expect(any({})).toBe(false);
  });

  it("does not treat undefined values as empty", () => {
    expect(any({ a: undefined })).toBe(true);
  });

  it("returns false if the given object is missing or the argument is falsy", () => {
    expect(any()).toBe(false);
    expect(any(null)).toBe(false);
    expect(any(undefined)).toBe(false);
  });
});
