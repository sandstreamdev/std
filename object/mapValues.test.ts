import mapValues from "./mapValues.js";

describe("mapValues", () => {
  it("maps and returns an array of transformed object values", () => {
    const print = ({ age }: { age: number }, key: string) =>
      `${key} - ${age} years old`;

    expect(
      mapValues(print)({
        tom: { age: 25 },
        john: { age: 16 },
        alice: { age: 18 }
      })
    ).toEqual([
      "tom - 25 years old",
      "john - 16 years old",
      "alice - 18 years old"
    ]);
  });
});
