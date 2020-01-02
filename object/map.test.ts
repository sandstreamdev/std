/* eslint-env jest */
// @ts-ignore ambiguous import
import map from "./map.ts";

describe("map", () => {
  it("maps the values of the given object", () => {
    const adult = ({ age }) => age >= 18;

    expect(
      map(adult)({ tom: { age: 25 }, john: { age: 16 }, alice: { age: 18 } })
    ).toEqual({
      tom: true,
      john: false,
      alice: true
    });
  });

  it("uses interface similar to Array.map", () => {
    const print = ({ age }: { age: number }, key: string) =>
      `${key} - ${age} years old`;

    expect(
      map(print)({ tom: { age: 25 }, john: { age: 16 }, alice: { age: 18 } })
    ).toEqual({
      tom: "tom - 25 years old",
      john: "john - 16 years old",
      alice: "alice - 18 years old"
    });
  });
});
