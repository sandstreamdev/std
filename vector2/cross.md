# cross

Calculates a cross product of the given vectors. Returns a scalar.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  [a, b]: [number, number],
  [c, d]: [number, number]
) => number
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
cross([3, 5], [-1, 8]);
// ⇒ 29
```

```javascript
cross([3, 5], [-1, -8]);
// ⇒ -19
```
<!-- prettier-ignore-end -->

## Questions

- How to compute a cross product of two vectors?
- How to check on which side of a line a point is?
