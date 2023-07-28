// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

function makeNegative(num) {
	if (num > 0) return -num;
	return num;
}

let value = makeNegative(-42);
console.log(value);
