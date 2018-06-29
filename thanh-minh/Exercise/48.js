/*
Write a JavaScript program to reverse a given string.
*/

function stringReverse(str) {
  return str.split('').reverse().join('');
}

// Demo
console.log(stringReverse('olleh'));
