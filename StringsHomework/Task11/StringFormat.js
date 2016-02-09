function stringFormat(args) {
    var output = '',
        string = arguments[0],
        index = 0,
        len = string.length,
        inPlaceholder = false,
        argsCount = 1;

    while (index < len - 1) {
        if (string.indexOf('{', index) === index) {
            inPlaceholder = true;
            index += 1;

        }

        if (string.indexOf('}', index) === index) {
            inPlaceholder = false;
            index += 1;
        }

        if (inPlaceholder === true) {
            var temp = parseInt(string[index]) + 1;
            output = output + arguments[temp];
            index += 1;
        }

        if (inPlaceholder === false) {
            output = output + string[index];
            index += 1;
        }
    }

    return output;
}

console.log('Example 1:');
console.log("var str = stringFormat('Hello {0}!', 'Peter');");
console.log('Result: ');
console.log(stringFormat('Hello {0}!', 'Peter'));
console.log('------------------------------------------');
console.log('Example 2: ');
console.log("var frmt = '{0}, {1}, {0} text {2}';");
console.log("var str = stringFormat(frmt, 1, 'Pesho', 'Gosho');");
var frmt = '{0}, {1}, {0} text {2}';
console.log('Result: ');
console.log(stringFormat(frmt, 1, 'Pesho', 'Gosho'));

