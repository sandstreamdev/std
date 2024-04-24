# mapKeys

Transforms the object keys with the given function.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(f: (value: T, key: string, context: object) => string) => (xs: GenericObject<T>) => GenericObject<T>
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
mapKeys((_, key) => key.toUpperCase())({ a: 1, b: 2, c: 3 });
// ⇒ { A: 1, B: 2, C: 3 }
```
<!-- prettier-ignore-end -->

## Questions

- How to map object keys?
- How to transform object keys?
