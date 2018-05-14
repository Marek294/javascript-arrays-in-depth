let items = ['1', '2', '3', '4', '5'];

let mapped = items.map(item => {
    return Number(item);
})

console.log(mapped);

items = ["Shane", "Sally"];
mapped = items.map(firstName => { 
    return { firstName }
});

console.log(mapped);

items = [
    {
        firstName: 'Shane',
        lastName: 'Osbourne'
    },
    {
        firstName: 'Sally',
        lastName: 'Osbourne'
    }
];

mapped.map = items.map(x => {
    return {
        firstName: x.firstName,
        lastName: x.lastName,
        fullName: x.firstName + ' ' + x.lastName
    }
});

console.log(mapped);

items = [
    {
        active: true,
        firstname: 'Shane',
        lastname: 'Osbourne'
    },
    {
        active: true,
        firstname: 'Sally',
        lastname: 'Osbourne'
    },
    {
        active: false,
        firstname: 'Ben',
        lastname: 'Barker'
    }
];

mapped = items
    .filter(x => x.active)
    .map(x => x.firstname);

function createHtmlList(items) {
    const listElements = items.map(x => ` <li>${x}</li>`).join('');
    return `<ul>${listElements}</ul>`;
}

console.log(createHtmlList(mapped))