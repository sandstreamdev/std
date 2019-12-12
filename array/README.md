# any

Checks if the given array is not empty (contains at least one element).

## Type signature

```typescript
(xs: any[]) => boolean;
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

```typescript
(...xs: any[]) => boolean;
```

# difference

## Type signature

```typescript
(xs: any, ys: any) => any;
```

# differs

## Type signature

```typescript
(xs: any, ys: any) => any;
```

# duplicates

## Type signature

```typescript
(xs: any) => any;
```

# empty

## Type signature

```typescript
any[]
```

# exact

## Type signature

```typescript
(n: any) => (xs: any) => any[]
```

# except

## Type signature

```typescript
(y: any) => (xs: any) => any;
```

# filterInPlace

## Type signature

```typescript
(f: any) => (xs: any) => any;
```

# find

## Type signature

```typescript
(predicate: any, fallback: any) => (xs: any) => any;
```

# first

## Type signature

```typescript
([x]: [any]) => any;
```

# flatMap

## Type signature

```typescript
(f: any) => (xs: any) => any;
```

# flatten

## Type signature

```typescript
(xs: any) => any[]
```

# intersection

## Type signature

```typescript
(xs: any, ys: any) => any;
```

# is

## Type signature

```typescript
(value: any) => boolean;
```

# last

## Type signature

```typescript
(xs: any) => any;
```

# lengthDiffers

## Type signature

```typescript
(a: any, b: any) => boolean;
```

# map

## Type signature

```typescript
(...fs: any[]) => (x: any) => any;
```

# midpoint

## Type signature

```typescript
(xs: any) => any;
```

# minMax

## Type signature

```typescript
([head, ...tail]: [any, ...any[]]) => any;
```

# multiple

## Type signature

```typescript
(xs: any) => boolean;
```

# none

## Type signature

```typescript
(xs: any) => boolean;
```

# partition

## Type signature

```typescript
(predicate: any) => (xs: any) => any;
```

# range

## Type signature

```typescript
(n: any) => number[]
```

# repeat

## Type signature

```typescript
(n: any) => (value: any) => any[]
```

# reverse

## Type signature

```typescript
(xs: any) => any[]
```

# reverseIf

## Type signature

```typescript
(predicate: any) => (xs: any) => any;
```

# rotate

## Type signature

```typescript
(array: any) => (angle: any) => any;
```

# second

## Type signature

```typescript
([, x]: [any, any]) => any;
```

# secondToLast

## Type signature

```typescript
(xs: any) => any;
```

# shift

## Type signature

```typescript
(n: any) => (xs: any) => any;
```

# shuffle

## Type signature

```typescript
(xs: any) => any;
```

# shuffleInPlace

## Type signature

```typescript
(xs: any) => any;
```

# single

## Type signature

```typescript
(xs: any) => boolean;
```

# skip

## Type signature

```typescript
(count: number) => (xs: any[]) => any[]
```

# sort

## Type signature

```typescript
(f: any) => (xs: any) => any[]
```

# sum

## Type signature

```typescript
(xs: any) => any;
```

# take

## Type signature

```typescript
(count: number) => (xs: any[]) => any[]
```

# transpose

## Type signature

```typescript
(xs: any) => any[][]
```

# unique

## Type signature

```typescript
(xs: any) => unknown[]
```

# zip

## Type signature

```typescript
(xs: any, ys: any) => any;
```

# zipWith

## Type signature

```typescript
(f: any) => (xs: any, ys: any) => any;
```
