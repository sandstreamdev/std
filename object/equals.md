# equals

Checks if two objects are deeply equal.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(a: unknown, b: unknown) => boolean;
export default equalsDeep
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
equals({ a: 1 }, { a: 1 });
// ⇒ true
```

```javascript
equals({ b: [1, 2] }, { b: [1, 2] });
// ⇒ true
```
<!-- prettier-ignore-end -->

## Questions

- How to check if two objects are equal?
- How to check deep object equality?
