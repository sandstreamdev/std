# std

[![Greenkeeper badge](https://badges.greenkeeper.io/sandstreamdev/std.svg)](https://greenkeeper.io/)
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
(xs?: any[]) => boolean
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
any([]); // ⇒ false
```

```javascript
any([1, 2, 3]); // ⇒ true
```
<!-- prettier-ignore-end -->

##### Questions

- How to check if an array is empty (in JavaScript)?
- How to check if array is empty or null or undefined (in JavaScript)?
- Check if an array is empty or not (in JavaScript).
- Check if an array is empty or exists (in JavaScript).

#### are

Checks if given arguments are all `Arrays`.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(...xs: any[]) => boolean
```
<!-- prettier-ignore-end -->

#### difference

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any[], ys: any[]) => any[]
```
<!-- prettier-ignore-end -->

#### differs

Checks if two arrays are not equal.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs?: any[], ys?: any[]) => boolean
```
<!-- prettier-ignore-end -->

#### duplicates

Lists all the duplicated values in the given array.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any[]) => any[]
```
<!-- prettier-ignore-end -->

#### empty

Empty array.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
any[]
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
empty; // ⇒ []
```
<!-- prettier-ignore-end -->

#### exact

Takes exactly the given count of elements.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(count: number) => (xs: any[]) => any[]
```
<!-- prettier-ignore-end -->

#### except

Filters out the given value.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(y: any) => (xs: any[]) => any[]
```
<!-- prettier-ignore-end -->

#### filterInPlace

Filters the given array with the given predicate just like Array.filter but does it in-place thus mutates the original array.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(
  f: (value: any, index: number, context: any[]) => boolean
) => (xs: any[]) => any[]
```
<!-- prettier-ignore-end -->

#### find

Finds an element by a predicate function within given array, otherwise returns the given fallback value or undefined when fallback is not present.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(
  predicate: (value: any, index: number, context: any[]) => boolean,
  fallback?: any
) => (xs: any[]) => any
```
<!-- prettier-ignore-end -->

#### first

Returns the first element or undefined when there are no elements in the given array.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
([x]: [any]) => any
```
<!-- prettier-ignore-end -->

#### flatMap

Maps and flattens the result.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(
  f: (value: any, index: number, context: any[]) => any
) => (xs: any[]) => any
```
<!-- prettier-ignore-end -->

#### flatten

Flattens the nested arrays by a single level.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any) => any[]
```
<!-- prettier-ignore-end -->

#### insert

Inserts the given item to the array at a specific index.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(
  index: number
) => (item: any) => ([...xs]: any[]) => any[]
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
insert(0)('d')(['a', 'b', 'c']); // ⇒ ['d', 'a', 'b', 'c']
```

```javascript
insert(1)('d')(['a', 'b', 'c']); // ⇒ ['a', 'd', 'b', 'c']
```
<!-- prettier-ignore-end -->

#### intersection

Finds common items between both arrays.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any[], ys: any[]) => any[]
```
<!-- prettier-ignore-end -->

#### is

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(value?: any) => boolean
```
<!-- prettier-ignore-end -->

#### last

Returns the last element or undefined when there are no elements in the given array.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any[]) => any
```
<!-- prettier-ignore-end -->

#### lengthDiffers

Checks if lengths of given arrays differ.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(a: any[], b: any[]) => boolean
```
<!-- prettier-ignore-end -->

#### map

Maps the given array with the given functions.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(...fs: ((x: any) => any)[]) => (xs: any) => any
```
<!-- prettier-ignore-end -->

#### midpoint

Returns the middle element or the right one when the number of elements is even.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any[]) => any
```
<!-- prettier-ignore-end -->

#### minMax

Computes minimum and maximum of the given array in a single run.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
([head, ...tail]: number[]) => number[]
```
<!-- prettier-ignore-end -->

#### multiple

Checks if the given array contains more than one element.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any) => boolean
```
<!-- prettier-ignore-end -->

#### none

Checks if the given array is empty.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs?: any) => boolean
```
<!-- prettier-ignore-end -->

#### partition

Partitions the given array to the ones that pass the given predicate function and the ones that do not. By [convention of the Haskell's Data.Either](http://hackage.haskell.org/package/base-4.12.0.0/docs/Data-Either.html), values that pass the predicate are placed at right.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(predicate: (x: any) => boolean) => (xs: any[]) => any
```
<!-- prettier-ignore-end -->

#### range

Generates an array of numbers from 0 to n - 1.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(n: any) => number[]
```
<!-- prettier-ignore-end -->

#### repeat

Repeats the given element by given count of times.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(count: number) => (value: any) => any[]
```
<!-- prettier-ignore-end -->

#### reverse

Reverses the given array without mutating it (in contrast to Array.reverse).

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any) => any[]
```
<!-- prettier-ignore-end -->

#### reverseIf

Reverses the given array when enabled.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(enabled: boolean) => (xs: any) => any
```
<!-- prettier-ignore-end -->

#### second

Returns the second element or undefined when there are less than two elements in the given array.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
([, x]: any[]) => any
```
<!-- prettier-ignore-end -->

#### secondToLast

Returns the second to last element or undefined when there are less than two elements in the given array.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any[]) => any
```
<!-- prettier-ignore-end -->

#### shift

Shifts the given array to the left and circulates the elements back by modulo of the array's length.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(count: number) => (xs: any[]) => any[]
```
<!-- prettier-ignore-end -->

#### shuffle

Shuffles the given array in random order with Math.random as the default.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any, random?: () => number) => any[]
```
<!-- prettier-ignore-end -->

#### shuffleInPlace

Shuffles the given array in-place in random order with Math.random as the default.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any[], random?: () => number) => any[]
```
<!-- prettier-ignore-end -->

#### single

Checks if the given array contains exactly one element.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any[]) => boolean
```
<!-- prettier-ignore-end -->

#### skip

Skips the given count of elements from the given array.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(count: number) => (xs: any[]) => any[]
```
<!-- prettier-ignore-end -->

#### slidingWindow

Returns a new array composed of tuples of the given sliding window length of consecutive elements.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(count: number) => (xs: any[]) => any[][]
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
slidingWindow(2)([1, 2, 3, 4]); // ⇒ [[1, 2], [2, 3], [3, 4]]
```

```javascript
slidingWindow(3)([1, 2, 3, 4, 5]); // ⇒ [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
```

```javascript
slidingWindow(1)([1, 2, 3, 4, 5, 6]); // ⇒ [[1], [2], [3], [4], [5], [6]]
```
<!-- prettier-ignore-end -->

#### sort

Sorts the given array without mutating it.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(
  f?: (a: any, b: any) => number
) => (xs: any[]) => any[]
```
<!-- prettier-ignore-end -->

#### sum

Sums the given array of numbers.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: number[]) => number
```
<!-- prettier-ignore-end -->

#### take

Takes up to given count of elements.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(count: number) => (xs: any[]) => any[]
```
<!-- prettier-ignore-end -->

#### unique

Returns only unique elements of the given array.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any[]) => any[]
```
<!-- prettier-ignore-end -->

#### zip

Zips given arrays together into pairs.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any[], ys: any[]) => any[][]
```
<!-- prettier-ignore-end -->

#### zipWith

Zips given arrays together with the given function.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(
  f?: (x: any, y: any) => any[]
) => (xs: any[], ys: any[]) => any[][]
```
<!-- prettier-ignore-end -->

### async

#### debounce

Makes the function run after the given period of not being called. Useful to delay input submission for autocomplete etc.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(
  f: (...args: any[]) => any,
  wait: number
) => (...args: any[]) => void
```
<!-- prettier-ignore-end -->

#### delay

When awaited, delays the execution by the given number of milliseconds.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(duration: number) => Promise<unknown>
```
<!-- prettier-ignore-end -->

#### sequence

Runs the given tasks in a sequence.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(tasks: (() => Promise<any>)[]) => Promise<any[]>
```
<!-- prettier-ignore-end -->

### date

#### byDateWithFallback

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(
  now: string | number | Date
) => (
  {
    endedAt: aEnd,
    startedAt: aStart
  }: {
    endedAt: string | number | Date;
    startedAt: string | number | Date;
  },
  {
    endedAt: bEnd,
    startedAt: bStart
  }: {
    endedAt: string | number | Date;
    startedAt: string | number | Date;
  }
) => number
```
<!-- prettier-ignore-end -->

#### clamp

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(
  min: number | Date,
  max: number | Date
) => (dateStringOrDate: string | number | Date) => Date
```
<!-- prettier-ignore-end -->

#### dateDiff

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(
  a: string | number | Date,
  b: string | number | Date
) => number
```
<!-- prettier-ignore-end -->

#### dateInRange

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(
  from: string | number | Date,
  to: string | number | Date
) => (date?: Date) => boolean
```
<!-- prettier-ignore-end -->

#### dayRange

##### Type signature

<!-- prettier-ignore-start -->
```typescript
({
  iso,
  local,
  now,
  timezoneOffset
}: {
  iso?: boolean;
  local?: boolean;
  now?: Date;
  timezoneOffset?: number;
}) => (date?: string | number | Date) => string[]
```
<!-- prettier-ignore-end -->

#### daysInMonths

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(
  leapYear: boolean
) => [
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number
]
```
<!-- prettier-ignore-end -->

#### daysInYear

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(year: number) => number
```
<!-- prettier-ignore-end -->

#### displayMonth

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(monthIndex: number) => string
```
<!-- prettier-ignore-end -->

#### displayTime

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(
  source: [number, number, number],
  showSeconds: boolean
) => string
```
<!-- prettier-ignore-end -->

#### endOfDay

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(
  date: string | number | Date,
  timezoneOffset?: number,
  local?: boolean
) => Date
```
<!-- prettier-ignore-end -->

#### formatDate

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(sourceDate: Date, timezoneOffset?: number) => string
```
<!-- prettier-ignore-end -->

#### formatDateTime

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(
  sourceDate: Date,
  showSeconds?: boolean,
  timezoneOffset?: number
) => string
```
<!-- prettier-ignore-end -->

#### formatDisplayDate

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(
  sourceDate: Date,
  showDay?: boolean,
  timezoneOffset?: number
) => string
```
<!-- prettier-ignore-end -->

#### formatDuration

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(duration: number, showSeconds?: boolean) => string
```
<!-- prettier-ignore-end -->

#### formatTime

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(
  sourceDate: Date,
  showSeconds?: boolean,
  timezoneOffset?: number
) => string
```
<!-- prettier-ignore-end -->

#### fromDays

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(days: number) => number
```
<!-- prettier-ignore-end -->

#### fromHours

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(hours: number) => number
```
<!-- prettier-ignore-end -->

#### fromMinutes

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(minutes: number) => number
```
<!-- prettier-ignore-end -->

#### fromSeconds

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(seconds: number) => number
```
<!-- prettier-ignore-end -->

#### joinDateTime

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(...xs: string[]) => string
```
<!-- prettier-ignore-end -->

#### leapYear

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(year: number) => boolean
```
<!-- prettier-ignore-end -->

#### monthNames

##### Type signature

<!-- prettier-ignore-start -->
```typescript
string[]
```
<!-- prettier-ignore-end -->

#### offsetByBit

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(date: number | Date) => Date
```
<!-- prettier-ignore-end -->

#### parseHourMinutePair

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(text?: string) => number[]
```
<!-- prettier-ignore-end -->

#### splitDateTime

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(dateTimeString: string) => string[]
```
<!-- prettier-ignore-end -->

#### startOfDay

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(
  date: string | number | Date,
  timezoneOffset?: number,
  local?: boolean
) => Date
```
<!-- prettier-ignore-end -->

#### subtractDays

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(
  sourceDate: string | number | Date,
  numberOfDays: number
) => Date
```
<!-- prettier-ignore-end -->

#### toDate

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(date: Date) => string
```
<!-- prettier-ignore-end -->

#### toDates

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: (string | number | Date)[]) => Date[]
```
<!-- prettier-ignore-end -->

#### toDays

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(milliseconds: number) => number
```
<!-- prettier-ignore-end -->

#### toHours

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(milliseconds: number) => number
```
<!-- prettier-ignore-end -->

#### toISO

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(x: Date) => string
```
<!-- prettier-ignore-end -->

#### toISOFromLocalDateTime

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(date: Date) => string
```
<!-- prettier-ignore-end -->

#### toLocalDateTime

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(date: Date, timezoneOffset?: number) => Date
```
<!-- prettier-ignore-end -->

#### toMinutes

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(milliseconds: number) => number
```
<!-- prettier-ignore-end -->

#### toSeconds

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(milliseconds: number) => number
```
<!-- prettier-ignore-end -->

#### valid

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(date?: any) => boolean
```
<!-- prettier-ignore-end -->

### debug

#### assert

Asserts given conditions.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(
  condition: boolean,
  callbackOrMessage: string | (() => void)
) => void
```
<!-- prettier-ignore-end -->

#### diff

Computes a difference between two objects.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(
  obj1?: {
    [index: string]: any;
  },
  obj2?: {
    [index: string]: any;
  }
) => object
```
<!-- prettier-ignore-end -->

### encoding

#### base64url

##### decode

###### Type signature

<!-- prettier-ignore-start -->
```typescript
(text: string, context?: DecodeContext) => string
```
<!-- prettier-ignore-end -->

##### decodeBytes

###### Type signature

<!-- prettier-ignore-start -->
```typescript
(text: string, context?: DecodeContext) => number[]
```
<!-- prettier-ignore-end -->

##### encode

###### Type signature

<!-- prettier-ignore-start -->
```typescript
(text: string, context?: EncodeContext) => string
```
<!-- prettier-ignore-end -->

##### encodeBytes

###### Type signature

<!-- prettier-ignore-start -->
```typescript
(bytes: number[], context?: EncodeContext) => string
```
<!-- prettier-ignore-end -->

##### fromBase64

###### Type signature

<!-- prettier-ignore-start -->
```typescript
(base64: string) => string
```
<!-- prettier-ignore-end -->

##### toBase64

###### Type signature

<!-- prettier-ignore-start -->
```typescript
(base64Url: string) => string
```
<!-- prettier-ignore-end -->

#### byteString

##### from

###### Type signature

<!-- prettier-ignore-start -->
```typescript
(byteString: string) => number[]
```
<!-- prettier-ignore-end -->

##### to

###### Type signature

<!-- prettier-ignore-start -->
```typescript
(bytes: number[]) => string
```
<!-- prettier-ignore-end -->

### file

#### validName

Checks if the given string is a valid Windows file name.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(name: string) => boolean
```
<!-- prettier-ignore-end -->

### function

#### compose

Composes multiple functions into a higher order one. Goes right to left.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(...fs: ((x: any) => any)[]) => (x: any) => any
```
<!-- prettier-ignore-end -->

#### constant

Returns the given constant no matter of the input.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(x: any) => any
```
<!-- prettier-ignore-end -->

#### identity

Always return the given value.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(x: any) => any
```
<!-- prettier-ignore-end -->

#### memoize

Memoizes the function result so it is not computed for the same parameters. Uses deep equality.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(f: (...xs: any[]) => any) => (...args: any[]) => any
```
<!-- prettier-ignore-end -->

#### memoizeShallow

Memoizes the function result so it is not computed for the same parameters. Uses shallow equality.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(f: (...xs: any[]) => any) => (...args: any[]) => any
```
<!-- prettier-ignore-end -->

#### memoizeWith

Memoizes the function result so it is not computed for the same parameters. Uses the given equality function.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(
  equals: (x: any, y: any) => boolean
) => (f: (...xs: any[]) => any) => (...args: any[]) => any
```
<!-- prettier-ignore-end -->

#### noOp

Does exactly nothing.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
() => void
```
<!-- prettier-ignore-end -->

#### not

Inverts the given function result.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(
  f: (...xs: any[]) => any
) => (...args: any[]) => boolean
```
<!-- prettier-ignore-end -->

#### pipe

Pipes an input through given functions.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(...fs: ((x: any) => any)[]) => (x: any) => any
```
<!-- prettier-ignore-end -->

#### when

Runs the given function only when the condition is met.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(
  predicate: (...xs: any[]) => boolean
) => (action: (...xs: any[]) => any) => (...args: any[]) => any
```
<!-- prettier-ignore-end -->

#### whenTrue

Runs the given function only when the condition is exactly true.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(
  action: (...xs: any[]) => any
) => (...args: any[]) => any
```
<!-- prettier-ignore-end -->

### is

#### array

Checks if the given argument is array.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(x?: any) => boolean
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
array([]); // ⇒ true
```
<!-- prettier-ignore-end -->

#### byte

Checks if the given value is a byte.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(x?: number) => boolean
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
byte(128); // ⇒ true
```
<!-- prettier-ignore-end -->

#### date

Checks if given value is a Date object.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(x?: any) => boolean
```
<!-- prettier-ignore-end -->

#### defined

Checks if given value is defined.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(x?: any) => boolean
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
defined(undefined); // ⇒ false
```
<!-- prettier-ignore-end -->

#### function

Checks if given value is a function.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(x?: any) => boolean
```
<!-- prettier-ignore-end -->

#### integer

Checks if given value is an integer.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(x?: number) => boolean
```
<!-- prettier-ignore-end -->

#### nonNullable

Checks and asserts the given value is not a null or undefined.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(val: T) => val is NonNullable<T>
```
<!-- prettier-ignore-end -->

#### normal

Checks if the given value is a number in a normal range [0, 1].

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(x?: number) => boolean
```
<!-- prettier-ignore-end -->

#### number

Checks if given value is a number.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(x?: any) => boolean
```
<!-- prettier-ignore-end -->

#### object

Checks if given value is an object.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(x?: any) => boolean
```
<!-- prettier-ignore-end -->

#### string

Checks if given value is a string.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(x?: any) => boolean
```
<!-- prettier-ignore-end -->

### math

#### add

Adds two values.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(a: number, b: number) => number
```
<!-- prettier-ignore-end -->

#### average

Calculates the average of given array of numbers.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs?: number[]) => number
```
<!-- prettier-ignore-end -->

#### ceilToNearestPowerOfTwo

Finds the nearest power of two greater or equal to the given value.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(x: number) => number
```
<!-- prettier-ignore-end -->

#### clamp

Clamps the given value to the given range.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(min: number, max: number) => (x: number) => number
```
<!-- prettier-ignore-end -->

#### clampNormal

Clamps the given value to the [0, 1] range.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(x: number) => number
```
<!-- prettier-ignore-end -->

#### clampPercentage

Clamps the given value to the [0, 100] range.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(x: number) => number
```
<!-- prettier-ignore-end -->

#### delta

Calculates the absolute distance between given values.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(a: number, b: number) => number
```
<!-- prettier-ignore-end -->

#### inRectangleRange

Checks if the given value is in the rectangular range of [0, width] and [0, height]

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(
  width: number,
  height: number
) => (x: number, y: number) => boolean
```
<!-- prettier-ignore-end -->

#### lerp

Linearly interpolates two given values by normal value of their distance.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(t: number) => (a: number, b: number) => number
```
<!-- prettier-ignore-end -->

#### maximumBy

Calculates the maximum by a given selector.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(f: (x: number) => number) => (xs: number[]) => number
```
<!-- prettier-ignore-end -->

#### median

Calculates the median of the values. If there is an even number of items, the average of the middle ones is returned.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs?: number[]) => number
```
<!-- prettier-ignore-end -->

#### minMax

Calculates the minimum and maximum value of the two given values.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
([a, b]: [number, number]) => [number, number]
```
<!-- prettier-ignore-end -->

#### sameSign

Checks if all the given values have the same sign.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: number[]) => boolean
```
<!-- prettier-ignore-end -->

#### sign

Calculates the sign of the value and returns -1 for negative values, 1 for positive values and 0 for zeros.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(x: number) => number
```
<!-- prettier-ignore-end -->

#### standardDeviation

Calculates standard deviation of the given array of numbers.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: number[], origin?: number) => number
```
<!-- prettier-ignore-end -->

#### subtract

Subtracts two values.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(a: number, b: number) => number
```
<!-- prettier-ignore-end -->

### object

#### any

Checks if the given object is present and it is not empty (contains at least one entry).

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs?: object) => boolean
```
<!-- prettier-ignore-end -->

#### apply

Applies the given parameters to the given dictionary of functions.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(
  fs: ((...xs: any[]) => any)[]
) => (...xs: any[]) => object
```
<!-- prettier-ignore-end -->

#### empty

Empty object.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
{}
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
empty; // ⇒ {}
```
<!-- prettier-ignore-end -->

#### entries

Lists key value pairs (entries) present in the given object.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
{
  <T>(
    o:
      | {
          [s: string]: T;
        }
      | ArrayLike<T>
  ): [string, T][];
  (o: {}): [string, any][];
}
```
<!-- prettier-ignore-end -->

#### enumerable

Creates a 1 to 1 mapping of given values as an object.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(...xs: string[]) => object
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
enumerable('TEST', 'X', 'Y'); // ⇒ { TEST: 'TEST', X: 'X', Y: 'Y' }
```
<!-- prettier-ignore-end -->

#### equals

Checks if two objects are deeply equal.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(a: any, b: any) => boolean
```
<!-- prettier-ignore-end -->

#### filter

Filters the given object with the given predicate.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(
  f: (value: any, key: string, context: object) => boolean
) => (xs: object) => object
```
<!-- prettier-ignore-end -->

#### find

Searches the given object by the given predicate and returns the found value or undefined.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(
  predicate: (value: any, key: string, context: object) => boolean
) => (xs: object) => any
```
<!-- prettier-ignore-end -->

#### findEntry

Searches the given object by the given predicate and returns the found entry or undefined.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(
  predicate: (value: any, key: string, context: object) => boolean
) => (xs: object) => any
```
<!-- prettier-ignore-end -->

#### findKey

Searches the given object by the given predicate and returns the found key or undefined.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(
  predicate: (value: any, key: string, context: object) => boolean
) => (xs: object) => any
```
<!-- prettier-ignore-end -->

#### first

Returns the first value in the given object. Follows default object iteration order.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: object) => any
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
first({ a: 1, b: 2, c: 3 }); // ⇒ 1
```
<!-- prettier-ignore-end -->

#### flatMapValues

Flat maps the values of the given object.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(
  f: (value: any, key: string, context: object) => boolean
) => (xs: object) => any[]
```
<!-- prettier-ignore-end -->

#### fromEntries

Creates an object from array of key value pairs (entries).

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(keyValuePairs: [string, any][]) => object
```
<!-- prettier-ignore-end -->

#### groupBy

Groups given array of values by the given key selector.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(selector: (x: any) => string) => (xs: any[]) => object
```
<!-- prettier-ignore-end -->

#### hasKey

Checks if given key is present in the object.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(key: string) => (xs?: any) => any
```
<!-- prettier-ignore-end -->

#### length

Returns the number of entries within the given object.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: object) => number
```
<!-- prettier-ignore-end -->

#### map

Maps the given object with the given function.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(
  f: (value: any, key: string, context: object) => boolean
) => (xs: object) => object
```
<!-- prettier-ignore-end -->

#### mapEntries

Maps entries of the given object.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(
  f: (value: any, key: string, context: object) => any
) => (xs: object) => [string, any][]
```
<!-- prettier-ignore-end -->

#### mapKeys

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(
  f: (value: any, key: string, context: object) => any
) => (xs: object) => object
```
<!-- prettier-ignore-end -->

#### mapValues

Maps and returns an array of transformed object values.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(
  f: (value: any, key: string, context: object) => any
) => (xs: object) => any[]
```
<!-- prettier-ignore-end -->

#### merge

Merges two objects deeply.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(
  a: {
    [index: string]: any;
  },
  b: object
) => object
```
<!-- prettier-ignore-end -->

##### Examples

<!-- prettier-ignore-start -->
```javascript
merge({ a: 1, b: 3 }, {}); // ⇒ { a: 1, b: 3 }
```

```javascript
merge({ a: 1, b: 3 }, { b: 7 }); // ⇒ { a: 1, b: 7 }
```

```javascript
merge({ a: 1, b: 3 }, { b: { d: 8 } }); // ⇒ { a: 1, b: { d: 8 } }
```

```javascript
merge({ a: 1, b: { c: 3 } }, { b: { d: 8 } }); // ⇒ { a: 1, b: { c: 3, d: 8 } }
```
<!-- prettier-ignore-end -->

#### none

Checks if the given object is empty.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs?: object) => boolean
```
<!-- prettier-ignore-end -->

#### sort

Sorts the given object by a comparator.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(
  f: (a: any, b: any) => number
) => (xs: object) => object
```
<!-- prettier-ignore-end -->

### query

#### parse

Parses a query string into an object.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs?: string) => object
```
<!-- prettier-ignore-end -->

#### read

Parses the given query string into an object using URLSearchParams.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(source: string) => {}
```
<!-- prettier-ignore-end -->

#### serialize

Serializes the given object into a query string.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs?: { [index: string]: any }) => string
```
<!-- prettier-ignore-end -->

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
empty([2, 2]); // ⇒ true
empty([1, 5]); // ⇒ false
```
<!-- prettier-ignore-end -->

#### equals

Checks if the given ranges are equal.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(
  [a, b]: [number, number],
  [c, d]: [number, number]
) => boolean
```
<!-- prettier-ignore-end -->

#### length

Computes the signed length of the given range.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
([min, max]: [number, number]) => number
```
<!-- prettier-ignore-end -->

#### split

Splits the given range in subranges by excluding the given used ranged.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(
  used: [number, number][],
  sourceRange?: number[]
) => (range: [number, number]) => [number, number][]
```
<!-- prettier-ignore-end -->

### regex

#### escape

Escapes regex string into proper regex.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(string: string) => string
```
<!-- prettier-ignore-end -->

### string

#### containsWhitespace

Checks if the given string contains whitespace.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(x: string) => boolean
```
<!-- prettier-ignore-end -->

#### empty

Empty string.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
""
```
<!-- prettier-ignore-end -->

#### firstToLower

Transforms the first character to lowercase.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(text: string) => string
```
<!-- prettier-ignore-end -->

#### firstToUpper

Transforms the first character to uppercase.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(text: string) => string
```
<!-- prettier-ignore-end -->

#### includes

Checks if the given substring is present in the source string.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(search: string) => (text: string) => boolean
```
<!-- prettier-ignore-end -->

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
nbsp; // ⇒ " "
```
<!-- prettier-ignore-end -->

#### nonEmpty

Checks if the given string is present and is not empty or all whitespace.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(x?: string) => boolean
```
<!-- prettier-ignore-end -->

#### startsWith

Checks if the given string starts with the given substring.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(prefix: string) => (xs: string) => boolean
```
<!-- prettier-ignore-end -->

### vector2

#### add

Adds two vectors.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(
  [x1, y1]: [number, number],
  [x2, y2]: [number, number]
) => [number, number]
```
<!-- prettier-ignore-end -->

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

#### cross

Calculates a cross product of the given vectors. Returns a scalar.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(
  [a, b]: [number, number],
  [c, d]: [number, number]
) => number
```
<!-- prettier-ignore-end -->

#### dot

Calculates a dot product of the given vectors. Returns a scalar.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(
  [a, b]: [number, number],
  [c, d]: [number, number]
) => number
```
<!-- prettier-ignore-end -->

#### length

Calculates length/magnitude of the given vector.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
([x, y]: [number, number]) => number
```
<!-- prettier-ignore-end -->

#### mul

Applies matrix transformation to the given vector.

##### Type signature

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

#### multiply

Multiples two matrices.

##### Type signature

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

#### normalize

Normalizes the given vector. Returns [0, 0] vector for points.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(vector: [number, number]) => [number, number]
```
<!-- prettier-ignore-end -->

#### reflect

Reflects the given vector on the given surface.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(
  a: [number, number],
  v: [number, number]
) => [number, number]
```
<!-- prettier-ignore-end -->

#### rotate

Creates a rotation matrix around given origin [0, 0] by default.

##### Type signature

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

#### scale

Creates a scale matrix.

##### Type signature

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

#### sub

Subtracts two vectors.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(
  [x1, y1]: [number, number],
  [x2, y2]: [number, number]
) => [number, number]
```
<!-- prettier-ignore-end -->

#### transform

Composes a single transformation by matrix multiplication.

##### Type signature

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

#### translate

Creates a translation matrix.

##### Type signature

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

### web

#### classNames

Composes class name from truthy values with support of string and objects.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(...xs: any[]) => any
```
<!-- prettier-ignore-end -->

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

##### openInNewTabIntent

Tests if the current event seems like an intent to open a new tab. Useful for client-side navigation handling.

###### Type signature

<!-- prettier-ignore-start -->
```typescript
({
  button,
  ctrlKey,
  metaKey,
  shiftKey
}: {
  button?: number;
  ctrlKey?: boolean;
  metaKey?: boolean;
  shiftKey?: boolean;
}) => boolean
```
<!-- prettier-ignore-end -->

##### prevent

Prevents the default handler of the given event.

###### Type signature

<!-- prettier-ignore-start -->
```typescript
(event: { preventDefault: () => void }) => boolean
```
<!-- prettier-ignore-end -->

##### stop

Stops propagation of the given event.

###### Type signature

<!-- prettier-ignore-start -->
```typescript
(event: { stopPropagation: () => void }) => boolean
```
<!-- prettier-ignore-end -->

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
