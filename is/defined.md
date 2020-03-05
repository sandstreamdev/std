# defined

Checks if the given value is defined.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(x?: any) => boolean
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
defined(undefined);
// ⇒ false
```

```javascript
defined(null);
// ⇒ true
```

```javascript
defined(0);
// ⇒ true
```

```javascript
defined({ a: 1 });
// ⇒ true
```
<!-- prettier-ignore-end -->

## Questions

- How to check if a given value is defined?
- How to check if a given value is not undefined?
