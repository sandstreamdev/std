# byDateWithFallback

## Type signature

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

# clamp

## Type signature

<!-- prettier-ignore-start -->
```typescript
(min: any, max: any) => (dateStringOrDate: any) => Date
```
<!-- prettier-ignore-end -->

# dateDiff

## Type signature

<!-- prettier-ignore-start -->
```typescript
(a: any, b: any) => number
```
<!-- prettier-ignore-end -->

# dateInRange

## Type signature

<!-- prettier-ignore-start -->
```typescript
(from: any, to: any) => (date?: Date) => boolean
```
<!-- prettier-ignore-end -->

# dayRange

## Type signature

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

# daysInMonths

## Type signature

<!-- prettier-ignore-start -->
```typescript
(leapYear: any) => number[]
```
<!-- prettier-ignore-end -->

# daysInYear

## Type signature

<!-- prettier-ignore-start -->
```typescript
(year: any) => any
```
<!-- prettier-ignore-end -->

# displayMonth

## Type signature

<!-- prettier-ignore-start -->
```typescript
(monthIndex: any) => string
```
<!-- prettier-ignore-end -->

# displayTime

## Type signature

<!-- prettier-ignore-start -->
```typescript
(source: any, showSeconds: any) => string
```
<!-- prettier-ignore-end -->

# endOfDay

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  date: any,
  timezoneOffset?: number,
  local?: boolean
) => Date
```
<!-- prettier-ignore-end -->

# formatDate

## Type signature

<!-- prettier-ignore-start -->
```typescript
(sourceDate: any, timezoneOffset?: number) => string
```
<!-- prettier-ignore-end -->

# formatDateTime

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  sourceDate: any,
  showSeconds?: boolean,
  timezoneOffset?: number
) => string
```
<!-- prettier-ignore-end -->

# formatDisplayDate

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  sourceDate: any,
  showDay?: boolean,
  timezoneOffset?: number
) => string
```
<!-- prettier-ignore-end -->

# formatDuration

## Type signature

<!-- prettier-ignore-start -->
```typescript
(duration: any, showSeconds?: boolean) => string
```
<!-- prettier-ignore-end -->

# formatTime

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  sourceDate: any,
  showSeconds?: boolean,
  timezoneOffset?: number
) => string
```
<!-- prettier-ignore-end -->

# fromDays

## Type signature

<!-- prettier-ignore-start -->
```typescript
(days: any) => number
```
<!-- prettier-ignore-end -->

# fromHours

## Type signature

<!-- prettier-ignore-start -->
```typescript
(hours: any) => number
```
<!-- prettier-ignore-end -->

# fromMinutes

## Type signature

<!-- prettier-ignore-start -->
```typescript
(minutes: any) => number
```
<!-- prettier-ignore-end -->

# fromSeconds

## Type signature

<!-- prettier-ignore-start -->
```typescript
(seconds: any) => number
```
<!-- prettier-ignore-end -->

# joinDateTime

## Type signature

<!-- prettier-ignore-start -->
```typescript
(...xs: any[]) => string
```
<!-- prettier-ignore-end -->

# leapYear

## Type signature

<!-- prettier-ignore-start -->
```typescript
(year: any) => boolean
```
<!-- prettier-ignore-end -->

# monthNames

## Type signature

<!-- prettier-ignore-start -->
```typescript
string[]
```
<!-- prettier-ignore-end -->

# offsetByBit

## Type signature

<!-- prettier-ignore-start -->
```typescript
(date: any) => Date
```
<!-- prettier-ignore-end -->

# parseHourMinutePair

## Type signature

<!-- prettier-ignore-start -->
```typescript
(text?: string) => number[]
```
<!-- prettier-ignore-end -->

# splitDateTime

## Type signature

<!-- prettier-ignore-start -->
```typescript
(dateTimeString: any) => any
```
<!-- prettier-ignore-end -->

# startOfDay

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  date: any,
  timezoneOffset?: number,
  local?: boolean
) => Date
```
<!-- prettier-ignore-end -->

# subtractDays

## Type signature

<!-- prettier-ignore-start -->
```typescript
(sourceDate: any, numberOfDays: any) => Date
```
<!-- prettier-ignore-end -->

# toDate

## Type signature

<!-- prettier-ignore-start -->
```typescript
(date: any) => string
```
<!-- prettier-ignore-end -->

# toDates

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any) => any
```
<!-- prettier-ignore-end -->

# toDays

## Type signature

<!-- prettier-ignore-start -->
```typescript
(milliseconds: any) => number
```
<!-- prettier-ignore-end -->

# toHours

## Type signature

<!-- prettier-ignore-start -->
```typescript
(milliseconds: any) => number
```
<!-- prettier-ignore-end -->

# toISO

## Type signature

<!-- prettier-ignore-start -->
```typescript
(x: any) => any
```
<!-- prettier-ignore-end -->

# toISOFromLocalDateTime

## Type signature

<!-- prettier-ignore-start -->
```typescript
(date: any) => string
```
<!-- prettier-ignore-end -->

# toLocalDateTime

## Type signature

<!-- prettier-ignore-start -->
```typescript
(date: any, timezoneOffset?: number) => Date
```
<!-- prettier-ignore-end -->

# toMinutes

## Type signature

<!-- prettier-ignore-start -->
```typescript
(milliseconds: any) => number
```
<!-- prettier-ignore-end -->

# toSeconds

## Type signature

<!-- prettier-ignore-start -->
```typescript
(milliseconds: any) => number
```
<!-- prettier-ignore-end -->

# valid

## Type signature

<!-- prettier-ignore-start -->
```typescript
(date: any) => boolean
```
<!-- prettier-ignore-end -->
