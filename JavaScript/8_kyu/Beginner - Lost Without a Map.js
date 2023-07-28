// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

function maps(x) {
  let arr = [];
  for (let i = 0; i < x.length; i++) {
    let element = x[i] * 2;
    arr.push(element);
  }
  return arr;
}

let value = maps([4, 1, 1, 1, 4]);
console.log(value);
