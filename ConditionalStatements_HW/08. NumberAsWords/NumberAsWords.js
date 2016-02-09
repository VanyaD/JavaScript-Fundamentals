//Problem 8. Number as words
//Write a script that converts a number in the range [0…999] to words, corresponding to its English pronunciation.

function findResult(number) {
    var part1;
    var part2;
    var part3;
    
    switch (number) {
        case '20': return 'Twenty'; break;
        case '30': return 'Thirty'; break;
        case '40': return 'Fourty'; break;
        case '50': return 'Fifty'; break;
        case '60': return 'Sixty'; break;
        case '70': return 'Seventy'; break;
        case '80': return 'Eighty'; break;
        case '90': return 'Ninety'; break;
        case '100': return 'One hundred'; break;
        case '200': return 'Two hundred'; break;
        case '300': return 'Three hundred'; break;
        case '400': return 'Four hundred'; break;
        case '500': return 'Five hundred'; break;
        case '600': return 'Six hundred'; break;
        case '700': return 'Seven hundred'; break;
        case '800': return 'Eight hundred'; break;
        case '900': return 'Nine hundred'; break;
    }
    
    if (number < 20) {

        switch (number) {
            case '0': return 'Zero'; break;                
            case '1': return 'One'; break;
            case '2': return 'Two'; break;
            case '3': return 'Three'; break;
            case '4': return 'Four'; break;
            case '5': return 'Five'; break;
            case '6': return 'Six'; break;
            case '7': return 'Seven'; break;
            case '8': return 'Eight'; break;
            case '9': return 'Nine'; break;
            case '10': return 'Ten'; break;                
            case '11': return 'Eleven'; break;
            case '12': return 'Twelve'; break;
            case '13': return 'Thirdteen'; break;
            case '14': return 'Fourteen'; break;
            case '15': return 'Fifteen'; break;
            case '16': return 'Sixteen'; break;
            case '17': return 'Seventeen'; break;
            case '18': return 'Eightteen'; break;
            case '19': return 'Nineteen'; break;
            default: console.log('Not a number'); break;
        }
    }
    
    else if (number > 20 && number < 100) {
        
        switch (number.charAt(1)) {  
                  
            case '1': part1 = 'one';
                break;
            case '2': part1 = 'two';
                break;
            case '3': part1 = 'three';
                break;
            case '4': part1 = 'four';
                break;
            case '5': part1 = 'five';
                break;
            case '6': part1 = 'six';
                break;
            case '7': part1 = 'seven';
                break;
            case '8': part1 = 'eight';
                break;
            case '9': part1 = 'nine';
                break;
            default: console.log('Not a number');
                break;
        }
        
        if (number < 30) {
            var part2 = 'Twenty';
        }
        else if (number < 40) {
            part2 = 'Thirty';
        }
        else if (number < 50) {
            part2 = 'Fourty';
        }
        else if (number < 60) {
            part2 = 'Fifty';
        }
        else if (number < 70) {
            part2 = 'Sixty';
        }
        else if (number < 80) {
            part2 = 'Seventy';
        }
        else if (number < 90) {
            part2 = 'Eighty';
        }
        else if (number < 100) {
            part2 = 'Ninety';
        }

        return part2 + ' ' + part1;
    }   

    else if (number > 100 && number < 1000) {

        if (number < 200) {
            part3 = 'One hundred';
        }
        else if (number < 300) {
            part3 = 'Two hundred';
        }
        else if (number < 400) {
            part3 = 'Three hundred';
        }
        else if (number < 500) {
            part3 = 'Four hundred';
        }
        else if (number < 600) {
            part3 = 'Five hundred';
        }
        else if (number < 700) {
            part3 = 'Six hundred';
        }
        else if (number < 800) {
            part3 = 'Seven hundred';
        }
        else if (number < 900) {
            part3 = 'Eight hundred';
        }
        else if (number < 1000) {
            part3 = 'Nine hundred';
        }

        if (number.charAt(1) == 1) {

            switch (number.charAt(2)) {

                case '0': return part3 + ' and ten'; break;
                case '1': return part3 + ' and eleven'; break;
                case '2': return part3 + ' and twelve'; break;
                case '3': return part3 + ' and thirdteen'; break;
                case '4': return part3 + ' and fourteen'; break;
                case '5': return part3 + ' and fifteen'; break;
                case '6': return part3 + ' and sixteen'; break;
                case '7': return part3 + ' and seventeen'; break;
                case '8': return part3 + ' and eighteen'; break;
                case '9': return part3 + ' and nineteen'; break;
            }
        }

        else if (number.charAt(1) == 0) {

            switch (number.charAt(2)) {

                case '1': return part3 + ' and one'; break;
                case '2': return part3 + ' and two'; break;
                case '3': return part3 + ' and three'; break;
                case '4': return part3 + ' and four'; break;
                case '5': return part3 + ' and five'; break;
                case '6': return part3 + ' and six'; break;
                case '7': return part3 + ' and seven'; break;
                case '8': return part3 + ' and eight'; break;
                case '9': return part3 + ' and nine'; break;
            }
        }

        else if (number.charAt(1) == 2) {
            var part2 = 'twenty';
        }
        else if (number.charAt(1) == 3) {
            part2 = 'thirty';
        }
        else if (number.charAt(1) == 4) {
            part2 = 'fourty';
        }
        else if (number.charAt(1) == 5) {
            part2 = 'fifty';
        }
        else if (number.charAt(1) == 6) {
            part2 = 'sixty';
        }
        else if (number.charAt(1) == 7) {
            part2 = 'seventy';
        }
        else if (number.charAt(1) == 8) {
            part2 = 'eighty';
        }
        else if (number.charAt(1) == 9) {
            part2 = 'ninety';
        }
        
        switch (number.charAt(2)) {        
            case '1': part1 = 'one'; break;
            case '2': part1 = 'two'; break;
            case '3': part1 = 'three'; break;
            case '4': part1 = 'four'; break;
            case '5': part1 = 'five'; break;
            case '6': part1 = 'six'; break;
            case '7': part1 = 'seven'; break;
            case '8': part1 = 'eight'; break;
            case '9': part1 = 'nine'; break;              
            case '0': part1 = 'zero'; break;
            default: console.log('Not a number'); break;
        }

        return part3 + ' ' + 'and' + ' ' + part2 + ' ' + part1;
    }    
}

console.log('0: ', findResult('0'));
console.log('9: ', findResult('9'));
console.log('10: ', findResult('10'));
console.log('12: ', findResult('12'));
console.log('19: ', findResult('19'));
console.log('25: ', findResult('25'));
console.log('98: ', findResult('98'));
console.log('273: ', findResult('273'));
console.log('400: ', findResult('400'));
console.log('501: ', findResult('501'));
console.log('617: ', findResult('617'));
console.log('711: ', findResult('711'));
console.log('999: ', findResult('999'));

