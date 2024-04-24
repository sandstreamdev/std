# serialize

Serializes the given object into a query string.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(xs?: GenericObject<T>) => string
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
serialize({ test: true, value: "a string with spaces", missing: false });
// ⇒ "test&value=a%20string%20with%20spaces"
```
<!-- prettier-ignore-end -->

## Questions

- How to serialize an object to a query string?
