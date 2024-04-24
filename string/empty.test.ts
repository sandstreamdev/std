import empty from "./empty.js";

describe("empty", () => {
  it("equals to the empty string", () => {
    expect(empty).toEqual("");
  });

  it("keeps the same reference as the empty immutable string due to string interning", () => {
    expect(empty).toBe("");
  });
});
