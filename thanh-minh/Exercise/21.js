/*
Write a JavaScript program to create a new string adding "Py" in front of a given string.
 If the given string begins with "Py" then return the original string.
*/
function stringCheck(str) {
  if (str === null || str === undefined || str.substring(0, 2) === 'Py') {
    return str;
  }
  return `Py${str}`;
}

// Demo
console.log(stringCheck('PyPy'));
console.log(stringCheck('world'));
