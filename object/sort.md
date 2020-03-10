# sort

Sorts the given object by a comparator.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  f: (a: any, b: any) => number
) => (xs: object) => object
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
sort({ a: 3, b: 2, c: 3, d: -7, e: 13, f: 0, g: 8 });
// ⇒ {"d": -7,"f": 0,"b": 2,"a": 3,"c": 3,"g": 8,"e": 13}
```
<!-- prettier-ignore-end -->

## Questions

- How to sort an object?
