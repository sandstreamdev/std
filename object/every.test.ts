import every from "./every.js";

describe("every", () => {
  it("test if every element passes the given predicate", () => {
    const adult = ({ age }: { age: number }) => age >= 18;

    expect(
      every(adult)({
        tom: { age: 25 },
        john: { age: 16 },
        alice: { age: 18 }
      })
    ).toBe(false);
  });

  it("test if every element passes the given predicate", () => {
    expect(
      every((x: number) => x >= 0)({
        x: 5,
        y: 3,
        z: 0
      })
    ).toBe(true);
  });
});
