/**
 * Created by vanya on 5/29/2015.
 */

/**
 * Created by vanya on 5/29/2015.
 */

var arr = [],
    result = [],
    temp = [],
    len,
    i;
// the first cells of temp and result arrays contains the cell value and the second one contains the number of occurrences of this value

function findMaxSequence(arr) {
    temp = [arr[0], 1];
    result = [arr[0], 1];
    for (i = 1, len = arr.length; i < len; i += 1) {
        if (arr[i] === arr[i - 1] + 1){
            temp[1] += 1;

            if (temp[1] > result[1]) {
                result = temp;
            }
        } else {
            temp = [arr[i], 1];
        }
    }

    console.log('The maximal increasing sequence of equal elements is: ', result);

    for (i = 0; i < result[1]; i += 1) {
        console.log(result[0] + i);
    }
}

findMaxSequence([3, 1, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
findMaxSequence([7, 5, 6, 7, 8, 9, 10, 12, 3, 5, 5]);
findMaxSequence([9, 10, 11, 10, 10, 7, 7, 7, 7, 7]);
findMaxSequence([10, 1, 2, 3, 4, 5]);
