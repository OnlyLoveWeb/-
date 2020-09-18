const fs = require('fs');

fs.readFile('../模块导出/a.js', 'utf-8', (err, doc) => {
	console.log(err);
	console.log(doc);
})