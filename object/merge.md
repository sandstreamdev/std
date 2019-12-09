# any

Merges two or more objects

## Type signature

```
(object1: any, object2: any, ..., objectN?: any) => any
```

## Examples

```javascript
merge({ a: 1, b: { a: "Hello World!" } }, { b: { b: 3 } }); // ⇒ { a: 1, b: { a: "Hello World", b: 3 } }
```

```javascript
any({ a: 1, d: { b: [2] } }, { b: 2 }, { c: 3, d: { a: [1] } }); // ⇒ { a: 1, b: 2, c: 3, d: {a: b} }
```
