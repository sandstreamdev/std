import add from "./add";
import convertSpace from "./convertSpace";
import cross from "./cross";
import dot from "./dot";
import length from "./length";
import mul from "./mul";
import multiply from "./multiply";
import normalize from "./normalize";
import reflect from "./reflect";
import rotate from "./rotate";
import scale from "./scale";
import sub from "./sub";
import transform from "./transform";
import translate from "./translate";

export {
  add,
  convertSpace,
  cross,
  dot,
  length,
  mul,
  multiply,
  normalize,
  reflect,
  rotate,
  scale,
  sub,
  transform,
  translate
};
declare const _default: {
  add: ([x1, y1]: [any, any], [x2, y2]: [any, any]) => any[];
  convertSpace: (space: any) => ([x, y]: [any, any]) => any[];
  cross: ([a, b]: [any, any], [c, d]: [any, any]) => number;
  dot: ([a, b]: [any, any], [c, d]: [any, any]) => number;
  length: ([x, y]: [any, any]) => number;
  mul: (matrix: any, point: any) => any[];
  multiply: (
    m1: any,
    m2: any
  ) => {
    a: number;
    c: number;
    e: any;
    b: number;
    d: number;
    f: any;
  };
  normalize: (vector: any) => any;
  reflect: (a: any, v: any) => number[];
  rotate: (angle?: number, cx?: number, cy?: number) => any;
  scale: (
    sx?: number,
    sy?: number
  ) => {
    a: number;
    c: number;
    e: number;
    b: number;
    d: number;
    f: number;
  };
  sub: ([x1, y1]: [any, any], [x2, y2]: [any, any]) => number[];
  transform: (...matrices: any[]) => any;
  translate: (
    tx?: number,
    ty?: number
  ) => {
    a: number;
    c: number;
    e: number;
    b: number;
    d: number;
    f: number;
  };
};

export default _default;
