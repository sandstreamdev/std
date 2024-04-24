import normalize from "./normalize.js";

import length from "./length.js";

describe("normalize", () => {
  it("normalized the given vector", () => {
    const vector = [2, 3];
    const magnitude = length(vector);

    expect(normalize(vector)).toEqual([2 / magnitude, 3 / magnitude]);
  });

  it("return zero vector for points", () => {
    const vector = [0, 0];

    expect(normalize(vector)).toEqual([0, 0]);
  });
});
