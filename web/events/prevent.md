# prevent

Prevents the default handler of the given event.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(event: { preventDefault: () => void }) => boolean
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
const event = {
  preventDefault: () => console.log("preventDefault"),
  stopPropagation: () => console.log("stopPropagation")
};

prevent(event);
```
<!-- prettier-ignore-end -->

## Questions

- How to prevent default event handler?
