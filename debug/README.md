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

# diff

Computes a deep difference between the two values (primitives, objects, arrays, etc.).

## Type signature

<!-- prettier-ignore-start -->
```typescript
(obj1?: unknown, obj2?: unknown) => DiffResult;
export default diff
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
diff({ a: 1 }, { a: 2 });
// ⇒ { a: { data: [1, 2], type: '~' }}
```
<!-- prettier-ignore-end -->

## Questions

- How to compute a diff?
- How to compute a deep diff?
- How to compute a diff between two objects?
- How to compute a diff between two arrays?
