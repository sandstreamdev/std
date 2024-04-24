import diff, { VALUE_CREATED, VALUE_DELETED, VALUE_UPDATED } from "./diff.ts";

describe("diff", () => {
  it("computes difference between two objects", () => {
    expect(
      diff(
        { a: 1, b: { name: "John", age: 23, likes: "me" } },
        { d: 6, b: { name: "Tom", likes: "me" } }
      )
    ).toEqual({
      a: {
        data: [1, undefined],
        type: VALUE_DELETED
      },
      b: {
        age: {
          data: [23, undefined],
          type: VALUE_DELETED
        },
        name: {
          data: ["John", "Tom"],
          type: VALUE_UPDATED
        }
      },
      d: {
        data: [undefined, 6],
        type: VALUE_CREATED
      }
    });
  });

  it("supports dates", () => {
    const a = new Date("2019-12-13T12:15:00.000Z");
    const aClone = new Date("2019-12-13T12:15:00.000Z");
    const b = new Date("2019-12-23T12:30:00.000Z");

    expect(diff({ a }, { a: b })).toEqual({
      a: {
        data: [a, b],
        type: VALUE_UPDATED
      }
    });

    expect(diff({ a }, { a: aClone })).toEqual({});
  });

  it("supports arrays", () => {
    expect(diff({ a: [1, 2, 3] }, { a: [5, 2, 3, 8] })).toEqual({
      a: {
        0: { data: [1, 5], type: VALUE_UPDATED },
        3: { data: [undefined, 8], type: VALUE_CREATED }
      }
    });
  });

  it("supports non-existing arguments", () => {
    expect(diff({ a: 5 }, {})).toEqual({
      a: { data: [5, undefined], type: VALUE_DELETED }
    });

    expect(diff({}, { a: 5 })).toEqual({
      a: { data: [undefined, 5], type: VALUE_CREATED }
    });
  });

  it("ignores functions", () => {
    const f = (x: number) => x;
    const g = (y: number) => y + 3;

    expect(diff({ a: 1, f }, { a: 5, f: g })).toEqual({
      a: { data: [1, 5], type: VALUE_UPDATED }
    });
  });

  it("detects object deletions", () => {
    expect(diff({ a: 1 }, undefined)).toEqual({
      data: [{ a: 1 }, undefined],
      type: VALUE_DELETED
    });
  });
});
