type F = (...args: unknown[]) => unknown;

export default (f: F, wait: number) => {
  let timeout: ReturnType<typeof setTimeout> | undefined = undefined;

  return (...args: unknown[]) => {
    const resolve = () => {
      timeout = undefined;

      f(...args);
    };

    if (timeout !== undefined) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(resolve, wait);
  };
};
