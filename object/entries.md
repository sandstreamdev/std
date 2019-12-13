# entries

## Type signature

```typescript
<!-- prettier-ignore-start -->
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
<!-- prettier-ignore-end -->
```
