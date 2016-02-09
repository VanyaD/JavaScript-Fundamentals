function canFormTriangle(line1, line2, line3) {

    function calculateDistance(pointA, pointB) {
        var distance = Math.sqrt(
            Math.abs(pointB.x - pointA.x) * Math.abs(pointB.x - pointA.x) +
            Math.abs(pointB.y - pointA.y) * Math.abs(pointB.y - pointA.y));

        console.log('Line length: ' + distance);
        return distance;
    }

    var length1 = calculateDistance(line1.pointA, line1.pointB),
        length2 = calculateDistance(line2.pointA, line2.pointB),
        length3 = calculateDistance(line3.pointA, line3.pointB),
        longestLength;

    longestLength = Math.max(length1, length2, length3);

    if (longestLength < ((length1 + length2 + length3) - longestLength)) {
        return console.log('A triangle can be formed -- > true');
    } else return console.log('A triangle cannot be formed');
}

line1 = {pointA: {x: 5, y: 3}, pointB: {x: 1, y: 2}};
line2 = {pointA: {x: 10, y: 20}, pointB: {x: 20, y: 30}};
line3 = {pointA: {x: 5, y: 10}, pointB: {x: 10, y: 0}};

canFormTriangle(line1, line2, line3);