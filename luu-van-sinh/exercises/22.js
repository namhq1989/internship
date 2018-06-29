/*
  remove a character at the specified position of a given string and
  return the new string.
*/

function removeAChracter(str, position) {
  return str.substring(0, position) + str.substring(position + 1, str.length)
}

// Example
console.log(removeAChracter('Input String', 2))