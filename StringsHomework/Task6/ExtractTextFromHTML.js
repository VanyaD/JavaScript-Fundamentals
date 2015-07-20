function solve(input) {
    var index = 0,
        inTag = false,
        output = [],
        string = input.trim(),//trim-ва whitespaces, tabs...
        len = string.length;

    while (index < len - 1) {
        if (string.indexOf('<', index) === index) {
            inTag = true;
            index += 1;
        }
        if (string.indexOf('</', index) === index) {
            inTag = true;
            index += 2;
        }
        if (string.indexOf('>', index) === index) {
            inTag = false;
            index += 1;
        }
        if (inTag === true) {
            index += 1;
        }
        if ((inTag === false && string.indexOf('<', index) !== index) && (inTag === false && string.indexOf('</', index) !== index)) {
            output = output + string[index];
            index += 1;
        }
    }
    return (output);
}

var someText = '             <html><head><title>Sample site</title></head><body><div>text<div>more text</div>and more...</div>in body</body></html>';
console.log(solve(someText));


