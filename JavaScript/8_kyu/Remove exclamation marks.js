// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
	return s.split('!').join('');
}

let deepEqual = removeExclamationMarks('Hello World!');

let value = deepEqual;
console.log(value);
