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
