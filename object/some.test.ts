/* eslint-env jest */
// @ts-ignore ambiguous import
import some from "./some.ts";

describe("some", () => {
  it("test if any element passes the given predicate", () => {
    const adult = ({ age }: { age: number }) => age >= 18;

    expect(
      some(adult)({
        tom: { age: 25 },
        john: { age: 16 },
        alice: { age: 18 }
      })
    ).toBe(true);
  });

  it("test if any element passes the given predicate", () => {
    expect(
      some((x: number) => x < 0)({
        x: 5,
        y: 3,
        z: 0
      })
    ).toBe(false);
  });
});
