import compose from "./compose";
import constant from "./constant";
import identity from "./identity";
import memoize from "./memoize";
import memoizeShallow from "./memoizeShallow";
import memoizeWith from "./memoizeWith";
import noOp from "./noOp";
import not from "./not";
import pipe from "./pipe";
import when from "./when";
import whenTrue from "./whenTrue";

export {
  compose,
  constant,
  identity,
  memoize,
  memoizeShallow,
  memoizeWith,
  noOp,
  not,
  pipe,
  when,
  whenTrue
};
declare const _default: {
  compose: (...fs: any[]) => (x: any) => any;
  constant: (x: any) => () => any;
  identity: (x: any) => any;
  memoize: (f: any) => (...args: any[]) => any;
  memoizeShallow: (f: any) => (...args: any[]) => any;
  memoizeWith: (equals: any) => (f: any) => (...args: any[]) => any;
  noOp: () => void;
  not: (f: any) => (...args: any[]) => boolean;
  pipe: (...fs: any[]) => (x: any) => any;
  when: (predicate: any) => (action: any) => (...args: any[]) => any;
  whenTrue: (action: any) => (...args: any[]) => any;
};

export default _default;
