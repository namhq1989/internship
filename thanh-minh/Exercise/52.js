/*
Write a JavaScript program to convert the letters of a given string in alphabetical order.
*/
function alphabetSoup(str) {
  return str.split('').sort().join('');
}

// Demo
console.log(alphabetSoup('fdbca'));
