/* eslint-env jest */
// @ts-ignore ambiguous import
import sort from "./sort.ts";

const data = [13, 79, 20, 69, 44, 67, 18, 95, 26, 55];
const ascending = (a: number, b: number) => a - b;
const descending = (a: number, b: number) => b - a;

describe("sort", () => {
  it("sorts just like Array.sort but without mutating the original array", () => {
    expect(sort()(data)).toEqual([...data].sort());
    expect(sort(ascending)(data)).toEqual([
      13,
      18,
      20,
      26,
      44,
      55,
      67,
      69,
      79,
      95
    ]);
    expect(sort(descending)(data)).toEqual([...data].sort(descending));
  });

  it("does not mutate the original array", () => {
    const copy = [...data];

    expect(sort()(data)).toEqual([...data].sort());

    expect(copy).toEqual(data);
    expect(copy).toBe(copy);
  });

  it("uses the default comparator when not given any", () => {
    expect(sort()(data)).toEqual([...data].sort());
  });
});
