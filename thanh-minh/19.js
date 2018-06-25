/*
Write a JavaScript program to check a given integer is within 20 of 100 or 400.
*/
function testhunderd(a) {
  return ((Math.abs(100 - a) <= 20) || (Math.abs(400 - a) <= 20));
}

// Demo
console.log(testhunderd(10));
console.log(testhunderd(90));
