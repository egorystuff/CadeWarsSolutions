// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending) {
  if (str === '' || ending === '') {
    return true;
  } else {
    if (str.slice(-ending.length) === ending) {
      return true;
    } else {
      return false;
    }
  }
}

let value = solution('abc', '');
console.log(value);
