function createPerson(fname, lname, age, gender) {
    return {
        firstName: fname,
        lastName: lname,
        age: age
    };
}

var person1 = createPerson('Ivan', 'Ivanov', 15);
var person2 = createPerson('Ivan', 'Ivanov', 20);
var person3 = createPerson('Ivan', 'Ivanov', 18);
var person4 = createPerson('Ivan', 'Ivanov', 18);

var people = [person1, person2, person3, person4];
console.log(people);

var result = people.every(function(people){
    return people.age >= 18;
})

console.log('-------------------------------------------------------');
console.log('All people in the array are older than or 18 years old: ' + result);
