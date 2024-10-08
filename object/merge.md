# merge

Merges two objects deeply.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(a: GenericObject, b: GenericObject) => GenericObject;
export default merge
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
merge({ a: 1, b: 3 }, {});
// ⇒ { a: 1, b: 3 }
```

```javascript
merge({ a: 1, b: 3 }, { b: 7 });
// ⇒ { a: 1, b: 7 }
```

```javascript
merge({ a: 1, b: 3 }, { b: { d: 8 } });
// ⇒ { a: 1, b: { d: 8 } }
```

```javascript
merge({ a: 1, b: { c: 3 } }, { b: { d: 8 } });
// ⇒ { a: 1, b: { c: 3, d: 8 } }
```
<!-- prettier-ignore-end -->

## Questions

- How to merge two objects together?
- How to deeply merge two objects?
