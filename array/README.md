# any

Checks if the given array is present and it is not empty (contains at least one element).

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs?: any[]) => boolean
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
any([]); // ⇒ false
```

```javascript
any([1, 2, 3]); // ⇒ true
```
<!-- prettier-ignore-end -->

## Questions

- How to check if an array is empty (in JavaScript)?
- How to check if array is empty or null or undefined (in JavaScript)?
- Check if an array is empty or not (in JavaScript).
- Check if an array is empty or exists (in JavaScript).

# are

Checks if given arguments are all `Arrays`.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(...xs: any[]) => boolean
```
<!-- prettier-ignore-end -->

# difference

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any[], ys: any[]) => any[]
```
<!-- prettier-ignore-end -->

# differs

Checks if two arrays are not equal.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs?: any[], ys?: any[]) => boolean
```
<!-- prettier-ignore-end -->

# duplicates

Lists all the duplicated values in the given array.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any[]) => any[]
```
<!-- prettier-ignore-end -->

# empty

Empty array.

## Type signature

<!-- prettier-ignore-start -->
```typescript
any[]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
empty; // ⇒ []
```
<!-- prettier-ignore-end -->

# exact

Takes exactly the given count of elements.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(count: number) => (xs: any[]) => any[]
```
<!-- prettier-ignore-end -->

# except

Filters out the given value.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(y: any) => (xs: any[]) => any[]
```
<!-- prettier-ignore-end -->

# filterInPlace

Filters the given array with the given predicate just like Array.filter but does it in-place thus mutates the original array.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  f: (value: any, index: number, context: any[]) => boolean
) => (xs: any[]) => any[]
```
<!-- prettier-ignore-end -->

# find

Finds an element by a predicate function within given array, otherwise returns the given fallback value or undefined when fallback is not present.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  predicate: (value: any, index: number, context: any[]) => boolean,
  fallback?: any
) => (xs: any[]) => any
```
<!-- prettier-ignore-end -->

# first

Returns the first element or undefined when there are no elements in the given array.

## Type signature

<!-- prettier-ignore-start -->
```typescript
([x]: [any]) => any
```
<!-- prettier-ignore-end -->

# flatMap

Maps and flattens the result.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  f: (value: any, index: number, context: any[]) => any
) => (xs: any[]) => any
```
<!-- prettier-ignore-end -->

# flatten

Flattens the nested arrays by a single level.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any) => any[]
```
<!-- prettier-ignore-end -->

# intersection

Finds common items between both arrays.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any[], ys: any[]) => any[]
```
<!-- prettier-ignore-end -->

# is

## Type signature

<!-- prettier-ignore-start -->
```typescript
(value?: any) => boolean
```
<!-- prettier-ignore-end -->

# last

Returns the last element or undefined when there are no elements in the given array.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any[]) => any
```
<!-- prettier-ignore-end -->

# lengthDiffers

Checks if lengths of given arrays differ.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(a: any[], b: any[]) => boolean
```
<!-- prettier-ignore-end -->

# map

Maps the given array with the given functions.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(...fs: ((x: any) => any)[]) => (xs: any) => any
```
<!-- prettier-ignore-end -->

# midpoint

Returns the middle element or the right one when the number of elements is even.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any[]) => any
```
<!-- prettier-ignore-end -->

# minMax

Computes minimum and maximum of the given array in a single run.

## Type signature

<!-- prettier-ignore-start -->
```typescript
([head, ...tail]: number[]) => number[]
```
<!-- prettier-ignore-end -->

# multiple

Checks if the given array contains more than one element.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any) => boolean
```
<!-- prettier-ignore-end -->

# none

Checks if the given array is empty.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs?: any) => boolean
```
<!-- prettier-ignore-end -->

# partition

Partitions the given array to the ones that pass the given predicate function and the ones that do not. By [convention of the Haskell's Data.Either](http://hackage.haskell.org/package/base-4.12.0.0/docs/Data-Either.html), values that pass the predicate are placed at right.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(predicate: (x: any) => boolean) => (xs: any[]) => any
```
<!-- prettier-ignore-end -->

# range

Generates an array of numbers from 0 to n - 1.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(n: any) => number[]
```
<!-- prettier-ignore-end -->

# repeat

Repeats the given element by given count of times.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(count: number) => (value: any) => any[]
```
<!-- prettier-ignore-end -->

# reverse

Reverses the given array without mutating it (in contrast to Array.reverse).

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any) => any[]
```
<!-- prettier-ignore-end -->

# reverseIf

Reverses the given array when enabled.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(enabled: boolean) => (xs: any) => any
```
<!-- prettier-ignore-end -->

# second

Returns the second element or undefined when there are less than two elements in the given array.

## Type signature

<!-- prettier-ignore-start -->
```typescript
([, x]: any[]) => any
```
<!-- prettier-ignore-end -->

# secondToLast

Returns the second to last element or undefined when there are less than two elements in the given array.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any[]) => any
```
<!-- prettier-ignore-end -->

# shift

Shifts the given array to the left and circulates the elements back by modulo of the array's length.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(count: number) => (xs: any[]) => any[]
```
<!-- prettier-ignore-end -->

# shuffle

Shuffles the given array in random order with Math.random as the default.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any, random?: () => number) => any[]
```
<!-- prettier-ignore-end -->

# shuffleInPlace

Shuffles the given array in-place in random order with Math.random as the default.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any[], random?: () => number) => any[]
```
<!-- prettier-ignore-end -->

# single

Checks if the given array contains exactly one element.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any[]) => boolean
```
<!-- prettier-ignore-end -->

# skip

Skips the given count of elements from the given array.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(count: number) => (xs: any[]) => any[]
```
<!-- prettier-ignore-end -->

# sort

Sorts the given array without mutating it.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  f?: (a: any, b: any) => number
) => (xs: any[]) => any[]
```
<!-- prettier-ignore-end -->

# sum

Sums the given array of numbers.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: number[]) => number
```
<!-- prettier-ignore-end -->

# take

Takes up to given count of elements.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(count: number) => (xs: any[]) => any[]
```
<!-- prettier-ignore-end -->

# unique

Returns only unique elements of the given array.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any[]) => any[]
```
<!-- prettier-ignore-end -->

# zip

Zips given arrays together into pairs.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any[], ys: any[]) => any[][]
```
<!-- prettier-ignore-end -->

# zipWith

Zips given arrays together with the given function.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  f?: (x: any, y: any) => any[]
) => (xs: any[], ys: any[]) => any[][]
```
<!-- prettier-ignore-end -->
