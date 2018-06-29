/*
 Write a JavaScript program to compute the absolute difference between a specified number and 19.
  Returns triple their absolute difference if the specified number is greater than 19
*/
function diffNum(n) {
  if (n <= 19) {
    return (19 - n);
  }
  return (n - 19) * 3;
}

// Demo
console.log(diffNum(10));
console.log(diffNum(12));
console.log(diffNum(19));
console.log(diffNum(22));
