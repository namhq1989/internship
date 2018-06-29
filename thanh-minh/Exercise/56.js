/*
 Write a JavaScript program to divide two positive numbers and
 return a string with properly formatted commas
 */
function divideToString(a, b) {
  return (a / b).toLocaleString();
}

// demo
console.log(divideToString(1000, 33));
