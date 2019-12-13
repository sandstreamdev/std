# filterInPlace

Filters the given array with the given predicate just like Array.filter but does it in-place thus mutates the original array.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  f: (value: any, index: number, context: any[]) => boolean
) => (xs: any[]) => any[]
```
<!-- prettier-ignore-end -->
