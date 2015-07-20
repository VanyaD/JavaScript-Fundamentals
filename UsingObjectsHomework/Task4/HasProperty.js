/**
 * Created by vanya on 6/3/2015.
 */

function hasProperty(obj, propertyName) {
    var prop,
        hasProp = false;

    for (prop in obj) {
        if (prop === propertyName) {
            hasProp = true;
        }
    }

    return hasProp;
}

var prop,
    result,
    personGosho = {
        fName: 'Gosho',
        lName: 'Petrov',
        age: 35
    };

console.log(personGosho);
result = hasProperty(personGosho, 'fName');
console.log('property "fName" exists --> ' + result);
result = hasProperty(personGosho, 'length');
console.log('property "length" exists --> ' + result);


