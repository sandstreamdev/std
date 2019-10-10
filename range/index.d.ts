import empty from "./empty";
import equals from "./equals";
import length from "./length";
import split from "./split";

export { empty, equals, length, split };
declare const _default: {
  empty: ([min, max]: [any, any]) => boolean;
  equals: ([a, b]: [any, any], [c, d]: [any, any]) => boolean;
  length: ([min, max]: [any, any]) => number;
  split: (used: any, sourceRange?: number[]) => (range: any) => any;
};

export default _default;
