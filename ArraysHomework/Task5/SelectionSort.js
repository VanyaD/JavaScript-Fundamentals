/**
 * Created by vanya on 5/29/2015.
 */

    var resultArr = [],
        min,
        len,
        i,
        j;

function sortArray(array) {
    min = Number.MAX_VALUE;
    len = array.length;
    for (j = 0; j < len; j += 1) {
        for (i = 0; i < len; i += 1) {
            if (min > array[i]) {
                min = array[i];
            }
        }
        resultArr[j] = min;
        var index = array.indexOf(min);
        delete array[index];
        min = Number.MAX_VALUE;
    }
    console.log(resultArr);
}

sortArray([-50, 3.5, 1000, 100, -55555]);
sortArray([-5, 2, 8, 10, 8, 100]);
sortArray([5, 10, 100, 12, -10, 2]);