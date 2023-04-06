// Write a function that removes the spaces from the string, then return the resultant string.

function noSpace(x) {
  return x.split(' ').join('');
}

// function noSpace(x) {
//   return x.replace(/ /g, '');
// }

let value = noSpace('     8 j 8   mBliB8g  imjB8B8  jl  B');
console.log(value);
