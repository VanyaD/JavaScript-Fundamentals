//Problem 4. Sort 3 numbers
//Sort 3 real values in descending order.
//Use nested if statements.
//Note: Don’t use arrays and the built-in sorting functionality.

function sort(a, b, c) {
    if (a > b && a > c) {
        if (b > c) {
            return a + ' ' + b + ' ' + c;
        }
        else {
            return a + ' ' + c + ' ' + b;
        }
    }
    else if (b > a && b > c) {
        if (a > c) {
            return b + ' ' + a + ' ' + c;
        }
        else {
            return b + ' ' + c + ' ' + a;
        }
    }
    else if (a > b) {
        return c + ' ' + a + ' ' + b;
    }
    else {
        return c + ' ' + b + ' ' + a;
    }
}

console.log('a = 5, b = 1, c = 2 --> ', sort(5, 1, 2));
console.log('a = -2, b = -2, c = 1 --> ', sort(-2, -2, 1));
console.log('a = -2, b = 4, c = 3 --> ', sort(-2, 4, 3));
console.log('a = 0, b = -2.5, c = 5 --> ', sort(0, -2.5, 5));
console.log('a = -1.1, b = -0.5, c = -0.1 --> ', sort(-1.1, -0.5, -0.1));
console.log('a = 10, b = 20, c = 30 --> ', sort(10, 20, 30));
console.log('a = 1, b = 1, c = 1 --> ', sort(1, 1, 1));