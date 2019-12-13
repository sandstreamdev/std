# any

## Type signature

```typescript
<!-- prettier-ignore-start -->
(xs: any) => boolean
<!-- prettier-ignore-end -->
```

# apply

## Type signature

```typescript
<!-- prettier-ignore-start -->
(
  fs: ((...xs: any[]) => any)[]
) => (...xs: any[]) => object
<!-- prettier-ignore-end -->
```

# empty

## Type signature

```typescript
<!-- prettier-ignore-start -->
{}
<!-- prettier-ignore-end -->
```

# entries

## Type signature

```typescript
<!-- prettier-ignore-start -->
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
<!-- prettier-ignore-end -->
```

# enumerable

## Type signature

```typescript
<!-- prettier-ignore-start -->
(...xs: any[]) => any
<!-- prettier-ignore-end -->
```

# equals

## Type signature

```typescript
<!-- prettier-ignore-start -->
(a: any, b: any) => any
<!-- prettier-ignore-end -->
```

# filter

## Type signature

```typescript
<!-- prettier-ignore-start -->
(f: any) => (xs: any) => object
<!-- prettier-ignore-end -->
```

# find

## Type signature

```typescript
<!-- prettier-ignore-start -->
(predicate: any) => (xs: any) => unknown
<!-- prettier-ignore-end -->
```

# findEntry

## Type signature

```typescript
<!-- prettier-ignore-start -->
(predicate: any) => (xs: any) => [string, unknown]
<!-- prettier-ignore-end -->
```

# findKey

## Type signature

```typescript
<!-- prettier-ignore-start -->
(predicate: any) => (xs: any) => string
<!-- prettier-ignore-end -->
```

# findValue

## Type signature

```typescript
<!-- prettier-ignore-start -->
(predicate: any) => (xs: any) => unknown
<!-- prettier-ignore-end -->
```

# first

## Type signature

```typescript
<!-- prettier-ignore-start -->
(xs: any) => unknown
<!-- prettier-ignore-end -->
```

# flatMapValues

## Type signature

```typescript
<!-- prettier-ignore-start -->
(f: any) => (xs: any) => any
<!-- prettier-ignore-end -->
```

# fromEntries

## Type signature

```typescript
<!-- prettier-ignore-start -->
(keyValuePairs: [string, any][]) => object
<!-- prettier-ignore-end -->
```

# groupBy

## Type signature

```typescript
<!-- prettier-ignore-start -->
(selector: any) => (xs: any) => any
<!-- prettier-ignore-end -->
```

# hasKey

## Type signature

```typescript
<!-- prettier-ignore-start -->
(key: any) => (xs: any) => any
<!-- prettier-ignore-end -->
```

# length

## Type signature

```typescript
<!-- prettier-ignore-start -->
(xs: any) => number
<!-- prettier-ignore-end -->
```

# map

## Type signature

```typescript
<!-- prettier-ignore-start -->
(
  f: (value: any, key: string, context: object) => any
) => (xs: object) => object
<!-- prettier-ignore-end -->
```

# mapEntries

## Type signature

```typescript
<!-- prettier-ignore-start -->
(
  f: (value: any, key: string, context: object) => any
) => (xs: object) => [string, any][]
<!-- prettier-ignore-end -->
```

# mapKeys

## Type signature

```typescript
<!-- prettier-ignore-start -->
(f: any) => (xs: any) => object
<!-- prettier-ignore-end -->
```

# mapValues

## Type signature

```typescript
<!-- prettier-ignore-start -->
(f: any) => (xs: any) => any[]
<!-- prettier-ignore-end -->
```

# merge

## Type signature

```typescript
<!-- prettier-ignore-start -->
(a: object, b: object) => object
<!-- prettier-ignore-end -->
```

# none

## Type signature

```typescript
<!-- prettier-ignore-start -->
(xs: any) => boolean
<!-- prettier-ignore-end -->
```

# sort

## Type signature

```typescript
<!-- prettier-ignore-start -->
(f: any) => (xs: any) => object
<!-- prettier-ignore-end -->
```
