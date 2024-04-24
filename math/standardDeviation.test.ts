import standardDeviation from "./standardDeviation.js";

import average from "./average.js";

const data = [96, 81, 68, 79, 23, 13, 13, 59, 44, 86];

const precomputedStandardDeviation = (2 * Math.sqrt(10922 / 5)) / 3;

describe("standardDeviation", () => {
  it("calculates spread of the values", () => {
    expect(standardDeviation(data)).toEqual(precomputedStandardDeviation);
  });

  it("supports average reuse", () => {
    expect(standardDeviation(data, average(data))).toEqual(
      precomputedStandardDeviation
    );
  });
});
