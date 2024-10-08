# mapValues

Maps and returns an array of transformed object values.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T, TResult>(f: (value: T, key: string, context: object) => TResult) => (xs: GenericObject<T>) => TResult[]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
mapValues(x => x ** 2)({ a: 1, b: 2, c: 3 });
// ⇒ [1, 4, 9]
```
<!-- prettier-ignore-end -->

## Questions

- How to map object values?
