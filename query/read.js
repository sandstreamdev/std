/* eslint-env browser */
export default source =>
  [...new URLSearchParams(source).entries()].reduce(
    (q, [k, v]) => ({ ...q, ...{ [k]: v } }),
    {}
  );
