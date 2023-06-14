// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(array) {
	if (array.length == 0) return 0;

	let sum = array.reduce((a, b) => a + b, 0);

	return sum / array.length;
}

let value = findAverage([1, 2, 3]);
console.log(value);
