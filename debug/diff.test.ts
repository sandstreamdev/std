/* eslint-env jest */
import diff, {
  VALUE_CREATED,
  VALUE_DELETED,
  VALUE_UPDATED
  // @ts-ignore ambiguous import
} from "./diff.ts";

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
    expect(
      diff(
        { a: new Date("2019-12-13T12:15:00.000Z") },
        { a: new Date("2019-12-23T12:30:00.000Z") }
      )
    ).toEqual({
      a: {
        data: [
          new Date("2019-12-13T12:15:00.000Z"),
          new Date("2019-12-23T12:30:00.000Z")
        ],
        type: VALUE_UPDATED
      }
    });
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
    expect(diff({ a: 1, f: x => x }, { a: 5, f: y => y + 3 })).toEqual({
      a: { data: [1, 5], type: VALUE_UPDATED }
    });
  });
});
