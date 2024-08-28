// Write a function that returns the total surface area and volume of a trapezioidal prism as an array [area, volume], rounded to the nearest integer. A trapezoidal prism is shape that has trapezium (trapezoid) cross sections in one direction and rectangular cross sections in the other directions.

// a = top width of trapezium cross section, b = base width of trapezium cross section, h = height of cross section (distance from a to b), l = length of prism.

// Diagram of a trapeziodal prism:

function areaVolume(a, b, h, l) {
  const volume = ((a + b) * h * l) / 2;
  const area = (a + b) * (l + h) + Math.hypot(h, (b - a) / 2) * l * 2;
  return [Math.round(area), Math.round(volume)];
}
