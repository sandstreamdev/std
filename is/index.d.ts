import array from "./array";
import byte from "./byte";
import date from "./date";
import defined from "./defined";
import _function from "./function";
import integer from "./integer";
import normal from "./normal";
import number from "./number";
import object from "./object";
import string from "./string";

export {
  array,
  byte,
  date,
  defined,
  _function,
  integer,
  normal,
  number,
  object,
  string
};
declare const _default: {
  array: (x: any) => boolean;
  byte: (x: any) => boolean;
  date: (x: any) => boolean;
  defined: (x: any) => boolean;
  _function: (x: any) => boolean;
  integer: (x: any) => boolean;
  normal: (x: any) => boolean;
  number: (x: any) => boolean;
  object: (x: any) => boolean;
  string: (x: any) => boolean;
};

export default _default;
