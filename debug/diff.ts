import isArray from "../is/array";
import isDate from "../is/date";
import isDefined from "../is/defined";
import isFunction from "../is/function";
import isObject from "../is/object";
import filter from "../object/filter";
import none from "../object/none";
import type { GenericObject } from "../object/types";

export const VALUE_CREATED = "+";

export const VALUE_DELETED = "-";

export const VALUE_UNCHANGED = "=";

export const VALUE_UPDATED = "~";

const isValue = (x: unknown) => !isObject(x) && !isArray(x);

const compareValues = (value1: unknown, value2: unknown) => {
  if (value1 === value2) {
    return VALUE_UNCHANGED;
  }

  if (
    isDate(value1) &&
    isDate(value2) &&
    (value1 as Date).getTime() === (value2 as Date).getTime()
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

type DiffResult = { [index: string]: unknown };

const diff = (obj1?: unknown, obj2?: unknown): DiffResult => {
  if (!obj1 || !obj2 || isValue(obj1) || isValue(obj2)) {
    const comparisonResult = compareValues(obj1, obj2);

    return comparisonResult !== VALUE_UNCHANGED
      ? {
          type: comparisonResult,
          data: [obj1, obj2]
        }
      : {};
  }

  const result: DiffResult = {};

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
    (value: unknown) =>
      value !== null &&
      !(
        value &&
        isObject(value) &&
        typeof value === "object" &&
        none(value as GenericObject<unknown>)
      )
  )(result) as DiffResult;
};

export default diff;
