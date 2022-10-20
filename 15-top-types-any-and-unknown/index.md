# The top types `any` and `unknown`

In TypeScript, `any` and `unknown` are types that contain all values. In this chapter, we examine what they are and what they can be used for.

---

## TypeScript's top two types

`any` and `unknown` are so-called _top-types_ in TypeScript.

> The top type […] is the universal type, sometimes called the universal supertype as all other types in any given type system are subtypes […]. In most cases it is the type which contains every possible [value] in the type system of interest.

That is, when viewing types as sets of values, `any` and `unknown` are sets that contain all values. As an aside, TypeScript also has the _bottom type_ `never`, which is an empty set.

---

## The top type `any`

If a value has type `any`, we can do everything with it:

```ts
function func(value: any) {
  5 * value;

  value.propName;

  value[123];
}
```

Every type is assignable to type `any`:

```ts
let storageLocation: any;

storageLocation = null;
storageLocation = true;
storageLocation = {};
```

Type `any` is assignable to every type:

```ts
function func(value: any) {
  const a: null = value;
  const b: boolean = value;
  const c: object = value;
}
```

With `any` we lose any protection that is normally given to use by TypeScript's static type system. Therefore, it should only be used as a last resort, if we can't use more specific types or `unknown`.

---

## Example: `JSON.parse()`

The result of `JSON.parse()` depends on the dynamic input, which is why the return type is `any`

```ts
JSON.parse(text: string): any;
```

`JSON.parse()` was added to TypeScript before the type `unknown` existed. Otherwise, its return type would probably be `unknown`.

---

## Example String()

The function `String()`, which converts arbitrary values to strings, has the following type signature:

```ts
interface StringConstructor {
  (value?: any): string;
}
```

---

## The top type `unknown`

The type `unknown` is a type-safe version of the type `any`. Whenever you are thinking of using `any`, try using `unknown` first.

Where `any` allows us to do anything, `unknown` is much more restrictive.

Before we can perform any operation on values of type `unknown`, we must first narrow their types via:

- Type Assertions

  ```ts
  function func(value: unknown) {
    // @ts-expect-error: Object is of type 'unknown'.
    value
      .toFixed(2)
      (
        // type assertion
        value as number
      )
      .toFixed(2); // OK
  }
  ```

- Equality

  ```ts
  function func(value: unknown) {
    // @ts-expect-error Object is of type 'unknown'
    value * 5;

    if (value === 123) {
      // %inferred-type: 123
      value;

      value * 5; // OK
    }
  }
  ```

- Type Guards

  ```ts
  function func(value: unknown) {
    // @ts-expect-error: Object is of type 'unknown'
    value.length;

    //type guard
    if (typeof value === 'string') {
      value;

      value.length; // OK
    }
  }
  ```

- Assertion Functions

  ```ts
  function func(value: unknown) {
    // @ts-expect-error: Object is of type 'unknown'
    value.test('abc');

    assertIsRegExp(value);

    // %inferred-type: RegExp
    value;

    value.test('abc'); // OK
  }
  ```

AN ASSERTION FUNCTION:

```ts
function assertIsRegExp(arg: unknown): asserts arg is RegExp {
  if (! (arg instanceof RegExp)) {
      throw new TypeError('Not a RegExp: ' + arg);
  }
}
```
