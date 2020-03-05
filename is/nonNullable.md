# nonNullable

Checks and asserts the given value is not a null or undefined.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(val: T) => val is NonNullable<T>
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
nonNullable(null);
// ⇒ false
```

```javascript
nonNullable(undefined);
// ⇒ false
```

```javascript
nonNullable(false);
// ⇒ true
```

```javascript
nonNullable({ a: 1 });
// ⇒ true
```
<!-- prettier-ignore-end -->

## Questions

- How to check is a given value is non nullable?
- How to check is a given value is not null?
- How to check is a given value is not undefined?
