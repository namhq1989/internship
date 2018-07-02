/*
Write a JavaScript program to create a string using
the middle three characters of a given string of odd length.
The string length must be greater or equal to three.
 */

function middleThree(str) {
  if (str.length >= 3) {
    if (str.length % 2 !== 0) {
      const mid = (str.length + 1) / 2;
      return str.slice(mid - 2, mid + 1);
    }
    return false;
  }
  return false;
}

// Demo
console.log(middleThree('mthnh'));
