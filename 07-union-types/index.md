# Union types

The values that are held by a variable (one value at a time) may be members of different types. In that case, we need a _union type_. For example, the following code, `stringOrNumber` is ether of type `string` or type `number`:

```ts
function getScore(stringOrNumber: string | number): number {
  if (typeof stringOrNumber === 'string' && /^\*{1,5}$/.test(stringOrNumber)) {
    return stringOrNumber.length;
  } else if (
    typeof stringOrNumber === 'number' &&
    stringOrNumber >= 1 &&
    stringOrNumber <= 5
  ) {
    return stringOrNumber;
  } else {
    throw new Error('Illegal value: ' + JSON.stringify(stringOrNumber));
  }
}
```

`stringOrNumber` has the type `string | number`.  The result of the type expression `s|t` is the set-theoretic union of types `s` and `t` (interpreted as sets).

