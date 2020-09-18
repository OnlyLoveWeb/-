const a = 'hello';
const fn = (m, n) => m + n;
//console.log(a);
//console.log(fn(2, 3));
exports.one = a;
exports.two = fn;

module.exports = {
	name: 'zhang'
}