# translate

Creates a translation matrix.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(tx?: number, ty?: number) => {
    a: number;
    c: number;
    e: number;
    b: number;
    d: number;
    f: number;
}
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
translate(2, 3);
// ⇒ { a: 1, b: 0, c: 0, d: 1, e: 2, f: 3 }
```
<!-- prettier-ignore-end -->

## Questions

- How to create a translation matrix?
