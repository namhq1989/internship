/**
 * Write a JavaScript program to check if 1 appears in first or last position of
 * a given array of integers.
 * The array length must be greater or equal to 1.
 */

function firstLast1(array) {
  if (array.length >= 1) {
    return array[0] === 1 || array[array.length - 1] === 1;
  }
  return false;
}

// Demo
console.log(firstLast1([1, 2, 4, 6]));
console.log(firstLast1([2, 2, 4, 1]));
console.log(firstLast1([2, 2, 4, 17]));
