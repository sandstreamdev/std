# validName

Checks if the given string is a valid Windows file name.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(name: string) => boolean
```
<!-- prettier-ignore-end -->

## Examples

<!-- prettier-ignore-start -->
```javascript
validName("my:file.png");
// ⇒ false
```

```javascript
validName("file.txt");
// ⇒ true
```

```javascript
validName("../file.txt");
// ⇒ false
```

```javascript
validName("COM1");
// ⇒ false
```
<!-- prettier-ignore-end -->

## Questions

- How to find valid Windows file name?
- How to check if a given string is a legal/valid file name under Windows?
