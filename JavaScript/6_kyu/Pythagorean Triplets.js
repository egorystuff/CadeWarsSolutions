// Pythagorean Triples
// A Pythagorean triplet is a set of three numbers a, b, and c where a^2 + b^2 = c^2. In this Kata, you will be tasked with finding the Pythagorean triplets whose product is equal to n, the given argument to the function pythagorean_triplet.

// Your task
// In this Kata, you will be tasked with finding the Pythagorean triplets whose product is equal to n, the given argument to the function, where 0 < n < 10000000

// Examples
// One such triple is 3, 4, 5. For this challenge, you would be given the value 60 as the argument to your function, and then it would return the Pythagorean triplet in an array [3, 4, 5] which is returned in increasing order. 3^2 + 4^2 = 5^2 since 9 + 16 = 25 and then their product (3 * 4 * 5) is 60.

function pythagoreanTriplet(n) {
  const factors = [];
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      factors.push(i);
      if (i !== n / i) {
        factors.push(n / i);
      }
    }
  }
  for (let i = 0; i < factors.length; i++) {
    for (let j = i; j < factors.length; j++) {
      const a = factors[i];
      const b = factors[j];
      const c = Math.sqrt(a * a + b * b);
      if (c % 1 === 0 && a * b * c === n) {
        return [a, b, c];
      }
    }
  }
  return null;
}
