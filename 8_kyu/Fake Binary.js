// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x) {
  const res = [];

  for (let i = 0; i < x.length; i++) {
    if (x[i] < 5) {
      res.push('0');
    } else {
      res.push('1');
    }
  }
  return res.join('');
}

let value = fakeBin('45385593107843568');

console.log(value);