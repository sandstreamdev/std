# byDateWithFallback

## Type signature

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

# clamp

## Type signature

```
(min: any, max: any) => (dateStringOrDate: any) => Date
```

# dateDiff

## Type signature

```
(a: any, b: any) => number
```

# dateInRange

## Type signature

```
(from: any, to: any) => (date?: Date) => boolean
```

# dayRange

## Type signature

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

# daysInMonths

## Type signature

```
(leapYear: any) => number[]
```

# daysInYear

## Type signature

```
(year: any) => any
```

# displayMonth

## Type signature

```
(monthIndex: any) => string
```

# displayTime

## Type signature

```
(source: any, showSeconds: any) => string
```

# endOfDay

## Type signature

```
(
  date: any,
  timezoneOffset?: number,
  local?: boolean
) => Date
```

# formatDate

## Type signature

```
(sourceDate: any, timezoneOffset?: number) => string
```

# formatDateTime

## Type signature

```
(
  sourceDate: any,
  showSeconds?: boolean,
  timezoneOffset?: number
) => string
```

# formatDisplayDate

## Type signature

```
(
  sourceDate: any,
  showDay?: boolean,
  timezoneOffset?: number
) => string
```

# formatDuration

## Type signature

```
(duration: any, showSeconds?: boolean) => string
```

# formatTime

## Type signature

```
(
  sourceDate: any,
  showSeconds?: boolean,
  timezoneOffset?: number
) => string
```

# fromDays

## Type signature

```
(days: any) => number
```

# fromHours

## Type signature

```
(hours: any) => number
```

# fromMinutes

## Type signature

```
(minutes: any) => number
```

# fromSeconds

## Type signature

```
(seconds: any) => number
```

# joinDateTime

## Type signature

```
(...xs: any[]) => string
```

# leapYear

## Type signature

```
(year: any) => boolean
```

# monthNames

## Type signature

```
string[]
```

# offsetByBit

## Type signature

```
(date: any) => Date
```

# parseHourMinutePair

## Type signature

```
(text?: string) => number[]
```

# splitDateTime

## Type signature

```
(dateTimeString: any) => any
```

# startOfDay

## Type signature

```
(
  date: any,
  timezoneOffset?: number,
  local?: boolean
) => Date
```

# subtractDays

## Type signature

```
(sourceDate: any, numberOfDays: any) => Date
```

# toDate

## Type signature

```
(date: any) => string
```

# toDates

## Type signature

```
(xs: any) => any
```

# toDays

## Type signature

```
(milliseconds: any) => number
```

# toHours

## Type signature

```
(milliseconds: any) => number
```

# toISO

## Type signature

```
(x: any) => any
```

# toISOFromLocalDateTime

## Type signature

```
(date: any) => string
```

# toLocalDateTime

## Type signature

```
(date: any, timezoneOffset?: number) => Date
```

# toMinutes

## Type signature

```
(milliseconds: any) => number
```

# toSeconds

## Type signature

```
(milliseconds: any) => number
```

# valid

## Type signature

```
(date: any) => boolean
```
