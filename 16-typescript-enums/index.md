# enum basics

`boolean` is a type with a finite amount of values: `true` and `false`.  With enums, TypeScript lets use define similar types ourselves.

## Numeric enums

This is a numeric enum:

```ts
enum NoYes  {
  No = 0,
  Yes = 1,
}
```

Explanations:

- The entires `No` and `Yes` are called *members* of the enum `NoYes`
- Each enum member has a *name* and a *value*.  For example, the first member has the name `No` and the value `0`
- The part of a member definition that starts with an equals sign and specifies a value is called an *initializer*.
- As in object literals, trailing commas are allowed and ignored.

We can use members as if they were literals such as `true`, `123`, and `abc` for example --

```ts
  function toGerman(value: NoYes) {
    switch(value) {
      case NoYes.No: 
        return 'Nein';
      case NoYes.Yes: 
        return 'Ja'
    }
  }
```

## String based enums

Instead of numbers, we can also use strings as enum member values:

```ts
enum NoYes {
  No = 'No',
  Yes = 'Yes',
}
```

## Heterogenous enums

The last kind of enums is called *heterogenous*. The member values of a heterogenous enum are a mix of numbers and strings:

```ts
enum Enum {
  One = 'One',
  Two = 'Two',
  Three = 3,
  Four = 4,
}
```

Heterogenous enums are not used often because they have few applications.

Alas, TypeScript only supports numbers and strings as enum member values. Other values, such as symbols, are not allowed.