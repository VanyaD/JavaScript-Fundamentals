//Problem 3. The biggest of Three
//Write a script that finds the biggest of three numbers.
//Use nested if statements.

function findTheBiggest(a, b, c) {
    if (a > b) {
        if (a > c) {
            return a;
        } else {
            return c;
        }        
    } else {
        if (b > c) {
            return b;
        } else {
            return c;
        }
    }
}

console.log('a = 5, b = 2, c = 2 --> the biggest number is: ', findTheBiggest(5, 2, 2));
console.log('a = -2, b = -2, c = 1 --> the biggest number is: ', findTheBiggest(-2, -2, 1));
console.log('a = -2, b = 4, c = 3 --> the biggest number is: ', findTheBiggest(-2, 4, 3));
console.log('a = 0, b = -2.5, c = 5 --> the biggest number is: ', findTheBiggest(0, -2.5, 5));
console.log('a = -0.1, b = -0.5, c = -0.1 --> the biggest number is: ', findTheBiggest(-0.1, -0.5, -0.1));