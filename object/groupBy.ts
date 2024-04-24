type Result = { [index: string]: unknown[] | undefined };

export default (selector: (x: unknown) => string) =>
  (xs: unknown[]): Result => {
    const result: Result = {};

    for (const x of xs) {
      const key = selector(x);

      let slot = result[key];

      if (!slot) {
        slot = [];

        result[key] = slot;
      }

      slot.push(x);
    }

    return result;
  };
