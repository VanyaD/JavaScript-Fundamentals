/**
 * Created by vanya on 5/27/2015.
 */

var n,
    i;

function printResult(n) {
    for (i = 1; i < n; i += 1) {
        if (!((i % 3 === 0) && (i % 7 === 0))) {
            console.log(i);
        }
    }
}

printResult(100);
