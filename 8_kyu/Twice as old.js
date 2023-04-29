// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

function twiceAsOld(dadYearsOld, sonYearsOld) {
	res = 0;

	if (dadYearsOld / sonYearsOld == 2) return res;
	if (sonYearsOld == 0) return dadYearsOld;
	if (dadYearsOld / sonYearsOld > 2) {
		while (dadYearsOld / sonYearsOld !== 2) {
			res++;
			dadYearsOld++;
			sonYearsOld++;
		}
	} else {
		while (dadYearsOld / sonYearsOld !== 2) {
			res++;
			dadYearsOld--;
			sonYearsOld--;
		}
	}

	return res;
}

let deepEqual = twiceAsOld(42, 0);

let value = deepEqual;
console.log(value);
