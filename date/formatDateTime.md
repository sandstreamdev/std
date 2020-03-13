# formatDateTime

Formats a given date as a simple YYYY-MM-DD HH:MM(:SS) string.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(sourceDate: Date, showSeconds?: boolean) => string
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
formatDateTime(new Date("2019-02-24T01:12:34"));
// ⇒ "2019-02-24 01:12"
```

```javascript
formatDateTime(new Date("2019-02-24T01:12:34"), true);
// ⇒ "2019-02-24 01:12:34"
```
<!-- prettier-ignore-end -->

## Questions

- How to render a date in a YYYY-MM-DD HH:MM format?
- How to render a date in a YYYY-MM-DD HH:MM:SS format?
