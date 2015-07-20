
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
var person4 = createPerson('Ivanka', 'Ivanova', 10, 'female');

var people = [person1, person2, person3, person4];
console.log(people);

people.sort(function(first, second){
    return first.age < second.age;
});

console.log('-------------------------------------------------------');
console.log('The youngest man is: ');
console.log(people[people.length - 1]);


if (!Array.prototype.find) {
    Array.prototype.find = function (callback) {
        var i, len = this.length;
        for (i = 0; i < len; i += 1) {
            if (callback(this[i], i, this)) {
                return this[i];
            }
        }
    }
}



