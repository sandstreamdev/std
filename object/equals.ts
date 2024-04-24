import isObject from "../is/object";
import areArrays from "../array/are";
import lengthDiffers from "../array/lengthDiffers";

const keySet = (a: object, b: object) => [
  ...new Set([...Object.keys(a), ...Object.keys(b)])
];

export const equalsDeepWith =
  (f: (a: unknown, b: unknown) => boolean) =>
  (a: unknown, b: unknown): boolean => {
    if (areArrays(a, b)) {
      return (
        !lengthDiffers(a as unknown[], b as unknown[]) &&
        (a as unknown[]).every((_: unknown, key: number) =>
          equalsDeepWith(f)(_, (b as unknown[])[key])
        )
      );
    }

    return isObject(a) && isObject(b)
      ? a === b ||
          keySet(
            a as { [index: string]: unknown },
            b as { [index: string]: unknown }
          ).every(key =>
            equalsDeepWith(f)(
              (a as { [index: string]: unknown })[key],
              (b as { [index: string]: unknown })[key]
            )
          )
      : f(a, b);
  };

const defaultEquals = (a: unknown, b: unknown) => a === b;

const equalsDeep = equalsDeepWith(defaultEquals);

export default equalsDeep;
