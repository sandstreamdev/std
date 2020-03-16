# formatTime

Formats a given date as a simple HH:MM(:SS) string.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(date: Date, showSeconds?: boolean) => string
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
formatTime(new Date("2019-02-24T01:12:34"));
// ⇒ "01:12"
```

```javascript
formatTime(new Date("2019-02-24T01:12:34"), true);
// ⇒ "01:12:34"
```
<!-- prettier-ignore-end -->

## Questions

- How to render a date in a HH:MM format?
- How to render a date in a HH:MM:SS format?
