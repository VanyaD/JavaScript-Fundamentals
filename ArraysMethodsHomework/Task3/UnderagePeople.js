
function createPerson(fname, lname, age, gender) {
    return {
        firstName: fname,
        lastName: lname,
        age: age
    };
}
var person1 = createPerson('Ivan', 'Ivanov', 15);
var person2 = createPerson('Ivan', 'Ivanov', 20);
var person3 = createPerson('Ivan', 'Ivanov', 10);
var person4 = createPerson('Ivan', 'Ivanov', 18);

var people = [person1, person2, person3, person4];

var result = people.filter(function(item, index ){
    return item.age < 18;
});

console.log('All people: ');
console.log(people);
console.log('-------------------------------------------------------');
console.log('People younger than 18: ')

result.forEach(function(item){
    console.log(item);
});
