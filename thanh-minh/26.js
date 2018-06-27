/*
Write a JavaScript program to create a new string from a given string taking the last 3 characters
 and added at both the front and back. The string length must be 3 or more.
*/

function frontBack3(str) {
  if (str.length >= 3) {
    const back = str.substring(str.length - 3);
    return back + str + back;
  }
  return false;
}

// Demo
console.log(frontBack3('Hello'));
