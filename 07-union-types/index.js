"use strict";
function getScore(stringOrNumber) {
    if (typeof stringOrNumber === 'string' && /^\*{1,5}$/.test(stringOrNumber)) {
        return stringOrNumber.length;
    }
    else if (typeof stringOrNumber === 'number' &&
        stringOrNumber >= 1 &&
        stringOrNumber <= 5) {
        return stringOrNumber;
    }
    else {
        throw new Error('Illegal value: ' + JSON.stringify(stringOrNumber));
    }
}
