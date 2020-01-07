# classNames

Composes class name from truthy values with support of string and objects.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(...xs: any[]) => any
```
<!-- prettier-ignore-end -->

# events

## cancel

Stops propagation and prevents the default handler of the given event.

### Type signature

<!-- prettier-ignore-start -->
```typescript
(event: {
  preventDefault: () => void;
  stopPropagation: () => void;
}) => boolean
```
<!-- prettier-ignore-end -->

## openInNewTabIntent

Tests if the current event seems like an intent to open a new tab. Useful for client-side navigation handling.

### Type signature

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

## prevent

Prevents the default handler of the given event.

### Type signature

<!-- prettier-ignore-start -->
```typescript
(event: { preventDefault: () => void }) => boolean
```
<!-- prettier-ignore-end -->

## stop

Stops propagation of the given event.

### Type signature

<!-- prettier-ignore-start -->
```typescript
(event: { stopPropagation: () => void }) => boolean
```
<!-- prettier-ignore-end -->
