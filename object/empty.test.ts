/* eslint-env jest */
// @ts-ignore ambiguous import
import empty from "./empty.ts";

describe("empty", () => {
  it("equals to the empty object", () => {
    expect(empty).toEqual({});
  });

  it("keeps the same reference", () => {
    expect(empty).not.toBe({});
  });
});
