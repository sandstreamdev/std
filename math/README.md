# add

Adds two values.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(a: number, b: number) => number
```
<!-- prettier-ignore-end -->

# average

Calculates the average of given array of numbers.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs?: number[] | undefined) => number
```
<!-- prettier-ignore-end -->

# ceilToNearestPowerOfTwo

Finds the nearest power of two greater or equal to the given value.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(x: number) => number
```
<!-- prettier-ignore-end -->

# clamp

Clamps the given value to the given range.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(min: number, max: number) => (x: number) => number
```
<!-- prettier-ignore-end -->

# clampNormal

Clamps the given value to the [0, 1] range.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(x: number) => number
```
<!-- prettier-ignore-end -->

# clampPercentage

Clamps the given value to the [0, 100] range.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(x: number) => number
```
<!-- prettier-ignore-end -->

# delta

Calculates the absolute distance between given values.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(a: number, b: number) => number
```
<!-- prettier-ignore-end -->

# inRectangleRange

Checks if the given value is in the rectangular range of [0, width] and [0, height]

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  width: number,
  height: number
) => (x: number, y: number) => boolean
```
<!-- prettier-ignore-end -->

# lerp

Linearly interpolates two given values by normal value of their distance.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(t: number) => (a: number, b: number) => number
```
<!-- prettier-ignore-end -->

# maximumBy

Calculates the maximum by a given selector.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(f: (x: number) => number) => (xs: number[]) => number
```
<!-- prettier-ignore-end -->

# median

Calculates the median of the values. If there is an even number of items, the average of the middle ones is returned.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs?: number[] | undefined) => number | undefined
```
<!-- prettier-ignore-end -->

# minMax

Calculates the minimum and maximum value of the two given values.

## Type signature

<!-- prettier-ignore-start -->
```typescript
([a, b]: [number, number]) => [number, number]
```
<!-- prettier-ignore-end -->

# sameSign

Checks if all the given values have the same sign.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: number[]) => boolean
```
<!-- prettier-ignore-end -->

# sign

Calculates the sign of the value and returns -1 for negative values, 1 for positive values and 0 for zeros.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(x: number) => number
```
<!-- prettier-ignore-end -->

# standardDeviation

Calculates standard deviation of the given array of numbers.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: number[], origin?: number) => number
```
<!-- prettier-ignore-end -->

# subtract

Subtracts two values.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(a: number, b: number) => number
```
<!-- prettier-ignore-end -->
