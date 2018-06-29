/*
Write a JavaScript program to check if the characters a and b are separated
by exactly 3 places anywhere (at least once) in a given string.
 */
function abCheck(str) {
  return (/a...b/).test(str) || (/b...a/).test(str);
}

// Demo
console.log(abCheck('Visual start'));
console.log(abCheck('acvvvvvvvbsffasds'));
