// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).

function countBy(x, n) {
  return Array.from({ length: n }, (_, i) => x * (i + 1));
}

console.log(countBy(2, 5));
