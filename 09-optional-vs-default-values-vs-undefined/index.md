# Optional vs. default value vs. undefined|T 

The following three parameter declarations are quite similar:

- Parameter is optional: `x?: number`
- Parameter has a default value: `x = 456;`
- Parameter has a union type: `x: undefined | number`


If the parameter is optional, it can be omitted.  In that case, it has the value `undefined`:

```ts
function x1(x?: number) {
  return x;
}
```

```ts
f1(123) // OK
f1(undefined) // OK
f1() // undefined -- can omit 
```

If the parameter has a default value, that value is used when the parameter is either omitted or set to `undefined`:

```ts
function f2(x = 456) {return x}

f2(123) // 123 
f2(undefined) // 456
f2() // 456

```

```ts
function f3(x: undefined | number) { return x}

f3(123) // 123 
f2(undefined) // undefined -- OK

// @ts-expect-error: Expected 1 arguments, but got 0. (2554)
f3(); // can’t omit

```

