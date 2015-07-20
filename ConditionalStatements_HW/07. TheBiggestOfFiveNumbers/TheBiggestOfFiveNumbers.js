//Problem 7. The biggest of five numbers

//Write a script that finds the greatest of given 5 variables.
//Use nested if statements.

function findTheGreatest(a, b, c, d, e) {
    var greatest = a;

    if (greatest < b) {
        greatest = b;      
    }
    if (greatest < c) {
        greatest = c;
    }
    if (greatest < d) {
        greatest = d
    }
    if (greatest < e) {
        greatest = e;
    }

    return greatest;
}

console.log(findTheGreatest(1, 5, 7, 9, 0));
console.log(findTheGreatest(-1, 5.5, 70, 9, 0));
console.log(findTheGreatest(1.5, -5, -700, 9, 0));
console.log(findTheGreatest(2, 18, 57, 9.9, 100.50));