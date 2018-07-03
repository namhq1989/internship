/*
Write a JavaScript program to test if a given array of integers contains 30 and 40 twice.
 The array length should be 0, 1, or 2
*/
function twice3040(array) {
  if (array.length < 3) {
    const num1 = array[0];
    const num2 = array[1];
    return ((num1 === 30 && num2 === 30) || (num2 === 40 && num1 === 40));
  }
  return false;
}

// Demo
console.log(twice3040([30, 30]));
console.log(twice3040([40, 40]));
console.log(twice3040([30, 50]));
console.log(twice3040([30, 50, 56, 78]));
