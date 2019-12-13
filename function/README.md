# compose

Composes multiple functions into a higher order one. Goes right to left.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(...fs: ((x: any) => any)[]) => (x: any) => any
```
<!-- prettier-ignore-end -->

# constant

Returns the given constant no matter of the input.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(x: any) => any
```
<!-- prettier-ignore-end -->

# identity

Always return the given value.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(x: any) => any
```
<!-- prettier-ignore-end -->

# memoize

Memoizes the function result so it is not computed for the same parameters. Uses deep equality.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(f: (...xs: any[]) => any) => (...args: any[]) => any
```
<!-- prettier-ignore-end -->

# memoizeShallow

Memoizes the function result so it is not computed for the same parameters. Uses shallow equality.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(f: (...xs: any[]) => any) => (...args: any[]) => any
```
<!-- prettier-ignore-end -->

# memoizeWith

Memoizes the function result so it is not computed for the same parameters. Uses the given equality function.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  equals: (x: any[], ay: any) => boolean
) => (f: (...xs: any[]) => any) => (...args: any[]) => any
```
<!-- prettier-ignore-end -->

# noOp

Does exactly nothing.

## Type signature

<!-- prettier-ignore-start -->
```typescript
() => void
```
<!-- prettier-ignore-end -->

# not

Inverts the given function result.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  f: (...xs: any[]) => any
) => (...args: any[]) => boolean
```
<!-- prettier-ignore-end -->

# pipe

Pipes an input through given functions.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(...fs: ((x: any) => any)[]) => (x: any) => any
```
<!-- prettier-ignore-end -->

# when

Runs the given function only when the condition is met.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  predicate: (...xs: any[]) => boolean
) => (action: (...xs: any[]) => any) => (...args: any[]) => any
```
<!-- prettier-ignore-end -->

# whenTrue

Runs the given function only when the condition is exactly true.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  action: (...xs: any[]) => any
) => (...args: any[]) => any
```
<!-- prettier-ignore-end -->
