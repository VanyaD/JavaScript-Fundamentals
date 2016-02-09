function solve(string) {
    var arr = [],
        i = 0,
        len = 0,
        j = 0,
        len2 = 0,
        isPalindrome = true;

    arr = string.split(/[', !?;:.]/)
        .filter(function (word) {
            return !!word;
        });

    for (i = 0, len = arr.length; i < len; i += 1) {
        isPalindrome = true;
        var word = arr[i].toString();

        for (j = 0, len2 = word.length; j < len2; j += 1) {
            if (word[j] !== word[len2 - 1 - j]) {
                isPalindrome = false;
                break;
            }
        }

        if (isPalindrome === true) {
            console.log(word);
        }
    }
}

var text = 'aha ama, Lorem!  ipsum? ? dolor sittis';
console.log('Text: ' + text);
console.log('Palindromes: ');
solve(text);