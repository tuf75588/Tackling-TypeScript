# What is a type in TypeScript? Two perspectives

What are types in TypeScript? This chapter describes two perspectives that help with understanding them.

---

## Two questions for each perspective

The following two questions are important for understanding how types work and need to be answered from each of the two perspectives.

1. What does it mean for `myVariable` to have the type `MyType`?

```ts
let myVariable: MyType;
```

2. How is a union type derived from `Type1`, `Type2`, and `Type3`?

```ts
type UnionType = Type1 | Type2 | Type3;
```

--- 

## Perspective 1: types are a set of values

From this perspective, a type is a set of values:

1. if `myVariable` has the type `MyType`, then all values that can be assigned to `myVariable` must be elements of the set `MyType`. 

2. The union type of the types `Type1`, `Type2`, and `Type3` is the set-theorhetic union of the sets that define them.

---

## Perspective 2: type compatibility relationships 

From this perspective, we are not concerned with values and how they flow when code is executed. Instead, we take a more static view. 

- The source code has locations and each location has a static type.  In a TypeScript aware editor, we can see the static type of a location if we hover above it with the cursor. 