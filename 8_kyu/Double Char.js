/*
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
Good Luck!
*/

function doubleChar(str) {
	let doubleCharRes = '';

	for (let i = 0; i < str.length; i++) {
		doubleCharRes += str[i] + str[i];
	}

	return doubleCharRes;
}

let value = doubleChar('abcd');

console.log(value);
