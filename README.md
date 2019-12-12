# std

[![Greenkeeper badge](https://badges.greenkeeper.io/sandstreamdev/std.svg)](https://greenkeeper.io/)
[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors)

## Docs

<!-- DOCS:START - Do not remove or modify this section -->

### array

#### any

Checks if the given array is not empty (contains at least one element).

##### Type signature

```
(xs: any[]) => boolean
```

##### Examples

```javascript
any([]); // ⇒ false
```

```javascript
any([1, 2, 3]); // ⇒ true
```

##### Questions

- How to check if an array is empty (in JavaScript)?
- How to check if array is empty or null or undefined (in JavaScript)?
- Check if an array is empty or not (in JavaScript).
- Check if an array is empty or exists (in JavaScript).

#### are

Checks if given arguments are all `Arrays`.

##### Type signature

```
(...xs: any[]) => boolean
```

#### difference

##### Type signature

```
(xs: any, ys: any) => any
```

#### differs

##### Type signature

```
(xs: any, ys: any) => any
```

#### duplicates

##### Type signature

```
(xs: any) => any
```

#### empty

##### Type signature

```
any[]
```

#### exact

##### Type signature

```
(n: any) => (xs: any) => any[]
```

#### except

##### Type signature

```
(y: any) => (xs: any) => any
```

#### filterInPlace

##### Type signature

```
(f: any) => (xs: any) => any
```

#### find

##### Type signature

```
(predicate: any, fallback: any) => (xs: any) => any
```

#### first

##### Type signature

```
([x]: [any]) => any
```

#### flatMap

##### Type signature

```
(f: any) => (xs: any) => any
```

#### flatten

##### Type signature

```
(xs: any) => any[]
```

#### intersection

##### Type signature

```
(xs: any, ys: any) => any
```

#### is

##### Type signature

```
(value: any) => boolean
```

#### last

##### Type signature

```
(xs: any) => any
```

#### lengthDiffers

##### Type signature

```
(a: any, b: any) => boolean
```

#### map

##### Type signature

```
(...fs: any[]) => (x: any) => any
```

#### midpoint

##### Type signature

```
(xs: any) => any
```

#### minMax

##### Type signature

```
([head, ...tail]: [any, ...any[]]) => any
```

#### multiple

##### Type signature

```
(xs: any) => boolean
```

#### none

##### Type signature

```
(xs: any) => boolean
```

#### partition

##### Type signature

```
(predicate: any) => (xs: any) => any
```

#### range

##### Type signature

```
(n: any) => number[]
```

#### repeat

##### Type signature

```
(n: any) => (value: any) => any[]
```

#### reverse

##### Type signature

```
(xs: any) => any[]
```

#### reverseIf

##### Type signature

```
(predicate: any) => (xs: any) => any
```

#### rotate

##### Type signature

```
(array: any) => (angle: any) => any
```

#### second

##### Type signature

```
([, x]: [any, any]) => any
```

#### secondToLast

##### Type signature

```
(xs: any) => any
```

#### shift

##### Type signature

```
(n: any) => (xs: any) => any
```

#### shuffle

##### Type signature

```
(xs: any) => any
```

#### shuffleInPlace

##### Type signature

```
(xs: any) => any
```

#### single

##### Type signature

```
(xs: any) => boolean
```

#### skip

##### Type signature

```
(count: number) => (xs: any[]) => any[]
```

#### sort

##### Type signature

```
(f: any) => (xs: any) => any[]
```

#### sum

##### Type signature

```
(xs: any) => any
```

#### take

##### Type signature

```
(count: number) => (xs: any[]) => any[]
```

#### transpose

##### Type signature

```
(xs: any) => any[][]
```

#### unique

##### Type signature

```
(xs: any) => unknown[]
```

#### zip

##### Type signature

```
(xs: any, ys: any) => any
```

#### zipWith

##### Type signature

```
(f: any) => (xs: any, ys: any) => any
```

### async

#### debounce

##### Type signature

```
(f: any, wait: any) => (...args: any[]) => void
```

#### delay

##### Type signature

```
(duration: any) => Promise<unknown>
```

#### sequence

##### Type signature

```
(tasks: any) => Promise<any>
```

### date

#### byDateWithFallback

##### Type signature

```
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

#### clamp

##### Type signature

```
(min: any, max: any) => (dateStringOrDate: any) => Date
```

#### dateDiff

##### Type signature

```
(a: any, b: any) => number
```

#### dateInRange

##### Type signature

```
(from: any, to: any) => (date?: Date) => boolean
```

#### dayRange

##### Type signature

```
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

#### daysInMonths

##### Type signature

```
(leapYear: any) => number[]
```

#### daysInYear

##### Type signature

```
(year: any) => any
```

#### displayMonth

##### Type signature

```
(monthIndex: any) => string
```

#### displayTime

##### Type signature

```
(source: any, showSeconds: any) => string
```

#### endOfDay

##### Type signature

```
(
  date: any,
  timezoneOffset?: number,
  local?: boolean
) => Date
```

#### formatDate

##### Type signature

```
(sourceDate: any, timezoneOffset?: number) => string
```

#### formatDateTime

##### Type signature

```
(
  sourceDate: any,
  showSeconds?: boolean,
  timezoneOffset?: number
) => string
```

#### formatDisplayDate

##### Type signature

```
(
  sourceDate: any,
  showDay?: boolean,
  timezoneOffset?: number
) => string
```

#### formatDuration

##### Type signature

```
(duration: any, showSeconds?: boolean) => string
```

#### formatTime

##### Type signature

```
(
  sourceDate: any,
  showSeconds?: boolean,
  timezoneOffset?: number
) => string
```

#### fromDays

##### Type signature

```
(days: any) => number
```

#### fromHours

##### Type signature

```
(hours: any) => number
```

#### fromMinutes

##### Type signature

```
(minutes: any) => number
```

#### fromSeconds

##### Type signature

```
(seconds: any) => number
```

#### joinDateTime

##### Type signature

```
(...xs: any[]) => string
```

#### leapYear

##### Type signature

```
(year: any) => boolean
```

#### monthNames

##### Type signature

```
string[]
```

#### offsetByBit

##### Type signature

```
(date: any) => Date
```

#### parseHourMinutePair

##### Type signature

```
(text?: string) => number[]
```

#### splitDateTime

##### Type signature

```
(dateTimeString: any) => any
```

#### startOfDay

##### Type signature

```
(
  date: any,
  timezoneOffset?: number,
  local?: boolean
) => Date
```

#### subtractDays

##### Type signature

```
(sourceDate: any, numberOfDays: any) => Date
```

#### toDate

##### Type signature

```
(date: any) => string
```

#### toDates

##### Type signature

```
(xs: any) => any
```

#### toDays

##### Type signature

```
(milliseconds: any) => number
```

#### toHours

##### Type signature

```
(milliseconds: any) => number
```

#### toISO

##### Type signature

```
(x: any) => any
```

#### toISOFromLocalDateTime

##### Type signature

```
(date: any) => string
```

#### toLocalDateTime

##### Type signature

```
(date: any, timezoneOffset?: number) => Date
```

#### toMinutes

##### Type signature

```
(milliseconds: any) => number
```

#### toSeconds

##### Type signature

```
(milliseconds: any) => number
```

#### valid

##### Type signature

```
(date: any) => boolean
```

### debug

#### assert

##### Type signature

```
(condition: any, callbackOrMessage: any) => void
```

#### diff

### encoding

#### base64url

### file

#### validName

##### Type signature

```
(name: any) => boolean
```

### function

#### compose

##### Type signature

```
(...fs: any[]) => (x: any) => any
```

#### constant

##### Type signature

```
(x: any) => () => any
```

#### identity

##### Type signature

```
(x: any) => any
```

#### memoize

##### Type signature

```
(f: any) => (...args: any[]) => any
```

#### memoizeShallow

##### Type signature

```
(f: any) => (...args: any[]) => any
```

#### memoizeWith

##### Type signature

```
(equals: any) => (f: any) => (...args: any[]) => any
```

#### noOp

##### Type signature

```
() => void
```

#### not

##### Type signature

```
(f: any) => (...args: any[]) => boolean
```

#### pipe

##### Type signature

```
(...fs: any[]) => (x: any) => any
```

#### when

##### Type signature

```
(
  predicate: any
) => (action: any) => (...args: any[]) => any
```

#### whenTrue

##### Type signature

```
(action: any) => (...args: any[]) => any
```

### is

#### array

##### Type signature

```
(x: any) => boolean
```

#### byte

##### Type signature

```
(x: any) => boolean
```

#### date

##### Type signature

```
(x: any) => boolean
```

#### defined

##### Type signature

```
(x: any) => boolean
```

#### \_function

##### Type signature

```
(x: any) => boolean
```

#### integer

##### Type signature

```
(x: any) => boolean
```

#### normal

##### Type signature

```
(x: any) => boolean
```

#### number

##### Type signature

```
(x: any) => boolean
```

#### object

##### Type signature

```
(x: any) => boolean
```

#### string

##### Type signature

```
(x: any) => boolean
```

### math

#### add

##### Type signature

```
(a: number, b: number) => number
```

#### average

##### Type signature

```
(xs: number[]) => number
```

#### ceilToNearestPowerOfTwo

##### Type signature

```
(x: number) => number
```

#### clamp

##### Type signature

```
(min: number, max: number) => (x: number) => number
```

#### clampNormal

##### Type signature

```
(x: number) => number
```

#### clampPercentage

##### Type signature

```
(x: number) => number
```

#### delta

##### Type signature

```
(a: number, b: number) => number
```

#### inRectangleRange

##### Type signature

```
(
  width: number,
  height: number
) => (x: number, y: number) => boolean
```

#### lerp

##### Type signature

```
(t: number) => (a: number, b: number) => number
```

#### maximumBy

##### Type signature

```
(f: (x: number) => number) => (xs: number[]) => number
```

#### median

##### Type signature

```
(xs: number[]) => number
```

#### minMax

##### Type signature

```
([a, b]: [number, number]) => [number, number]
```

#### safeNormalize

##### Type signature

```
(x: number) => number
```

#### sameSign

##### Type signature

```
(xs: number[]) => boolean
```

#### standardDeviation

##### Type signature

```
(xs: number[], origin?: number) => number
```

#### subtract

##### Type signature

```
(a: number, b: number) => number
```

### object

#### any

##### Type signature

```
(xs: any) => boolean
```

#### apply

##### Type signature

```
(
  fs: ((...xs: any[]) => any)[]
) => (...xs: any[]) => object
```

#### empty

##### Type signature

```
{}
```

#### entries

##### Type signature

```
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

#### enumerable

##### Type signature

```
(...xs: any[]) => any
```

#### equals

##### Type signature

```
(a: any, b: any) => any
```

#### filter

##### Type signature

```
(f: any) => (xs: any) => object
```

#### find

##### Type signature

```
(predicate: any) => (xs: any) => unknown
```

#### findEntry

##### Type signature

```
(predicate: any) => (xs: any) => [string, unknown]
```

#### findKey

##### Type signature

```
(predicate: any) => (xs: any) => string
```

#### findValue

##### Type signature

```
(predicate: any) => (xs: any) => unknown
```

#### first

##### Type signature

```
(xs: any) => unknown
```

#### flatMapValues

##### Type signature

```
(f: any) => (xs: any) => any
```

#### fromEntries

##### Type signature

```
(keyValuePairs: [string, any][]) => object
```

#### groupBy

##### Type signature

```
(selector: any) => (xs: any) => any
```

#### hasKey

##### Type signature

```
(key: any) => (xs: any) => any
```

#### length

##### Type signature

```
(xs: any) => number
```

#### map

##### Type signature

```
(
  f: (value: any, key: string, context: object) => any
) => (xs: object) => object
```

#### mapEntries

##### Type signature

```
(
  f: (value: any, key: string, context: object) => any
) => (xs: object) => [string, any][]
```

#### mapKeys

##### Type signature

```
(f: any) => (xs: any) => object
```

#### mapValues

##### Type signature

```
(f: any) => (xs: any) => any[]
```

#### merge

##### Type signature

```
(a: object, b: object) => object
```

#### none

##### Type signature

```
(xs: any) => boolean
```

#### sort

##### Type signature

```
(f: any) => (xs: any) => object
```

### query

#### parse

##### Type signature

```
(xs?: string) => object
```

#### parsePathname

##### Type signature

```
(
  url: any
) => {
  pathname: any;
  search: string;
  hash: string;
}
```

#### read

##### Type signature

```
(source: any) => {}
```

#### serialize

##### Type signature

```
(xs?: {}) => string
```

### range

#### empty

##### Type signature

```
([min, max]: [any, any]) => boolean
```

#### equals

##### Type signature

```
([a, b]: [any, any], [c, d]: [any, any]) => boolean
```

#### length

##### Type signature

```
([min, max]: [any, any]) => number
```

#### split

##### Type signature

```
(used: any, sourceRange?: number[]) => (range: any) => any
```

### regex

#### escape

##### Type signature

```
(string: any) => any
```

### string

#### containsWhitespace

##### Type signature

```
(x: any) => boolean
```

#### empty

##### Type signature

```
""
```

#### firstToLower

##### Type signature

```
([first, ...rest]: [any, ...any[]]) => string
```

#### firstToUpper

##### Type signature

```
([first, ...rest]: [any, ...any[]]) => string
```

#### includes

##### Type signature

```
(search: any) => (xs: any) => boolean
```

#### nbsp

##### Type signature

```
" "
```

#### nonEmpty

##### Type signature

```
(x: any) => any
```

#### startsWith

##### Type signature

```
(prefix: any) => (xs: any) => boolean
```

### vector2

#### add

##### Type signature

```
([x1, y1]: [any, any], [x2, y2]: [any, any]) => any[]
```

#### convertSpace

##### Type signature

```
(space: any) => ([x, y]: [any, any]) => any[]
```

#### cross

##### Type signature

```
([a, b]: [any, any], [c, d]: [any, any]) => number
```

#### dot

##### Type signature

```
([a, b]: [any, any], [c, d]: [any, any]) => number
```

#### length

##### Type signature

```
([x, y]: [any, any]) => number
```

#### mul

##### Type signature

```
(matrix: any, point: any) => any[]
```

#### multiply

##### Type signature

```
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

#### normalize

##### Type signature

```
(vector: any) => any
```

#### reflect

##### Type signature

```
(a: any, v: any) => number[]
```

#### rotate

##### Type signature

```
(angle?: number, cx?: number, cy?: number) => any
```

#### scale

##### Type signature

```
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

#### sub

##### Type signature

```
(
  [x1, y1]: [any, any],
  [x2, y2]: [any, any]
) => number[]
```

#### transform

##### Type signature

```
(...matrices: any[]) => any
```

#### translate

##### Type signature

```
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

### web

#### classNames

##### Type signature

```
(...xs: any[]) => any
```

#### events

##### cancel

###### Type signature

```
(event: any) => boolean
```

##### openInNewTabIntent

###### Type signature

```
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

##### prevent

###### Type signature

```
(event: any) => boolean
```

##### stop

###### Type signature

```
(event: any) => boolean
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
