import cancel from "./cancel.js";

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
