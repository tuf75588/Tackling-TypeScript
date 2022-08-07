"use strict";
const toString1 = (num) => String(num);
const toString2 = (num) => String(num);
function stringify123(callback) {
    return callback(123);
}
stringify123(String);
function f1() {
    return undefined;
}
f1();
function f2() { }
f2();
function f3() {
}
f3();
function stringify1234(callback) {
    if (callback === undefined) {
        callback = String;
    }
    return callback(123);
}
stringify1234(undefined);
function createPoint(x = 0, y = 0) {
    return [x, y];
}
function createPoint1(x = 0, y = 0) {
    return [x, y];
}
function joinNumber(...nums) {
    return nums.join('-');
}
