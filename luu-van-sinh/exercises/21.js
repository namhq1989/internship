/*
  create a new string adding "Py" in front of a given string.
  If the given string begins with "Py" then return the original string.
*/

function beginWithPy(str) {
  if (str === null || str === undefined || str.substring(0, 2) === 'Py') {
    return str;
  }
  return 'Py' + str;
}

// Example
console.log(beginWithPy("Python"));
console.log(beginWithPy("thon"));