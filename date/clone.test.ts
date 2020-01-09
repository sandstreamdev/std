/* eslint-env jest */
// @ts-ignore ambiguous import
import clone from "./clone.ts";

describe("clone", () => {
  it("should return cloned date", () => {
    const date = new Date("2019-04-24T13:54:33.232Z");
    const cloned = clone(date);

    expect(cloned).not.toBe(date);
    expect(cloned).toEqual(date);
  });
});
