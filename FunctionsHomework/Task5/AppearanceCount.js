/**
 * Created by vanya on 6/2/2015.
 */

function findResult(arr, num) {
    var i,
        len,
        count = 0;

    arr = arr || [];
    num = num - 0;

    for (i = 0, len = arr.length; i < len; i += 1) {
        if (arr[i] === num) {
            count += 1;
        }
    }

    return count;
}

function printResult(arr, num) {

    console.log('Array: ' + arr);
    console.log('Searched number: ' + num);
    console.log('Count: ' + findResult(arr, num));
}

function testResult(expectedResult, calculatedResult) {
    if (expectedResult === calculatedResult) {
        return console.log('Result from test function: answer is correct' + '\n' + '-----------------------');
    } else {
        return console.log('Result from test function: incorrect answer' + '\n' + '-----------------------');
    }
}

printResult([5, 10, 12, 5, 8, 5, 5, 15], 5);
testResult(4, findResult([5, 10, 12, 5, 8, 5, 5, 15], 5));

printResult([0, 0, 0, 0], 1);
testResult(0, findResult([0, 0, 0, 0], 1));
