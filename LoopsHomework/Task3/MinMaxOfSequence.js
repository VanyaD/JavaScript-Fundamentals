/**
 * Created by vanya on 5/27/2015.
 */

var arr = [],
    i,
    min,
    max;

function findMinAndMax (arr) {

    function compareNumbers(a, b) {
        return a - b;
    }

    arr.sort(compareNumbers);

    min = arr[0];
    max = arr[arr.length - 1];

    console.log('min = ', min);
    console.log('max = ', max);
}

console.log('>> example 1:');
findMinAndMax([2, 12, 100, 18, 1000, 122]);
console.log('>> example 2:');
findMinAndMax([-3, -100, 5.5, 17, 200]);
console.log('>> example 3:');
findMinAndMax([-3.99, 17.8, 5.5, 17, -1000]);
