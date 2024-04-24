import insert from "./insert.js";

describe("insert", () => {
  it("should insert item to the array on the second position", () => {
    expect(insert(1)("d")(["a", "b", "c"])).toEqual(["a", "d", "b", "c"]);
    expect(insert(-2)("d")(["a", "b", "c"])).toEqual(["a", "d", "b", "c"]);
  });

  it("should insert item to the array on the first position", () => {
    expect(insert(0)("b")(["a"])).toEqual(["b", "a"]);
    expect(insert(-1)("b")(["a"])).toEqual(["b", "a"]);
  });

  it("should insert item to empty array on the first position", () => {
    expect(insert(10)("a")([])).toEqual(["a"]);
    expect(insert(0)("a")([])).toEqual(["a"]);
    expect(insert(-10)("a")([])).toEqual(["a"]);
  });
});
