function solve(string) {
    var index = 0,
        len = string.length,
        protocol = '',
        server = '',
        resource = '',
        inProtocol = true,
        inServer = false,
        inResource = false;

    while (index < len) {
        if (string.indexOf('://', index) === index) {
            inServer = true;
            inProtocol = false;
            index += 3;
        }
        if (string.indexOf('/', 7) === index) {
            inResource = true;
            inServer = false;
            index += 1;
        }

        if (inProtocol === true) {
            protocol = protocol + string[index];
            index += 1;
        }
        if (inServer === true) {
            server = server + string[index];
            index += 1;
        }
        if (inResource === true) {
            resource = resource + string[index];
            index += 1;
        }
    }

    var result = {
        protocol: protocol,
        server: server,
        resource: resource
    }

    return result;
}
console.log('Email: http://telerikacademy.com/Courses/Courses/Details/239');
console.log('----------------------------------');
console.log('Result:');
console.log(solve('http://telerikacademy.com/Courses/Courses/Details/239'));
