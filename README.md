# std

[![Greenkeeper badge](https://badges.greenkeeper.io/sandstreamdev/std.svg)](https://greenkeeper.io/)
[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors)

## Docs

<!-- DOCS:START - Do not remove or modify this section -->

### array

#### any

Checks if the given array is not empty (contains at least one element).

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(xs: any[]) => boolean
<!-- prettier-ignore-end -->
```

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

```typescript
<!-- prettier-ignore-start -->
(...xs: any[]) => boolean
<!-- prettier-ignore-end -->
```

#### difference

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(xs: any, ys: any) => any
<!-- prettier-ignore-end -->
```

#### differs

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(xs: any, ys: any) => any
<!-- prettier-ignore-end -->
```

#### duplicates

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(xs: any) => any
<!-- prettier-ignore-end -->
```

#### empty

##### Type signature

```typescript
<!-- prettier-ignore-start -->
any[]
<!-- prettier-ignore-end -->
```

#### exact

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(n: any) => (xs: any) => any[]
<!-- prettier-ignore-end -->
```

#### except

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(y: any) => (xs: any) => any
<!-- prettier-ignore-end -->
```

#### filterInPlace

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(f: any) => (xs: any) => any
<!-- prettier-ignore-end -->
```

#### find

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(predicate: any, fallback: any) => (xs: any) => any
<!-- prettier-ignore-end -->
```

#### first

##### Type signature

```typescript
<!-- prettier-ignore-start -->
([x]: [any]) => any
<!-- prettier-ignore-end -->
```

#### flatMap

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(f: any) => (xs: any) => any
<!-- prettier-ignore-end -->
```

#### flatten

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(xs: any) => any[]
<!-- prettier-ignore-end -->
```

#### intersection

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(xs: any, ys: any) => any
<!-- prettier-ignore-end -->
```

#### is

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(value: any) => boolean
<!-- prettier-ignore-end -->
```

#### last

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(xs: any) => any
<!-- prettier-ignore-end -->
```

#### lengthDiffers

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(a: any, b: any) => boolean
<!-- prettier-ignore-end -->
```

#### map

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(...fs: any[]) => (x: any) => any
<!-- prettier-ignore-end -->
```

#### midpoint

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(xs: any) => any
<!-- prettier-ignore-end -->
```

#### minMax

##### Type signature

```typescript
<!-- prettier-ignore-start -->
([head, ...tail]: [any, ...any[]]) => any
<!-- prettier-ignore-end -->
```

#### multiple

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(xs: any) => boolean
<!-- prettier-ignore-end -->
```

#### none

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(xs: any) => boolean
<!-- prettier-ignore-end -->
```

#### partition

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(predicate: any) => (xs: any) => any
<!-- prettier-ignore-end -->
```

#### range

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(n: any) => number[]
<!-- prettier-ignore-end -->
```

#### repeat

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(n: any) => (value: any) => any[]
<!-- prettier-ignore-end -->
```

#### reverse

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(xs: any) => any[]
<!-- prettier-ignore-end -->
```

#### reverseIf

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(predicate: any) => (xs: any) => any
<!-- prettier-ignore-end -->
```

#### rotate

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(array: any) => (angle: any) => any
<!-- prettier-ignore-end -->
```

#### second

##### Type signature

```typescript
<!-- prettier-ignore-start -->
([, x]: [any, any]) => any
<!-- prettier-ignore-end -->
```

#### secondToLast

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(xs: any) => any
<!-- prettier-ignore-end -->
```

#### shift

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(n: any) => (xs: any) => any
<!-- prettier-ignore-end -->
```

#### shuffle

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(xs: any) => any
<!-- prettier-ignore-end -->
```

#### shuffleInPlace

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(xs: any) => any
<!-- prettier-ignore-end -->
```

#### single

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(xs: any) => boolean
<!-- prettier-ignore-end -->
```

#### skip

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(count: number) => (xs: any[]) => any[]
<!-- prettier-ignore-end -->
```

#### sort

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(f: any) => (xs: any) => any[]
<!-- prettier-ignore-end -->
```

#### sum

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(xs: any) => any
<!-- prettier-ignore-end -->
```

#### take

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(count: number) => (xs: any[]) => any[]
<!-- prettier-ignore-end -->
```

#### transpose

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(xs: any) => any[][]
<!-- prettier-ignore-end -->
```

#### unique

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(xs: any) => unknown[]
<!-- prettier-ignore-end -->
```

#### zip

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(xs: any, ys: any) => any
<!-- prettier-ignore-end -->
```

#### zipWith

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(f: any) => (xs: any, ys: any) => any
<!-- prettier-ignore-end -->
```

### async

#### debounce

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(f: any, wait: any) => (...args: any[]) => void
<!-- prettier-ignore-end -->
```

#### delay

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(duration: any) => Promise<unknown>
<!-- prettier-ignore-end -->
```

#### sequence

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(tasks: any) => Promise<any>
<!-- prettier-ignore-end -->
```

### date

#### byDateWithFallback

##### Type signature

```typescript
<!-- prettier-ignore-start -->
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
<!-- prettier-ignore-end -->
```

#### clamp

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(min: any, max: any) => (dateStringOrDate: any) => Date
<!-- prettier-ignore-end -->
```

#### dateDiff

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(a: any, b: any) => number
<!-- prettier-ignore-end -->
```

#### dateInRange

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(from: any, to: any) => (date?: Date) => boolean
<!-- prettier-ignore-end -->
```

#### dayRange

##### Type signature

```typescript
<!-- prettier-ignore-start -->
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
<!-- prettier-ignore-end -->
```

#### daysInMonths

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(leapYear: any) => number[]
<!-- prettier-ignore-end -->
```

#### daysInYear

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(year: any) => any
<!-- prettier-ignore-end -->
```

#### displayMonth

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(monthIndex: any) => string
<!-- prettier-ignore-end -->
```

#### displayTime

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(source: any, showSeconds: any) => string
<!-- prettier-ignore-end -->
```

#### endOfDay

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(
  date: any,
  timezoneOffset?: number,
  local?: boolean
) => Date
<!-- prettier-ignore-end -->
```

#### formatDate

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(sourceDate: any, timezoneOffset?: number) => string
<!-- prettier-ignore-end -->
```

#### formatDateTime

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(
  sourceDate: any,
  showSeconds?: boolean,
  timezoneOffset?: number
) => string
<!-- prettier-ignore-end -->
```

#### formatDisplayDate

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(
  sourceDate: any,
  showDay?: boolean,
  timezoneOffset?: number
) => string
<!-- prettier-ignore-end -->
```

#### formatDuration

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(duration: any, showSeconds?: boolean) => string
<!-- prettier-ignore-end -->
```

#### formatTime

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(
  sourceDate: any,
  showSeconds?: boolean,
  timezoneOffset?: number
) => string
<!-- prettier-ignore-end -->
```

#### fromDays

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(days: any) => number
<!-- prettier-ignore-end -->
```

#### fromHours

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(hours: any) => number
<!-- prettier-ignore-end -->
```

#### fromMinutes

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(minutes: any) => number
<!-- prettier-ignore-end -->
```

#### fromSeconds

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(seconds: any) => number
<!-- prettier-ignore-end -->
```

#### joinDateTime

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(...xs: any[]) => string
<!-- prettier-ignore-end -->
```

#### leapYear

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(year: any) => boolean
<!-- prettier-ignore-end -->
```

#### monthNames

##### Type signature

```typescript
<!-- prettier-ignore-start -->
string[]
<!-- prettier-ignore-end -->
```

#### offsetByBit

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(date: any) => Date
<!-- prettier-ignore-end -->
```

#### parseHourMinutePair

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(text?: string) => number[]
<!-- prettier-ignore-end -->
```

#### splitDateTime

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(dateTimeString: any) => any
<!-- prettier-ignore-end -->
```

#### startOfDay

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(
  date: any,
  timezoneOffset?: number,
  local?: boolean
) => Date
<!-- prettier-ignore-end -->
```

#### subtractDays

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(sourceDate: any, numberOfDays: any) => Date
<!-- prettier-ignore-end -->
```

#### toDate

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(date: any) => string
<!-- prettier-ignore-end -->
```

#### toDates

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(xs: any) => any
<!-- prettier-ignore-end -->
```

#### toDays

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(milliseconds: any) => number
<!-- prettier-ignore-end -->
```

#### toHours

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(milliseconds: any) => number
<!-- prettier-ignore-end -->
```

#### toISO

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(x: any) => any
<!-- prettier-ignore-end -->
```

#### toISOFromLocalDateTime

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(date: any) => string
<!-- prettier-ignore-end -->
```

#### toLocalDateTime

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(date: any, timezoneOffset?: number) => Date
<!-- prettier-ignore-end -->
```

#### toMinutes

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(milliseconds: any) => number
<!-- prettier-ignore-end -->
```

#### toSeconds

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(milliseconds: any) => number
<!-- prettier-ignore-end -->
```

#### valid

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(date: any) => boolean
<!-- prettier-ignore-end -->
```

### debug

#### assert

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(condition: any, callbackOrMessage: any) => void
<!-- prettier-ignore-end -->
```

#### diff

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(obj1: any, obj2: any) => object
<!-- prettier-ignore-end -->
```

### encoding

#### base64url

##### Type signature

```typescript
<!-- prettier-ignore-start -->
{
  encode: (_: any) => string;
}
<!-- prettier-ignore-end -->
```

### file

#### validName

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(name: any) => boolean
<!-- prettier-ignore-end -->
```

### function

#### compose

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(...fs: any[]) => (x: any) => any
<!-- prettier-ignore-end -->
```

#### constant

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(x: any) => () => any
<!-- prettier-ignore-end -->
```

#### identity

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(x: any) => any
<!-- prettier-ignore-end -->
```

#### memoize

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(f: any) => (...args: any[]) => any
<!-- prettier-ignore-end -->
```

#### memoizeShallow

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(f: any) => (...args: any[]) => any
<!-- prettier-ignore-end -->
```

#### memoizeWith

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(equals: any) => (f: any) => (...args: any[]) => any
<!-- prettier-ignore-end -->
```

#### noOp

##### Type signature

```typescript
<!-- prettier-ignore-start -->
() => void
<!-- prettier-ignore-end -->
```

#### not

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(f: any) => (...args: any[]) => boolean
<!-- prettier-ignore-end -->
```

#### pipe

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(...fs: any[]) => (x: any) => any
<!-- prettier-ignore-end -->
```

#### when

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(
  predicate: any
) => (action: any) => (...args: any[]) => any
<!-- prettier-ignore-end -->
```

#### whenTrue

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(action: any) => (...args: any[]) => any
<!-- prettier-ignore-end -->
```

### is

#### array

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(x: any) => boolean
<!-- prettier-ignore-end -->
```

#### byte

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(x: any) => boolean
<!-- prettier-ignore-end -->
```

#### date

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(x: any) => boolean
<!-- prettier-ignore-end -->
```

#### defined

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(x: any) => boolean
<!-- prettier-ignore-end -->
```

#### \_function

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(x: any) => boolean
<!-- prettier-ignore-end -->
```

#### integer

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(x: any) => boolean
<!-- prettier-ignore-end -->
```

#### normal

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(x: any) => boolean
<!-- prettier-ignore-end -->
```

#### number

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(x: any) => boolean
<!-- prettier-ignore-end -->
```

#### object

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(x: any) => boolean
<!-- prettier-ignore-end -->
```

#### string

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(x: any) => boolean
<!-- prettier-ignore-end -->
```

### math

#### add

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(a: number, b: number) => number
<!-- prettier-ignore-end -->
```

#### average

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(xs: number[]) => number
<!-- prettier-ignore-end -->
```

#### ceilToNearestPowerOfTwo

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(x: number) => number
<!-- prettier-ignore-end -->
```

#### clamp

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(min: number, max: number) => (x: number) => number
<!-- prettier-ignore-end -->
```

#### clampNormal

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(x: number) => number
<!-- prettier-ignore-end -->
```

#### clampPercentage

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(x: number) => number
<!-- prettier-ignore-end -->
```

#### delta

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(a: number, b: number) => number
<!-- prettier-ignore-end -->
```

#### inRectangleRange

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(
  width: number,
  height: number
) => (x: number, y: number) => boolean
<!-- prettier-ignore-end -->
```

#### lerp

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(t: number) => (a: number, b: number) => number
<!-- prettier-ignore-end -->
```

#### maximumBy

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(f: (x: number) => number) => (xs: number[]) => number
<!-- prettier-ignore-end -->
```

#### median

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(xs: number[]) => number
<!-- prettier-ignore-end -->
```

#### minMax

##### Type signature

```typescript
<!-- prettier-ignore-start -->
([a, b]: [number, number]) => [number, number]
<!-- prettier-ignore-end -->
```

#### safeNormalize

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(x: number) => number
<!-- prettier-ignore-end -->
```

#### sameSign

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(xs: number[]) => boolean
<!-- prettier-ignore-end -->
```

#### standardDeviation

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(xs: number[], origin?: number) => number
<!-- prettier-ignore-end -->
```

#### subtract

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(a: number, b: number) => number
<!-- prettier-ignore-end -->
```

### object

#### any

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(xs: any) => boolean
<!-- prettier-ignore-end -->
```

#### apply

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(
  fs: ((...xs: any[]) => any)[]
) => (...xs: any[]) => object
<!-- prettier-ignore-end -->
```

#### empty

##### Type signature

```typescript
<!-- prettier-ignore-start -->
{}
<!-- prettier-ignore-end -->
```

#### entries

##### Type signature

```typescript
<!-- prettier-ignore-start -->
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
<!-- prettier-ignore-end -->
```

#### enumerable

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(...xs: any[]) => any
<!-- prettier-ignore-end -->
```

#### equals

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(a: any, b: any) => any
<!-- prettier-ignore-end -->
```

#### filter

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(f: any) => (xs: any) => object
<!-- prettier-ignore-end -->
```

#### find

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(predicate: any) => (xs: any) => unknown
<!-- prettier-ignore-end -->
```

#### findEntry

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(predicate: any) => (xs: any) => [string, unknown]
<!-- prettier-ignore-end -->
```

#### findKey

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(predicate: any) => (xs: any) => string
<!-- prettier-ignore-end -->
```

#### findValue

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(predicate: any) => (xs: any) => unknown
<!-- prettier-ignore-end -->
```

#### first

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(xs: any) => unknown
<!-- prettier-ignore-end -->
```

#### flatMapValues

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(f: any) => (xs: any) => any
<!-- prettier-ignore-end -->
```

#### fromEntries

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(keyValuePairs: [string, any][]) => object
<!-- prettier-ignore-end -->
```

#### groupBy

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(selector: any) => (xs: any) => any
<!-- prettier-ignore-end -->
```

#### hasKey

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(key: any) => (xs: any) => any
<!-- prettier-ignore-end -->
```

#### length

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(xs: any) => number
<!-- prettier-ignore-end -->
```

#### map

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(
  f: (value: any, key: string, context: object) => any
) => (xs: object) => object
<!-- prettier-ignore-end -->
```

#### mapEntries

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(
  f: (value: any, key: string, context: object) => any
) => (xs: object) => [string, any][]
<!-- prettier-ignore-end -->
```

#### mapKeys

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(f: any) => (xs: any) => object
<!-- prettier-ignore-end -->
```

#### mapValues

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(f: any) => (xs: any) => any[]
<!-- prettier-ignore-end -->
```

#### merge

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(a: object, b: object) => object
<!-- prettier-ignore-end -->
```

#### none

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(xs: any) => boolean
<!-- prettier-ignore-end -->
```

#### sort

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(f: any) => (xs: any) => object
<!-- prettier-ignore-end -->
```

### query

#### parse

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(xs?: string) => object
<!-- prettier-ignore-end -->
```

#### parsePathname

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(
  url: any
) => {
  pathname: any;
  search: string;
  hash: string;
}
<!-- prettier-ignore-end -->
```

#### read

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(source: any) => {}
<!-- prettier-ignore-end -->
```

#### serialize

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(xs?: {}) => string
<!-- prettier-ignore-end -->
```

### range

#### empty

##### Type signature

```typescript
<!-- prettier-ignore-start -->
([min, max]: [any, any]) => boolean
<!-- prettier-ignore-end -->
```

#### equals

##### Type signature

```typescript
<!-- prettier-ignore-start -->
([a, b]: [any, any], [c, d]: [any, any]) => boolean
<!-- prettier-ignore-end -->
```

#### length

##### Type signature

```typescript
<!-- prettier-ignore-start -->
([min, max]: [any, any]) => number
<!-- prettier-ignore-end -->
```

#### split

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(used: any, sourceRange?: number[]) => (range: any) => any
<!-- prettier-ignore-end -->
```

### regex

#### escape

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(string: any) => any
<!-- prettier-ignore-end -->
```

### string

#### containsWhitespace

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(x: any) => boolean
<!-- prettier-ignore-end -->
```

#### empty

##### Type signature

```typescript
<!-- prettier-ignore-start -->
""
<!-- prettier-ignore-end -->
```

#### firstToLower

##### Type signature

```typescript
<!-- prettier-ignore-start -->
([first, ...rest]: [any, ...any[]]) => string
<!-- prettier-ignore-end -->
```

#### firstToUpper

##### Type signature

```typescript
<!-- prettier-ignore-start -->
([first, ...rest]: [any, ...any[]]) => string
<!-- prettier-ignore-end -->
```

#### includes

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(search: any) => (xs: any) => boolean
<!-- prettier-ignore-end -->
```

#### nbsp

##### Type signature

```typescript
<!-- prettier-ignore-start -->
" "
<!-- prettier-ignore-end -->
```

#### nonEmpty

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(x: any) => any
<!-- prettier-ignore-end -->
```

#### startsWith

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(prefix: any) => (xs: any) => boolean
<!-- prettier-ignore-end -->
```

### vector2

#### add

##### Type signature

```typescript
<!-- prettier-ignore-start -->
([x1, y1]: [any, any], [x2, y2]: [any, any]) => any[]
<!-- prettier-ignore-end -->
```

#### convertSpace

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(space: any) => ([x, y]: [any, any]) => any[]
<!-- prettier-ignore-end -->
```

#### cross

##### Type signature

```typescript
<!-- prettier-ignore-start -->
([a, b]: [any, any], [c, d]: [any, any]) => number
<!-- prettier-ignore-end -->
```

#### dot

##### Type signature

```typescript
<!-- prettier-ignore-start -->
([a, b]: [any, any], [c, d]: [any, any]) => number
<!-- prettier-ignore-end -->
```

#### length

##### Type signature

```typescript
<!-- prettier-ignore-start -->
([x, y]: [any, any]) => number
<!-- prettier-ignore-end -->
```

#### mul

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(matrix: any, point: any) => any[]
<!-- prettier-ignore-end -->
```

#### multiply

##### Type signature

```typescript
<!-- prettier-ignore-start -->
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
<!-- prettier-ignore-end -->
```

#### normalize

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(vector: any) => any
<!-- prettier-ignore-end -->
```

#### reflect

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(a: any, v: any) => number[]
<!-- prettier-ignore-end -->
```

#### rotate

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(angle?: number, cx?: number, cy?: number) => any
<!-- prettier-ignore-end -->
```

#### scale

##### Type signature

```typescript
<!-- prettier-ignore-start -->
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
<!-- prettier-ignore-end -->
```

#### sub

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(
  [x1, y1]: [any, any],
  [x2, y2]: [any, any]
) => number[]
<!-- prettier-ignore-end -->
```

#### transform

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(...matrices: any[]) => any
<!-- prettier-ignore-end -->
```

#### translate

##### Type signature

```typescript
<!-- prettier-ignore-start -->
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
<!-- prettier-ignore-end -->
```

### web

#### classNames

##### Type signature

```typescript
<!-- prettier-ignore-start -->
(...xs: any[]) => any
<!-- prettier-ignore-end -->
```

#### events

##### cancel

###### Type signature

```typescript
<!-- prettier-ignore-start -->
(event: any) => boolean
<!-- prettier-ignore-end -->
```

##### openInNewTabIntent

###### Type signature

```typescript
<!-- prettier-ignore-start -->
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
<!-- prettier-ignore-end -->
```

##### prevent

###### Type signature

```typescript
<!-- prettier-ignore-start -->
(event: any) => boolean
<!-- prettier-ignore-end -->
```

##### stop

###### Type signature

```typescript
<!-- prettier-ignore-start -->
(event: any) => boolean
<!-- prettier-ignore-end -->
```

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
