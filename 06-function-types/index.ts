const toString1 = (num: number) => String(num);

// with type annotation
const toString2: (num: number) => string = (num: number) => String(num);

function stringify123(callback: (num: number) => string) {
  return callback(123);
}

stringify123(String);

//using void

function f1(): void {
  return undefined;
}

f1(); // ok

function f2(): void {}

f2(); // ok

function f3(): void {
  // return 'abc'; // not ok return type void can never return anything other than undefined.
}

f3();

// optional parameters

function stringify1234(callback?: (num: number) => string) {
  if (callback === undefined) {
    callback = String;
  }
  return callback(123);
}

stringify1234(undefined);

// default values w/ type annotations

function createPoint(x: number = 0, y: number = 0): [number, number] {
  return [x, y];
}

// default values w/o type annotations

function createPoint1(x = 0, y = 0) {
  return [x, y];
}

// rest parameters

function joinNumber(...nums: number[]): string {
  return nums.join('-')
}

