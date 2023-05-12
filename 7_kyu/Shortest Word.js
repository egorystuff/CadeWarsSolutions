// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {
	const arr = s.split(' ');

	arr.sort(function (a, b) {
		return a.length - b.length;
	});

	return arr[0].length;
}

let deepEqual = findShort('bitcoin take over the world maybe who knows perhaps');

let value = deepEqual;
console.log(value);
