/**
 *Write a JavaScript program to reverse the elements of a given array of integers length 3.
 */
function reverse3(array) {
  return array.map((element, index, arr) => arr[(arr.length - 1) - index]);
}
// Demo
console.log(reverse3([1, 2, 3]));
console.log(reverse3([1, 2, 3, 4, 6]));
