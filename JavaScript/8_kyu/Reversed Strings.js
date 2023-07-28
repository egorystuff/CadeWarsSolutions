// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// arrow function

let solution = (str) => str.split('').reverse().join('');

// function solution(str) {
// 	return str.split("").reverse().join("");
// }
let value = solution('world');
console.log(value);
