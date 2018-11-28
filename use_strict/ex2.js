// Assignment to a non-writable global
const withStrict = () => {
    'use strict';
    var obj1 = {};
    Object.defineProperty(obj1, 'x', { value: 42, writable: false });
    obj1.x = 9;
}


const withoutStrict = () => {
    var obj1 = {};
    Object.defineProperty(obj1, 'x', { value: 42, writable: false });
    obj1.x = 9;
}