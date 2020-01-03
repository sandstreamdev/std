import filter from "../object/filter";
import none from "../object/none";
import isDefined from "../is/defined";
import isArray from "../is/array";
import isDate from "../is/date";
import isFunction from "../is/function";
import isObject from "../is/object";

export const VALUE_CREATED = "+";

export const VALUE_DELETED = "-";

export const VALUE_UNCHANGED = "=";

export const VALUE_UPDATED = "~";

const isValue = (x: any) => !isObject(x) && !isArray(x);

const compareValues = (value1: any, value2: any) => {
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

const diff = (
  obj1?: { [index: string]: any },
  obj2?: { [index: string]: any }
): object => {
  if (isValue(obj1) || isValue(obj2)) {
    const comparisonResult = compareValues(obj1, obj2);

    return comparisonResult !== VALUE_UNCHANGED
      ? {
          type: comparisonResult,
          data: [obj1, obj2]
        }
      : {};
  }

  const result: { [index: string]: any } = {};

  for (const key in obj1) {
    const value1 = obj1[key];

    if (isFunction(value1)) {
      continue;
    }

    const value2 = obj2 ? obj2[key] : undefined;

    result[key] = diff(value1, value2);
  }

  for (const key in obj2) {
    const value2 = obj2[key];

    const existingValue = result[key];

    if (isFunction(value2) || isDefined(existingValue)) {
      continue;
    }

    result[key] = diff(undefined, value2);
  }

  return filter(
    (value: any) => value !== null && !(value && isObject(value) && none(value))
  )(result);
};

export default diff;
