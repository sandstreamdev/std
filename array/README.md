# any

Checks if the given array is present and it is not empty (contains at least one element).

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(xs?: T[]) => boolean
```
<!-- prettier-ignore-end -->

## Examples

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

## Questions

- How to check if an array is empty?
- How to check if an array is empty or null or undefined?
- How to check if an array is empty or not?
- How to check if an array is empty or doesn't exist?

# are

Checks if the given arguments are all `Arrays`.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(...xs: T[]) => boolean
```
<!-- prettier-ignore-end -->

## Examples

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

## Questions

- How to check if all the given values are arrays?

# chunk

Splits the given array into an array of chunks of up to the given length.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(count: number) => <T>(xs: T[]) => T[] | T[][]
```
<!-- prettier-ignore-end -->

## Examples

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

## Questions

- How to split an array into chunks?
- How to split an array into chunks of the same size?

# difference

Computes a set difference between the two given arrays.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(xs: T[], ys: T[]) => T[]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
difference([1, 2, 3, 4, 5, 6], [2, 4]);
// ⇒ [1, 3, 5, 6]
```
<!-- prettier-ignore-end -->

## Questions

- How to find elements which are present in the first array and not in the second?

# differs

Checks if two arrays are not equal.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(xs?: T[], ys?: T[]) => boolean
```
<!-- prettier-ignore-end -->

## Examples

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

## Questions

- How to check if two arrays differ?
- How to check if two arrays are not equal?
- How to check if two arrays are equal or not?

# duplicates

Lists all the duplicated values in the given array.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(xs: T[]) => T[]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
duplicates([1, 2, 3, 4, 3, 4, 3, 6]);
// ⇒ [3, 4, 3]
```
<!-- prettier-ignore-end -->

## Questions

- How to find duplicates in an array?

# empty

Empty array.

## Type signature

<!-- prettier-ignore-start -->
```typescript
unknown[]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
empty;
// ⇒ []
```
<!-- prettier-ignore-end -->

## Questions

- How to get an empty array?

# exact

Takes exactly the given count of elements.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(count: number) => <T>(xs: T[]) => T[]
```
<!-- prettier-ignore-end -->

## Examples

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

## Questions

- How to get exactly N elements out of an array?

# except

Filters out the given value.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(y: T) => (xs: T[]) => T[]
```
<!-- prettier-ignore-end -->

## Examples

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

## Questions

- How to get all the values of an array except the given one?

# filterInPlace

Filters the given array with the given predicate just like Array.filter but does it in-place thus mutates the original array.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(f: (value: T, index: number, context: T[]) => boolean) => (xs: T[]) => T[]
```
<!-- prettier-ignore-end -->

## Examples

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

## Questions

- How to filter an array in place?

# find

Finds an element by a predicate function within the given array, otherwise, it returns the given fallback value or undefined when fallback is not present.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(predicate: (value: T, index: number, context: T[]) => boolean, fallback?: T) => (xs: T[]) => T
```
<!-- prettier-ignore-end -->

## Examples

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

## Questions

- How to find an element of an array by a given predicate?

# first

Returns the first element or undefined when there are no elements in the given array.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>([x]: T[]) => T | undefined
```
<!-- prettier-ignore-end -->

## Examples

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

## Questions

- How to get the first element of an array?

# flatMap

Maps and flattens the result.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T, TResult>(f: (value: T, index: number, context: T[]) => TResult[]) => (xs: T[]) => TResult[]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
flatMap(text => [...text])(["test", "123"]);
// ⇒ ["t", "e", "s", "t", "1", "2", "3"]
```
<!-- prettier-ignore-end -->

## Questions

- How to flat map an array?
- How to map and then flatten an array?

# flatten

Flattens the nested arrays by a single level.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(xs: T[]) => T[]
```
<!-- prettier-ignore-end -->

## Examples

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

## Questions

- How to flatten an array?

# insert

Inserts the given item to the array at a specific index.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(index: number) => <T>(item: T) => ([...xs]: T[]) => T[]
```
<!-- prettier-ignore-end -->

## Examples

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

## Questions

- How to insert an element to an array at a given position?

# intersection

Finds common elements between both arrays.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(xs: T[], ys: T[]) => T[]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
intersection([1, 2, 3, 4, 5], [5, 5, 3, 2]);
// ⇒ [2, 3, 5]
```
<!-- prettier-ignore-end -->

## Questions

- How to find common elements present in both arrays?

# is

Checks if the given argument is an array.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(value?: unknown) => boolean
```
<!-- prettier-ignore-end -->

## Examples

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

## Questions

- How to check if a value is an array?

# last

Returns the last element or undefined when there are no elements in the given array.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(xs: T[]) => T | undefined
```
<!-- prettier-ignore-end -->

## Examples

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

## Questions

- How to get the last element of an array?

# length

Returns the number of elements in the given array.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(xs: T[]) => number
```
<!-- prettier-ignore-end -->

## Examples

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

## Questions

- How to check an array's length?
- How to compute an array's length?
- How to check the size of an array?
- How to check the number of elements in an array?

# lengthDiffers

Checks if lengths of the given arrays differ.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T1, T2>(a: T1[], b: T2[]) => boolean
```
<!-- prettier-ignore-end -->

## Examples

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

## Questions

- How to check if array lengths differ?
- How to check if the given arrays have different lengths?

# map

Maps the given array with the given functions.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(...fs: ((x: T) => T)[]) => (xs: T[]) => T[]
```
<!-- prettier-ignore-end -->

## Examples

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

## Questions

- How to map an array?

# midpoint

Returns the middle element or the right one when the number of elements is even.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(xs: T[]) => T | undefined
```
<!-- prettier-ignore-end -->

## Examples

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

## Questions

- How to get the element in the middle of an array?
- How to get the middle element of an array?

# minMax

Computes minimum and maximum values of the given array in a single run.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: number[]) => number[]
```
<!-- prettier-ignore-end -->

## Examples

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

## Questions

- How to find the minimum and maximum values of an array?
- How to get the min/max element of an array?

# multiple

Checks if the given array contains more than one element.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(xs: T[]) => boolean
```
<!-- prettier-ignore-end -->

## Examples

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

## Questions

- How to check if an array contains multiple elements?
- How to check whether multiple values exist within an array?

# none

Checks if the given array is empty.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(xs?: T[]) => boolean
```
<!-- prettier-ignore-end -->

## Examples

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

## Questions

- How to check if an array is empty?

# partition

Partitions the given array to the ones that pass the given predicate function and the ones that do not. By [convention of the Haskell's Data.Either](http://hackage.haskell.org/package/base-4.12.0.0/docs/Data-Either.html), values that pass the predicate are placed at the right.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(predicate: (x: T) => boolean) => (xs: T[]) => readonly [T[], T[]]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
partition(x => x % 2 === 1)([1, 2, 3, 4, 5]);
// ⇒ [[2, 4], [1, 3, 5]])
```
<!-- prettier-ignore-end -->

## Questions

- How to partition an array based on a condition?
- How to divide an array by a filter function?

# pop

Returns the given array without the last element.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(xs: T[]) => T[]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
pop([1, 2, 3, 4]); // ⇒ [1, 2, 3]
```

```javascript
pop([]); // ⇒ []
```
<!-- prettier-ignore-end -->

## Questions

- How to get an array without the last element?
- How to remove the last element from an array?

# range

Generates an array of numbers from 0 to n - 1.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(n: number) => number[]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
range(3);
// ⇒ [0, 1, 2]
```
<!-- prettier-ignore-end -->

## Questions

- How to create an array of all integers from 0 to N exclusive?

# removeAt

Removes an element at the given index from the given array.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(index: number) => <T>(xs: T[]) => T[]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
removeAt(3)([1, 2, 3, 4, 5, 6])
// ⇒ [1, 2, 3, 5, 6]
```
<!-- prettier-ignore-end -->

## Questions

- How to remove an item from an array at a particular index?

# repeat

Repeats the given element by the given count of times.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(count: number) => <T>(value: T) => T[]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
repeat(3)("test");
// ⇒ ["test", "test", "test"]
```
<!-- prettier-ignore-end -->

## Questions

- How to repeat a value N times?

# reverse

Reverses the given array without mutating it (in contrast to Array.reverse).

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(xs: T[]) => T[]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
reverse([1, 2, 3, 4, 5]);
// ⇒ [5, 4, 3, 2, 1]
```
<!-- prettier-ignore-end -->

## Questions

- How to reverse an array without mutating it?

# reverseIf

Reverses the given array when enabled.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(enabled: boolean) => <T>(xs: T[]) => T[]
```
<!-- prettier-ignore-end -->

## Examples

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

## Questions

- How to reverse an array without mutating it only when a condition is satisfied?

# second

Returns the second element or undefined when there are less than two elements in the given array.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(xs: T[]) => T | undefined
```
<!-- prettier-ignore-end -->

## Examples

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

## Questions

- How to get the second element of an array?

# secondToLast

Returns the second to last element or undefined when there are less than two elements in the given array.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(xs: T[]) => T | undefined
```
<!-- prettier-ignore-end -->

## Examples

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

## Questions

- How to get the second to last element of an array?

# shift

Shifts the given array to the left and circulates the elements back by modulo of the array's length.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(count: number) => <T>(xs: T[]) => T[]
```
<!-- prettier-ignore-end -->

## Examples

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

## Questions

- How to shift an array?

# shuffle

Shuffles the given array in random order with Math.random as the default.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(xs: T[], random?: () => number) => T[]
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

shuffle([1, 2, 3, 4, 5], random); // => [3, 5, 4, 2, 1]
```
<!-- prettier-ignore-end -->

## Questions

- How to shuffle an array?

# shuffleInPlace

Shuffles the given array in-place in random order with Math.random as the default.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(xs: T[], random?: () => number) => T[]
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

## Questions

- How to shuffle an array in place?

# single

Checks if the given array contains exactly one element.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(xs: T[]) => boolean
```
<!-- prettier-ignore-end -->

## Examples

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

## Questions

- How to check if an array contains only one element?

# skip

Skips the given count of elements from the given array.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(count: number) => <T>(xs: T[]) => T[]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
skip(2)([1, 2, 3, 4, 5]);
// ⇒ [3, 4, 5]
```
<!-- prettier-ignore-end -->

## Questions

- How to skip the first few elements of an array?

# slidingWindow

Returns a new array composed of tuples of the given sliding window length of consecutive elements.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(count: number) => <T>(xs: T[]) => T[][]
```
<!-- prettier-ignore-end -->

## Examples

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

## Questions

- How to iterate an array pairwise?

# sort

Sorts the given array without mutating it.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(f?: (a: T, b: T) => number) => (xs: T[]) => T[]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
sort((a, b) => a - b)([13, 79, 20, 69, 44, 67, 18, 95, 26, 55]);
// ⇒ [13, 18, 20, 26, 44, 55, 67, 69, 79, 95]
```
<!-- prettier-ignore-end -->

## Questions

- How to sort an array without mutating it?

# sum

Sums the given array of numbers.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: number[]) => number
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
sum([1, 2, 3, 4, 5]);
// ⇒ 15
```
<!-- prettier-ignore-end -->

## Questions

- How to sum elements of an array?

# take

Takes up to a given count of elements.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(count: number) => <T>(xs: T[]) => T[]
```
<!-- prettier-ignore-end -->

## Examples

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

## Questions

- How to get the first N number of elements from an array?

# unique

Returns unique elements of the given array.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(xs: T[]) => T[]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
unique([1, 2, 3, 4, 3, 4, 3, 6]);
// ⇒ [1, 2, 3, 4, 6]
```
<!-- prettier-ignore-end -->

## Questions

- How to find all unique values in an array?

# uniqueBy

Filters out duplicated values based on the result of the given key selector.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T, TResult>(f: (x: T) => TResult) => (xs: T[]) => T[]
```
<!-- prettier-ignore-end -->

## Examples

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

## Questions

- How to find all unique values in an array by some predicate?

# zip

Zips the given arrays together into pairs.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: unknown[], ys: unknown[]) => [unknown, unknown][]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
zip([1, 2, 3], [4, 5, 6]);
// ⇒ [[1, 4],[2, 5],[3, 6]]
```
<!-- prettier-ignore-end -->

## Questions

- How to zip two arrays?

# zipN

Zips the given arrays together into pairs.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(...xs: T[][]) => T[][]
```
<!-- prettier-ignore-end -->

## Examples

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

## Questions

- How to zip multiple arrays?

# zipWith

Zips the given arrays together with the given function.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T1, T2>(f?: (x: T1, y: T2) => [T1, T2]) => (xs: T1[], ys: T2[]) => [T1, T2][]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
zipWith((x, y) => x * x + y)([1, 2, 3], [4, 5, 6]);
// ⇒ [5, 9, 15]
```
<!-- prettier-ignore-end -->

## Questions

- How to zip two arrays with a given function?
