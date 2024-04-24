# any

Checks if the given object is present and it is not empty (contains at least one entry).

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(xs?: GenericObject<T>) => boolean
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
any({ a: 1, b: 2, c: 3 });
// ⇒ true
```

```javascript
any({ });
// ⇒ false
```

```javascript
any(null);
// ⇒ false
```

```javascript
any(undefined);
// ⇒ false
```
<!-- prettier-ignore-end -->

## Questions

- How to check if an object is not empty?
- How to check if an object contains some values?
- How to check if an object is not null or undefined?
