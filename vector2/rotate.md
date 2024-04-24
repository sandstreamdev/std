# rotate

Creates a rotation matrix around given origin [0, 0] by default.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(angle?: number, cx?: number, cy?: number) => {
    a: number;
    c: number;
    e: number;
    b: number;
    d: number;
    f: number;
}
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
const angle = Math.PI;
const sine = Math.sin(angle);
const cosine = Math.cos(angle);

rotate(angle); // { a: cosine, b: sine, c: -sine, d: cosine, e: 0, f: 0 }
```
<!-- prettier-ignore-end -->

## Questions

- How to create a rotation matrix?
