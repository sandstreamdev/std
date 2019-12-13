/* eslint-env jest */
// @ts-ignore ambiguous import
import shuffle from "./shuffle.ts";

describe("shuffle", () => {
  it("shuffles the array in the given order", () => {
    let i = 0;

    const random = () =>
      [
        0.013606630487694282,
        0.21052486239086554,
        0.28299838254636556,
        0.696161009199874,
        0.32165320593537117
      ][i++];

    expect(shuffle([1, 2, 3, 4, 5], random)).toEqual([3, 5, 4, 2, 1]);
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

    const result = shuffle(xs);

    expect(result).toEqual([3, 5, 4, 2, 1]);

    Math.random = mockStore;
  });
});
