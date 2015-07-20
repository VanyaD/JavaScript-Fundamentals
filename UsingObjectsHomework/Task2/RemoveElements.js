
Array.prototype.removeElements = function (value) {
    var i,
        len;

    for (i = 0, len = this.length; i < len; i += 1) {
        if (this[i] === value) {
            this.splice(i, 1);
            i -= 1;
            len -= 1;
        }
    }
}

var myArr = [1, 2, 5, 3, 4, 4, 4, 5];
console.log('Original array: ' + myArr);
myArr.removeElements(5);
console.log('Value to be removed: 5');
console.log('Updated array; ' + myArr);


