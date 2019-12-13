import multiply from "./multiply";

export default (
  ...matrices: {
    a: number;
    c: number;
    e: number;
    b: number;
    d: number;
    f: number;
  }[]
) => matrices.reduce(multiply);
