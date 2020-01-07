/* eslint-env jest */
// @ts-ignore ambiguous import
import mapKeys from "./mapKeys.ts";

describe("mapKeys", () => {
  it("maps keys of the given object", () => {
    const upperCaseKey = (_: any, key: string) => key.toUpperCase();

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
