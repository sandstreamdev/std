# partition

Partitions the given array to the ones that pass the given predicate function and the ones that do not. By [convention of the Haskell's Data.Either](http://hackage.haskell.org/package/base-4.12.0.0/docs/Data-Either.html), values that pass the predicate are placed at right.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(predicate: (x: any) => boolean) => (xs: any[]) => any
```
<!-- prettier-ignore-end -->
