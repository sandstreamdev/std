import any from "./any";
import are from "./are";
import difference from "./difference";
import differs from "./differs";
import duplicates from "./duplicates";
import empty from "./empty";
import exact from "./exact";
import except from "./except";
import filterInPlace from "./filterInPlace";
import find from "./find";
import first from "./first";
import flatMap from "./flatMap";
import flatten from "./flatten";
import intersection from "./intersection";
import is from "./is";
import last from "./last";
import lengthDiffers from "./lengthDiffers";
import map from "./map";
import midpoint from "./midpoint";
import minMax from "./minMax";
import multiple from "./multiple";
import none from "./none";
import partition from "./partition";
import range from "./range";
import repeat from "./repeat";
import reverse from "./reverse";
import reverseIf from "./reverseIf";
import rotate from "./rotate";
import second from "./second";
import secondToLast from "./secondToLast";
import shift from "./shift";
import shuffle from "./shuffle";
import shuffleInPlace from "./shuffleInPlace";
import single from "./single";
import sort from "./sort";
import sum from "./sum";
import transpose from "./transpose";
import unique from "./unique";
import zip from "./zip";
import zipWith from "./zipWith";

export {
  any,
  are,
  difference,
  differs,
  duplicates,
  empty,
  exact,
  except,
  filterInPlace,
  find,
  first,
  flatMap,
  flatten,
  intersection,
  is,
  last,
  lengthDiffers,
  map,
  midpoint,
  minMax,
  multiple,
  none,
  partition,
  range,
  repeat,
  reverse,
  reverseIf,
  rotate,
  second,
  secondToLast,
  shift,
  shuffle,
  shuffleInPlace,
  single,
  sort,
  sum,
  transpose,
  unique,
  zip,
  zipWith
};
declare const _default: {
  any: (xs: any) => boolean;
  are: (...xs: any[]) => boolean;
  difference: (xs: any, ys: any) => any;
  differs: (xs: any, ys: any) => any;
  duplicates: (xs: any) => any;
  empty: any[];
  exact: (n: any) => (xs: any) => any[];
  except: (y: any) => (xs: any) => any;
  filterInPlace: (f: any) => (xs: any) => any;
  find: (predicate: any, fallback: any) => (xs: any) => any;
  first: ([x]: [any]) => any;
  flatMap: (f: any) => (xs: any) => any;
  flatten: (xs: any) => any[];
  intersection: (xs: any, ys: any) => any;
  is: (value: any) => boolean;
  last: (xs: any) => any;
  lengthDiffers: (a: any, b: any) => boolean;
  map: (...fs: any[]) => (x: any) => any;
  midpoint: (xs: any) => any;
  minMax: ([head, ...tail]: [any, ...any[]]) => any;
  multiple: (xs: any) => boolean;
  none: (xs: any) => boolean;
  partition: (predicate: any) => (xs: any) => any;
  range: (n: any) => number[];
  repeat: (n: any) => (value: any) => any[];
  reverse: (xs: any) => any[];
  reverseIf: (predicate: any) => (xs: any) => any;
  rotate: (array: any) => (angle: any) => any;
  second: ([, x]: [any, any]) => any;
  secondToLast: (xs: any) => any;
  shift: (n: any) => (xs: any) => any;
  shuffle: (xs: any) => any;
  shuffleInPlace: (xs: any) => any;
  single: (xs: any) => boolean;
  sort: (f: any) => (xs: any) => any[];
  sum: (xs: any) => any;
  transpose: (xs: any) => any[][];
  unique: (xs: any) => unknown[];
  zip: (xs: any, ys: any) => any;
  zipWith: (f: any) => (xs: any, ys: any) => any;
};

export default _default;
