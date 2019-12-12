# any

## Type signature

```
(xs: any) => boolean
```

# apply

## Type signature

```
(
  fs: ((...xs: any[]) => any)[]
) => (...xs: any[]) => object
```

# empty

## Type signature

```
{}
```

# entries

## Type signature

```
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

```
(...xs: any[]) => any
```

# equals

## Type signature

```
(a: any, b: any) => any
```

# filter

## Type signature

```
(f: any) => (xs: any) => object
```

# find

## Type signature

```
(predicate: any) => (xs: any) => unknown
```

# findEntry

## Type signature

```
(predicate: any) => (xs: any) => [string, unknown]
```

# findKey

## Type signature

```
(predicate: any) => (xs: any) => string
```

# findValue

## Type signature

```
(predicate: any) => (xs: any) => unknown
```

# first

## Type signature

```
(xs: any) => unknown
```

# flatMapValues

## Type signature

```
(f: any) => (xs: any) => any
```

# fromEntries

## Type signature

```
(keyValuePairs: [string, any][]) => object
```

# groupBy

## Type signature

```
(selector: any) => (xs: any) => any
```

# hasKey

## Type signature

```
(key: any) => (xs: any) => any
```

# length

## Type signature

```
(xs: any) => number
```

# map

## Type signature

```
(
  f: (value: any, key: string, context: object) => any
) => (xs: object) => object
```

# mapEntries

## Type signature

```
(
  f: (value: any, key: string, context: object) => any
) => (xs: object) => [string, any][]
```

# mapKeys

## Type signature

```
(f: any) => (xs: any) => object
```

# mapValues

## Type signature

```
(f: any) => (xs: any) => any[]
```

# merge

## Type signature

```
(a: object, b: object) => object
```

# none

## Type signature

```
(xs: any) => boolean
```

# sort

## Type signature

```
(f: any) => (xs: any) => object
```
