/* eslint-env jest */
// @ts-ignore ambiguous import
import read from "./read.ts";

// @ts-ignore ambiguous import
import serialize from "./serialize.ts";

describe("read", () => {
  it("parses query string into an object", () => {
    expect(read("test&count=5")).toEqual({ test: "", count: "5" });
  });

  it("handles query prefix", () => {
    expect(read("?test&count=5")).toEqual({ test: "", count: "5" });
  });

  it("uses the last value when there are multiple occurrences", () => {
    expect(read("?test&count=5&count=16")).toEqual({
      test: "",
      count: "16"
    });
  });

  it("decodes special characters and is invertible from serialize", () => {
    expect(
      read(
        serialize({
          test: "string with spaces"
        })
      )
    ).toEqual({
      test: "string with spaces"
    });
  });
});
