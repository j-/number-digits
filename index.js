const countDigits = require('count-digits');

const floor = Math.floor;
const pow = Math.pow;

module.exports = function numberDigits (x, base) {
	base = base || 10;
	const count = countDigits(x, base);
	const result = [];
	var digit;
	for (var i = count - 1; i >= 0; i--) {
		digit = floor(x / pow(base, i)) % base;
		result.push(digit);
	}
	return result;
};
