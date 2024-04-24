import differs from "./differs.js";

describe("differs", () => {
  it("short-circuits over length differences", () => {
    expect(differs([1, 2, 3], [1, 2])).toBe(true);
    expect(differs([2, 3], [1, 2, 5])).toBe(true);
  });

  it("short-circuits over parameter presence", () => {
    expect(differs(null, [1, 2])).toBe(true);
    expect(differs([2, 3], undefined)).toBe(true);
    expect(differs(null, null)).toBe(true);
    expect(differs(undefined, undefined)).toBe(true);
  });

  it("compares elements index-wise", () => {
    expect(differs([1, 2, 3], [1, 2, 3])).toBe(false);
    expect(differs([1, 2, 3], [1, 67, 3])).toBe(true);
  });

  it("assumes empty arrays equal", () => {
    expect(differs([], [])).toBe(false);
  });
});
