// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

function getSize(width, height, depth) {
  const area = width * height + width * depth + height * depth;

  return [2 * area, width * height * depth];
}
