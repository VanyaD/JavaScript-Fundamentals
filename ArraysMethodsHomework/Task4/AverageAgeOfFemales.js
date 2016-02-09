
function calcAverage(people) {
    var women = people.filter(function (item, index) {
        return item.gender === 'female';
    });

    var count = 0;
    var sum = women.reduce(function (sum, item) {
        count += 1;
        return (sum + item.age);
    }, 0);

    console.log('Average age of all women: ' + sum / count);
}

function createPerson(fname, lname, age, gender) {
    return {
        firstName: fname,
        lastName: lname,
        age: age,
        gender: gender
    };
}

var person1 = createPerson('Ivan', 'Ivanov', 7, 'male');
var person2 = createPerson('Vasilka', 'Petrova', 20, 'female');
var person3 = createPerson('Mariika', 'Dimitrova', 50, 'female');
var person4 = createPerson('Ivanka', 'Ivanova', 20, 'female');

var people = [person1, person2, person3, person4];

console.log(people);
console.log('-------------------------------------------------------');
calcAverage(people);

