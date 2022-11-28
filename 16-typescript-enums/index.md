# enum basics

`boolean` is a type with a finite amount of values: `true` and `false`. With enums, TypeScript lets use define similar types ourselves.

## Numeric enums

This is a numeric enum:

```ts
enum NoYes {
  No = 0,
  Yes = 1,
}
```

Explanations:

- The entires `No` and `Yes` are called _members_ of the enum `NoYes`
- Each enum member has a _name_ and a _value_. For example, the first member has the name `No` and the value `0`
- The part of a member definition that starts with an equals sign and specifies a value is called an _initializer_.
- As in object literals, trailing commas are allowed and ignored.

We can use members as if they were literals such as `true`, `123`, and `abc` for example --

```ts
function toGerman(value: NoYes) {
  switch (value) {
    case NoYes.No:
      return "Nein";
    case NoYes.Yes:
      return "Ja";
  }
}
```

## String based enums

Instead of numbers, we can also use strings as enum member values:

```ts
enum NoYes {
  No = "No",
  Yes = "Yes",
}
```

## Heterogenous enums

The last kind of enums is called _heterogenous_. The member values of a heterogenous enum are a mix of numbers and strings:

```ts
enum Enum {
  One = "One",
  Two = "Two",
  Three = 3,
  Four = 4,
}
```

Heterogenous enums are not used often because they have few applications.

Alas, TypeScript only supports numbers and strings as enum member values. Other values, such as symbols, are not allowed.

## Omitting initializers

We can omit initializers in two cases:

- We can omit the initializer of the first member. Then that member has a value 0 (zero)
- We can omit the initializer of a member if the previous member has a number value. Then the current member has that value plus one.

This is a number enum without any initializer:

```ts
enum NoYes {
  No,
  Yes,
}
assert.equal(NoYes.No, 0);
assert.equal(NoYes.Yes, 1);
```

This is a heterogeneous enum where some initializers are omitted:

```ts
enum Enum {
  A,
  B,
  C = 'C',
  D = 'D',
  E = 8,
  F, // 9
}
console.log('Enum: ' + enum) // [0, 1, 'C','D', 8, 9]
```

Note that we can't omit the initializer in line A because the value of the preceding member is not a number.

## Casing of enum member names

There are several precedents for naming constants (in enums or elsewhere):

- Traditionally, JavaScript has used all-caps names, which is a convention it inherited from Java and C:
  - `Number.MAX_VALUE`
  - `Math.SQRT2`
- Well-known symbols are camel-cased and start with lowercase letters because they are related to property names:
  - `Symbol.asyncIterator`
- The TypeScript manual uses camel-cased names that start with uppercase letters. This is the standard TypeScript style and we used it for for `NoYes` enum.

## Quoting enum member names

Similar to JavaScript objects, we can quote the member names of enum members:

```ts
enum HttpRequestField {
  "Accept",
  "Accept-Charset",
  "Accept-Datetime",
  "Accept-Encoding",
  "Accept-Language",
}

console.log((HttpRequestField['Accept-Charset']) // 1
```
