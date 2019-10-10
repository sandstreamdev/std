import containsWhitespace from "./containsWhitespace";
import empty from "./empty";
import firstToLower from "./firstToLower";
import firstToUpper from "./firstToUpper";
import includes from "./includes";
import nbsp from "./nbsp";
import nonEmpty from "./nonEmpty";
import startsWith from "./startsWith";

export {
  containsWhitespace,
  empty,
  firstToLower,
  firstToUpper,
  includes,
  nbsp,
  nonEmpty,
  startsWith
};
declare const _default: {
  containsWhitespace: (x: any) => boolean;
  empty: string;
  firstToLower: ([first, ...rest]: [any, ...any[]]) => string;
  firstToUpper: ([first, ...rest]: [any, ...any[]]) => string;
  includes: (search: any) => (xs: any) => boolean;
  nbsp: string;
  nonEmpty: (x: any) => any;
  startsWith: (prefix: any) => (xs: any) => boolean;
};

export default _default;
