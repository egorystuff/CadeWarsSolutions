// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.

function encrypt(text, n) {
  if (n <= 0 || text === "") return text;
  if (text === null) return null;
  if (text === "") return "";

  for (let i = 0; i < n; i++) {
    let odd = "";
    let even = "";
    for (let j = 0; j < text.length; j++) {
      if (j % 2 === 0) {
        even += text[j];
      } else {
        odd += text[j];
      }
    }
    text = odd + even;
  }

  return text;
}

function decrypt(encryptedText, n) {
  if (n <= 0 || encryptedText === "") return encryptedText;
  if (encryptedText === null) return null;
  if (encryptedText === "") return "";

  let newArr = encryptedText.split("");

  for (let i = 0; i < n; i++) {
    let updatedArr = [];

    let odd = newArr.slice(0, newArr.length / 2);
    let even = newArr.slice(newArr.length / 2);

    for (let j = 0; j < newArr.length / 2; j++) {
      if (j % 2 === 0) {
        updatedArr.push(even[j]);
        updatedArr.push(odd[j]);
      } else {
        updatedArr.push(even[j]);
        updatedArr.push(odd[j]);
      }
    }

    newArr = updatedArr.slice(0, encryptedText.length);
  }

  return newArr.slice(0, encryptedText.length).join("");
}
