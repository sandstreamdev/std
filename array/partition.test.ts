/* eslint-env jest */
// @ts-ignore ambiguous import
import partition from "./partition.ts";

const odd = (x: number) => x % 2 === 1;

describe("partition", () => {
  it("partitions the given set by the predicate and places the values to the right", () => {
    expect(partition(odd)([1, 2, 3, 4, 5])).toEqual([
      [2, 4],
      [1, 3, 5]
    ]);
  });

  it("handles empty lists", () => {
    expect(partition(odd)([])).toEqual([[], []]);
  });
});
