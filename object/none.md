# none

Checks if the given object is empty.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(xs?: GenericObject<T>) => boolean
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
none({});
// ⇒ true
```

```javascript
none(null);
// ⇒ true
```

```javascript
none({ a: 1 });
// ⇒ false
```
<!-- prettier-ignore-end -->

## Questions

- How to check if an object is empty?
- How to check if an object is null or undefined?
