# are

Checks if given arguments are all `Arrays`.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(...xs: any[]) => boolean
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
are([2, 3]);
// ⇒ true
```

```javascript
are([1, 2, 3], []);
// ⇒ true
```

```javascript
are([1, 2, 3], 8, [1, 3], "test");
// ⇒ false
```
<!-- prettier-ignore-end -->

## Questions

- How to check if all the given values are arrays?
