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


## By default, `undefined` and `null` are not included in types

In many programming languages, `null` is part of all object types. For example, whenever the type of a variable is `String` in Java, we can set it to `null` and Java won't complain.

Conversely, in TypeScript, `undefined` and `null` are handled by separate, disjoint types.  We need union types such as `undefined | string` and `null | string`, if we want to allow them:

```ts
let maybeNumber: null | number = null;
maybeNumber = 123;
```

Otherwise, we get an error:

```ts
// @ts-expect-error: Type 'null' is not assignable to type 'number'. (2322)
let maybeNumber: number = null;
maybeNumber = 123;
```

Note that TypeScript does not force us to initialize immediately (as long we don't read from the variable before initializing it):

```ts
let maybeNumber: number // OK
maybeNumber = 123;
```


## Making omissions explicit

Recall this function from earlier:

```ts
function stringify123(callback?: (num: number) => string) {
  if (callback === undefined) {
    callback = String;
  }
  return callback(123);
}
```

Let's rewrite `stringify123()` so that parameter `callback` isn't optional anymore: If a caller doesn't want to provide a function, they must explicitly pass `null`.  The result looks as follows.

```ts
function stringify123(
  callback: null | ((num: number) => string)) {
    const num = 123;
    if (callback === null) {
      callback = String
    }
    return callback(num);
}
```

Once again, we have to handle the case of `callback` not being a function before we can make the function call. If we hadn't done so, TypeScript would have reported an error in that line.

