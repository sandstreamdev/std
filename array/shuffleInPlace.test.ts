/* eslint-env jest */
// @ts-ignore ambiguous import
import shuffleInPlace from "./shuffleInPlace.ts";

describe("shuffleInPlace", () => {
  it("shuffles the array in the given order and mutates the underlying array", () => {
    const xs = [1, 2, 3, 4, 5];

    let i = 0;

    const random = () =>
      [
        0.013606630487694282,
        0.21052486239086554,
        0.28299838254636556,
        0.696161009199874,
        0.32165320593537117
      ][i++];

    const result = shuffleInPlace(xs, random);

    expect(result).toEqual([3, 5, 4, 2, 1]);
    expect(result).toBe(xs);
    expect(result).toEqual(xs);
  });

  it("uses Math.random as the default", () => {
    const xs = [1, 2, 3, 4, 5];

    let i = 0;

    const random = () =>
      [
        0.013606630487694282,
        0.21052486239086554,
        0.28299838254636556,
        0.696161009199874,
        0.32165320593537117
      ][i++];

    const mockStore = Math.random;
    Math.random = random;

    const result = shuffleInPlace(xs);

    expect(result).toEqual([3, 5, 4, 2, 1]);
    expect(result).toBe(xs);
    expect(result).toEqual(xs);

    Math.random = mockStore;
  });
});
