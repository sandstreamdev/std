# diff

Computes a deep difference between the two values (primitives, objects, arrays, etc.).

## Type signature

<!-- prettier-ignore-start -->
```typescript
(obj1?: unknown, obj2?: unknown) => DiffResult;
export default diff
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
diff({ a: 1 }, { a: 2 });
// ⇒ { a: { data: [1, 2], type: '~' }}
```
<!-- prettier-ignore-end -->

## Questions

- How to compute a diff?
- How to compute a deep diff?
- How to compute a diff between two objects?
- How to compute a diff between two arrays?
