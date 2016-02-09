/**
 * Created by vanya on 5/29/2015.
 */

var isFirst,
    arr1,
    arr2,
    i;

function compareArrays(array1, array2) {
    var minLen = Math.min(array1.length, array2.length);

    for (i = 0; i < minLen; i += 1) {
        var compare = array1[i].localeCompare(array2[i]);

        if (compare < 0) {
            isFirst = array1;
        }

        if (compare > 0) {
            isFirst = array2;
        }
    }

    if (isFirst === undefined && array1.length > array2.length) {
        console.log('The following array is first lexicographically: ', array1);
    }

    if (isFirst === undefined && array2.length > array1.length) {
        console.log('The following array is first lexicographically: ', array2);
    }

    if (isFirst === undefined && array1.length === array2.length) {
        console.log('The arrays contain equal characters.');
    } else {
        console.log ('The following array is first lexicographically: ', isFirst);
    }
}

compareArrays(['a', 'b', 'c'], ['a', 'b', 'c']);
compareArrays(['a', 'b', 'c'], ['d', 'e', 'f']);
compareArrays(['a', 'b', 'c'], ['a', 'b', 'c', 'd', 'e', 'f']);
compareArrays(['a', 'b', 'c', 'd', 'e', 'f'], ['a', 'b', 'c']);
compareArrays(['A', 'b', 'c'], ['a', 'b', 'c', 'd', 'e', 'f']);