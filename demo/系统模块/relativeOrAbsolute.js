const fs = require('fs');
const path = require('path');

console.log(__dirname);
console.log(path.join(__dirname, 'path.js'));
fs.readFile(path.join(__dirname, 'path.js'), 'utf-8', (err, doc) => {
	console.log(err);
	console.log(doc);
})