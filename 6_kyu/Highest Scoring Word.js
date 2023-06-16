// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x) {
	let arr = x.split(' ');

	let res = [];

	for (let i = 0; i < arr.length; i++) {
		let newArr = arr[i];
		let sum = 0;
		for (let j = 0; j < newArr.length; j++) {
			sum += newArr[j].charCodeAt() - 96;
		}
		res.push(sum);
	}

	let maxValue = Math.max.apply(null, res);

	let index = res.indexOf(maxValue);
	return arr[index];

	// return arr[0].split('').length;

	// return arr[0].charCodeAt() - 96;
}

let value = high('take me to semynak');
console.log(value);
