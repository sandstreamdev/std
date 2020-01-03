# apply

Applies the given parameters to the given dictionary of functions.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  fs: ((...xs: any[]) => any)[]
) => (
  ...xs: any[]
) => {
  [x: string]: any;
  [x: number]: any;
}
```
<!-- prettier-ignore-end -->
