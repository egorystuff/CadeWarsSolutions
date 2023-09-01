// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

export function sumDigits(n: number): number {
  let arr = Array.from("" + n);
  let result = 0;

  if (arr[0] === "-") arr.shift();
  for (let i = 0; i < arr.length; i++) {
    result += Number(arr[i]);
  }
  return result;
}
