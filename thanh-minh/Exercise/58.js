/*
Write a JavaScript program to create a new string of 4 copies
of the last 3 characters of a given original string.
The length of the given string must be 3 and above.
*/

function stringCopiesLast3(str) {
  if (str.length <= 3) {
    return false;
  }
  const result = str.substring(str.length - 3);
  return result + result + result;
}

// demo
console.log(stringCopiesLast3('thanhminh'));
