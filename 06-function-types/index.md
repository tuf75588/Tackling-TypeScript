# Function Types

This is an example of a function type:

```ts
(num: number) => string;
```

This type comprises every function that accepts a single parameter of type number and returns a string. A use in a type annotation would look like:

```ts
const toString: (num: number) => string = (num: number) => String(num);
```

Normally, we must specify parameter types for functions. But in this case, the type of `num` can be inferred from the function type and we can omit it.

```ts
// inferred type -> (num:number) => string
const toString = (num: number) => String(num);
```

## A more complicated example

The following example is more complicated:

```ts
function stringify123(callback: (num: number) => string) {
  return callback(123);
}
```

We are using a function type to describe the parameter `callback` of `stringify123()`. Due to this type annotation, TypeScript rejects the following call.

```ts
stringify(Number);
```

```ts
// @ts-expect-error: Argument of type 'NumberConstructor' is not
// assignable to parameter of type '(num: number) => string'.
//   Type 'number' is not assignable to type 'string'.(2345)
```

But it accepts this function call:

```ts
stringify123(String); // '123'
```

### Return types of function declarations

TypeScript can usually infer the return types of functions, but specifying them explicitly is allowed and occasionally useful.

For `stringify123()`, specifying a return type is optional and looks like this:

```ts
function stringify123(callback: (num: number) => string): string {
  return callback(123);
}
```

---

#### The special return type `void`

`void` is a special return type for a function: It tells TypeScript that the function always returns `undefined`.

It may do so explicitly:

```ts
function f1(): void {
  return undefined;
}
```

Or it may do so implicitly

```ts
function f2(): void {}
```

However, such a function **cannot** explicitly return values other than `undefined`:

```ts
function f3(): void {
  // @ts-expect-error: Type '"abc"' is not assignable to type 'void'. (2322)
  return 'abc';
}
```

---

### Optional parameters

A question mark after an identifier means that the parameter is optional. For example:

```ts
function stringify123(callback?: (num: number) => string) {
  if (callback === undefined) {
    callback = String;
  }
  return callback(123);
}
```

TypeScript only lets us make the function call on line 101 if we make sure that `callback` isn't `undefined` (which it is if the parameter is omitted).

#### Parameter default values

TypeScript supports parameter default values:

```ts
function createPoint(x = 0, y = 0): [number, number] {
  return [x, y];
}
```

Default values make parameters optional. We can usually omit type annotations, because TypeScript can infer types. For example, it can infer that `x` and `y` both have the type `number`.

If we wanted to add type annotations, that would look as follows.

```ts
function createPoint(x: number = 0, y: number = 0): [number, number] {
  return [x, y];
}
```

---

### Rest parameters

We can also use rest parameters in TypeScript parameter definitions.  Their static types must be Arrays (lists or tuples):

```ts
function joinNumbers(...nums: number[]): string {
  return nums.join('-');
}

joinNumbers(1,2,3);
// 1-2-3
```

