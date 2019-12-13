/* eslint-env jest */
// @ts-ignore ambiguous import
import classNames from "./classNames.ts";

describe("classNames", () => {
  it("composes class name from truthy values", () => {
    expect(
      classNames("test", { active: true, disabled: false, on: undefined })
    ).toBe("test active");
  });
});
