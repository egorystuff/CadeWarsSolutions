// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// solution 1
//
// Первый вариант решения через цикл
//
//
// function arrayDiff(a, b) {
//   if (a.lenght === 0 || b.lenght === 0) {
//     return a;
//   }

//   const res = [];

//   for (let i = 0; i < a.length; i++) {
//     if (b.indexOf(a[i]) === -1) {
//       res.push(a[i]);
//     }
//   }

//   return res;
// }

// solution 2

function arrayDiff(a, b) {
  return a.filter((item) => b.indexOf(item) === -1);
}

let deepEqual = arrayDiff([1, 2], [1]);

let value = deepEqual;
console.log(value);
