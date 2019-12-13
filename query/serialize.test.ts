/* eslint-env jest */
// @ts-ignore ambiguous import
import serialize from "./serialize.ts";

// @ts-ignore ambiguous import
import parse from "./parse.ts";

describe("serialize", () => {
  it("serializes the given object into a query string", () => {
    expect(
      serialize({ test: true, value: "a string with spaces", missing: false })
    ).toBe("test&value=a%20string%20with%20spaces");
  });

  it("reversible", () => {
    expect(
      parse(
        serialize({ test: true, value: "a string with spaces", missing: false })
      )
    ).toEqual({ test: true, value: "a string with spaces" });
  });
});
