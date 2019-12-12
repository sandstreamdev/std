# byDateWithFallback

## Type signature

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

# clamp

## Type signature

```typescript
(min: any, max: any) => (dateStringOrDate: any) => Date;
```

# dateDiff

## Type signature

```typescript
(a: any, b: any) => number;
```

# dateInRange

## Type signature

```typescript
(from: any, to: any) => (date?: Date) => boolean;
```

# dayRange

## Type signature

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

# daysInMonths

## Type signature

```typescript
(leapYear: any) => number[]
```

# daysInYear

## Type signature

```typescript
(year: any) => any;
```

# displayMonth

## Type signature

```typescript
(monthIndex: any) => string;
```

# displayTime

## Type signature

```typescript
(source: any, showSeconds: any) => string;
```

# endOfDay

## Type signature

```typescript
(date: any, timezoneOffset?: number, local?: boolean) => Date;
```

# formatDate

## Type signature

```typescript
(sourceDate: any, timezoneOffset?: number) => string;
```

# formatDateTime

## Type signature

```typescript
(sourceDate: any, showSeconds?: boolean, timezoneOffset?: number) => string;
```

# formatDisplayDate

## Type signature

```typescript
(sourceDate: any, showDay?: boolean, timezoneOffset?: number) => string;
```

# formatDuration

## Type signature

```typescript
(duration: any, showSeconds?: boolean) => string;
```

# formatTime

## Type signature

```typescript
(sourceDate: any, showSeconds?: boolean, timezoneOffset?: number) => string;
```

# fromDays

## Type signature

```typescript
(days: any) => number;
```

# fromHours

## Type signature

```typescript
(hours: any) => number;
```

# fromMinutes

## Type signature

```typescript
(minutes: any) => number;
```

# fromSeconds

## Type signature

```typescript
(seconds: any) => number;
```

# joinDateTime

## Type signature

```typescript
(...xs: any[]) => string;
```

# leapYear

## Type signature

```typescript
(year: any) => boolean;
```

# monthNames

## Type signature

```typescript
string[]
```

# offsetByBit

## Type signature

```typescript
(date: any) => Date;
```

# parseHourMinutePair

## Type signature

```typescript
(text?: string) => number[]
```

# splitDateTime

## Type signature

```typescript
(dateTimeString: any) => any;
```

# startOfDay

## Type signature

```typescript
(date: any, timezoneOffset?: number, local?: boolean) => Date;
```

# subtractDays

## Type signature

```typescript
(sourceDate: any, numberOfDays: any) => Date;
```

# toDate

## Type signature

```typescript
(date: any) => string;
```

# toDates

## Type signature

```typescript
(xs: any) => any;
```

# toDays

## Type signature

```typescript
(milliseconds: any) => number;
```

# toHours

## Type signature

```typescript
(milliseconds: any) => number;
```

# toISO

## Type signature

```typescript
(x: any) => any;
```

# toISOFromLocalDateTime

## Type signature

```typescript
(date: any) => string;
```

# toLocalDateTime

## Type signature

```typescript
(date: any, timezoneOffset?: number) => Date;
```

# toMinutes

## Type signature

```typescript
(milliseconds: any) => number;
```

# toSeconds

## Type signature

```typescript
(milliseconds: any) => number;
```

# valid

## Type signature

```typescript
(date: any) => boolean;
```
