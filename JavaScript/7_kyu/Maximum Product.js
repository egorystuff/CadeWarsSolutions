// Task
// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

function adjacentElementsProduct(array) {
  return Math.max(...array.slice(0, -1).map((num, i) => num * array[i + 1]));
}

function adjacentElementsProduct(array) {
  let maxResult = array[0] * array[1];

  for (let i = 1; i < array.length; i++) {
    if (maxResult < array[i] * array[i + 1]) {
      maxResult = array[i] * array[i + 1];
    }
  }

  return maxResult;
}
