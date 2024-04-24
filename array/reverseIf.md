# reverseIf

Reverses the given array when enabled.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(enabled: boolean) => <T>(xs: T[]) => T[]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
reverseIf(true)([1, 2, 3, 4, 5]);
// ⇒ [5, 4, 3, 2, 1]
```

```javascript
reverseIf(false)([1, 2, 3, 4, 5]);
// ⇒ [1, 2, 3, 4, 5]
```
<!-- prettier-ignore-end -->

## Questions

- How to reverse an array without mutating it only when a condition is satisfied?
