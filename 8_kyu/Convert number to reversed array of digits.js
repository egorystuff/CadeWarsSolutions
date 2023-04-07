// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

function digitize(n) {
  let arr = Array.from(String(n), Number).reverse();

  return arr;
  //code here
}

let value = digitize(35231);
console.log(value);
