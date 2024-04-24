# find

Searches the given object by the given predicate and returns the found value or undefined.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(predicate: (value: T, key: string, context: object) => boolean) => (xs: GenericObject<T>) => T | undefined
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
find(({ x }) => x % 2 === 0)({ a: { x: 1 }, b: { x: 2 }, c: { x: 3 } });
// ⇒ { x: 2 }
```
<!-- prettier-ignore-end -->

## Questions

- How to find the value of an object by a predicate function?
