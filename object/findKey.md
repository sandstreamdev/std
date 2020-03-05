# findKey

Searches the given object by the given predicate and returns the found key or undefined.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  predicate: (value: any, key: string, context: object) => boolean
) => (xs: object) => any
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
findKey(({ x }) => x % 2 === 0)({ a: { x: 1 }, b: { x: 2 }, c: { x: 3 } });
// ⇒ "b"
```
<!-- prettier-ignore-end -->

## Questions

- How to find a key of an object by a function?
