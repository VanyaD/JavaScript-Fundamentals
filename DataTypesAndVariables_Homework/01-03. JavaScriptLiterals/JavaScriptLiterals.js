// Problem 1. JavaScript literals
// Assign all the possible JavaScript literals to different variables.

// Problem 3. Typeof variables
// Try typeof on all variables you created.


// integer literals - in decimal, hexadeciaml, octal and binary format

var decimal1 = 5;
var decimal2 = -5;
var octal1 = 017;
var octal2 = -052;
var hex1 = 0xCC12;
var hex2 = -0x256B;
var binary = 01010001;

console.log('typeof', '5(dec): ', typeof decimal1);
console.log('typeof', '-5(dec): ', typeof decimal2);
console.log('typeof', '017(oct): ', typeof octal1);
console.log('typeof', '-052(oct): ', typeof octal2);
console.log('typeof', '0xCC12(hex): ', typeof hex1);
console.log('typeof', '-0x256B(hex): ', typeof hex2);
console.log('typeof', '01010001(bin): ', typeof hex2);


// floating-point literals

var float1 = 5.5;
var float2 = -5.5;
var float3 = -.015;

console.log('typeof', '5.5(float): ', typeof float1);
console.log('typeof', '-5.5(float): ', typeof float2);
console.log('typeof', '-.015(float): ', typeof float3);

// boolean literals

var boolTrue = true;
var boolFalse = false;

console.log(typeof boolTrue);
console.log(typeof boolFalse);

// string literals

var example1 = 'hello';
var example2 = '$';
var example3 = 'Здравей!';
var example4 = 'бисквити "Траяна"';
var example5 = "How're you?";

console.log('typeof', 'hello: ', typeof example1);
console.log('typeof', '$: ', typeof example2);
console.log('typeof', 'Здравей!: ', typeof example3);
console.log('typeof', 'бисквити "Траяна": ', typeof example4);
console.log('typeof', "How're you?: ", typeof example5);

// object literals

var person = { firstName: "Gosho", lastName: "Ivanov", age: 15 };

console.log('typeof', 'var person = { firstName: "Gosho", lastName: "Ivanov", age: 15 }: ', typeof person);

// array literals - all with four elements

var myArray1 = [1, 2, 3, 4];
var myArray2 = [1, , , 4];
var myArray3 = [, 2, 3, 4];
var myArray4 = ['green', 'yellow', 'blue', , ];
var myArray5 = ['green', 2, 3, , ];

console.log('typeof', 'var myArray1 = [1, 2, 3, 4]: ', typeof myArray1);
console.log('typeof', 'var myArray2 = [1, , , 4]: ', typeof myArray2);
console.log('typeof', 'var myArray3 = [, 2, 3, 4]: ', typeof myArray3);
console.log('typeof', 'var myArray4 = ["green", "yellow", "blue", , ]: ', typeof myArray4);
console.log('typeof', 'var myArray5 = ["green", 2, 3, , ]: ', typeof myArray5);
