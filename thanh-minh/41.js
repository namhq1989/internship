/*
 Write a JavaScript program to check three given numbers,
 if the three numbers are same return 30
 otherwise return 40 and if two numbers are same return 20.
 */

function threeNumbers(a, b, c) {
  if (a === b && b === c) {
    return 30;
  }

  if (a === b || b === c || a === c) {
    return 40;
  }
  return 20;
}

// Demo
console.log(threeNumbers(10, 10, 10));
console.log(threeNumbers(10, 10, 20));
console.log(threeNumbers(10, 30, 20));
