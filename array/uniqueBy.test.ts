import uniqueBy from "./uniqueBy.js";

describe("uniqueBy", () => {
  const selector: (x: unknown) => unknown = ({ id }) => id;

  it("removes duplicated values", () => {
    expect(
      uniqueBy(selector)([
        { id: 1, value: "a" },
        { id: 2, value: "b" },
        { id: 1, value: "c" }
      ])
    ).toEqual([
      { id: 1, value: "c" },
      { id: 2, value: "b" }
    ]);
  });

  it("removes all the duplicated values when there are any", () => {
    expect(
      uniqueBy(selector)([
        { id: 1, value: "a" },
        { id: 2, value: "b" },
        { id: 1, value: "c" },
        { id: 3, value: "d" },
        { id: 2, value: "a" }
      ])
    ).toEqual([
      { id: 1, value: "c" },
      { id: 2, value: "a" },
      { id: 3, value: "d" }
    ]);

    expect(
      uniqueBy(selector)([
        {},
        { id: 2, value: "a" },
        { id: 1, value: "b" },
        {},
        { id: 2, value: "c" }
      ])
    ).toEqual([{}, { id: 2, value: "c" }, { id: 1, value: "b" }]);
  });

  it("returns the equal array when there are no duplicated", () => {
    expect(
      uniqueBy(selector)([
        { id: 1, value: "a" },
        { id: 2, value: "b" },
        { id: 3, value: "c" }
      ])
    ).toEqual([
      { id: 1, value: "a" },
      { id: 2, value: "b" },
      { id: 3, value: "c" }
    ]);
  });

  it("returns empty array when given array is empty", () => {
    expect(uniqueBy(selector)([])).toEqual([]);
  });
});
