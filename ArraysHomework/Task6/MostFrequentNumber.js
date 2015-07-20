/**
 * Created by vanya on 5/29/2015.
 */

var result = [],
    temp = [],
    len,
    i,
    j;

function findResult(arr) {
    temp = [arr[0], 1];
    result = [arr[0], 1];

    for (j = 0, len = arr.length; j < len - 1; j += 1) {
        for (i = 1, len = arr.length; i < len; i += 1) {
            if (temp[0] === arr[i]) {
                temp[1] += 1;
            }
        }
        if (result[1] < temp[1]) {
            result = temp;
        }
        temp[0] = arr[j + 1];
    }
    console.log('The most frequent number is: ', result[0]);
}

findResult([3, 1, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
findResult([7, 5, 6, 7, 8, 9, 10, 12, 3, 5, 5]);
findResult([9, 10, 11, 10, 10, 7, 7, 7, 7, 7]);
findResult([10, 1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5]);

