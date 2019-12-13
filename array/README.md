# any

Checks if the given array is not empty (contains at least one element).

## Type signature

```typescript
<!-- prettier-ignore-start -->
(xs: any[]) => boolean
<!-- prettier-ignore-end -->
```

## Examples

<!-- prettier-ignore-start -->
```javascript
any([]); // ⇒ false
```

```javascript
any([1, 2, 3]); // ⇒ true
```
<!-- prettier-ignore-end -->

## Questions

- How to check if an array is empty (in JavaScript)?
- How to check if array is empty or null or undefined (in JavaScript)?
- Check if an array is empty or not (in JavaScript).
- Check if an array is empty or exists (in JavaScript).

# are

Checks if given arguments are all `Arrays`.

## Type signature

```typescript
<!-- prettier-ignore-start -->
(...xs: any[]) => boolean
<!-- prettier-ignore-end -->
```

# difference

## Type signature

```typescript
<!-- prettier-ignore-start -->
(xs: any, ys: any) => any
<!-- prettier-ignore-end -->
```

# differs

## Type signature

```typescript
<!-- prettier-ignore-start -->
(xs: any, ys: any) => any
<!-- prettier-ignore-end -->
```

# duplicates

## Type signature

```typescript
<!-- prettier-ignore-start -->
(xs: any) => any
<!-- prettier-ignore-end -->
```

# empty

## Type signature

```typescript
<!-- prettier-ignore-start -->
any[]
<!-- prettier-ignore-end -->
```

# exact

## Type signature

```typescript
<!-- prettier-ignore-start -->
(n: any) => (xs: any) => any[]
<!-- prettier-ignore-end -->
```

# except

## Type signature

```typescript
<!-- prettier-ignore-start -->
(y: any) => (xs: any) => any
<!-- prettier-ignore-end -->
```

# filterInPlace

## Type signature

```typescript
<!-- prettier-ignore-start -->
(f: any) => (xs: any) => any
<!-- prettier-ignore-end -->
```

# find

## Type signature

```typescript
<!-- prettier-ignore-start -->
(predicate: any, fallback: any) => (xs: any) => any
<!-- prettier-ignore-end -->
```

# first

## Type signature

```typescript
<!-- prettier-ignore-start -->
([x]: [any]) => any
<!-- prettier-ignore-end -->
```

# flatMap

## Type signature

```typescript
<!-- prettier-ignore-start -->
(f: any) => (xs: any) => any
<!-- prettier-ignore-end -->
```

# flatten

## Type signature

```typescript
<!-- prettier-ignore-start -->
(xs: any) => any[]
<!-- prettier-ignore-end -->
```

# intersection

## Type signature

```typescript
<!-- prettier-ignore-start -->
(xs: any, ys: any) => any
<!-- prettier-ignore-end -->
```

# is

## Type signature

```typescript
<!-- prettier-ignore-start -->
(value: any) => boolean
<!-- prettier-ignore-end -->
```

# last

## Type signature

```typescript
<!-- prettier-ignore-start -->
(xs: any) => any
<!-- prettier-ignore-end -->
```

# lengthDiffers

## Type signature

```typescript
<!-- prettier-ignore-start -->
(a: any, b: any) => boolean
<!-- prettier-ignore-end -->
```

# map

## Type signature

```typescript
<!-- prettier-ignore-start -->
(...fs: any[]) => (x: any) => any
<!-- prettier-ignore-end -->
```

# midpoint

## Type signature

```typescript
<!-- prettier-ignore-start -->
(xs: any) => any
<!-- prettier-ignore-end -->
```

# minMax

## Type signature

```typescript
<!-- prettier-ignore-start -->
([head, ...tail]: [any, ...any[]]) => any
<!-- prettier-ignore-end -->
```

# multiple

## Type signature

```typescript
<!-- prettier-ignore-start -->
(xs: any) => boolean
<!-- prettier-ignore-end -->
```

# none

## Type signature

```typescript
<!-- prettier-ignore-start -->
(xs: any) => boolean
<!-- prettier-ignore-end -->
```

# partition

## Type signature

```typescript
<!-- prettier-ignore-start -->
(predicate: any) => (xs: any) => any
<!-- prettier-ignore-end -->
```

# range

## Type signature

```typescript
<!-- prettier-ignore-start -->
(n: any) => number[]
<!-- prettier-ignore-end -->
```

# repeat

## Type signature

```typescript
<!-- prettier-ignore-start -->
(n: any) => (value: any) => any[]
<!-- prettier-ignore-end -->
```

# reverse

## Type signature

```typescript
<!-- prettier-ignore-start -->
(xs: any) => any[]
<!-- prettier-ignore-end -->
```

# reverseIf

## Type signature

```typescript
<!-- prettier-ignore-start -->
(predicate: any) => (xs: any) => any
<!-- prettier-ignore-end -->
```

# rotate

## Type signature

```typescript
<!-- prettier-ignore-start -->
(array: any) => (angle: any) => any
<!-- prettier-ignore-end -->
```

# second

## Type signature

```typescript
<!-- prettier-ignore-start -->
([, x]: [any, any]) => any
<!-- prettier-ignore-end -->
```

# secondToLast

## Type signature

```typescript
<!-- prettier-ignore-start -->
(xs: any) => any
<!-- prettier-ignore-end -->
```

# shift

## Type signature

```typescript
<!-- prettier-ignore-start -->
(n: any) => (xs: any) => any
<!-- prettier-ignore-end -->
```

# shuffle

## Type signature

```typescript
<!-- prettier-ignore-start -->
(xs: any) => any
<!-- prettier-ignore-end -->
```

# shuffleInPlace

## Type signature

```typescript
<!-- prettier-ignore-start -->
(xs: any) => any
<!-- prettier-ignore-end -->
```

# single

## Type signature

```typescript
<!-- prettier-ignore-start -->
(xs: any) => boolean
<!-- prettier-ignore-end -->
```

# skip

## Type signature

```typescript
<!-- prettier-ignore-start -->
(count: number) => (xs: any[]) => any[]
<!-- prettier-ignore-end -->
```

# sort

## Type signature

```typescript
<!-- prettier-ignore-start -->
(f: any) => (xs: any) => any[]
<!-- prettier-ignore-end -->
```

# sum

## Type signature

```typescript
<!-- prettier-ignore-start -->
(xs: any) => any
<!-- prettier-ignore-end -->
```

# take

## Type signature

```typescript
<!-- prettier-ignore-start -->
(count: number) => (xs: any[]) => any[]
<!-- prettier-ignore-end -->
```

# transpose

## Type signature

```typescript
<!-- prettier-ignore-start -->
(xs: any) => any[][]
<!-- prettier-ignore-end -->
```

# unique

## Type signature

```typescript
<!-- prettier-ignore-start -->
(xs: any) => unknown[]
<!-- prettier-ignore-end -->
```

# zip

## Type signature

```typescript
<!-- prettier-ignore-start -->
(xs: any, ys: any) => any
<!-- prettier-ignore-end -->
```

# zipWith

## Type signature

```typescript
<!-- prettier-ignore-start -->
(f: any) => (xs: any, ys: any) => any
<!-- prettier-ignore-end -->
```
