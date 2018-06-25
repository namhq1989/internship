/*
Write a JavaScript program to remove a character at the specified position of a given string
and return the new string.
*/

function removeChar(str, charPoss) {
  const part1 = str.substring(0, charPoss);
  const part2 = str.substring(charPoss + 1, str.length);
  return (part1 + part2);
}

// Demo
console.log(removeChar('Visuals Studio Code', 6));
