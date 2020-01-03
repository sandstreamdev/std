# assert

Asserts given conditions.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  condition: boolean,
  callbackOrMessage: string | (() => void)
) => void
```
<!-- prettier-ignore-end -->

# diff

Computes a difference between two objects.

## Type signature

<!-- prettier-ignore-start -->
```typescript
(
  obj1?:
    | {
        [index: string]: any;
      }
    | undefined,
  obj2?:
    | {
        [index: string]: any;
      }
    | undefined
) => object
```
<!-- prettier-ignore-end -->
