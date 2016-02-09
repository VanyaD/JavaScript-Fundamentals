function solve(string) {
    var index = 0,
        output = [],
        len = string.length,
        inUpCase = false,
        inLowCase = false,
        inMixCase = false;

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    //loops char by char till the end of the string
    while (index < len) {

    //conditions for getting IN the possible states
        if (string.indexOf('<mixcase>', index) === index) {
            inMixCase = true;
            index += 9;
        }
        if (string.indexOf('<lowcase>', index) === index) {
            inLowCase = true;
            index += 9;
        }
        if (string.indexOf('<upcase>', index) === index) {
            inUpCase = true;
            index += 8;
        }
    //conditions for getting OUT of the possible states
        if (string.indexOf('</upcase>', index) === index) {
            inUpCase = false;
            index += 9;
        }
        if (string.indexOf('</mixcase>', index) === index) {
            inMixCase = false;
            index += 10; // tova e ok
        }
        if (string.indexOf('</lowcase>', index) === index) {
            inLowCase = false;
            index += 10;
        }
    //IN-state
        if (inUpCase === true) {
            output = output + string[index].toUpperCase();
            index += 1;
        }
        if (inLowCase === true) {
            output = output + string[index].toLowerCase();
            index += 1;
        }
        if (inMixCase === true) {
            var randomNum = getRandomInt(1, 10);
            if (randomNum > 5) {
                output = output + string[index].toLowerCase();
            }
            else {
                output = output + string[index].toUpperCase();
            }
            index += 1;
        }
    //IN-normal state
        if (inUpCase === false && inLowCase === false && inMixCase === false) {
            output = output + string[index];
            index += 1;
        }
    }

    return console.log(output);
}

solve("We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don't</mixcase> have <lowcase>anything</lowcase> else.");