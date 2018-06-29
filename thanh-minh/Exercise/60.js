/*
Write a JavaScript program to create a new string without the first
and last character of a given string
*/
function stringNew(str) {
  if (str === null || str.length <= 2) {
    return false;
  }
  return str.substring(1, str.length - 1);
}
// Demo
console.log(stringNew('ahelloa'));
console.log(stringNew('a'));
console.log(stringNew(''));
