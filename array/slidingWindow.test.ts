/* eslint-env jest */
// @ts-ignore ambiguous import
import { slidingWindow } from "./slidingWindow.ts";

describe("slidingWindow", () => {
  it("iterates by the 2-element window of values", () => {
    const values = [1, 2, 3, 4, 5, 6];

    const expected = [
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6]
    ];

    const received = slidingWindow(2)(values);

    expect(received).toEqual(expected);
  });

  it("iterates by the 3-element window of values", () => {
    const values = [1, 2, 3, 4, 5, 6];

    const expected = [
      [1, 2, 3],
      [2, 3, 4],
      [3, 4, 5],
      [4, 5, 6]
    ];

    const received = slidingWindow(3)(values);

    expect(received).toEqual(expected);
  });

  it("iterates by the 4-element window of values", () => {
    const values = [1, 2, 3, 4, 5, 6];

    const expected = [
      [1, 2, 3, 4],
      [2, 3, 4, 5],
      [3, 4, 5, 6]
    ];

    const received = slidingWindow(4)(values);

    expect(received).toEqual(expected);
  });

  it("iterates by the 6-element window of values", () => {
    const values = [1, 2, 3, 4, 5, 6];
    const expected = [[1, 2, 3, 4, 5, 6]];

    const received = slidingWindow(6)(values);

    expect(received).toEqual(expected);
  });

  it("iterates by the 5-element window of values", () => {
    const values = [1, 2, 3, 4, 5, 6];

    const expected = [
      [1, 2, 3, 4, 5],
      [2, 3, 4, 5, 6]
    ];

    const received = slidingWindow(5)(values);

    expect(received).toEqual(expected);
  });

  it("iterates by the one element window of values", () => {
    const values = [1, 2, 3, 4, 5, 6];
    const expected = [[1], [2], [3], [4], [5], [6]];

    const received = slidingWindow(1)(values);

    expect(received).toEqual(expected);
  });

  it("iterates empty array by the 2-element window of values", () => {
    const values = [];
    const expected = [];

    const received = slidingWindow(3)(values);

    expect(received).toEqual(expected);
  });
});
