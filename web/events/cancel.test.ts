/* eslint-env jest */
// @ts-ignore ambiguous import
import cancel from "./cancel.ts";

describe("cancel", () => {
  it("stops propagation and prevents the default handler of the given event", () => {
    const event = {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn()
    };

    cancel(event);

    expect(event.preventDefault).toBeCalled();
    expect(event.stopPropagation).toBeCalled();
  });
});
