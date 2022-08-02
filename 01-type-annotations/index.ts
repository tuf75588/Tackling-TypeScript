const nameVar: string = 'andrew';

/* 
JavaScript has 8 types 

1. undefined
2. null
3. Boolean
4. Number
5. String
6. BigInt
7. Symbol
8. Object
*/

/* 
TypeScript brings an additional layer of JavaScript: static types.  These only exist when compiling or type-checking source code. Each storage location (variable, property, etc..) has a static type that predicts it's dynamic values. Type checking ensures that these predictions comes true.
*/

/* 
And there is a lot that can be checked statically (without running the code). If, for example the parameter "num" of a function 
function toString(num) has the static type "number", then the function toString('abc') is illegal because the argument "abc" has the wrong static type.
*/

/* 
  Often, TypeScript can infer a static type if there is no type annotation.  For example, if we omit the return type of 'toString()', TypeScript infers that it is a string
*/

// inferred type (num: number) => string;
function toString(num: number) {
  return num.toString();
}
