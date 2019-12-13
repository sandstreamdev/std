/* eslint-env jest */
// @ts-ignore ambiguous import
import prevent from "./prevent.ts";

describe("prevent", () => {
  it("prevents the default handler of the given event", () => {
    const event = {
      preventDefault: jest.fn()
    };

    prevent(event);

    expect(event.preventDefault).toBeCalled();
  });
});
