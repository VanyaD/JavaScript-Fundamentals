
function solve(string){
   var output = string.replace(/ /g, '&nbsp;');

    console.log('Original text: ' + string);
    console.log('Output: ' + output);
}

solve('This is some text.');
