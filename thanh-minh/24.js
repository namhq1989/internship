/*
Write a JavaScript program to create a new string from a given string with
the first character of the given string added at the front and back
*/

function frontBack(str) {
  const first = str.substring(0, 1);
  return (first + str + first);
}

// Demo
console.log(frontBack('|Visual|'));
