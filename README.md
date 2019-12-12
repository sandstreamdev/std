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
(xs: any[]) => boolean;
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

```typescript
(...xs: any[]) => boolean;
```

#### difference

##### Type signature

```typescript
(xs: any, ys: any) => any;
```

#### differs

##### Type signature

```typescript
(xs: any, ys: any) => any;
```

#### duplicates

##### Type signature

```typescript
(xs: any) => any;
```

#### empty

##### Type signature

```typescript
any[]
```

#### exact

##### Type signature

```typescript
(n: any) => (xs: any) => any[]
```

#### except

##### Type signature

```typescript
(y: any) => (xs: any) => any;
```

#### filterInPlace

##### Type signature

```typescript
(f: any) => (xs: any) => any;
```

#### find

##### Type signature

```typescript
(predicate: any, fallback: any) => (xs: any) => any;
```

#### first

##### Type signature

```typescript
([x]: [any]) => any;
```

#### flatMap

##### Type signature

```typescript
(f: any) => (xs: any) => any;
```

#### flatten

##### Type signature

```typescript
(xs: any) => any[]
```

#### intersection

##### Type signature

```typescript
(xs: any, ys: any) => any;
```

#### is

##### Type signature

```typescript
(value: any) => boolean;
```

#### last

##### Type signature

```typescript
(xs: any) => any;
```

#### lengthDiffers

##### Type signature

```typescript
(a: any, b: any) => boolean;
```

#### map

##### Type signature

```typescript
(...fs: any[]) => (x: any) => any;
```

#### midpoint

##### Type signature

```typescript
(xs: any) => any;
```

#### minMax

##### Type signature

```typescript
([head, ...tail]: [any, ...any[]]) => any;
```

#### multiple

##### Type signature

```typescript
(xs: any) => boolean;
```

#### none

##### Type signature

```typescript
(xs: any) => boolean;
```

#### partition

##### Type signature

```typescript
(predicate: any) => (xs: any) => any;
```

#### range

##### Type signature

```typescript
(n: any) => number[]
```

#### repeat

##### Type signature

```typescript
(n: any) => (value: any) => any[]
```

#### reverse

##### Type signature

```typescript
(xs: any) => any[]
```

#### reverseIf

##### Type signature

```typescript
(predicate: any) => (xs: any) => any;
```

#### rotate

##### Type signature

```typescript
(array: any) => (angle: any) => any;
```

#### second

##### Type signature

```typescript
([, x]: [any, any]) => any;
```

#### secondToLast

##### Type signature

```typescript
(xs: any) => any;
```

#### shift

##### Type signature

```typescript
(n: any) => (xs: any) => any;
```

#### shuffle

##### Type signature

```typescript
(xs: any) => any;
```

#### shuffleInPlace

##### Type signature

```typescript
(xs: any) => any;
```

#### single

##### Type signature

```typescript
(xs: any) => boolean;
```

#### skip

##### Type signature

```typescript
(count: number) => (xs: any[]) => any[]
```

#### sort

##### Type signature

```typescript
(f: any) => (xs: any) => any[]
```

#### sum

##### Type signature

```typescript
(xs: any) => any;
```

#### take

##### Type signature

```typescript
(count: number) => (xs: any[]) => any[]
```

#### transpose

##### Type signature

```typescript
(xs: any) => any[][]
```

#### unique

##### Type signature

```typescript
(xs: any) => unknown[]
```

#### zip

##### Type signature

```typescript
(xs: any, ys: any) => any;
```

#### zipWith

##### Type signature

```typescript
(f: any) => (xs: any, ys: any) => any;
```

### async

#### debounce

##### Type signature

```typescript
(f: any, wait: any) => (...args: any[]) => void
```

#### delay

##### Type signature

```typescript
(duration: any) => Promise<unknown>
```

#### sequence

##### Type signature

```typescript
(tasks: any) => Promise<any>
```

### date

#### byDateWithFallback

##### Type signature

```typescript
(now: any) => (
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
) => number;
```

#### clamp

##### Type signature

```typescript
(min: any, max: any) => (dateStringOrDate: any) => Date;
```

#### dateDiff

##### Type signature

```typescript
(a: any, b: any) => number;
```

#### dateInRange

##### Type signature

```typescript
(from: any, to: any) => (date?: Date) => boolean;
```

#### dayRange

##### Type signature

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

#### daysInMonths

##### Type signature

```typescript
(leapYear: any) => number[]
```

#### daysInYear

##### Type signature

```typescript
(year: any) => any;
```

#### displayMonth

##### Type signature

```typescript
(monthIndex: any) => string;
```

#### displayTime

##### Type signature

```typescript
(source: any, showSeconds: any) => string;
```

#### endOfDay

##### Type signature

```typescript
(date: any, timezoneOffset?: number, local?: boolean) => Date;
```

#### formatDate

##### Type signature

```typescript
(sourceDate: any, timezoneOffset?: number) => string;
```

#### formatDateTime

##### Type signature

```typescript
(sourceDate: any, showSeconds?: boolean, timezoneOffset?: number) => string;
```

#### formatDisplayDate

##### Type signature

```typescript
(sourceDate: any, showDay?: boolean, timezoneOffset?: number) => string;
```

#### formatDuration

##### Type signature

```typescript
(duration: any, showSeconds?: boolean) => string;
```

#### formatTime

##### Type signature

```typescript
(sourceDate: any, showSeconds?: boolean, timezoneOffset?: number) => string;
```

#### fromDays

##### Type signature

```typescript
(days: any) => number;
```

#### fromHours

##### Type signature

```typescript
(hours: any) => number;
```

#### fromMinutes

##### Type signature

```typescript
(minutes: any) => number;
```

#### fromSeconds

##### Type signature

```typescript
(seconds: any) => number;
```

#### joinDateTime

##### Type signature

```typescript
(...xs: any[]) => string;
```

#### leapYear

##### Type signature

```typescript
(year: any) => boolean;
```

#### monthNames

##### Type signature

```typescript
string[]
```

#### offsetByBit

##### Type signature

```typescript
(date: any) => Date;
```

#### parseHourMinutePair

##### Type signature

```typescript
(text?: string) => number[]
```

#### splitDateTime

##### Type signature

```typescript
(dateTimeString: any) => any;
```

#### startOfDay

##### Type signature

```typescript
(date: any, timezoneOffset?: number, local?: boolean) => Date;
```

#### subtractDays

##### Type signature

```typescript
(sourceDate: any, numberOfDays: any) => Date;
```

#### toDate

##### Type signature

```typescript
(date: any) => string;
```

#### toDates

##### Type signature

```typescript
(xs: any) => any;
```

#### toDays

##### Type signature

```typescript
(milliseconds: any) => number;
```

#### toHours

##### Type signature

```typescript
(milliseconds: any) => number;
```

#### toISO

##### Type signature

```typescript
(x: any) => any;
```

#### toISOFromLocalDateTime

##### Type signature

```typescript
(date: any) => string;
```

#### toLocalDateTime

##### Type signature

```typescript
(date: any, timezoneOffset?: number) => Date;
```

#### toMinutes

##### Type signature

```typescript
(milliseconds: any) => number;
```

#### toSeconds

##### Type signature

```typescript
(milliseconds: any) => number;
```

#### valid

##### Type signature

```typescript
(date: any) => boolean;
```

### debug

#### assert

##### Type signature

```typescript
(condition: any, callbackOrMessage: any) => void
```

#### diff

##### Type signature

```typescript
(obj1: any, obj2: any) => object;
```

### encoding

#### base64url

##### Type signature

```typescript
{
  encode: (_: any) => string;
}
```

### file

#### validName

##### Type signature

```typescript
(name: any) => boolean;
```

### function

#### compose

##### Type signature

```typescript
(...fs: any[]) => (x: any) => any;
```

#### constant

##### Type signature

```typescript
(x: any) => () => any;
```

#### identity

##### Type signature

```typescript
(x: any) => any;
```

#### memoize

##### Type signature

```typescript
(f: any) => (...args: any[]) => any;
```

#### memoizeShallow

##### Type signature

```typescript
(f: any) => (...args: any[]) => any;
```

#### memoizeWith

##### Type signature

```typescript
(equals: any) => (f: any) => (...args: any[]) => any;
```

#### noOp

##### Type signature

```typescript
() => void
```

#### not

##### Type signature

```typescript
(f: any) => (...args: any[]) => boolean;
```

#### pipe

##### Type signature

```typescript
(...fs: any[]) => (x: any) => any;
```

#### when

##### Type signature

```typescript
(predicate: any) => (action: any) => (...args: any[]) => any;
```

#### whenTrue

##### Type signature

```typescript
(action: any) => (...args: any[]) => any;
```

### is

#### array

##### Type signature

```typescript
(x: any) => boolean;
```

#### byte

##### Type signature

```typescript
(x: any) => boolean;
```

#### date

##### Type signature

```typescript
(x: any) => boolean;
```

#### defined

##### Type signature

```typescript
(x: any) => boolean;
```

#### \_function

##### Type signature

```typescript
(x: any) => boolean;
```

#### integer

##### Type signature

```typescript
(x: any) => boolean;
```

#### normal

##### Type signature

```typescript
(x: any) => boolean;
```

#### number

##### Type signature

```typescript
(x: any) => boolean;
```

#### object

##### Type signature

```typescript
(x: any) => boolean;
```

#### string

##### Type signature

```typescript
(x: any) => boolean;
```

### math

#### add

##### Type signature

```typescript
(a: number, b: number) => number;
```

#### average

##### Type signature

```typescript
(xs: number[]) => number;
```

#### ceilToNearestPowerOfTwo

##### Type signature

```typescript
(x: number) => number;
```

#### clamp

##### Type signature

```typescript
(min: number, max: number) => (x: number) => number;
```

#### clampNormal

##### Type signature

```typescript
(x: number) => number;
```

#### clampPercentage

##### Type signature

```typescript
(x: number) => number;
```

#### delta

##### Type signature

```typescript
(a: number, b: number) => number;
```

#### inRectangleRange

##### Type signature

```typescript
(width: number, height: number) => (x: number, y: number) => boolean;
```

#### lerp

##### Type signature

```typescript
(t: number) => (a: number, b: number) => number;
```

#### maximumBy

##### Type signature

```typescript
(f: (x: number) => number) => (xs: number[]) => number;
```

#### median

##### Type signature

```typescript
(xs: number[]) => number;
```

#### minMax

##### Type signature

```typescript
([a, b]: [number, number]) => [number, number];
```

#### safeNormalize

##### Type signature

```typescript
(x: number) => number;
```

#### sameSign

##### Type signature

```typescript
(xs: number[]) => boolean;
```

#### standardDeviation

##### Type signature

```typescript
(xs: number[], origin?: number) => number;
```

#### subtract

##### Type signature

```typescript
(a: number, b: number) => number;
```

### object

#### any

##### Type signature

```typescript
(xs: any) => boolean;
```

#### apply

##### Type signature

```typescript
(fs: ((...xs: any[]) => any)[]) => (...xs: any[]) => object;
```

#### empty

##### Type signature

```typescript
{
}
```

#### entries

##### Type signature

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

#### enumerable

##### Type signature

```typescript
(...xs: any[]) => any;
```

#### equals

##### Type signature

```typescript
(a: any, b: any) => any;
```

#### filter

##### Type signature

```typescript
(f: any) => (xs: any) => object;
```

#### find

##### Type signature

```typescript
(predicate: any) => (xs: any) => unknown;
```

#### findEntry

##### Type signature

```typescript
(predicate: any) => (xs: any) => [string, unknown];
```

#### findKey

##### Type signature

```typescript
(predicate: any) => (xs: any) => string;
```

#### findValue

##### Type signature

```typescript
(predicate: any) => (xs: any) => unknown;
```

#### first

##### Type signature

```typescript
(xs: any) => unknown;
```

#### flatMapValues

##### Type signature

```typescript
(f: any) => (xs: any) => any;
```

#### fromEntries

##### Type signature

```typescript
(keyValuePairs: [string, any][]) => object;
```

#### groupBy

##### Type signature

```typescript
(selector: any) => (xs: any) => any;
```

#### hasKey

##### Type signature

```typescript
(key: any) => (xs: any) => any;
```

#### length

##### Type signature

```typescript
(xs: any) => number;
```

#### map

##### Type signature

```typescript
(f: (value: any, key: string, context: object) => any) => (xs: object) =>
  object;
```

#### mapEntries

##### Type signature

```typescript
(
  f: (value: any, key: string, context: object) => any
) => (xs: object) => [string, any][]
```

#### mapKeys

##### Type signature

```typescript
(f: any) => (xs: any) => object;
```

#### mapValues

##### Type signature

```typescript
(f: any) => (xs: any) => any[]
```

#### merge

##### Type signature

```typescript
(a: object, b: object) => object;
```

#### none

##### Type signature

```typescript
(xs: any) => boolean;
```

#### sort

##### Type signature

```typescript
(f: any) => (xs: any) => object;
```

### query

#### parse

##### Type signature

```typescript
(xs?: string) => object;
```

#### parsePathname

##### Type signature

```typescript
(url: any) => {
  pathname: any;
  search: string;
  hash: string;
};
```

#### read

##### Type signature

```typescript
(source: any) => {};
```

#### serialize

##### Type signature

```typescript
(xs?: {}) => string;
```

### range

#### empty

##### Type signature

```typescript
([min, max]: [any, any]) => boolean;
```

#### equals

##### Type signature

```typescript
([a, b]: [any, any], [c, d]: [any, any]) => boolean;
```

#### length

##### Type signature

```typescript
([min, max]: [any, any]) => number;
```

#### split

##### Type signature

```typescript
(used: any, sourceRange?: number[]) => (range: any) => any;
```

### regex

#### escape

##### Type signature

```typescript
(string: any) => any;
```

### string

#### containsWhitespace

##### Type signature

```typescript
(x: any) => boolean;
```

#### empty

##### Type signature

```typescript
"";
```

#### firstToLower

##### Type signature

```typescript
([first, ...rest]: [any, ...any[]]) => string;
```

#### firstToUpper

##### Type signature

```typescript
([first, ...rest]: [any, ...any[]]) => string;
```

#### includes

##### Type signature

```typescript
(search: any) => (xs: any) => boolean;
```

#### nbsp

##### Type signature

```typescript
" ";
```

#### nonEmpty

##### Type signature

```typescript
(x: any) => any;
```

#### startsWith

##### Type signature

```typescript
(prefix: any) => (xs: any) => boolean;
```

### vector2

#### add

##### Type signature

```typescript
([x1, y1]: [any, any], [x2, y2]: [any, any]) => any[]
```

#### convertSpace

##### Type signature

```typescript
(space: any) => ([x, y]: [any, any]) => any[]
```

#### cross

##### Type signature

```typescript
([a, b]: [any, any], [c, d]: [any, any]) => number;
```

#### dot

##### Type signature

```typescript
([a, b]: [any, any], [c, d]: [any, any]) => number;
```

#### length

##### Type signature

```typescript
([x, y]: [any, any]) => number;
```

#### mul

##### Type signature

```typescript
(matrix: any, point: any) => any[]
```

#### multiply

##### Type signature

```typescript
(m1: any, m2: any) => {
  a: number;
  c: number;
  e: any;
  b: number;
  d: number;
  f: any;
};
```

#### normalize

##### Type signature

```typescript
(vector: any) => any;
```

#### reflect

##### Type signature

```typescript
(a: any, v: any) => number[]
```

#### rotate

##### Type signature

```typescript
(angle?: number, cx?: number, cy?: number) => any;
```

#### scale

##### Type signature

```typescript
(sx?: number, sy?: number) => {
  a: number;
  c: number;
  e: number;
  b: number;
  d: number;
  f: number;
};
```

#### sub

##### Type signature

```typescript
(
  [x1, y1]: [any, any],
  [x2, y2]: [any, any]
) => number[]
```

#### transform

##### Type signature

```typescript
(...matrices: any[]) => any;
```

#### translate

##### Type signature

```typescript
(tx?: number, ty?: number) => {
  a: number;
  c: number;
  e: number;
  b: number;
  d: number;
  f: number;
};
```

### web

#### classNames

##### Type signature

```typescript
(...xs: any[]) => any;
```

#### events

##### cancel

###### Type signature

```typescript
(event: any) => boolean;
```

##### openInNewTabIntent

###### Type signature

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
}) => any;
```

##### prevent

###### Type signature

```typescript
(event: any) => boolean;
```

##### stop

###### Type signature

```typescript
(event: any) => boolean;
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
