/* eslint-env jest */
// @ts-ignore ambiguous import
import equals from "./equals.ts";

describe("equals", () => {
  it("checks if two objects are deeply equal", () => {
    const a = { 1: "test", b: { inner: true, other: false }, c: [1, 2, 3] };
    const b = { 1: "test", b: { inner: true, other: false }, c: [1, 2, 3] };

    const c = {
      1: "test",
      b: { inner: true, other: true, additional: 1 },
      c: [1, 2, 3]
    };

    expect(equals(a, b)).toBe(true);
    expect(equals(a, c)).toBe(false);
  });

  it("handles shallow equality", () => {
    const a = { 1: "test", b: 3, c: [1, 2, 3] };
    const b = { 1: "test", b: 3, c: [1, 2, 3] };
    const c = { 1: "test", b: 3, c: [1, 2, 4] };

    expect(equals(a, b)).toBe(true);
    expect(equals(a, c)).toBe(false);
  });

  it("handles referential equality", () => {
    const a = { 1: "test", b: { inner: true, other: false }, c: [1, 2, 3] };

    expect(equals(a, a)).toBe(true);
  });

  it("supports arrays", () => {
    expect(equals([1, 2, 3], [1, 2, 3])).toBe(true);
    expect(equals([1, 2, 3], [1, 2, 3, 4, 5])).toBe(false);
    expect(equals([1, 2, 3], [1, 8, 3])).toBe(false);
  });
});
