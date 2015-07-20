
function reverseString(string) {
    var i,
        len,
        result = ''; // когато не си дефинирам от какъв тип ми е променливата, първоначално в цикъла тя има стойност undefined (да го запомня)!!!

    for (i = 0, len = string.length; i < len; i += 1) {
        result += string[len - 1 - i];
    }
    return result;
}

var str = 'abc';
console.log(reverseString(str));
