/**
 * Created by vanya on 6/2/2015.
 */

function findResult(num) {
    var str = num.toString();

    switch (str[str.length - 1]){
        case '0': return str + ' --> last digit = zero'; break;
        case '1': return str + ' --> last digit = one'; break;
        case '2': return str + ' --> last digit = two'; break;
        case '3': return str + ' --> last digit = three'; break;
        case '4': return str + ' --> last digit = four'; break;
        case '5': return str + ' --> last digit = five'; break;
        case '6': return str + ' --> last digit = six'; break;
        case '7': return str + ' --> last digit = seven'; break;
        case '8': return str + ' --> last digit = eight'; break;
        case '9': return str + ' --> last digit = nine'; break;
        default: return 'not a number';
    }
}

console.log(findResult(5111));
console.log(findResult(256));
console.log(findResult(15899));
console.log(findResult(0));