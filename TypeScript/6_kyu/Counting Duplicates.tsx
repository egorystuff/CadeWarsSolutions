// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

export function duplicateCount(text: string): number {
  let newObj: any = {};
  let count: number = 0;

  for (let i of text) {
    i = i.toLowerCase();
    if (!newObj[i]) {
      newObj[i] = 1;
    } else {
      newObj[i]++;
    }
  }

  for (let i in newObj) {
    if (newObj[i] > 1) count++;
  }

  return count;
}

// tests

// describe("example", function () {
//   it("test", function () {
//     assert.equal(duplicateCount(""), 0);
//     assert.equal(duplicateCount("abcde"), 0);
//     assert.equal(duplicateCount("aabbcde"), 2);
//     assert.equal(duplicateCount("aabBcde"), 2, "should ignore case");
//     assert.equal(duplicateCount("Indivisibility"), 1);
//     assert.equal(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent");
//   });
// });
