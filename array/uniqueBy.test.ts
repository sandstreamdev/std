/* eslint-env jest */
// @ts-ignore ambiguous import
import uniqueBy from "./uniqueBy.ts";

describe("uniqueBy", () => {
  const selector: (x: any) => any = ({ x }) => x;

  it("removes duplicated values", () => {
    expect(uniqueBy(selector)([{ x: 1 }, { x: 2 }, { x: 1 }])).toEqual([
      { x: 1 },
      { x: 2 }
    ]);
  });

  it("removes all the duplicated values when there are any", () => {
    expect(
      uniqueBy(selector)([{ x: 1 }, { x: 2 }, { x: 1 }, { x: 3 }, { x: 2 }])
    ).toEqual([{ x: 1 }, { x: 2 }, { x: 3 }]);

    expect(uniqueBy(selector)([{}, { x: 2 }, { x: 1 }, {}, { x: 2 }])).toEqual([
      {},
      { x: 2 },
      { x: 1 }
    ]);
  });

  it("returns the equal array when there are no duplicated", () => {
    expect(uniqueBy(selector)([{ x: 1 }, { x: 2 }, { x: 3 }])).toEqual([
      { x: 1 },
      { x: 2 },
      { x: 3 }
    ]);
  });

  it("returns empty array when given array is empty", () => {
    expect(uniqueBy(selector)([])).toEqual([]);
  });
});
