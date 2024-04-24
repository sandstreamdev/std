import prevent from "./prevent.js";

describe("prevent", () => {
  it("prevents the default handler of the given event", () => {
    const event = {
      preventDefault: jest.fn()
    };

    prevent(event);

    expect(event.preventDefault).toBeCalled();
  });
});
