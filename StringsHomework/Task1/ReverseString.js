
function reverseString(string) {
    var i,
        len,
        result = ''; // ������ �� �� ��������� �� ����� ��� �� � ������������, ������������ � ������ �� ��� �������� undefined (�� �� �������)!!!

    for (i = 0, len = string.length; i < len; i += 1) {
        result += string[len - 1 - i];
    }
    return result;
}

var str = 'abc';
console.log(reverseString(str));
