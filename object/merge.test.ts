/* eslint-env jest */
// @ts-ignore ambiguous import
import merge from "./merge.ts";

describe("merge", () => {
  it("should merge two objects", () => {
    const a: object = {};
    const b: object = { a: 1 };

    const received: object = merge(a, b);
    const expected: object = { a: 1 };

    expect(received).toEqual(expected);
  });

  it("should merge two objects", () => {
    const a: object = { a: 1, b: 3 };
    const b: object = {};

    const received: object = merge(a, b);
    const expected: object = { a: 1, b: 3 };

    expect(received).toEqual(expected);
  });

  it("should merge two objects", () => {
    const a: object = { a: 1, b: 3 };
    const b: object = { b: 7 };

    const received: object = merge(a, b);
    const expected: object = { a: 1, b: 7 };

    expect(received).toEqual(expected);
  });

  it("should merge two objects", () => {
    const a: object = { a: 1, b: 3 };
    const b: object = { b: { d: 8 } };

    const received: object = merge(a, b);
    const expected: object = { a: 1, b: { d: 8 } };

    expect(received).toEqual(expected);
  });

  it("should merge two objects", () => {
    const a: object = { a: 1, b: { c: 3 } };
    const b: object = { b: { d: 8 } };

    const received: object = merge(a, b);
    const expected: object = { a: 1, b: { c: 3, d: 8 } };

    expect(received).toEqual(expected);
  });

  it("should merge two objects", () => {
    const a: object = { a: "a", b: 2, c: true };
    const b: object = { d: { f: [1] }, e: { g: { h: {} } } };

    const received: object = merge(a, b);

    const expected: object = {
      a: "a",
      b: 2,
      c: true,
      d: { f: [1] },
      e: { g: { h: {} } }
    };

    expect(received).toEqual(expected);
  });

  it("should merge two objects", () => {
    const a: object = {
      a: {
        a: {
          a: true
        },
        b: { a: 1 }
      },
      b: null,
      c: {
        b: {
          a: {
            a: undefined
          }
        }
      }
    };

    const b: object = {
      a: {
        a: {
          b: [1]
        },
        c: {
          a: {
            a: "a"
          }
        }
      },
      c: {
        a: 0,
        b: {
          a: {
            b: 1
          }
        }
      }
    };

    const received: object = merge(a, b);

    const expected: object = {
      a: {
        a: {
          a: true,
          b: [1]
        },
        b: { a: 1 },
        c: {
          a: {
            a: "a"
          }
        }
      },
      b: null,
      c: {
        a: 0,
        b: {
          a: {
            a: undefined,
            b: 1
          }
        }
      }
    };

    expect(received).toEqual(expected);
  });
});
