# mapEntries

Maps entries of the given object.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T, TResult>(f: (value: T, key: string, context: object) => TResult) => (xs: GenericObject<T>) => [string, TResult][]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
mapEntries(x => x ** 2)({ a: 1, b: 2, c: 3 });
// ⇒ [["a", 1], ["b", 4], ["c", 9]]
```
<!-- prettier-ignore-end -->

## Questions

- How to map object entries?
