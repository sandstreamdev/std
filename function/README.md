# compose

Composes multiple functions into a higher-order one. Goes right to left.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T, TResult>(...fs: ((x: T) => T)[]) => (x: T) => T
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
compose(x => x * x, x => x + 1)(3);
// ⇒ 16
```
<!-- prettier-ignore-end -->

## Questions

- How to compose functions?

# constant

Returns the given constant no matter the input.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(x: T) => () => T
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
constant(3)("anything");
// ⇒ 3
```
<!-- prettier-ignore-end -->

## Questions

- How to create a function that always returns the same value despite given arguments?

# identity

Always return the given value.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(x: T) => T
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
identity(5);
// ⇒ 5
```

```javascript
identity("test");
// ⇒ "test"
```
<!-- prettier-ignore-end -->

## Questions

- How to use the identity function?
- Where and why is identity function useful?

# memoize

Memoizes the function result so it is not computed for the same parameters. Uses deep equality.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<TResult>(f: (...xs: unknown[]) => TResult) => (...args: unknown[]) => TResult
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
const f = x => { console.log(x); return x + 1; };

const memoized = memoize(f);

memoized(5);
memoized(5);
memoized(5);
memoized(3);
```
<!-- prettier-ignore-end -->

## Questions

- How to memoize a function?

# memoizeShallow

Memoizes the function result so it is not computed for the same parameters. Uses shallow equality.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<TResult>(f: (...xs: unknown[]) => TResult) => (...args: unknown[]) => TResult
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
const f = ({ x }) => { console.log(x); return x + 1; };

const memoized = memoizeShallow(f);

memoized({ x: 5 });
memoized({ x: 5 });
memoized({ x: 5 });
memoized({ x: 3 });
```
<!-- prettier-ignore-end -->

## Questions

- How to memoize a function with shallow equality?

# memoizeWith

Memoizes the function result so it is not computed for the same parameters. Uses the given equality function.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(equals: (x: T[], y: T[]) => boolean) => <TResult>(f: (...xs: T[]) => TResult) => (...args: T[]) => TResult
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
const f = ({ x }) => { console.log(x); return x + 1; };

const memoized = memoizeWith((a, b) => a.x === b.x)(f);

memoized({ x: 5 });
memoized({ x: 5 });
memoized({ x: 5 });
memoized({ x: 3 });
```
<!-- prettier-ignore-end -->

## Questions

- How to memoize a function with a custom equality function?

# noOp

It does exactly nothing.

## Type signature

<!-- prettier-ignore-start -->
```typescript
() => void
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
noOp("anything");
// ⇒ undefined
```
<!-- prettier-ignore-end -->

## Questions

- How to create a function that does nothing?

# not

Inverts the given function result.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(f: (...xs: unknown[]) => unknown) => (...args: unknown[]) => boolean
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
not(x > 10)(15);
// ⇒ true
```
<!-- prettier-ignore-end -->

## Questions

- How to invert a boolean function?

# pipe

Pipes an input through given functions.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(...fs: ((x: T) => T)[]) => (x: T) => T
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
pipe(x => x * x, x => x + 1)(3);
// ⇒ 10
```
<!-- prettier-ignore-end -->

## Questions

- How to pipe an argument through a function?

# when

Runs the given function only when the condition is met.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(predicate: (...xs: unknown[]) => boolean) => (action: (...xs: unknown[]) => unknown) => (...args: unknown[]) => unknown
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
when(x => x > 0)(x => console.log(x))(5);
when(x => x > 0)(x => console.log(x))(-3);
```
<!-- prettier-ignore-end -->

## Questions

- How to run a function only when a condition is satisfied?

# whenTrue

Runs the given function only when the condition is exactly true.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(action: (...xs: unknown[]) => unknown) => (...args: unknown[]) => unknown
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
whenTrue(x => console.log(x))(false);
when(x => x > 0)(x => console.log(x))(true);
```
<!-- prettier-ignore-end -->

## Questions

- How to run a function only if its argument is true?
- How to execute function only if a variable is true?
