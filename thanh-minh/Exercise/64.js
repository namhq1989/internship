/*
Write a JavaScript program to concatenate two strings and return the result.
If the length of the strings are not same then remove the characters from the longer string.
 */

function concatenate(str1, str2) {
  const min = Math.min(str1.length, str2.length);
  return str1.substring(str1.length - min) + str2.substring(str2.length - min);
}

// Demo
console.log(concatenate('msdsdmot', 'bay'));
console.log(concatenate('he', 'he'));
