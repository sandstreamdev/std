import classNames from "./classNames.js";

describe("classNames", () => {
  it("composes class name from truthy values", () => {
    expect(
      classNames(
        "test",
        { active: true, disabled: false, on: undefined },
        "",
        0,
        null,
        undefined,
        " ",
        "  love",
        ["ala", "ma", "kota ", ""],
        [],
        [1, 2, 3],
        Symbol("foo")
      )
    ).toBe("test active love ala ma kota");
  });
});
