# flatMapValues

Flat maps the values of the given object.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T, TResult>(f: (value: T, key: string, context: GenericObject<T>) => TResult[]) => (xs: GenericObject<T>) => TResult[]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
flatMapValues(x => [x, x * 2])({ a: 1, b: 2, c: 3 });
// ⇒ [1, 2, 2, 4, 3, 6]
```
<!-- prettier-ignore-end -->

## Questions

- How to flat map an object?
