﻿//Problem 1. Exchange if greater
//Write an if statement that takes two double variables a and b and exchanges their values if the first one is greater than the second.
//As a result print the values a and b, separated by a space.

function compare(a, b) {
    if (a > b) {
        var c = a;
        a = b;
        b = c;       
    }
    return a + ' ' + b;
}

console.log('a = 5, b = 2 --> ', compare (5, 2));
console.log('a = 3, b = 4 --> ', compare(3, 4));
console.log('a = 5.5, b = 4.5 --> ', compare(5.5, 4.5));