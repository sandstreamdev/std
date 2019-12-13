# any

Checks if the given array is not empty (contains at least one element).

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any[]) => boolean
```
<!-- prettier-ignore-end -->

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

<!-- prettier-ignore-start -->
```typescript
(...xs: any[]) => boolean
```
<!-- prettier-ignore-end -->

# difference

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any, ys: any) => any
```
<!-- prettier-ignore-end -->

# differs

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any, ys: any) => any
```
<!-- prettier-ignore-end -->

# duplicates

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any) => any
```
<!-- prettier-ignore-end -->

# empty

## Type signature

<!-- prettier-ignore-start -->
```typescript
any[]
```
<!-- prettier-ignore-end -->

# exact

## Type signature

<!-- prettier-ignore-start -->
```typescript
(n: any) => (xs: any) => any[]
```
<!-- prettier-ignore-end -->

# except

## Type signature

<!-- prettier-ignore-start -->
```typescript
(y: any) => (xs: any) => any
```
<!-- prettier-ignore-end -->

# filterInPlace

## Type signature

<!-- prettier-ignore-start -->
```typescript
(f: any) => (xs: any) => any
```
<!-- prettier-ignore-end -->

# find

## Type signature

<!-- prettier-ignore-start -->
```typescript
(predicate: any, fallback: any) => (xs: any) => any
```
<!-- prettier-ignore-end -->

# first

## Type signature

<!-- prettier-ignore-start -->
```typescript
([x]: [any]) => any
```
<!-- prettier-ignore-end -->

# flatMap

## Type signature

<!-- prettier-ignore-start -->
```typescript
(f: any) => (xs: any) => any
```
<!-- prettier-ignore-end -->

# flatten

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any) => any[]
```
<!-- prettier-ignore-end -->

# intersection

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any, ys: any) => any
```
<!-- prettier-ignore-end -->

# is

## Type signature

<!-- prettier-ignore-start -->
```typescript
(value: any) => boolean
```
<!-- prettier-ignore-end -->

# last

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any) => any
```
<!-- prettier-ignore-end -->

# lengthDiffers

## Type signature

<!-- prettier-ignore-start -->
```typescript
(a: any, b: any) => boolean
```
<!-- prettier-ignore-end -->

# map

## Type signature

<!-- prettier-ignore-start -->
```typescript
(...fs: any[]) => (x: any) => any
```
<!-- prettier-ignore-end -->

# midpoint

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any) => any
```
<!-- prettier-ignore-end -->

# minMax

## Type signature

<!-- prettier-ignore-start -->
```typescript
([head, ...tail]: [any, ...any[]]) => any
```
<!-- prettier-ignore-end -->

# multiple

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any) => boolean
```
<!-- prettier-ignore-end -->

# none

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any) => boolean
```
<!-- prettier-ignore-end -->

# partition

## Type signature

<!-- prettier-ignore-start -->
```typescript
(predicate: any) => (xs: any) => any
```
<!-- prettier-ignore-end -->

# range

## Type signature

<!-- prettier-ignore-start -->
```typescript
(n: any) => number[]
```
<!-- prettier-ignore-end -->

# repeat

## Type signature

<!-- prettier-ignore-start -->
```typescript
(n: any) => (value: any) => any[]
```
<!-- prettier-ignore-end -->

# reverse

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any) => any[]
```
<!-- prettier-ignore-end -->

# reverseIf

## Type signature

<!-- prettier-ignore-start -->
```typescript
(predicate: any) => (xs: any) => any
```
<!-- prettier-ignore-end -->

# rotate

## Type signature

<!-- prettier-ignore-start -->
```typescript
(array: any) => (angle: any) => any
```
<!-- prettier-ignore-end -->

# second

## Type signature

<!-- prettier-ignore-start -->
```typescript
([, x]: [any, any]) => any
```
<!-- prettier-ignore-end -->

# secondToLast

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any) => any
```
<!-- prettier-ignore-end -->

# shift

## Type signature

<!-- prettier-ignore-start -->
```typescript
(n: any) => (xs: any) => any
```
<!-- prettier-ignore-end -->

# shuffle

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any) => any
```
<!-- prettier-ignore-end -->

# shuffleInPlace

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any) => any
```
<!-- prettier-ignore-end -->

# single

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any) => boolean
```
<!-- prettier-ignore-end -->

# skip

## Type signature

<!-- prettier-ignore-start -->
```typescript
(count: number) => (xs: any[]) => any[]
```
<!-- prettier-ignore-end -->

# sort

## Type signature

<!-- prettier-ignore-start -->
```typescript
(f: any) => (xs: any) => any[]
```
<!-- prettier-ignore-end -->

# sum

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any) => any
```
<!-- prettier-ignore-end -->

# take

## Type signature

<!-- prettier-ignore-start -->
```typescript
(count: number) => (xs: any[]) => any[]
```
<!-- prettier-ignore-end -->

# transpose

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any) => any[][]
```
<!-- prettier-ignore-end -->

# unique

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any) => unknown[]
```
<!-- prettier-ignore-end -->

# zip

## Type signature

<!-- prettier-ignore-start -->
```typescript
(xs: any, ys: any) => any
```
<!-- prettier-ignore-end -->

# zipWith

## Type signature

<!-- prettier-ignore-start -->
```typescript
(f: any) => (xs: any, ys: any) => any
```
<!-- prettier-ignore-end -->
