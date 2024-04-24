import parse from "./parse.js";

import serialize from "./serialize.js";

describe("parse", () => {
  it("parses query string into an object", () => {
    expect(parse("test&count=5")).toEqual({ test: true, count: "5" });
  });

  it("handles query prefix", () => {
    expect(parse("?test&count=5")).toEqual({ test: true, count: "5" });
  });

  it("uses the last value when there are multiple occurrences", () => {
    expect(parse("?test&count=5&count=16")).toEqual({
      test: true,
      count: "16"
    });
  });

  it("decodes special characters and is invertible from serialize", () => {
    expect(
      parse(
        serialize({
          test: "string with spaces"
        })
      )
    ).toEqual({
      test: "string with spaces"
    });
  });

  it("handles default values", () => {
    expect(parse()).toEqual({});

    expect(parse("")).toEqual({});
  });
});
