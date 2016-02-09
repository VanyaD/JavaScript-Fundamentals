/**
 * Created by vanya on 5/29/2015.
 */

var imin,
    imax,
    imid;

function findResult(array, key) {
    array.sort(function (a, b) {
        return a - b
    });

    console.log('Sorted array: ', array);
    console.log('Key: ', key);

    imin = 0;
    imax = (array.length) - 1;

    while (imax >= imin) {
        imid = Math.floor((imax + imin) / 2);

        if (key === array[imid]) {
            return console.log('Position: ' + imid + '\n----------------');
        } else if (key < array[imid]) {
            imax = imid - 1;
        } else if (key > array[imid]){
            imin = imid + 1;
        }
    }

    return console.log('Key not found');
}

findResult([10, 2, 8, 7, 19], 10);
findResult([10, 2, 8, 7, 19], 2);
findResult([10, 2, 8, 7, 19], 8);
findResult([10, 2, 8, 7, 19], 7);
findResult([10, 2, 8, 7, 19], 19);

