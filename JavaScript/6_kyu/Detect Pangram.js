// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// let alphabet = "abcdefghijklmnopqrstuvwxyz";
// let regex = /\s/g;
// let lowercase = s.toLowerCase().replace(regex, "");
// Переменная alphabet – это строка, которая содержит все буквы алфавита.

// Переменная regex — регулярное выражение. Шаблон \s, который здесь используется, ищет все пробелы в строке.

// В переменной lowercase для простоты проверки панграммы надо сделать строчными все буквы. Кроме того, удалить все пробелы в строке. Используя метод replace() с помощью регулярного выражения, все вхождения пробела будут заменены ничем, "".

// Далее следует перебрать строку с алфавитом, используя цикл for.

// Внутри оператора if используется indexOf(), чтобы найти индекс каждой буквы в алфавите в строке lowercase. Если indexOf не может найти букву, цикл завершится с помощью оператора return и вернёт not pangram. Если цикл for доходит до конца, это означает, что indexOf нашёл все буквы алфавита в нашей строке. Тогда функция вернёт pangram.

function isPangram(string) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let regex = /\s/gi;
  const lowercase = string.toLowerCase().replace(regex, '');

  for (let i = 0; i < alphabet.length; i++) {
    if (lowercase.indexOf(alphabet[i]) === -1) return false;
  }
  return true;
}

let value = isPangram('This is not a pangram.');
console.log(value);
