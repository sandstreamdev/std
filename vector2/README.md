# add

Adds two vectors.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  [x1, y1]: [number, number],
  [x2, y2]: [number, number]
) => [number, number]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
add([3, 5], [-1, 8]);
// ⇒ [2, 13]
```
<!-- prettier-ignore-end -->

## Questions

- How to add two vectors?

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
- How to check on which side of a line point is?

# dot

Calculates a dot product of the given vectors. Returns a scalar.

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
dot([3, 5], [-1, 8]);
// ⇒ 37
```

```javascript
dot([3, 5], [-1, -8]);
// ⇒ -43
```
<!-- prettier-ignore-end -->

## Questions

- How to compute a dot product of two vectors?

# length

Calculates length/magnitude of the given vector.

## Type signature

<!-- prettier-ignore-start -->
```typescript
([x, y]: [number, number]) => number
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
length([3, 5]);
// ⇒ Math.sqrt(3 * 3 + 5 * 5)
```
<!-- prettier-ignore-end -->

## Questions

- How to compute length of a vector?
- How to compute magnitude of a vector?

# mul

Applies matrix transformation to the given vector.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  {
    a,
    b,
    c,
    d,
    e,
    f
  }: {
    a: number;
    c: number;
    e: number;
    b: number;
    d: number;
    f: number;
  },
  [x, y]: [number, number]
) => number[]
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

# normalize

Normalizes the given vector. Returns [0, 0] vector for points.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(vector: [number, number]) => [number, number]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
normalize([2, 3]);
// ⇒ [2 / length([2, 3]), 3 / length([2, 3])]
```
<!-- prettier-ignore-end -->

## Questions

- How to normalize a vector?

# reflect

Reflects the given vector on the given surface.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  a: [number, number],
  v: [number, number]
) => [number, number]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
reflect([1, -2], [1, 0]);
// ⇒ [0.6, 0.8]
```
<!-- prettier-ignore-end -->

## Questions

- How to reflect a vector on an another vector?

# rotate

Creates a rotation matrix around given origin [0, 0] by default.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  angle?: number,
  cx?: number,
  cy?: number
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
const angle = Math.PI;
const sine = Math.sin(angle);
const cosine = Math.cos(angle);

rotate(angle); // { a: cosine, b: sine, c: -sine, d: cosine, e: 0, f: 0 }
```
<!-- prettier-ignore-end -->

## Questions

- How to create a rotation matrix?

# scale

Creates a scale matrix.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  sx?: number,
  sy?: number
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
scale(2, 3);
// ⇒ { a: 2, b: 0, c: 0, d: 3, e: 0, f: 0 }
```
<!-- prettier-ignore-end -->

## Questions

- How to create a scale matrix?

# sub

Subtracts two vectors.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  [x1, y1]: [number, number],
  [x2, y2]: [number, number]
) => [number, number]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
sub([3, 5], [-1, 8]);
// ⇒ [4, -3]
```
<!-- prettier-ignore-end -->

## Questions

- How to subtract two vectors?

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

# translate

Creates a translation matrix.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  tx?: number,
  ty?: number
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
translate(2, 3);
// ⇒ { a: 1, b: 0, c: 0, d: 1, e: 2, f: 3 }
```
<!-- prettier-ignore-end -->

## Questions

- How to create a translation matrix?
