/* eslint-env jest */
// @ts-ignore ambiguous import
import maximumBy from "./maximumBy.ts";

describe("maximumBy", () => {
  it("uses the given selector to extract value for comparison", () => {
    const data = [{ age: 13 }, { age: 20 }, { age: 7 }, { age: 18 }];
    const selector = ({ age }) => age;

    expect(maximumBy(selector)(data)).toEqual({ age: 20 });
  });
});
