# filterInPlace

Filters the given array with the given predicate just like Array.filter but does it in-place thus mutates the original array.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(f: (value: T, index: number, context: T[]) => boolean) => (xs: T[]) => T[]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
const xs = [1, 2, 3, 4, 5, 6, 7];
const odd = x => x % 2 === 1;

const ys = filterInPlace(odd)(xs);

ys === xs;
// ⇒ true
ys;
// ⇒ [1, 3, 5, 7]
```
<!-- prettier-ignore-end -->

## Questions

- How to filter an array in place?
