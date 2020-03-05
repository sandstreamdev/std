# memoizeWith

Memoizes the function result so it is not computed for the same parameters. Uses the given equality function.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  equals: (x: any, y: any) => boolean
) => (f: (...xs: any[]) => any) => (...args: any[]) => any
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
