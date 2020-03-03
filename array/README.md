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

## Examples

<!-- prettier-ignore-start -->
```javascript
are([2, 3]); // ⇒ true
```

```javascript
are([1, 2, 3], []); // ⇒ true
```

```javascript
are([1, 2, 3], 8, [1, 3], "test"); // ⇒ false
```
<!-- prettier-ignore-end -->

# chunk

Splits the given array into array of chunks of up to the given length.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(count: number) => (xs: any[]) => any[]
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

# difference

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any[], ys: any[]) => any[]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
difference([1, 2, 3, 4, 5, 6], [2, 4]);
// ⇒ [1, 3, 5, 6]
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

## Examples

<!-- prettier-ignore-start -->
```javascript
differs([1, 2, 3], [1, 2]); // ⇒ true
```

```javascript
differs([1, 2, 3], [1, 2, 3]); // ⇒ false
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

## Examples

<!-- prettier-ignore-start -->
```javascript
duplicates([1, 2, 3, 4, 3, 4, 3, 6]); // ⇒ [3, 4, 3]
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

## Examples

<!-- prettier-ignore-start -->
```javascript
exact(5)([1, 2, 3]); // ⇒ [1, 2, 3, undefined, undefined]
```

```javascript
exact(2)([1, 2, 3]); // ⇒ [1, 2]
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

## Examples

<!-- prettier-ignore-start -->
```javascript
except(2)([1, 2, 3, 4, 5]); // ⇒ [1, 3, 4, 5]
```

```javascript
except(2)([1, 2, 2, 4, 2]); // ⇒ [1, 4]
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

## Examples

<!-- prettier-ignore-start -->
```javascript
const xs = [1, 2, 3, 4, 5, 6, 7];
const odd = x => x % 2 === 1;

const ys = filterInPlace(odd)(xs);

ys === xs; // ⇒ true
ys; // ⇒ [1, 3, 5, 7]
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

## Examples

<!-- prettier-ignore-start -->
```javascript
find(x => x > 2)([1, 2, 3, 5, 7]); // ⇒ 3
```

```javascript
find(x => x > 2)([1, 2, -3, -5, -7]); // ⇒ undefined
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

## Examples

<!-- prettier-ignore-start -->
```javascript
first([1, 2, 3]); // ⇒ 1
```

```javascript
first([]); // ⇒ undefined
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

## Examples

<!-- prettier-ignore-start -->
```javascript
flatMap(text => [...text])(["test", "123"]);
// ⇒ ["t", "e", "s", "t", "1", "2", "3"]
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

# insert

Inserts the given item to the array at a specific index.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  index: number
) => (item: any) => ([...xs]: any[]) => any[]
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

# intersection

Finds common items between both arrays.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any[], ys: any[]) => any[]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
intersection([1, 2, 3, 4, 5], [5, 5, 3, 2]);
// ⇒ [2, 3, 5]
```
<!-- prettier-ignore-end -->

# is

Checks if the given argument is an array.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(value?: any) => boolean
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
is([1, 2, 3]); // ⇒ true
```

```javascript
is({ a: 5 }); // ⇒ false
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

## Examples

<!-- prettier-ignore-start -->
```javascript
last([1, 2, 3]); // ⇒ 3
```

```javascript
last([]); // ⇒ undefined
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

## Examples

<!-- prettier-ignore-start -->
```javascript
lengthDiffers([1, 2, 3], [1, 2]); // ⇒ true
```

```javascript
lengthDiffers([6, 7], [1, 2]); // ⇒ false
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

## Examples

<!-- prettier-ignore-start -->
```javascript
map(x => x * x)([1, 2, 3]); // ⇒ [1, 4, 9]
```

```javascript
map(x => x * x, x => x + 1)([1, 2, 3]); // ⇒ [2, 5, 10]
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

## Examples

<!-- prettier-ignore-start -->
```javascript
midpoint([1, 2, 3, 4, 5]); // ⇒ 3
```

```javascript
midpoint([1, 2, 3, 4]); // ⇒ 3
```
<!-- prettier-ignore-end -->

# minMax

Computes minimum and maximum of the given array in a single run.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: number[]) => number[]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
minMax([10, 5, 3, -5, -4, 23, 32, 8, 1, 0]); // ⇒ [-5, 32]
```

```javascript
minMax([1]); // ⇒ [1, 1]
```

```javascript
minMax([]); // ⇒ [undefined, undefined]
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

## Examples

<!-- prettier-ignore-start -->
```javascript
multiple([1, 2, 3]); // ⇒ true
```

```javascript
multiple([1, 2]); // ⇒ true
```

```javascript
multiple([1]); // ⇒ false
```

```javascript
multiple([]); // ⇒ false
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

## Examples

<!-- prettier-ignore-start -->
```javascript
none([]); // ⇒ true
```

```javascript
none([1, 2, 3]); // ⇒ false
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

## Examples

<!-- prettier-ignore-start -->
```javascript
partition(x => x % 2 === 1)([1, 2, 3, 4, 5]);
// ⇒ [[2, 4], [1, 3, 5]])
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

## Examples

<!-- prettier-ignore-start -->
```javascript
range(3); // ⇒ [0, 1, 2]
```
<!-- prettier-ignore-end -->

# removeAt

Removes an element at the given index from the given array.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(index: number) => (xs: any[]) => any[]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
removeAt(3)([1, 2, 3, 4, 5, 6]) // ⇒ [1, 2, 3, 5, 6]
```
<!-- prettier-ignore-end -->

## Questions

- How to remove an item at a particular index?

# repeat

Repeats the given element by given count of times.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(count: number) => (value: any) => any[]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
repeat(3)("test"); // ⇒ ["test", "test", "test"]
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

## Examples

<!-- prettier-ignore-start -->
```javascript
reverse([1, 2, 3, 4, 5]); // ⇒ [5, 4, 3, 2, 1]
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

## Examples

<!-- prettier-ignore-start -->
```javascript
reverseIf(true)([1, 2, 3, 4, 5]); // ⇒ [5, 4, 3, 2, 1]
```

```javascript
reverseIf(false)([1, 2, 3, 4, 5]); // ⇒ [1, 2, 3, 4, 5]
```
<!-- prettier-ignore-end -->

# second

Returns the second element or undefined when there are less than two elements in the given array.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any[]) => any
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
second([1, 2, 3, 4, 5]); // ⇒ 2
```

```javascript
second([1]); // ⇒ undefined
```

```javascript
second([]); // ⇒ undefined
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

## Examples

<!-- prettier-ignore-start -->
```javascript
secondToLast([1, 2, 3, 4, 5]); // ⇒ 4
```

```javascript
secondToLast([1]); // ⇒ undefined
```

```javascript
secondToLast([]); // ⇒ undefined
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

## Examples

<!-- prettier-ignore-start -->
```javascript
shift(1)([1, 2, 3, 4, 5]); // ⇒ [2, 3, 4, 5, 1]
```

```javascript
shift(2)([1, 2, 3, 4, 5]); // ⇒ [3, 4, 5, 1, 2]
```

```javascript
shift(3)([1, 2, 3, 4, 5]); // ⇒ [4, 5, 1, 2, 3]
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

# single

Checks if the given array contains exactly one element.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any[]) => boolean
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
single([1]); // ⇒ true
```

```javascript
single([1, 2, 3]); // ⇒ false
```

```javascript
single([]); // ⇒ false
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

## Examples

<!-- prettier-ignore-start -->
```javascript
skip(2)([1, 2, 3, 4, 5]); // ⇒ [3, 4, 5]
```
<!-- prettier-ignore-end -->

# slidingWindow

Returns a new array composed of tuples of the given sliding window length of consecutive elements.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(count: number) => (xs: any[]) => any[][]
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

## Examples

<!-- prettier-ignore-start -->
```javascript
sort((a, b) => a - b)([13, 79, 20, 69, 44, 67, 18, 95, 26, 55]);
// ⇒ [13, 18, 20, 26, 44, 55, 67, 69, 79, 95]
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

## Examples

<!-- prettier-ignore-start -->
```javascript
sum([1, 2, 3, 4, 5]); // ⇒ 15
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

## Examples

<!-- prettier-ignore-start -->
```javascript
take(2)([1, 2, 3, 4, 5]); // ⇒ [1, 2]
```

```javascript
take(10)([1, 2, 3, 4, 5]); // ⇒ [1, 2, 3, 4, 5]
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

## Examples

<!-- prettier-ignore-start -->
```javascript
unique([1, 2, 3, 4, 3, 4, 3, 6]); // ⇒ [1, 2, 3, 4, 6]
```
<!-- prettier-ignore-end -->

# uniqueBy

Filters out duplicated values based on the result of the given key selector.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(f: (x: any) => any) => (xs: any[]) => any[]
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

# zip

Zips given arrays together into pairs.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any[], ys: any[]) => any[][]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
zip([1, 2, 3], [4, 5, 6]); // ⇒ [[1, 4],[2, 5],[3, 6]]
```
<!-- prettier-ignore-end -->

# zipN

Zips given arrays

## Type signature

<!-- prettier-ignore-start -->
```typescript
(...xs: any[][]) => any[][]
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

## Examples

<!-- prettier-ignore-start -->
```javascript
zipWith((x, y) => x * x + y)([1, 2, 3], [4, 5, 6]);
// ⇒ [5, 9, 15]
```
<!-- prettier-ignore-end -->
