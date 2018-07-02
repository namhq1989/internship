/*
Write a JavaScript program to create a new string using the first and last n characters
from a given sting. The string length must be greater or equal to n.
*/
function createString(str, n) {
  if (str.length >= n) {
    const first = str.substring(0, n);
    const last = str.substring(str.length - n);
    return first + last;
  }
  return false;
}

// Demo
console.log(createString('Visual Code', 2));
console.log(createString('sf', 3));
