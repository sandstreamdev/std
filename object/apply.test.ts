import apply from "./apply.js";

describe("apply", () => {
  it("applies the given parameters to the given dictionary of functions", () => {
    const lower = (text: string) => text.toLowerCase();
    const upper = (text: string) => text.toUpperCase();

    expect(apply({ lower, upper })("TeSt")).toEqual({
      lower: "test",
      upper: "TEST"
    });
  });

  it("supports multiple arguments", () => {
    const sum = (a: number, b: number) => a + b;
    const max = (a: number, b: number) => Math.max(a, b);
    const min = (a: number, b: number) => Math.min(a, b);

    expect(apply({ sum, max, min })(5, 3)).toEqual({ sum: 8, max: 5, min: 3 });
  });
});
