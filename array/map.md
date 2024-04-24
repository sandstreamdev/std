# map

Maps the given array with the given functions.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(...fs: ((x: T) => T)[]) => (xs: T[]) => T[]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
map(x => x * x)([1, 2, 3]);
// ⇒ [1, 4, 9]
```

```javascript
map(x => x * x, x => x + 1)([1, 2, 3]);
// ⇒ [2, 5, 10]
```
<!-- prettier-ignore-end -->

## Questions

- How to map an array?
