import identity from "./identity.js";

describe("identity", () => {
  it("always returns the given value", () => {
    expect(identity(5)).toBe(5);
  });

  it("keeps references intact", () => {
    const object = { a: 5 };

    expect(identity(object)).toBe(object);
  });
});
