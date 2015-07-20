/**
 * Created by vanya on 6/2/2015.
 */
function findResult(array) {
    var i,
        len,
        result = false;

    array = array || [];

    console.log('Array: ' + array);

    for (i = 1, len = array.length - 1; i < len; i += 1) {
        if (array[i] > array[i - 1] && array[i] > array[i + 1]) {
            return console.log('The element on position ' + i + ' is the first element bigger than its neighbours --> ' + true);
        }
    }

    if (!result) {
        return console.log(-1);
    }
}

findResult([5, 10, 13, 8, 100, 6]);
console.log('-------------------------');
findResult([1, 2, 3, 4, 5]);
console.log('-------------------------');
findResult([5, 100, 3, 6]);
