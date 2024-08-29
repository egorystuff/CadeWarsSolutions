function position(letter) {
  const position = letter.toLowerCase().charCodeAt(0) - 96;
  return `Position of alphabet: ${position}`;
}
