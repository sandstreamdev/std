# zipWith

Zips the given arrays together with the given function.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T1, T2>(f?: (x: T1, y: T2) => [T1, T2]) => (xs: T1[], ys: T2[]) => [T1, T2][]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
zipWith((x, y) => x * x + y)([1, 2, 3], [4, 5, 6]);
// ⇒ [5, 9, 15]
```
<!-- prettier-ignore-end -->

## Questions

- How to zip two arrays with a given function?
