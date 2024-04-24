import nbsp from "./nbsp.js";

describe("nbsp", () => {
  it("equals to the escape code", () => {
    expect(nbsp).toBe("\u00A0");
  });

  it("equals to the exact character", () => {
    expect(nbsp).toBe(" ");
  });
});
