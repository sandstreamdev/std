import parse from "./parse";
import parsePathname from "./parsePathname";
import read from "./read";
import serialize from "./serialize";

export { parse, parsePathname, read, serialize };
declare const _default: {
  parse: (xs?: string) => any;
  parsePathname: (
    url: any
  ) => {
    pathname: any;
    search: string;
    hash: string;
  };
  read: (source: any) => {};
  serialize: (xs?: {}) => string;
};

export default _default;
