/**
 * Created by vanya on 6/2/2015.
 */

function findResult(input, searchedWord, caseInsensitive) {
    var inputStr,
        word,
        arr,
        i,
        len,
        count = 0;

    switch (arguments.length) {
        case 2: inputStr = input.toString(); console.log('Case-sensitive search'); break;
        case 3: inputStr = input.toString().toLowerCase(); searchedWord.toString().toLowerCase(); console.log('Case-insensitive search'); break;
    }

    for (i = 0; i < inputStr.length; i += 1) {
        if (inputStr[i] === ',' || inputStr[i] === '?' || inputStr[i] === '.' ) {
            inputStr = inputStr.replace(inputStr[i], '');
        }
    }

    word = searchedWord.toString();
    arr = inputStr.split([' ']);

    for (i = 0, len = arr.length; i < len; i += 1) {
        if (arr[i] === word) {
            count += 1;
        }
    }

    console.log('Text: ' + input);
    console.log('Searched word: ' + word);
    console.log('Occurrences: ' + count);
    console.log('--------------');
}

findResult('Hello, hello. How are you?', 'hello');
findResult('Hello, hello. How are you?', 'hello', true);
