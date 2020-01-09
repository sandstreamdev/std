# clone

Clones the given Date object.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(date: Date) => Date
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
const date = new new Date('2019-04-24T13:54:33.232Z');
const cloned = clone(date);

cloned !== date && cloned.valueOf() === date.valueOf(); // ⇒ true
```
<!-- prettier-ignore-end -->
