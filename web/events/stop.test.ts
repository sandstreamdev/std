/* eslint-env jest */
// @ts-ignore ambiguous import
import stop from "./stop.ts";

describe("stop", () => {
  it("stops propagation and prevents the default handler of the given event", () => {
    const event = {
      stopPropagation: jest.fn()
    };

    stop(event);

    expect(event.stopPropagation).toBeCalled();
  });
});
