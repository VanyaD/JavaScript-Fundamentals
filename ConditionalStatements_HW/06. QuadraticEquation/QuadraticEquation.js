//Problem 6. Quadratic equation
//Write a script that reads the coefficients a, b and c of a quadratic equation ax2 + bx + c = 0 and solves it (prints its real roots).
//Calculates and prints its real roots.
//Note: Quadratic equations may have 0, 1 or 2 real roots.

var aAsString = prompt('Please enter coefficient a: ');
var bAsString = prompt('Please enter coefficient b: ');
var cAsString = prompt('Please enter coefficient c: ');

var a = aAsString * 1;
var b = bAsString * 1;
var c = cAsString * 1;

function findRoots(a, b, c) {
    var discriminant = (b * b) - (4 * a * c);
    var root1;
    var root2;

    if (discriminant > 0) {
        root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

        return 'x1 = ' + root1 + ' and x2 = ' + root2;
    }

    if (discriminant < 0) {
        return 'No real roots';
    }

    if (discriminant == 0) {
        root1 = -(b / (2 * a));

        return 'x1 = x2 = ' + root1;
    }
}

console.log('a = 2, b = 5, c = -3 --> ', findRoots(2, 5, -3));
console.log('a = -1, b = 3, c = 0 --> ', findRoots(-1, 3, 0));
console.log('a = -0.5, b = 4, c = -8 --> ', findRoots(-0.5, 4, -8));
console.log('a = 5, b = 2, c = 8 --> ', findRoots(5, 2, 8));