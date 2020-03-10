# insert

Inserts the given item to the array at a specific index.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  index: number
) => (item: any) => ([...xs]: any[]) => any[]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
insert(0)('d')(['a', 'b', 'c']);
// ⇒ ['d', 'a', 'b', 'c']
```

```javascript
insert(1)('d')(['a', 'b', 'c']);
// ⇒ ['a', 'd', 'b', 'c']
```
<!-- prettier-ignore-end -->

## Questions

- How to insert an element to an array at a given position?
