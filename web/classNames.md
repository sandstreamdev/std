# classNames

Composes class name from truthy values with the support of string and objects.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(...xs: unknown[]) => string
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
classNames("test", { active: true, disabled: false, on: undefined });
// ⇒ "test active"
```
<!-- prettier-ignore-end -->

## Questions

- How to create a class name from an array of strings and/or objects?
