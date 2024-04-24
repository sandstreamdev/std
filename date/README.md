# clamp

Clamps the given date to the given date range.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(min: Date, max: Date) => (date: Date) => Date
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
const date = new Date("2019-06-15T13:54:33.232Z");
const min = new Date("2019-02-23T13:54:33.232Z");
const max = new Date("2019-03-13T13:54:33.232Z");

clamp(min, max)(date);
// => new Date("2019-03-13T13:54:33.232Z")
```
<!-- prettier-ignore-end -->

## Questions

- How to clamp a date to the desired date range?
- How to enforce a date to be in a given date range?

# clone

Clones the given Date object.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(date: Date) => Date
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
const date = new new Date("2019-04-24T13:54:33.232Z");
const cloned = clone(date);

cloned !== date && cloned.valueOf() === date.valueOf();
// ⇒ true
```
<!-- prettier-ignore-end -->

## Questions

- How to clone a Date object?

# dateDiff

Computes a signed difference between two Date objects as milliseconds.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(a: Date, b: Date) => number
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
dateDiff(new Date("2017-01-01T13:00:00.000Z"), new Date("2017-01-01T12:00:00.000Z"));
// ⇒ 3600000
```
<!-- prettier-ignore-end -->

## Questions

- How to compute Date difference?

# dateInRange

Checks if the given date is between the given date range (inclusive).

## Type signature

<!-- prettier-ignore-start -->
```typescript
(from: Date, to: Date) => (date: Date) => boolean
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
dateInRange(new Date("2018-06-10T12:00:00.000Z"), new Date("2018-06-20T12:00:00.000Z"))(new Date("2018-06-15T12:00:00.000Z"));
// ⇒ true
```
<!-- prettier-ignore-end -->

## Questions

- How to check if a date is within a given date range?

# dayRange

Returns a local day range at a particular Date.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(date: Date) => Date[]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
const date = new Date("2018-12-31T13:54:33.232Z");

dayRange(date);
// ⇒ [startOfDay(date), endOfDay(date)]
```
<!-- prettier-ignore-end -->

## Questions

- How to find a date range of a given day?

# daysInMonths

Returns an array of days in a particular months. Number of days in February varies if it is a leap year or not.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(leapYear: boolean) => [
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

## Examples

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

## Questions

- How to find out how many days are in a particular month?
- How to find out how many days there are in a leap year?

# daysInYear

Calculates the number of days in a particular year. Varies by the leap year.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(year: number) => 366 | 365
```
<!-- prettier-ignore-end -->

## Examples

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

## Questions

- How many days are in a particular year?
- How many days are in a leap year?
- How many days are in a common year?

# displayTime

Displays padded time string.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(source: [number, number, number], showSeconds: boolean) => string
```
<!-- prettier-ignore-end -->

## Examples

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

## Questions

- How to display padded time?

# endOfDay

Returns a local Date of an end of the day at a particular Date.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(date: Date) => Date
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
endOfDay(new Date("2018-12-31T13:54:33.232Z"));
// ⇒ new Date(new Date("2019-01-01T00:00:00.000Z").valueOf() + new Date("2018-12-31T13:54:33.232Z").getTimezoneOffset() * 60 * 1000)
```
<!-- prettier-ignore-end -->

## Questions

- How to find a date of an end of a given day?

# formatDate

Formats a given date as a simple YYYY-MM-DD string.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(date: Date) => string
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
formatDate(new Date("2019-02-24T01:12:34"));
// ⇒ "2019-02-24"
```
<!-- prettier-ignore-end -->

## Questions

- How to render a date in a YYYY-MM-DD format?

# formatDateTime

Formats a given date as a simple YYYY-MM-DD HH:MM(:SS) string.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(sourceDate: Date, showSeconds?: boolean) => string
```
<!-- prettier-ignore-end -->

## Examples

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

## Questions

- How to render a date in a YYYY-MM-DD HH:MM format?
- How to render a date in a YYYY-MM-DD HH:MM:SS format?

# formatDuration

Formats a duration in milliseconds to a padded time string.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(duration: number, showSeconds?: boolean) => string
```
<!-- prettier-ignore-end -->

## Examples

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

## Questions

- How to render a formatted duration?

# formatTime

Formats a given date as a simple HH:MM(:SS) string.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(date: Date, showSeconds?: boolean) => string
```
<!-- prettier-ignore-end -->

## Examples

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

## Questions

- How to render a date in a HH:MM format?
- How to render a date in a HH:MM:SS format?

# fromDays

Converts the given day count to milliseconds.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(days: number) => number
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
fromDays(1);
// ⇒ 86400000
```
<!-- prettier-ignore-end -->

## Questions

- How to find how many milliseconds are in a given number of days?

# fromHours

Converts the given hour count to milliseconds.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(hours: number) => number
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
fromHours(1);
// ⇒ 3600000
```
<!-- prettier-ignore-end -->

## Questions

- How to find how many milliseconds are in a given number of hours?

# fromMinutes

Converts the given minute count to milliseconds.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(minutes: number) => number
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
fromMinutes(1);
// ⇒ 60000
```
<!-- prettier-ignore-end -->

## Questions

- How to find how many milliseconds are in a given number of minutes?

# fromSeconds

Converts the given second count to milliseconds.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(seconds: number) => number
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
fromSeconds(1);
// ⇒ 1000
```
<!-- prettier-ignore-end -->

## Questions

- How to find how many milliseconds are in a given number of seconds?

# joinDateTime

Joins a date-time pair into a date-time string.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(date: string, time: string) => string
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
joinDateTime("2019-01-15", "13:54:33.232Z");
// ⇒ "2019-01-15T13:54:33.232Z"
```
<!-- prettier-ignore-end -->

## Questions

- How to join date and time to get ISO-compliant date-time string?

# leapYear

Detects if a given year is a leap year.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(year: number) => boolean
```
<!-- prettier-ignore-end -->

## Examples

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

## Questions

- How to find if the given year is a leap year?

# parseHourMinutePair

Parses HH:MM string into hours and minutes.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(text?: string) => [number, number]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
parseHourMinutePair("12:34");
// ⇒ [12, 34]
```
<!-- prettier-ignore-end -->

## Questions

- How to parse time string into hours and minutes?

# splitDateTime

Splits a date-time string into a date-time pair.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(dateTimeString: string) => [string, string]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
splitDateTime("2019-01-15T13:54:33.232Z");
// ⇒ ["2019-01-15", "13:54:33.232Z"]
```
<!-- prettier-ignore-end -->

## Questions

- How to split ISO-compliant date-time string into a date and time pair?

# startOfDay

Returns a local Date of a start of the day at a particular Date.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(date: Date) => Date
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
endOfDay(new Date("2019-01-01T13:54:33.232Z"));
// ⇒ new Date(new Date("2019-01-01T00:00:00.000Z").valueOf() + new Date("2019-01-01T13:54:33.232Z").getTimezoneOffset() * 60 * 1000)
```
<!-- prettier-ignore-end -->

## Questions

- How to find a date of the start of a given day?

# subtractDays

Subtracts the given number of days from the given Date object.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(sourceDate: Date, numberOfDays: number) => Date
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
subtractDays(new Date("2019-01-15T13:54:33.232Z"), 1);
// ⇒ new Date("2019-01-14T13:54:33.232Z")
```
<!-- prettier-ignore-end -->

## Questions

- How to subtract days from a given date?

# toDate

Extracts padded YYYY-MM-DD date string out of the given date object.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(date: Date) => string
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
toDate(new Date("2019-01-15T12:00:00.000Z"));
// ⇒ "2019-01-15"
```
<!-- prettier-ignore-end -->

## Questions

- How to get only the date from a Date object?

# toDates

Converts the given array of values into Dates using the Date constructor.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: (string | number | Date)[]) => Date[]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
toDates(["2019-01-15T13:54:33.232Z", new Date("2019-01-15T13:54:33.232Z").valueOf(), new Date("2019-01-15T13:54:33.232Z")]);
// ⇒ [new Date("2019-01-15T13:54:33.232Z"), new Date("2019-01-15T13:54:33.232Z"), new Date("2019-01-15T13:54:33.232Z")]
```
<!-- prettier-ignore-end -->

## Questions

- How to convert an array of string and timestamps into an array of Date objects?

# toDays

Converts milliseconds into days.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(milliseconds: number) => number
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
toDays(86400000);
// ⇒ 1
```
<!-- prettier-ignore-end -->

## Questions

- How to convert milliseconds into days?

# toHours

Converts milliseconds into hours.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(milliseconds: number) => number
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
toHours(3600000);
// ⇒ 1
```
<!-- prettier-ignore-end -->

## Questions

- How to convert milliseconds into hours?

# toISO

Returns an ISO-compliant date-time string.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(x: Date) => string
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
toISO(new Date("2019-04-24T13:54:33.232Z"));
// ⇒ "2019-04-24T13:54:33.232Z"
```
<!-- prettier-ignore-end -->

## Questions

- How to convert Date object to ISO-compliant date string?

# toMinutes

Converts milliseconds into minutes.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(milliseconds: number) => number
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
toMinutes(60000);
// ⇒ 1
```
<!-- prettier-ignore-end -->

## Questions

- How to convert milliseconds into minutes?

# toSeconds

Converts milliseconds into seconds.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(milliseconds: number) => number
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
toSeconds(1000);
// ⇒ 1
```
<!-- prettier-ignore-end -->

## Questions

- How to convert milliseconds into seconds?

# valid

Checks if the given date is present and it is valid.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(date?: unknown) => boolean
```
<!-- prettier-ignore-end -->

## Examples

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

## Questions

- How to check if a Date is valid or not?
