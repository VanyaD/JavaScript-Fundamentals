//Problem 2. Multiplication Sign
//Write a script that shows the sign(+, -or 0) of the product of three real numbers, without calculating it.
//Use a sequence of if operators.

function findResult(a, b, c) {
    
    if (a == 0 || b == 0 || c == 0) {
        return '0';
    }

    else if (a > 0 && b > 0 && c > 0) {
        return '+';
    }
    
    else if (a > 0 && b < 0 && c < 0) {
        return '+';
    }
    
    else if (a > 0 && b < 0 && c > 0) {
        return '-';
    }
    
    else if (a > 0 && b > 0 && c < 0) {
        return '-';
    }

    else if (a < 0 && b > 0 && c > 0) {
        return '-';
    }
    
    else if (a < 0 && b < 0 && c > 0) {
        return '+'
    }

    else if (a < 0 && b < 0 && c < 0) {
        return '-';
    }

    else if (a < 0 && b > 0 && c < 0) {
        return '+'
    }
}

console.log("a = 5, b = 2, c = 2 --> product's sign = ", findResult(5, 2, 2));
console.log("a = -2, b = -2, c = 1 --> product's sign = ", findResult(-2, -2, 1));
console.log("a = -2, b = 4, c = 3 --> product's sign = ", findResult(-2, 4, 3));
console.log("a = 0, b = -2.5, c = 4 --> product's sign = ", findResult(0, -2.5, 4));
console.log("a = -1, b = -0.5, c = -5.1 --> product's sign = ", findResult(-1, -0.5, -5.1));