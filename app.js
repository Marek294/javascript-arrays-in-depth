var family = ['Shane', 'Kittie', 'Sally', 'Isaac'];
var kittieExists = family.indexOf('Kittie') > -1;

console.log(kittieExists);

console.log(family.indexOf('Kittie', 2));

var shane = {
    name: 'Shane'
}

var sally = {
    name: 'Sally'
}

var kittie = {
    name: 'Kittie'
}

family = [shane, sally, kittie];

console.log(family.indexOf(kittie));

var whitelist = ['.css', '.js'];

var events = [
    {
        file: 'css/core.css'
    },
    {
        file: 'js/app.js'
    },
    {
        file: 'index.html'
    }
];

var filtered = events.filter(event => {
    var ext = require('path').extname(event.file);
    return whitelist.indexOf(ext) > -1;
})

console.log(filtered);