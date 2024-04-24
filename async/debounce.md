# debounce

Makes the function run after the given period of not being called. Useful to delay input submission for auto-complete etc.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(f: F, wait: number) => (...args: unknown[]) => void
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
const f = () => console.log("Test");

const debounced = debounce(f, 2000);

debounced();
setTimeout(debounced, 1000);
setTimeout(debounced, 3000);
```
<!-- prettier-ignore-end -->

## Questions

- How to make function fire after some time not being called?
- How to debounce input events?
- How to debounce a function?
