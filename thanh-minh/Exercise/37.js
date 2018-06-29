/*
    Write a JavaScript program to create new string with first 3 characters are in lower case.
    If the string length is less than 3 convert all the characters in upper case
*/
function upperLower(str) {
  if (str.length < 3) {
    return str.toUpperCase();
  }
  const frontPart = str.substring(0, 3).toLowerCase();
  const backPart = str.substring(3, str.length);
  return frontPart + backPart;
}

// Demo
console.log(upperLower('VISual Studio'));
console.log(upperLower('He'));
