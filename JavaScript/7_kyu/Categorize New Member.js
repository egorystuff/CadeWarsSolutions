// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

function openOrSenior(data) {
	let res = [];

	for (let i = 0; i < data.length; i++) {
		const arr = data[i];
		for (let j = 0; j < 1; j++) {
			if (arr[0] >= 55 && arr[1] > 7) res.push('Senior');
			else {
				res.push('Open');
			}
		}
	}

	return res;
}

let value = openOrSenior([
	[59, 12],
	[55, -1],
	[12, -2],
	[12, 12],
]);
console.log(value);
