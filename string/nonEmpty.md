# nonEmpty

Checks if the given string is present and is not empty or all whitespace.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(x?: string) => boolean
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
nonEmpty("test with spaces");
// ⇒ true
```

```javascript
nonEmpty("   ");
// ⇒ false
```

```javascript
nonEmpty(null);
// ⇒ false
```
<!-- prettier-ignore-end -->

## Questions

- How to check if a string is non-empty?
- How to check if a string is not all whitespace?
- How to check if a string is not null or undefined?
