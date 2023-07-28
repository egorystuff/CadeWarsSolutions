// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(arr) {
  const mas = Array.from(String(arr), Number);
  let res = mas.sort(sortNumber).join('');
  return Number(res);
}

function sortNumber(a, b) {
  if (a > b) return -1;
  if (a == b) return 0;
  if (a < b) return 1;
}

let value = descendingOrder(42145);
console.log(value);
