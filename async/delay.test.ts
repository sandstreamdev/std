import delay from "./delay.js";

describe("delay", () => {
  it("delays the execution by the given time in milliseconds", async () => {
    const start = Date.now();

    await delay(500);

    const end = Date.now();

    expect(end - start >= 500);
  });
});
