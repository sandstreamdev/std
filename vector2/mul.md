# mul

Applies matrix transformation to the given vector.

## Type signature

<!-- prettier-ignore-start -->
```typescript
({ a, b, c, d, e, f }: {
    a: number;
    c: number;
    e: number;
    b: number;
    d: number;
    f: number;
}, [x, y]: [number, number]) => number[]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
mul(scale(4, 5), [2, 3]);
// ⇒ [8, 15]
```
<!-- prettier-ignore-end -->

## Questions

- How to apply a matrix transformation to a vector?
