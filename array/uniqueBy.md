# uniqueBy

This method is like unique except that it accepts selector which is invoked for each element in array to generate the criterion by which uniqueness is computed.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(selector: (x: any) => any) => (xs: any[]) => any[]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
uniqueBy(({ x }) => x)([{ x: 1 }, { x: 2 }, { x: 1 }]) // ⇒ [{ x: 1 }, { x: 2 }])
```
<!-- prettier-ignore-end -->
