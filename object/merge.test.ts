import merge from "./merge.js";

describe("merge", () => {
  it("should merge two objects", () => {
    const a: any = {};
    const b: any = {};

    const received: any = merge(a, b);
    const expected: any = {};

    expect(received).toEqual(expected);
  });

  it("should merge two objects", () => {
    const a: any = { a: "a", b: 2, c: true };
    const b: any = { d: { f: [1] }, e: { g: { h: {} } } };

    const received: any = merge(a, b);
    const expected: any = {
      a: "a",
      b: 2,
      c: true,
      d: { f: [1] },
      e: { g: { h: {} } }
    };

    expect(received).toEqual(expected);
  });

  it("should merge three objects", () => {
    const a: any = {
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

    const b: any = {
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

    const c: any = { a: { c: { b: false } }, d: "d" };

    const received: any = merge(a, b, c);
    const expected: any = {
      a: {
        a: {
          a: true,
          b: [1]
        },
        b: { a: 1 },
        c: {
          a: {
            a: "a"
          },
          b: false
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
      },
      d: "d"
    };

    expect(received).toEqual(expected);
  });
});
