# classNames

Composes class name from truthy values with the support of string and objects.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(...xs: any[]) => any
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
classNames("test", { active: true, disabled: false, on: undefined });
// ⇒ "test active"
```
<!-- prettier-ignore-end -->

## Questions

- How to create a class name from an array of strings and/or objects?

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

### Examples

<!-- prettier-ignore-start -->
```javascript
const event = {
  preventDefault: () => console.log("preventDefault"),
  stopPropagation: () => console.log("stopPropagation")
};

cancel(event);
```
<!-- prettier-ignore-end -->

### Questions

- How to stop event propagation and prevent default at once?

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

### Examples

<!-- prettier-ignore-start -->
```javascript
openInNewTabIntent({ ctrlKey: true });
// ⇒ true
```
<!-- prettier-ignore-end -->

### Questions

- How to check if the user wants to open a new tab using history API?

## prevent

Prevents the default handler of the given event.

### Type signature

<!-- prettier-ignore-start -->
```typescript
(event: { preventDefault: () => void }) => boolean
```
<!-- prettier-ignore-end -->

### Examples

<!-- prettier-ignore-start -->
```javascript
const event = {
  preventDefault: () => console.log("preventDefault"),
  stopPropagation: () => console.log("stopPropagation")
};

prevent(event);
```
<!-- prettier-ignore-end -->

### Questions

- How to prevent default event handler?

## stop

Stops propagation of the given event.

### Type signature

<!-- prettier-ignore-start -->
```typescript
(event: { stopPropagation: () => void }) => boolean
```
<!-- prettier-ignore-end -->

### Examples

<!-- prettier-ignore-start -->
```javascript
const event = {
  preventDefault: () => console.log("preventDefault"),
  stopPropagation: () => console.log("stopPropagation")
};

stop(event);
```
<!-- prettier-ignore-end -->

### Questions

- How to stop the propagation of an event?
