var names = ['Shane', 'Alan', 'Osbourne'];

console.log(names.join(' '));

var help = [
    'Usage',
    '   foo-app <input'
];

if(process.argv[2] === 'help') {
    console.log(help.join('\n'));
}

var name = 'shane osbourne';

const upper = name
    .split(' ')
    .map(x => x.charAt(0).toUpperCase() + x.slice(1))
    .join(' ')

console.log(upper);