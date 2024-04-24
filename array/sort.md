# sort

Sorts the given array without mutating it.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(f?: (a: T, b: T) => number) => (xs: T[]) => T[]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
sort((a, b) => a - b)([13, 79, 20, 69, 44, 67, 18, 95, 26, 55]);
// ⇒ [13, 18, 20, 26, 44, 55, 67, 69, 79, 95]
```
<!-- prettier-ignore-end -->

## Questions

- How to sort an array without mutating it?
