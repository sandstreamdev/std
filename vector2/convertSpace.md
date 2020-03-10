# convertSpace

Applies transformations to the given vector.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(space: {
  a: number;
  c: number;
  e: number;
  b: number;
  d: number;
  f: number;
}) => ([x, y]: [number, number]) => number[]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
convertSpace(rotate(Math.PI))([2, 3]);
// ⇒ [-2, -3]
```
<!-- prettier-ignore-end -->

## Questions

- How to transform a vector with a matrix?
