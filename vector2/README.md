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

# length

Calculates length/magnitude of the given vector.

## Type signature

<!-- prettier-ignore-start -->
```typescript
([x, y]: [number, number]) => number
```
<!-- prettier-ignore-end -->

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

# normalize

Normalizes the given vector. Returns [0, 0] vector for points.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(vector: [number, number]) => [number, number]
```
<!-- prettier-ignore-end -->

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
