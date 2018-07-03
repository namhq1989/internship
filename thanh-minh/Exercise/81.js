/**
 *Write a JavaScript program to add two digits of a given positive integer of length two.
 */
function addTwoDigits(num) {
  return ((num % 10) + Math.floor(num / 10));
}

// Demo
console.log(addTwoDigits(35));
