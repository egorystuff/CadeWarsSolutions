/*
The recursive version of multiply breaks down like this. In the base case, where n <= 0, it returns 1. For larger values of n, it calls itself, but with n - 1. That function call is evaluated in the same way, calling multiply again until n <= 0. At this point, all the functions can return and the original multiply returns the answer.

Note: Recursive functions must have a base case when they return without calling the function again (in this example, when n <= 0), otherwise they can never finish executing.

Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.
*/

// solution 1

function sum(arr, n) {
	if (n <= 0) return 0;
	else return sum(arr, n - 1) + arr[n - 1];
}

let value = sum([2, 3, 4, 5], 3);
console.log(value);

// solution 2

function multiply(arr, n) {
	if (n <= 0) {
		return 1;
	} else {
		return multiply(arr, n - 1) * arr[n - 1];
	}
}
