# partition

Partitions the given array to the ones that pass the given predicate function and the ones that do not. By [convention of the Haskell's Data.Either](http://hackage.haskell.org/package/base-4.12.0.0/docs/Data-Either.html), values that pass the predicate are placed at the right.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(predicate: (x: T) => boolean) => (xs: T[]) => readonly [T[], T[]]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
partition(x => x % 2 === 1)([1, 2, 3, 4, 5]);
// ⇒ [[2, 4], [1, 3, 5]])
```
<!-- prettier-ignore-end -->

## Questions

- How to partition an array based on a condition?
- How to divide an array by a filter function?
