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
stringStack.push('first');
stringStack.push('second');
console.log(stringStack.length); // 2
console.log(stringStack.pop()); // 'second'
```
