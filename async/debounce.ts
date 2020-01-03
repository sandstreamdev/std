/* eslint-env browser */

export default (f: { (...args: any[]): any }, wait: number) => {
  let timeout: any;

  return (...args: any[]) => {
    const resolve = () => {
      timeout = null;

      f(...args);
    };

    clearTimeout(timeout);

    timeout = setTimeout(resolve, wait);
  };
};
