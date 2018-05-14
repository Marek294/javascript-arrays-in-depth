const items = ['01', '02', '04', '05'];
const result = items.every(x => typeof x === 'string');

console.log(result);

const fields = [
    {
        field: 'email',
        value: 'shane@example.com',
        errors: []
    },
    {
        field: 'name',
        value: '',
        errors: ['No name provided']
    }
];

const isValid = fields.every(x => x.errors.length === 0)

console.log(isValid);

const videos = [
    {
        title: 'Array methods in depth: concat',
        length: 310,
        viewed: 310
    },
    {
        title: 'Array methods in depth: join',
        length: 420,
        viewed: 360
    }
];

function complete(x) {
    return x.viewed === x.length;
}

const isComplete = videos.every(complete);
const completed = videos.filter(complete);

console.log(isComplete);
console.log(completed);