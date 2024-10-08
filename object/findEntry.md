# findEntry

Searches the given object by the given predicate and returns the found entry or undefined.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(predicate: (value: T, key: string, context: GenericObject<T>) => boolean) => (xs: GenericObject<T>) => [string, T] | undefined
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
findEntry(({ x }) => x % 2 === 0)({ a: { x: 1 }, b: { x: 2 }, c: { x: 3 } });
// ⇒ ["b", { x: 2 }]
```
<!-- prettier-ignore-end -->

## Questions

- How to find an entry of an object by a predicate function?
