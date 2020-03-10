# chunk

Splits the given array into an array of chunks of up to the given length.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(count: number) => (xs: any[]) => any[]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
chunk(2)(['a', 'b', 'c', 'd']);
// ⇒ [['a', 'b'], ['c', 'd']]
```

```javascript
chunk(3)(['a', 'b', 'c', 'd']);
// ⇒ [['a', 'b', 'c'], ['d']]
```
<!-- prettier-ignore-end -->

## Questions

- How to split an array into chunks?
- How to split an array into chunks of the same size?
