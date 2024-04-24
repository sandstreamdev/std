import escape from "./escape.js";

describe("escape", () => {
  it("escapes the given regex text", () => {
    const text = "test";

    expect(new RegExp(escape("te.t")).test(text)).toBe(false);

    // Naive approach happens to parse as a valid regex
    expect(new RegExp("te.t").test(text)).toBe(true);
  });

  it("escapes the given regex text", () => {
    const text = "te t";

    expect(new RegExp(escape("te\\st")).test(text)).toBe(false);

    // Naive approach happens to parse as a valid regex
    expect(new RegExp("te\\st").test(text)).toBe(true);
  });
});
