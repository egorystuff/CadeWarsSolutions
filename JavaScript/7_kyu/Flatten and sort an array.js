// Challenge:

// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

"use strict";

function flattenAndSort(array) {
  return array.flat().sort((a, b) => a - b);
}
