// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

// Examples
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

function comp(array1, array2) {
  if (array1 === null || array2 === null || array1.length !== array2.length) {
    return false;
  }

  const sortArr1 = array1.sort((a, b) => a - b);
  const sortArr2 = array2.sort((a, b) => a - b);

  if (sortArr1.length === sortArr2.length) {
    for (let i = 0; i < sortArr1.length; i++) {
      if (sortArr1[i] * sortArr1[i] !== sortArr2[i]) {
        return false;
      }
    }
    return true;
  }
}

let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
let a2 = [231, 14641, 20736, 361, 25921, 361, 20736, 361];
console.log(comp(a1, a2));

//=======================================================================

function comp(array1, array2) {
  if (array1 === null || array2 === null || array1.length !== array2.length) {
    return false;
  }

  const sortArr1 = array1.sort((a, b) => a - b).map((v) => v * v);
  const sortArr2 = array2.sort((a, b) => a - b);

  return sortArr1.every((v, i) => v === sortArr2[i]);
}
