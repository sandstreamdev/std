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

## Examples

<!-- prettier-ignore-start -->
```javascript
const event = {
  preventDefault: () => console.log("preventDefault"),
  stopPropagation: () => console.log("stopPropagation")
};

cancel(event);
```
<!-- prettier-ignore-end -->

## Questions

- How to stop event propagation and prevent default at once?
