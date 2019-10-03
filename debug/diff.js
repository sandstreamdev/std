import filter from "../object/filter.js";
import none from "../object/none.js";

import isArray from "../is/array.js";
import isDate from "../is/date.js";
import isFunction from "../is/function.js";
import isObject from "../is/object.js";

export const VALUE_CREATED = "+";
export const VALUE_DELETED = "-";
export const VALUE_UNCHANGED = "=";
export const VALUE_UPDATED = "~";

const isValue = x => !isObject(x) && !isArray(x);

const compareValues = (value1, value2) => {
  if (value1 === value2) {
    return VALUE_UNCHANGED;
  }

  if (
    isDate(value1) &&
    isDate(value2) &&
    value1.getTime() === value2.getTime()
  ) {
    return VALUE_UNCHANGED;
  }

  if ("undefined" == typeof value1) {
    return VALUE_CREATED;
  }

  if ("undefined" == typeof value2) {
    return VALUE_DELETED;
  }

  return VALUE_UPDATED;
};

const diff = (obj1, obj2) => {
  if (isFunction(obj1) || isFunction(obj2)) {
    throw "Invalid argument. Function given, object expected.";
  }

  if (isValue(obj1) || isValue(obj2)) {
    const comparisonResult = compareValues(obj1, obj2);
    return comparisonResult !== VALUE_UNCHANGED
      ? {
          type: comparisonResult,
          data: [obj1, obj2]
        }
      : null;
  }

  const result = {};
  for (const key in obj1) {
    if (isFunction(obj1[key])) {
      continue;
    }

    let value2 = undefined;
    if ("undefined" != typeof obj2[key]) {
      value2 = obj2[key];
    }

    result[key] = diff(obj1[key], value2);
  }
  for (const key in obj2) {
    if (isFunction(obj2[key]) || "undefined" != typeof result[key]) {
      continue;
    }

    result[key] = diff(undefined, obj2[key]);
  }

  return filter(
    value =>
      value !== null && !(value && "object" === typeof value && none(value))
  )(result);
};

export default diff;
