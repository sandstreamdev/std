import except from "./except.js";

describe("except", () => {
  it("filters out the given value", () => {
    expect(except(2)([1, 2, 3, 4, 5])).toEqual([1, 3, 4, 5]);
  });

  it("filters out multiple occurrences of the given value", () => {
    expect(except(2)([1, 2, 2, 4, 2])).toEqual([1, 4]);
  });
});
