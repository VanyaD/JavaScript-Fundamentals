
function findYoungestPerson(arrOfPeople) {
    var i,
        len,
        isYoungest = arrOfPeople[0].age,
        indexOfYoungest = 0;

    for (i = 0, len = arrOfPeople.length; i < len; i += 1) {
        if (arrOfPeople[i].age < isYoungest) {
            isYoungest = arrOfPeople[i];
            indexOfYoungest = i;
        }
    }

    return console.log('The youngest person is: ' + arrOfPeople[indexOfYoungest].fullName());
}

var people = [
    person1 = {
        firstName: 'Ivan',
        lastName: 'Ivanov',
        age: 30,
        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        }
    },
    person2 = {
        firstName: 'George',
        lastName: 'Georgiev',
        age: 31,
        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        }
    },
    person3 = {
        firstName: 'John',
        lastName: 'Ivanov',
        age: 19,
        fullName: function(){
            return this.firstName + ' ' + this.lastName;
        }
    },
    person4 = {
        firstName: 'Plamen',
        lastName: 'Georgiev',
        age: 5,
        fullName: function(){
            return this.firstName + ' ' + this.lastName;
        }
    }];

console.log(people);
console.log('------------------------------------------------------------');
findYoungestPerson(people);

