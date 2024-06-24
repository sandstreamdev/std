# string

Checks if the given value is a string.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(x?: unknown) => x is string
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
string("Test");
// ⇒ true
```

```javascript
string(['T', 'e', 's', 't']);
// ⇒ false
```
<!-- prettier-ignore-end -->

## Questions

- How to check if a given value is a string?
