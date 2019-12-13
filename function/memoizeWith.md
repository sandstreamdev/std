# memoizeWith

Memoizes the function result so it is not computed for the same parameters. Uses the given equality function.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  equals: (x: any[], ay: any) => boolean
) => (f: (...xs: any[]) => any) => (...args: any[]) => any
```
<!-- prettier-ignore-end -->
