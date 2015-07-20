function count(string, searched) {
    var i = 0,
        count = 0;

    var index = string.indexOf(searched);

    while (index >= 0) {
        count += 1;
        index = string.indexOf(searched, index + 1);
    }
    return count;
}
console.log("We are living in an yellow submarine. We don't have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.");
console.log("Count of occurrences of 'in': ");
console.log(count("We are living in an yellow submarine. We don't have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.", 'in'));