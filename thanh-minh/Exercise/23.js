/*
Write a JavaScript program to create a new string
from a given string changing the position of firstand last characters.
The string length must be greater than or equal to 1.
*/
function firstLast(str) {
  if (str.length <= 1) {
    return str;
  }
  const midStr = str.substring(1, str.length - 1);
  return (str.charAt(str.length - 1) + midStr + str.charAt(0));
}

// Demo
console.log(firstLast('$ I have a pen @'));
