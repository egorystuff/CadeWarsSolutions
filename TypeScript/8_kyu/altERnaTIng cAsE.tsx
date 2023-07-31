// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

export function toAlternatingCase(s: string): string {
	let res: string = '';

	for (let char of s) {
		if (char.toUpperCase() === char) {
			res += char.toLowerCase();
		} else {
			res += char.toUpperCase();
		}
	}

	return res;
}
