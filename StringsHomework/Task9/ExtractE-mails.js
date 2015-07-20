function solve(input) {
    var index = 0,
        string = input.trim(),
        len = string.length,
        output = [],
        temp = '',
        inEmail = false;

    while (index < len) {
        if (inEmail === false && string.indexOf(' ', index) !== index) {
            temp = temp + string[index];

            if (string.indexOf('@', index) === index) {
                inEmail = true;
                index += 1;
            }

        }
        if (inEmail === false && string.indexOf(' ', index) == index) {
            temp = '';
        }

        if (inEmail === true && string.indexOf(' ', index) !== index) {
            temp = temp + string[index];
        }

        if (inEmail === true && string.indexOf(' ', index) === index || index === (len - 1) ) {
            inEmail = false;
            var newTemp = temp.replace(/,|!|>|<|;/gi, '');
            output = output.concat(newTemp);
            temp = '';
        }
        index += 1;
    }

    return output;
}

var text = 'sdabhikagathara@rediffmail.com, "assdsdf" <dsfassdfhsdfarkal@gmail.com>, "rodnsdfald ferdfnson" <rfernsdfson@gmal.com>, ' +
'"Affdmdol Gondfgale" <gyfanamosl@gmail.com>, "truform techno" <pidfpinfg@truformdftechnoproducts.com>, "NiTsdfeSh ThIdfsKaRe" ' +
'<nthfsskare@ysahoo.in>, "akasdfsh kasdfstla" <akashkatsdfsa@yahsdfsfoo.in>, "Bisdsdfamal Prakaasdsh" <bimsdaalprakash@live.com>,; ' +
'"milisdfsfnd ansdfasdfnsftwar" <dfdmilifsd.ensfdfcogndfdfatia@gmail.com>';

console.log('Original text: ' + text);
console.log('Output: ');
console.log(solve(text));
