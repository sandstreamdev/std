import debounce from "./debounce.js";

import delay from "./delay.js";

describe("debounce", () => {
  it("makes the function run after given delay", async () => {
    const mock = jest.fn();
    const waitTime = 1000;

    const debounced = debounce(mock, waitTime);

    expect(mock).not.toBeCalled();

    debounced();

    expect(mock).not.toBeCalled();

    await delay(500);

    expect(mock).not.toBeCalled();

    await delay(800);

    expect(mock).toBeCalledTimes(1);
  });

  it("suspends multiple invocations during wait time and resets the delay", async () => {
    const mock = jest.fn();
    const waitTime = 1000;

    const debounced = debounce(mock, waitTime);

    expect(mock).not.toBeCalled();

    debounced();

    expect(mock).not.toBeCalled();

    await delay(500);

    debounced();

    expect(mock).not.toBeCalled();

    await delay(800);

    expect(mock).not.toBeCalled();

    await delay(300);

    expect(mock).toBeCalledTimes(1);
  });
});
