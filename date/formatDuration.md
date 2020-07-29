# formatDuration

Formats a duration in milliseconds to a padded time string.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(duration: number, showSeconds?: boolean) => string
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
formatDuration(26100000);
// ⇒ 07:15
```

```javascript
formatDuration(26136000, true);
// ⇒ 07:15:36
```
<!-- prettier-ignore-end -->

## Questions

- How to render a formatted duration?
