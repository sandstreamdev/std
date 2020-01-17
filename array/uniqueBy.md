# uniqueBy

Filters out duplicated values based on the result of the given key selector.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(f: (x: any) => any) => (xs: any[]) => any[]
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
