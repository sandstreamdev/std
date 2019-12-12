# any

Checks if the given array is not empty (contains at least one element).

## Type signature

```
(xs: any[]) => boolean
```

## Examples

```javascript
any([]); // ⇒ false
```

```javascript
any([1, 2, 3]); // ⇒ true
```

## Questions

- How to check if an array is empty (in JavaScript)?
- How to check if array is empty or null or undefined (in JavaScript)?
- Check if an array is empty or not (in JavaScript).
- Check if an array is empty or exists (in JavaScript).

# are

Checks if given arguments are all `Arrays`.

## Type signature

```
(...xs: any[]) => boolean
```

# difference

## Type signature

```
(xs: any, ys: any) => any
```

# differs

## Type signature

```
(xs: any, ys: any) => any
```

# duplicates

## Type signature

```
(xs: any) => any
```

# empty

## Type signature

```
any[]
```

# exact

## Type signature

```
(n: any) => (xs: any) => any[]
```

# except

## Type signature

```
(y: any) => (xs: any) => any
```

# filterInPlace

## Type signature

```
(f: any) => (xs: any) => any
```

# find

## Type signature

```
(predicate: any, fallback: any) => (xs: any) => any
```

# first

## Type signature

```
([x]: [any]) => any
```

# flatMap

## Type signature

```
(f: any) => (xs: any) => any
```

# flatten

## Type signature

```
(xs: any) => any[]
```

# intersection

## Type signature

```
(xs: any, ys: any) => any
```

# is

## Type signature

```
(value: any) => boolean
```

# last

## Type signature

```
(xs: any) => any
```

# lengthDiffers

## Type signature

```
(a: any, b: any) => boolean
```

# map

## Type signature

```
(...fs: any[]) => (x: any) => any
```

# midpoint

## Type signature

```
(xs: any) => any
```

# minMax

## Type signature

```
([head, ...tail]: [any, ...any[]]) => any
```

# multiple

## Type signature

```
(xs: any) => boolean
```

# none

## Type signature

```
(xs: any) => boolean
```

# partition

## Type signature

```
(predicate: any) => (xs: any) => any
```

# range

## Type signature

```
(n: any) => number[]
```

# repeat

## Type signature

```
(n: any) => (value: any) => any[]
```

# reverse

## Type signature

```
(xs: any) => any[]
```

# reverseIf

## Type signature

```
(predicate: any) => (xs: any) => any
```

# rotate

## Type signature

```
(array: any) => (angle: any) => any
```

# second

## Type signature

```
([, x]: [any, any]) => any
```

# secondToLast

## Type signature

```
(xs: any) => any
```

# shift

## Type signature

```
(n: any) => (xs: any) => any
```

# shuffle

## Type signature

```
(xs: any) => any
```

# shuffleInPlace

## Type signature

```
(xs: any) => any
```

# single

## Type signature

```
(xs: any) => boolean
```

# skip

## Type signature

```
(count: number) => (xs: any[]) => any[]
```

# sort

## Type signature

```
(f: any) => (xs: any) => any[]
```

# sum

## Type signature

```
(xs: any) => any
```

# take

## Type signature

```
(count: number) => (xs: any[]) => any[]
```

# transpose

## Type signature

```
(xs: any) => any[][]
```

# unique

## Type signature

```
(xs: any) => unknown[]
```

# zip

## Type signature

```
(xs: any, ys: any) => any
```

# zipWith

## Type signature

```
(f: any) => (xs: any, ys: any) => any
```
