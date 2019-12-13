# std

[![Greenkeeper badge](https://badges.greenkeeper.io/sandstreamdev/std.svg)](https://greenkeeper.io/)
[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors)

## Docs

<!-- DOCS:START - Do not remove or modify this section -->

### array

#### any

Checks if the given array is not empty (contains at least one element).

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any[]) => boolean
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
(xs: any, ys: any) => any
```
<!-- prettier-ignore-end -->

#### differs

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any, ys: any) => any
```
<!-- prettier-ignore-end -->

#### duplicates

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any) => any
```
<!-- prettier-ignore-end -->

#### empty

##### Type signature

<!-- prettier-ignore-start -->
```typescript
any[]
```
<!-- prettier-ignore-end -->

#### exact

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(n: any) => (xs: any) => any[]
```
<!-- prettier-ignore-end -->

#### except

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(y: any) => (xs: any) => any
```
<!-- prettier-ignore-end -->

#### filterInPlace

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(f: any) => (xs: any) => any
```
<!-- prettier-ignore-end -->

#### find

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(predicate: any, fallback: any) => (xs: any) => any
```
<!-- prettier-ignore-end -->

#### first

##### Type signature

<!-- prettier-ignore-start -->
```typescript
([x]: [any]) => any
```
<!-- prettier-ignore-end -->

#### flatMap

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(f: any) => (xs: any) => any
```
<!-- prettier-ignore-end -->

#### flatten

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any) => any[]
```
<!-- prettier-ignore-end -->

#### intersection

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any, ys: any) => any
```
<!-- prettier-ignore-end -->

#### is

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(value: any) => boolean
```
<!-- prettier-ignore-end -->

#### last

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any) => any
```
<!-- prettier-ignore-end -->

#### lengthDiffers

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(a: any, b: any) => boolean
```
<!-- prettier-ignore-end -->

#### map

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(...fs: any[]) => (x: any) => any
```
<!-- prettier-ignore-end -->

#### midpoint

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any) => any
```
<!-- prettier-ignore-end -->

#### minMax

##### Type signature

<!-- prettier-ignore-start -->
```typescript
([head, ...tail]: [any, ...any[]]) => any
```
<!-- prettier-ignore-end -->

#### multiple

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any) => boolean
```
<!-- prettier-ignore-end -->

#### none

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any) => boolean
```
<!-- prettier-ignore-end -->

#### partition

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(predicate: any) => (xs: any) => any
```
<!-- prettier-ignore-end -->

#### range

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(n: any) => number[]
```
<!-- prettier-ignore-end -->

#### repeat

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(n: any) => (value: any) => any[]
```
<!-- prettier-ignore-end -->

#### reverse

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any) => any[]
```
<!-- prettier-ignore-end -->

#### reverseIf

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(predicate: any) => (xs: any) => any
```
<!-- prettier-ignore-end -->

#### rotate

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(array: any) => (angle: any) => any
```
<!-- prettier-ignore-end -->

#### second

##### Type signature

<!-- prettier-ignore-start -->
```typescript
([, x]: [any, any]) => any
```
<!-- prettier-ignore-end -->

#### secondToLast

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any) => any
```
<!-- prettier-ignore-end -->

#### shift

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(n: any) => (xs: any) => any
```
<!-- prettier-ignore-end -->

#### shuffle

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any) => any
```
<!-- prettier-ignore-end -->

#### shuffleInPlace

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any) => any
```
<!-- prettier-ignore-end -->

#### single

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any) => boolean
```
<!-- prettier-ignore-end -->

#### skip

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(count: number) => (xs: any[]) => any[]
```
<!-- prettier-ignore-end -->

#### sort

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(f: any) => (xs: any) => any[]
```
<!-- prettier-ignore-end -->

#### sum

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any) => any
```
<!-- prettier-ignore-end -->

#### take

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(count: number) => (xs: any[]) => any[]
```
<!-- prettier-ignore-end -->

#### transpose

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any) => any[][]
```
<!-- prettier-ignore-end -->

#### unique

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any) => unknown[]
```
<!-- prettier-ignore-end -->

#### zip

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any, ys: any) => any
```
<!-- prettier-ignore-end -->

#### zipWith

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(f: any) => (xs: any, ys: any) => any
```
<!-- prettier-ignore-end -->

### async

#### debounce

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(f: any, wait: any) => (...args: any[]) => void
```
<!-- prettier-ignore-end -->

#### delay

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(duration: any) => Promise<unknown>
```
<!-- prettier-ignore-end -->

#### sequence

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(tasks: any) => Promise<any>
```
<!-- prettier-ignore-end -->

### date

#### byDateWithFallback

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(
  now: any
) => (
  {
    endedAt: aEnd,
    startedAt: aStart
  }: {
    endedAt: any;
    startedAt: any;
  },
  {
    endedAt: bEnd,
    startedAt: bStart
  }: {
    endedAt: any;
    startedAt: any;
  }
) => number
```
<!-- prettier-ignore-end -->

#### clamp

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(min: any, max: any) => (dateStringOrDate: any) => Date
```
<!-- prettier-ignore-end -->

#### dateDiff

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(a: any, b: any) => number
```
<!-- prettier-ignore-end -->

#### dateInRange

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(from: any, to: any) => (date?: Date) => boolean
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
}) => (date: any) => any[]
```
<!-- prettier-ignore-end -->

#### daysInMonths

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(leapYear: any) => number[]
```
<!-- prettier-ignore-end -->

#### daysInYear

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(year: any) => any
```
<!-- prettier-ignore-end -->

#### displayMonth

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(monthIndex: any) => string
```
<!-- prettier-ignore-end -->

#### displayTime

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(source: any, showSeconds: any) => string
```
<!-- prettier-ignore-end -->

#### endOfDay

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(
  date: any,
  timezoneOffset?: number,
  local?: boolean
) => Date
```
<!-- prettier-ignore-end -->

#### formatDate

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(sourceDate: any, timezoneOffset?: number) => string
```
<!-- prettier-ignore-end -->

#### formatDateTime

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(
  sourceDate: any,
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
  sourceDate: any,
  showDay?: boolean,
  timezoneOffset?: number
) => string
```
<!-- prettier-ignore-end -->

#### formatDuration

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(duration: any, showSeconds?: boolean) => string
```
<!-- prettier-ignore-end -->

#### formatTime

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(
  sourceDate: any,
  showSeconds?: boolean,
  timezoneOffset?: number
) => string
```
<!-- prettier-ignore-end -->

#### fromDays

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(days: any) => number
```
<!-- prettier-ignore-end -->

#### fromHours

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(hours: any) => number
```
<!-- prettier-ignore-end -->

#### fromMinutes

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(minutes: any) => number
```
<!-- prettier-ignore-end -->

#### fromSeconds

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(seconds: any) => number
```
<!-- prettier-ignore-end -->

#### joinDateTime

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(...xs: any[]) => string
```
<!-- prettier-ignore-end -->

#### leapYear

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(year: any) => boolean
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
(date: any) => Date
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
(dateTimeString: any) => any
```
<!-- prettier-ignore-end -->

#### startOfDay

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(
  date: any,
  timezoneOffset?: number,
  local?: boolean
) => Date
```
<!-- prettier-ignore-end -->

#### subtractDays

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(sourceDate: any, numberOfDays: any) => Date
```
<!-- prettier-ignore-end -->

#### toDate

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(date: any) => string
```
<!-- prettier-ignore-end -->

#### toDates

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any) => any
```
<!-- prettier-ignore-end -->

#### toDays

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(milliseconds: any) => number
```
<!-- prettier-ignore-end -->

#### toHours

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(milliseconds: any) => number
```
<!-- prettier-ignore-end -->

#### toISO

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(x: any) => any
```
<!-- prettier-ignore-end -->

#### toISOFromLocalDateTime

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(date: any) => string
```
<!-- prettier-ignore-end -->

#### toLocalDateTime

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(date: any, timezoneOffset?: number) => Date
```
<!-- prettier-ignore-end -->

#### toMinutes

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(milliseconds: any) => number
```
<!-- prettier-ignore-end -->

#### toSeconds

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(milliseconds: any) => number
```
<!-- prettier-ignore-end -->

#### valid

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(date: any) => boolean
```
<!-- prettier-ignore-end -->

### debug

#### assert

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(condition: any, callbackOrMessage: any) => void
```
<!-- prettier-ignore-end -->

#### diff

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(obj1: any, obj2: any) => object
```
<!-- prettier-ignore-end -->

### encoding

#### base64url

##### Type signature

<!-- prettier-ignore-start -->
```typescript
{
  encode: (_: any) => string;
}
```
<!-- prettier-ignore-end -->

### file

#### validName

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(name: any) => boolean
```
<!-- prettier-ignore-end -->

### function

#### compose

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(...fs: any[]) => (x: any) => any
```
<!-- prettier-ignore-end -->

#### constant

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(x: any) => () => any
```
<!-- prettier-ignore-end -->

#### identity

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(x: any) => any
```
<!-- prettier-ignore-end -->

#### memoize

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(f: any) => (...args: any[]) => any
```
<!-- prettier-ignore-end -->

#### memoizeShallow

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(f: any) => (...args: any[]) => any
```
<!-- prettier-ignore-end -->

#### memoizeWith

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(equals: any) => (f: any) => (...args: any[]) => any
```
<!-- prettier-ignore-end -->

#### noOp

##### Type signature

<!-- prettier-ignore-start -->
```typescript
() => void
```
<!-- prettier-ignore-end -->

#### not

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(f: any) => (...args: any[]) => boolean
```
<!-- prettier-ignore-end -->

#### pipe

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(...fs: any[]) => (x: any) => any
```
<!-- prettier-ignore-end -->

#### when

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(
  predicate: any
) => (action: any) => (...args: any[]) => any
```
<!-- prettier-ignore-end -->

#### whenTrue

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(action: any) => (...args: any[]) => any
```
<!-- prettier-ignore-end -->

### is

#### array

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(x: any) => boolean
```
<!-- prettier-ignore-end -->

#### byte

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(x: any) => boolean
```
<!-- prettier-ignore-end -->

#### date

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(x: any) => boolean
```
<!-- prettier-ignore-end -->

#### defined

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(x: any) => boolean
```
<!-- prettier-ignore-end -->

#### \_function

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(x: any) => boolean
```
<!-- prettier-ignore-end -->

#### integer

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(x: any) => boolean
```
<!-- prettier-ignore-end -->

#### normal

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(x: any) => boolean
```
<!-- prettier-ignore-end -->

#### number

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(x: any) => boolean
```
<!-- prettier-ignore-end -->

#### object

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(x: any) => boolean
```
<!-- prettier-ignore-end -->

#### string

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(x: any) => boolean
```
<!-- prettier-ignore-end -->

### math

#### add

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(a: number, b: number) => number
```
<!-- prettier-ignore-end -->

#### average

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: number[]) => number
```
<!-- prettier-ignore-end -->

#### ceilToNearestPowerOfTwo

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(x: number) => number
```
<!-- prettier-ignore-end -->

#### clamp

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(min: number, max: number) => (x: number) => number
```
<!-- prettier-ignore-end -->

#### clampNormal

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(x: number) => number
```
<!-- prettier-ignore-end -->

#### clampPercentage

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(x: number) => number
```
<!-- prettier-ignore-end -->

#### delta

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(a: number, b: number) => number
```
<!-- prettier-ignore-end -->

#### inRectangleRange

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

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(t: number) => (a: number, b: number) => number
```
<!-- prettier-ignore-end -->

#### maximumBy

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(f: (x: number) => number) => (xs: number[]) => number
```
<!-- prettier-ignore-end -->

#### median

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: number[]) => number
```
<!-- prettier-ignore-end -->

#### minMax

##### Type signature

<!-- prettier-ignore-start -->
```typescript
([a, b]: [number, number]) => [number, number]
```
<!-- prettier-ignore-end -->

#### safeNormalize

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(x: number) => number
```
<!-- prettier-ignore-end -->

#### sameSign

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: number[]) => boolean
```
<!-- prettier-ignore-end -->

#### standardDeviation

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: number[], origin?: number) => number
```
<!-- prettier-ignore-end -->

#### subtract

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(a: number, b: number) => number
```
<!-- prettier-ignore-end -->

### object

#### any

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any) => boolean
```
<!-- prettier-ignore-end -->

#### apply

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(
  fs: ((...xs: any[]) => any)[]
) => (...xs: any[]) => object
```
<!-- prettier-ignore-end -->

#### empty

##### Type signature

<!-- prettier-ignore-start -->
```typescript
{}
```
<!-- prettier-ignore-end -->

#### entries

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

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(...xs: any[]) => any
```
<!-- prettier-ignore-end -->

#### equals

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(a: any, b: any) => any
```
<!-- prettier-ignore-end -->

#### filter

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(f: any) => (xs: any) => object
```
<!-- prettier-ignore-end -->

#### find

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(predicate: any) => (xs: any) => unknown
```
<!-- prettier-ignore-end -->

#### findEntry

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(predicate: any) => (xs: any) => [string, unknown]
```
<!-- prettier-ignore-end -->

#### findKey

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(predicate: any) => (xs: any) => string
```
<!-- prettier-ignore-end -->

#### findValue

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(predicate: any) => (xs: any) => unknown
```
<!-- prettier-ignore-end -->

#### first

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any) => unknown
```
<!-- prettier-ignore-end -->

#### flatMapValues

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(f: any) => (xs: any) => any
```
<!-- prettier-ignore-end -->

#### fromEntries

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(keyValuePairs: [string, any][]) => object
```
<!-- prettier-ignore-end -->

#### groupBy

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(selector: any) => (xs: any) => any
```
<!-- prettier-ignore-end -->

#### hasKey

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(key: any) => (xs: any) => any
```
<!-- prettier-ignore-end -->

#### length

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any) => number
```
<!-- prettier-ignore-end -->

#### map

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(
  f: (value: any, key: string, context: object) => any
) => (xs: object) => object
```
<!-- prettier-ignore-end -->

#### mapEntries

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
(f: any) => (xs: any) => object
```
<!-- prettier-ignore-end -->

#### mapValues

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(f: any) => (xs: any) => any[]
```
<!-- prettier-ignore-end -->

#### merge

Merges two objects deeply.

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(a: object, b: object) => object
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

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any) => boolean
```
<!-- prettier-ignore-end -->

#### sort

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(f: any) => (xs: any) => object
```
<!-- prettier-ignore-end -->

### query

#### parse

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs?: string) => object
```
<!-- prettier-ignore-end -->

#### parsePathname

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(
  url: any
) => {
  pathname: any;
  search: string;
  hash: string;
}
```
<!-- prettier-ignore-end -->

#### read

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(source: any) => {}
```
<!-- prettier-ignore-end -->

#### serialize

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(xs?: {}) => string
```
<!-- prettier-ignore-end -->

### range

#### empty

##### Type signature

<!-- prettier-ignore-start -->
```typescript
([min, max]: [any, any]) => boolean
```
<!-- prettier-ignore-end -->

#### equals

##### Type signature

<!-- prettier-ignore-start -->
```typescript
([a, b]: [any, any], [c, d]: [any, any]) => boolean
```
<!-- prettier-ignore-end -->

#### length

##### Type signature

<!-- prettier-ignore-start -->
```typescript
([min, max]: [any, any]) => number
```
<!-- prettier-ignore-end -->

#### split

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(used: any, sourceRange?: number[]) => (range: any) => any
```
<!-- prettier-ignore-end -->

### regex

#### escape

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(string: any) => any
```
<!-- prettier-ignore-end -->

### string

#### containsWhitespace

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(x: any) => boolean
```
<!-- prettier-ignore-end -->

#### empty

##### Type signature

<!-- prettier-ignore-start -->
```typescript
""
```
<!-- prettier-ignore-end -->

#### firstToLower

##### Type signature

<!-- prettier-ignore-start -->
```typescript
([first, ...rest]: [any, ...any[]]) => string
```
<!-- prettier-ignore-end -->

#### firstToUpper

##### Type signature

<!-- prettier-ignore-start -->
```typescript
([first, ...rest]: [any, ...any[]]) => string
```
<!-- prettier-ignore-end -->

#### includes

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(search: any) => (xs: any) => boolean
```
<!-- prettier-ignore-end -->

#### nbsp

##### Type signature

<!-- prettier-ignore-start -->
```typescript
" "
```
<!-- prettier-ignore-end -->

#### nonEmpty

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(x: any) => any
```
<!-- prettier-ignore-end -->

#### startsWith

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(prefix: any) => (xs: any) => boolean
```
<!-- prettier-ignore-end -->

### vector2

#### add

##### Type signature

<!-- prettier-ignore-start -->
```typescript
([x1, y1]: [any, any], [x2, y2]: [any, any]) => any[]
```
<!-- prettier-ignore-end -->

#### convertSpace

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(space: any) => ([x, y]: [any, any]) => any[]
```
<!-- prettier-ignore-end -->

#### cross

##### Type signature

<!-- prettier-ignore-start -->
```typescript
([a, b]: [any, any], [c, d]: [any, any]) => number
```
<!-- prettier-ignore-end -->

#### dot

##### Type signature

<!-- prettier-ignore-start -->
```typescript
([a, b]: [any, any], [c, d]: [any, any]) => number
```
<!-- prettier-ignore-end -->

#### length

##### Type signature

<!-- prettier-ignore-start -->
```typescript
([x, y]: [any, any]) => number
```
<!-- prettier-ignore-end -->

#### mul

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(matrix: any, point: any) => any[]
```
<!-- prettier-ignore-end -->

#### multiply

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(
  m1: any,
  m2: any
) => {
  a: number;
  c: number;
  e: any;
  b: number;
  d: number;
  f: any;
}
```
<!-- prettier-ignore-end -->

#### normalize

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(vector: any) => any
```
<!-- prettier-ignore-end -->

#### reflect

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(a: any, v: any) => number[]
```
<!-- prettier-ignore-end -->

#### rotate

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(angle?: number, cx?: number, cy?: number) => any
```
<!-- prettier-ignore-end -->

#### scale

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

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(
  [x1, y1]: [any, any],
  [x2, y2]: [any, any]
) => number[]
```
<!-- prettier-ignore-end -->

#### transform

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(...matrices: any[]) => any
```
<!-- prettier-ignore-end -->

#### translate

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

##### Type signature

<!-- prettier-ignore-start -->
```typescript
(...xs: any[]) => any
```
<!-- prettier-ignore-end -->

#### events

##### cancel

###### Type signature

<!-- prettier-ignore-start -->
```typescript
(event: any) => boolean
```
<!-- prettier-ignore-end -->

##### openInNewTabIntent

###### Type signature

<!-- prettier-ignore-start -->
```typescript
({
  button,
  ctrlKey,
  metaKey,
  shiftKey
}: {
  button: any;
  ctrlKey: any;
  metaKey: any;
  shiftKey: any;
}) => any
```
<!-- prettier-ignore-end -->

##### prevent

###### Type signature

<!-- prettier-ignore-start -->
```typescript
(event: any) => boolean
```
<!-- prettier-ignore-end -->

##### stop

###### Type signature

<!-- prettier-ignore-start -->
```typescript
(event: any) => boolean
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
