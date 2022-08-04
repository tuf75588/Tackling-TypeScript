# The two language levels: dynamic vs. static

TypeScript has two language levels:

- The *dynamic* level is managed by JavaScript and consists of code and values, at runtime.
- The *static level* is managed by TypeScript (excluding JavaScript) and consists of static types, at compile time.

We can see these two levels in the syntax:

```js
const undef: undefined = undefined;

```

- At the dynamic level, we use JavaScript to declare a variable `undef` and initialize it with the value `undefined`.

- At the static level, we use TypeScript to specify that variable `undef` has the static type `undefined`.

Note that the same syntax, undefined, means different things depending on whether it is used at the dynamic level or at the static level.