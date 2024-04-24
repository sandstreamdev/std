# secondToLast

Returns the second to last element or undefined when there are less than two elements in the given array.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(xs: T[]) => T | undefined
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
secondToLast([1, 2, 3, 4, 5]);
// ⇒ 4
```

```javascript
secondToLast([1]);
// ⇒ undefined
```

```javascript
secondToLast([]);
// ⇒ undefined
```
<!-- prettier-ignore-end -->

## Questions

- How to get the second to last element of an array?
