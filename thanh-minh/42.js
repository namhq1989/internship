/*
Write a JavaScript program to check if three given numbers (integers)
are increasing in strict mode and flag is "false",
however if "true" is false the numbers will in soft mode
*/

function numbersOder(x, y, z) {
  if (x < y && y < z) {
    return 'strict mode';
  } if (y < z) {
    return 'sofl mode';
  }
  return 'Undefined';
}

// Demo
console.log(numbersOder(1, 3, 4));
console.log(numbersOder(1, 1, 4));
console.log(numbersOder(50, 21, 15));
