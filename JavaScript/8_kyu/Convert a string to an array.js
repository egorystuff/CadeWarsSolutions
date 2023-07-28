// Write a function to split a string and convert it into an array of words.

function stringToArray(string) {
  let met = string.split(' ');
  return met;
}

let value = stringToArray('I love arrays they are my favorite');
console.log(value);
