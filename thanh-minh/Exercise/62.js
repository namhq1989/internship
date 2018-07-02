/*
    Write a JavaScript program to move last three character to the start of a given string.
     The string length must be greater or equal to three.
*/
function move3Last(str) {
  if (str.length >= 3) {
    return str.slice(-3) + str.slice(0, -3);
  }
  return false;
}

// Demo
console.log(move3Last('mothaibabon'));
