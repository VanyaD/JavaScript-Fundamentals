/**
 * Created by vanya on 5/27/2015.
 */
//Problem 1. Numbers
//Write a script that prints all the numbers from 1 to N.

var n,
    i;

function printNumbers(n) {
    console.log('N = ' + n);

    for (i = 1; i <= n; i += 1) {
        console.log(i);
    }
}

printNumbers(5);
printNumbers(10);
printNumbers(25);
