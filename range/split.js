import { isNotNaN } from "../is";
import clamp from "../math/clamp";
import empty from "./empty";

export const split = (used, sourceRange = [-Infinity, Infinity]) => range => {
  if (empty(range) || !range.every(isNotNaN)) {
    return [];
  }

  if (!used || used.length === 0) {
    return [range];
  }

  const [x, ...xs] = used;
  const [usedMin, usedMax] = x;

  if (empty(x)) {
    return split(xs, sourceRange)(range);
  }

  const [sourceMin, sourceMax] = sourceRange;
  const clampToSourceRange = clamp(sourceRange);

  const freeLeft = [sourceMin, usedMin].map(clampToSourceRange);
  const freeRight = [usedMax, sourceMax].map(clampToSourceRange);

  const clampLeft = clamp(freeLeft);
  const clampedLeft = range.map(clampLeft);

  const lefts = split(xs, sourceRange)(clampedLeft);

  const clampRight = clamp(freeRight);
  const clampedRight = range.map(clampRight);

  const rights = split(xs, sourceRange)(clampedRight);

  return [...lefts, ...rights].filter(range => !empty(range));
};
