# valid

Checks if the given date is present and it is valid.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(date?: unknown) => boolean
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
valid(new Date("2020-01-31T09:52:31.618Z"));
// ⇒ true
```

```javascript
valid(new Date("2020-01-42:52:31.618Z"));
// ⇒ false
```

```javascript
valid(new Date("test"));
// ⇒ false
```

```javascript
valid(undefined);
// ⇒ false
```
<!-- prettier-ignore-end -->

## Questions

- How to check if a Date is valid or not?
