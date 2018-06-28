/*
Write a JavaScript program to check from three given numbers (non negative integers)
that two or all of them have the same rightmost digit.
 */
function sameLastDigit(a, b, c) {
  return (a % 10 === b % 10 && b % 10 === c % 10);
}

// Demo
console.log(sameLastDigit(10, 20, 40));
console.log(sameLastDigit(11, 20, 24));
