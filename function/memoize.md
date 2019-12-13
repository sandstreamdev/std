# memoize

Memoizes the function result so it is not computed for the same parameters. Uses deep equality.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(f: (...xs: any[]) => any) => (...args: any[]) => any
```
<!-- prettier-ignore-end -->
