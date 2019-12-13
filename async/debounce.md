# debounce

Makes the function run after the given period of not being called. Useful to delay input submission for autocomplete etc.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  f: (...args: any[]) => any,
  wait: number
) => (...args: any[]) => void
```
<!-- prettier-ignore-end -->
