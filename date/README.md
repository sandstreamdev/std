# byDateWithFallback

## Type signature

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

# clamp

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  min: number | Date,
  max: number | Date
) => (dateStringOrDate: string | number | Date) => Date
```
<!-- prettier-ignore-end -->

# dateDiff

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  a: string | number | Date,
  b: string | number | Date
) => number
```
<!-- prettier-ignore-end -->

# dateInRange

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  from: string | number | Date,
  to: string | number | Date
) => (date?: Date) => boolean
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
  iso?: boolean | undefined;
  local?: boolean | undefined;
  now?: Date | undefined;
  timezoneOffset?: number | undefined;
}) => (date?: string | number | Date | undefined) => string[]
```
<!-- prettier-ignore-end -->

# daysInMonths

## Type signature

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

# daysInYear

## Type signature

<!-- prettier-ignore-start -->
```typescript
(year: number) => number
```
<!-- prettier-ignore-end -->

# displayMonth

## Type signature

<!-- prettier-ignore-start -->
```typescript
(monthIndex: number) => string
```
<!-- prettier-ignore-end -->

# displayTime

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  source: [number, number, number],
  showSeconds: boolean
) => string
```
<!-- prettier-ignore-end -->

# endOfDay

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  date: string | number | Date,
  timezoneOffset?: number,
  local?: boolean
) => Date
```
<!-- prettier-ignore-end -->

# formatDate

## Type signature

<!-- prettier-ignore-start -->
```typescript
(sourceDate: Date, timezoneOffset?: number) => string
```
<!-- prettier-ignore-end -->

# formatDateTime

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  sourceDate: Date,
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
  sourceDate: Date,
  showDay?: boolean,
  timezoneOffset?: number
) => string
```
<!-- prettier-ignore-end -->

# formatDuration

## Type signature

<!-- prettier-ignore-start -->
```typescript
(duration: number, showSeconds?: boolean) => string
```
<!-- prettier-ignore-end -->

# formatTime

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  sourceDate: Date,
  showSeconds?: boolean,
  timezoneOffset?: number
) => string
```
<!-- prettier-ignore-end -->

# fromDays

## Type signature

<!-- prettier-ignore-start -->
```typescript
(days: number) => number
```
<!-- prettier-ignore-end -->

# fromHours

## Type signature

<!-- prettier-ignore-start -->
```typescript
(hours: number) => number
```
<!-- prettier-ignore-end -->

# fromMinutes

## Type signature

<!-- prettier-ignore-start -->
```typescript
(minutes: number) => number
```
<!-- prettier-ignore-end -->

# fromSeconds

## Type signature

<!-- prettier-ignore-start -->
```typescript
(seconds: number) => number
```
<!-- prettier-ignore-end -->

# joinDateTime

## Type signature

<!-- prettier-ignore-start -->
```typescript
(...xs: string[]) => string
```
<!-- prettier-ignore-end -->

# leapYear

## Type signature

<!-- prettier-ignore-start -->
```typescript
(year: number) => boolean
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
(date: number | Date) => Date
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
(dateTimeString: string) => string[]
```
<!-- prettier-ignore-end -->

# startOfDay

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  date: string | number | Date,
  timezoneOffset?: number,
  local?: boolean
) => Date
```
<!-- prettier-ignore-end -->

# subtractDays

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  sourceDate: string | number | Date,
  numberOfDays: number
) => Date
```
<!-- prettier-ignore-end -->

# toDate

## Type signature

<!-- prettier-ignore-start -->
```typescript
(date: Date) => string
```
<!-- prettier-ignore-end -->

# toDates

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: (string | number | Date)[]) => Date[]
```
<!-- prettier-ignore-end -->

# toDays

## Type signature

<!-- prettier-ignore-start -->
```typescript
(milliseconds: number) => number
```
<!-- prettier-ignore-end -->

# toHours

## Type signature

<!-- prettier-ignore-start -->
```typescript
(milliseconds: number) => number
```
<!-- prettier-ignore-end -->

# toISO

## Type signature

<!-- prettier-ignore-start -->
```typescript
(x: Date) => string
```
<!-- prettier-ignore-end -->

# toISOFromLocalDateTime

## Type signature

<!-- prettier-ignore-start -->
```typescript
(date: Date) => string
```
<!-- prettier-ignore-end -->

# toLocalDateTime

## Type signature

<!-- prettier-ignore-start -->
```typescript
(date: Date, timezoneOffset?: number) => Date
```
<!-- prettier-ignore-end -->

# toMinutes

## Type signature

<!-- prettier-ignore-start -->
```typescript
(milliseconds: number) => number
```
<!-- prettier-ignore-end -->

# toSeconds

## Type signature

<!-- prettier-ignore-start -->
```typescript
(milliseconds: number) => number
```
<!-- prettier-ignore-end -->

# valid

## Type signature

<!-- prettier-ignore-start -->
```typescript
(date?: any) => boolean
```
<!-- prettier-ignore-end -->
