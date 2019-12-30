# insert

Inserts item to the array by specific index.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(index: number, item: any) => ([...xs]: any[]) => any[]
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
insert(0, 4)([1, 2, 3]); // ⇒ [4, 1, 2, 3]
```

```javascript
insert(-1, 0)([1, 2, 3]); // ⇒ [0, 1, 2, 3]
```

```javascript
insert(3, 4)([1, 2, 3]); // ⇒ [1, 2, 3, 4]
```

```javascript
insert(4, 5)([]); // ⇒ [5]
```
<!-- prettier-ignore-end -->
