var path = require('path');
var hbs = require('hbs');
var fs = require('fs');

hbs.registerPartials(path.join(__dirname, '/views/partials/logos'));

