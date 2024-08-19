// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// If you like this Kata, please try:

function capitalize(s) {
  const arrString = s.split("");
  let result = [];

  result.push(
    arrString.map((c, i) => (i % 2 === 0 ? c.toUpperCase() : c)).join(""),
    arrString.map((c, i) => (i % 2 !== 0 ? c.toUpperCase() : c)).join(""),
  );

  return result;
}

console.log(capitalize("abcdef")); //['AbCdEf', 'aBcDeF']

// https://www.codewars.com/kata/59cfc000aeb2844d16000075
