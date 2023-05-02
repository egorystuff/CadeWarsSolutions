// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x) {
	let sum = 0;

	for (let i = 0; i < x.length; i++) {
		sum = sum + Number(x[i]);
	}
	return sum;
}

let value = sumMix([9, 3, '7', '3']);
console.log(value);
