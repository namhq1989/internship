/**
 *Write a JavaScript program to check if the first and
 last elements are equal of a given array of integers length 3.
 */
function firstLastSame(array) {
  if (array.length >= 3) {
    return array[0] === array[array.length - 1];
  }
  return false;
}

// Demo
console.log(firstLastSame([1, 2, 2, 5]));
console.log(firstLastSame([1, 2, 2, 5, 2, 1]));
console.log(firstLastSame([1, 2]));
