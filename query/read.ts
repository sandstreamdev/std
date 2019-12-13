/* eslint-env browser */

export default (source: string) =>
  [...new URLSearchParams(source).entries()].reduce(
    (q, [k, v]) => ({ ...q, ...{ [k]: v } }),
    {}
  );
