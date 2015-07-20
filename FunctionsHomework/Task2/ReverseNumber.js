/**
 * Created by vanya on 6/2/2015.
 */

//254 -> 452
//123.45 -> 54.321

function findResult(num) {
    var i,
        len,
        str,
        result = '';

    str = num.toString();

    for (i = 0, len = str.length; i < len; i += 1) {
        result = result + str[len - i - 1];
    }
    console.log(num + ' --> ' + result);
}

function anotherSolution(number) {
    var arr = [];
    arr = number.toString().split('');
    arr.reverse();

    console.log(number + ' --> ' + arr.join(''));
}
console.log('First solution:')
findResult(254);
findResult(123.45);
findResult(0);

console.log();

console.log('Another solution (with arrays):')
anotherSolution(254);
anotherSolution(123.45);
anotherSolution(0);