// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString(string) {
	let str = string.replace(/(0*)([0-9]+$)/, '');

	let len = string.length - str.length;
	var newString = string.slice(str.length) || '0';

	newString = (parseInt(newString) + 1).toString();

	while (newString.length < len) {
		newString = '0' + newString;
	}

	return str.concat(newString);
}

let value = incrementString('fo99obar99');
console.log(value);
