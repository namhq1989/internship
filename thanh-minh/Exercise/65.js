/*
 Write a JavaScript program to test if a string end with "Script".
 The string length must be greater or equal to 6.
 */
function endScript(str) {
  if (str.length >= 6) {
    if (str.substring(str.length - 6, str.length) === 'Script') {
      return true;
    }
    return false;
  }
  return false;
}

// Demo
console.log(endScript('CodeScript'));
console.log(endScript('visualCode'));
