import minMax from "./minMax.js";

describe("minMax", () => {
  it("does nothing when the data is already ordered", () => {
    expect(minMax([3, 5])).toEqual([3, 5]);
  });

  it("reverts the data when the min value is greater than max", () => {
    expect(minMax([5, 3])).toEqual([3, 5]);
  });
});
