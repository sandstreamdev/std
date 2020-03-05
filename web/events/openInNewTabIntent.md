# openInNewTabIntent

Tests if the current event seems like an intent to open a new tab. Useful for client-side navigation handling.

## Type signature

<!-- prettier-ignore-start -->
```typescript
({
  button,
  ctrlKey,
  metaKey,
  shiftKey
}: {
  button?: number;
  ctrlKey?: boolean;
  metaKey?: boolean;
  shiftKey?: boolean;
}) => boolean
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
openInNewTabIntent({ ctrlKey: true });
// ⇒ true
```
<!-- prettier-ignore-end -->

## Questions

- How to check if user wants to open a new tab using history API?
