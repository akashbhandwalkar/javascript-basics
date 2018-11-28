
// Assignment to a non-writable global
const withStrict = () => {
    'use strict';
    var undefined = 5; // throws a TypeError
    var Infinity = 5; // throws a TypeError
}


const withoutStrict = () => {
    var undefined = 5;
    var Infinity = 5;
}