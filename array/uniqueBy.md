# uniqueBy

Filters out duplicated values based on the result of the given key selector.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T, TResult>(f: (x: T) => TResult) => (xs: T[]) => T[]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
uniqueBy(({ id }) => id)([
  { id: 1, value: 'a' },
  { id: 2, value: 'b' },
  { id: 1, value: 'c' }
])
// ⇒ [{ id: 1, value: 'c' }, { id: 2, value: 'b' }]
```
<!-- prettier-ignore-end -->

## Questions

- How to find all unique values in an array by some predicate?
