# add

Adds two values.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(a: number, b: number) => number
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
add(3, 5);
// ⇒ 8
```
<!-- prettier-ignore-end -->

## Questions

- How to add two values?

# average

Calculates the average of the given array of numbers.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs?: number[]) => number
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
average([2, 4, 15]);
// ⇒ 7
```
<!-- prettier-ignore-end -->

## Questions

- How to compute the average of an array?

# ceilToNearestPowerOfTwo

Finds the nearest power of two greater or equal to the given value.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(x: number) => number
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
ceilToNearestPowerOfTwo(345);
// ⇒ 512
```
<!-- prettier-ignore-end -->

## Questions

- How to get the nearest power of two greater or equal to the given value?

# clamp

Clamps the given value to the given range.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(min: number, max: number) => ((x: number) => number)
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
clamp(0, 10)(5);
// ⇒ 5
```

```javascript
clamp(0, 10)(-5);
// ⇒ 0
```

```javascript
clamp(0, 10)(15);
// ⇒ 10
```
<!-- prettier-ignore-end -->

## Questions

- How to clamp value to the desired range?
- How to enforce a value to be in a given range?

# clampNormal

Clamps the given value to the [0, 1] range.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(x: number) => number
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
clampNormal(0.5);
// ⇒ 0.5
```

```javascript
clampNormal(-0.5);
// ⇒ 0
```

```javascript
clampNormal(1.5);
// ⇒ 1
```
<!-- prettier-ignore-end -->

## Questions

- How to clamp value to be in 0 to 1 inclusive range?
- How to clamp value to be in the normal range?

# clampPercentage

Clamps the given value to the [0, 100] range.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(x: number) => number
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
clampPercentage(50);
// ⇒ 50
```

```javascript
clampPercentage(-50);
// ⇒ 0
```

```javascript
clampPercentage(150);
// ⇒ 100
```
<!-- prettier-ignore-end -->

## Questions

- How to enforce a percentage be between 0% and 100%?

# delta

Calculates the absolute distance between given values.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(a: number, b: number) => number
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
delta(-3, 5);
// ⇒ 8
```
<!-- prettier-ignore-end -->

## Questions

- How to calculate an absolute distance between two numbers?

# inRectangleRange

Checks if the given value is in the rectangular range of [0, width] and [0, height]

## Type signature

<!-- prettier-ignore-start -->
```typescript
(width: number, height: number) => ((x: number, y: number) => boolean)
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
inRectangleRange(50, 100)(25, 50);
// ⇒ true
```

```javascript
inRectangleRange(50, 100)(-25, 50);
// ⇒ false
```
<!-- prettier-ignore-end -->

## Questions

- How to check if a point is inside a rectangle defined by width and height?

# lerp

Linearly interpolates two given values by the normal value of their distance.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(t: number) => ((a: number, b: number) => number)
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
lerp(0.5)(0, 10);
// ⇒ 5
```

```javascript
lerp(0)(0, 10);
// ⇒ 0
```

```javascript
lerp(1)(0, 10);
// ⇒ 10
```
<!-- prettier-ignore-end -->

## Questions

- How to linearly interpolate between two values?
- How to interpolate two numbers?

# maximumBy

Calculates the maximum by a given selector.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(f: (x: number) => number) => ((xs: number[]) => number)
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
maximumBy(({ age }) => age)([{ age: 13 }, { age: 20 }, { age: 7 }, { age: 18 }]);
// ⇒ { age: 20 }
```
<!-- prettier-ignore-end -->

## Questions

- How to find a maximum element by a given function?

# median

Calculates the median of the values. If there is an even number of items, the average of the middle ones is returned.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs?: number[]) => number | undefined
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
median([-5, 3, 2, 29, 43]);
// ⇒ 3
```
<!-- prettier-ignore-end -->

## Questions

- How to compute a median of an array?

# minMax

Calculates the minimum and maximum value of the two given values.

## Type signature

<!-- prettier-ignore-start -->
```typescript
([a, b]: [number, number]) => [number, number]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
minMax([5, 3]);
// ⇒ [3, 5]
```

```javascript
minMax([3, 5]);
// ⇒ [3, 5]
```
<!-- prettier-ignore-end -->

## Questions

- How to get ordered values where the lower is the first and the higher is the second?

# sameSign

Checks if all the given values have the same sign.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: number[]) => boolean
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
sameSign([-1, -2, -3]);
// ⇒ true
```

```javascript
sameSign([1, 2, -3]);
// ⇒ false
```
<!-- prettier-ignore-end -->

## Questions

- How to check if all values have the same sign?

# sign

Calculates the sign of the value and returns -1 for negative values, 1 for positive values and 0 for zeros.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(x: number) => number
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
sign(3);
// ⇒ 1
```

```javascript
sign(-5);
// ⇒ 5
```

```javascript
sign(0);
// ⇒ 0
```

```javascript
sign(-0);
// ⇒ 0
```
<!-- prettier-ignore-end -->

## Questions

- How to get a sign of a number?

# standardDeviation

Calculates the standard deviation of the given array of numbers.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: number[], origin?: number) => number
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
standardDeviation([96, 81, 68, 79, 23, 13, 13, 59, 44, 86]);
// ⇒ (2 * Math.sqrt(10922 / 5)) / 3
```
<!-- prettier-ignore-end -->

## Questions

- How to compute a standard deviation of an array?

# subtract

Subtracts two values.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(a: number, b: number) => number
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
subtract(3, 5);
// ⇒ -2
```
<!-- prettier-ignore-end -->

## Questions

- How to subtract two numbers?
