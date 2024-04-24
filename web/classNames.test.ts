import classNames from "./classNames.js";

describe("classNames", () => {
  it("composes class name from truthy values", () => {
    expect(
      classNames("test", { active: true, disabled: false, on: undefined })
    ).toBe("test active");
  });
});
