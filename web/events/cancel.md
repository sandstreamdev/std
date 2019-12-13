# cancel

Stops propagation and prevents the default handler of the given event.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(event: {
  preventDefault: () => void;
  stopPropagation: () => void;
}) => boolean
```
<!-- prettier-ignore-end -->
