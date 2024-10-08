# std

[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors)

## Installation

```sh
npm install @sandstreamdev/std
```

## Documentation

<!-- DOCS:START - Do not remove or modify this section -->

### array

#### any

Checks if the given array is present and it is not empty (contains at least one element).

##### Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(xs?: T[]) => boolean
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
any([]);
// ⇒ false
```

```javascript
any([1, 2, 3]);
// ⇒ true
```
<!-- prettier-ignore-end -->

##### Questions

- How to check if an array is empty?
- How to check if an array is empty or null or undefined?
- How to check if an array is empty or not?
- How to check if an array is empty or doesn't exist?

#### are

Checks if the given arguments are all `Arrays`.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(...xs: T[]) => boolean
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
are([2, 3]);
// ⇒ true
```

```javascript
are([1, 2, 3], []);
// ⇒ true
```

```javascript
are([1, 2, 3], 8, [1, 3], "test");
// ⇒ false
```
<!-- prettier-ignore-end -->

##### Questions

- How to check if all the given values are arrays?

#### chunk

Splits the given array into an array of chunks of up to the given length.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(count: number) => <T>(xs: T[]) => T[] | T[][]
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
chunk(2)(['a', 'b', 'c', 'd']);
// ⇒ [['a', 'b'], ['c', 'd']]
```

```javascript
chunk(3)(['a', 'b', 'c', 'd']);
// ⇒ [['a', 'b', 'c'], ['d']]
```
<!-- prettier-ignore-end -->

##### Questions

- How to split an array into chunks?
- How to split an array into chunks of the same size?

#### difference

Computes a set difference between the two given arrays.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(xs: T[], ys: T[]) => T[]
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
difference([1, 2, 3, 4, 5, 6], [2, 4]);
// ⇒ [1, 3, 5, 6]
```
<!-- prettier-ignore-end -->

##### Questions

- How to find elements which are present in the first array and not in the second?

#### differs

Checks if two arrays are not equal.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(xs?: T[], ys?: T[]) => boolean
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
differs([1, 2, 3], [1, 2]);
// ⇒ true
```

```javascript
differs([1, 2, 3], [1, 2, 3]);
// ⇒ false
```
<!-- prettier-ignore-end -->

##### Questions

- How to check if two arrays differ?
- How to check if two arrays are not equal?
- How to check if two arrays are equal or not?

#### duplicates

Lists all the duplicated values in the given array.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(xs: T[]) => T[]
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
duplicates([1, 2, 3, 4, 3, 4, 3, 6]);
// ⇒ [3, 4, 3]
```
<!-- prettier-ignore-end -->

##### Questions

- How to find duplicates in an array?

#### empty

Empty array.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
unknown[]
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
empty;
// ⇒ []
```
<!-- prettier-ignore-end -->

##### Questions

- How to get an empty array?

#### exact

Takes exactly the given count of elements.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(count: number) => <T>(xs: T[]) => T[]
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
exact(5)([1, 2, 3]);
// ⇒ [1, 2, 3, undefined, undefined]
```

```javascript
exact(2)([1, 2, 3]);
// ⇒ [1, 2]
```
<!-- prettier-ignore-end -->

##### Questions

- How to get exactly N elements out of an array?

#### except

Filters out the given value.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(y: T) => (xs: T[]) => T[]
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
except(2)([1, 2, 3, 4, 5]);
// ⇒ [1, 3, 4, 5]
```

```javascript
except(2)([1, 2, 2, 4, 2]);
// ⇒ [1, 4]
```
<!-- prettier-ignore-end -->

##### Questions

- How to get all the values of an array except the given one?

#### filterInPlace

Filters the given array with the given predicate just like Array.filter but does it in-place thus mutates the original array.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(f: (value: T, index: number, context: T[]) => boolean) => (xs: T[]) => T[]
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
const xs = [1, 2, 3, 4, 5, 6, 7];
const odd = x => x % 2 === 1;

const ys = filterInPlace(odd)(xs);

ys === xs;
// ⇒ true
ys;
// ⇒ [1, 3, 5, 7]
```
<!-- prettier-ignore-end -->

##### Questions

- How to filter an array in place?

#### find

Finds an element by a predicate function within the given array, otherwise, it returns the given fallback value or undefined when fallback is not present.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(predicate: (value: T, index: number, context: T[]) => boolean, fallback?: T) => (xs: T[]) => T
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
find(x => x > 2)([1, 2, 3, 5, 7]);
// ⇒ 3
```

```javascript
find(x => x > 2)([1, 2, -3, -5, -7]);
// ⇒ undefined
```
<!-- prettier-ignore-end -->

##### Questions

- How to find an element of an array by a given predicate?

#### first

Returns the first element or undefined when there are no elements in the given array.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
<T>([x]: T[]) => T | undefined
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
first([1, 2, 3]);
// ⇒ 1
```

```javascript
first([]);
// ⇒ undefined
```
<!-- prettier-ignore-end -->

##### Questions

- How to get the first element of an array?

#### flatMap

Maps and flattens the result.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
<T, TResult>(f: (value: T, index: number, context: T[]) => TResult[]) => (xs: T[]) => TResult[]
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
flatMap(text => [...text])(["test", "123"]);
// ⇒ ["t", "e", "s", "t", "1", "2", "3"]
```
<!-- prettier-ignore-end -->

##### Questions

- How to flat map an array?
- How to map and then flatten an array?

#### flatten

Flattens the nested arrays by a single level.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(xs: T[]) => T[]
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
flatten([1, [2, 3], 4, [5, 6]]);
// ⇒ [1, 2, 3, 4, 5, 6]
```

```javascript
flatten([1, [2, [3, 6]], 4, [5, 6]]);
// ⇒ [1, 2, [3, 6], 4, 5, 6]
```
<!-- prettier-ignore-end -->

##### Questions

- How to flatten an array?

#### insert

Inserts the given item to the array at a specific index.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(index: number) => <T>(item: T) => ([...xs]: T[]) => T[]
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
insert(0)('d')(['a', 'b', 'c']);
// ⇒ ['d', 'a', 'b', 'c']
```

```javascript
insert(1)('d')(['a', 'b', 'c']);
// ⇒ ['a', 'd', 'b', 'c']
```
<!-- prettier-ignore-end -->

##### Questions

- How to insert an element to an array at a given position?

#### intersection

Finds common elements between both arrays.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(xs: T[], ys: T[]) => T[]
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
intersection([1, 2, 3, 4, 5], [5, 5, 3, 2]);
// ⇒ [2, 3, 5]
```
<!-- prettier-ignore-end -->

##### Questions

- How to find common elements present in both arrays?

#### is

Checks if the given argument is an array.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(value?: unknown) => boolean
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
is([1, 2, 3]);
// ⇒ true
```

```javascript
is({ a: 5 });
// ⇒ false
```
<!-- prettier-ignore-end -->

##### Questions

- How to check if a value is an array?

#### last

Returns the last element or undefined when there are no elements in the given array.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(xs: T[]) => T | undefined
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
last([1, 2, 3]);
// ⇒ 3
```

```javascript
last([]);
// ⇒ undefined
```
<!-- prettier-ignore-end -->

##### Questions

- How to get the last element of an array?

#### length

Returns the number of elements in the given array.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(xs: T[]) => number
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
length([true, 1]);
// ⇒ 2
```

```javascript
length([1, 2, 3]);
// ⇒ 3
```

```javascript
length([]);
// ⇒ 0
```
<!-- prettier-ignore-end -->

##### Questions

- How to check an array's length?
- How to compute an array's length?
- How to check the size of an array?
- How to check the number of elements in an array?

#### lengthDiffers

Checks if lengths of the given arrays differ.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
<T1, T2>(a: T1[], b: T2[]) => boolean
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
lengthDiffers([1, 2, 3], [1, 2]);
// ⇒ true
```

```javascript
lengthDiffers([6, 7], [1, 2]);
// ⇒ false
```
<!-- prettier-ignore-end -->

##### Questions

- How to check if array lengths differ?
- How to check if the given arrays have different lengths?

#### map

Maps the given array with the given functions.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(...fs: ((x: T) => T)[]) => (xs: T[]) => T[]
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
map(x => x * x)([1, 2, 3]);
// ⇒ [1, 4, 9]
```

```javascript
map(x => x * x, x => x + 1)([1, 2, 3]);
// ⇒ [2, 5, 10]
```
<!-- prettier-ignore-end -->

##### Questions

- How to map an array?

#### midpoint

Returns the middle element or the right one when the number of elements is even.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(xs: T[]) => T | undefined
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
midpoint([1, 2, 3, 4, 5]);
// ⇒ 3
```

```javascript
midpoint([1, 2, 3, 4]);
// ⇒ 3
```
<!-- prettier-ignore-end -->

##### Questions

- How to get the element in the middle of an array?
- How to get the middle element of an array?

#### minMax

Computes minimum and maximum values of the given array in a single run.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: number[]) => number[]
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
minMax([10, 5, 3, -5, -4, 23, 32, 8, 1, 0]);
// ⇒ [-5, 32]
```

```javascript
minMax([1]);
// ⇒ [1, 1]
```

```javascript
minMax([]);
// ⇒ [undefined, undefined]
```
<!-- prettier-ignore-end -->

##### Questions

- How to find the minimum and maximum values of an array?
- How to get the min/max element of an array?

#### multiple

Checks if the given array contains more than one element.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(xs: T[]) => boolean
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
multiple([1, 2, 3]);
// ⇒ true
```

```javascript
multiple([1, 2]);
// ⇒ true
```

```javascript
multiple([1]);
// ⇒ false
```

```javascript
multiple([]);
// ⇒ false
```
<!-- prettier-ignore-end -->

##### Questions

- How to check if an array contains multiple elements?
- How to check whether multiple values exist within an array?

#### none

Checks if the given array is empty.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(xs?: T[]) => boolean
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
none([]);
// ⇒ true
```

```javascript
none([1, 2, 3]);
// ⇒ false
```
<!-- prettier-ignore-end -->

##### Questions

- How to check if an array is empty?

#### partition

Partitions the given array to the ones that pass the given predicate function and the ones that do not. By [convention of the Haskell's Data.Either](http://hackage.haskell.org/package/base-4.12.0.0/docs/Data-Either.html), values that pass the predicate are placed at the right.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(predicate: (x: T) => boolean) => (xs: T[]) => readonly [T[], T[]]
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
partition(x => x % 2 === 1)([1, 2, 3, 4, 5]);
// ⇒ [[2, 4], [1, 3, 5]])
```
<!-- prettier-ignore-end -->

##### Questions

- How to partition an array based on a condition?
- How to divide an array by a filter function?

#### pop

Returns the given array without the last element.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(xs: T[]) => T[]
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
pop([1, 2, 3, 4]); // ⇒ [1, 2, 3]
```

```javascript
pop([]); // ⇒ []
```
<!-- prettier-ignore-end -->

##### Questions

- How to get an array without the last element?
- How to remove the last element from an array?

#### range

Generates an array of numbers from 0 to n - 1.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(n: number) => number[]
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
range(3);
// ⇒ [0, 1, 2]
```
<!-- prettier-ignore-end -->

##### Questions

- How to create an array of all integers from 0 to N exclusive?

#### removeAt

Removes an element at the given index from the given array.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(index: number) => <T>(xs: T[]) => T[]
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
removeAt(3)([1, 2, 3, 4, 5, 6])
// ⇒ [1, 2, 3, 5, 6]
```
<!-- prettier-ignore-end -->

##### Questions

- How to remove an item from an array at a particular index?

#### repeat

Repeats the given element by the given count of times.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(count: number) => <T>(value: T) => T[]
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
repeat(3)("test");
// ⇒ ["test", "test", "test"]
```
<!-- prettier-ignore-end -->

##### Questions

- How to repeat a value N times?

#### reverse

Reverses the given array without mutating it (in contrast to Array.reverse).

##### Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(xs: T[]) => T[]
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
reverse([1, 2, 3, 4, 5]);
// ⇒ [5, 4, 3, 2, 1]
```
<!-- prettier-ignore-end -->

##### Questions

- How to reverse an array without mutating it?

#### reverseIf

Reverses the given array when enabled.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(enabled: boolean) => <T>(xs: T[]) => T[]
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
reverseIf(true)([1, 2, 3, 4, 5]);
// ⇒ [5, 4, 3, 2, 1]
```

```javascript
reverseIf(false)([1, 2, 3, 4, 5]);
// ⇒ [1, 2, 3, 4, 5]
```
<!-- prettier-ignore-end -->

##### Questions

- How to reverse an array without mutating it only when a condition is satisfied?

#### second

Returns the second element or undefined when there are less than two elements in the given array.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(xs: T[]) => T | undefined
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
second([1, 2, 3, 4, 5]);
// ⇒ 2
```

```javascript
second([1]);
// ⇒ undefined
```

```javascript
second([]);
// ⇒ undefined
```
<!-- prettier-ignore-end -->

##### Questions

- How to get the second element of an array?

#### secondToLast

Returns the second to last element or undefined when there are less than two elements in the given array.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(xs: T[]) => T | undefined
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
secondToLast([1, 2, 3, 4, 5]);
// ⇒ 4
```

```javascript
secondToLast([1]);
// ⇒ undefined
```

```javascript
secondToLast([]);
// ⇒ undefined
```
<!-- prettier-ignore-end -->

##### Questions

- How to get the second to last element of an array?

#### shift

Shifts the given array to the left and circulates the elements back by modulo of the array's length.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(count: number) => <T>(xs: T[]) => T[]
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
shift(1)([1, 2, 3, 4, 5]);
// ⇒ [2, 3, 4, 5, 1]
```

```javascript
shift(2)([1, 2, 3, 4, 5]);
// ⇒ [3, 4, 5, 1, 2]
```

```javascript
shift(3)([1, 2, 3, 4, 5]);
// ⇒ [4, 5, 1, 2, 3]
```
<!-- prettier-ignore-end -->

##### Questions

- How to shift an array?

#### shuffle

Shuffles the given array in random order with Math.random as the default.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(xs: T[], random?: () => number) => T[]
```
<!-- prettier-ignore-end -->

##### Examples

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

shuffle([1, 2, 3, 4, 5], random); // => [3, 5, 4, 2, 1]
```
<!-- prettier-ignore-end -->

##### Questions

- How to shuffle an array?

#### shuffleInPlace

Shuffles the given array in-place in random order with Math.random as the default.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(xs: T[], random?: () => number) => T[]
```
<!-- prettier-ignore-end -->

##### Examples

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

##### Questions

- How to shuffle an array in place?

#### single

Checks if the given array contains exactly one element.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(xs: T[]) => boolean
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
single([1]);
// ⇒ true
```

```javascript
single([1, 2, 3]);
// ⇒ false
```

```javascript
single([]);
// ⇒ false
```
<!-- prettier-ignore-end -->

##### Questions

- How to check if an array contains only one element?

#### skip

Skips the given count of elements from the given array.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(count: number) => <T>(xs: T[]) => T[]
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
skip(2)([1, 2, 3, 4, 5]);
// ⇒ [3, 4, 5]
```
<!-- prettier-ignore-end -->

##### Questions

- How to skip the first few elements of an array?

#### slidingWindow

Returns a new array composed of tuples of the given sliding window length of consecutive elements.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(count: number) => <T>(xs: T[]) => T[][]
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
slidingWindow(2)([1, 2, 3, 4]);
// ⇒ [[1, 2], [2, 3], [3, 4]]
```

```javascript
slidingWindow(3)([1, 2, 3, 4, 5]);
// ⇒ [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
```

```javascript
slidingWindow(1)([1, 2, 3, 4, 5, 6]);
// ⇒ [[1], [2], [3], [4], [5], [6]]
```
<!-- prettier-ignore-end -->

##### Questions

- How to iterate an array pairwise?

#### sort

Sorts the given array without mutating it.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(f?: (a: T, b: T) => number) => (xs: T[]) => T[]
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
sort((a, b) => a - b)([13, 79, 20, 69, 44, 67, 18, 95, 26, 55]);
// ⇒ [13, 18, 20, 26, 44, 55, 67, 69, 79, 95]
```
<!-- prettier-ignore-end -->

##### Questions

- How to sort an array without mutating it?

#### sum

Sums the given array of numbers.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: number[]) => number
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
sum([1, 2, 3, 4, 5]);
// ⇒ 15
```
<!-- prettier-ignore-end -->

##### Questions

- How to sum elements of an array?

#### take

Takes up to a given count of elements.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(count: number) => <T>(xs: T[]) => T[]
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
take(2)([1, 2, 3, 4, 5]);
// ⇒ [1, 2]
```

```javascript
take(10)([1, 2, 3, 4, 5]);
// ⇒ [1, 2, 3, 4, 5]
```
<!-- prettier-ignore-end -->

##### Questions

- How to get the first N number of elements from an array?

#### unique

Returns unique elements of the given array.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(xs: T[]) => T[]
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
unique([1, 2, 3, 4, 3, 4, 3, 6]);
// ⇒ [1, 2, 3, 4, 6]
```
<!-- prettier-ignore-end -->

##### Questions

- How to find all unique values in an array?

#### uniqueBy

Filters out duplicated values based on the result of the given key selector.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
<T, TResult>(f: (x: T) => TResult) => (xs: T[]) => T[]
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
uniqueBy(({ id }) => id)([
  { id: 1, value: 'a' },
  { id: 2, value: 'b' },
  { id: 1, value: 'c' }
])
// ⇒ [{ id: 1, value: 'c' }, { id: 2, value: 'b' }]
```
<!-- prettier-ignore-end -->

##### Questions

- How to find all unique values in an array by some predicate?

#### zip

Zips the given arrays together into pairs.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: unknown[], ys: unknown[]) => [unknown, unknown][]
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
zip([1, 2, 3], [4, 5, 6]);
// ⇒ [[1, 4],[2, 5],[3, 6]]
```
<!-- prettier-ignore-end -->

##### Questions

- How to zip two arrays?

#### zipN

Zips the given arrays together into pairs.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(...xs: T[][]) => T[][]
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
zipN([1, 2, 3], [4, 5, 6]);
// ⇒ [[1, 4], [2, 5], [3, 6]]
```

```javascript
zipN([1, 2, 3], [4, 5, 6], [7, 8, 9]);
// ⇒ [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
```

```javascript
zipN([1, 2], [4, 5, 6], [7, 8, 9]);
// ⇒ [[1, 4, 7],[2, 5, 8]]
```
<!-- prettier-ignore-end -->

##### Questions

- How to zip multiple arrays?

#### zipWith

Zips the given arrays together with the given function.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
<T1, T2>(f?: (x: T1, y: T2) => [T1, T2]) => (xs: T1[], ys: T2[]) => [T1, T2][]
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
zipWith((x, y) => x * x + y)([1, 2, 3], [4, 5, 6]);
// ⇒ [5, 9, 15]
```
<!-- prettier-ignore-end -->

##### Questions

- How to zip two arrays with a given function?

### async

#### debounce

Makes the function run after the given period of not being called. Useful to delay input submission for auto-complete etc.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(f: F, wait: number) => (...args: unknown[]) => void
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
const f = () => console.log("Test");

const debounced = debounce(f, 2000);

debounced();
setTimeout(debounced, 1000);
setTimeout(debounced, 3000);
```
<!-- prettier-ignore-end -->

##### Questions

- How to make function fire after some time not being called?
- How to debounce input events?
- How to debounce a function?

#### delay

When awaited, delays the execution by the given number of milliseconds.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(duration: number) => Promise<unknown>
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
delay(2000)(() => console.log("Test"));
```
<!-- prettier-ignore-end -->

##### Questions

- How to delay a function?
- What is the JavaScript version of sleep()?

#### sequence

Runs the given tasks in a sequence.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(tasks: Task<T>[]) => Promise<Awaited<T>[]>
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
const f = () => new Promise(resolve => setTimeout(resolve, 1000));
const g = () => new Promise(resolve => setTimeout(resolve, 2000));

sequence([f, g]).then(() => console.log("Done"));
```
<!-- prettier-ignore-end -->

##### Questions

- How to run async tasks sequentially?

### date

#### clamp

Clamps the given date to the given date range.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(min: Date, max: Date) => (date: Date) => Date
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
const date = new Date("2019-06-15T13:54:33.232Z");
const min = new Date("2019-02-23T13:54:33.232Z");
const max = new Date("2019-03-13T13:54:33.232Z");

clamp(min, max)(date);
// => new Date("2019-03-13T13:54:33.232Z")
```
<!-- prettier-ignore-end -->

##### Questions

- How to clamp a date to the desired date range?
- How to enforce a date to be in a given date range?

#### clone

Clones the given Date object.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(date: Date) => Date
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
const date = new new Date("2019-04-24T13:54:33.232Z");
const cloned = clone(date);

cloned !== date && cloned.valueOf() === date.valueOf();
// ⇒ true
```
<!-- prettier-ignore-end -->

##### Questions

- How to clone a Date object?

#### dateDiff

Computes a signed difference between two Date objects as milliseconds.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(a: Date, b: Date) => number
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
dateDiff(new Date("2017-01-01T13:00:00.000Z"), new Date("2017-01-01T12:00:00.000Z"));
// ⇒ 3600000
```
<!-- prettier-ignore-end -->

##### Questions

- How to compute Date difference?

#### dateInRange

Checks if the given date is between the given date range (inclusive).

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(from: Date, to: Date) => (date: Date) => boolean
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
dateInRange(new Date("2018-06-10T12:00:00.000Z"), new Date("2018-06-20T12:00:00.000Z"))(new Date("2018-06-15T12:00:00.000Z"));
// ⇒ true
```
<!-- prettier-ignore-end -->

##### Questions

- How to check if a date is within a given date range?

#### dayRange

Returns a local day range at a particular Date.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(date: Date) => Date[]
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
const date = new Date("2018-12-31T13:54:33.232Z");

dayRange(date);
// ⇒ [startOfDay(date), endOfDay(date)]
```
<!-- prettier-ignore-end -->

##### Questions

- How to find a date range of a given day?

#### daysInMonths

Returns an array of days in a particular months. Number of days in February varies if it is a leap year or not.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(leapYear: boolean) => [number, number, number, number, number, number, number, number, number, number, number, number]
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
daysInMonths(false);
// ⇒ [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
```

```javascript
daysInMonths(true);
// ⇒ [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
```
<!-- prettier-ignore-end -->

##### Questions

- How to find out how many days are in a particular month?
- How to find out how many days there are in a leap year?

#### daysInYear

Calculates the number of days in a particular year. Varies by the leap year.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(year: number) => 366 | 365
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
daysInYear(2019);
// ⇒ 365
```

```javascript
daysInYear(2020);
// ⇒ 366
```
<!-- prettier-ignore-end -->

##### Questions

- How many days are in a particular year?
- How many days are in a leap year?
- How many days are in a common year?

#### displayTime

Displays padded time string.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(source: [number, number, number], showSeconds: boolean) => string
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
displayTime([5, 12, 16], false);
// ⇒ 05:12
```

```javascript
displayTime([5, 12, 16], true);
// ⇒ 05:12:16
```
<!-- prettier-ignore-end -->

##### Questions

- How to display padded time?

#### endOfDay

Returns a local Date of an end of the day at a particular Date.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(date: Date) => Date
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
endOfDay(new Date("2018-12-31T13:54:33.232Z"));
// ⇒ new Date(new Date("2019-01-01T00:00:00.000Z").valueOf() + new Date("2018-12-31T13:54:33.232Z").getTimezoneOffset() * 60 * 1000)
```
<!-- prettier-ignore-end -->

##### Questions

- How to find a date of an end of a given day?

#### formatDate

Formats a given date as a simple YYYY-MM-DD string.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(date: Date) => string
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
formatDate(new Date("2019-02-24T01:12:34"));
// ⇒ "2019-02-24"
```
<!-- prettier-ignore-end -->

##### Questions

- How to render a date in a YYYY-MM-DD format?

#### formatDateTime

Formats a given date as a simple YYYY-MM-DD HH:MM(:SS) string.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(sourceDate: Date, showSeconds?: boolean) => string
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
formatDateTime(new Date("2019-02-24T01:12:34"));
// ⇒ "2019-02-24 01:12"
```

```javascript
formatDateTime(new Date("2019-02-24T01:12:34"), true);
// ⇒ "2019-02-24 01:12:34"
```
<!-- prettier-ignore-end -->

##### Questions

- How to render a date in a YYYY-MM-DD HH:MM format?
- How to render a date in a YYYY-MM-DD HH:MM:SS format?

#### formatDuration

Formats a duration in milliseconds to a padded time string.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(duration: number, showSeconds?: boolean) => string
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
formatDuration(26100000);
// ⇒ 07:15
```

```javascript
formatDuration(26136000, true);
// ⇒ 07:15:36
```
<!-- prettier-ignore-end -->

##### Questions

- How to render a formatted duration?

#### formatTime

Formats a given date as a simple HH:MM(:SS) string.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(date: Date, showSeconds?: boolean) => string
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
formatTime(new Date("2019-02-24T01:12:34"));
// ⇒ "01:12"
```

```javascript
formatTime(new Date("2019-02-24T01:12:34"), true);
// ⇒ "01:12:34"
```
<!-- prettier-ignore-end -->

##### Questions

- How to render a date in a HH:MM format?
- How to render a date in a HH:MM:SS format?

#### fromDays

Converts the given day count to milliseconds.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(days: number) => number
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
fromDays(1);
// ⇒ 86400000
```
<!-- prettier-ignore-end -->

##### Questions

- How to find how many milliseconds are in a given number of days?

#### fromHours

Converts the given hour count to milliseconds.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(hours: number) => number
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
fromHours(1);
// ⇒ 3600000
```
<!-- prettier-ignore-end -->

##### Questions

- How to find how many milliseconds are in a given number of hours?

#### fromMinutes

Converts the given minute count to milliseconds.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(minutes: number) => number
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
fromMinutes(1);
// ⇒ 60000
```
<!-- prettier-ignore-end -->

##### Questions

- How to find how many milliseconds are in a given number of minutes?

#### fromSeconds

Converts the given second count to milliseconds.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(seconds: number) => number
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
fromSeconds(1);
// ⇒ 1000
```
<!-- prettier-ignore-end -->

##### Questions

- How to find how many milliseconds are in a given number of seconds?

#### joinDateTime

Joins a date-time pair into a date-time string.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(date: string, time: string) => string
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
joinDateTime("2019-01-15", "13:54:33.232Z");
// ⇒ "2019-01-15T13:54:33.232Z"
```
<!-- prettier-ignore-end -->

##### Questions

- How to join date and time to get ISO-compliant date-time string?

#### leapYear

Detects if a given year is a leap year.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(year: number) => boolean
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
leapYear(2020);
// ⇒ true
```

```javascript
leapYear(2019);
// ⇒ false
```
<!-- prettier-ignore-end -->

##### Questions

- How to find if the given year is a leap year?

#### parseHourMinutePair

Parses HH:MM string into hours and minutes.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(text?: string) => [number, number]
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
parseHourMinutePair("12:34");
// ⇒ [12, 34]
```
<!-- prettier-ignore-end -->

##### Questions

- How to parse time string into hours and minutes?

#### splitDateTime

Splits a date-time string into a date-time pair.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(dateTimeString: string) => [string, string]
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
splitDateTime("2019-01-15T13:54:33.232Z");
// ⇒ ["2019-01-15", "13:54:33.232Z"]
```
<!-- prettier-ignore-end -->

##### Questions

- How to split ISO-compliant date-time string into a date and time pair?

#### startOfDay

Returns a local Date of a start of the day at a particular Date.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(date: Date) => Date
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
endOfDay(new Date("2019-01-01T13:54:33.232Z"));
// ⇒ new Date(new Date("2019-01-01T00:00:00.000Z").valueOf() + new Date("2019-01-01T13:54:33.232Z").getTimezoneOffset() * 60 * 1000)
```
<!-- prettier-ignore-end -->

##### Questions

- How to find a date of the start of a given day?

#### subtractDays

Subtracts the given number of days from the given Date object.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(sourceDate: Date, numberOfDays: number) => Date
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
subtractDays(new Date("2019-01-15T13:54:33.232Z"), 1);
// ⇒ new Date("2019-01-14T13:54:33.232Z")
```
<!-- prettier-ignore-end -->

##### Questions

- How to subtract days from a given date?

#### toDate

Extracts padded YYYY-MM-DD date string out of the given date object.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(date: Date) => string
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
toDate(new Date("2019-01-15T12:00:00.000Z"));
// ⇒ "2019-01-15"
```
<!-- prettier-ignore-end -->

##### Questions

- How to get only the date from a Date object?

#### toDates

Converts the given array of values into Dates using the Date constructor.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: (string | number | Date)[]) => Date[]
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
toDates(["2019-01-15T13:54:33.232Z", new Date("2019-01-15T13:54:33.232Z").valueOf(), new Date("2019-01-15T13:54:33.232Z")]);
// ⇒ [new Date("2019-01-15T13:54:33.232Z"), new Date("2019-01-15T13:54:33.232Z"), new Date("2019-01-15T13:54:33.232Z")]
```
<!-- prettier-ignore-end -->

##### Questions

- How to convert an array of string and timestamps into an array of Date objects?

#### toDays

Converts milliseconds into days.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(milliseconds: number) => number
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
toDays(86400000);
// ⇒ 1
```
<!-- prettier-ignore-end -->

##### Questions

- How to convert milliseconds into days?

#### toHours

Converts milliseconds into hours.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(milliseconds: number) => number
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
toHours(3600000);
// ⇒ 1
```
<!-- prettier-ignore-end -->

##### Questions

- How to convert milliseconds into hours?

#### toISO

Returns an ISO-compliant date-time string.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(x: Date) => string
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
toISO(new Date("2019-04-24T13:54:33.232Z"));
// ⇒ "2019-04-24T13:54:33.232Z"
```
<!-- prettier-ignore-end -->

##### Questions

- How to convert Date object to ISO-compliant date string?

#### toMinutes

Converts milliseconds into minutes.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(milliseconds: number) => number
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
toMinutes(60000);
// ⇒ 1
```
<!-- prettier-ignore-end -->

##### Questions

- How to convert milliseconds into minutes?

#### toSeconds

Converts milliseconds into seconds.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(milliseconds: number) => number
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
toSeconds(1000);
// ⇒ 1
```
<!-- prettier-ignore-end -->

##### Questions

- How to convert milliseconds into seconds?

#### valid

Checks if the given date is present and it is valid.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(date?: unknown) => boolean
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
valid(new Date("2020-01-31T09:52:31.618Z"));
// ⇒ true
```

```javascript
valid(new Date("2020-01-42:52:31.618Z"));
// ⇒ false
```

```javascript
valid(new Date("test"));
// ⇒ false
```

```javascript
valid(undefined);
// ⇒ false
```
<!-- prettier-ignore-end -->

##### Questions

- How to check if a Date is valid or not?

### debug

#### assert

Asserts given conditions.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(condition: boolean, callbackOrMessage?: (() => void) | string) => void;
export declare const throws: (f: () => void) => unknown | undefined;
export declare const assertNumber: (x?: unknown) => void;
export declare const assertInteger: (x?: unknown) => void;
export declare const assertByte: (x?: unknown) => void;
export declare const assertNormal: (x?: unknown) => void;
export declare const assertString: (x?: unknown, message?: string) => void;
export declare const assertIsDefined: (x?: unknown, message?: string) => void;
export default assert
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
assert(true === false);
// ⇒ TypeError("Assertion failed!")
```
<!-- prettier-ignore-end -->

##### Questions

- How to assert a condition?
- How to throw when a condition is not satisfied?

#### diff

Computes a deep difference between the two values (primitives, objects, arrays, etc.).

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(obj1?: unknown, obj2?: unknown) => DiffResult;
export default diff
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
diff({ a: 1 }, { a: 2 });
// ⇒ { a: { data: [1, 2], type: '~' }}
```
<!-- prettier-ignore-end -->

##### Questions

- How to compute a diff?
- How to compute a deep diff?
- How to compute a diff between two objects?
- How to compute a diff between two arrays?

### encoding

#### base64url

##### decode

Decodes the given Base64URL back into a string.

###### Type signature

<!-- prettier-ignore-start -->
```typescript
(text: string, context?: DecodeContext) => string
```
<!-- prettier-ignore-end -->

###### Examples

<!-- prettier-ignore-start -->
```javascript
decode("PDw_Pz8-Pg");
// ⇒ "<<???>>"
```
<!-- prettier-ignore-end -->

###### Questions

- How to decode Base64URL?

##### decodeBytes

Decodes the given Base64URL back into a byte array.

###### Type signature

<!-- prettier-ignore-start -->
```typescript
(text: string, context?: DecodeContext) => number[]
```
<!-- prettier-ignore-end -->

###### Examples

<!-- prettier-ignore-start -->
```javascript
decodeBytes("w4Jnw6vCp20-bBsQfA");
// ⇒ [0xc2, 0x67, 0xeb, 0xa7, 0x6d, 0x3e, 0x6c, 0x1b, 0x10, 0x7c]
```
<!-- prettier-ignore-end -->

###### Questions

- How to decode Base64URL into a byte array?

##### encode

Encodes the given string into Base64URL.

###### Type signature

<!-- prettier-ignore-start -->
```typescript
(text: string, context?: EncodeContext) => string
```
<!-- prettier-ignore-end -->

###### Examples

<!-- prettier-ignore-start -->
```javascript
encode("<<???>>");
// ⇒ "PDw_Pz8-Pg"
```
<!-- prettier-ignore-end -->

###### Questions

- How to encode a string as Base64URL?

##### encodeBytes

Encodes the given bytes into Base64URL.

###### Type signature

<!-- prettier-ignore-start -->
```typescript
(bytes: number[], context?: EncodeContext) => string
```
<!-- prettier-ignore-end -->

###### Examples

<!-- prettier-ignore-start -->
```javascript
encodeBytes([0xc2, 0x67, 0xeb, 0xa7, 0x6d, 0x3e, 0x6c, 0x1b, 0x10, 0x7c]);
// ⇒ "w4Jnw6vCp20-bBsQfA"
```
<!-- prettier-ignore-end -->

###### Questions

- How to encode bytes as Base64URL?

##### fromBase64

Converts Base64 string into Base64URL one.

###### Type signature

<!-- prettier-ignore-start -->
```typescript
(base64: string) => string
```
<!-- prettier-ignore-end -->

###### Examples

<!-- prettier-ignore-start -->
```javascript
fromBase64("PDw/Pz8+Pg==");
// ⇒ "PDw_Pz8-Pg"
```
<!-- prettier-ignore-end -->

###### Questions

- How to convert Base64 to Base64URL?

##### toBase64

Converts Base64URL string into Base64 one.

###### Type signature

<!-- prettier-ignore-start -->
```typescript
(base64Url: string) => string
```
<!-- prettier-ignore-end -->

###### Examples

<!-- prettier-ignore-start -->
```javascript
toBase64("PDw_Pz8-Pg");
// ⇒ "PDw/Pz8+Pg=="
```
<!-- prettier-ignore-end -->

###### Questions

- How to convert Base64URL to Base64?

#### byteString

##### from

Converts a string to a byte array.

###### Type signature

<!-- prettier-ignore-start -->
```typescript
(byteString: string) => number[]
```
<!-- prettier-ignore-end -->

###### Examples

<!-- prettier-ignore-start -->
```javascript
from("PQR");
// ⇒ [80, 81, 82]
```
<!-- prettier-ignore-end -->

###### Questions

- How to convert a string into a byte array?

##### to

Coverts a byte array into a string.

###### Type signature

<!-- prettier-ignore-start -->
```typescript
(bytes: number[]) => string
```
<!-- prettier-ignore-end -->

###### Examples

<!-- prettier-ignore-start -->
```javascript
to([0x50, 0x51, 0x52]);
// ⇒ "PQR"
```
<!-- prettier-ignore-end -->

###### Questions

- How to convert a byte array to string?

### file

#### validName

Checks if the given string is a valid Windows file name.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(name: string) => boolean
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
validName("my:file.png");
// ⇒ false
```

```javascript
validName("file.txt");
// ⇒ true
```

```javascript
validName("../file.txt");
// ⇒ false
```

```javascript
validName("COM1");
// ⇒ false
```
<!-- prettier-ignore-end -->

##### Questions

- How to find valid Windows file name?
- How to check if a given string is a legal/valid file name under Windows?

### function

#### compose

Composes multiple functions into a higher-order one. Goes right to left.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
<T, TResult>(...fs: ((x: T) => T)[]) => (x: T) => T
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
compose(x => x * x, x => x + 1)(3);
// ⇒ 16
```
<!-- prettier-ignore-end -->

##### Questions

- How to compose functions?

#### constant

Returns the given constant no matter the input.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(x: T) => () => T
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
constant(3)("anything");
// ⇒ 3
```
<!-- prettier-ignore-end -->

##### Questions

- How to create a function that always returns the same value despite given arguments?

#### identity

Always return the given value.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(x: T) => T
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
identity(5);
// ⇒ 5
```

```javascript
identity("test");
// ⇒ "test"
```
<!-- prettier-ignore-end -->

##### Questions

- How to use the identity function?
- Where and why is identity function useful?

#### memoize

Memoizes the function result so it is not computed for the same parameters. Uses deep equality.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
<TResult>(f: (...xs: unknown[]) => TResult) => (...args: unknown[]) => TResult
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
const f = x => { console.log(x); return x + 1; };

const memoized = memoize(f);

memoized(5);
memoized(5);
memoized(5);
memoized(3);
```
<!-- prettier-ignore-end -->

##### Questions

- How to memoize a function?

#### memoizeShallow

Memoizes the function result so it is not computed for the same parameters. Uses shallow equality.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
<TResult>(f: (...xs: unknown[]) => TResult) => (...args: unknown[]) => TResult
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
const f = ({ x }) => { console.log(x); return x + 1; };

const memoized = memoizeShallow(f);

memoized({ x: 5 });
memoized({ x: 5 });
memoized({ x: 5 });
memoized({ x: 3 });
```
<!-- prettier-ignore-end -->

##### Questions

- How to memoize a function with shallow equality?

#### memoizeWith

Memoizes the function result so it is not computed for the same parameters. Uses the given equality function.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(equals: (x: T[], y: T[]) => boolean) => <TResult>(f: (...xs: T[]) => TResult) => (...args: T[]) => TResult
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
const f = ({ x }) => { console.log(x); return x + 1; };

const memoized = memoizeWith((a, b) => a.x === b.x)(f);

memoized({ x: 5 });
memoized({ x: 5 });
memoized({ x: 5 });
memoized({ x: 3 });
```
<!-- prettier-ignore-end -->

##### Questions

- How to memoize a function with a custom equality function?

#### noOp

It does exactly nothing.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
() => void
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
noOp("anything");
// ⇒ undefined
```
<!-- prettier-ignore-end -->

##### Questions

- How to create a function that does nothing?

#### not

Inverts the given function result.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(f: (...xs: unknown[]) => unknown) => (...args: unknown[]) => boolean
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
not(x > 10)(15);
// ⇒ true
```
<!-- prettier-ignore-end -->

##### Questions

- How to invert a boolean function?

#### pipe

Pipes an input through given functions.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(...fs: ((x: T) => T)[]) => (x: T) => T
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
pipe(x => x * x, x => x + 1)(3);
// ⇒ 10
```
<!-- prettier-ignore-end -->

##### Questions

- How to pipe an argument through a function?

#### when

Runs the given function only when the condition is met.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(predicate: (...xs: unknown[]) => boolean) => (action: (...xs: unknown[]) => unknown) => (...args: unknown[]) => unknown
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
when(x => x > 0)(x => console.log(x))(5);
when(x => x > 0)(x => console.log(x))(-3);
```
<!-- prettier-ignore-end -->

##### Questions

- How to run a function only when a condition is satisfied?

#### whenTrue

Runs the given function only when the condition is exactly true.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(action: (...xs: unknown[]) => unknown) => (...args: unknown[]) => unknown
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
whenTrue(x => console.log(x))(false);
when(x => x > 0)(x => console.log(x))(true);
```
<!-- prettier-ignore-end -->

##### Questions

- How to run a function only if its argument is true?
- How to execute function only if a variable is true?

### is

#### array

Checks if the given argument is an array.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(x?: unknown) => boolean
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
array([1, 2, 3]);
// ⇒ true
```

```javascript
array({ a: 1 });
// ⇒ false
```
<!-- prettier-ignore-end -->

##### Questions

- How to check if a given value is an array?

#### boolean

Checks if the given value is a boolean.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(x?: unknown) => x is boolean
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
boolean(false); // ⇒ true
```

```javascript
boolean(1); // ⇒ false
```
<!-- prettier-ignore-end -->

##### Questions

- How to check if a given value is a boolean?

#### byte

Checks if the given value is a byte.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(x?: unknown) => boolean
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
byte(128);
// ⇒ true
```

```javascript
byte(325);
// ⇒ false
```

```javascript
byte(65.5);
// ⇒ false
```
<!-- prettier-ignore-end -->

##### Questions

- How to check if a given value is a byte?
- How to check if a given number is a byte?

#### date

Checks if the given value is a Date object.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(x?: unknown) => boolean
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
date(new Date());
// ⇒ true
```

```javascript
date(123);
// ⇒ false
```
<!-- prettier-ignore-end -->

##### Questions

- How to check if a given value is a Date object?

#### defined

Checks if the given value is defined.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(x?: unknown) => boolean
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
defined(undefined);
// ⇒ false
```

```javascript
defined(null);
// ⇒ true
```

```javascript
defined(0);
// ⇒ true
```

```javascript
defined({ a: 1 });
// ⇒ true
```
<!-- prettier-ignore-end -->

##### Questions

- How to check if a given value is defined?
- How to check if a given value is not undefined?

#### function

Checks if the given value is a function.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(x?: unknown) => x is Function
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
_function(x => x + 5);
// ⇒ true
```
<!-- prettier-ignore-end -->

##### Questions

- How to check if a given value is a function?

#### integer

Checks if the given value is an integer.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(x?: unknown) => boolean
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
integer(5);
// ⇒ true
```

```javascript
integer(32.5);
// ⇒ false
```
<!-- prettier-ignore-end -->

##### Questions

- How to check if a given value is an integer?
- How to check if a given number is an integer?

#### nonNullable

Checks and asserts the given value is not null or undefined.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(val: T) => val is NonNullable<T>
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
nonNullable(null);
// ⇒ false
```

```javascript
nonNullable(undefined);
// ⇒ false
```

```javascript
nonNullable(false);
// ⇒ true
```

```javascript
nonNullable({ a: 1 });
// ⇒ true
```
<!-- prettier-ignore-end -->

##### Questions

- How to check if a given value is non-nullable?
- How to check if a given value is not null?
- How to check if a given value is not undefined?

#### normal

Checks if the given value is a number in a normal range [0, 1].

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(x?: unknown) => boolean
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
normal(0.75);
// ⇒ true
```

```javascript
normal(-1);
// ⇒ false
```

```javascript
normal(2.5);
// ⇒ false
```
<!-- prettier-ignore-end -->

##### Questions

- How to check if a given value is in 0 to 1 inclusive range?

#### number

Checks if the given value is a number.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(x?: unknown) => boolean
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
number(0 / 0);
// ⇒ false
```

```javascript
number(15.6);
// ⇒ true
```
<!-- prettier-ignore-end -->

##### Questions

- How to check if a given value is a valid number?
- How to check if a given value is not NaN?
- How to check if a given value is finite?

#### object

Checks if the given value is an object.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(x?: unknown) => boolean
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
object({ a: 1, b: 2 });
// ⇒ true
```

```javascript
object([1, 2, 3]);
// ⇒ false
```
<!-- prettier-ignore-end -->

##### Questions

- How to check if a given value is an object?

#### string

Checks if the given value is a string.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(x?: unknown) => x is string
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
string("Test");
// ⇒ true
```

```javascript
string(['T', 'e', 's', 't']);
// ⇒ false
```
<!-- prettier-ignore-end -->

##### Questions

- How to check if a given value is a string?

### math

#### add

Adds two values.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(a: number, b: number) => number
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
add(3, 5);
// ⇒ 8
```
<!-- prettier-ignore-end -->

##### Questions

- How to add two values?

#### average

Calculates the average of the given array of numbers.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs?: number[]) => number
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
average([2, 4, 15]);
// ⇒ 7
```
<!-- prettier-ignore-end -->

##### Questions

- How to compute the average of an array?

#### ceilToNearestPowerOfTwo

Finds the nearest power of two greater or equal to the given value.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(x: number) => number
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
ceilToNearestPowerOfTwo(345);
// ⇒ 512
```
<!-- prettier-ignore-end -->

##### Questions

- How to get the nearest power of two greater or equal to the given value?

#### clamp

Clamps the given value to the given range.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(min: number, max: number) => ((x: number) => number)
```
<!-- prettier-ignore-end -->

##### Examples

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

##### Questions

- How to clamp value to the desired range?
- How to enforce a value to be in a given range?

#### clampNormal

Clamps the given value to the [0, 1] range.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(x: number) => number
```
<!-- prettier-ignore-end -->

##### Examples

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

##### Questions

- How to clamp value to be in 0 to 1 inclusive range?
- How to clamp value to be in the normal range?

#### clampPercentage

Clamps the given value to the [0, 100] range.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(x: number) => number
```
<!-- prettier-ignore-end -->

##### Examples

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

##### Questions

- How to enforce a percentage be between 0% and 100%?

#### delta

Calculates the absolute distance between given values.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(a: number, b: number) => number
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
delta(-3, 5);
// ⇒ 8
```
<!-- prettier-ignore-end -->

##### Questions

- How to calculate an absolute distance between two numbers?

#### inRectangleRange

Checks if the given value is in the rectangular range of [0, width] and [0, height]

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(width: number, height: number) => ((x: number, y: number) => boolean)
```
<!-- prettier-ignore-end -->

##### Examples

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

##### Questions

- How to check if a point is inside a rectangle defined by width and height?

#### lerp

Linearly interpolates two given values by the normal value of their distance.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(t: number) => ((a: number, b: number) => number)
```
<!-- prettier-ignore-end -->

##### Examples

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

##### Questions

- How to linearly interpolate between two values?
- How to interpolate two numbers?

#### maximumBy

Calculates the maximum by a given selector.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(f: (x: number) => number) => ((xs: number[]) => number)
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
maximumBy(({ age }) => age)([{ age: 13 }, { age: 20 }, { age: 7 }, { age: 18 }]);
// ⇒ { age: 20 }
```
<!-- prettier-ignore-end -->

##### Questions

- How to find a maximum element by a given function?

#### median

Calculates the median of the values. If there is an even number of items, the average of the middle ones is returned.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs?: number[]) => number | undefined
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
median([-5, 3, 2, 29, 43]);
// ⇒ 3
```
<!-- prettier-ignore-end -->

##### Questions

- How to compute a median of an array?

#### minMax

Calculates the minimum and maximum value of the two given values.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
([a, b]: [number, number]) => [number, number]
```
<!-- prettier-ignore-end -->

##### Examples

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

##### Questions

- How to get ordered values where the lower is the first and the higher is the second?

#### sameSign

Checks if all the given values have the same sign.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: number[]) => boolean
```
<!-- prettier-ignore-end -->

##### Examples

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

##### Questions

- How to check if all values have the same sign?

#### sign

Calculates the sign of the value and returns -1 for negative values, 1 for positive values and 0 for zeros.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(x: number) => number
```
<!-- prettier-ignore-end -->

##### Examples

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

##### Questions

- How to get a sign of a number?

#### standardDeviation

Calculates the standard deviation of the given array of numbers.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: number[], origin?: number) => number
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
standardDeviation([96, 81, 68, 79, 23, 13, 13, 59, 44, 86]);
// ⇒ (2 * Math.sqrt(10922 / 5)) / 3
```
<!-- prettier-ignore-end -->

##### Questions

- How to compute a standard deviation of an array?

#### subtract

Subtracts two values.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(a: number, b: number) => number
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
subtract(3, 5);
// ⇒ -2
```
<!-- prettier-ignore-end -->

##### Questions

- How to subtract two numbers?

### object

#### any

Checks if the given object is present and it is not empty (contains at least one entry).

##### Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(xs?: GenericObject<T>) => boolean
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
any({ a: 1, b: 2, c: 3 });
// ⇒ true
```

```javascript
any({ });
// ⇒ false
```

```javascript
any(null);
// ⇒ false
```

```javascript
any(undefined);
// ⇒ false
```
<!-- prettier-ignore-end -->

##### Questions

- How to check if an object is not empty?
- How to check if an object contains some values?
- How to check if an object is not null or undefined?

#### apply

Applies the given parameters to the given dictionary of functions.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(fs: {
    [index: string]: (...xs: T[]) => T;
}) => (...xs: T[]) => GenericObject<T>
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
const lower = text => text.toLowerCase();
const upper = text => text.toUpperCase();

apply({ lower, upper })("TeSt");
// ⇒ { lower: "test", upper: "TEST" }
```
<!-- prettier-ignore-end -->

##### Questions

- How to apply a value over an object of functions?

#### empty

Empty object.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
GenericObject<unknown>;
export default empty
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
empty;
// ⇒ {}
```
<!-- prettier-ignore-end -->

##### Questions

- How to get an empty object?

#### entries

Lists key-value pairs (entries) present in the given object.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
ObjectEntries
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
entries({ a: 1, b: 2, c: 3 });
// ⇒ [["a", 1], ["b", 2], ["c", 3]]
```
<!-- prettier-ignore-end -->

##### Questions

- How to get entries of an object?
- How to get an array of key-value pairs of an object?

#### enumerable

Creates a 1 to 1 mapping of the given values as an object.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(...xs: string[]) => object
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
enumerable('TEST', 'X', 'Y');
// ⇒ { TEST: 'TEST', X: 'X', Y: 'Y' }
```
<!-- prettier-ignore-end -->

##### Questions

- How to create an object of the same keys and values?

#### equals

Checks if two objects are deeply equal.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(a: unknown, b: unknown) => boolean;
export default equalsDeep
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
equals({ a: 1 }, { a: 1 });
// ⇒ true
```

```javascript
equals({ b: [1, 2] }, { b: [1, 2] });
// ⇒ true
```
<!-- prettier-ignore-end -->

##### Questions

- How to check if two objects are equal?
- How to check deep object equality?

#### every

Test if every element passes the given predicate.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(f: (value: T, key: string, context: object) => boolean) => (xs: GenericObject<T>) => boolean
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
every(x => x >= 0)({ x: 5, y: 3, z: 0 });
// ⇒ true
```

```javascript
every(x => x > 0)({ x: 5, y: 3, z: 0 });
// ⇒ false
```
<!-- prettier-ignore-end -->

##### Questions

- How to check if every entry in an object passes a given predicate?

#### filter

Filters the given object with the given predicate.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(f: (value: T, key: string, context: object) => boolean) => (xs: GenericObject<T>) => GenericObject<T>
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
filter(x => x % 2 !== 0)({ a: 1, b: 2, c: 3 });
// ⇒ { a: 1, c: 3 }
```
<!-- prettier-ignore-end -->

##### Questions

- How to filter an object?

#### find

Searches the given object by the given predicate and returns the found value or undefined.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(predicate: (value: T, key: string, context: object) => boolean) => (xs: GenericObject<T>) => T | undefined
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
find(({ x }) => x % 2 === 0)({ a: { x: 1 }, b: { x: 2 }, c: { x: 3 } });
// ⇒ { x: 2 }
```
<!-- prettier-ignore-end -->

##### Questions

- How to find the value of an object by a predicate function?

#### findEntry

Searches the given object by the given predicate and returns the found entry or undefined.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(predicate: (value: T, key: string, context: GenericObject<T>) => boolean) => (xs: GenericObject<T>) => [string, T] | undefined
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
findEntry(({ x }) => x % 2 === 0)({ a: { x: 1 }, b: { x: 2 }, c: { x: 3 } });
// ⇒ ["b", { x: 2 }]
```
<!-- prettier-ignore-end -->

##### Questions

- How to find an entry of an object by a predicate function?

#### findKey

Searches the given object by the given predicate and returns the found key or undefined.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(predicate: (value: T, key: string, context: object) => boolean) => (xs: GenericObject<T>) => string | undefined
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
findKey(({ x }) => x % 2 === 0)({ a: { x: 1 }, b: { x: 2 }, c: { x: 3 } });
// ⇒ "b"
```
<!-- prettier-ignore-end -->

##### Questions

- How to find a key of an object by a predicate function?

#### first

Returns the first value in the given object. Follows the default object iteration order.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(xs: GenericObject<T>) => T | undefined
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
first({ a: 1, b: 2, c: 3 });
// ⇒ 1
```
<!-- prettier-ignore-end -->

##### Questions

- How to get the first value of an object?

#### flatMapValues

Flat maps the values of the given object.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
<T, TResult>(f: (value: T, key: string, context: GenericObject<T>) => TResult[]) => (xs: GenericObject<T>) => TResult[]
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
flatMapValues(x => [x, x * 2])({ a: 1, b: 2, c: 3 });
// ⇒ [1, 2, 2, 4, 3, 6]
```
<!-- prettier-ignore-end -->

##### Questions

- How to flat map an object?

#### fromEntries

Creates an object from an array of key-value pairs (entries).

##### Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(entries: [string, T][]) => Result<T>
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
fromEntries([["a", 1], ["b", 2], ["c", 3]]);
// ⇒ { a: 1, b: 2, c: 3 }
```
<!-- prettier-ignore-end -->

##### Questions

- How to create an object from an array of key-value pairs?
- How to create an object from an array of entries?

#### groupBy

Groups the given array of values by the given key selector.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(selector: (x: unknown) => string) => (xs: unknown[]) => Result
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
groupBy(x => x % 2 == 0 ? "even" : "odd")([1, 2, 3, 4, 5, 6, 7]);
// ⇒ { even: [2, 4, 6], odd: [1, 3, 5, 7] }
```
<!-- prettier-ignore-end -->

##### Questions

- How to group an array by a key function?

#### hasKey

Checks if the given key is present in the object.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(key: string) => (xs?: unknown) => boolean
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
hasKey("c")({ a: 1, b: 2, c: 3 });
// ⇒ true
```
<!-- prettier-ignore-end -->

##### Questions

- How to check if an object contains a given key?

#### last

Returns the last value in the given object. Follows the default object iteration order.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(xs: GenericObject<T>) => T | undefined
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
last({ a: 1, b: 2, c: 3 });
// ⇒ 3
```
<!-- prettier-ignore-end -->

##### Questions

- How to get the last value of an object?

#### length

Returns the number of entries within the given object.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(xs: GenericObject<T>) => number
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
length({ a: 1, b: 2, c: 3 });
// ⇒ 3
```
<!-- prettier-ignore-end -->

##### Questions

- How to check how many entries are in an object?

#### map

Maps the given object with the given function.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
<T, TResult>(f: (value: T, key: string, context: object) => TResult) => (xs: GenericObject<T>) => GenericObject<TResult>
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
map(x => x ** 2)({ a: 1, b: 2, c: 3 });
// ⇒ { a: 1, b: 4, c: 9 }
```
<!-- prettier-ignore-end -->

##### Questions

- How to map an object?
- How to transform an object?

#### mapEntries

Maps entries of the given object.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
<T, TResult>(f: (value: T, key: string, context: object) => TResult) => (xs: GenericObject<T>) => [string, TResult][]
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
mapEntries(x => x ** 2)({ a: 1, b: 2, c: 3 });
// ⇒ [["a", 1], ["b", 4], ["c", 9]]
```
<!-- prettier-ignore-end -->

##### Questions

- How to map object entries?

#### mapKeys

Transforms the object keys with the given function.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(f: (value: T, key: string, context: object) => string) => (xs: GenericObject<T>) => GenericObject<T>
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
mapKeys((_, key) => key.toUpperCase())({ a: 1, b: 2, c: 3 });
// ⇒ { A: 1, B: 2, C: 3 }
```
<!-- prettier-ignore-end -->

##### Questions

- How to map object keys?
- How to transform object keys?

#### mapValues

Maps and returns an array of transformed object values.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
<T, TResult>(f: (value: T, key: string, context: object) => TResult) => (xs: GenericObject<T>) => TResult[]
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
mapValues(x => x ** 2)({ a: 1, b: 2, c: 3 });
// ⇒ [1, 4, 9]
```
<!-- prettier-ignore-end -->

##### Questions

- How to map object values?

#### merge

Merges two objects deeply.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(a: GenericObject, b: GenericObject) => GenericObject;
export default merge
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
merge({ a: 1, b: 3 }, {});
// ⇒ { a: 1, b: 3 }
```

```javascript
merge({ a: 1, b: 3 }, { b: 7 });
// ⇒ { a: 1, b: 7 }
```

```javascript
merge({ a: 1, b: 3 }, { b: { d: 8 } });
// ⇒ { a: 1, b: { d: 8 } }
```

```javascript
merge({ a: 1, b: { c: 3 } }, { b: { d: 8 } });
// ⇒ { a: 1, b: { c: 3, d: 8 } }
```
<!-- prettier-ignore-end -->

##### Questions

- How to merge two objects together?
- How to deeply merge two objects?

#### none

Checks if the given object is empty.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(xs?: GenericObject<T>) => boolean
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
none({});
// ⇒ true
```

```javascript
none(null);
// ⇒ true
```

```javascript
none({ a: 1 });
// ⇒ false
```
<!-- prettier-ignore-end -->

##### Questions

- How to check if an object is empty?
- How to check if an object is null or undefined?

#### some

Test if any element passes the given predicate.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(f: (value: T, key: string, context: object) => boolean) => (xs: GenericObject<T>) => boolean
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
some(x => x >= 4)({ x: 5, y: 3, z: 0 });
// ⇒ true
```

```javascript
some(x => x < 0)({ x: 5, y: 3, z: 0 });
// ⇒ false
```
<!-- prettier-ignore-end -->

##### Questions

- How to check if any entry in an object passes a given predicate?

#### sort

Sorts the given object by a comparator.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(f: (a: T, b: T) => number) => (xs: GenericObject<T>) => GenericObject<T>
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
sort({ a: 3, b: 2, c: 3, d: -7, e: 13, f: 0, g: 8 });
// ⇒ {"d": -7,"f": 0,"b": 2,"a": 3,"c": 3,"g": 8,"e": 13}
```
<!-- prettier-ignore-end -->

##### Questions

- How to sort an object?

### query

#### parse

Parses a query string into an object.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs?: string) => {
    [index: string]: string | boolean;
}
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
parse("test&count=5");
// ⇒ { test: true, count: "5" }
```
<!-- prettier-ignore-end -->

##### Questions

- How to parse a query string?

#### read

Parses the given query string into an object using URLSearchParams.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(source: string) => Result
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
read("test&count=5");
// ⇒ { test: "", count: "5" }
```
<!-- prettier-ignore-end -->

##### Questions

- How to parse a query string using URLSearchParams?

#### serialize

Serializes the given object into a query string.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(xs?: GenericObject<T>) => string
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
serialize({ test: true, value: "a string with spaces", missing: false });
// ⇒ "test&value=a%20string%20with%20spaces"
```
<!-- prettier-ignore-end -->

##### Questions

- How to serialize an object to a query string?

### range

#### empty

Checks if the given range is empty.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
([min, max]: [number, number]) => boolean
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
empty([2, 2]);
// ⇒ true
```

```javascript
empty([1, 5]);
// ⇒ false
```
<!-- prettier-ignore-end -->

##### Questions

- How to check if a given range is empty (0-length)?

#### equals

Checks if the given ranges are equal.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
([a, b]: [number, number], [c, d]: [number, number]) => boolean
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
equals([1, 2], [1, 2]);
// ⇒ true
```

```javascript
equals([4, 3], [1, 2]);
// ⇒ false
```
<!-- prettier-ignore-end -->

##### Questions

- How to check if two ranges are equal?

#### length

Computes the signed length of the given range.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
([min, max]: [number, number]) => number
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
length([3, 15]);
// ⇒ 12
```

```javascript
length([1, 0]);
// ⇒ -1
```
<!-- prettier-ignore-end -->

##### Questions

- How to compute a signed length of a range?

#### split

Splits the given range into subranges by excluding the given used ranged.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(used: [number, number][], sourceRange?: number[]) => (range: [number, number]) => [number, number][];
export default split
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
split([[2, 3], [5, 7]]);
// ⇒ [[0, 2], [3, 5], [7, 10]]
```
<!-- prettier-ignore-end -->

##### Questions

- How to split a range into subranges?

### regex

#### escape

Escapes regex string into proper regex.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(string: string) => string
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
escape("te.t").test("text");
// ⇒ false
```
<!-- prettier-ignore-end -->

##### Questions

- How to properly escape a regex string?

### string

#### containsWhitespace

Checks if the given string contains whitespace.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(x: string) => boolean
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
containsWhitespace("test string");
// ⇒ true
```

```javascript
containsWhitespace("test");
// ⇒ false
```
<!-- prettier-ignore-end -->

##### Questions

- How to check if a string contains whitespace?

#### empty

Empty string.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
""
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
empty();
// ⇒ ""
```
<!-- prettier-ignore-end -->

##### Questions

- How to get an empty string?

#### firstToLower

Transforms the first character to lowercase.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(text: string) => string
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
firstToLower("TeSt");
// ⇒ "teSt"
```
<!-- prettier-ignore-end -->

##### Questions

- How to make the first letter of a string lowercase?

#### firstToUpper

Transforms the first character to uppercase.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(text: string) => string
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
firstToUpper("teSt");
// ⇒ "TeSt"
```
<!-- prettier-ignore-end -->

##### Questions

- How to make the first letter of a string uppercase?

#### includes

Checks if the given substring is present in the source string.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(search: string) => (text: string) => boolean
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
includes("brown fox")("The quick brown fox jumps over the lazy dog");
// ⇒ true
```

```javascript
includes("brown dog")("The quick brown fox jumps over the lazy dog");
// ⇒ false
```
<!-- prettier-ignore-end -->

##### Questions

- How to check if a string contains a given substring?

#### nbsp

Non-breaking space.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
" "
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
nbsp;
// ⇒ " "
```
<!-- prettier-ignore-end -->

##### Questions

- How to get a non-breaking space?

#### nonEmpty

Checks if the given string is present and is not empty or all whitespace.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(x?: string) => boolean
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
nonEmpty("test with spaces");
// ⇒ true
```

```javascript
nonEmpty("   ");
// ⇒ false
```

```javascript
nonEmpty(null);
// ⇒ false
```
<!-- prettier-ignore-end -->

##### Questions

- How to check if a string is non-empty?
- How to check if a string is not all whitespace?
- How to check if a string is not null or undefined?

#### startsWith

Checks if the given string starts with the given substring.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(prefix: string) => (xs: string) => boolean
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
startsWith("The")("The quick brown fox jumps over the lazy dog");
// ⇒ true
```

```javascript
startsWith("Quick")("The quick brown fox jumps over the lazy dog");
// ⇒ false
```
<!-- prettier-ignore-end -->

##### Questions

- How to check if a string starts with a given substring?

### vector2

#### add

Adds two vectors.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
([x1, y1]: [number, number], [x2, y2]: [number, number]) => [number, number]
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
add([3, 5], [-1, 8]);
// ⇒ [2, 13]
```
<!-- prettier-ignore-end -->

##### Questions

- How to add two vectors?

#### convertSpace

Applies transformations to the given vector.

##### Type signature

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

##### Examples

<!-- prettier-ignore-start -->
```javascript
convertSpace(rotate(Math.PI))([2, 3]);
// ⇒ [-2, -3]
```
<!-- prettier-ignore-end -->

##### Questions

- How to transform a vector with a matrix?

#### cross

Calculates a cross product of the given vectors. Returns a scalar.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
([a, b]: [number, number], [c, d]: [number, number]) => number
```
<!-- prettier-ignore-end -->

##### Examples

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

##### Questions

- How to compute a cross product of two vectors?
- How to check on which side of a line a point is?

#### dot

Calculates a dot product of the given vectors. Returns a scalar.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
([a, b]: [number, number], [c, d]: [number, number]) => number
```
<!-- prettier-ignore-end -->

##### Examples

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

##### Questions

- How to compute a dot product of two vectors?

#### length

Calculates the length/magnitude of the given vector.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
([x, y]: [number, number]) => number
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
length([3, 5]);
// ⇒ Math.sqrt(3 * 3 + 5 * 5)
```
<!-- prettier-ignore-end -->

##### Questions

- How to compute the length of a vector?
- How to compute the magnitude of a vector?

#### mul

Applies matrix transformation to the given vector.

##### Type signature

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

##### Examples

<!-- prettier-ignore-start -->
```javascript
mul(scale(4, 5), [2, 3]);
// ⇒ [8, 15]
```
<!-- prettier-ignore-end -->

##### Questions

- How to apply a matrix transformation to a vector?

#### multiply

Multiples two matrices.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(m1: {
    a: number;
    c: number;
    e: number;
    b: number;
    d: number;
    f: number;
}, m2: {
    a: number;
    b: number;
    c: number;
    d: number;
    e: number;
    f: number;
}) => {
    a: number;
    c: number;
    e: number;
    b: number;
    d: number;
    f: number;
}
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
multiply({ a: 1, c: 2, e: 3, b: 4, d: 5, f: 6 }, { a: 7, c: 8, e: 9, b: 10, d: 11, f: 12 });
// ⇒ { a: 27, b: 78, c: 30, d: 87, e: 36, f: 102 }
```
<!-- prettier-ignore-end -->

##### Questions

- How to multiply two matrices?

#### normalize

Normalizes the given vector. Returns [0, 0] vector for points.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(vector: [number, number]) => [number, number]
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
normalize([2, 3]);
// ⇒ [2 / length([2, 3]), 3 / length([2, 3])]
```
<!-- prettier-ignore-end -->

##### Questions

- How to normalize a vector?

#### reflect

Reflects the given vector on the given surface.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(a: [number, number], v: [number, number]) => [number, number]
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
reflect([1, -2], [1, 0]);
// ⇒ [0.6, 0.8]
```
<!-- prettier-ignore-end -->

##### Questions

- How to reflect a vector on another vector?

#### rotate

Creates a rotation matrix around given origin [0, 0] by default.

##### Type signature

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

##### Examples

<!-- prettier-ignore-start -->
```javascript
const angle = Math.PI;
const sine = Math.sin(angle);
const cosine = Math.cos(angle);

rotate(angle); // { a: cosine, b: sine, c: -sine, d: cosine, e: 0, f: 0 }
```
<!-- prettier-ignore-end -->

##### Questions

- How to create a rotation matrix?

#### scale

Creates a scale matrix.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(sx?: number, sy?: number) => {
    a: number;
    c: number;
    e: number;
    b: number;
    d: number;
    f: number;
}
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
scale(2, 3);
// ⇒ { a: 2, b: 0, c: 0, d: 3, e: 0, f: 0 }
```
<!-- prettier-ignore-end -->

##### Questions

- How to create a scale matrix?

#### sub

Subtracts two vectors.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
([x1, y1]: [number, number], [x2, y2]: [number, number]) => [number, number]
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
sub([3, 5], [-1, 8]);
// ⇒ [4, -3]
```
<!-- prettier-ignore-end -->

##### Questions

- How to subtract two vectors?

#### transform

Composes a single transformation by matrix multiplication.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(...matrices: {
    a: number;
    c: number;
    e: number;
    b: number;
    d: number;
    f: number;
}[]) => {
    a: number;
    c: number;
    e: number;
    b: number;
    d: number;
    f: number;
}
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
const originX = 5;
const originY = 6;
const angle = Math.PI;

transform(translate(originX, originY), rotate(angle), translate(-originX, -originY));
// ⇒ rotate(Math.PI, originX, originY)
```
<!-- prettier-ignore-end -->

##### Questions

- How to compose multiple matrix transformations into a single matrix?

#### translate

Creates a translation matrix.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(tx?: number, ty?: number) => {
    a: number;
    c: number;
    e: number;
    b: number;
    d: number;
    f: number;
}
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
translate(2, 3);
// ⇒ { a: 1, b: 0, c: 0, d: 1, e: 2, f: 3 }
```
<!-- prettier-ignore-end -->

##### Questions

- How to create a translation matrix?

### web

#### classNames

Composes class name from truthy values with the support of string and objects.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(...xs: unknown[]) => string
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
classNames("test", { active: true, disabled: false, on: undefined });
// ⇒ "test active"
```
<!-- prettier-ignore-end -->

##### Questions

- How to create a class name from an array of strings and/or objects?

#### events

##### cancel

Stops propagation and prevents the default handler of the given event.

###### Type signature

<!-- prettier-ignore-start -->
```typescript
(event: {
    preventDefault: () => void;
    stopPropagation: () => void;
}) => boolean
```
<!-- prettier-ignore-end -->

###### Examples

<!-- prettier-ignore-start -->
```javascript
const event = {
  preventDefault: () => console.log("preventDefault"),
  stopPropagation: () => console.log("stopPropagation")
};

cancel(event);
```
<!-- prettier-ignore-end -->

###### Questions

- How to stop event propagation and prevent default at once?

##### openInNewTabIntent

Tests if the current event seems like an intent to open a new tab. Useful for client-side navigation handling.

###### Type signature

<!-- prettier-ignore-start -->
```typescript
({ button, ctrlKey, metaKey, shiftKey }: {
    button?: number;
    ctrlKey?: boolean;
    metaKey?: boolean;
    shiftKey?: boolean;
}) => boolean
```
<!-- prettier-ignore-end -->

###### Examples

<!-- prettier-ignore-start -->
```javascript
openInNewTabIntent({ ctrlKey: true });
// ⇒ true
```
<!-- prettier-ignore-end -->

###### Questions

- How to check if the user wants to open a new tab using history API?

##### prevent

Prevents the default handler of the given event.

###### Type signature

<!-- prettier-ignore-start -->
```typescript
(event: {
    preventDefault: () => void;
}) => boolean
```
<!-- prettier-ignore-end -->

###### Examples

<!-- prettier-ignore-start -->
```javascript
const event = {
  preventDefault: () => console.log("preventDefault"),
  stopPropagation: () => console.log("stopPropagation")
};

prevent(event);
```
<!-- prettier-ignore-end -->

###### Questions

- How to prevent default event handler?

##### stop

Stops propagation of the given event.

###### Type signature

<!-- prettier-ignore-start -->
```typescript
(event: {
    stopPropagation: () => void;
}) => boolean
```
<!-- prettier-ignore-end -->

###### Examples

<!-- prettier-ignore-start -->
```javascript
const event = {
  preventDefault: () => console.log("preventDefault"),
  stopPropagation: () => console.log("stopPropagation")
};

stop(event);
```
<!-- prettier-ignore-end -->

###### Questions

- How to stop the propagation of an event?
<!-- DOCS:END -->

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/sandstreamdevelopment"><img src="https://avatars2.githubusercontent.com/u/44231396?v=4" width="100px;" alt="sandstreamdevelopment"/><br /><sub><b>sandstreamdevelopment</b></sub></a><br /><a href="#business-sandstreamdevelopment" title="Business development">💼</a> <a href="#financial-sandstreamdevelopment" title="Financial">💵</a> <a href="#ideas-sandstreamdevelopment" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/przemyslawzalewski"><img src="https://avatars0.githubusercontent.com/u/30114244?v=4" width="100px;" alt="Przemysław Zalewski"/><br /><sub><b>Przemysław Zalewski</b></sub></a><br /><a href="https://github.com/sandstreamdev/std/commits?author=przemyslawzalewski" title="Code">💻</a> <a href="#ideas-przemyslawzalewski" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/jakubbogacz"><img src="https://avatars3.githubusercontent.com/u/26272028?v=4" width="100px;" alt="jakubbogacz"/><br /><sub><b>jakubbogacz</b></sub></a><br /><a href="#ideas-jakubbogacz" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/sandstreamdev/std/pulls?q=is%3Apr+reviewed-by%3Ajakubbogacz" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://github.com/marekrozmus"><img src="https://avatars3.githubusercontent.com/u/26272040?v=4" width="100px;" alt="Marek Rozmus"/><br /><sub><b>Marek Rozmus</b></sub></a><br /><a href="https://github.com/sandstreamdev/std/pulls?q=is%3Apr+reviewed-by%3Amarekrozmus" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="http://www.pawelstanecki.pl"><img src="https://avatars1.githubusercontent.com/u/34007033?v=4" width="100px;" alt="Paweł"/><br /><sub><b>Paweł</b></sub></a><br /><a href="https://github.com/sandstreamdev/std/commits?author=kendyl93" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/kborucinski"><img src="https://avatars0.githubusercontent.com/u/3129656?v=4" width="100px;" alt="Krystian Boruciński"/><br /><sub><b>Krystian Boruciński</b></sub></a><br /><a href="https://github.com/sandstreamdev/std/commits?author=kborucinski" title="Code">💻</a></td>
  </tr>
</table>
<!-- ALL-CONTRIBUTORS-LIST:END -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
