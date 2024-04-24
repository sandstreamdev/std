# map

Maps the given object with the given function.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T, TResult>(f: (value: T, key: string, context: object) => TResult) => (xs: GenericObject<T>) => GenericObject<TResult>
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
map(x => x ** 2)({ a: 1, b: 2, c: 3 });
// ⇒ { a: 1, b: 4, c: 9 }
```
<!-- prettier-ignore-end -->

## Questions

- How to map an object?
- How to transform an object?
