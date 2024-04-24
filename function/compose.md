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
