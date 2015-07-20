function createPerson(fname, lname, age, gender) {
    return {
        firstName: fname,
        lastName: lname,
        age: age,
        gender: gender
    };
}

function createManyPeople(count) {
    count = count || 10;

    var fNames = ['Ivan', 'George', 'Martin', 'Dobri', 'Slavi', 'Penka', 'Gergana', 'Slava', 'Nikita', 'Atanaska', 'Ivan', 'George', 'Martin', 'Dobri', 'Slavi', 'Penka', 'Gergana', 'Slava', 'Nikita', 'Atanaska'];
    var lNames = ['Ivanov', 'Georgiev', 'Martinov', 'Dobrev', 'Slavov', 'Georgieva', 'Petrova', 'Ivanova', 'Kerandjieva', 'Petrova', 'Ivanov', 'Georgiev', 'Martinov', 'Dobrev', 'Slavov', 'Georgieva', 'Petrova', 'Ivanova', 'Kerandjieva', 'Petrova' ];
    var gender = ['male', 'male', 'male', 'male', 'male', 'female', 'female', 'female', 'female', 'female'];
    var ages = [10, 20, 30, 40, 50, 25, 12, 80, 19, 35];

    var people = [],
        fname,
        lname,
        age,
        gender,
        i;

    for (i = 0; i < count; i += 1) {
        people.push(createPerson(fNames[i], lNames[i], ages[i], gender[i]));
    }
    return people;
}

console.log(createManyPeople(10));

