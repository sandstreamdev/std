/* eslint-env jest */
// @ts-ignore ambiguous import
import not from "./not.ts";

describe("not", () => {
  it("inverts the result", () => {
    const greaterThan10 = (x: number) => x > 10;

    expect(not(greaterThan10)(5)).toBe(true);
  });
});
