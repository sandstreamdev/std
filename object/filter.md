# filter

Filters the given object with the given predicate.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  f: (value: any, key: string, context: object) => boolean
) => (xs: object) => object
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
filter(x => x % 2 !== 0)({ a: 1, b: 2, c: 3 });
// ⇒ { a: 1, c: 3 }
```
<!-- prettier-ignore-end -->

## Questions

- How to filter an object?
