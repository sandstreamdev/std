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
  button?: number | undefined;
  ctrlKey?: boolean | undefined;
  metaKey?: boolean | undefined;
  shiftKey?: boolean | undefined;
}) => boolean
```
<!-- prettier-ignore-end -->
