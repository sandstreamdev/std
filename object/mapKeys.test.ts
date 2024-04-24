import mapKeys from "./mapKeys.js";

describe("mapKeys", () => {
  it("maps keys of the given object", () => {
    const upperCaseKey = (_: unknown, key: string) => key.toUpperCase();

    expect(
      mapKeys(upperCaseKey)({
        tom: { age: 25 },
        john: { age: 16 },
        alice: { age: 18 }
      })
    ).toEqual({
      TOM: { age: 25 },
      JOHN: { age: 16 },
      ALICE: { age: 18 }
    });
  });
});
