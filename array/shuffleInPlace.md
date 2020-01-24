# shuffleInPlace

Shuffles the given array in-place in random order with Math.random as the default.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any[], random?: () => number) => any[]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
let i = 0;

const random = () =>
  [
    0.013606630487694282,
    0.21052486239086554,
    0.28299838254636556,
    0.696161009199874,
    0.32165320593537117
  ][i++];

shuffleInPlace([1, 2, 3, 4, 5], random); // => [3, 5, 4, 2, 1]
```
<!-- prettier-ignore-end -->
