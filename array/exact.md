# exact

Takes exactly the given count of elements.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(count: number) => (xs: any[]) => any[]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
exact(5)([1, 2, 3]);
// ⇒ [1, 2, 3, undefined, undefined]
```

```javascript
exact(2)([1, 2, 3]);
// ⇒ [1, 2]
```
<!-- prettier-ignore-end -->

## Questions

- How to get exactly N elements out of an array?
