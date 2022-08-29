"use strict";
function pointToString(pt) {
    return `(${pt.x}, ${pt.y})`;
}
const objWithMethod = {
    simpleMethod: function (flag) { },
};
const objWithArrowFunction = {
    simpleMethod: (flag) => { },
};
