# normal

Checks if the given value is a number in a normal range [0, 1].

## Type signature

<!-- prettier-ignore-start -->
```typescript
(x?: number) => boolean
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
normal(0.75);
// ⇒ true
```

```javascript
normal(-1);
// ⇒ false
```

```javascript
normal(2.5);
// ⇒ false
```
<!-- prettier-ignore-end -->

## Questions

- How to check if a given value is in 0 to 1 inclusive range?
