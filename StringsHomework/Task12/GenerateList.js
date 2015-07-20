function generateList(people, template) {
    var indexArray = 0,
        indexTemplateStr = 0,
        lenTemplate = template.length,
        len = people.length,
        output = '',
        result = '';

    while (indexArray < len) {
        result = template.replace('-{name}-', people[indexArray].name);
        result = result.replace('-{age}-', people[indexArray].age.toString());

        output = output + result;
        indexArray += 1;
        indexTemplateStr = 0;
    }
    return '<ul><li>' + output + '</ul>';
}

var people = [
    {name: 'Peter', age: 14},
    {name: 'Ivan', age: 20},
    {name: 'Marin', age: 30}];

var template = '<strong>-{name}-</strong> <span>-{age}-</span>';

console.log('Array: ', people);
console.log('Output: ');
console.log(generateList(people, template));
//peopleList = '<ul><li><strong>Peter</strong> <span>14</span></li><li>…</li>…</ul>'
