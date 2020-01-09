# chunk

Creates an array of elements split into groups the length of size.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(count: number) => (xs: any[]) => any[]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
chunk(2)(['a', 'b', 'c', 'd']); // ⇒ [['a', 'b'], ['c', 'd']]
```

```javascript
chunk(3)(['a', 'b', 'c', 'd']); // ⇒ [['a', 'b', 'c'], ['d']]
```
<!-- prettier-ignore-end -->
