import add from "./add";
import average from "./average";
import ceilToNearestPowerOfTwo from "./ceilToNearestPowerOfTwo";
import clamp from "./clamp";
import clampNormal from "./clampNormal";
import clampPercentage from "./clampPercentage";
import delta from "./delta";
import inRectangleRange from "./inRectangleRange";
import lerp from "./lerp";
import maximumBy from "./maximumBy";
import median from "./median";
import minMax from "./minMax";
import safeNormalize from "./safeNormalize";
import sameSign from "./sameSign";
import standardDeviation from "./standardDeviation";
import subtract from "./subtract";

export {
  add,
  average,
  ceilToNearestPowerOfTwo,
  clamp,
  clampNormal,
  clampPercentage,
  delta,
  inRectangleRange,
  lerp,
  maximumBy,
  median,
  minMax,
  safeNormalize,
  sameSign,
  standardDeviation,
  subtract
};
declare const _default: {
  add: (a: any, b: any) => any;
  average: (xs: any) => number;
  ceilToNearestPowerOfTwo: (x: any) => number;
  clamp: (min: any, max: any) => (x: any) => number;
  clampNormal: (x: any) => number;
  clampPercentage: (x: any) => number;
  delta: (a: any, b: any) => number;
  inRectangleRange: (width: any, height: any) => (x: any, y: any) => boolean;
  lerp: (t: any) => (a: any, b: any) => number;
  maximumBy: (f: any) => (xs: any) => any;
  median: (xs: any) => any;
  minMax: ([a, b]: [any, any]) => any[];
  safeNormalize: (x: any) => number;
  sameSign: (xs: any) => boolean;
  standardDeviation: (xs: any, origin?: number) => number;
  subtract: (a: any, b: any) => number;
};

export default _default;
