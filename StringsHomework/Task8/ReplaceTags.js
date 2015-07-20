
function solve(input){
    var index = 0,
        string = input.trim(),
        len = string.length,
        output = [],
        inOpeningATag = false,
        inNormalState = true;

    while (index < len){
        if (string.indexOf('<a href="', index) === index){
            inOpeningATag = true;
            index += 9;
            output = output + '[URL= ';
        }
        if (string.indexOf('</a>', index) === index){
            output = output + '[/URL]';
            index += 4;
        }

        if (inOpeningATag === true && string.indexOf('>', index) === index){
            inOpeningATag = false;
            output = output + ']';
            index += 1;
        }
        else if(inOpeningATag === true){
            output = output + string[index];
            index += 1;
        }
        if(inOpeningATag !== true && index < len){
            output = output + string[index];
            index += 1;
        }
    }
    return output;
}
console.log('Input:');
console.log('<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>');
console.log('Output: ');
console.log(solve('<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>'));
