import reflect from "./reflect.js";

describe("reflect", () => {
  it("reflects the given vector on the given surface", () => {
    expect(reflect([1, -2], [1, 0])).toEqual([0.6, 0.8]);
  });
});
