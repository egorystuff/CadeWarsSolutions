// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

function XO(str) {
	let sumX = [];
	let sumO = [];

	for (let i = 0; i < str.length; i++) {
		if (str[i].toLowerCase() === 'x') {
			sumX.push(str[i].toLowerCase());
		} else if (str[i].toLowerCase() === 'o') {
			sumO.push(str[i].toLowerCase());
		} else {
			continue;
		}
	}

	if (sumX.length == sumO.length) return true;

	return false;
}

let value = XO('xxOo');
console.log(value);
