/*
Write a JavaScript program to check if a string starts with 'Java' and false otherwise.
 */
function checkStr(str) {
  if (str.length < 4) {
    return false;
  }
  const front = str.substring(0, 4);
  if (front === 'Java') {
    return true;
  }
  return false;
}

// Demo
console.log(checkStr('Javascript'));
console.log(checkStr('Activites'));
