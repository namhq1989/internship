/**
 *Write a JavaScript program to swap the first and last elements of a given array of integers.
  The array length should be at least 1
 */
function swap(array) {
  [array[0], array[array.length - 1]] = [array[array.length - 1], array[0]];
  return array;
}
// Demo
console.log(swap([1, 3, 4, 5, 6]));
