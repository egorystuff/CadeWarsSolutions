// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

function compareNumbers(a, b) {
  return a - b;
}

function sumArray(array) {
  if (array === null || array === [] || array === undefined) return 0;

  const arr = array.sort(compareNumbers);
  arr.shift();
  arr.pop();

  let res = arr.reduce(function (sum, elem) {
    return sum + elem;
  }, 0);

  return res;
}

let deepEqual = sumArray(undefined);

let value = deepEqual;
console.log(value);
