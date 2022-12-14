## Example: A generic class

Classes can have type parameters, too:

```ts
class SimpleStack<Elem> {
  #data: Array<Elem> = [];
  push(x: Elem): void {
    this.#data.push(x);
  }
  pop(): Elem {
    const result = this.#data.pop();
    if (result === undefined) {
      throw new Error();
    }
    return result;
  }
  get length() {
    return this.#data.length;
  }
}
```

class `SimpleStack` has a type parameter `Elem`. When we instantiate the class, we also provide a value for the type parameter:

```ts
const stringStack = new SimpleStack<string>();
stringStack.push("first");
stringStack.push("second");
console.log(stringStack.length); // 2
console.log(stringStack.pop()); // 'second'
```

Class `SimpleStack` has the type parameter `Elem`. When we instantiate the class, we also provide a value for the type parameter.

```ts
const stringStack = new SimpleStack<string>();
stringStack.push("first");
stringStack.push("second");
assert.equal(stringStack.length, 2);
assert.equal(stringStack.pop(), "second");
```

---

## Example: Maps

Maps are typed generically in TypeScript. For example:

```ts
const myMap: Map<boolean, string> = new Map([
  [false, "no"],
  [true, "yes"],
]);
```

Due to type inference, we can once again omit the type parameter:

```ts
// %inferred-type: Map<boolean, string>
const myMap = new Map([
  [true, "yes"],
  [false, "no"],
]);
```

---

## Type variables for functions and methods

Function definitions can introduce type variables like this:

```ts
function identity<Arg>(arg: Arg): Arg {
  return arg;
}
```

We use the function as follows.

```ts
// %inferred-type: number
const num1 = identity<number>(123);
```

Due to type inference, we can once again omit the type parameter:

```ts
// %inferred-type: 123
const num2 = identity(123);
```

Note that TypeScript inferred the type `123`, **which is a set with one number and more specific than the type `number`**

---

Arrow functions can also have type parameters:

```ts
const identity = <Arg>(arg: Arg): Arg => arg;
```

This is the type parameter syntax for methods:

```ts
const obj = {
  identity<Arg>(arg: Arg): Arg {
    return arg;
  },
};
```

---

## A more complicated function example

```ts
function fillArray<T>(len: number, elem: T): T[] {
  return new Array<T>(len).fill(elem);
}
```

The type variable `T` appears four times in this code:

- It is introduced via `fillArray<T>`. Therefore, its scope is the function.
- It is used for the first time in the type annotation for the parameter `elem`.
- It is used for the second time to specify the return type of `fillArray()`.
- It is also used as a type argument for the constructor `Array()`.

We can omit the type parameter when calling `fillArray()` because TypeScript can infer `T` from the parameter `elem`:

```ts
// %inferred-type string[]
const arr1 = fillArray<string>(3, "*");

// %inferred-type string[]
const arr2 = fillArray(3, "*");
```

---

## Understanding initial example

```ts
interface Array<T> {
  concat(...items: Array<T[] | T>): T[];
  reduce<U>(
    callback: (state: U, element: T, index: number, array: T[]) => U,
    firstState?: U
  ): U;
}
```

This is an interface for Arrays whose elements are of type `T`

<!-- (...items: Array<T[] | T>): T[] -->

- method `.concat()` has zero or more parameters (defined via a rest parameter). Each of those parameters has the type `T[]|T`. That is, it is either an Array of `T` values or a single `T` value.

- method `.reduce()` introduces its own type variable `U`. `U` is used to express the fact that the following entities all have the same type:
  - Parameter `state` of `callback()`
  - Result of `callback()`
  - Optional parameter `firstState` of `.reduce()`
  - Result of `.reduce()`

In addition to `state` `callback()` has the following parameters:

- `element`, which has the same type `T` as the Array elements
- `index`, a number
- `array` with elements of type `T`
