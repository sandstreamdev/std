# flatMap

Maps and flattens the result.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T, TResult>(f: (value: T, index: number, context: T[]) => TResult[]) => (xs: T[]) => TResult[]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
flatMap(text => [...text])(["test", "123"]);
// ⇒ ["t", "e", "s", "t", "1", "2", "3"]
```
<!-- prettier-ignore-end -->

## Questions

- How to flat map an array?
- How to map and then flatten an array?
