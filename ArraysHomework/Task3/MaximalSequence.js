/**
 * Created by vanya on 5/29/2015.
 */

var arr = [],
    result = [],
    temp = [],
    len,
    i;
// the first cell of temp and result arrays will contain the element value, and the second one will contain the number of occurrences of this value
function findMaxSequence(arr) {
    temp = [arr[0], 1];
    result = [arr[0], 1];
    for (i = 1, len = arr.length; i < len; i += 1) {
        if (arr[i] === temp[0]){
            temp[1] += 1;

            if (temp[1] > result[1]) {
                result = temp;
            }
        } else {
            temp = [arr[i], 1];
        }
    }

    console.log('The maximal sequence of equal elements is: ');

    for (i = 0; i < result[1]; i += 1) {
        console.log(result[0]);
    }
}

findMaxSequence([5, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
findMaxSequence([5, 5, 5, 5, 10, 12, 3, 5, 5]);
findMaxSequence([1.5, 1.5, 10, 10, 10, 10, 7, 7, 7, 7, 7]);
