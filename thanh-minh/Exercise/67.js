/*
  Write a JavaScript program to create a new string from a given string,
   removing the first and last characters of the string if the first or last character are 'P'.
   Return the original string if the condition is not satisfied.
*/
function lastP(str) {
  let startpos = 0;
  let endpos = str.length;
  if (str.length > 0 && str.charAt(0) === 'P') {
    startpos = 1;
  }
  if (str.length > 1 && str.charAt(str.length - 1) === 'P') {
    endpos -= 1;
  }
  return str.substring(startpos, endpos);
}

// Demo
console.log(lastP('PopPopP'));
console.log(lastP('fsdfsf'));
