// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name) {
  let str = name.split(' ');
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      arr += str[i].slice(0, 1).toUpperCase() + `${'.'}`;
    } else {
      arr += str[i].slice(0, 1).toUpperCase();
    }
  }
  return arr;
}

let value = abbrevName('sam yarris');
console.log(value);
