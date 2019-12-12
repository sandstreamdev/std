import isNumber from "../is/number.js";
import clamp from "../math/clamp.js";
import empty from "./empty.js";

const split = (used, sourceRange = [-Infinity, Infinity]) => range => {
  if (empty(range) || !range.every(isNumber)) {
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
  const clampToSourceRange = clamp(sourceMin, sourceMax);

  const [freeLeftMin, freeLeftMax] = [sourceMin, usedMin].map(
    clampToSourceRange
  );

  const [freeRightMin, freeRightMax] = [usedMax, sourceMax].map(
    clampToSourceRange
  );

  const clampLeft = clamp(freeLeftMin, freeLeftMax);
  const clampedLeft = range.map(clampLeft);
  const lefts = split(xs, sourceRange)(clampedLeft);
  const clampRight = clamp(freeRightMin, freeRightMax);
  const clampedRight = range.map(clampRight);
  const rights = split(xs, sourceRange)(clampedRight);

  return [...lefts, ...rights].filter(range => !empty(range));
};

export default split;