# any

Checks if the given array is present and it is not empty (contains at least one element).

## Type signature

```
(xs?: any[]) => boolean
```

## Examples

```javascript
any([]); // ⇒ false
```

```javascript
any([1, 2, 3]); // ⇒ true
```

## Questions

- How to check if an array is empty (in JavaScript)?
- How to check if array is empty or null or undefined (in JavaScript)?
- Check if an array is empty or not (in JavaScript).
- Check if an array is empty or exists (in JavaScript).

# are

Checks if given arguments are all `Arrays`.

## Type signature

```
(...xs: any[]) => boolean
```

# difference

# differs

Checks if two arrays are not equal.

# duplicates

Lists all the duplicated values in the given array.

# empty

Empty array.

# exact

Takes exactly the given count of elements.

# except

Filters out the given value.

# filterInPlace

Filters the given array with the given predicate just like Array.filter but does it in-place thus mutates the original array.

# find

Finds an element by a predicate function within given array, otherwise returns the given fallback value or undefined when fallback is not present.

# first

Returns the first element or undefined when there are no elements in the given array.

# flatMap

Maps and flattens the result.

# flatten

Flattens the nested arrays by a single level.

# intersection

Finds common items between both arrays.

# is

# last

Returns the last element or undefined when there are no elements in the given array.

# lengthDiffers

Checks if lengths of given arrays differ.

# map

Maps the given array with the given functions.

# midpoint

Returns the middle element or the right one when the number of elements is even.

# minMax

Computes minimum and maximum of the given array in a single run.

# multiple

Checks if the given array contains more than one element.

# none

Checks if the given array is empty.

# partition

Partitions the given array to the ones that pass the given predicate function and the ones that do not. By [convention of the Haskell's Data.Either](http://hackage.haskell.org/package/base-4.12.0.0/docs/Data-Either.html), values that pass the predicate are placed at right.

# range

Generates an array of numbers from 0 to n - 1.

# repeat

Repeats the given element by given count of times.

# reverse

Reverses the given array without mutating it (in contrast to Array.sort).

# reverseIf

Reverses the given array when enabled.

# second

Returns the second element or undefined when there are less than two elements in the given array.

# secondToLast

Returns the second to last element or undefined when there are less than two elements in the given array.

# shift

Shifts the given array to the left and circulates the elements back by modulo of the array's length.

# shuffle

Shuffles the given array in random order with Math.random as the default.

# shuffleInPlace

Shuffles the given array in-place in random order with Math.random as the default.

# single

Checks if the given array contains exactly one element.

# skip

Skips the given count of elements from the given array.

# sort

Sorts the given array without mutating it.

# sum

Sums the given array of numbers.

# take

Takes up to given count of elements.

# unique

Returns only unique elements of the given array.

# zip

Zips given arrays together into pairs.

# zipWith

Zips given arrays together with the given function.
