# transform

Composes a single transformation by matrix multiplication.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  ...matrices: {
    a: number;
    c: number;
    e: number;
    b: number;
    d: number;
    f: number;
  }[]
) => {
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
const originX = 5;
const originY = 6;
const angle = Math.PI;

transform(translate(originX, originY), rotate(angle), translate(-originX, -originY));
// ⇒ rotate(Math.PI, originX, originY)
```
<!-- prettier-ignore-end -->

## Questions

- How to compose multiple matrix transformations into a single matrix?
