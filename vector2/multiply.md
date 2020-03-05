# multiply

Multiples two matrices.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  m1: {
    a: number;
    c: number;
    e: number;
    b: number;
    d: number;
    f: number;
  },
  m2: {
    a: number;
    b: number;
    c: number;
    d: number;
    e: number;
    f: number;
  }
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
multiply({ a: 1, c: 2, e: 3, b: 4, d: 5, f: 6 }, { a: 7, c: 8, e: 9, b: 10, d: 11, f: 12 });
// ⇒ { a: 27, b: 78, c: 30, d: 87, e: 36, f: 102 }
```
<!-- prettier-ignore-end -->

## Questions

- How to multiply two matrices?
