/**
 * Created by vanya on 5/27/2015.
 */

var min,
    max,
    arr = [],
    i = 0,
    prop;

function findResult(object) {
    for (prop in object) {
        arr[i] = prop;
        i += 1;
    }

    arr.sort();

    min = arr[0];
    max = arr[arr.length - 1];

    console.log(object);
    console.log('The smallest property: ', min);
    console.log('The largest property: ', max);
}

findResult(window);
findResult(document);
findResult(navigator);




