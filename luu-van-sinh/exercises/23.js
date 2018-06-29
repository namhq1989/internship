/*
  create a new string from a given string changing the position of first and
  last characters. The string length must be greater than or equal to 1
*/

function changePositionOfFirstAndLastChar(str) {
  if (str.length <= 1) {
    return str
  }
  let length = str.length
  return str.charAt(length - 1) + str.substring(1, length - 1) + str.charAt(0);
}

// Example
console.log(changePositionOfFirstAndLastChar('Javascript'));