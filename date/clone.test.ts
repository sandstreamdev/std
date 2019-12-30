/* eslint-env jest */
// @ts-ignore ambiguous import
import clone from "./clone.ts";

describe("clone", () => {
  it("should returns cloned date", () => {
    const date = new Date("2019-04-24T13:54:33.232Z");

    const cloned = clone(date);
    const cloned2 = clone(date);

    cloned2.setDate(cloned2.getDate() + 2);

    expect(cloned).toEqual(date);
    expect(cloned2).not.toEqual(date);
  });
});
