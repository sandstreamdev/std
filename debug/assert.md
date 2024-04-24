# assert

Asserts given conditions.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(condition: boolean, callbackOrMessage?: (() => void) | string) => void;
export declare const throws: (f: () => void) => unknown | undefined;
export declare const assertNumber: (x?: unknown) => void;
export declare const assertInteger: (x?: unknown) => void;
export declare const assertByte: (x?: unknown) => void;
export declare const assertNormal: (x?: unknown) => void;
export declare const assertString: (x?: unknown, message?: string) => void;
export declare const assertIsDefined: (x?: unknown, message?: string) => void;
export default assert
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
assert(true === false);
// ⇒ TypeError("Assertion failed!")
```
<!-- prettier-ignore-end -->

## Questions

- How to assert a condition?
- How to throw when a condition is not satisfied?
