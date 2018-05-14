var person = { name: 'Shane' };
var items = [1, person];
var copy = items.slice();

copy[1].name = 'Sally';

console.log(items, copy);

items = [1, 2, 3, 4, 5, 6, 7, 8];
copy = items.slice(1, -1);

console.log(copy);

var person = {
    name: 'shane-osbourne'
};

var filters = {
    'deslugify': x => x.replace('-', ' '),
    'uppercase': x => x.toUpperCase()
}

var input = 'name | deslugify | uppercase';

var sections = input.split('|').map(x => x.trim());
var ref = person[sections[0]];
var output = sections.slice(1)
    .reduce((prev, next) => {
        if(filters[next]) {
            return filters[next].call(null, prev);
        }
        return prev;
    }, ref);

console.log(output);