import mapEntries from "./mapEntries.js";

describe("mapEntries", () => {
  it("maps entries of the given object", () => {
    const print = ({ age }: { age: number }, key: string) =>
      `${key} - ${age} years old`;

    expect(
      mapEntries(print)({
        tom: { age: 25 },
        john: { age: 16 },
        alice: { age: 18 }
      })
    ).toEqual([
      ["tom", "tom - 25 years old"],
      ["john", "john - 16 years old"],
      ["alice", "alice - 18 years old"]
    ]);
  });
});
