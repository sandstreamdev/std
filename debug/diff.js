import isArray from "../is/array.js";
import isDate from "../is/date.js";
import isDefined from "../is/defined.js";
import isFunction from "../is/function.js";
import isObject from "../is/object.js";
import filter from "../object/filter.js";
import none from "../object/none.js";

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

  if (!isDefined(value1)) {
    return VALUE_CREATED;
  }

  if (!isDefined(value2)) {
    return VALUE_DELETED;
  }

  return VALUE_UPDATED;
};

const diff = (obj1, obj2) => {
  if (!obj1 || !obj2 || isValue(obj1) || isValue(obj2)) {
    const comparisonResult = compareValues(obj1, obj2);

    return comparisonResult !== VALUE_UNCHANGED
      ? {
          type: comparisonResult,
          data: [obj1, obj2]
        }
      : {};
  }

  const result = {};

  for (const key of Object.keys(obj1)) {
    // @ts-expect-error
    const value1 = obj1[key];

    if (isFunction(value1)) {
      continue;
    }

    // @ts-expect-error
    const value2 = obj2[key];
    result[key] = diff(value1, value2);
  }

  for (const key of Object.keys(obj2)) {
    // @ts-expect-error
    const value2 = obj2[key];
    const existingValue = result[key];

    if (isFunction(value2) || isDefined(existingValue)) {
      continue;
    }

    result[key] = diff(undefined, value2);
  }

  return filter(
    value =>
      value !== null &&
      !(value && isObject(value) && typeof value === "object" && none(value))
  )(result);
};

export default diff;
