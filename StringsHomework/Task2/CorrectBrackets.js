
function check(string) {
   var i,
       len,
       input = string,
       isCorrect = true,
       openingBrackets,
       closingBrackets;

    openingBrackets = input.match(/\(/g).length;
    closingBrackets = input.match(/\)/g).length;

    if (openingBrackets !== closingBrackets){
        isCorrect = false;
        return console.log('Brackets are correct --> ' + isCorrect);
    }

    if(input[0] === ')' || input[input.length - 1] === '(') {
        isCorrect = false;
        return console.log('Brackets are correct --> ' + isCorrect);
    }

    for (i = 0, len = input.length; i < len; i += 1){
        if ((input[i] === '(') && (input[i + 1] === '+' ||
            input[i + 1] === '-' || input[i + 1] === '*' ||
            input[i + 1] === '/' || input[i + 1] === '%')) {
            isCorrect = false;
            return console.log('Brackets are correct --> ' + isCorrect);
        }
        if (input[i] === '(' && input[i + 1] === ')') {
            isCorrect = false;
            return console.log('Brackets are correct --> ' + isCorrect);
        }
    }
    console.log('Brackets are correct --> ' + isCorrect);
}

check('a((a+b)/5-d)');
check('a((a+b))/5-d)');
check('a()a+b))/5-d)');
check(')a((a+b))(/5-d)(');
