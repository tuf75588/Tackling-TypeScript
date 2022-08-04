# Typing Arrays

Arrays play two roles in JavaScript: 
  - List: All elements have the same type. The length of the Array varies.
  - Tuple: The length of the Array is fixed. The elements generally don't have the same type.


## Arrays as lists

There are two ways to express the fact that the Array `arr` is used as a list whose elements are all numbers:

```ts
let arr1: number[] = [];
let arr2: Array<number> = [];
```

Normally, TypeScript can infer the type of a variable if there is an assignment.  In this case, we actually have to help it, because with an empty Array, it can't determine the type of the elements.

### Arrays as tuples

If we store a two-dimensional point in an Array, then we are using that Array as a tuple. The looks as follows:

```ts
let point: [number, number] = [7,5];
```

The type annotation is needed for Arrays-as-tuples because, for Array literals, **TypeScript infers list types, not tuple types**

```ts
// inferred-type: number[]
let point = [7,5];
```


Another example for tuples is the result of `Object.entries(obj)`: an Array with one `[key,value]` pair for each property of `obj`.

```ts
// inferred type -> [string, number][];
const entries = Object.entries({a: 1, b: 2});
// -> [['a', 1], ['b', 2]];
```
The inferred type is an Array of tuples
