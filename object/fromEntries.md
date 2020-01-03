# fromEntries

Creates an object from array of key value pairs (entries).

## Type signature

<!-- prettier-ignore-start -->
```typescript
{
  <T = any>(entries: Iterable<readonly [string | number | symbol, T]>): {
    [x: string]: T;
    [x: number]: T;
  };
  (entries: Iterable<readonly any[]>): any;
}
```
<!-- prettier-ignore-end -->
