import any from "./any";
import apply from "./apply";
import empty from "./empty";
import entries from "./entries";
import enumerable from "./enumerable";
import equals from "./equals";
import filter from "./filter";
import find from "./find";
import findEntry from "./findEntry";
import findKey from "./findKey";
import findValue from "./findValue";
import first from "./first";
import flatMapValues from "./flatMapValues";
import fromEntries from "./fromEntries";
import groupBy from "./groupBy";
import hasKey from "./hasKey";
import length from "./length";
import map from "./map";
import mapEntries from "./mapEntries";
import mapKeys from "./mapKeys";
import mapValues from "./mapValues";
import none from "./none";
import sort from "./sort";

export {
  any,
  apply,
  empty,
  entries,
  enumerable,
  equals,
  filter,
  find,
  findEntry,
  findKey,
  findValue,
  first,
  flatMapValues,
  fromEntries,
  groupBy,
  hasKey,
  length,
  map,
  mapEntries,
  mapKeys,
  mapValues,
  none,
  sort
};
declare const _default: {
  any: (xs: any) => boolean;
  apply: (fs: any) => (...xs: any[]) => any;
  empty: {};
  entries: (object: any) => any[][];
  enumerable: (...xs: any[]) => any;
  equals: (a: any, b: any) => any;
  filter: (f: any) => (xs: any) => any;
  find: (predicate: any) => (xs: any) => any;
  findEntry: (predicate: any) => (xs: any) => any[];
  findKey: (predicate: any) => (xs: any) => any;
  findValue: (predicate: any) => (xs: any) => any;
  first: (xs: any) => unknown;
  flatMapValues: (f: any) => (xs: any) => any;
  fromEntries: (keyValuePairs: any) => any;
  groupBy: (selector: any) => (xs: any) => any;
  hasKey: (key: any) => (xs: any) => any;
  length: (xs: any) => number;
  map: (f: any) => (xs: any) => any;
  mapEntries: (f: any) => (xs: any) => any[][];
  mapKeys: (f: any) => (xs: any) => any;
  mapValues: (f: any) => (xs: any) => any[];
  none: (xs: any) => boolean;
  sort: (f: any) => (xs: any) => any;
};

export default _default;
