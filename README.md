# std

[![Greenkeeper badge](https://badges.greenkeeper.io/sandstreamdev/std.svg)](https://greenkeeper.io/)
[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors)

## Docs

<!-- DOCS:START - Do not remove or modify this section -->

### array

#### any

Checks if the given array is present and it is not empty (contains at least one element).

##### Type signature

```
(xs?: any[]) => boolean
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

#### differs

Checks if two arrays are not equal.

#### duplicates

Lists all the duplicated values in the given array.

#### empty

Empty array.

#### exact

Takes exactly the given count of elements.

#### except

Filters out the given value.

#### filterInPlace

Filters the given array with the given predicate just like Array.filter byt does it in-place thus mutates the original array.

#### find

Finds an element by a predicate function within given array, otherwise returns the given fallback value or undefined when fallback is not present.

#### first

Returns the first element or undefined when there are no elements in the given array.

#### flatMap

Maps and flattens the result.

#### flatten

Flattens the nested arrays by a single level.

#### intersection

Finds common items between both arrays.

#### is

#### last

Returns the last element or undefined when there are no elements in the given array.

#### lengthDiffers

Checks if lengths of given arrays differ.

#### map

Maps the given array with the given functions.

#### midpoint

Returns the middle element or the right one when the number of elements is even.

#### minMax

Computes minimum and maximum of the given array in a single run.

#### multiple

Checks if the given array contains more than one element.

#### none

Checks if the given array is empty.

#### partition

Partitions the given array to the ones that pass the given predicate function and the ones that do not. By [convention of the Haskell's Data.Either](http://hackage.haskell.org/package/base-4.12.0.0/docs/Data-Either.html), values that pass the predicate are placed at right.

#### range

Generates an array of numbers from 0 to n - 1.

#### repeat

Repeats the given element by given count of times.

#### reverse

Reverses the given array without mutating it (in contrast to Array.sort).

#### reverseIf

Reverses the given array when enabled.

#### second

Returns the second element or undefined when there are less than two elements in the given array.

#### secondToLast

Returns the second to last element or undefined when there are less than two elements in the given array.

#### shift

Shifts the given array to the left and circulates the elements back by modulo of the array's length.

#### shuffle

Shuffles the given array in random order with Math.random as the default.

#### shuffleInPlace

Shuffles the given array in-place in random order with Math.random as the default.

#### single

Checks if the given array contains exactly one element.

#### skip

Skips the given count of elements from the given array.

#### sort

Sorts the given array without mutating it.

#### sum

Sums the given array of numbers.

#### take

Takes up to given count of elements.

#### unique

Returns only unique elements of the given array.

#### zip

Zips given arrays together into pairs.

#### zipWith

Zips given arrays together with the given function.

### async

#### debounce

Makes the function run after the given period of not being called. Useful to delay input submission for autocomplete etc.

#### delay

When awaited, delays the execution by the given number of milliseconds.

#### sequence

Runs the given tasks in a sequence.

### date

#### byDateWithFallback

#### clamp

#### dateDiff

Calculates the difference in milliseconds between two dates.

#### dateInRange

Checks if provided date is within the range.

#### dayRange

#### daysInMonths

Returns numbers of days in all months of the year having regard to leap year.

#### daysInYear

#### displayMonth

#### displayTime

#### endOfDay

Calculates end of a day in provided date.

#### formatDate

#### formatDateTime

#### formatDisplayDate

#### formatDuration

#### formatTime

#### fromDays

#### fromHours

#### fromMinutes

#### fromSeconds

#### joinDateTime

#### leapYear

#### monthNames

Returns all months names.

#### offsetByBit

#### parseHourMinutePair

#### splitDateTime

#### startOfDay

Calculates start of a day in provided date.

#### subtractDays

#### toDate

#### toDates

#### toDays

#### toHours

#### toISO

#### toISOFromLocalDateTime

#### toLocalDateTime

#### toMinutes

#### toSeconds

#### valid

### debug

#### assert

#### diff

### encoding

#### base64url

### file

#### validName

### function

#### compose

#### constant

#### identity

#### memoize

#### memoizeShallow

#### memoizeWith

#### noOp

#### not

#### pipe

#### when

#### whenTrue

### is

#### array

#### byte

#### date

#### defined

#### \_function

#### integer

#### normal

#### number

#### object

#### string

### math

#### add

#### average

#### ceilToNearestPowerOfTwo

#### clamp

#### clampNormal

#### clampPercentage

#### delta

#### inRectangleRange

#### lerp

#### maximumBy

#### median

#### minMax

#### safeNormalize

#### sameSign

#### standardDeviation

#### subtract

### object

#### any

#### apply

#### empty

#### entries

#### enumerable

#### equals

#### filter

#### find

#### findEntry

#### findKey

#### findValue

#### first

#### flatMapValues

#### fromEntries

#### groupBy

#### hasKey

#### length

#### map

#### mapEntries

#### mapKeys

#### mapValues

#### merge

#### none

#### sort

### query

#### parse

#### parsePathname

#### read

#### serialize

### range

#### empty

#### equals

#### length

#### split

### regex

#### escape

### string

#### containsWhitespace

#### empty

#### firstToLower

#### firstToUpper

#### includes

#### nbsp

#### nonEmpty

#### startsWith

### vector2

#### add

#### convertSpace

#### cross

#### dot

#### length

#### mul

#### multiply

#### normalize

#### reflect

#### rotate

#### scale

#### sub

#### transform

#### translate

### web

#### classNames

#### events

##### cancel

##### openInNewTabIntent

##### prevent

##### stop

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
