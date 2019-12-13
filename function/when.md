# when

Runs the given function only when the condition is met.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  predicate: (...xs: any[]) => boolean
) => (action: (...xs: any[]) => any) => (...args: any[]) => any
```
<!-- prettier-ignore-end -->
