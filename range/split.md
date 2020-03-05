# split

Splits the given range into subranges by excluding the given used ranged.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  used: [number, number][],
  sourceRange?: number[]
) => (range: [number, number]) => [number, number][]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
split([[2, 3], [5, 7]]);
// ⇒ [[0, 2], [3, 5], [7, 10]]
```
<!-- prettier-ignore-end -->

## Questions

- How to split a range into subranges?
