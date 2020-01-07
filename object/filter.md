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
