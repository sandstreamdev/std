# sequence

Runs the given tasks in a sequence.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(tasks: Task<T>[]) => Promise<Awaited<T>[]>
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
const f = () => new Promise(resolve => setTimeout(resolve, 1000));
const g = () => new Promise(resolve => setTimeout(resolve, 2000));

sequence([f, g]).then(() => console.log("Done"));
```
<!-- prettier-ignore-end -->

## Questions

- How to run async tasks sequentially?
