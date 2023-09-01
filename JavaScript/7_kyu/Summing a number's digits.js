// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5

function sumDigits(number) {
  let arr = Array.from("" + number);

  if (arr[0] === "-") arr.shift();
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result += Number(arr[i]);
  }
  return result;
}

let result = sumDigits(-32);
console.log(result);
