Recall the two language levels of TypeScript 

- Values exist at the *dynamic* level
- Types exist at the *static* level

Similarly: 

- Normal functions exist at the dynamic level, are factories for values and have parameters representing values.
Parameters are declared between parentheses:

```ts
const valueVactory = (x: number) => x;
const mayValue = valueFactory(123); //123 -- use
```

*Generic Types* exist at the static level, are factories for types and have parameters representing types. Parameters are declared between angle brackets:

```ts
type TypeFactory<X> = X;
type MyType = TypeFactory<string>;
```

In TypeScript, it is common to use a single uppercase character (such as T, I, and O) for a type parameter.  However, any legal JavaScript identifier is allowed and longer names often make code easier to understand. 

Example: a container for values

<!-- factory for types -->

```ts
interface ValueContainer<Value> {
  value: Value;
}
```

Value is a *type variable*.  One or more type variables can be introduced between angle brackets.

---

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

class `SimpleStack` has a type parameter `Elem`.  When we instantiate the class, we also provide a value for the type parameter:

```ts
const stringStack = new SimpleStack<string>();
```