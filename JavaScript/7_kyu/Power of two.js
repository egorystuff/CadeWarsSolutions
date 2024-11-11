// Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:

// a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.

// You may assume the input is always valid.

// Examples
// isPowerOfTwo(1024) // -> true
// isPowerOfTwo(4096) // -> true
// isPowerOfTwo(333)  // -> false
// Beware of certain edge cases - for example, 1 is a power of 2 since 2^0 = 1 and 0 is not a power of 2.

function isPowerOfTwo(n) {
  /*
  Определяет, является ли заданное неотрицательное целое число степенью двойки.

  Аргументы:
      n (число): Число для проверки.

  Возвращает:
      boolean: True, если число является степенью двойки, False в противном случае.
  */
  // Степень двойки может быть представлена как 2^n, где n - целое число.
  // Таким образом, мы можем использовать функцию Math.log2 для проверки, является ли логарифм числа по основанию 2 целым числом.
  return n > 0 && Math.log2(n) % 1 === 0;
}

console.log(isPowerOfTwo(1024)); // true
console.log(isPowerOfTwo(4096)); // true
console.log(isPowerOfTwo(333)); // false
