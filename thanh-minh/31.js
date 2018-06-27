/*
Write a JavaScript program to find the largest of three given integers.
*/
function maxOfThree(a, b, c) {
  let max = 0;
  if (a > b) {
    max = a;
  } else {
    max = b;
  }
  if (c > max) {
    max = c;
  }
  return max;
}

// Demo
console.log(maxOfThree(10, 20, 30));
