# every

Test if every element passes the given predicate.

## Type signature

<!-- prettier-ignore-start -->
```typescript
<T>(f: (value: T, key: string, context: object) => boolean) => (xs: GenericObject<T>) => boolean
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
every(x => x >= 0)({ x: 5, y: 3, z: 0 });
// ⇒ true
```

```javascript
every(x => x > 0)({ x: 5, y: 3, z: 0 });
// ⇒ false
```
<!-- prettier-ignore-end -->

## Questions

- How to check if every entry in an object passes a given predicate?
