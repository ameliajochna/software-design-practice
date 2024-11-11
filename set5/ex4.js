const fs = require('fs');
const filePath = './example.txt';
fs.readFile(filePath, 'utf-8', function read(err, data) {
    if (err) {
        throw err;
    }
    const content = data;
    console.log(content);
});