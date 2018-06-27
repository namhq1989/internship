/*
Write a JavaScript program check if a given positive number is a multiple of 3 or a multiple of 7.
*/

function test37(a) {
  if (a % 3 === 0 || a % 7 === 0) {
    return true;
  }
  return false;
}

// Demo
console.log(test37(10));
console.log(test37(18));
