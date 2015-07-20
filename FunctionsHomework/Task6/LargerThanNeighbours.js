/**
 * Created by vanya on 6/2/2015.
 */

function findResult(array, position) {
    array = array || [];

    console.log('Array: ' + array);
    console.log('Position: ' + position);

    if (position === 0 || position === array.length - 1) {
        return console.log('The element on position ' + position + " doesn't have two neighbours");
    }
    else {
        if (array[position] > array[position - 1] && array[position] > array[position + 1]) {
            return console.log('The element on position ' + position + ' is bigger than its neighbours --> ' + true);
        }
        else {
            return console.log('The element on position ' + position + ' is not bigger than its neighbours --> ' + true);
        }
    }
}

findResult([5, 10, 13, 8, 100, 6], 4);
console.log('-------------------------');
findResult([5, 10, 13, 8, 100, 6], 0);
console.log('-------------------------');
findResult([5, 10, 13, 8, 100, 6], 5);
