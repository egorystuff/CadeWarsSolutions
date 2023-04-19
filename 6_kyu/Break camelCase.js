// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// complete the function
function solution(string) {
  let newString = '';

  for (let key of string) {
    if (key == key.toUpperCase()) {
      newString += ' ';
      newString += key;
    } else {
      newString += key;
    }
  }

  return newString;
}

let value = solution('camelCasing');
console.log(value);
