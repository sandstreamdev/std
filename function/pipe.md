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
