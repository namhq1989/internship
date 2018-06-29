/*
Write a JavaScript program to create a new string of
specified copies (positive number) of a given string
*/
function stringCopies(str, num) {
  if (num < 0) {
    return false;
  }
  return str.repeat(num);
}
// Demo
console.log(stringCopies('hello', 3));
