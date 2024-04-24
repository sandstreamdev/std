import merge from "./merge.js";

describe("merge", () => {
  it("should merge with empty object", () => {
    const a = { a: 1 };

    expect(merge(a, {})).toEqual(a);
    expect(merge({}, a)).toEqual(a);
  });

  it("should override non-object properties", () => {
    const a = { a: 1, b: 3 };
    const b = { b: 7 };

    const received = merge(a, b);
    const expected = { a: 1, b: 7 };

    expect(received).toEqual(expected);
  });

  it("should merge deeply nested objects", () => {
    const a = { a: 1, b: { c: 3 } };
    const b = { b: { d: 8 } };

    const received = merge(a, b);
    const expected = { a: 1, b: { c: 3, d: 8 } };

    expect(received).toEqual(expected);
  });

  it("should handles only object-merges but keeps non-conflicting values intact", () => {
    const a = { a: "a", b: 2, c: true };
    const b = { d: { f: [1] }, e: { g: { h: {} } } };

    const received = merge(a, b);

    const expected = {
      a: "a",
      b: 2,
      c: true,
      d: { f: [1] },
      e: { g: { h: {} } }
    };

    expect(received).toEqual(expected);
  });

  it("should keeps null/undefined values", () => {
    const a = {
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

    const b = {
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

    const received = merge(a, b);

    const expected = {
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
