# stop

Stops propagation of the given event.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(event: { stopPropagation: () => void }) => boolean
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
const event = {
  preventDefault: () => console.log("preventDefault"),
  stopPropagation: () => console.log("stopPropagation")
};

stop(event);
```
<!-- prettier-ignore-end -->

## Questions

- How to stop the propagation of an event?
