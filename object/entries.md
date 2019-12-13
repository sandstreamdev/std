# entries

## Type signature

<!-- prettier-ignore-start -->
```typescript
{
  <T>(
    o:
      | {
          [s: string]: T;
        }
      | ArrayLike<T>
  ): [string, T][];
  (o: {}): [string, any][];
}
```
<!-- prettier-ignore-end -->
