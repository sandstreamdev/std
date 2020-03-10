# map

Maps the given object with the given function.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  f: (value: any, key: string, context: object) => any
) => (xs: object) => object
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
