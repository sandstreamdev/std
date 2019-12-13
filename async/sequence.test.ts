/* eslint-env jest */
// @ts-ignore ambiguous import
import sequence from "./sequence.ts";

// @ts-ignore ambiguous import
import delay from "./delay.ts";

describe("sequence", () => {
  it("runs given tasks in a sequence", async () => {
    const delayedLog = async (x: number) => {
      await delay(x);

      return x;
    };

    const tasks = [
      () => delayedLog(100),
      () => delayedLog(500),
      () => delayedLog(200),
      () => delayedLog(30)
    ];

    const result = await sequence(tasks);

    expect(result).toEqual([100, 500, 200, 30]);
  });

  it("fails if any task fails", async () => {
    const delayedLog = async (x: number) => {
      await delay(x);

      return x;
    };

    const tasks = [
      () => delayedLog(100),
      () => delayedLog(500),
      () => {
        throw new Error("Test failure.");
      },
      () => delayedLog(200),
      () => delayedLog(30)
    ];

    let errorState = undefined;

    try {
      await sequence(tasks);
    } catch (error) {
      errorState = error;
    }

    expect(errorState).toBeDefined();
  });
});
