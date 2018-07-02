/*
Write a JavaScript program to rotate the elements left of a given array of integers of length 3.
*/
function rotateArr(array) {
  return [array[2], array[1], array[0]];
}

// Demo
console.log(rotateArr([1, 3, 4]));
