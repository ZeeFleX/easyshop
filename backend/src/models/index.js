const path = require('path');
const fs = require('fs');

const directoryPath = path.join(__dirname, './');

const models = [];
const files = fs.readdirSync(directoryPath);

files.forEach(fileName => {
    if(fileName !== 'index.js') {
        const model = require('./' + fileName)
        models.push(model)
    }
});

module.exports = models;