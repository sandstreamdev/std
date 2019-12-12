# any

## Type signature

```typescript
(xs: any) => boolean;
```

# apply

## Type signature

```typescript
(fs: ((...xs: any[]) => any)[]) => (...xs: any[]) => object;
```

# empty

## Type signature

```typescript
{
}
```

# entries

## Type signature

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

# enumerable

## Type signature

```typescript
(...xs: any[]) => any;
```

# equals

## Type signature

```typescript
(a: any, b: any) => any;
```

# filter

## Type signature

```typescript
(f: any) => (xs: any) => object;
```

# find

## Type signature

```typescript
(predicate: any) => (xs: any) => unknown;
```

# findEntry

## Type signature

```typescript
(predicate: any) => (xs: any) => [string, unknown];
```

# findKey

## Type signature

```typescript
(predicate: any) => (xs: any) => string;
```

# findValue

## Type signature

```typescript
(predicate: any) => (xs: any) => unknown;
```

# first

## Type signature

```typescript
(xs: any) => unknown;
```

# flatMapValues

## Type signature

```typescript
(f: any) => (xs: any) => any;
```

# fromEntries

## Type signature

```typescript
(keyValuePairs: [string, any][]) => object;
```

# groupBy

## Type signature

```typescript
(selector: any) => (xs: any) => any;
```

# hasKey

## Type signature

```typescript
(key: any) => (xs: any) => any;
```

# length

## Type signature

```typescript
(xs: any) => number;
```

# map

## Type signature

```typescript
(f: (value: any, key: string, context: object) => any) => (xs: object) =>
  object;
```

# mapEntries

## Type signature

```typescript
(
  f: (value: any, key: string, context: object) => any
) => (xs: object) => [string, any][]
```

# mapKeys

## Type signature

```typescript
(f: any) => (xs: any) => object;
```

# mapValues

## Type signature

```typescript
(f: any) => (xs: any) => any[]
```

# merge

## Type signature

```typescript
(a: object, b: object) => object;
```

# none

## Type signature

```typescript
(xs: any) => boolean;
```

# sort

## Type signature

```typescript
(f: any) => (xs: any) => object;
```
