# memoize

Memoizes the function result so it is not computed for the same parameters. Uses deep equality.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(f: (...xs: any[]) => any) => (...args: any[]) => any
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
