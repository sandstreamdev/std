import serialize from "./serialize.js";

import parse from "./parse.js";

describe("serialize", () => {
  it("serializes the given object into a query string", () => {
    expect(
      serialize({ test: true, value: "a string with spaces", missing: false })
    ).toBe("test&value=a%20string%20with%20spaces");
  });

  it("is reversible", () => {
    expect(
      parse(
        serialize({ test: true, value: "a string with spaces", missing: false })
      )
    ).toEqual({ test: true, value: "a string with spaces" });
  });

  it("handles default value", () => {
    expect(serialize()).toEqual("");
  });
});
