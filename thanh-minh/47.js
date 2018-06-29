/*
Write a JavaScript program to check if a number in the range 40..10000
inclusive presents in two number (in same range).
 */
function isRanger(a) {
  return (a >= 40 && a <= 10000);
}

// Demo
console.log(isRanger(10));
console.log(isRanger(8000));
