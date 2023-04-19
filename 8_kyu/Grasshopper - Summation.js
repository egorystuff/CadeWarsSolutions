// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example (Input -> Output):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

var summation = function (num) {
  i = 0;
  sum = 0;
  while (i < num) {
    i++;
    sum = sum + i;
  }
  return sum;
  // Code here
};

let strictEqual = summation(8);

let value = console.log(strictEqual);
