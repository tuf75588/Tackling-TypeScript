# Typing Objects

Similarly to Arrays, objects play two roles in JavaScript (that are occasionally mixed)

- Records: A fixed number of properties that are known at development time. Each property can have a different type.

- Dictionaries: An arbitrary number of properties whose names are not known at development time. All properties have the same type.

---

## Typing objects-as-records via interfaces

interfaces describe objects-as-records. For example:

```ts
interface Point {
  x: number;
  y: number;
}
```

We can also separate members via commas:

```ts
interface Point {
  x: number;
  y: number;
}
```

---

## TypeScript's structural typing vs. nominal typing

One big advantage of TypeScript's type system is that it works _structurally_, not _nominally_. That is, interface `Point` matches all objects that have the appropriate structure:

```ts
interface Point {
  x: number;
  y: number;
}

function pointToString(pt: Point) {
  return `(${pt.x}, ${pt.y})`;
}

pointToString({ x: 5, y: 3 }); // compatible structure
```

Conversely, in Java's nominal type system, we must explicitly declare with each class which interface it implements. Therefore, a class can only implement interfaces that exist at its creation time.

---

## Object literal types

_Object literal types_ are anonymous interfaces:

```ts
type Point = {
  x: number;
  y: number;
};
```

One benefit of object literal types is they can be used inline:

```ts
function pointToString(pt: { x: number; y: number }) {
  return `(${pt.x}, ${(pt, y)})`;
}
```

---

## Optional properties

If a property can be omitted, we put a question mark after its name:

```ts
interface Person {
  name: string;
  company?: string;
}
```

In the following example, both `john` and `jane` match the interface `Person`

```ts
const john: Person = {
  name: 'John',
};

const jane: Person = {
  name: 'Jane',
  company: 'Massive Dynamic',
};
```

---

## Methods

Interfaces can also contain methods:

```typescript
interface Point = {
  x: number;
  y: number;
  distance(other: Point) => number;
}
```

As far as TypeScript's type system is concerned, method definitions and properties whose values are functions, are equivalent:

```ts
interface HasMethodDef {
  simpleMethod(flag: boolean): void;
}

interface HasFuncProps {
  simpleMethod: (flag: boolean) => void;
}

const objWithMethod: HasMethodDef = {
  simpleMethod: function (flag: boolean): void {},
};

const objWithArrowFunction: HasMethodDef = {
  simpleMethod: (flag: boolean): void => {},
};

const objWithArrowFunction2: HasFuncProps = objWithArrowFunction;
```
