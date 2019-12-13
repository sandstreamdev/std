# byDateWithFallback

## Type signature

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

# clamp

## Type signature

```typescript
<!-- prettier-ignore-start -->
(min: any, max: any) => (dateStringOrDate: any) => Date
<!-- prettier-ignore-end -->
```

# dateDiff

## Type signature

```typescript
<!-- prettier-ignore-start -->
(a: any, b: any) => number
<!-- prettier-ignore-end -->
```

# dateInRange

## Type signature

```typescript
<!-- prettier-ignore-start -->
(from: any, to: any) => (date?: Date) => boolean
<!-- prettier-ignore-end -->
```

# dayRange

## Type signature

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

# daysInMonths

## Type signature

```typescript
<!-- prettier-ignore-start -->
(leapYear: any) => number[]
<!-- prettier-ignore-end -->
```

# daysInYear

## Type signature

```typescript
<!-- prettier-ignore-start -->
(year: any) => any
<!-- prettier-ignore-end -->
```

# displayMonth

## Type signature

```typescript
<!-- prettier-ignore-start -->
(monthIndex: any) => string
<!-- prettier-ignore-end -->
```

# displayTime

## Type signature

```typescript
<!-- prettier-ignore-start -->
(source: any, showSeconds: any) => string
<!-- prettier-ignore-end -->
```

# endOfDay

## Type signature

```typescript
<!-- prettier-ignore-start -->
(
  date: any,
  timezoneOffset?: number,
  local?: boolean
) => Date
<!-- prettier-ignore-end -->
```

# formatDate

## Type signature

```typescript
<!-- prettier-ignore-start -->
(sourceDate: any, timezoneOffset?: number) => string
<!-- prettier-ignore-end -->
```

# formatDateTime

## Type signature

```typescript
<!-- prettier-ignore-start -->
(
  sourceDate: any,
  showSeconds?: boolean,
  timezoneOffset?: number
) => string
<!-- prettier-ignore-end -->
```

# formatDisplayDate

## Type signature

```typescript
<!-- prettier-ignore-start -->
(
  sourceDate: any,
  showDay?: boolean,
  timezoneOffset?: number
) => string
<!-- prettier-ignore-end -->
```

# formatDuration

## Type signature

```typescript
<!-- prettier-ignore-start -->
(duration: any, showSeconds?: boolean) => string
<!-- prettier-ignore-end -->
```

# formatTime

## Type signature

```typescript
<!-- prettier-ignore-start -->
(
  sourceDate: any,
  showSeconds?: boolean,
  timezoneOffset?: number
) => string
<!-- prettier-ignore-end -->
```

# fromDays

## Type signature

```typescript
<!-- prettier-ignore-start -->
(days: any) => number
<!-- prettier-ignore-end -->
```

# fromHours

## Type signature

```typescript
<!-- prettier-ignore-start -->
(hours: any) => number
<!-- prettier-ignore-end -->
```

# fromMinutes

## Type signature

```typescript
<!-- prettier-ignore-start -->
(minutes: any) => number
<!-- prettier-ignore-end -->
```

# fromSeconds

## Type signature

```typescript
<!-- prettier-ignore-start -->
(seconds: any) => number
<!-- prettier-ignore-end -->
```

# joinDateTime

## Type signature

```typescript
<!-- prettier-ignore-start -->
(...xs: any[]) => string
<!-- prettier-ignore-end -->
```

# leapYear

## Type signature

```typescript
<!-- prettier-ignore-start -->
(year: any) => boolean
<!-- prettier-ignore-end -->
```

# monthNames

## Type signature

```typescript
<!-- prettier-ignore-start -->
string[]
<!-- prettier-ignore-end -->
```

# offsetByBit

## Type signature

```typescript
<!-- prettier-ignore-start -->
(date: any) => Date
<!-- prettier-ignore-end -->
```

# parseHourMinutePair

## Type signature

```typescript
<!-- prettier-ignore-start -->
(text?: string) => number[]
<!-- prettier-ignore-end -->
```

# splitDateTime

## Type signature

```typescript
<!-- prettier-ignore-start -->
(dateTimeString: any) => any
<!-- prettier-ignore-end -->
```

# startOfDay

## Type signature

```typescript
<!-- prettier-ignore-start -->
(
  date: any,
  timezoneOffset?: number,
  local?: boolean
) => Date
<!-- prettier-ignore-end -->
```

# subtractDays

## Type signature

```typescript
<!-- prettier-ignore-start -->
(sourceDate: any, numberOfDays: any) => Date
<!-- prettier-ignore-end -->
```

# toDate

## Type signature

```typescript
<!-- prettier-ignore-start -->
(date: any) => string
<!-- prettier-ignore-end -->
```

# toDates

## Type signature

```typescript
<!-- prettier-ignore-start -->
(xs: any) => any
<!-- prettier-ignore-end -->
```

# toDays

## Type signature

```typescript
<!-- prettier-ignore-start -->
(milliseconds: any) => number
<!-- prettier-ignore-end -->
```

# toHours

## Type signature

```typescript
<!-- prettier-ignore-start -->
(milliseconds: any) => number
<!-- prettier-ignore-end -->
```

# toISO

## Type signature

```typescript
<!-- prettier-ignore-start -->
(x: any) => any
<!-- prettier-ignore-end -->
```

# toISOFromLocalDateTime

## Type signature

```typescript
<!-- prettier-ignore-start -->
(date: any) => string
<!-- prettier-ignore-end -->
```

# toLocalDateTime

## Type signature

```typescript
<!-- prettier-ignore-start -->
(date: any, timezoneOffset?: number) => Date
<!-- prettier-ignore-end -->
```

# toMinutes

## Type signature

```typescript
<!-- prettier-ignore-start -->
(milliseconds: any) => number
<!-- prettier-ignore-end -->
```

# toSeconds

## Type signature

```typescript
<!-- prettier-ignore-start -->
(milliseconds: any) => number
<!-- prettier-ignore-end -->
```

# valid

## Type signature

```typescript
<!-- prettier-ignore-start -->
(date: any) => boolean
<!-- prettier-ignore-end -->
```
