function deepCopy(obj) {
    var cloned = {};
    for (var prop in obj) {
        if (typeof obj[prop] === "object") {
            cloned[prop] = obj[prop];
            deepCopy(obj[prop]);
        } else {
            cloned[prop] = obj[prop];
        }
    }
    return cloned;
}

var student = {
    firstName: 'George',
    lastName: 'Gerogiev',
    marks: {
        math: '3',
        english: '4'
    }
};

var student2 = deepCopy(student);

    console.log(student);
    console.log(student.marks);
    console.log(student2);
    console.log(student2.marks);
